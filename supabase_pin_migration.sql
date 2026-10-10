-- ==============================================================================
-- TIMO 1 — LƯU MÃ PIN DẠNG BĂM (bcrypt) + ĐĂNG NHẬP TỪ MỌI MÁY
-- Chạy 1 lần trong Supabase > SQL Editor > New query > dán toàn bộ > Run.
-- Chạy lại nhiều lần cũng an toàn (idempotent).
-- ==============================================================================

-- 0. Thư viện mã hoá (Supabase cài sẵn trong schema "extensions")
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

-- 1. Cột lưu PIN đã băm + chống dò PIN
ALTER TABLE public.timo_profiles ADD COLUMN IF NOT EXISTS pin_hash TEXT;
ALTER TABLE public.timo_profiles ADD COLUMN IF NOT EXISTS failed_attempts INT DEFAULT 0;
ALTER TABLE public.timo_profiles ADD COLUMN IF NOT EXISTS locked_until TIMESTAMPTZ;

-- 2. Ẩn pin_hash khỏi trình duyệt: anon chỉ được đọc/ghi các cột công khai.
--    (Chỉ 2 hàm SECURITY DEFINER bên dưới mới chạm được pin_hash.)
REVOKE SELECT, INSERT, UPDATE ON public.timo_profiles FROM anon, authenticated;
GRANT SELECT (id, kid_name, username, avatar, grade, created_at, updated_at)
  ON public.timo_profiles TO anon, authenticated;
GRANT INSERT (id, kid_name, username, avatar, grade, created_at, updated_at)
  ON public.timo_profiles TO anon, authenticated;
GRANT UPDATE (id, kid_name, username, avatar, grade, updated_at)
  ON public.timo_profiles TO anon, authenticated;

-- 3. ĐĂNG KÝ: tạo hồ sơ mới kèm PIN băm
--    - Tên đăng nhập đã có (của ID khác)          -> 'exists'
--    - Hồ sơ cùng ID đã có nhưng chưa có PIN      -> gắn PIN, 'ok'
CREATE OR REPLACE FUNCTION public.timo_register(
  p_id TEXT, p_username TEXT, p_kid_name TEXT, p_avatar TEXT, p_pin TEXT
) RETURNS JSON
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_user TEXT := lower(trim(coalesce(p_username, '')));
  v_row  public.timo_profiles%ROWTYPE;
BEGIN
  IF v_user = '' OR coalesce(p_id, '') = '' OR length(coalesce(p_pin, '')) < 3 THEN
    RETURN json_build_object('status', 'invalid');
  END IF;

  SELECT * INTO v_row FROM public.timo_profiles WHERE lower(username) = v_user LIMIT 1;
  IF FOUND THEN
    IF v_row.id = p_id AND v_row.pin_hash IS NULL THEN
      UPDATE public.timo_profiles
         SET pin_hash = crypt(p_pin, gen_salt('bf')), updated_at = now()
       WHERE id = p_id;
      RETURN json_build_object('status', 'ok');
    END IF;
    RETURN json_build_object('status', 'exists');
  END IF;

  INSERT INTO public.timo_profiles (id, kid_name, username, avatar, grade, pin_hash, updated_at)
  VALUES (p_id, coalesce(nullif(trim(p_kid_name), ''), 'Bé Lớp 1'), v_user,
          coalesce(p_avatar, '🦁'), 1, crypt(p_pin, gen_salt('bf')), now())
  ON CONFLICT (id) DO UPDATE
     SET username = EXCLUDED.username,
         pin_hash = coalesce(public.timo_profiles.pin_hash, EXCLUDED.pin_hash),
         updated_at = now();
  RETURN json_build_object('status', 'ok');
END $$;

-- 4. ĐĂNG NHẬP: kiểm tra PIN trên server, trả về hồ sơ + tiến độ
--    status: ok | claimed (hồ sơ cũ chưa có PIN -> nhận PIN lần này) |
--            wrong_pin | locked | not_found | invalid
CREATE OR REPLACE FUNCTION public.timo_login(p_username TEXT, p_pin TEXT)
RETURNS JSON
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_user   TEXT := lower(trim(coalesce(p_username, '')));
  v_p      public.timo_profiles%ROWTYPE;
  v_status TEXT;
  v_prog   JSON;
BEGIN
  IF v_user = '' OR length(coalesce(p_pin, '')) < 3 THEN
    RETURN json_build_object('status', 'invalid');
  END IF;

  SELECT * INTO v_p FROM public.timo_profiles WHERE lower(username) = v_user LIMIT 1;
  IF NOT FOUND THEN
    RETURN json_build_object('status', 'not_found');
  END IF;

  IF v_p.locked_until IS NOT NULL AND v_p.locked_until > now() THEN
    RETURN json_build_object('status', 'locked',
      'seconds', ceil(extract(epoch FROM v_p.locked_until - now())));
  END IF;

  IF v_p.pin_hash IS NULL THEN
    UPDATE public.timo_profiles
       SET pin_hash = crypt(p_pin, gen_salt('bf')), failed_attempts = 0,
           locked_until = NULL, updated_at = now()
     WHERE id = v_p.id;
    v_status := 'claimed';
  ELSIF (v_p.pin_hash LIKE '$2%' AND v_p.pin_hash = crypt(p_pin, v_p.pin_hash))
     OR (v_p.pin_hash NOT LIKE '$2%' AND v_p.pin_hash =
         encode(digest('timo:' || v_p.id || ':' || p_pin, 'sha256'), 'hex')) THEN
    -- Đúng PIN (kể cả mã băm SHA-256 kiểu cũ) -> nâng cấp lên bcrypt
    UPDATE public.timo_profiles
       SET failed_attempts = 0, locked_until = NULL,
           pin_hash = CASE WHEN pin_hash LIKE '$2%' THEN pin_hash
                           ELSE crypt(p_pin, gen_salt('bf')) END
     WHERE id = v_p.id;
    v_status := 'ok';
  ELSE
    -- Sai 5 lần liên tiếp -> khoá 5 phút
    UPDATE public.timo_profiles
       SET failed_attempts = coalesce(failed_attempts, 0) + 1,
           locked_until = CASE WHEN coalesce(failed_attempts, 0) + 1 >= 5
                               THEN now() + interval '5 minutes' END
     WHERE id = v_p.id;
    RETURN json_build_object('status', 'wrong_pin');
  END IF;

  SELECT to_json(pr) INTO v_prog FROM public.timo_progress pr WHERE pr.user_id = v_p.id;

  RETURN json_build_object(
    'status', v_status,
    'profile', json_build_object(
      'id', v_p.id, 'kid_name', v_p.kid_name, 'username', v_p.username,
      'avatar', v_p.avatar, 'grade', v_p.grade, 'created_at', v_p.created_at),
    'progress', v_prog);
END $$;

REVOKE ALL ON FUNCTION public.timo_register(TEXT, TEXT, TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.timo_login(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.timo_register(TEXT, TEXT, TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.timo_login(TEXT, TEXT) TO anon, authenticated;

-- Báo PostgREST nạp lại schema để thấy 2 hàm mới ngay
NOTIFY pgrst, 'reload schema';

-- ==============================================================================
-- DATABASE SCHEMA: TIMO 1 — LƯU TRỮ ĐIỂM SỐ & TIẾN ĐỘ HỌC TẬP CHO BÉ LỚP 1
-- Supabase Project URL: https://zidaconljcntuvxtqkxy.supabase.co
-- ==============================================================================
-- Hướng dẫn: Copy toàn bộ nội dung file này và dán vào Supabase SQL Editor rồi bấm "Run".

-- 1. BẢNG HỒ SƠ BÉ (timo_profiles)
CREATE TABLE IF NOT EXISTS public.timo_profiles (
  id TEXT PRIMARY KEY,                       -- UUID hoặc mã định danh bé (kid_...)
  kid_name TEXT NOT NULL,                   -- Tên bé (Ví dụ: Bé An, Bé Gia Hưng)
  username TEXT UNIQUE,                     -- Tên đăng nhập
  avatar TEXT DEFAULT '🦁',                 -- Biểu tượng Avatar ngộ nghĩnh
  grade INT DEFAULT 1,                      -- Lớp 1
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BẢNG TIẾN ĐỘ TỔNG QUÁT (timo_progress)
CREATE TABLE IF NOT EXISTS public.timo_progress (
  user_id TEXT PRIMARY KEY REFERENCES public.timo_profiles(id) ON DELETE CASCADE,
  xp INT DEFAULT 0,                         -- Tổng điểm kinh nghiệm XP
  stars INT DEFAULT 0,                      -- Tổng số ngôi sao đạt được
  level INT DEFAULT 1,                      -- Cấp độ (1: Tập sự -> 6: Đại hiệp TIMO)
  streak INT DEFAULT 1,                     -- Chuỗi ngày học liên tiếp
  completed_lessons JSONB DEFAULT '[]'::jsonb, -- Danh sách bài học đã hoàn thành
  topics_progress JSONB DEFAULT '{}'::jsonb,   -- Tiến độ theo 5 chủ đề
  badges JSONB DEFAULT '[]'::jsonb,            -- Danh sách huy hiệu đạt được
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BẢNG LƯU TRỮ ĐIỂM THI & LỊCH SỬ BÀI KIỂM TRA (timo_quiz_scores)
CREATE TABLE IF NOT EXISTS public.timo_quiz_scores (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT REFERENCES public.timo_profiles(id) ON DELETE CASCADE,
  kid_name TEXT,                            -- Tên bé khi làm bài
  quiz_type TEXT NOT NULL,                  -- 'lesson' (Bài học), 'practice' (Luyện tập), 'timo_challenge' (Thi thử TIMO), 'daily' (Thử thách ngày), 'review' (Ôn câu sai)
  topic TEXT,                               -- Chủ đề (Số học, Hình học, Logic, Số học nâng cao, Tổ hợp)
  lesson_id TEXT,                           -- Mã bài học (ví dụ: arith-lesson-1)
  lesson_title TEXT,                        -- Tên bài học (ví dụ: Cộng trong phạm vi 20)
  score INT NOT NULL,                       -- Số câu trả lời đúng (ví dụ: 5)
  total INT NOT NULL,                       -- Tổng số câu hỏi (ví dụ: 5)
  accuracy INT NOT NULL,                    -- Độ chính xác % (ví dụ: 100)
  stars_earned INT DEFAULT 1,               -- Số sao nhận được (1, 2, 3 sao)
  xp_earned INT DEFAULT 0,                  -- Điểm XP thưởng
  time_spent_seconds INT DEFAULT 0,         -- Thời gian làm bài (giây)
  answers_detail JSONB DEFAULT '[]'::jsonb, -- Chi tiết từng câu hỏi và đáp án của bé
  created_at TIMESTAMPTZ DEFAULT NOW()      -- Thời điểm nộp bài
);

-- Tạo View alias timo_quiz_history để tương thích
CREATE OR REPLACE VIEW public.timo_quiz_history AS
SELECT * FROM public.timo_quiz_scores;

-- 4. VIEW BẢNG XẾP HẠNG HỌC SINH (timo_leaderboard)
CREATE OR REPLACE VIEW public.timo_leaderboard AS
SELECT 
  p.id AS user_id,
  p.kid_name,
  p.avatar,
  p.grade,
  COALESCE(pr.xp, 0) AS xp,
  COALESCE(pr.stars, 0) AS stars,
  COALESCE(pr.level, 1) AS level,
  COALESCE(pr.streak, 1) AS streak,
  COALESCE(jsonb_array_length(pr.completed_lessons), 0) AS completed_lessons_count,
  pr.updated_at
FROM public.timo_profiles p
LEFT JOIN public.timo_progress pr ON p.id = pr.user_id
ORDER BY COALESCE(pr.xp, 0) DESC, COALESCE(pr.stars, 0) DESC;

-- 5. TẠO INDEXES TỐI ƯU TRUY VẤN
CREATE INDEX IF NOT EXISTS idx_quiz_scores_user ON public.timo_quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_created ON public.timo_quiz_scores(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_progress_xp ON public.timo_progress(xp DESC);

-- 6. BẬT BẢO MẬT ROW LEVEL SECURITY (RLS)
ALTER TABLE public.timo_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timo_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timo_quiz_scores ENABLE ROW LEVEL SECURITY;

-- Tạo các chính sách RLS cho phép đọc & ghi công khai an toàn cho ứng dụng học tập
DROP POLICY IF EXISTS "Public read profiles" ON public.timo_profiles;
CREATE POLICY "Public read profiles" ON public.timo_profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert profiles" ON public.timo_profiles;
CREATE POLICY "Public insert profiles" ON public.timo_profiles FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public update profiles" ON public.timo_profiles;
CREATE POLICY "Public update profiles" ON public.timo_profiles FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public read progress" ON public.timo_progress;
CREATE POLICY "Public read progress" ON public.timo_progress FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert progress" ON public.timo_progress;
CREATE POLICY "Public insert progress" ON public.timo_progress FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public update progress" ON public.timo_progress;
CREATE POLICY "Public update progress" ON public.timo_progress FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public read quiz_scores" ON public.timo_quiz_scores;
CREATE POLICY "Public read quiz_scores" ON public.timo_quiz_scores FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert quiz_scores" ON public.timo_quiz_scores;
CREATE POLICY "Public insert quiz_scores" ON public.timo_quiz_scores FOR INSERT WITH CHECK (true);

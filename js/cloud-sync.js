// =====================================================================
// cloud-sync.js — Đồng bộ 2 chiều Supabase <-> máy cho TIMO 1 Math Adventure
// Nạp SAU progress.js và supabase-client.js, TRƯỚC ui.js / app.js.
//
//  1. Tự kết nối Supabase bằng anon key cài sẵn (không cần nhập tay từng máy).
//  2. Đăng nhập: kiểm tra PIN trên server (hàm timo_login, PIN băm bcrypt),
//     tải hồ sơ + tiến độ từ cloud về máy bất kỳ.
//  3. Gộp tiến độ cloud + máy (giữ phần học được nhiều hơn), đẩy bản gộp lên lại.
//  4. Đăng ký: chặn trùng tên đăng nhập, lưu PIN băm lên cloud (timo_register).
//  Cần chạy file supabase_pin_migration.sql trên Supabase trước.
// =====================================================================
(function () {
  // Anon key là khoá CÔNG KHAI (được phép để trong code web); dữ liệu được bảo vệ bằng RLS.
  const TIMO_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZGFjb25samNudHV2eHRxa3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwOTY2OTksImV4cCI6MjEwNjY3MjY5OX0.HR8hSG_cvOVDUArqAVzltkkJDFYQA3WBeSUu3Zb64_A";

  const pm = window.progressManager;
  const svc = window.supabaseService;
  if (!pm || !svc) {
    console.warn("[cloud-sync] Thiếu progressManager hoặc supabaseService — bỏ qua.");
    return;
  }

  // ---------- 1. Kết nối ----------
  if (!svc.anonKey && TIMO_SUPABASE_ANON_KEY) {
    svc.updateConfig(svc.url || svc.defaultUrl, TIMO_SUPABASE_ANON_KEY);
  }

  let connecting = null;
  async function ensureOnline() {
    if (svc.client && svc.isOnline) return true;
    if (!svc.client) return false;
    if (!connecting) connecting = svc.checkConnection().finally(() => (connecting = null));
    try { return await connecting; } catch (e) { return false; }
  }

  const norm = u => (u || "").trim().toLowerCase();
  const PROFILE_COLS = "id,kid_name,username,avatar,grade,created_at,updated_at";

  // ---------- Gộp tiến độ ----------
  function uniq(arr) {
    const seen = new Set(); const out = [];
    for (const x of arr || []) {
      const k = typeof x === "object" ? JSON.stringify(x) : String(x);
      if (!seen.has(k)) { seen.add(k); out.push(x); }
    }
    return out;
  }

  function mergeCompleted(a, b) {
    const out = { ...(a || {}) };
    for (const [id, v] of Object.entries(b || {})) {
      const cur = out[id];
      if (!cur || ((v && v.stars) || 0) > (cur.stars || 0)) out[id] = v;
    }
    return out;
  }

  function mergeTopics(a, b) {
    const out = JSON.parse(JSON.stringify(a || {}));
    for (const [tid, tv] of Object.entries(b || {})) {
      if (!out[tid]) { out[tid] = tv; continue; }
      for (const [k, v] of Object.entries(tv || {})) {
        const cur = out[tid][k];
        if (typeof v === "number" && typeof cur === "number") out[tid][k] = Math.max(cur, v);
        else if (typeof v === "boolean") out[tid][k] = !!cur || v;
        else if (cur === undefined || cur === null) out[tid][k] = v;
      }
    }
    return out;
  }

  // Giữ phần "học được nhiều hơn" của mỗi bên
  function mergeProgress(local, cloud) {
    if (!cloud) return local;
    const m = { ...local };
    m.xp = Math.max(local.xp || 0, cloud.xp || 0);
    m.stars = Math.max(local.stars || 0, cloud.stars || 0);
    m.level = Math.max(local.level || 1, cloud.level || 1);
    m.streak = Math.max(local.streak || 1, cloud.streak || 1);
    m.timoBestScore = Math.max(local.timoBestScore || 0, cloud.timo_best_score || 0);
    m.completedLessons = mergeCompleted(local.completedLessons, cloud.completed_lessons);
    m.topicProgress = mergeTopics(local.topicProgress, cloud.topics_progress);
    m.badges = uniq([...(local.badges || []), ...(cloud.badges || [])]);
    m.answeredQuestions = uniq([...(local.answeredQuestions || []), ...(cloud.answered_questions || [])]);
    m.mistakes = (local.mistakes && local.mistakes.length) ? local.mistakes : (cloud.mistakes || []);
    return m;
  }

  function emptyProfile(cp) {
    return {
      id: cp.id,
      name: cp.kid_name || "Bé Lớp 1",
      username: cp.username || "",
      email: (cp.username || "").includes("@") ? cp.username : "",
      grade: cp.grade || 1,
      avatar: cp.avatar || "🦁",
      xp: 0, stars: 0, level: 1, streak: 1,
      createdAt: cp.created_at || new Date().toISOString(),
      lastActiveDate: new Date().toISOString().split("T")[0],
      dailyCompletedDate: null,
      completedLessons: {},
      topicProgress: pm.buildEmptyTopicProgress(),
      badges: [], mistakes: [], answeredQuestions: [], quizHistory: [],
      timoBestScore: 0
    };
  }

  async function fetchCloudProgress(userId) {
    const { data, error } = await svc.client
      .from("timo_progress").select("*").eq("user_id", userId).maybeSingle();
    if (error) { console.warn("[cloud-sync] Lỗi tải tiến độ:", error); return null; }
    return data;
  }

  async function findCloudProfile(username) {
    const { data, error } = await svc.client
      .from("timo_profiles").select(PROFILE_COLS).eq("username", username).limit(1);
    if (error || !data || !data.length) return null;
    return data[0];
  }

  // Đưa hồ sơ cloud vào máy (gộp với hồ sơ máy nếu có), đặt làm hồ sơ đang học
  async function adoptCloudProfile(cp, cloudProg, pin) {
    const uname = norm(cp.username);
    let local = pm.profiles[cp.id] ||
      Object.values(pm.profiles).find(p => norm(p.username) === uname) || null;

    // Hồ sơ máy là bản đăng ký lại (ID khác) -> chuyển sang ID trên cloud
    if (local && local.id !== cp.id) {
      delete pm.profiles[local.id];
      local = { ...local, id: cp.id };
    }

    const base = local ? { ...local } : emptyProfile(cp);
    const merged = mergeProgress(base, cloudProg);
    merged.id = cp.id;
    merged.username = cp.username || merged.username;
    merged.pinHash = await pm.hashLocalPin(cp.id, pin);
    delete merged.password;

    pm.profiles[cp.id] = merged;
    pm.activeProfileId = cp.id;
    pm.state = merged;
    pm.ensureTopicProgress(pm.state);
    pm.isLoggedIn = true;
    pm.saveProfiles();
    pm.checkDailyStreak();
    pm.save();            // lưu máy + đẩy bản đã gộp lên cloud
    pm.notifyUpdate();
  }

  // Gộp tiến độ cho hồ sơ đang đăng nhập sẵn (khi mở trang)
  async function pullAndMergeActive() {
    if (!pm.state || !(await ensureOnline())) return;
    try {
      const cloud = await fetchCloudProgress(pm.state.id);
      if (!cloud) { pm.save(); return; }
      pm.state = mergeProgress(pm.state, cloud);
      pm.ensureTopicProgress(pm.state);
      pm.profiles[pm.activeProfileId] = pm.state;
      pm.save();
      pm.notifyUpdate();
    } catch (e) {
      console.warn("[cloud-sync] Gộp tiến độ lỗi:", e);
    }
  }

  // ---------- 2 + 3. Đăng nhập ----------
  const origLogin = pm.login.bind(pm);
  pm.login = async function (username, pin) {
    const uname = norm(username);

    if (uname && (await ensureOnline())) {
      const r = await svc.rpc("timo_login", { p_username: uname, p_pin: pin || "" });
      if (r && r.status === "wrong_pin") {
        return { success: false, error: "Mật khẩu hoặc mã PIN không chính xác! Vui lòng thử lại." };
      }
      if (r && r.status === "locked") {
        const mins = Math.max(1, Math.ceil((r.seconds || 300) / 60));
        return { success: false, error: `Nhập sai quá nhiều lần. Vui lòng thử lại sau khoảng ${mins} phút.` };
      }
      if (r && (r.status === "ok" || r.status === "claimed") && r.profile) {
        await adoptCloudProfile(r.profile, r.progress, pin);
        return { success: true, profile: pm.state };
      }
      // not_found / chưa chạy SQL / lỗi mạng -> dùng đăng nhập trên máy
    }

    const res = await origLogin(username, pin);
    if (res.success && (await ensureOnline())) {
      // Hồ sơ chỉ có trên máy -> đăng ký lên cloud kèm PIN băm để máy khác đăng nhập được
      await svc.rpc("timo_register", {
        p_id: pm.state.id,
        p_username: norm(pm.state.username || pm.state.email || pm.state.id),
        p_kid_name: pm.state.name,
        p_avatar: pm.state.avatar,
        p_pin: pin || ""
      });
      await pullAndMergeActive();
      return { success: true, profile: pm.state };
    }
    return res;
  };

  // ---------- 4. Đăng ký ----------
  const origSignUp = pm.signUp.bind(pm);
  pm.signUp = async function (name, username, pin, avatar) {
    const uname = norm(username);
    const online = uname && (await ensureOnline());

    if (online) {
      try {
        if (await findCloudProfile(uname)) {
          return {
            success: false,
            error: "Tên đăng nhập này đã có trên hệ thống! Bé hãy bấm Đăng nhập để lấy lại tiến độ học."
          };
        }
      } catch (e) { /* mất mạng: cho đăng ký trên máy */ }
    }

    const res = await origSignUp(name, username, pin, avatar);
    if (res.success && online) {
      const r = await svc.rpc("timo_register", {
        p_id: res.profile.id,
        p_username: uname,
        p_kid_name: res.profile.name,
        p_avatar: res.profile.avatar,
        p_pin: pin || ""
      });
      if (r && r.status === "exists") {
        // Vừa có người khác đăng ký cùng tên -> huỷ hồ sơ vừa tạo trên máy
        delete pm.profiles[res.profile.id];
        pm.logout();
        pm.saveProfiles();
        return { success: false, error: "Tên đăng nhập này vừa được sử dụng. Vui lòng chọn tên khác!" };
      }
      pm.save();
    }
    return res;
  };

  // ---------- Khi mở trang: nếu đã đăng nhập sẵn thì gộp với cloud ----------
  ensureOnline().then(ok => { if (ok && pm.isLoggedIn) pullAndMergeActive(); });
})();

// =====================================================================
// cloud-sync.js — Đồng bộ 2 chiều Supabase <-> máy cho TIMO 1 Math Adventure
// Nạp SAU progress.js và supabase-client.js, TRƯỚC app.js.
//
// Bổ sung:
//  1. Tự kết nối Supabase bằng anon key cài sẵn (không cần nhập tay từng máy).
//  2. Đăng nhập: nếu máy chưa có tài khoản -> tìm trên cloud, tải tiến độ về.
//  3. Đăng nhập / mở trang khi máy đã có tài khoản -> gộp tiến độ cloud + máy
//     (giữ phần học được nhiều hơn), rồi đẩy bản đã gộp lên lại.
//  4. Đăng ký: chặn trùng tên đăng nhập đã có trên cloud.
//  5. Lưu mã băm PIN (pin_hash) lên cloud để máy khác kiểm tra được mật khẩu.
// =====================================================================
(function () {
  // >>> DÁN SUPABASE ANON (public) KEY VÀO ĐÂY <<<
  // Supabase Dashboard > Project Settings > API > "anon public"
  const TIMO_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZGFjb25samNudHV2eHRxa3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwOTY2OTksImV4cCI6MjEwNjY3MjY5OX0.HR8hSG_cvOVDUArqAVzltkkJDFYQA3WBeSUu3Zb64_A";

  const pm = window.progressManager;
  const svc = window.supabaseService;
  if (!pm || !svc) {
    console.warn("[cloud-sync] Thiếu progressManager hoặc supabaseService — bỏ qua.");
    return;
  }

  // ---------- 1. Kết nối ----------
  if (!svc.anonKey && TIMO_SUPABASE_ANON_KEY && !TIMO_SUPABASE_ANON_KEY.startsWith("PASTE")) {
    svc.updateConfig(svc.url || svc.defaultUrl, TIMO_SUPABASE_ANON_KEY);
  }

  let connecting = null;
  async function ensureOnline() {
    if (svc.client && svc.isOnline) return true;
    if (!svc.client) return false;
    if (!connecting) connecting = svc.checkConnection().finally(() => (connecting = null));
    try { return await connecting; } catch (e) { return false; }
  }

  // ---------- Tiện ích ----------
  async function hashPin(userId, pin) {
    const data = new TextEncoder().encode("timo:" + userId + ":" + pin);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

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
      if (!cur || (v.stars || 0) > (cur.stars || 0)) out[id] = v;
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

  // Gộp: giữ phần "học được nhiều hơn" của mỗi bên
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

  async function fetchCloudProgress(userId) {
    const { data, error } = await svc.client
      .from("timo_progress").select("*").eq("user_id", userId).maybeSingle();
    if (error) { console.warn("[cloud-sync] Lỗi tải tiến độ:", error); return null; }
    return data;
  }

  // Tìm hồ sơ trên cloud theo tên đăng nhập; nếu trùng nhiều dòng, lấy dòng có XP cao nhất
  async function findCloudProfile(username) {
    const { data: rows, error } = await svc.client
      .from("timo_profiles").select("*").eq("username", username);
    if (error || !rows || !rows.length) return null;
    if (rows.length === 1) return rows[0];
    const ids = rows.map(r => r.id);
    const { data: progs } = await svc.client
      .from("timo_progress").select("user_id,xp").in("user_id", ids);
    const xpOf = id => ((progs || []).find(p => p.user_id === id) || {}).xp || 0;
    return rows.sort((a, b) => xpOf(b) - xpOf(a))[0];
  }

  function pushNow() {
    if (svc.isOnline && pm.state) pm.save();
  }

  async function pullAndMergeActive() {
    if (!pm.state || !(await ensureOnline())) return;
    try {
      // Hồ sơ trong máy có thể là bản đăng ký lại (ID mới) trùng tên với hồ sơ cũ trên cloud
      // -> chuyển hồ sơ máy sang ID cũ trên cloud để giữ tiến độ cũ
      const uname = (pm.state.username || "").toLowerCase();
      if (uname) {
        const cp = await findCloudProfile(uname);
        if (cp && cp.id !== pm.state.id) {
          const oldId = pm.state.id;
          delete pm.profiles[oldId];
          pm.state = { ...pm.state, id: cp.id };
          pm.activeProfileId = cp.id;
          pm.profiles[cp.id] = pm.state;
          pm.saveProfiles();
        }
      }
      const cloud = await fetchCloudProgress(pm.state.id);
      if (!cloud) { pushNow(); return; }
      pm.state = mergeProgress(pm.state, cloud);
      pm.ensureTopicProgress(pm.state);
      pm.profiles[pm.activeProfileId] = pm.state;
      pm.save();           // lưu máy + đẩy bản đã gộp lên cloud
      pm.notifyUpdate();
    } catch (e) {
      console.warn("[cloud-sync] Gộp tiến độ lỗi:", e);
    }
  }

  // ---------- 5. Lưu pin_hash kèm hồ sơ ----------
  const origSaveProfile = svc.saveProfile.bind(svc);
  svc.saveProfile = async function (userId, profile) {
    await origSaveProfile(userId, profile);
    if (!this.client || !this.isOnline || !userId || !profile || !profile.password) return;
    try {
      const pin_hash = await hashPin(userId, profile.password);
      await this.client.from("timo_profiles").update({ pin_hash }).eq("id", userId);
    } catch (e) {
      console.warn("[cloud-sync] Không lưu được pin_hash:", e);
    }
  };

  // ---------- 2 + 3. Đăng nhập ----------
  const origLogin = pm.login.bind(pm);
  pm.login = async function (username, password) {
    const res = await origLogin(username, password);

    if (res.success) {
      await pullAndMergeActive();
      return { success: true, profile: this.state };
    }

    // Sai mật khẩu với tài khoản đã có trên máy -> giữ nguyên lỗi
    const trimmedUser = (username || "").trim().toLowerCase();
    const localExists = Object.values(this.profiles).some(
      p => (p.username || "").toLowerCase() === trimmedUser
    );
    if (localExists || !(await ensureOnline())) return res;

    try {
      const cp = await findCloudProfile(trimmedUser);
      if (!cp) return res;

      if (cp.pin_hash) {
        if ((await hashPin(cp.id, password)) !== cp.pin_hash) {
          return { success: false, error: "Mật khẩu hoặc mã PIN không chính xác! Vui lòng thử lại." };
        }
      }
      // Hồ sơ cũ chưa có pin_hash: chấp nhận PIN lần này và lưu lại làm PIN chính thức

      const cloud = await fetchCloudProgress(cp.id);
      const base = {
        id: cp.id,
        name: cp.kid_name || "Bé Lớp 1",
        username: cp.username || trimmedUser,
        email: "",
        password: password,
        grade: cp.grade || 1,
        avatar: cp.avatar || "🦁",
        xp: 0, stars: 0, level: 1, streak: 1,
        createdAt: cp.created_at || new Date().toISOString(),
        lastActiveDate: new Date().toISOString().split("T")[0],
        dailyCompletedDate: null,
        completedLessons: {},
        topicProgress: this.buildEmptyTopicProgress(),
        badges: [], mistakes: [], answeredQuestions: [], quizHistory: [],
        timoBestScore: 0
      };
      const profile = mergeProgress(base, cloud);

      this.profiles[profile.id] = profile;
      this.activeProfileId = profile.id;
      this.state = profile;
      this.ensureTopicProgress(this.state);
      this.isLoggedIn = true;
      this.saveProfiles();
      this.checkDailyStreak();
      if (!cp.pin_hash) svc.saveProfile(profile.id, profile);
      this.notifyUpdate();
      return { success: true, profile };
    } catch (e) {
      console.warn("[cloud-sync] Đăng nhập cloud lỗi:", e);
      return res;
    }
  };

  // ---------- 4. Đăng ký: chặn trùng tên trên cloud ----------
  const origSignUp = pm.signUp.bind(pm);
  pm.signUp = async function (name, username, password, avatar) {
    const trimmedUser = (username || "").trim().toLowerCase();
    if (trimmedUser && (await ensureOnline())) {
      try {
        const cp = await findCloudProfile(trimmedUser);
        if (cp) {
          return {
            success: false,
            error: "Tên đăng nhập này đã có trên hệ thống! Bé hãy bấm Đăng nhập để lấy lại tiến độ học."
          };
        }
      } catch (e) { /* mất mạng: cho đăng ký offline */ }
    }
    const res = await origSignUp(name, username, password, avatar);
    if (res.success) pushNow();
    return res;
  };

  // ---------- Khi mở trang: nếu đã đăng nhập sẵn thì gộp với cloud ----------
  ensureOnline().then(ok => { if (ok && pm.isLoggedIn) pullAndMergeActive(); });
})();

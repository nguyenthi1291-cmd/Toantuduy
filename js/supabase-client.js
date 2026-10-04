// Supabase Client Integration & Database Synchronization Manager
class SupabaseService {
  constructor() {
    this.defaultUrl = "https://zidaconljcntuvxtqkxy.supabase.co";
    this.storageKeyUrl = "timo_supabase_url";
    this.storageKeyAnon = "timo_supabase_anon_key";
    
    this.url = localStorage.getItem(this.storageKeyUrl) || this.defaultUrl;
    this.anonKey = localStorage.getItem(this.storageKeyAnon) || "";
    this.client = null;
    this.isOnline = false;
    this.currentUser = null;

    this.initClient();
  }

  initClient() {
    if (window.supabase && this.url && this.anonKey) {
      try {
        this.client = window.supabase.createClient(this.url, this.anonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true
          }
        });
        this.checkConnection();
      } catch (err) {
        console.warn("Supabase client init notice:", err);
        this.client = null;
        this.isOnline = false;
      }
    } else {
      this.client = null;
      this.isOnline = false;
    }
  }

  async checkConnection() {
    if (!this.client) {
      this.isOnline = false;
      this.updateStatusBadge();
      return false;
    }
    try {
      // Test querying timo_profiles or ping
      const { data, error } = await this.client.from("timo_profiles").select("id").limit(1);
      if (!error) {
        this.isOnline = true;
      } else {
        // Fallback check auth session
        const authCheck = await this.client.auth.getSession();
        this.isOnline = !authCheck.error;
      }
    } catch (e) {
      this.isOnline = false;
    }
    this.updateStatusBadge();
    return this.isOnline;
  }

  updateConfig(url, anonKey) {
    this.url = url || this.defaultUrl;
    this.anonKey = anonKey || "";
    localStorage.setItem(this.storageKeyUrl, this.url);
    if (this.anonKey) {
      localStorage.setItem(this.storageKeyAnon, this.anonKey);
    } else {
      localStorage.removeItem(this.storageKeyAnon);
    }
    this.initClient();
  }

  updateStatusBadge() {
    const badge = document.getElementById("cloud-status-badge");
    if (!badge) return;
    if (this.isOnline && this.client) {
      badge.className = "cloud-badge cloud-online";
      badge.innerHTML = `<span class="dot"></span> ☁️ Supabase Cloud: Đã kết nối & Đồng bộ điểm`;
    } else if (this.anonKey) {
      badge.className = "cloud-badge cloud-syncing";
      badge.innerHTML = `<span class="dot"></span> 🔄 Đang kết nối Supabase...`;
    } else {
      badge.className = "cloud-badge cloud-local";
      badge.innerHTML = `<span class="dot"></span> 💾 Lưu trữ an toàn trên máy (Sẵn sàng)`;
    }
  }

  // ================= 1. HỒ SƠ BÉ (PROFILES) =================
  async saveProfile(userId, profile) {
    if (!this.client || !this.isOnline || !userId) return;
    try {
      await this.client.from("timo_profiles").upsert({
        id: userId,
        kid_name: profile.name || profile.kid_name || "Bé Lớp 1",
        username: profile.username || profile.email || userId,
        avatar: profile.avatar || "🦁",
        grade: profile.grade || 1,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Could not sync profile to Supabase:", e);
    }
  }

  // ================= 2. TIẾN ĐỘ HỌC TẬP (PROGRESS) =================
  async syncProgressToCloud(userId, progressData) {
    if (!this.client || !this.isOnline || !userId) return;
    try {
      // First ensure profile exists on cloud
      if (window.progressManager && window.progressManager.state) {
        await this.saveProfile(userId, window.progressManager.state);
      }

      await this.client.from("timo_progress").upsert({
        user_id: userId,
        xp: progressData.xp || 0,
        stars: progressData.stars || 0,
        level: progressData.level || 1,
        streak: progressData.streak || 1,
        completed_lessons: progressData.completedLessons || {},
        topics_progress: progressData.topics || {},
        badges: progressData.badges || [],
        answered_questions: progressData.answeredQuestions || [],
        mistakes: progressData.mistakes || [],
        timo_best_score: progressData.timoBestScore || 0,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Could not sync progress to Supabase:", e);
    }
  }

  async loadProgressFromCloud(userId) {
    if (!this.client || !this.isOnline || !userId) return null;
    try {
      const { data, error } = await this.client
        .from("timo_progress")
        .select("*")
        .eq("user_id", userId)
        .single();
      if (error) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  // ================= 3. LƯU ĐIỂM SỐ CÁC BÀI KIỂM TRA (QUIZ SCORES) =================
  async saveQuizRecord(record) {
    if (!this.client || !this.isOnline) return;
    try {
      // Ensure profile is registered on Supabase
      if (record.userId) {
        await this.client.from("timo_profiles").upsert({
          id: record.userId,
          kid_name: record.kidName || "Bé Lớp 1",
          username: record.username || record.userId,
          avatar: record.avatar || "🦁",
          grade: 1,
          updated_at: new Date().toISOString()
        });
      }

      const { data, error } = await this.client.from("timo_quiz_scores").insert({
        user_id: record.userId || null,
        kid_name: record.kidName || "Bé Lớp 1",
        quiz_type: record.type, // 'lesson', 'practice', 'timo_challenge', 'daily', 'review'
        topic: record.topic || null,
        lesson_id: record.lessonId || null,
        lesson_title: record.lessonTitle || null,
        score: record.score,
        total: record.total,
        accuracy: record.accuracy,
        stars_earned: record.starsEarned || 1,
        xp_earned: record.xpEarned || 0,
        time_spent_seconds: record.timeSpentSeconds || 0,
        answers_detail: record.answersDetail || [],
        created_at: record.date || new Date().toISOString()
      });

      if (error) {
        console.warn("Supabase save quiz score error:", error);
      }
    } catch (e) {
      console.warn("Could not record quiz history in Supabase:", e);
    }
  }

  async loadUserQuizHistory(userId) {
    if (!this.client || !this.isOnline || !userId) return [];
    try {
      const { data, error } = await this.client
        .from("timo_quiz_scores")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(30);
      if (error) return [];
      return data || [];
    } catch (e) {
      return [];
    }
  }

  // ================= 4. BẢNG XẾP HẠNG TOÀN QUỐC (LEADERBOARD) =================
  async getLeaderboard() {
    if (!this.client || !this.isOnline) return null;
    try {
      const { data, error } = await this.client
        .from("timo_leaderboard")
        .select("*")
        .limit(10);
      if (error) return null;
      return data;
    } catch (e) {
      return null;
    }
  }
}

window.supabaseService = new SupabaseService();

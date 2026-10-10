// Progress, Gamification, Multi-User Auth & Storage System
class ProgressManager {
  constructor() {
    this.profilesKey = "timo_kid_profiles_v3";
    this.activeProfileKey = "timo_active_kid_id_v3";

    this.profiles = this.loadProfiles();
    this.activeProfileId = localStorage.getItem(this.activeProfileKey) || null;

    if (this.activeProfileId && this.profiles[this.activeProfileId]) {
      this.state = this.profiles[this.activeProfileId];
      this.ensureTopicProgress(this.state);
      this.isLoggedIn = true;
      this.checkDailyStreak();
    } else {
      this.state = null;
      this.isLoggedIn = false;
      this.activeProfileId = null;
    }
  }

  // Tổng số bài học / chủ đề lấy động từ TIMO_DATA (không hardcode 25 / 5)
  getTotalLessons() {
    return (TIMO_DATA.topics || []).reduce((acc, t) => acc + (t.lessons || []).length, 0);
  }

  getTotalTopics() {
    return (TIMO_DATA.topics || []).length;
  }

  buildEmptyTopicProgress() {
    const result = {};
    (TIMO_DATA.topics || []).forEach(t => {
      result[t.id] = { completed: 0, total: (t.lessons || []).length, stars: 0 };
    });
    return result;
  }

  // Bổ sung chủ đề mới (vd: Lý thuyết số) cho hồ sơ bé tạo trước bản cập nhật
  ensureTopicProgress(profile) {
    if (!profile) return;
    if (!profile.topicProgress) profile.topicProgress = {};
    (TIMO_DATA.topics || []).forEach(t => {
      const total = (t.lessons || []).length;
      if (!profile.topicProgress[t.id]) {
        const done = (t.lessons || []).filter(l => profile.completedLessons && profile.completedLessons[l.id]);
        profile.topicProgress[t.id] = {
          completed: done.length,
          total,
          stars: done.reduce((acc, l) => acc + (profile.completedLessons[l.id].stars || 0), 0)
        };
      } else {
        profile.topicProgress[t.id].total = total;
      }
    });
  }

  loadProfiles() {
    try {
      const data = localStorage.getItem(this.profilesKey);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  saveProfiles() {
    try {
      localStorage.setItem(this.profilesKey, JSON.stringify(this.profiles));
      if (this.activeProfileId) {
        localStorage.setItem(this.activeProfileKey, this.activeProfileId);
      } else {
        localStorage.removeItem(this.activeProfileKey);
      }
    } catch (e) {
      console.warn("Save profiles error:", e);
    }
  }

  save() {
    if (this.activeProfileId && this.state) {
      this.profiles[this.activeProfileId] = this.state;
      this.saveProfiles();
      
      // Auto sync progress to Supabase Cloud if online
      if (window.supabaseService && window.supabaseService.isOnline) {
        window.supabaseService.syncProgressToCloud(this.state.id, {
          xp: this.state.xp,
          stars: this.state.stars,
          level: this.state.level,
          streak: this.state.streak,
          completedLessons: this.state.completedLessons || {},
          topics: this.state.topicProgress || {},
          badges: this.state.badges || [],
          answeredQuestions: this.state.answeredQuestions || [],
          mistakes: this.state.mistakes || [],
          timoBestScore: this.state.timoBestScore || 0
        });
      }

      this.notifyUpdate();
    }
  }

  // ===== Mã PIN: chỉ lưu dạng băm SHA-256 trên máy, không lưu PIN gốc =====
  async hashLocalPin(userId, pin) {
    const data = new TextEncoder().encode("timo:" + userId + ":" + (pin || ""));
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  hasPin(profile) {
    return !!(profile && (profile.pinHash || profile.password));
  }

  // Kiểm tra PIN với hồ sơ trên máy; hồ sơ cũ còn lưu PIN gốc sẽ được chuyển sang dạng băm
  async verifyLocalPin(profile, pin) {
    if (!profile) return false;
    if (profile.pinHash) {
      return (await this.hashLocalPin(profile.id, pin)) === profile.pinHash;
    }
    if (profile.password) {
      if (profile.password !== pin) return false;
      profile.pinHash = await this.hashLocalPin(profile.id, pin);
      delete profile.password;
      this.saveProfiles();
      return true;
    }
    return true; // hồ sơ không đặt PIN
  }

  notifyUpdate() {
    window.dispatchEvent(new CustomEvent("timo_progress_updated", { detail: this.state }));
  }

  // Authentication: Sign Up (Tạo tài khoản mới)
  async signUp(name, username, password, avatar = "🦁") {
    const trimmedUser = (username || "").trim().toLowerCase();
    const trimmedName = (name || "").trim();

    if (!trimmedName) {
      return { success: false, error: "Vui lòng nhập họ tên của bé!" };
    }
    if (!trimmedUser) {
      return { success: false, error: "Vui lòng nhập tên đăng nhập hoặc email!" };
    }
    if (!password || password.length < 3) {
      return { success: false, error: "Mật khẩu hoặc mã PIN cần ít nhất 3 ký tự!" };
    }

    const existing = Object.values(this.profiles).find(
      p => (p.username && p.username.toLowerCase() === trimmedUser) || (p.email && p.email.toLowerCase() === trimmedUser)
    );
    if (existing) {
      return { success: false, error: "Tên đăng nhập hoặc tài khoản này đã tồn tại! Vui lòng chọn tên khác hoặc Đăng nhập." };
    }

    const userId = "kid_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
    const newProfile = {
      id: userId,
      name: trimmedName,
      username: trimmedUser,
      email: trimmedUser.includes("@") ? trimmedUser : "",
      pinHash: await this.hashLocalPin(userId, password),
      grade: 1,
      avatar: avatar || "🦁",
      xp: 0,
      stars: 0,
      level: 1,
      streak: 1,
      createdAt: new Date().toISOString(),
      lastActiveDate: new Date().toISOString().split("T")[0],
      dailyCompletedDate: null,
      completedLessons: {},
      topicProgress: this.buildEmptyTopicProgress(),
      badges: [],
      mistakes: [],
      answeredQuestions: [],
      quizHistory: [],
      timoBestScore: 0
    };

    // Auto sync new profile to Supabase if connected
    if (window.supabaseService) {
      window.supabaseService.saveProfile(userId, newProfile);
    }

    this.profiles[userId] = newProfile;
    this.activeProfileId = userId;
    this.state = newProfile;
    this.isLoggedIn = true;

    this.saveProfiles();
    this.notifyUpdate();
    return { success: true, profile: newProfile };
  }

  // Authentication: Sign In (Đăng nhập)
  async login(username, password) {
    const trimmedUser = (username || "").trim().toLowerCase();
    
    let matched = Object.values(this.profiles).find(
      p => (p.username && p.username.toLowerCase() === trimmedUser) ||
           (p.email && p.email.toLowerCase() === trimmedUser) ||
           (p.name && p.name.toLowerCase() === trimmedUser) ||
           (p.id === username)
    );

    if (matched) {
      if (!(await this.verifyLocalPin(matched, password))) {
        return { success: false, error: "Mật khẩu hoặc mã PIN không chính xác! Vui lòng thử lại." };
      }

      this.activeProfileId = matched.id;
      this.state = matched;
      this.ensureTopicProgress(this.state);
      this.isLoggedIn = true;
      this.saveProfiles();
      this.checkDailyStreak();

      // Check cloud sync
      if (window.supabaseService) {
        window.supabaseService.saveProfile(matched.id, matched);
      }

      this.notifyUpdate();
      return { success: true, profile: matched };
    }

    return { success: false, error: "Tài khoản không tồn tại! Vui lòng kiểm tra lại hoặc Đăng ký tài khoản mới." };
  }

  // Authentication: Sign Out (Đăng xuất)
  logout() {
    this.activeProfileId = null;
    this.state = null;
    this.isLoggedIn = false;
    localStorage.removeItem(this.activeProfileKey);

    if (window.supabaseService) {
      window.supabaseService.signOut();
    }

    this.notifyUpdate();
  }

  // Switch account directly by profile ID
  async switchAccount(profileId, password = null) {
    const target = this.profiles[profileId];
    if (!target) return { success: false, error: "Hồ sơ không tồn tại!" };

    if (this.hasPin(target) && !(await this.verifyLocalPin(target, password))) {
      return { success: false, error: "Mật khẩu/Mã PIN không đúng!" };
    }

    this.activeProfileId = profileId;
    this.state = target;
    this.ensureTopicProgress(this.state);
    this.isLoggedIn = true;
    this.saveProfiles();
    this.checkDailyStreak();
    this.notifyUpdate();
    return { success: true, profile: target };
  }

  getAllProfiles() {
    return Object.values(this.profiles);
  }

  getActiveProfile() {
    return this.state;
  }

  // Streak calculation
  checkDailyStreak() {
    if (!this.state) return;
    const today = new Date().toISOString().split("T")[0];
    const lastActive = this.state.lastActiveDate;

    if (!lastActive) {
      this.state.lastActiveDate = today;
      this.state.streak = 1;
      this.save();
      return;
    }

    if (lastActive === today) {
      return;
    }

    const todayDate = new Date(today);
    const lastDate = new Date(lastActive);
    const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      this.state.streak = (this.state.streak || 1) + 1;
    } else if (diffDays > 1) {
      this.state.streak = 1;
    }

    this.state.lastActiveDate = today;
    this.save();
  }

  // XP, Level & Rewards
  addXP(amount) {
    if (!this.state || !amount || amount <= 0) return;
    this.state.xp = (this.state.xp || 0) + amount;
    this.calculateLevel();
    this.save();
  }

  addStars(count) {
    if (!this.state || !count || count <= 0) return;
    this.state.stars = (this.state.stars || 0) + count;
    this.save();
  }

  calculateLevel() {
    if (!this.state) return;
    const xp = this.state.xp || 0;
    let level = 1;
    if (xp >= 2500) level = 6;
    else if (xp >= 1600) level = 5;
    else if (xp >= 900) level = 4;
    else if (xp >= 400) level = 3;
    else if (xp >= 150) level = 2;
    
    if (level > (this.state.level || 1)) {
      this.state.level = level;
      if (window.uiManager) {
        window.uiManager.showLevelUpModal(level);
      }
    }
  }

  getLevelTitle(level = (this.state?.level || 1)) {
    const titles = {
      1: "Tập Sự Thông Thái 🌱",
      2: "Nhà Thám Hiểm Số Học 🔍",
      3: "Hiệp Sĩ Tư Duy ⚔️",
      4: "Thần Đồng Toán Học 🌟",
      5: "Chuyên Gia TIMO 1 🏆",
      6: "Đại Hiệp TIMO Vô Địch 👑"
    };
    return titles[level] || titles[1];
  }

  // Sequential Roadmap & Topic Unlocking Rules
  isTopicUnlocked(topicId) {
    if (!this.state) return false;
    const topics = TIMO_DATA.topics || [];
    const index = topics.findIndex(t => t.id === topicId);
    if (index <= 0) return true; // First topic (Số học) is always unlocked

    const prevTopic = topics[index - 1];
    if (!prevTopic) return true;

    const completedMap = this.state.completedLessons || {};

    // Giữ nguyên tiến độ cũ: chủ đề bé đã học ít nhất 1 bài thì luôn mở
    // (tránh khóa lại khi chèn chủ đề mới vào giữa lộ trình)
    const topic = topics[index];
    if (topic.lessons.some(l => completedMap[l.id])) return true;

    const passedCount = prevTopic.lessons.filter(l => completedMap[l.id] && (completedMap[l.id].stars > 0 || completedMap[l.id].score > 0)).length;

    // Must pass at least 4 of 5 lessons in previous topic to unlock next topic
    return passedCount >= 4;
  }

  isLessonUnlocked(topicId, lessonId) {
    if (!this.isTopicUnlocked(topicId)) return false;

    const topic = TIMO_DATA.topics.find(t => t.id === topicId);
    if (!topic) return false;

    const lIndex = topic.lessons.findIndex(l => l.id === lessonId);
    if (lIndex <= 0) return true; // Lesson 1 of an unlocked topic is unlocked

    const prevLesson = topic.lessons[lIndex - 1];
    const completedMap = this.state?.completedLessons || {};
    return !!(completedMap[prevLesson.id] && completedMap[prevLesson.id].score > 0);
  }

  getPrevTopicName(topicId) {
    const topics = TIMO_DATA.topics || [];
    const index = topics.findIndex(t => t.id === topicId);
    if (index > 0) return topics[index - 1].name;
    return "";
  }

  // Lesson & Topic Completion
  completeLesson(topicId, lessonId, starsEarned, score, total) {
    if (!this.state) return;
    if (!this.state.completedLessons) this.state.completedLessons = {};

    const existing = this.state.completedLessons[lessonId];
    const prevStars = existing ? (existing.stars || 0) : 0;

    const newStars = Math.max(prevStars, starsEarned);
    this.state.completedLessons[lessonId] = {
      stars: newStars,
      score: score,
      total: total,
      completedAt: new Date().toISOString()
    };

    const diffStars = newStars - prevStars;
    if (diffStars > 0) {
      this.addStars(diffStars);
    }

    this.ensureTopicProgress(this.state);
    if (topicId && this.state.topicProgress && this.state.topicProgress[topicId]) {
      const topicLessons = TIMO_DATA.topics.find(t => t.id === topicId)?.lessons || [];
      const completedCount = topicLessons.filter(l => this.state.completedLessons[l.id]).length;
      const totalStarsInTopic = topicLessons.reduce((acc, l) => {
        return acc + (this.state.completedLessons[l.id]?.stars || 0);
      }, 0);

      this.state.topicProgress[topicId].completed = completedCount;
      this.state.topicProgress[topicId].stars = totalStarsInTopic;
    }

    this.checkBadges();
    this.save();
  }

  checkBadges() {
    if (!this.state) return;
    if (!this.state.badges) this.state.badges = [];
    TIMO_DATA.badges.forEach(badge => {
      if (!this.state.badges.includes(badge.id)) {
        if (badge.topicId === "all") {
          const totalLessons = this.getTotalLessons();
          const done = Object.keys(this.state.completedLessons || {}).length;
          if (done >= totalLessons) {
            this.state.badges.push(badge.id);
            this.addXP(200);
            if (window.uiManager) window.uiManager.showBadgeUnlock(badge);
          }
        } else {
          const topic = TIMO_DATA.topics.find(t => t.id === badge.topicId);
          if (topic) {
            const allTopicLessonsDone = topic.lessons.every(l => this.state.completedLessons[l.id]);
            if (allTopicLessonsDone) {
              this.state.badges.push(badge.id);
              this.addXP(100);
              if (window.uiManager) window.uiManager.showBadgeUnlock(badge);
            }
          }
        }
      }
    });
  }

  recordMistake(questionId) {
    if (!this.state) return;
    if (!this.state.mistakes) this.state.mistakes = [];
    if (!this.state.mistakes.includes(questionId)) {
      this.state.mistakes.push(questionId);
      this.save();
    }
  }

  resolveMistake(questionId) {
    if (!this.state || !this.state.mistakes) return;
    const index = this.state.mistakes.indexOf(questionId);
    if (index > -1) {
      this.state.mistakes.splice(index, 1);
      this.save();
    }
  }

  recordAnsweredQuestion(questionId) {
    if (!this.state) return;
    if (!this.state.answeredQuestions) {
      this.state.answeredQuestions = [];
    }
    if (!this.state.answeredQuestions.includes(questionId)) {
      this.state.answeredQuestions.push(questionId);
      this.save();
    }
  }

  clearAnsweredQuestions() {
    if (!this.state) return;
    this.state.answeredQuestions = [];
    this.save();
  }

  getOverallStats() {
    if (!this.state) {
      return {
        progressPercent: 0,
        completedLessonsCount: 0,
        totalLessons: this.getTotalLessons(),
        completedTopicsCount: 0,
        totalTopics: this.getTotalTopics(),
        accuracy: 100,
        xp: 0,
        stars: 0,
        streak: 1,
        mistakesCount: 0,
        level: 1,
        levelTitle: this.getLevelTitle(1)
      };
    }

    const totalLessons = this.getTotalLessons();
    const completedCount = Object.keys(this.state.completedLessons || {}).length;
    const progressPercent = Math.round((completedCount / totalLessons) * 100);

    const completedTopicsCount = TIMO_DATA.topics.filter(t => {
      return t.lessons.every(l => this.state.completedLessons && this.state.completedLessons[l.id]);
    }).length;

    let totalQuestions = 0;
    let correctQuestions = 0;
    (this.state.quizHistory || []).forEach(q => {
      totalQuestions += q.total || 0;
      correctQuestions += q.score || 0;
    });

    const accuracy = totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 100;

    return {
      progressPercent,
      completedLessonsCount: completedCount,
      totalLessons,
      completedTopicsCount,
      totalTopics: this.getTotalTopics(),
      accuracy,
      xp: this.state.xp || 0,
      stars: this.state.stars || 0,
      streak: this.state.streak || 1,
      mistakesCount: (this.state.mistakes || []).length,
      level: this.state.level || 1,
      levelTitle: this.getLevelTitle(this.state.level || 1)
    };
  }

  // Lưu trữ chi tiết điểm số & kết quả bài kiểm tra của bé
  recordQuizResult(quizData) {
    if (!this.state) return;
    if (!this.state.quizHistory) this.state.quizHistory = [];

    const accuracy = Math.round((quizData.score / quizData.total) * 100);
    const fullRecord = {
      id: "quiz_" + Date.now(),
      userId: this.state.id,
      kidName: this.state.name,
      username: this.state.username,
      avatar: this.state.avatar,
      type: quizData.type, // 'lesson', 'practice', 'timo_challenge', 'daily', 'review'
      topic: quizData.topic || "Tổng hợp",
      lessonId: quizData.lessonId || null,
      lessonTitle: quizData.lessonTitle || null,
      score: quizData.score,
      total: quizData.total,
      accuracy: accuracy,
      starsEarned: quizData.starsEarned || 1,
      xpEarned: quizData.xpEarned || 0,
      timeSpentSeconds: quizData.timeSpentSeconds || 0,
      answersDetail: quizData.answersDetail || [],
      date: new Date().toISOString()
    };

    // Save to local profile history
    this.state.quizHistory.unshift(fullRecord);
    if (this.state.quizHistory.length > 50) this.state.quizHistory.pop();

    if (quizData.type === "timo_challenge") {
      this.state.timoBestScore = Math.max(this.state.timoBestScore || 0, quizData.score);
    }
    if (quizData.type === "daily") {
      this.state.dailyCompletedDate = new Date().toISOString().split("T")[0];
    }

    this.save();

    // Push to Supabase Cloud Database table timo_quiz_scores
    if (window.supabaseService) {
      window.supabaseService.saveQuizRecord(fullRecord);
    }

    return fullRecord;
  }

  isDailyCompletedToday() {
    if (!this.state) return false;
    const today = new Date().toISOString().split("T")[0];
    return this.state.dailyCompletedDate === today;
  }
}

window.progressManager = new ProgressManager();

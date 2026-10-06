// UI Manager: Views, Navigation, Modals, Auth Gate, Badges, Dashboard & Confetti
class UIManager {
  constructor() {
    this.currentView = "home-view";
    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener("timo_progress_updated", () => {
      this.updateHeaderStats();
      if (window.progressManager.isLoggedIn) {
        this.renderHomeDashboard();
        this.renderTopicsGrid();
        this.renderRoadmap();
        this.renderBadgesGrid();
        this.renderMistakesReviewBanner();
      }
    });
  }

  showAuthGate(defaultTab = "register") {
    const gate = document.getElementById("auth-gate-overlay");
    if (!gate) return;

    this.switchAuthTab(defaultTab);
    this.renderAuthSavedProfiles();
    gate.classList.add("gate-active");
  }

  hideAuthGate() {
    const gate = document.getElementById("auth-gate-overlay");
    if (gate) {
      gate.classList.remove("gate-active");
    }
  }

  switchAuthTab(tab) {
    const tabRegisterBtn = document.getElementById("tab-auth-register");
    const tabLoginBtn = document.getElementById("tab-auth-login");
    const paneRegister = document.getElementById("auth-pane-register");
    const paneLogin = document.getElementById("auth-pane-login");

    if (tab === "login") {
      tabLoginBtn?.classList.add("active-tab");
      tabRegisterBtn?.classList.remove("active-tab");
      paneLogin?.classList.add("active-pane");
      paneRegister?.classList.remove("active-pane");
      this.renderAuthSavedProfiles();
    } else {
      tabRegisterBtn?.classList.add("active-tab");
      tabLoginBtn?.classList.remove("active-tab");
      paneRegister?.classList.add("active-pane");
      paneLogin?.classList.remove("active-pane");
    }
  }

  renderAuthSavedProfiles() {
    const container = document.getElementById("auth-saved-profiles-grid");
    if (!container) return;

    const all = window.progressManager.getAllProfiles();
    if (all.length === 0) {
      container.innerHTML = `
        <div class="empty-profiles-card">
          <p>🌱 Chưa có tài khoản bé nào được lưu trên máy. Bé hãy bấm <strong>"Tạo Tài Khoản Mới"</strong> ở tab bên cạnh nhé!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="saved-kids-label">⭐ Hoặc chọn nhanh bé đã học trên máy:</div>
      <div class="saved-kids-row">
        ${all.map(p => `
          <div class="saved-kid-card" data-kid-id="${p.id}" data-kid-name="${p.name}">
            <div class="kid-c-avatar">${p.avatar || '🦁'}</div>
            <strong class="kid-c-name">${p.name}</strong>
            <small class="kid-c-xp">${p.xp || 0} XP • Lớp 1</small>
            <button type="button" class="btn-quick-login" data-kid-id="${p.id}">Đăng nhập ➔</button>
          </div>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".btn-quick-login").forEach(btn => {
      btn.addEventListener("click", () => {
        const kidId = btn.getAttribute("data-kid-id");
        const profile = window.progressManager.profiles[kidId];
        if (profile) {
          if (profile.password) {
            const inputPass = prompt(`Nhập mật khẩu / mã PIN của bé ${profile.name}:`);
            if (inputPass === null) return;
            const res = window.progressManager.switchAccount(kidId, inputPass);
            if (!res.success) {
              alert(res.error || "Mật khẩu không đúng!");
              return;
            }
          } else {
            window.progressManager.switchAccount(kidId);
          }
          window.soundManager.playStar();
          this.hideAuthGate();
          this.showView("home-view");
        }
      });
    });
  }

  showView(viewId) {
    if (!window.progressManager.isLoggedIn) {
      this.showAuthGate("login");
      return;
    }

    const views = document.querySelectorAll(".app-view");
    views.forEach(v => {
      v.classList.remove("active-view");
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active-view");
      this.currentView = viewId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("data-target") === viewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (viewId === "home-view") {
      this.renderHomeDashboard();
      this.renderTopicsGrid();
      this.renderRoadmap();
      this.renderBadgesGrid();
    } else if (viewId === "progress-view") {
      this.renderFullProgressPage();
    } else if (viewId === "practice-view") {
      this.renderPracticeCenter();
    }
  }

  updateHeaderStats() {
    const profile = window.progressManager.getActiveProfile();
    const stats = window.progressManager.getOverallStats();

    const avatarEl = document.getElementById("header-kid-avatar");
    const nameEl = document.getElementById("header-kid-name");
    const levelTitleEl = document.getElementById("header-kid-level-title");
    const xpEl = document.getElementById("header-xp-val");
    const starsEl = document.getElementById("header-stars-val");
    const streakEl = document.getElementById("header-streak-val");

    if (profile) {
      if (avatarEl) avatarEl.textContent = profile.avatar || "🦁";
      if (nameEl) nameEl.textContent = profile.name || "Bé Lớp 1";
      if (levelTitleEl) levelTitleEl.textContent = `Cấp ${stats.level} • ${stats.levelTitle}`;
      if (xpEl) xpEl.textContent = `${stats.xp.toLocaleString()} XP`;
      if (starsEl) starsEl.textContent = `${stats.stars} ⭐`;
      if (streakEl) streakEl.textContent = `🔥 ${stats.streak} ngày`;
    } else {
      if (avatarEl) avatarEl.textContent = "👤";
      if (nameEl) nameEl.textContent = "Chưa Đăng Nhập";
      if (levelTitleEl) levelTitleEl.textContent = "Bấm để Đăng nhập / Đăng ký";
      if (xpEl) xpEl.textContent = "0 XP";
      if (starsEl) starsEl.textContent = "0 ⭐";
      if (streakEl) streakEl.textContent = "0 ngày";
    }

    if (window.supabaseService) {
      window.supabaseService.updateStatusBadge();
    }
  }

  renderHomeDashboard() {
    const stats = window.progressManager.getOverallStats();
    
    const pctEl = document.getElementById("dash-progress-pct");
    const barFill = document.getElementById("dash-progress-bar-fill");
    const lessonsEl = document.getElementById("dash-lessons-count");
    const topicsEl = document.getElementById("dash-topics-count");
    const accEl = document.getElementById("dash-acc-val");
    const streakEl = document.getElementById("dash-streak-count");

    if (pctEl) pctEl.textContent = `${stats.progressPercent}%`;
    if (barFill) barFill.style.width = `${stats.progressPercent}%`;
    if (lessonsEl) lessonsEl.textContent = `${stats.completedLessonsCount} / ${stats.totalLessons} bài`;
    if (topicsEl) topicsEl.textContent = `${stats.completedTopicsCount} / ${stats.totalTopics} chủ đề`;
    if (accEl) accEl.textContent = `${stats.accuracy}%`;
    if (streakEl) streakEl.textContent = `${stats.streak} ngày liên tiếp`;

    this.renderContinueBanner();
  }

  renderContinueBanner() {
    const banner = document.getElementById("continue-learning-banner");
    if (!banner) return;

    const profile = window.progressManager.getActiveProfile();
    if (!profile) return;

    let nextTopic = null;
    let nextLesson = null;

    for (const topic of TIMO_DATA.topics) {
      for (const lesson of topic.lessons) {
        if (!profile.completedLessons || !profile.completedLessons[lesson.id]) {
          nextTopic = topic;
          nextLesson = lesson;
          break;
        }
      }
      if (nextLesson) break;
    }

    if (nextLesson && nextTopic) {
      banner.innerHTML = `
        <div class="continue-card">
          <div class="continue-badge">🚀 BÀI HỌC TIẾP THEO CỦA BÉ</div>
          <div class="continue-info">
            <div class="continue-icon">${nextLesson.icon || nextTopic.icon}</div>
            <div class="continue-text">
              <h4>${nextTopic.name}: ${nextLesson.title}</h4>
              <p>${nextLesson.objective}</p>
            </div>
          </div>
          <button type="button" class="btn-primary-action btn-pulse" id="btn-continue-now">
            Tiếp Tục Học Ngay ➔
          </button>
        </div>
      `;

      const btn = document.getElementById("btn-continue-now");
      if (btn) {
        btn.addEventListener("click", () => {
          this.showLessonDetail(nextTopic, nextLesson);
        });
      }
    } else {
      banner.innerHTML = `
        <div class="continue-card banner-completed">
          <div class="continue-badge">🎉 HOÀN HẢO!</div>
          <div class="continue-info">
            <div class="continue-icon">👑</div>
            <div class="continue-text">
              <h4>Bé đã hoàn thành toàn bộ ${window.progressManager.getTotalLessons()} bài học của TIMO 1!</h4>
              <p>Hãy tham gia <strong>Đấu trường TIMO 1</strong> hoặc <strong>Luyện tập tự do</strong> để nâng cao thành tích!</p>
            </div>
          </div>
          <button type="button" class="btn-primary-action" id="btn-goto-timo">
            Vào Thi Thử TIMO 🏆
          </button>
        </div>
      `;
      const btn = document.getElementById("btn-goto-timo");
      if (btn) {
        btn.addEventListener("click", () => {
          window.quizRunner.startTimoChallenge();
        });
      }
    }
  }

  renderTopicsGrid() {
    const grid = document.getElementById("topics-cards-grid");
    if (!grid) return;

    const profile = window.progressManager.getActiveProfile();
    const completedMap = profile?.completedLessons || {};

    grid.innerHTML = TIMO_DATA.topics.map(topic => {
      const isTopicUnlocked = window.progressManager.isTopicUnlocked(topic.id);
      const prevTopicName = window.progressManager.getPrevTopicName(topic.id);
      const completedCount = topic.lessons.filter(l => completedMap[l.id]).length;
      const topicPct = Math.round((completedCount / topic.lessons.length) * 100);
      const isCompleted = completedCount === topic.lessons.length;

      const lockBadge = isTopicUnlocked ? "" : `
        <div class="topic-lock-banner">
          🔒 Đang khóa — Đạt kết quả bài kiểm tra chủ đề "${prevTopicName}" để mở khóa!
        </div>
      `;

      return `
        <div class="topic-card ${isTopicUnlocked ? '' : 'topic-card-locked'}" style="border-top-color: ${isTopicUnlocked ? topic.color : '#CBD5E1'}">
          ${lockBadge}
          <div class="topic-card-header">
            <div class="topic-icon-box" style="background: ${isTopicUnlocked ? topic.bgGradient : '#94A3B8'}">
              ${isTopicUnlocked ? topic.icon : '🔒'}
            </div>
            <div class="topic-title-box">
              <h3>${topic.name}</h3>
              <span class="topic-en-name">${topic.englishName}</span>
            </div>
          </div>

          <p class="topic-description">${topic.description}</p>

          <div class="topic-progress-section">
            <div class="tp-label-row">
              <span>Tiến độ bài học</span>
              <strong>${completedCount}/${topic.lessons.length} bài (${topicPct}%)</strong>
            </div>
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${topicPct}%; background: ${isTopicUnlocked ? topic.bgGradient : '#94A3B8'}"></div>
            </div>
          </div>

          <div class="topic-lessons-list">
            ${topic.lessons.map(lesson => {
              const lCompleted = completedMap[lesson.id];
              const isLUnlocked = window.progressManager.isLessonUnlocked(topic.id, lesson.id);
              
              let statusIcon = '⚪';
              if (lCompleted) statusIcon = "⭐".repeat(lCompleted.stars || 1);
              else if (!isLUnlocked) statusIcon = '🔒';

              return `
                <div class="lesson-mini-item ${lCompleted ? 'lesson-done' : (!isLUnlocked ? 'lesson-locked' : '')}" data-tid="${topic.id}" data-lid="${lesson.id}">
                  <span class="l-num">${lesson.number}</span>
                  <span class="l-name">${lesson.title}</span>
                  <span class="l-stars">${statusIcon}</span>
                </div>
              `;
            }).join("")}
          </div>

          <div class="topic-footer-actions">
            <button type="button" class="btn-topic-action ${isTopicUnlocked ? '' : 'btn-topic-locked'}" data-topic-id="${topic.id}">
              ${isTopicUnlocked ? (isCompleted ? 'Ôn Tập Lại 🔄' : 'Khám Phá Chủ Đề ➔') : '🔒 Đang Khóa'}
            </button>
          </div>
        </div>
      `;
    }).join("");

    grid.querySelectorAll(".lesson-mini-item").forEach(item => {
      item.addEventListener("click", () => {
        const tid = item.getAttribute("data-tid");
        const lid = item.getAttribute("data-lid");
        const topic = TIMO_DATA.topics.find(t => t.id === tid);
        const lesson = topic?.lessons.find(l => l.id === lid);
        if (topic && lesson) {
          if (!window.progressManager.isTopicUnlocked(topic.id)) {
            const prevName = window.progressManager.getPrevTopicName(topic.id);
            alert(`🔒 Chủ đề "${topic.name}" đang bị khóa!\n\nBé cần học và đạt kết quả kiểm tra ở chủ đề "${prevName}" trước khi chuyển sang chủ đề này nhé! 🚀`);
            return;
          }
          if (!window.progressManager.isLessonUnlocked(topic.id, lesson.id)) {
            alert(`🔒 Bài học "${lesson.title}" đang bị khóa!\n\nBé hãy làm bài kiểm tra và đạt kết quả bài trước trong cùng chủ đề để mở khóa bài học này nhé! 🌟`);
            return;
          }
          this.showLessonDetail(topic, lesson);
        }
      });
    });

    grid.querySelectorAll(".btn-topic-action").forEach(btn => {
      btn.addEventListener("click", () => {
        const tid = btn.getAttribute("data-topic-id");
        const topic = TIMO_DATA.topics.find(t => t.id === tid);
        if (topic && topic.lessons.length > 0) {
          if (!window.progressManager.isTopicUnlocked(topic.id)) {
            const prevName = window.progressManager.getPrevTopicName(topic.id);
            alert(`🔒 Chủ đề "${topic.name}" đang bị khóa!\n\nBé hãy hoàn thành bài kiểm tra và đạt kết quả ở chủ đề "${prevName}" để mở khóa chủ đề tiếp theo nhé! 🚀`);
            return;
          }
          const firstIncomplete = topic.lessons.find(l => !completedMap[l.id] && window.progressManager.isLessonUnlocked(topic.id, l.id)) || topic.lessons[0];
          this.showLessonDetail(topic, firstIncomplete);
        }
      });
    });
  }

  showLessonDetail(topic, lesson) {
    if (!window.progressManager.isLoggedIn) {
      this.showAuthGate("login");
      return;
    }

    if (!window.progressManager.isTopicUnlocked(topic.id)) {
      const prevName = window.progressManager.getPrevTopicName(topic.id);
      alert(`🔒 Chủ đề "${topic.name}" đang bị khóa!\n\nBé hãy học và đạt kết quả ở chủ đề "${prevName}" trước nhé! 🚀`);
      return;
    }

    if (!window.progressManager.isLessonUnlocked(topic.id, lesson.id)) {
      alert(`🔒 Bài học "${lesson.title}" đang bị khóa!\n\nBé hãy đạt kết quả các bài học trước trong lộ trình để mở khóa nhé! 🌟`);
      return;
    }

    const view = document.getElementById("lesson-detail-view");
    if (!view) return;

    const profile = window.progressManager.getActiveProfile();
    const lRecord = profile?.completedLessons ? profile.completedLessons[lesson.id] : null;

    document.getElementById("lesson-topic-badge").innerHTML = `${topic.icon} ${topic.name} • ${topic.englishName}`;
    document.getElementById("lesson-title").textContent = `Bài ${lesson.number}: ${lesson.title}`;
    document.getElementById("lesson-en-title").textContent = lesson.englishTitle || "";
    document.getElementById("lesson-objective-text").textContent = lesson.objective;
    document.getElementById("lesson-concept-content").innerHTML = lesson.concept;

    const exBox = document.getElementById("lesson-worked-example");
    if (exBox && lesson.workedExample) {
      exBox.innerHTML = `
        <div class="example-problem"><strong>❓ Đề bài ví dụ:</strong> ${lesson.workedExample.problem}</div>
        <div class="example-steps">
          ${lesson.workedExample.steps.map(s => `<div class="ex-step">👉 ${s}</div>`).join("")}
        </div>
        <div class="example-final-ans">✅ <strong>Đáp số chính xác:</strong> <span class="badge-ans">${lesson.workedExample.answer}</span></div>
      `;
    }

    const statusBox = document.getElementById("lesson-current-status");
    if (statusBox) {
      if (lRecord) {
        statusBox.innerHTML = `
          <span class="status-tag status-done">🎉 Đã hoàn thành</span>
          <span class="status-stars">${"⭐".repeat(lRecord.stars || 1)}</span>
        `;
      } else {
        statusBox.innerHTML = `<span class="status-tag status-new">🌱 Bài mới chưa học</span>`;
      }
    }

    const startQuizBtn = document.getElementById("btn-start-lesson-quiz");
    if (startQuizBtn) {
      startQuizBtn.onclick = () => {
        window.quizRunner.startLessonQuiz(topic, lesson);
      };
    }

    this.showView("lesson-detail-view");
  }

  renderRoadmap() {
    const container = document.getElementById("roadmap-container");
    if (!container) return;

    const profile = window.progressManager.getActiveProfile();
    const completedMap = profile?.completedLessons || {};

    container.innerHTML = TIMO_DATA.roadmap.map((stage, idx) => {
      const stageDoneCount = stage.lessons.filter(lid => completedMap[lid]).length;
      const isLevelUnlocked = idx === 0 || TIMO_DATA.roadmap[idx - 1].lessons.every(lid => completedMap[lid]);
      const isLevelFinished = stageDoneCount === stage.lessons.length;

      return `
        <div class="roadmap-stage ${isLevelFinished ? 'stage-done' : (isLevelUnlocked ? 'stage-active' : 'stage-locked')}">
          <div class="stage-node-icon">
            ${isLevelFinished ? '⭐' : (isLevelUnlocked ? stage.icon : '🔒')}
          </div>
          <div class="stage-info-card">
            <h4>${stage.title}</h4>
            <span class="stage-sub">${stage.englishTitle}</span>
            <div class="stage-progress-pills">
              ${stage.lessons.map((lid, lIdx) => {
                const isLFinished = completedMap[lid];
                return `<span class="pill-node ${isLFinished ? 'node-done' : 'node-pending'}" title="Bài ${lIdx + 1}">${isLFinished ? '✓' : lIdx + 1}</span>`;
              }).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  renderBadgesGrid() {
    const grid = document.getElementById("badges-grid-container");
    if (!grid) return;

    const profile = window.progressManager.getActiveProfile();
    const unlockedBadges = profile?.badges || [];

    grid.innerHTML = TIMO_DATA.badges.map(badge => {
      const isUnlocked = unlockedBadges.includes(badge.id);
      return `
        <div class="badge-card ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}">
          <div class="badge-icon">${badge.icon}</div>
          <h4>${badge.name}</h4>
          <span class="badge-en">${badge.englishName}</span>
          <p>${badge.desc}</p>
          <span class="badge-status-tag">${isUnlocked ? 'ĐÃ ĐẠT ĐƯỢC 🏆' : '🔒 Chưa mở'}</span>
        </div>
      `;
    }).join("");
  }

  renderMistakesReviewBanner() {
    const banner = document.getElementById("review-mistakes-banner");
    if (!banner) return;

    const profile = window.progressManager.getActiveProfile();
    const count = (profile?.mistakes || []).length;

    if (count > 0) {
      banner.style.display = "block";
      banner.innerHTML = `
        <div class="review-card">
          <div class="review-left">
            <span class="review-icon">💡</span>
            <div>
              <h4>Góc Ôn Tập: Bé đang có ${count} câu hỏi cần củng cố lại!</h4>
              <p>Luyện tập lại các câu từng làm sai giúp bé nhớ lâu và đạt điểm tối đa trong kỳ thi TIMO.</p>
            </div>
          </div>
          <button type="button" class="btn-review-action" id="btn-start-review">
            Luyện Các Câu Sai Ngay ➔
          </button>
        </div>
      `;

      const btn = document.getElementById("btn-start-review");
      if (btn) {
        btn.addEventListener("click", () => {
          window.quizRunner.startReviewMistakes();
        });
      }
    } else {
      banner.style.display = "none";
    }
  }

  renderPracticeCenter() {
    const topicSelect = document.getElementById("practice-topic-select");
    if (topicSelect && topicSelect.options.length <= 1) {
      topicSelect.innerHTML = TIMO_DATA.topics.map(t => `<option value="${t.id}">${t.icon} ${t.name} (${t.englishName})</option>`).join("");
    }
  }

  renderFullProgressPage() {
    const profile = window.progressManager.getActiveProfile();
    if (!profile) return;
    const stats = window.progressManager.getOverallStats();

    document.getElementById("prog-user-name").textContent = profile.name;
    document.getElementById("prog-user-avatar").textContent = profile.avatar;
    document.getElementById("prog-user-title").textContent = stats.levelTitle;
    document.getElementById("prog-total-xp").textContent = `${stats.xp.toLocaleString()} XP`;
    document.getElementById("prog-total-stars").textContent = `${stats.stars} ⭐`;
    document.getElementById("prog-streak-days").textContent = `${stats.streak} ngày`;
    document.getElementById("prog-lessons-done").textContent = `${stats.completedLessonsCount}/${stats.totalLessons}`;
    document.getElementById("prog-accuracy-val").textContent = `${stats.accuracy}%`;

    const tableBody = document.getElementById("quiz-history-table-body");
    if (tableBody) {
      const history = profile.quizHistory || [];
      if (history.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="empty-table-msg">Bé chưa có lịch sử làm bài kiểm tra nào. Hãy bắt đầu học bài đầu tiên ngay nhé!</td></tr>`;
      } else {
        tableBody.innerHTML = history.slice(0, 30).map(h => {
          const typeLabels = {
            lesson: "📚 Bài học",
            practice: "🧩 Luyện tập",
            timo_challenge: "🏆 Đấu trường TIMO",
            daily: "🌟 Thử thách ngày",
            review: "🔄 Ôn tập sai"
          };
          const dateStr = new Date(h.date || h.created_at).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          });
          const starsDisplay = "⭐".repeat(h.starsEarned || (h.accuracy === 100 ? 3 : (h.accuracy >= 75 ? 2 : 1)));
          const timeDisplay = h.timeSpentSeconds ? `${h.timeSpentSeconds}s` : "--";

          return `
            <tr>
              <td>
                <span class="quiz-type-tag type-${h.type}">${typeLabels[h.type] || h.type}</span>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${dateStr}</div>
              </td>
              <td>
                <strong>${h.lessonTitle || h.topic || "Tổng hợp"}</strong>
                ${h.topic && h.lessonTitle ? `<div style="font-size: 12px; color: var(--text-muted);">${h.topic}</div>` : ""}
              </td>
              <td><strong style="font-size: 16px; color: var(--primary);">${h.score} / ${h.total}</strong></td>
              <td><span>${starsDisplay}</span></td>
              <td><span class="badge-acc ${h.accuracy >= 80 ? 'acc-high' : 'acc-mid'}">${h.accuracy}%</span></td>
              <td><strong style="color: #8E44AD;">+${h.xpEarned || 0} XP</strong></td>
            </tr>
          `;
        }).join("");
      }
    }
  }

  showQuizResultModal(data) {
    const modal = document.getElementById("quiz-result-modal");
    if (!modal) return;

    const isTimo = data.mode === "timo_challenge";
    const ppq = window.TIMO_EXAM?.pointsPerQuestion || 4;
    document.getElementById("res-modal-score").textContent = isTimo
      ? `${data.score} / ${data.total} câu (${data.score * ppq}/${data.total * ppq} điểm)`
      : `${data.score} / ${data.total}`;
    document.getElementById("res-modal-accuracy").textContent = `${data.accuracy}%`;
    document.getElementById("res-modal-xp").textContent = `+${data.xpEarned} XP`;
    document.getElementById("res-modal-stars").innerHTML = "⭐".repeat(data.starsEarned || 1);

    const titleEl = document.getElementById("res-modal-title");
    const praiseEl = document.getElementById("res-modal-praise");

    if (data.accuracy === 100) {
      titleEl.textContent = "🏆 XUẤT SẮC TUYỆT VỜI!";
      praiseEl.textContent = "Bé đã trả lời đúng tất cả các câu hỏi! Thật đáng tự hào!";
      this.fireConfetti();
    } else if (data.accuracy >= 75) {
      titleEl.textContent = "🎉 RẤT TỐT!";
      praiseEl.textContent = "Bé đã hoàn thành rất giỏi! Cố gắng đạt 100% ở lần sau nhé!";
      this.fireConfetti();
    } else {
      titleEl.textContent = "🌱 HOÀN THÀNH BÀI!";
      praiseEl.textContent = "Bé hãy ôn luyện lại một chút để nắm thật vững kiến thức nhé!";
    }

    modal.classList.add("modal-open");

    const btnRetry = document.getElementById("btn-res-retry");
    const btnNext = document.getElementById("btn-res-next");
    const btnHome = document.getElementById("btn-res-home");

    if (btnRetry) {
      btnRetry.onclick = () => {
        modal.classList.remove("modal-open");
        if (data.mode === "lesson") {
          window.quizRunner.startLessonQuiz(data.topic, data.lesson);
        } else if (data.mode === "practice") {
          window.quizRunner.startPractice(data.topic?.id, null, data.total);
        } else if (data.mode === "timo_challenge") {
          window.quizRunner.startTimoChallenge();
        } else if (data.mode === "daily") {
          window.quizRunner.startDailyChallenge();
        } else if (data.mode === "review") {
          window.quizRunner.startReviewMistakes();
        }
      };
    }

    if (btnNext) {
      btnNext.onclick = () => {
        modal.classList.remove("modal-open");
        this.showView("home-view");
      };
    }

    if (btnHome) {
      btnHome.onclick = () => {
        modal.classList.remove("modal-open");
        this.showView("home-view");
      };
    }
  }

  showLevelUpModal(newLevel) {
    const modal = document.getElementById("level-up-modal");
    if (!modal) return;
    const title = window.progressManager.getLevelTitle(newLevel);
    document.getElementById("lvl-up-number").textContent = `Cấp Độ ${newLevel}`;
    document.getElementById("lvl-up-title").textContent = title;
    modal.classList.add("modal-open");
    this.fireConfetti();

    const closeBtn = document.getElementById("btn-close-lvl-up");
    if (closeBtn) {
      closeBtn.onclick = () => modal.classList.remove("modal-open");
    }
  }

  showBadgeUnlock(badge) {
    const modal = document.getElementById("badge-unlock-modal");
    if (!modal) return;
    document.getElementById("b-unlock-icon").textContent = badge.icon;
    document.getElementById("b-unlock-name").textContent = badge.name;
    document.getElementById("b-unlock-desc").textContent = badge.desc;
    modal.classList.add("modal-open");
    this.fireConfetti();

    const closeBtn = document.getElementById("btn-close-badge-modal");
    if (closeBtn) {
      closeBtn.onclick = () => modal.classList.remove("modal-open");
    }
  }

  fireConfetti() {
    const colors = ["#FF6B6B", "#4facfe", "#fbc2eb", "#f093fb", "#38ef7d", "#ffbe0b", "#ff006e"];
    const container = document.body;
    for (let i = 0; i < 40; i++) {
      const conf = document.createElement("div");
      conf.className = "confetti-piece";
      conf.style.left = `${Math.random() * 100}vw`;
      conf.style.background = colors[Math.floor(Math.random() * colors.length)];
      conf.style.animationDelay = `${Math.random() * 1.5}s`;
      conf.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }
  }
}

window.uiManager = new UIManager();

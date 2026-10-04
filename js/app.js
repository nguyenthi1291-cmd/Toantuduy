// Main Application Entry Point & Event Controller
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  if (!window.progressManager.isLoggedIn) {
    window.uiManager.showAuthGate("register");
  } else {
    window.uiManager.updateHeaderStats();
    window.uiManager.renderHomeDashboard();
    window.uiManager.renderTopicsGrid();
    window.uiManager.renderRoadmap();
    window.uiManager.renderBadgesGrid();
    window.uiManager.renderMistakesReviewBanner();
  }

  // Navigation Links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.soundManager.playClick();
      const targetView = link.getAttribute("data-target");
      if (targetView) {
        window.uiManager.showView(targetView);
      }
    });
  });

  // Sound Toggle Button
  const soundBtn = document.getElementById("btn-sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      const isSoundOn = window.soundManager.toggleSound();
      soundBtn.innerHTML = isSoundOn ? "🔊 Âm thanh: Bật" : "🔇 Âm thanh: Tắt";
      if (isSoundOn) window.soundManager.playClick();
    });
  }

  // Hero Actions
  const btnHeroStart = document.getElementById("btn-hero-start");
  if (btnHeroStart) {
    btnHeroStart.addEventListener("click", () => {
      window.soundManager.playClick();
      const firstTopic = TIMO_DATA.topics[0];
      if (firstTopic && firstTopic.lessons.length > 0) {
        window.uiManager.showLessonDetail(firstTopic, firstTopic.lessons[0]);
      }
    });
  }

  const btnHeroRoadmap = document.getElementById("btn-hero-roadmap");
  if (btnHeroRoadmap) {
    btnHeroRoadmap.addEventListener("click", () => {
      window.soundManager.playClick();
      const roadmapSection = document.getElementById("roadmap-section");
      if (roadmapSection) {
        roadmapSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Daily Challenge Button in Home
  const btnStartDaily = document.getElementById("btn-start-daily-challenge");
  if (btnStartDaily) {
    btnStartDaily.addEventListener("click", () => {
      window.soundManager.playClick();
      window.quizRunner.startDailyChallenge();
    });
  }

  // TIMO Arena Challenge Button in Home
  const btnStartTimoArena = document.getElementById("btn-start-timo-arena");
  if (btnStartTimoArena) {
    btnStartTimoArena.addEventListener("click", () => {
      window.soundManager.playClick();
      window.quizRunner.startTimoChallenge();
    });
  }

  // Practice Center Form
  const practiceForm = document.getElementById("practice-center-form");
  if (practiceForm) {
    practiceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.soundManager.playClick();
      const topicId = document.getElementById("practice-topic-select").value;
      const difficulty = document.getElementById("practice-diff-select").value || null;
      const count = parseInt(document.getElementById("practice-count-select").value) || 10;
      window.quizRunner.startPractice(topicId, difficulty, count);
    });
  }

  // Exit Quiz Button
  const btnExitQuiz = document.getElementById("btn-exit-quiz");
  if (btnExitQuiz) {
    btnExitQuiz.addEventListener("click", () => {
      if (confirm("Bé có chắc muốn tạm dừng bài kiểm tra này và quay về trang chủ không?")) {
        window.quizRunner.stopTimer();
        window.uiManager.showView("home-view");
      }
    });
  }

  // Back from Lesson Detail to Home
  const btnBackFromLesson = document.getElementById("btn-back-from-lesson");
  if (btnBackFromLesson) {
    btnBackFromLesson.addEventListener("click", () => {
      window.soundManager.playClick();
      window.uiManager.showView("home-view");
    });
  }

  // Mandatory Auth Gate Handlers
  initAuthGate();

  // User Account Menu & Switcher Handlers
  initAccountMenu();

  // Supabase Settings Modal Controller
  initSupabaseModal();
});

// Authentication Gate Logic
function initAuthGate() {
  const tabRegister = document.getElementById("tab-auth-register");
  const tabLogin = document.getElementById("tab-auth-login");
  const formRegister = document.getElementById("form-gate-register");
  const formLogin = document.getElementById("form-gate-login");

  if (tabRegister) {
    tabRegister.addEventListener("click", () => {
      window.soundManager.playClick();
      window.uiManager.switchAuthTab("register");
    });
  }

  if (tabLogin) {
    tabLogin.addEventListener("click", () => {
      window.soundManager.playClick();
      window.uiManager.switchAuthTab("login");
    });
  }

  // Avatar Selection in Registration
  let selectedAvatar = "🦁";
  const avatarButtons = document.querySelectorAll(".gate-avatar-btn");
  avatarButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      avatarButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAvatar = btn.getAttribute("data-avatar") || "🦁";
      window.soundManager.playClick();
    });
  });

  // Handle Registration Submit
  if (formRegister) {
    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("gate-reg-name").value.trim();
      const username = document.getElementById("gate-reg-user").value.trim();
      const password = document.getElementById("gate-reg-pass").value;

      const submitBtn = formRegister.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Đang tạo tài khoản...";
      }

      const result = await window.progressManager.signUp(name, username, password, selectedAvatar);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Tạo Tài Khoản & Bắt Đầu Học Ngay 🚀";
      }

      if (result.success) {
        window.soundManager.playComplete();
        window.uiManager.fireConfetti();
        alert(`🎉 Chúc mừng bé ${result.profile.name}! Tài khoản học TIMO 1 đã được kích hoạt thành công!`);
        window.uiManager.hideAuthGate();
        window.uiManager.showView("home-view");
      } else {
        window.soundManager.playWrong();
        alert(`❌ ${result.error}`);
      }
    });
  }

  // Handle Login Submit
  if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = document.getElementById("gate-login-user").value.trim();
      const pass = document.getElementById("gate-login-pass").value;

      const submitBtn = formLogin.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Đang kiểm tra...";
      }

      const result = await window.progressManager.login(user, pass);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Đăng Nhập Vào Học Ngay ➔";
      }

      if (result.success) {
        window.soundManager.playStar();
        window.uiManager.hideAuthGate();
        window.uiManager.showView("home-view");
      } else {
        window.soundManager.playWrong();
        alert(`❌ ${result.error}`);
      }
    });
  }
}

// User Profile Menu & Logout Controller
function initAccountMenu() {
  const profileBtn = document.getElementById("btn-open-profile-modal");
  const modal = document.getElementById("account-menu-modal");
  const closeBtn = document.getElementById("btn-close-account-menu");

  const btnLogout = document.getElementById("btn-account-logout");
  const btnSwitchKid = document.getElementById("btn-account-switch-kid");
  const btnNewKid = document.getElementById("btn-account-new-kid");
  const btnViewProgress = document.getElementById("btn-account-view-progress");

  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      window.soundManager.playClick();
      if (!window.progressManager.isLoggedIn) {
        window.uiManager.showAuthGate("login");
        return;
      }
      renderAccountModalData();
      modal?.classList.add("modal-open");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal?.classList.remove("modal-open");
    });
  }

  if (btnViewProgress) {
    btnViewProgress.addEventListener("click", () => {
      modal?.classList.remove("modal-open");
      window.uiManager.showView("progress-view");
    });
  }

  if (btnSwitchKid) {
    btnSwitchKid.addEventListener("click", () => {
      modal?.classList.remove("modal-open");
      window.uiManager.showAuthGate("login");
    });
  }

  if (btnNewKid) {
    btnNewKid.addEventListener("click", () => {
      modal?.classList.remove("modal-open");
      window.uiManager.showAuthGate("register");
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      if (confirm("Bé có chắc muốn đăng xuất khỏi tài khoản không?")) {
        modal?.classList.remove("modal-open");
        window.progressManager.logout();
        window.uiManager.showAuthGate("login");
      }
    });
  }
}

function renderAccountModalData() {
  const profile = window.progressManager.getActiveProfile();
  if (!profile) return;
  const stats = window.progressManager.getOverallStats();

  document.getElementById("acc-modal-avatar").textContent = profile.avatar || "🦁";
  document.getElementById("acc-modal-name").textContent = profile.name || "Bé Lớp 1";
  document.getElementById("acc-modal-user").textContent = `@${profile.username || profile.email || 'user'}`;
  document.getElementById("acc-modal-level-title").textContent = `Cấp ${stats.level} • ${stats.levelTitle}`;
  document.getElementById("acc-modal-xp").textContent = `${stats.xp.toLocaleString()} XP`;
  document.getElementById("acc-modal-stars").textContent = `${stats.stars} ⭐`;
  document.getElementById("acc-modal-done").textContent = `${stats.completedLessonsCount}/25 bài`;
}

// Supabase Cloud Configuration Modal
function initSupabaseModal() {
  const modal = document.getElementById("supabase-config-modal");
  const openBtn = document.getElementById("btn-open-cloud-modal");
  const closeBtn = document.getElementById("btn-close-cloud-modal");
  const form = document.getElementById("form-supabase-config");
  const testBtn = document.getElementById("btn-test-supabase");
  const statusMsg = document.getElementById("supabase-test-status");

  if (!modal) return;

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      window.soundManager.playClick();
      document.getElementById("input-supabase-url").value = window.supabaseService.url;
      document.getElementById("input-supabase-anon").value = window.supabaseService.anonKey;
      if (statusMsg) statusMsg.textContent = "";
      modal.classList.add("modal-open");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("modal-open");
    });
  }

  if (testBtn) {
    testBtn.addEventListener("click", async () => {
      const url = document.getElementById("input-supabase-url").value.trim();
      const anon = document.getElementById("input-supabase-anon").value.trim();
      if (!anon) {
        statusMsg.innerHTML = `<span style="color: #e74c3c;">❌ Vui lòng nhập Supabase Anon Key để kết nối Cloud.</span>`;
        return;
      }
      statusMsg.innerHTML = `<span>⏳ Đang kiểm tra kết nối tới Supabase...</span>`;
      window.supabaseService.updateConfig(url, anon);
      const isOk = await window.supabaseService.checkConnection();
      if (isOk) {
        statusMsg.innerHTML = `<span style="color: #27ae60;">✅ Kết nối Supabase Cloud thành công! Dữ liệu của bé đã sẵn sàng đồng bộ trực tuyến.</span>`;
        window.soundManager.playStar();
      } else {
        statusMsg.innerHTML = `<span style="color: #e67e22;">⚠️ Không thể kết nối. Hệ thống vẫn lưu trữ 100% dữ liệu an toàn trên thiết bị của bé.</span>`;
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const url = document.getElementById("input-supabase-url").value.trim();
      const anon = document.getElementById("input-supabase-anon").value.trim();
      window.supabaseService.updateConfig(url, anon);
      modal.classList.remove("modal-open");
      alert("💾 Cài đặt Supabase Cloud đã được lưu!");
    });
  }
}

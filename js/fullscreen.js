// Fullscreen & Landscape Manager
// - Tự vào toàn màn hình + khóa xoay ngang khi bé mở bài học / làm bài tập
// - Tự thoát khi quay lại các trang khác (trang chủ, lộ trình, huy hiệu...)
// - Nút ⛶ để bật/tắt thủ công
// Giới hạn trình duyệt:
//   * Chỉ được bật toàn màn hình ngay sau thao tác bấm của người dùng.
//   * Khóa xoay ngang (screen.orientation.lock) chỉ chạy trên Android khi đang toàn màn hình.
//   * iPhone Safari không hỗ trợ Fullscreen API cho trang web → dùng "chế độ tập trung"
//     (ẩn thanh menu, đầu/cuối trang) để vùng học vẫn chiếm trọn màn hình.

class FullscreenManager {
  constructor() {
    this.learningViews = ["lesson-detail-view", "quiz-view"];
    this.userOptOut = false; // bé/phụ huynh đã tự tắt → không tự bật lại cho tới khi rời vùng học
    this.root = document.documentElement;

    const onChange = () => this.syncUI();
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    window.addEventListener("orientationchange", () => this.syncUI());
    window.addEventListener("resize", () => this.syncUI());

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-fullscreen-toggle");
      if (btn) {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  get supported() {
    return !!(this.root.requestFullscreen || this.root.webkitRequestFullscreen);
  }

  get isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  // Trạng thái "đang học toàn màn hình" (API thật hoặc chế độ tập trung trên iPhone)
  get isActive() {
    return this.isFullscreen || document.body.classList.contains("focus-mode");
  }

  async enter() {
    document.body.classList.add("focus-mode");
    if (this.supported && !this.isFullscreen) {
      try {
        const req = this.root.requestFullscreen || this.root.webkitRequestFullscreen;
        const p = req.call(this.root, { navigationUI: "hide" });
        if (p && p.then) await p;
      } catch (err) {
        // Bị chặn (không có thao tác bấm, iframe...) → vẫn giữ chế độ tập trung
      }
    }
    await this.lockLandscape();
    this.syncUI();
  }

  async exit() {
    document.body.classList.remove("focus-mode");
    try {
      if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
    } catch (e) { /* bỏ qua */ }
    if (this.isFullscreen) {
      try {
        const ex = document.exitFullscreen || document.webkitExitFullscreen;
        const p = ex.call(document);
        if (p && p.then) await p;
      } catch (e) { /* bỏ qua */ }
    }
    this.syncUI();
  }

  toggle() {
    if (this.isActive) {
      this.userOptOut = true;
      this.exit();
    } else {
      this.userOptOut = false;
      this.enter();
    }
  }

  async lockLandscape() {
    try {
      if (screen.orientation && screen.orientation.lock && this.isFullscreen) {
        await screen.orientation.lock("landscape");
      }
    } catch (e) {
      // iOS / máy tính không hỗ trợ khóa → bố cục ngang vẫn tự co giãn bằng CSS
    }
  }

  // Gọi mỗi khi chuyển trang (từ uiManager.showView)
  onViewChange(viewId) {
    if (this.learningViews.includes(viewId)) {
      if (!this.userOptOut && !this.isActive) this.enter();
    } else {
      this.userOptOut = false;
      if (this.isActive) this.exit();
    }
    this.syncUI();
  }

  syncUI() {
    // Người dùng thoát bằng phím Esc / nút Back của hệ điều hành → tắt luôn chế độ tập trung
    if (this.supported && !this.isFullscreen && document.body.classList.contains("focus-mode") && this._wasFullscreen) {
      document.body.classList.remove("focus-mode");
      this.userOptOut = true;
    }
    this._wasFullscreen = this.isFullscreen;

    const active = this.isActive;
    document.body.classList.toggle("is-fullscreen", this.isFullscreen);
    document.querySelectorAll(".btn-fullscreen-toggle").forEach(btn => {
      btn.innerHTML = active ? "🗗 Thu nhỏ" : "⛶ Toàn màn hình";
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.title = active ? "Thoát chế độ toàn màn hình" : "Học toàn màn hình (xoay ngang)";
    });

    // Gợi ý xoay ngang khi đang học trên điện thoại dọc
    const portraitPhone = window.matchMedia("(orientation: portrait) and (max-width: 600px)").matches;
    document.body.classList.toggle("suggest-rotate", active && portraitPhone && !this._rotateDismissed);
  }

  dismissRotateHint() {
    this._rotateDismissed = true;
    this.syncUI();
  }
}

window.fullscreenManager = new FullscreenManager();

// Interactive Quiz Runner & Competition Engine with Detailed Scores & Cloud Sync
class QuizRunner {
  constructor() {
    this.currentMode = null; // 'lesson', 'practice', 'timo_challenge', 'daily', 'review'
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = []; // Track detailed answers for every question
    this.currentLesson = null;
    this.currentTopic = null;
    this.timerInterval = null;
    this.timeRemaining = 0;
    this.startTime = null;
    this.hasAnswered = false;
  }

  startLessonQuiz(topic, lesson) {
    this.currentMode = "lesson";
    this.currentTopic = topic;
    this.currentLesson = lesson;
    this.currentQuestions = window.questionEngine.getQuestionsByLesson(lesson.id);
    
    if (this.currentQuestions.length < 4) {
      const extra = window.questionEngine.getQuestionsByTopic(topic.id)
        .filter(q => !this.currentQuestions.some(cq => cq.id === q.id));
      this.currentQuestions = [...this.currentQuestions, ...extra.slice(0, 4 - this.currentQuestions.length)];
    }

    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = [];
    this.startTime = Date.now();
    this.showQuizView();
  }

  startPractice(topicId, difficulty, count) {
    this.currentMode = "practice";
    this.currentTopic = TIMO_DATA.topics.find(t => t.id === topicId) || null;
    this.currentLesson = null;
    this.currentQuestions = window.questionEngine.getQuestionsByTopic(topicId, difficulty, count);
    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = [];
    this.startTime = Date.now();
    this.showQuizView();
  }

  startTimoChallenge() {
    this.currentMode = "timo_challenge";
    this.currentTopic = null;
    this.currentLesson = null;
    this.currentQuestions = window.questionEngine.getTimoChallengeQuestions(10);
    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = [];
    this.timeRemaining = 15 * 60; // 15 minutes
    this.startTime = Date.now();
    this.showQuizView();
    this.startTimer();
  }

  startDailyChallenge() {
    this.currentMode = "daily";
    this.currentTopic = null;
    this.currentLesson = null;
    this.currentQuestions = [window.questionEngine.getDailyQuestion()];
    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = [];
    this.startTime = Date.now();
    this.showQuizView();
  }

  startReviewMistakes() {
    const mistakeIds = window.progressManager.getActiveProfile()?.mistakes || [];
    if (mistakeIds.length === 0) {
      alert("Tuyệt vời! Bé hiện không có câu hỏi sai nào cần ôn tập!");
      return;
    }
    this.currentMode = "review";
    this.currentTopic = null;
    this.currentLesson = null;
    this.currentQuestions = window.questionEngine.getMistakeQuestions(mistakeIds);
    this.currentIndex = 0;
    this.score = 0;
    this.xpEarned = 0;
    this.answersDetail = [];
    this.startTime = Date.now();
    this.showQuizView();
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      if (this.timeRemaining <= 0) {
        this.stopTimer();
        alert("⏰ Đã hết thời gian làm bài thử thách TIMO!");
        this.finishQuiz();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const el = document.getElementById("quiz-timer-display");
    if (!el) return;
    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    el.textContent = `⏱️ ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  showQuizView() {
    window.uiManager.showView("quiz-view");
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    this.hasAnswered = false;
    window.soundManager?.stopSpeech();

    const container = document.getElementById("quiz-card-wrapper");
    if (!container) return;

    if (this.currentIndex >= this.currentQuestions.length) {
      this.finishQuiz();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    
    // Update top header title
    const headerTitle = document.getElementById("quiz-top-title");
    if (headerTitle) {
      if (this.currentMode === "lesson") {
        headerTitle.innerHTML = `📚 <strong>${this.currentTopic.name}</strong>: ${this.currentLesson.title}`;
      } else if (this.currentMode === "practice") {
        headerTitle.innerHTML = `🧩 <strong>Luyện tập tự do</strong>: ${this.currentTopic ? this.currentTopic.name : "Tổng hợp"}`;
      } else if (this.currentMode === "timo_challenge") {
        headerTitle.innerHTML = `🏆 <strong>THỬ THÁCH ĐẤU TRƯỜNG TIMO 1</strong>`;
      } else if (this.currentMode === "daily") {
        headerTitle.innerHTML = `🌟 <strong>THỬ THÁCH TOÁN HỌC HÀNG NGÀY</strong>`;
      } else if (this.currentMode === "review") {
        headerTitle.innerHTML = `🔄 <strong>Ôn Tập Các Câu Bé Đã Làm Sai</strong>`;
      }
    }

    // Render question HTML
    container.innerHTML = window.questionEngine.renderQuestion(
      q,
      this.currentIndex,
      this.currentQuestions.length
    );

    const progressFill = document.getElementById("quiz-progress-bar-fill");
    if (progressFill) {
      const pct = Math.round((this.currentIndex / this.currentQuestions.length) * 100);
      progressFill.style.width = `${pct}%`;
    }

    this.attachEventListeners(q);
  }

  attachEventListeners(question) {
    const container = document.getElementById("quiz-card-wrapper");
    if (!container) return;

    // Audio TTS Speakers
    const speakerBtns = container.querySelectorAll(".btn-tts-speaker");
    speakerBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const speechText = decodeURIComponent(btn.getAttribute("data-speech") || "");
        const speechLang = btn.getAttribute("data-lang") || "vi-VN";
        
        // Add visual active animation to speaker button
        speakerBtns.forEach(b => b.classList.remove("speaking-active"));
        btn.classList.add("speaking-active");
        
        window.soundManager.speak(speechText, speechLang);
      });
    });

    // Options (Multiple choice & True/False)
    const optionBtns = container.querySelectorAll(".option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.hasAnswered) return;
        const selected = btn.getAttribute("data-option");
        this.submitAnswer(question, selected, btn);
      });
    });

    // Fill Blank input with virtual numpad
    const blankInput = container.querySelector("#blank-input");
    const numKeys = container.querySelectorAll(".num-key");
    const clearBtn = container.querySelector("#btn-clear-input");
    const submitBlankBtn = container.querySelector("#btn-submit-blank");

    if (numKeys && blankInput) {
      numKeys.forEach(k => {
        k.addEventListener("click", () => {
          if (this.hasAnswered) return;
          window.soundManager.playClick();
          if (blankInput.value.length < 5) {
            blankInput.value += k.getAttribute("data-val");
          }
        });
      });
    }

    if (clearBtn && blankInput) {
      clearBtn.addEventListener("click", () => {
        if (this.hasAnswered) return;
        window.soundManager.playClick();
        blankInput.value = "";
      });
    }

    if (submitBlankBtn && blankInput) {
      submitBlankBtn.addEventListener("click", () => {
        if (this.hasAnswered) return;
        const val = blankInput.value.trim();
        if (!val) {
          alert("Bé hãy nhập số đáp án vào ô nhé!");
          return;
        }
        this.submitAnswer(question, val, submitBlankBtn);
      });
    }
  }

  submitAnswer(question, userAnswer, element) {
    this.hasAnswered = true;
    window.soundManager?.stopSpeech();

    // Record question in history for rotation tracking
    if (window.progressManager?.recordAnsweredQuestion) {
      window.progressManager.recordAnsweredQuestion(question.id);
    }

    const isCorrect = (userAnswer.toString().trim().toLowerCase() === question.answer.toString().trim().toLowerCase());
    const feedbackBox = document.getElementById("feedback-container");

    // Track answer detail for database recording
    this.answersDetail.push({
      questionId: question.id,
      questionText: question.question,
      userAnswer: userAnswer.toString().trim(),
      correctAnswer: question.answer,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      this.score++;
      const xp = question.xp || 10;
      this.xpEarned += xp;
      window.progressManager.addXP(xp);

      if (this.currentMode === "review") {
        window.progressManager.resolveMistake(question.id);
      }

      window.soundManager.playCorrect();
      if (element && element.classList) {
        element.classList.add("btn-correct-choice");
      }

      feedbackBox.className = "feedback-container feedback-success";
      feedbackBox.innerHTML = `
        <div class="feedback-icon">🎉</div>
        <div class="feedback-text">
          <h4>Chính xác tuyệt vời!</h4>
          <p>${question.explanation || "Bé làm rất xuất sắc!"}</p>
          <div class="feedback-reward">💎 +${xp} XP &nbsp;|&nbsp; ⭐ +1 Điểm</div>
        </div>
        <button type="button" id="btn-next-question" class="btn-continue-step">Câu Tiếp Theo ➔</button>
      `;
    } else {
      window.soundManager.playWrong();
      window.progressManager.recordMistake(question.id);

      if (element && element.classList) {
        element.classList.add("btn-wrong-choice");
      }

      feedbackBox.className = "feedback-container feedback-error";
      feedbackBox.innerHTML = `
        <div class="feedback-icon">❌</div>
        <div class="feedback-text">
          <h4>Chưa đúng rồi, bé đừng nản nhé!</h4>
          <p class="fb-hint">💡 <strong>Gợi ý:</strong> ${question.hint || "Bé hãy đếm lại thật cẩn thận nhé!"}</p>
          <p class="fb-ans">Đáp án đúng là: <strong>${question.answer}</strong> (${question.explanation || ""})</p>
        </div>
        <button type="button" id="btn-next-question" class="btn-continue-step">Tiếp Tục ➔</button>
      `;
    }

    feedbackBox.style.display = "flex";

    const nextBtn = document.getElementById("btn-next-question");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        window.soundManager.playClick();
        this.currentIndex++;
        this.renderCurrentQuestion();
      });
    }
  }

  finishQuiz() {
    this.stopTimer();
    const total = this.currentQuestions.length;
    const accuracy = Math.round((this.score / total) * 100);
    const timeSpentSeconds = this.startTime ? Math.round((Date.now() - this.startTime) / 1000) : 0;

    // Track unlocked topics before saving
    const prevUnlockedTopics = (TIMO_DATA.topics || []).filter(t => window.progressManager.isTopicUnlocked(t.id)).map(t => t.id);

    // Calculate stars
    let starsEarned = 1;
    if (accuracy === 100) starsEarned = 3;
    else if (accuracy >= 75) starsEarned = 2;

    // Bonus XP for completing mode
    let bonusXP = 0;
    if (this.currentMode === "lesson" && this.currentTopic && this.currentLesson) {
      bonusXP = 50;
      window.progressManager.addXP(bonusXP);
      window.progressManager.completeLesson(
        this.currentTopic.id,
        this.currentLesson.id,
        starsEarned,
        this.score,
        total
      );

      // Check if newly unlocked a new topic on the roadmap!
      const nextUnlockedTopics = (TIMO_DATA.topics || []).filter(t => window.progressManager.isTopicUnlocked(t.id));
      const newlyUnlockedTopic = nextUnlockedTopics.find(t => !prevUnlockedTopics.includes(t.id));

      if (newlyUnlockedTopic) {
        setTimeout(() => {
          alert(`🎉 XUẤT SẮC THÔNG THÁI!\n\nBé đã đạt kết quả tuyệt vời ở chủ đề "${this.currentTopic?.name}"!\n\nChủ đề tiếp theo "${newlyUnlockedTopic.name}" đã chính thức MỞ KHÓA! 🚀`);
        }, 600);
      }
    } else if (this.currentMode === "timo_challenge") {
      bonusXP = 100;
      window.progressManager.addXP(bonusXP);
    } else if (this.currentMode === "daily") {
      bonusXP = 20;
      window.progressManager.addXP(bonusXP);
    }

    this.xpEarned += bonusXP;

    // Ghi nhận đầy đủ điểm số & lưu vào Supabase Cloud và Local Storage
    const recordedResult = window.progressManager.recordQuizResult({
      type: this.currentMode,
      topic: this.currentTopic ? this.currentTopic.name : "Tổng hợp",
      lessonId: this.currentLesson ? this.currentLesson.id : null,
      lessonTitle: this.currentLesson ? this.currentLesson.title : null,
      score: this.score,
      total: total,
      accuracy: accuracy,
      starsEarned: starsEarned,
      xpEarned: this.xpEarned,
      timeSpentSeconds: timeSpentSeconds,
      answersDetail: this.answersDetail
    });

    window.soundManager.playComplete();

    // Show Results Summary Modal
    window.uiManager.showQuizResultModal({
      mode: this.currentMode,
      topic: this.currentTopic,
      lesson: this.currentLesson,
      score: this.score,
      total: total,
      accuracy: accuracy,
      starsEarned: starsEarned,
      xpEarned: this.xpEarned,
      bonusXP: bonusXP,
      timeSpentSeconds: timeSpentSeconds
    });
  }
}

window.quizRunner = new QuizRunner();

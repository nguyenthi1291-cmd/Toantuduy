// Question Engine: Renderers, Interactive Inputs, Hints, Bilingual Support & Audio TTS
class QuestionEngine {
  constructor() {
    this.allQuestions = TIMO_DATA.questions || [];
  }

  prioritizeAndRotate(questionsList) {
    if (!questionsList || questionsList.length === 0) return [];
    
    const userState = window.progressManager?.getActiveProfile();
    const answeredIds = userState?.answeredQuestions || [];

    const unseen = questionsList.filter(q => !answeredIds.includes(q.id));
    const seen = questionsList.filter(q => answeredIds.includes(q.id));

    const shuffledUnseen = this.shuffleArray([...unseen]);
    const shuffledSeen = this.shuffleArray([...seen]);

    // If unseen questions exist, prioritize them first.
    // If all questions have been answered, cycle/rotate through seen questions dynamically!
    if (shuffledUnseen.length > 0) {
      return [...shuffledUnseen, ...shuffledSeen];
    } else {
      return shuffledSeen;
    }
  }

  getQuestionsByLesson(lessonId) {
    let list = this.allQuestions.filter(q => q.lessonId === lessonId);
    return this.prioritizeAndRotate(list);
  }

  getQuestionsByTopic(topicId, difficulty = null, limit = null) {
    let list = this.allQuestions.filter(q => q.topic === topicId);
    if (difficulty) {
      list = list.filter(q => q.difficulty === parseInt(difficulty));
    }
    list = this.prioritizeAndRotate(list);
    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }

  getTimoChallengeQuestions(count = 10) {
    // Pick questions from each of the 5 topics for balanced competition
    const topics = ["arithmetic", "geometry", "logic", "advanced-arithmetic", "combinatorics"];
    let selected = [];
    topics.forEach(topId => {
      const qs = this.getQuestionsByTopic(topId);
      selected.push(...qs.slice(0, 2));
    });

    return this.shuffleArray(selected).slice(0, count);
  }

  getDailyQuestion() {
    // Generate deterministic question of the day based on date
    const todayStr = new Date().toISOString().split("T")[0];
    let hash = 0;
    for (let i = 0; i < todayStr.length; i++) {
      hash = (hash << 5) - hash + todayStr.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash) % this.allQuestions.length;
    return this.allQuestions[index];
  }

  getMistakeQuestions(mistakeIds) {
    if (!mistakeIds || mistakeIds.length === 0) return [];
    return this.allQuestions.filter(q => mistakeIds.includes(q.id));
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  renderQuestion(question, questionIndex, totalQuestions, userState = {}) {
    const diffStars = "⭐".repeat(question.difficulty || 1);
    const visualHtml = question.visual ? `<div class="question-visual-box">${question.visual}</div>` : "";

    const enText = question.questionEn ? question.questionEn : question.question;

    let inputAreaHtml = "";

    if (question.type === "multiple-choice") {
      inputAreaHtml = `
        <div class="options-grid">
          ${question.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            return `
              <button type="button" class="option-btn" data-option="${opt}">
                <span class="opt-letter">${letter}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>
      `;
    } else if (question.type === "fill-blank") {
      inputAreaHtml = `
        <div class="fill-blank-container">
          <div class="input-display-row">
            <span class="input-label">Đáp án của bé:</span>
            <input type="text" id="blank-input" class="blank-input-box" readonly placeholder="?" />
            <button type="button" id="btn-clear-input" class="btn-key-action">⌫ Xóa</button>
          </div>
          <div class="kid-numpad">
            <button type="button" class="num-key" data-val="1">1</button>
            <button type="button" class="num-key" data-val="2">2</button>
            <button type="button" class="num-key" data-val="3">3</button>
            <button type="button" class="num-key" data-val="4">4</button>
            <button type="button" class="num-key" data-val="5">5</button>
            <button type="button" class="num-key" data-val="6">6</button>
            <button type="button" class="num-key" data-val="7">7</button>
            <button type="button" class="num-key" data-val="8">8</button>
            <button type="button" class="num-key" data-val="9">9</button>
            <button type="button" class="num-key" data-val="0">0</button>
          </div>
          <button type="button" id="btn-submit-blank" class="btn-submit-answer">Kiểm Tra Đáp Án 🚀</button>
        </div>
      `;
    } else if (question.type === "true-false") {
      inputAreaHtml = `
        <div class="tf-options-grid">
          <button type="button" class="option-btn tf-btn tf-true" data-option="Đúng">
            <span class="tf-icon">✅</span>
            <span class="opt-text">ĐÚNG / TRUE</span>
          </button>
          <button type="button" class="option-btn tf-btn tf-false" data-option="Sai">
            <span class="tf-icon">❌</span>
            <span class="opt-text">SAI / FALSE</span>
          </button>
        </div>
      `;
    }

    return `
      <div class="question-card" data-qid="${question.id}">
        <div class="question-header">
          <span class="q-progress-badge">Câu ${questionIndex + 1} / ${totalQuestions}</span>
          <span class="q-difficulty-badge">${diffStars} Độ khó ${question.difficulty}</span>
          <span class="q-xp-tag">💎 +${question.xp || 10} XP</span>
        </div>

        <div class="question-body">
          <!-- Audio Speaker Toolbar (Loa Đọc Tiếng Anh) -->
          <div class="audio-speaker-toolbar">
            <button type="button" class="btn-tts-speaker btn-tts-en" data-speech="${encodeURIComponent(enText)}" data-lang="en-US">
              🔊 🇬🇧 Read English
            </button>
          </div>

          <!-- Bilingual Question Prompts -->
          <div class="bilingual-question-box">
            <h3 class="question-text">${question.question}</h3>
            <div class="question-text-en">
              <span class="lang-flag">🇬🇧</span>
              <span class="en-content">${enText}</span>
            </div>
          </div>

          ${visualHtml}
          ${inputAreaHtml}
        </div>

        <!-- Dynamic Feedback Container -->
        <div id="feedback-container" class="feedback-container" style="display: none;"></div>
      </div>
    `;
  }
}

window.questionEngine = new QuestionEngine();

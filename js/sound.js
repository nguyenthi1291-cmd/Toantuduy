// Web Audio API Sound Effects & Child-Friendly Text-To-Speech (TTS) Engine
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.voices = [];
    this.initAudioContext();
    this.initVoices();
  }

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  initVoices() {
    if ('speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices();
      };
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCorrect() {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      gain.gain.setValueAtTime(0.2, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.25);
    });
  }

  playWrong() {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const now = this.ctx.currentTime;
    const notes = [330, 260]; // E4 -> C4
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + index * 0.12);
      gain.gain.setValueAtTime(0.15, now + index * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.12 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + index * 0.12);
      osc.stop(now + index * 0.12 + 0.2);
    });
  }

  playStar() {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const now = this.ctx.currentTime;
    const notes = [659.25, 880, 1174.66, 1318.51]; // E5, A5, D6, E6
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.09);
      gain.gain.setValueAtTime(0.2, now + index * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.09 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + index * 0.09);
      osc.stop(now + index * 0.09 + 0.4);
    });
  }

  playComplete() {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.25, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.45);
    });
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopSpeech();
    }
    return this.enabled;
  }

  // Chuẩn hóa văn bản toán học & ký hiệu giúp phát âm Tiếng Việt chuẩn 100% cho bé Lớp 1
  normalizeSpeechText(text, lang = 'vi-VN') {
    if (!text) return "";
    
    let s = text
      .replace(/<[^>]*>/g, '') // Bỏ thẻ HTML
      .replace(/\[\s*\?\s*\]/g, lang.startsWith('vi') ? ' bao nhiêu ' : ' how much ')
      .replace(/\?/g, lang.startsWith('vi') ? ' bao nhiêu ' : ' how much ');

    if (lang.startsWith('vi')) {
      // Chuyển đổi các dấu phép tính toán học sang câu nói tiếng Việt rõ ràng
      s = s
        .replace(/\+/g, ' cộng ')
        .replace(/--|—|-/g, ' trừ ')
        .replace(/\=/g, ' bằng ')
        .replace(/\×|\*/g, ' nhân ')
        .replace(/\:|\÷/g, ' chia ')
        .replace(/🍎/g, ' quả táo ')
        .replace(/🍏/g, ' quả táo xanh ')
        .replace(/⭐/g, ' ngôi sao ')
        .replace(/🎈/g, ' quả bóng ')
        .replace(/🔺/g, ' hình tam giác ')
        .replace(/🟦/g, ' hình vuông ')
        .replace(/🟨/g, ' hình chữ nhật ')
        .replace(/🔴/g, ' hình tròn ');
    } else {
      // English math operations
      s = s
        .replace(/\+/g, ' plus ')
        .replace(/--|—|-/g, ' minus ')
        .replace(/\=/g, ' equals ')
        .replace(/\×|\*/g, ' times ')
        .replace(/\:|\÷/g, ' divided by ');
    }

    s = s.replace(/\s+/g, ' ').trim();
    return s;
  }

  getBestVoice(lang = 'vi-VN') {
    const allVoices = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
    const list = (allVoices && allVoices.length > 0) ? allVoices : this.voices;
    if (!list || list.length === 0) return null;

    const targetLang = lang.toLowerCase().replace('_', '-');
    if (targetLang.startsWith('vi')) {
      // Ưu tiên các giọng đọc Tiếng Việt (Google Tiếng Việt, Microsoft HoaiMy, Microsoft An, vi-VN, vietnamese)
      return list.find(v => 
        v.lang.toLowerCase().replace('_', '-').includes('vi-vn') ||
        v.lang.toLowerCase().includes('vi') ||
        v.name.toLowerCase().includes('viet') ||
        v.name.toLowerCase().includes('hoaimy') ||
        v.name.toLowerCase().includes('an')
      ) || null;
    } else if (targetLang.startsWith('en')) {
      return list.find(v => 
        v.lang.toLowerCase().includes('en-us') ||
        v.lang.toLowerCase().includes('en')
      ) || null;
    }
    return null;
  }

  // Text-To-Speech (Loa đọc bài tập chuẩn cho bé)
  speak(text, lang = 'vi-VN') {
    if (!this.enabled) return;
    if (!('speechSynthesis' in window)) {
      console.warn("Speech synthesis not supported in this browser.");
      return;
    }

    this.stopSpeech();

    const cleanText = this.normalizeSpeechText(text, lang);
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = lang.startsWith('vi') ? 0.90 : 0.88; // Tốc độ vừa phải, chuẩn phát âm
    utterance.pitch = 1.0; // Giọng tự nhiên thân thiện cho bé

    const bestVoice = this.getBestVoice(lang);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

window.soundManager = new SoundManager();

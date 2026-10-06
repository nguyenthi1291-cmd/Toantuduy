// TIMO 1 Full Curriculum Data, Lessons & Question Bank
// Designed specifically for Grade 1 TIMO Mathematics Competition Learners

const TIMO_DATA = {
  topics: [
    {
      id: "arithmetic",
      name: "Số học",
      englishName: "Arithmetic",
      icon: "🔢",
      color: "#4A90E2",
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Phép cộng, phép trừ trong phạm vi 20 và 100, tìm số chưa biết và quy luật dãy số bí ẩn.",
      totalLessons: 5,
      lessons: [
        {
          id: "arith-lesson-1",
          number: 1,
          title: "Cộng trong phạm vi 20",
          englishTitle: "Addition within 20",
          icon: "➕",
          objective: "Giúp bé nắm vững phương pháp đếm thêm, tách gộp số để cộng nhanh trong phạm vi 20.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp đếm thêm & gộp 10:</h4>
              <p>Khi tính <strong>7 + 5</strong>, bé hãy bắt đầu từ số lớn hơn (7), sau đó đếm thêm 5 bước:</p>
              <div class="visual-math-row">
                <div class="math-group"><span class="items-bubble">🍎🍎🍎🍎🍎🍎🍎</span><span class="count-tag">7 quả</span></div>
                <div class="math-op">➕</div>
                <div class="math-group"><span class="items-bubble">🍏🍏🍏🍏🍏</span><span class="count-tag">5 quả</span></div>
                <div class="math-op">🟰</div>
                <div class="math-group result-group"><span class="items-bubble">🍎🍎🍎🍎🍎🍎🍎🍏🍏🍏🍏🍏</span><span class="count-tag highlight">12 quả</span></div>
              </div>
              <div class="number-line">
                <div class="nl-step">7</div>
                <div class="nl-arrow">→ +1 →</div>
                <div class="nl-step">8</div>
                <div class="nl-arrow">→ +1 →</div>
                <div class="nl-step">9</div>
                <div class="nl-arrow">→ +1 →</div>
                <div class="nl-step">10</div>
                <div class="nl-arrow">→ +1 →</div>
                <div class="nl-step">11</div>
                <div class="nl-arrow">→ +1 →</div>
                <div class="nl-step highlight">12</div>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Bé có 8 ngôi sao màu vàng, mẹ thưởng thêm 6 ngôi sao màu xanh. Hỏi bé có tất cả bao nhiêu ngôi sao?",
            steps: [
              "Bước 1: Tách 6 thành 2 + 4 để gộp với 8 thành 10.",
              "Bước 2: 8 + 2 = 10.",
              "Bước 3: 10 + 4 = 14.",
              "Đáp số: 8 + 6 = 14 ngôi sao."
            ],
            answer: "14"
          }
        },
        {
          id: "arith-lesson-2",
          number: 2,
          title: "Trừ trong phạm vi 20",
          englishTitle: "Subtraction within 20",
          icon: "➖",
          objective: "Thực hiện phép trừ bằng cách đếm lùi trên trục số hoặc bớt về 10.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp đếm bớt & lùi số:</h4>
              <p>Để tính <strong>15 - 7</strong>:</p>
              <div class="visual-math-row">
                <div class="math-group"><span class="items-bubble">🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</span><span class="count-tag">15 ngôi sao</span></div>
                <div class="math-op">➖ bớt 7 ❌</div>
                <div class="math-group result-group"><span class="items-bubble">🌟🌟🌟🌟🌟🌟🌟🌟</span><span class="count-tag highlight">8 ngôi sao còn lại</span></div>
              </div>
              <p>Cách tách: 15 - 5 = 10, rồi lấy 10 - 2 = 8!</p>
            </div>
          `,
          workedExample: {
            problem: "Trong rổ có 13 quả dâu tây, Thỏ Trắng ăn mất 5 quả. Hỏi trong rổ còn lại bao nhiêu quả?",
            steps: [
              "Bước 1: Bắt đầu từ 13.",
              "Bước 2: Bớt 3 quả để còn 10 (13 - 3 = 10).",
              "Bước 3: Bớt tiếp 2 quả nữa (10 - 2 = 8).",
              "Đáp số: 13 - 5 = 8 quả dâu tây."
            ],
            answer: "8"
          }
        },
        {
          id: "arith-lesson-3",
          number: 3,
          title: "Cộng và trừ trong phạm vi 100",
          englishTitle: "Addition and Subtraction within 100",
          icon: "💯",
          objective: "Tính toán hàng chục và hàng đơn vị chính xác không nhầm lẫn.",
          concept: `
            <div class="concept-box">
              <h4>💡 Nguyên tắc cộng trừ theo hàng:</h4>
              <p>Cộng hàng đơn vị với hàng đơn vị, hàng chục với hàng chục.</p>
              <div class="columns-calc">
                <div class="calc-card">
                  <h5>34 + 25 = ?</h5>
                  <ul>
                    <li>Hàng đơn vị: 4 + 5 = <strong>9</strong></li>
                    <li>Hàng chục: 3 + 2 = <strong>5</strong></li>
                    <li>👉 Kết quả là <strong>59</strong></li>
                  </ul>
                </div>
                <div class="calc-card">
                  <h5>78 - 32 = ?</h5>
                  <ul>
                    <li>Hàng đơn vị: 8 - 2 = <strong>6</strong></li>
                    <li>Hàng chục: 7 - 3 = <strong>4</strong></li>
                    <li>👉 Kết quả là <strong>46</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Bạn Nam có 42 viên bi, Nam sưu tầm thêm 26 viên bi nữa. Hỏi Nam có tất cả bao nhiêu viên bi?",
            steps: [
              "Hàng đơn vị: 2 + 6 = 8.",
              "Hàng chục: 4 + 2 = 6.",
              "Ghép lại ta được: 42 + 26 = 68.",
              "Đáp số: 68 viên bi."
            ],
            answer: "68"
          }
        },
        {
          id: "arith-lesson-4",
          number: 4,
          title: "Tìm số chưa biết (Điền số ô trống)",
          englishTitle: "Missing Numbers",
          icon: "❓",
          objective: "Xác định số còn thiếu trong phép tính dạng ? + a = b hoặc a - ? = b.",
          concept: `
            <div class="concept-box">
              <h4>💡 Mẹo tìm số bí mật:</h4>
              <p>🔍 Muốn tìm số hạng chưa biết: <strong>Lấy Tổng trừ đi số đã biết</strong>.</p>
              <div class="equation-box">
                <span class="box-var">?</span> + 7 = 16 ➔ <span class="box-var">?</span> = 16 - 7 = <strong>9</strong>
              </div>
              <p>🔍 Muốn tìm số trừ: <strong>Lấy Số bị trừ trừ đi Hiệu</strong>.</p>
              <div class="equation-box">
                18 - <span class="box-var">?</span> = 11 ➔ <span class="box-var">?</span> = 18 - 11 = <strong>7</strong>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Điền số thích hợp vào ô trống: 9 + [ ? ] = 17",
            steps: [
              "Bước 1: Ta cần tìm xem 9 thêm mấy để được 17.",
              "Bước 2: Lấy 17 - 9 = 8.",
              "Kiểm tra lại: 9 + 8 = 17 (Đúng!).",
              "Số cần điền là 8."
            ],
            answer: "8"
          }
        },
        {
          id: "arith-lesson-5",
          number: 5,
          title: "Quy luật dãy số (Number Patterns)",
          englishTitle: "Number Sequences & Patterns",
          icon: "🌀",
          objective: "Tìm ra khoảng cách tăng/giảm đều hoặc quy luật nhảy cách giữa các số.",
          concept: `
            <div class="concept-box">
              <h4>💡 Các quy luật thường gặp trong đề thi TIMO 1:</h4>
              <ul>
                <li><strong>Dãy tăng đều:</strong> 2, 4, 6, 8, <span class="badge-num">10</span> (mỗi số cộng thêm 2)</li>
                <li><strong>Dãy số cách 5:</strong> 5, 10, 15, 20, <span class="badge-num">25</span> (+5)</li>
                <li><strong>Dãy giảm dần:</strong> 20, 18, 16, 14, <span class="badge-num">12</span> (-2)</li>
                <li><strong>Dãy lặp lại:</strong> 1, 3, 1, 3, 1, <span class="badge-num">3</span></li>
              </ul>
            </div>
          `,
          workedExample: {
            problem: "Tìm số tiếp theo trong dãy số sau: 3, 6, 9, 12, [ ? ]",
            steps: [
              "Bước 1: Xem khoảng cách giữa các số liên tiếp: 6 - 3 = 3, 9 - 6 = 3, 12 - 9 = 3.",
              "Bước 2: Quy luật là mỗi số sau bằng số trước cộng 3.",
              "Bước 3: Lấy 12 + 3 = 15.",
              "Số cần điền là 15."
            ],
            answer: "15"
          }
        }
      ]
    },
    {
      id: "number-theory",
      name: "Lý thuyết số",
      englishName: "Number Theory",
      icon: "🧮",
      color: "#9B59B6",
      bgGradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      description: "Số chẵn - số lẻ, chục và đơn vị, so sánh số, chia đều và quy luật dãy chữ lặp lại.",
      totalLessons: 5,
      lessons: [
        {
          id: "nt-lesson-1",
          number: 1,
          title: "Số chẵn và số lẻ",
          englishTitle: "Even and Odd Numbers",
          icon: "⚖️",
          objective: "Giúp bé nhận biết số chẵn, số lẻ qua việc ghép đôi đồ vật và chữ số tận cùng.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp ghép đôi:</h4>
              <p>Xếp đồ vật thành từng <strong>đôi</strong>. Nếu vừa đủ đôi ➔ <strong>số chẵn</strong>. Nếu thừa 1 ➔ <strong>số lẻ</strong>.</p>
              <div class="visual-math-row">
                <div class="math-group"><span class="items-bubble">🧦🧦 🧦🧦 🧦🧦</span><span class="count-tag">6 = chẵn (Even)</span></div>
                <div class="math-group"><span class="items-bubble">🧦🧦 🧦🧦 🧦</span><span class="count-tag highlight">5 = lẻ (Odd)</span></div>
              </div>
              <ul>
                <li><strong>Số chẵn</strong> tận cùng là 0, 2, 4, 6, 8.</li>
                <li><strong>Số lẻ</strong> tận cùng là 1, 3, 5, 7, 9.</li>
              </ul>
            </div>
          `,
          workedExample: {
            problem: "Từ 1 đến 10 có bao nhiêu số lẻ?",
            steps: [
              "Bước 1: Liệt kê các số tận cùng 1, 3, 5, 7, 9.",
              "Bước 2: Các số lẻ là 1, 3, 5, 7, 9.",
              "Đáp số: 5 số lẻ."
            ],
            answer: "5"
          }
        },
        {
          id: "nt-lesson-2",
          number: 2,
          title: "Chục và đơn vị",
          englishTitle: "Tens and Ones",
          icon: "🔟",
          objective: "Giúp bé hiểu cấu tạo số có 2 chữ số gồm hàng chục và hàng đơn vị.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bó que tính:</h4>
              <p>10 que tính bó lại thành <strong>1 chục</strong>. Que lẻ là <strong>đơn vị</strong>.</p>
              <div class="visual-math-row">
                <div class="math-group"><span class="items-bubble">🥢×10 🥢×10 🥢×10</span><span class="count-tag">3 chục</span></div>
                <div class="math-op">➕</div>
                <div class="math-group"><span class="items-bubble">🥢🥢🥢🥢</span><span class="count-tag">4 đơn vị</span></div>
                <div class="math-op">🟰</div>
                <div class="math-group result-group"><span class="items-bubble">34</span><span class="count-tag highlight">Ba mươi tư</span></div>
              </div>
              <p>Chữ số bên trái là <strong>hàng chục (tens)</strong>, chữ số bên phải là <strong>hàng đơn vị (ones)</strong>.</p>
            </div>
          `,
          workedExample: {
            problem: "Số gồm 6 đơn vị và 5 chục là số nào?",
            steps: [
              "Bước 1: Hàng chục là 5, hàng đơn vị là 6.",
              "Bước 2: Viết hàng chục trước, hàng đơn vị sau.",
              "Đáp số: 56."
            ],
            answer: "56"
          }
        },
        {
          id: "nt-lesson-3",
          number: 3,
          title: "So sánh & Sắp xếp số",
          englishTitle: "Comparing and Ordering Numbers",
          icon: "📊",
          objective: "Giúp bé so sánh, sắp xếp các số có 2 chữ số và tìm số liền trước, liền sau.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp so sánh 2 bước:</h4>
              <ul>
                <li><strong>Bước 1:</strong> So sánh <strong>hàng chục</strong>. Số nào có hàng chục lớn hơn thì lớn hơn: 52 &gt; 48.</li>
                <li><strong>Bước 2:</strong> Hàng chục bằng nhau thì so sánh <strong>hàng đơn vị</strong>: 47 &gt; 43.</li>
              </ul>
              <div class="number-line">
                <div class="nl-step">29</div>
                <div class="nl-arrow">← liền trước</div>
                <div class="nl-step highlight">30</div>
                <div class="nl-arrow">liền sau →</div>
                <div class="nl-step">31</div>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Sắp xếp 63, 36, 60 từ lớn đến bé.",
            steps: [
              "Bước 1: So sánh hàng chục: 6, 3, 6 ➔ 36 bé nhất.",
              "Bước 2: 63 và 60 cùng hàng chục 6, so hàng đơn vị: 3 > 0 ➔ 63 > 60.",
              "Đáp số: 63, 60, 36."
            ],
            answer: "63, 60, 36"
          }
        },
        {
          id: "nt-lesson-4",
          number: 4,
          title: "Chia đều & Chia nhóm",
          englishTitle: "Equal Sharing and Grouping",
          icon: "🍬",
          objective: "Giúp bé chia đều đồ vật bằng cách phát lần lượt hoặc đếm theo nhóm.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp phát lần lượt:</h4>
              <p>Chia 6 cái kẹo cho 2 bạn: mỗi lượt phát cho mỗi bạn 1 cái, đến khi hết kẹo.</p>
              <div class="visual-math-row">
                <div class="math-group"><span class="items-bubble">🍬🍬🍬🍬🍬🍬</span><span class="count-tag">6 cái kẹo</span></div>
                <div class="math-op">➔</div>
                <div class="math-group"><span class="items-bubble">👦 🍬🍬🍬</span><span class="count-tag">3 cái</span></div>
                <div class="math-group result-group"><span class="items-bubble">👧 🍬🍬🍬</span><span class="count-tag highlight">3 cái</span></div>
              </div>
              <p><strong>Chia nhóm:</strong> 12 cái bánh, mỗi hộp 3 cái ➔ đếm 3, 6, 9, 12 ➔ <strong>4 hộp</strong>.</p>
            </div>
          `,
          workedExample: {
            problem: "Có 10 quả bóng chia đều cho 2 bạn. Mỗi bạn được mấy quả?",
            steps: [
              "Bước 1: Tìm số cộng với chính nó bằng 10.",
              "Bước 2: 5 + 5 = 10.",
              "Đáp số: Mỗi bạn 5 quả."
            ],
            answer: "5"
          }
        },
        {
          id: "nt-lesson-5",
          number: 5,
          title: "Dãy chữ & Dãy lặp lại",
          englishTitle: "Letter and Repeating Patterns",
          icon: "🔤",
          objective: "Giúp bé tìm quy luật dãy chữ cái và tìm phần tử thứ N trong dãy lặp lại.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp tìm nhóm lặp:</h4>
              <ul>
                <li><strong>Dãy chữ theo thứ tự:</strong> A, B, C, D, <span class="badge-num">E</span></li>
                <li><strong>Dãy chữ cách 1:</strong> A, C, E, G, <span class="badge-num">I</span></li>
                <li><strong>Dãy lặp lại:</strong> 🍎 🍌 🍇 | 🍎 🍌 🍇 | 🍎 ...</li>
              </ul>
              <p>Tìm phần tử thứ N: khoanh từng <strong>nhóm lặp</strong>, đếm xem phần tử thứ N rơi vào vị trí nào trong nhóm.</p>
            </div>
          `,
          workedExample: {
            problem: "Dãy 🔴 🔵 🔴 🔵 ... Hình thứ 7 là hình gì?",
            steps: [
              "Bước 1: Nhóm lặp gồm 2 hình: 🔴 🔵.",
              "Bước 2: Hình thứ 1, 3, 5, 7 (vị trí lẻ) là 🔴.",
              "Đáp số: 🔴."
            ],
            answer: "🔴"
          }
        }
      ]
    },
    {
      id: "geometry",
      name: "Hình học",
      englishName: "Geometry",
      icon: "📐",
      color: "#FF6B6B",
      bgGradient: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
      description: "Nhận biết các hình vuông, tròn, tam giác, chữ nhật, đếm số đoạn thẳng và ghép hình kỳ thú.",
      totalLessons: 5,
      lessons: [
        {
          id: "geo-lesson-1",
          number: 1,
          title: "Nhận biết các hình cơ bản",
          englishTitle: "Recognizing Basic Shapes",
          icon: "🔺",
          objective: "Nhận diện và phân biệt chính xác hình tam giác, hình vuông, hình tròn, hình chữ nhật.",
          concept: `
            <div class="concept-box">
              <div class="shapes-showcase">
                <div class="shape-item"><span class="shape-draw triangle-icon">🔺</span><strong>Hình Tam giác</strong><small>3 cạnh, 3 góc</small></div>
                <div class="shape-item"><span class="shape-draw square-icon">🟦</span><strong>Hình Vuông</strong><small>4 cạnh bằng nhau</small></div>
                <div class="shape-item"><span class="shape-draw rect-icon">🟨</span><strong>Hình Chữ nhật</strong><small>2 dài, 2 ngắn</small></div>
                <div class="shape-item"><span class="shape-draw circle-icon">🔴</span><strong>Hình Tròn</strong><small>Đường cong tròn</small></div>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Đồng hồ treo tường trên lớp học có hình dáng đường viền tròn đều. Đó là hình gì?",
            steps: [
              "Đồng hồ tròn xoe, không có góc nhọn hay cạnh thẳng.",
              "Vậy đó là Hình tròn (Circle)."
            ],
            answer: "Hình tròn"
          }
        },
        {
          id: "geo-lesson-2",
          number: 2,
          title: "Đếm số hình (Counting Shapes)",
          englishTitle: "Counting Shapes Puzzles",
          icon: "🧩",
          objective: "Phương pháp đếm hình đơn và hình ghép không bị sót hoặc trùng lặp.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí quyết đếm hình TIMO: Đánh số thứ tự!</h4>
              <p>Khi có một hình lớn chia thành các hình nhỏ:</p>
              <div class="shape-count-demo">
                <div class="split-triangle">
                  <span>Hình 1</span> | <span>Hình 2</span>
                </div>
                <p>👉 Số hình tam giác = 2 hình đơn (1, 2) + 1 hình ghép (1+2) = <strong>3 hình</strong>!</p>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Một hình chữ nhật được chia đôi bởi 1 đường kẻ ở giữa. Hỏi có tất cả bao nhiêu hình chữ nhật?",
            steps: [
              "Hình chữ nhật nhỏ bên trái: 1",
              "Hình chữ nhật nhỏ bên phải: 1",
              "Hình chữ nhật to bao ngoài: 1",
              "Tổng cộng: 1 + 1 + 1 = 3 hình chữ nhật."
            ],
            answer: "3"
          }
        },
        {
          id: "geo-lesson-3",
          number: 3,
          title: "Ghép hình & Cắt hình",
          englishTitle: "Shape Composition & Tangram",
          icon: "🔶",
          objective: "Tư duy không gian khi ghép 2 hay nhiều hình nhỏ thành hình mới.",
          concept: `
            <div class="concept-box">
              <h4>💡 Những điều thú vị khi ghép hình:</h4>
              <ul>
                <li>2 hình tam giác vuông giống nhau ghép lại thành <strong>1 hình vuông</strong> hoặc <strong>1 hình tam giác lớn</strong>!</li>
                <li>2 hình vuông nhỏ ghép cạnh nhau thành <strong>1 hình chữ nhật</strong>!</li>
              </ul>
            </div>
          `,
          workedExample: {
            problem: "Cần ít nhất bao nhiêu hình vuông nhỏ bằng nhau để ghép thành 1 hình vuông lớn hơn?",
            steps: [
              "Nếu dùng 2 hình vuông: chỉ tạo được hình chữ nhật.",
              "Nếu dùng 3 hình vuông: tạo hình chữ L hoặc thanh dài.",
              "Nếu dùng 4 hình vuông (xếp 2 hàng, mỗi hàng 2 hình): tạo được 1 hình vuông lớn!",
              "Đáp số: Cần ít nhất 4 hình."
            ],
            answer: "4"
          }
        },
        {
          id: "geo-lesson-4",
          number: 4,
          title: "Đếm số đoạn thẳng",
          englishTitle: "Counting Line Segments",
          icon: "📏",
          objective: "Nắm vững công thức đếm đoạn thẳng dựa trên các điểm mốc trên đường thẳng.",
          concept: `
            <div class="concept-box">
              <h4>💡 Công thức đếm đoạn thẳng:</h4>
              <p>Trên một đường thẳng có 4 điểm liên tiếp A, B, C, D:</p>
              <div class="segment-demo">
                <span class="point">A</span>----<span class="point">B</span>----<span class="point">C</span>----<span class="point">D</span>
              </div>
              <p>Số đoạn thẳng = 3 (đoạn đơn: AB, BC, CD) + 2 (đoạn đôi: AC, BD) + 1 (đoạn ba: AD) = <strong>6 đoạn thẳng</strong>.</p>
              <p>Mẹo nhanh: 1 + 2 + 3 = 6!</p>
            </div>
          `,
          workedExample: {
            problem: "Trên một đoạn dây thẳng có 3 điểm mốc A, B, C. Hỏi có tất cả bao nhiêu đoạn thẳng?",
            steps: [
              "Các đoạn đơn: AB, BC (2 đoạn).",
              "Đoạn ghép: AC (1 đoạn).",
              "Tổng số: 2 + 1 = 3 đoạn thẳng."
            ],
            answer: "3"
          }
        },
        {
          id: "geo-lesson-5",
          number: 5,
          title: "Khối lập phương & Vị trí không gian",
          englishTitle: "Cubes & Spatial Positions",
          icon: "🧊",
          objective: "Đếm số khối lập phương bị che khuất và xác định vị trí trên, dưới, trong, ngoài.",
          concept: `
            <div class="concept-box">
              <h4>💡 Mẹo đếm khối lập phương nhiều tầng:</h4>
              <p>Đếm từng tầng hoặc đếm theo từng cột từ cao xuống thấp. Nhớ rằng bên dưới khối ở tầng 2 luôn có 1 khối đỡ ở tầng 1!</p>
            </div>
          `,
          workedExample: {
            problem: "Bé xếp 1 cột cao 2 khối lập phương và 1 cột bên cạnh cao 1 khối. Hỏi có tất cả bao nhiêu khối?",
            steps: [
              "Cột thứ nhất: 2 khối.",
              "Cột thứ hai: 1 khối.",
              "Tổng cộng: 2 + 1 = 3 khối lập phương."
            ],
            answer: "3"
          }
        }
      ]
    },
    {
      id: "logic",
      name: "Lập luận logic",
      englishName: "Logical Thinking",
      icon: "🧠",
      color: "#2ECC71",
      bgGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      description: "Suy luận ngày thứ trong tuần, thời gian, vị trí xếp hàng trước sau và câu đố thám tử tí hon.",
      totalLessons: 5,
      lessons: [
        {
          id: "logic-lesson-1",
          number: 1,
          title: "Ngày và thứ trong tuần",
          englishTitle: "Days of the Week",
          icon: "📅",
          objective: "Xác định thứ trong tuần sau hoặc trước một số ngày nhất định.",
          concept: `
            <div class="concept-box">
              <h4>💡 Vòng tròn 7 ngày trong tuần:</h4>
              <div class="week-pill-list">
                <span class="wpill">Thứ Hai</span> ➔ <span class="wpill">Thứ Ba</span> ➔ <span class="wpill">Thứ Tư</span> ➔ <span class="wpill">Thứ Năm</span> ➔ <span class="wpill">Thứ Sáu</span> ➔ <span class="wpill">Thứ Bảy</span> ➔ <span class="wpill">Chủ Nhật</span>
              </div>
              <p>Sau 7 ngày thì thứ sẽ lặp lại y như cũ!</p>
            </div>
          `,
          workedExample: {
            problem: "Hôm nay là Thứ Hai. Hỏi 3 ngày sau là thứ mấy?",
            steps: [
              "Hôm nay: Thứ Hai.",
              "1 ngày sau: Thứ Ba.",
              "2 ngày sau: Thứ Tư.",
              "3 ngày sau: Thứ Năm.",
              "Đáp số: Thứ Năm."
            ],
            answer: "Thứ Năm"
          }
        },
        {
          id: "logic-lesson-2",
          number: 2,
          title: "Hôm qua, hôm nay và ngày mai",
          englishTitle: "Yesterday, Today and Tomorrow",
          icon: "⏰",
          objective: "Phân biệt dòng thời gian quá khứ, hiện tại và tương lai gần.",
          concept: `
            <div class="concept-box">
              <div class="timeline-box">
                <div class="t-node">Hôm kia (-2)</div>
                <div class="t-node">Hôm qua (-1)</div>
                <div class="t-node current">Hôm nay (0)</div>
                <div class="t-node">Ngày mai (+1)</div>
                <div class="t-node">Ngày kia (+2)</div>
              </div>
            </div>
          `,
          workedExample: {
            problem: "Nếu ngày mai là Chủ Nhật, thì hôm qua là thứ mấy?",
            steps: [
              "Ngày mai là Chủ Nhật ➔ Hôm nay là Thứ Bảy.",
              "Hôm nay là Thứ Bảy ➔ Hôm qua là Thứ Sáu.",
              "Đáp án: Thứ Sáu."
            ],
            answer: "Thứ Sáu"
          }
        },
        {
          id: "logic-lesson-3",
          number: 3,
          title: "Thứ tự xếp hàng & Vị trí",
          englishTitle: "Ordering & Queuing Problems",
          icon: "🚶‍♂️",
          objective: "Tìm tổng số bạn hoặc vị trí của một bạn khi xếp hàng từ trước ra sau hoặc trái sang phải.",
          concept: `
            <div class="concept-box">
              <h4>💡 Công thức tính số người trong hàng:</h4>
              <p>Nếu bạn Lan đứng thứ 4 từ đầu hàng và thứ 3 từ cuối hàng:</p>
              <div class="queue-demo">
                [1] [2] [3] ➔ <strong>[Lan]</strong> ➔ [cuối 2] [cuối 1]
              </div>
              <p>👉 Tổng số bạn = Vị trí đầu (4) + Vị trí cuối (3) - 1 (vì Lan bị đếm 2 lần) = <strong>6 bạn</strong>.</p>
            </div>
          `,
          workedExample: {
            problem: "Minh đứng thứ 5 tính từ bên trái sang, và đứng thứ 4 tính từ bên phải sang trong một hàng dọc. Hỏi hàng đó có bao nhiêu bạn?",
            steps: [
              "Bên trái Minh có 4 bạn (vì Minh thứ 5).",
              "Bên phải Minh có 3 bạn (vì Minh thứ 4).",
              "Tính cả Minh: 4 + 3 + 1 = 8 bạn (hoặc: 5 + 4 - 1 = 8).",
              "Đáp số: 8 bạn."
            ],
            answer: "8"
          }
        },
        {
          id: "logic-lesson-4",
          number: 4,
          title: "Trái - Phải - Trước - Sau",
          englishTitle: "Spatial Logic & Directions",
          icon: "↔️",
          objective: "Xác định quan hệ vị trí của các nhân vật và đồ vật.",
          concept: `
            <div class="concept-box">
              <h4>💡 Chú ý góc nhìn:</h4>
              <p>Hãy phân biệt tay trái 👈 và tay phải 👉 của chính mình hoặc của nhân vật đối diện.</p>
            </div>
          `,
          workedExample: {
            problem: "An ngồi bên trái Bình. Cường ngồi bên phải Bình. Hỏi ai ngồi ở giữa?",
            steps: [
              "An ở bên trái Bình ➔ [An] - [Bình]",
              "Cường ở bên phải Bình ➔ [An] - [Bình] - [Cường]",
              "Vậy bạn ngồi ở giữa là Bình."
            ],
            answer: "Bình"
          }
        },
        {
          id: "logic-lesson-5",
          number: 5,
          title: "Câu đố suy luận thám tử",
          englishTitle: "Deduction & Logic Puzzles",
          icon: "🕵️",
          objective: "Loại trừ các phương án sai để tìm ra sự thật chính xác nhất.",
          concept: `
            <div class="concept-box">
              <h4>💡 Phương pháp kẻ bảng hoặc loại trừ:</h4>
              <p>Đọc từng manh mối, gạch bỏ những điều không thể xảy ra để tìm câu trả lời đúng!</p>
            </div>
          `,
          workedExample: {
            problem: "Có 3 bạn An, Bình, Chi mang 3 áo màu: Đỏ, Xanh, Vàng. An không mặc áo Đỏ. Bình mặc áo Vàng. Hỏi Chi mặc áo màu gì?",
            steps: [
              "Bình mặc áo Vàng ➔ Còn lại màu Đỏ và Xanh.",
              "An không mặc áo Đỏ ➔ An mặc áo Xanh.",
              "Vậy Chi phải mặc áo màu Đỏ.",
              "Đáp số: Chi mặc áo Đỏ."
            ],
            answer: "Đỏ"
          }
        }
      ]
    },
    {
      id: "advanced-arithmetic",
      name: "Số học nâng cao",
      englishName: "Advanced Arithmetic",
      icon: "📚",
      color: "#F39C12",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Toán có lời văn thực tế, bài toán trao đổi quà, thêm bớt và bài toán tính tuổi thông minh.",
      totalLessons: 5,
      lessons: [
        {
          id: "adv-lesson-1",
          number: 1,
          title: "Bài toán thêm và bớt",
          englishTitle: "Addition & Subtraction Word Problems",
          icon: "🧺",
          objective: "Đọc hiểu đề bài toán lời văn, nhận diện từ khóa 'thêm/cho thêm' (+) và 'bớt/cho đi/lấy đi' (-).",
          concept: `
            <div class="concept-box">
              <h4>💡 Nhận diện từ khóa toán học:</h4>
              <ul>
                <li><strong>Cộng (+):</strong> thêm vào, được tặng, bay đến, chạy tới, tất cả, tổng cộng.</li>
                <li><strong>Trừ (-):</strong> bớt đi, cho bạn, ăn mất, làm vỡ, bay đi, còn lại, nhiều hơn/ít hơn.</li>
              </ul>
            </div>
          `,
          workedExample: {
            problem: "Lan có 9 cái kẹo. Mẹ cho Lan thêm 4 cái kẹo, sau đó Lan cho em 3 cái kẹo. Hỏi Lan còn lại bao nhiêu cái kẹo?",
            steps: [
              "Sau khi mẹ cho thêm, Lan có: 9 + 4 = 13 cái kẹo.",
              "Sau khi cho em 3 cái, Lan còn lại: 13 - 3 = 10 cái kẹo.",
              "Đáp số: 10 cái kẹo."
            ],
            answer: "10"
          }
        },
        {
          id: "adv-lesson-2",
          number: 2,
          title: "Trao đổi đồ vật & Cân bằng",
          englishTitle: "Item Exchange & Equal Distribution",
          icon: "🔄",
          objective: "Giải bài toán chuyển đồ vật để hai bạn có số lượng bằng nhau.",
          concept: `
            <div class="concept-box">
              <h4>💡 Mẹo chia đều:</h4>
              <p>Nếu Nam có 10 bút chì, Hải có 6 bút chì:</p>
              <p>Nam hơn Hải: 10 - 6 = 4 bút.</p>
              <p>Để 2 bạn bằng nhau, Nam chỉ cần cho Hải <strong>nửa số chênh lệch</strong>: 4 : 2 = <strong>2 cái</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Bình có 8 viên kẹo, An có 4 viên kẹo. Bình phải cho An bao nhiêu viên kẹo để cả hai bạn có số kẹo bằng nhau?",
            steps: [
              "Tổng số kẹo của 2 bạn: 8 + 4 = 12 viên.",
              "Khi bằng nhau, mỗi bạn sẽ có: 12 : 2 = 6 viên kẹo.",
              "Bình đang có 8 viên, để còn 6 viên thì Bình phải cho An: 8 - 6 = 2 viên kẹo.",
              "Đáp số: 2 viên kẹo."
            ],
            answer: "2"
          }
        },
        {
          id: "adv-lesson-3",
          number: 3,
          title: "Bài toán thực tế & Mua sắm",
          englishTitle: "Real-Life Math Problems",
          icon: "🛒",
          objective: "Vận dụng tính toán số tiền, số lượng đồ vật trong các tình huống thực tế.",
          concept: `
            <div class="concept-box">
              <h4>💡 Mua sắm thông minh:</h4>
              <p>Giá 1 que kem: 5 xu. Mua 3 que kem = 5 + 5 + 5 = 15 xu!</p>
            </div>
          `,
          workedExample: {
            problem: "Một quyển vở giá 6 đồng, một chiếc bút chì giá 4 đồng. Bé mua 1 quyển vở và 1 chiếc bút chì, bé đưa cô bán hàng tờ 15 đồng. Hỏi cô bán hàng trả lại bé bao nhiêu đồng?",
            steps: [
              "Tổng số tiền bé mua: 6 + 4 = 10 đồng.",
              "Số tiền thừa được trả lại: 15 - 10 = 5 đồng.",
              "Đáp số: 5 đồng."
            ],
            answer: "5"
          }
        },
        {
          id: "adv-lesson-4",
          number: 4,
          title: "Bài toán về Tuổi",
          englishTitle: "Age Word Problems",
          icon: "🎂",
          objective: "Nắm vững quy tắc quan trọng: Hiệu số tuổi của 2 người không bao giờ thay đổi theo thời gian.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bí kíp vàng bài toán tuổi:</h4>
              <p>🌟 Mỗi năm mỗi người đều tăng thêm 1 tuổi.</p>
              <p>🌟 Vì vậy, <strong>anh hơn em bao nhiêu tuổi thì 5 năm hay 10 năm sau anh vẫn hơn em đúng bấy nhiêu tuổi!</strong></p>
            </div>
          `,
          workedExample: {
            problem: "Năm nay Anh 9 tuổi, Em 6 tuổi. Hỏi 3 năm sau, Anh hơn Em bao nhiêu tuổi?",
            steps: [
              "Năm nay Anh hơn Em: 9 - 6 = 3 tuổi.",
              "Dù bao nhiêu năm trôi qua, hiệu số tuổi giữa hai anh em không bao giờ đổi.",
              "Vậy 3 năm sau, Anh vẫn hơn Em 3 tuổi."
            ],
            answer: "3"
          }
        },
        {
          id: "adv-lesson-5",
          number: 5,
          title: "Toán sơ đồ đoạn thẳng & Suy luận ngược",
          englishTitle: "Diagram Modeling & Working Backwards",
          icon: "📊",
          objective: "Biểu diễn bài toán bằng hình vẽ sơ đồ hoặc đi ngược từ kết quả về đầu.",
          concept: `
            <div class="concept-box">
              <h4>💡 Phương pháp đi ngược từ đích:</h4>
              <p>Nếu một số cộng 5 rồi trừ 2 được 10:</p>
              <p>Đi ngược lại: Lấy 10 + 2 = 12, sau đó 12 - 5 = <strong>7</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Nghĩ ra một số, lấy số đó cộng với 4 rồi trừ đi 3 thì được 8. Hỏi số ban đầu là số nào?",
            steps: [
              "Trước khi trừ 3 thì kết quả là: 8 + 3 = 11.",
              "Số ban đầu cộng với 4 được 11, vậy số ban đầu là: 11 - 4 = 7.",
              "Thử lại: 7 + 4 - 3 = 8 (Chính xác!).",
              "Đáp số: 7."
            ],
            answer: "7"
          }
        }
      ]
    },
    {
      id: "combinatorics",
      name: "Tổ hợp",
      englishName: "Combinatorics",
      icon: "🎯",
      color: "#9B59B6",
      bgGradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      description: "Đếm phương án phối đồ, lập các số có 2 chữ số, tô màu bản đồ và chọn đồ vật khéo léo.",
      totalLessons: 5,
      lessons: [
        {
          id: "comb-lesson-1",
          number: 1,
          title: "Đếm phương án phối đồ & Ghép cặp",
          englishTitle: "Matching Outfits & Counting Possibilities",
          icon: "👕",
          objective: "Ghép các đồ vật theo cặp để tìm tổng số cách kết hợp khác nhau.",
          concept: `
            <div class="concept-box">
              <h4>💡 Phương pháp ghép đôi:</h4>
              <p>Bạn Gấu có 2 cái áo (Áo Đỏ, Áo Vàng) và 3 cái quần (Quần Xanh, Quần Đen, Quần Nâu):</p>
              <div class="outfit-match">
                <div>🔴 Áo Đỏ ghép với 3 quần ➔ 3 bộ</div>
                <div>🟡 Áo Vàng ghép với 3 quần ➔ 3 bộ</div>
              </div>
              <p>👉 Tổng số bộ quần áo = 2 × 3 = <strong>6 bộ trang phục</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Bạn Thỏ có 2 chiếc nơ cài tóc (hồng, tím) và 4 chiếc váy (đỏ, vàng, xanh, trắng). Hỏi bạn Thỏ có bao nhiêu cách chọn 1 nơ và 1 váy?",
            steps: [
              "Nơ hồng có thể ghép với 4 váy (4 cách).",
              "Nơ tím có thể ghép với 4 váy (4 cách).",
              "Tổng số cách: 4 + 4 = 8 cách.",
              "Đáp số: 8 cách."
            ],
            answer: "8"
          }
        },
        {
          id: "comb-lesson-2",
          number: 2,
          title: "Lập số từ các chữ số cho trước",
          englishTitle: "Forming Numbers",
          icon: "🔢",
          objective: "Tạo các số có 2 chữ số khác nhau hoặc giống nhau từ các thẻ số.",
          concept: `
            <div class="concept-box">
              <h4>💡 Mẹo lập số không bị sót:</h4>
              <p>Cho các chữ số <strong>1, 2, 3</strong>. Lập các số có 2 chữ số khác nhau:</p>
              <ul>
                <li>Hàng chục là 1: 12, 13 (2 số)</li>
                <li>Hàng chục là 2: 21, 23 (2 số)</li>
                <li>Hàng chục là 3: 31, 32 (2 số)</li>
              </ul>
              <p>👉 Tổng cộng có 2 + 2 + 2 = <strong>6 số</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Từ 2 chữ số 4 và 7, có thể lập được bao nhiêu số có hai chữ số khác nhau?",
            steps: [
              "Số thứ nhất: 47.",
              "Số thứ hai: 74.",
              "Tổng cộng lập được 2 số.",
              "Đáp số: 2 số."
            ],
            answer: "2"
          }
        },
        {
          id: "comb-lesson-3",
          number: 3,
          title: "Bài toán Tô màu",
          englishTitle: "Coloring Puzzles",
          icon: "🎨",
          objective: "Tô màu các hình liền kề sao cho 2 ô cạnh nhau không cùng màu.",
          concept: `
            <div class="concept-box">
              <h4>💡 Quy tắc tô màu liền kề:</h4>
              <p>Có 3 ô tròn thẳng hàng: (O1) - (O2) - (O3) và 2 màu Đỏ, Xanh.</p>
              <p>Để 2 ô cạnh nhau không trùng màu:</p>
              <p>Cách 1: Đỏ - Xanh - Đỏ</p>
              <p>Cách 2: Xanh - Đỏ - Xanh</p>
              <p>👉 Có <strong>2 cách tô màu</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Có 2 ô vuông cạnh nhau. Dùng 3 màu (Đỏ, Vàng, Xanh) để tô mỗi ô 1 màu, 2 ô không được trùng màu nhau. Hỏi có bao nhiêu cách tô?",
            steps: [
              "Ô thứ nhất có 3 lựa chọn màu.",
              "Ô thứ hai không được trùng với ô thứ nhất nên còn 2 lựa chọn màu.",
              "Tổng số cách tô: 3 × 2 = 6 cách.",
              "Đáp số: 6 cách."
            ],
            answer: "6"
          }
        },
        {
          id: "comb-lesson-4",
          number: 4,
          title: "Chọn đồ vật & Bắt tay",
          englishTitle: "Selecting Items & Handshakes",
          icon: "🤝",
          objective: "Đếm số cái bắt tay hoặc chọn 2 bạn trong một nhóm.",
          concept: `
            <div class="concept-box">
              <h4>💡 Bài toán bắt tay nổi tiếng:</h4>
              <p>Có 3 bạn A, B, C gặp nhau, mỗi bạn bắt tay nhau 1 lần:</p>
              <ul>
                <li>A bắt tay B, A bắt tay C (2 cái)</li>
                <li>B bắt tay C (1 cái, B với A đã tính)</li>
              </ul>
              <p>👉 Tổng số cái bắt tay = 2 + 1 = <strong>3 cái</strong>!</p>
            </div>
          `,
          workedExample: {
            problem: "Có 4 bạn nhỏ gặp nhau trong buổi thi TIMO. Mỗi bạn bắt tay với từng bạn khác đúng 1 lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
            steps: [
              "Bạn 1 bắt tay 3 bạn còn lại (3 cái).",
              "Bạn 2 bắt tay 2 bạn còn lại (2 cái).",
              "Bạn 3 bắt tay bạn thứ 4 (1 cái).",
              "Tổng cộng: 3 + 2 + 1 = 6 cái bắt tay.",
              "Đáp số: 6 cái."
            ],
            answer: "6"
          }
        },
        {
          id: "comb-lesson-5",
          number: 5,
          title: "Đếm hình tổ hợp nâng cao",
          englishTitle: "Advanced Geometric Counting",
          icon: "🏆",
          objective: "Tổng hợp đếm góc, đếm mặt phẳng và các khối không gian phức tạp.",
          concept: `
            <div class="concept-box">
              <h4>💡 Phương pháp phân tầng cấu trúc:</h4>
              <p>Chia hình lớn thành các tầng hoặc cụm đối xứng để đếm không bị sót!</p>
            </div>
          `,
          workedExample: {
            problem: "Một chiếc bánh kem hình tròn được cắt bởi 2 nhát dao thẳng cắt nhau. Hỏi chiếc bánh được chia thành nhiều nhất bao nhiêu miếng?",
            steps: [
              "Nhát dao 1: chia bánh thành 2 miếng.",
              "Nhát dao 2 cắt qua nhát thứ nhất: chia tiếp thành 4 miếng.",
              "Đáp số: Nhiều nhất 4 miếng."
            ],
            answer: "4"
          }
        }
      ]
    }
  ],

  // 300 questions (6 topics × 5 lessons × 10) covering all topics, lesson tests, practice mode, TIMO challenge & daily challenge
  questions: [
    // --- TOPIC 1: ARITHMETIC (25 Questions) ---
    {
      id: "arith-q1",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính kết quả phép cộng: 7 + 5 = ?",
      questionEn: "Calculate the addition result: 7 + 5 = ?",
      visual: "🍎🍎🍎🍎🍎🍎🍎 ➕ 🍏🍏🍏🍏🍏",
      options: ["11", "12", "13", "14"],
      answer: "12",
      hint: "Đếm từ 7 thêm 5 bước: 8, 9, 10, 11, 12.",
      explanation: "7 + 5 = 12.",
      xp: 10
    },
    {
      id: "arith-q2",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Điền số thích hợp: 8 + 6 = [ ? ]",
      questionEn: "Fill in the correct number: 8 + 6 = [ ? ]",
      visual: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ➕ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
      answer: "14",
      hint: "8 + 2 = 10, 10 + 4 = 14.",
      explanation: "8 + 6 = 14.",
      xp: 10
    },
    {
      id: "arith-q3",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Phép tính nào sau đây có kết quả lớn nhất?",
      questionEn: "Which of the following calculations gives the largest result?",
      options: ["9 + 4", "8 + 7", "6 + 8", "9 + 5"],
      answer: "8 + 7",
      hint: "9 + 4 = 13, 8 + 7 = 15, 6 + 8 = 14, 9 + 5 = 14.",
      explanation: "8 + 7 = 15 là lớn nhất.",
      xp: 15
    },
    {
      id: "arith-q4",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 2,
      type: "true-false",
      question: "Đúng hay Sai: 9 + 8 = 17 ?",
      questionEn: "True or False: 9 + 8 = 17 ?",
      options: ["Đúng", "Sai"],
      answer: "Đúng",
      hint: "9 + 8 = 17.",
      explanation: "9 + 8 = 17 là một đẳng thức đúng.",
      xp: 10
    },
    {
      id: "arith-q5",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Tính tổng của 3 số: 4 + 7 + 6 = ?",
      questionEn: "Calculate the sum of 3 numbers: 4 + 7 + 6 = ?",
      options: ["16", "17", "18", "15"],
      answer: "17",
      hint: "Gộp 4 + 6 = 10, sau đó lấy 10 + 7 = 17.",
      explanation: "Gộp nhanh 4 + 6 = 10, rồi 10 + 7 = 17.",
      xp: 20
    },

    // Lesson 2
    {
      id: "arith-q6",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính: 15 - 7 = ?",
      questionEn: "Calculate: 15 - 7 = ?",
      visual: "🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 (Bớt đi 7)",
      options: ["7", "8", "9", "6"],
      answer: "8",
      hint: "15 - 5 = 10, 10 - 2 = 8.",
      explanation: "15 - 7 = 8.",
      xp: 10
    },
    {
      id: "arith-q7",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 1,
      type: "fill-blank",
      question: "Điền số: 13 - 8 = [ ? ]",
      questionEn: "Fill in the blank: 13 - 8 = [ ? ]",
      answer: "5",
      hint: "13 - 3 = 10, 10 - 5 = 5.",
      explanation: "13 - 8 = 5.",
      xp: 10
    },
    {
      id: "arith-q8",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Kết quả của phép tính 18 - 9 bằng kết quả phép tính nào?",
      questionEn: "Which calculation equals the result of 18 - 9?",
      options: ["14 - 6", "16 - 7", "15 - 7", "12 - 4"],
      answer: "16 - 7",
      hint: "18 - 9 = 9, và 16 - 7 = 9.",
      explanation: "18 - 9 = 9 và 16 - 7 = 9.",
      xp: 15
    },
    {
      id: "arith-q9",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Trên cành cây có 16 chú chim, 9 chú chim bay đi. Hỏi trên cành còn lại mấy chú chim?",
      questionEn: "There are 16 birds on a tree branch, 9 birds fly away. How many birds remain?",
      options: ["6", "7", "8", "9"],
      answer: "7",
      hint: "16 - 9 = 7.",
      explanation: "16 - 9 = 7 chú chim.",
      xp: 15
    },
    {
      id: "arith-q10",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Tính giá trị biểu thức: 17 - 8 + 5 = ?",
      questionEn: "Calculate the value of expression: 17 - 8 + 5 = ?",
      options: ["12", "13", "14", "15"],
      answer: "14",
      hint: "17 - 8 = 9, sau đó lấy 9 + 5 = 14.",
      explanation: "17 - 8 = 9; 9 + 5 = 14.",
      xp: 20
    },

    // Lesson 3
    {
      id: "arith-q11",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính: 34 + 25 = ?",
      questionEn: "Calculate: 34 + 25 = ?",
      options: ["58", "59", "69", "57"],
      answer: "59",
      hint: "4 + 5 = 9, 3 + 2 = 5.",
      explanation: "34 + 25 = 59.",
      xp: 10
    },
    {
      id: "arith-q12",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 1,
      type: "fill-blank",
      question: "Tính: 78 - 32 = [ ? ]",
      questionEn: "Calculate: 78 - 32 = [ ? ]",
      answer: "46",
      hint: "8 - 2 = 6, 7 - 3 = 4.",
      explanation: "78 - 32 = 46.",
      xp: 10
    },
    {
      id: "arith-q13",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Phép tính nào dưới đây có kết quả là 50?",
      questionEn: "Which of the following calculations results in 50?",
      options: ["23 + 28", "15 + 35", "74 - 25", "80 - 20"],
      answer: "15 + 35",
      hint: "15 + 35 = 50.",
      explanation: "15 + 35 = 50.",
      xp: 15
    },
    {
      id: "arith-q14",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Lớp 1A có 24 bạn nam và 21 bạn nữ. Hỏi lớp 1A có tất cả bao nhiêu bạn?",
      questionEn: "Class 1A has 24 boys and 21 girls. How many students are in Class 1A in total?",
      options: ["44", "45", "46", "43"],
      answer: "45",
      hint: "24 + 21 = 45.",
      explanation: "24 + 21 = 45 bạn học sinh.",
      xp: 15
    },
    {
      id: "arith-q15",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Tính nhanh: 28 + 19 = [ ? ]",
      questionEn: "Mental math: 28 + 19 = [ ? ]",
      answer: "47",
      hint: "28 + 20 - 1 = 48 - 1 = 47.",
      explanation: "28 + 19 = 47.",
      xp: 20
    },

    // Lesson 4
    {
      id: "arith-q16",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tìm số thích hợp điền vào ô trống: ? + 7 = 15",
      questionEn: "Find the missing number in the box: ? + 7 = 15",
      options: ["6", "7", "8", "9"],
      answer: "8",
      hint: "15 - 7 = 8.",
      explanation: "Số cần tìm là 15 - 7 = 8.",
      xp: 10
    },
    {
      id: "arith-q17",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 1,
      type: "fill-blank",
      question: "Điền số vào ô trống: 20 - [ ? ] = 13",
      questionEn: "Fill in the blank: 20 - [ ? ] = 13",
      answer: "7",
      hint: "20 - 13 = 7.",
      explanation: "20 - 7 = 13.",
      xp: 10
    },
    {
      id: "arith-q18",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tìm số X biết: X + 12 = 30 - 5",
      questionEn: "Find X if: X + 12 = 30 - 5",
      options: ["11", "12", "13", "14"],
      answer: "13",
      hint: "30 - 5 = 25. X + 12 = 25 ➔ X = 25 - 12 = 13.",
      explanation: "Vế phải: 30 - 5 = 25. Ta có X + 12 = 25 ➔ X = 13.",
      xp: 15
    },
    {
      id: "arith-q19",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Nếu 🍎 + 🍎 = 12 và 🍎 + 🍌 = 10. Hỏi 🍌 = ?",
      questionEn: "If ðŸŽ + ðŸŽ = 12 and ðŸŽ + ðŸŒ = 10. What is ðŸŒ = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      hint: "🍎 = 6. Vậy 6 + 🍌 = 10 ➔ 🍌 = 4.",
      explanation: "🍎 = 6. Thay vào phép tính thứ hai: 6 + 🍌 = 10 ➔ 🍌 = 4.",
      xp: 15
    },
    {
      id: "arith-q20",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Tìm số bí mật: 50 - [ ? ] + 10 = 45",
      questionEn: "Find the secret number: 50 - [ ? ] + 10 = 45",
      answer: "15",
      hint: "50 - [?] = 45 - 10 = 35 ➔ [?] = 50 - 35 = 15.",
      explanation: "Số cần điền là 15.",
      xp: 20
    },

    // Lesson 5
    {
      id: "arith-q21",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tìm số tiếp theo trong dãy số: 2, 4, 6, 8, [ ? ]",
      questionEn: "Find the next number in the pattern: 2, 4, 6, 8, [ ? ]",
      options: ["9", "10", "11", "12"],
      answer: "10",
      hint: "Dãy tăng đều 2 đơn vị.",
      explanation: "8 + 2 = 10.",
      xp: 10
    },
    {
      id: "arith-q22",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 1,
      type: "fill-blank",
      question: "Điền số tiếp theo: 5, 10, 15, 20, [ ? ]",
      questionEn: "Fill in the next number: 5, 10, 15, 20, [ ? ]",
      answer: "25",
      hint: "Mỗi số cộng thêm 5.",
      explanation: "20 + 5 = 25.",
      xp: 10
    },
    {
      id: "arith-q23",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tìm số bị thiếu trong dãy: 19, 16, 13, [ ? ], 7",
      questionEn: "Find the missing number in sequence: 19, 16, 13, [ ? ], 7",
      options: ["10", "11", "12", "9"],
      answer: "10",
      hint: "Dãy số lùi 3 đơn vị: 13 - 3 = 10.",
      explanation: "Quy luật: trừ đi 3. 13 - 3 = 10.",
      xp: 15
    },
    {
      id: "arith-q24",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tìm số tiếp theo trong dãy: 1, 2, 4, 7, 11, [ ? ]",
      questionEn: "Find the next number in sequence: 1, 2, 4, 7, 11, [ ? ]",
      options: ["15", "16", "17", "18"],
      answer: "16",
      hint: "+1, +2, +3, +4, +5! Vậy 11 + 5 = 16.",
      explanation: "Khoảng cách tăng dần: 1(+1)2(+2)4(+3)7(+4)11(+5)16.",
      xp: 15
    },
    {
      id: "arith-q25",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Điền số thích hợp vào ô trống: 3, 4, 6, 9, 13, [ ? ]",
      questionEn: "Fill in the appropriate number: 3, 4, 6, 9, 13, [ ? ]",
      answer: "18",
      hint: "+1, +2, +3, +4, +5. 13 + 5 = 18.",
      explanation: "Quy luật cộng tăng dần: 13 + 5 = 18.",
      xp: 20
    },

    // --- TOPIC 2: GEOMETRY (20 Questions) ---
    {
      id: "geo-q1",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hình có 3 cạnh và 3 góc nhọn là hình gì?",
      questionEn: "Which shape has 3 sides and 3 acute angles?",
      options: ["Hình vuông", "Hình tam giác", "Hình tròn", "Hình chữ nhật"],
      answer: "Hình tam giác",
      hint: "Tam có nghĩa là 3.",
      explanation: "Hình tam giác có đúng 3 cạnh và 3 đỉnh.",
      xp: 10
    },
    {
      id: "geo-q2",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hình nào có 4 cạnh dài bằng nhau?",
      questionEn: "Which shape has 4 sides of equal length?",
      options: ["Hình tam giác", "Hình chữ nhật", "Hình vuông", "Hình tròn"],
      answer: "Hình vuông",
      hint: "Hình vuông có 4 cạnh bằng nhau.",
      explanation: "Hình vuông là hình tứ giác có 4 cạnh bằng nhau.",
      xp: 10
    },
    {
      id: "geo-q3",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Bề mặt của cuốn sách Toán lớp 1 có dạng hình gì?",
      questionEn: "What shape is the front cover of a Grade 1 Math book?",
      options: ["Hình tròn", "Hình chữ nhật", "Hình tam giác", "Hình thoi"],
      answer: "Hình chữ nhật",
      hint: "Có 2 cạnh dài và 2 cạnh ngắn.",
      explanation: "Bề mặt cuốn sách có dạng hình chữ nhật.",
      xp: 15
    },
    {
      id: "geo-q4",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 2,
      type: "true-false",
      question: "Đúng hay Sai: Hình tròn không có đỉnh và không có cạnh thẳng?",
      questionEn: "True or False: A circle has no vertices and no straight edges?",
      options: ["Đúng", "Sai"],
      answer: "Đúng",
      hint: "Hình tròn là đường cong kín.",
      explanation: "Hình tròn là một đường cong kín trơn, không có cạnh thẳng.",
      xp: 10
    },

    // Geo Lesson 2
    {
      id: "geo-q5",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Một hình tam giác lớn được chia đôi bằng 1 đường thẳng từ đỉnh xuống đáy. Hỏi có tất cả bao nhiêu hình tam giác?",
      questionEn: "A large triangle is split in half by a line from vertex to base. How many triangles in total?",
      options: ["2", "3", "4", "1"],
      answer: "3",
      hint: "Gồm 2 hình tam giác nhỏ và 1 hình tam giác to bao ngoài.",
      explanation: "2 hình đơn + 1 hình ghép = 3 hình tam giác.",
      xp: 10
    },
    {
      id: "geo-q6",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 1,
      type: "fill-blank",
      question: "Một hình vuông bị chia thành 4 ô vuông nhỏ bằng nhau. Hỏi có tất cả bao nhiêu hình vuông? [ ? ]",
      questionEn: "A square is divided into 4 small equal squares. How many squares in total? [ ? ]",
      answer: "5",
      hint: "4 ô vuông nhỏ + 1 hình vuông to ngoài cùng = 5.",
      explanation: "4 hình đơn + 1 hình lớn = 5 hình vuông.",
      xp: 10
    },
    {
      id: "geo-q7",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một thanh gồm 3 ô vuông thẳng hàng. Hỏi có tất cả bao nhiêu hình chữ nhật (tính cả hình vuông)?",
      questionEn: "A strip has 3 aligned small squares. How many rectangles (including squares) in total?",
      options: ["3", "5", "6", "4"],
      answer: "6",
      hint: "3 hình 1 ô + 2 hình 2 ô + 1 hình 3 ô = 6 hình.",
      explanation: "1 + 2 + 3 = 6 hình.",
      xp: 15
    },
    {
      id: "geo-q8",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Một hình tam giác được kẻ 2 đường từ đỉnh xuống đáy tạo thành 3 tam giác nhỏ bên trong. Có tất cả bao nhiêu tam giác? [ ? ]",
      questionEn: "A triangle has 2 lines drawn from top vertex creating 3 small triangles inside. Total triangles? [ ? ]",
      answer: "6",
      hint: "3 hình đơn + 2 hình ghép đôi + 1 hình lớn = 1 + 2 + 3 = 6.",
      explanation: "Số hình tam giác = 1 + 2 + 3 = 6 hình.",
      xp: 20
    },

    // Geo Lesson 3
    {
      id: "geo-q9",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Ghép 2 hình tam giác vuông cân giống hệt nhau theo cạnh dài nhất. Bé được hình gì?",
      questionEn: "Join 2 identical isosceles right triangles along their longest side. What shape do you get?",
      visual: "◤ ◢",
      options: [
        "Hình tròn",
        "Hình vuông",
        "Hình ngôi sao",
        "Hình trụ"
      ],
      answer: "Hình vuông",
      hint: "Hai góc vuông nằm ở hai đầu đối diện, 4 cạnh còn lại dài bằng nhau.",
      explanation: "2 tam giác vuông cân ghép theo cạnh dài nhất tạo thành hình vuông (4 cạnh bằng nhau, 4 góc vuông).",
      xp: 10
    },
    {
      id: "geo-q10",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Cần ít nhất bao nhiêu que tính dài bằng nhau để ghép thành 2 hình tam giác riêng biệt?",
      questionEn: "What is the minimum number of equal matchsticks needed to make 2 separate triangles?",
      options: ["5", "6", "4", "7"],
      answer: "6",
      hint: "Mỗi hình tam giác cần 3 que tính.",
      explanation: "2 × 3 = 6 que tính.",
      xp: 15
    },
    {
      id: "geo-q11",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Nếu chung 1 cạnh, cần ít nhất bao nhiêu que tính để ghép được 2 hình tam giác?",
      questionEn: "If sharing 1 side, what is the minimum number of matchsticks to form 2 triangles?",
      options: ["4", "5", "6", "3"],
      answer: "5",
      hint: "Tam giác thứ nhất: 3 que. Tam giác thứ hai dùng chung 1 cạnh nên chỉ cần thêm 2 que.",
      explanation: "3 + 2 = 5 que tính.",
      xp: 20
    },
    {
      id: "geo-q12",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Cần ít nhất bao nhiêu que tính để ghép thành 1 hình vuông và 1 hình tam giác không chung cạnh? [ ? ]",
      questionEn: "Minimum matchsticks needed to form 1 square and 1 non-adjacent triangle? [ ? ]",
      answer: "7",
      hint: "Hình vuông: 4 que. Hình tam giác: 3 que. 4 + 3 = 7.",
      explanation: "4 + 3 = 7 que tính.",
      xp: 20
    },

    // Geo Lesson 4
    {
      id: "geo-q13",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Trên một đoạn thẳng có 3 điểm A, B, C theo thứ tự. Có tất cả bao nhiêu đoạn thẳng?",
      questionEn: "On a line segment, there are 3 points A, B, C in order. How many line segments in total?",
      options: ["2", "3", "4", "1"],
      answer: "3",
      hint: "AB, BC và AC.",
      explanation: "Có 3 đoạn thẳng: AB, BC, AC.",
      xp: 10
    },
    {
      id: "geo-q14",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Trên một đường thẳng có 4 điểm liên tiếp A, B, C, D. Hỏi có tất cả bao nhiêu đoạn thẳng? [ ? ]",
      questionEn: "There are 4 consecutive points A, B, C, D on a line. How many line segments in total? [ ? ]",
      answer: "6",
      hint: "Mẹo nhanh: 1 + 2 + 3 = 6 đoạn thẳng.",
      explanation: "AB, BC, CD, AC, BD, AD = 6 đoạn thẳng.",
      xp: 15
    },
    {
      id: "geo-q15",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đoạn thẳng viền xung quanh?",
      questionEn: "How many line segments form the outer border of a pentagon (5-sided polygon)?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      hint: "Ngũ giác nghĩa là hình có 5 cạnh.",
      explanation: "Hình ngũ giác có 5 cạnh là 5 đoạn thẳng.",
      xp: 15
    },
    {
      id: "geo-q16",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Trên một đoạn thẳng có 5 điểm phân biệt. Hỏi có tất cả bao nhiêu đoạn thẳng? [ ? ]",
      questionEn: "There are 5 distinct points on a line segment. How many line segments in total? [ ? ]",
      answer: "10",
      hint: "1 + 2 + 3 + 4 = 10 đoạn thẳng.",
      explanation: "Số đoạn thẳng = 1 + 2 + 3 + 4 = 10.",
      xp: 20
    },

    // Geo Lesson 5
    {
      id: "geo-q17",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Một khối Rubik 3x3 có hình dạng khối gì?",
      questionEn: "What shape is a 3x3 Rubik's cube?",
      options: ["Khối cầu", "Khối lập phương", "Khối chữ nhật", "Khối trụ"],
      answer: "Khối lập phương",
      hint: "Có 6 mặt hình vuông đều nhau.",
      explanation: "Khối Rubik có hình dạng khối lập phương (Cube).",
      xp: 10
    },
    {
      id: "geo-q18",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một khối lập phương có tất cả bao nhiêu mặt?",
      questionEn: "How many total faces does a cube have?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      hint: "Trên, dưới, trước, sau, trái, phải.",
      explanation: "Khối lập phương có đúng 6 mặt vuông bằng nhau.",
      xp: 15
    },
    {
      id: "geo-q19",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Bé xếp 3 khối lập phương thành 1 tháp đứng. Hỏi có bao nhiêu khối lập phương? [ ? ]",
      questionEn: "Stack 3 identical cubes into a vertical tower. How many cubes are there? [ ? ]",
      answer: "3",
      hint: "3 khối xếp chồng lên nhau.",
      explanation: "Có đúng 3 khối lập phương.",
      xp: 10
    },
    {
      id: "geo-q20",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Để tạo thành một khối lập phương lớn hơn (kích thước 2x2x2), cần bao nhiêu khối lập phương nhỏ?",
      questionEn: "To build a larger 2x2x2 cube, how many small unit cubes are needed?",
      options: ["4", "6", "8", "9"],
      answer: "8",
      hint: "Tầng dưới 4 khối, tầng trên 4 khối.",
      explanation: "2 × 2 × 2 = 8 khối lập phương nhỏ.",
      xp: 20
    },

    // --- TOPIC 3: LOGICAL THINKING (20 Questions) ---
    {
      id: "logic-q1",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hôm nay là Thứ Ba. Hỏi 2 ngày sau là thứ mấy?",
      questionEn: "Today is Tuesday. What day of the week will it be in 2 days?",
      options: ["Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
      answer: "Thứ Năm",
      hint: "Đếm: Thứ Tư (1 ngày), Thứ Năm (2 ngày).",
      explanation: "Thứ Ba + 2 ngày = Thứ Năm.",
      xp: 10
    },
    {
      id: "logic-q2",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hôm nay là Thứ Bảy. Hỏi 7 ngày sau là thứ mấy?",
      questionEn: "Today is Saturday. What day of the week will it be in 7 days?",
      options: ["Thứ Sáu", "Thứ Bảy", "Chủ Nhật", "Thứ Hai"],
      answer: "Thứ Bảy",
      hint: "Sau đúng 1 tuần (7 ngày) thì thứ lặp lại như cũ.",
      explanation: "Sau 7 ngày luôn là cùng thứ đó: Thứ Bảy.",
      xp: 10
    },
    {
      id: "logic-q3",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Hôm nay là Thứ Tư. Hỏi 9 ngày sau là thứ mấy?",
      questionEn: "Today is Wednesday. What day of the week will it be in 9 days?",
      options: ["Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"],
      answer: "Thứ Sáu",
      hint: "9 ngày = 7 ngày + 2 ngày. Thứ Tư + 2 ngày = Thứ Sáu.",
      explanation: "9 ngày sau = 7 ngày (Thứ Tư) + 2 ngày = Thứ Sáu.",
      xp: 15
    },
    {
      id: "logic-q4",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Hôm nay là Chủ Nhật. Hỏi 15 ngày sau là thứ mấy?",
      questionEn: "Today is Sunday. What day of the week will it be in 15 days?",
      options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Chủ Nhật"],
      answer: "Thứ Hai",
      hint: "15 ngày = 14 ngày (2 tuần tròn) + 1 ngày.",
      explanation: "15 = 14 (Chủ Nhật) + 1 = Thứ Hai.",
      xp: 20
    },

    // Logic Lesson 2
    {
      id: "logic-q5",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Nếu ngày mai là Thứ Sáu, thì hôm qua là thứ mấy?",
      questionEn: "If tomorrow is Friday, what day was yesterday?",
      options: ["Thứ Tư", "Thứ Ba", "Thứ Năm", "Thứ Bảy"],
      answer: "Thứ Tư",
      hint: "Ngày mai là Thứ Sáu ➔ Hôm nay là Thứ Năm ➔ Hôm qua là Thứ Tư.",
      explanation: "Hôm nay là Thứ Năm, nên hôm qua là Thứ Tư.",
      xp: 10
    },
    {
      id: "logic-q6",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Nếu hôm qua là ngày 14, thì ngày mai là ngày bao nhiêu?",
      questionEn: "If yesterday was the 14th, what day will tomorrow be?",
      options: ["15", "16", "17", "18"],
      answer: "16",
      hint: "Hôm qua: 14 ➔ Hôm nay: 15 ➔ Ngày mai: 16.",
      explanation: "Hôm nay là ngày 15, ngày mai là ngày 16.",
      xp: 15
    },
    {
      id: "logic-q7",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Hôm kia là Thứ Hai. Hỏi ngày kia là thứ mấy?",
      questionEn: "If the day before yesterday was Monday, what day will the day after tomorrow be?",
      options: ["Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"],
      answer: "Thứ Sáu",
      hint: "Hôm kia: Thứ Hai ➔ Hôm nay: Thứ Tư ➔ Ngày kia: Thứ Sáu.",
      explanation: "Hôm nay là Thứ Tư. Ngày kia (+2 ngày) là Thứ Sáu.",
      xp: 15
    },
    {
      id: "logic-q8",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Ngày 5 tháng này là Thứ Ba. Hỏi ngày 12 tháng này là thứ mấy?",
      questionEn: "If the 5th of this month is Tuesday, what day is the 12th of this month?",
      options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm"],
      answer: "Thứ Ba",
      hint: "12 - 5 = 7 ngày (đúng 1 tuần).",
      explanation: "Cách nhau đúng 7 ngày nên ngày 12 cũng là Thứ Ba.",
      xp: 20
    },

    // Logic Lesson 3
    {
      id: "logic-q9",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Trong một hàng dọc, An đứng trước Bình, Bình đứng trước Cường. Ai là người đứng đầu hàng?",
      questionEn: "In a line, An is in front of Binh, Binh is in front of Cuong. Who is first in line?",
      options: ["Bình", "Cường", "An", "Không xác định"],
      answer: "An",
      hint: "An ➔ Bình ➔ Cường.",
      explanation: "An đứng trước tất cả nên An đứng đầu hàng.",
      xp: 10
    },
    {
      id: "logic-q10",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Minh đứng thứ 4 từ trên xuống và đứng thứ 3 từ dưới lên trong hàng. Hỏi hàng đó có bao nhiêu bạn? [ ? ]",
      questionEn: "Minh is 4th from top and 3rd from bottom in line. How many students in total? [ ? ]",
      answer: "6",
      hint: "4 + 3 - 1 = 6 bạn.",
      explanation: "Tổng số bạn = 4 + 3 - 1 = 6 bạn.",
      xp: 15
    },
    {
      id: "logic-q11",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một đàn vịt bơi nối đuôi nhau. 1 con đi trước 2 con, 1 con đi giữa 2 con, 1 con đi sau 2 con. Hỏi có ít nhất bao nhiêu con vịt?",
      questionEn: "Ducks swim in line: 1 duck ahead of 2, 1 between 2, 1 behind 2. Minimum ducks?",
      options: ["3", "4", "5", "6"],
      answer: "3",
      hint: "Chỉ cần 3 con vịt bơi thẳng hàng là thỏa mãn tất cả!",
      explanation: "Có đúng 3 con vịt: Con 1, Con 2, Con 3.",
      xp: 15
    },
    {
      id: "logic-q12",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Trong hàng có 10 bạn. Lan đứng thứ 4 tính từ đầu hàng. Hỏi Lan đứng thứ mấy tính từ cuối hàng lên? [ ? ]",
      questionEn: "In a line of 10 students, Lan is 4th from front. What position is Lan from the back? [ ? ]",
      answer: "7",
      hint: "10 - 4 + 1 = 7.",
      explanation: "Sau Lan có 6 bạn (10 - 4 = 6), nên tính từ dưới lên Lan đứng thứ 7.",
      xp: 20
    },

    // Logic Lesson 4
    {
      id: "logic-q13",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 3 con vật xếp hàng: Mèo, Chó, Gà. Chó ở bên phải Mèo, Gà ở bên phải Chó. Con vật nào ở bên trái nhất?",
      questionEn: "3 animals in line: Cat, Dog, Chicken. Dog is right of Cat, Chicken right of Dog. Who is leftmost?",
      options: ["Gà", "Chó", "Mèo", "Cả 3 con"],
      answer: "Mèo",
      hint: "Thứ tự từ trái qua phải: Mèo ➔ Chó ➔ Gà.",
      explanation: "Mèo ở vị trí ngoài cùng bên trái.",
      xp: 10
    },
    {
      id: "logic-q14",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Nam cao hơn Dũng, Dũng cao hơn Tuấn. Hỏi ai thấp nhất?",
      questionEn: "Nam is taller than Dung, Dung is taller than Tuan. Who is the shortest?",
      options: ["Nam", "Dũng", "Tuấn", "Bằng nhau"],
      answer: "Tuấn",
      hint: "Nam > Dũng > Tuấn.",
      explanation: "Tuấn là người thấp nhất.",
      xp: 15
    },
    {
      id: "logic-q15",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "true-false",
      question: "Đúng hay Sai: Nếu quả Táo nặng hơn quả Cam, và quả Cam nặng hơn quả Dâu tây, thì quả Táo nặng nhất?",
      questionEn: "True/False: If Apple > Orange and Orange > Strawberry, is Apple the heaviest?",
      options: ["Đúng", "Sai"],
      answer: "Đúng",
      hint: "Táo > Cam > Dâu tây.",
      explanation: "Táo nặng nhất là chính xác.",
      xp: 10
    },
    {
      id: "logic-q16",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có 4 bạn A, B, C, D chạy thi. A về trước B nhưng sau C. D về sau B. Ai về đích đầu tiên?",
      questionEn: "4 runners A, B, C, D. A finishes before B but after C. D finishes after B. Who wins?",
      options: ["A", "B", "C", "D"],
      answer: "C",
      hint: "Thứ tự: C ➔ A ➔ B ➔ D.",
      explanation: "C về đích đầu tiên.",
      xp: 20
    },

    // Logic Lesson 5
    {
      id: "logic-q17",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hình nào khác biệt nhất so với các hình còn lại?",
      questionEn: "Which shape is most different from the others?",
      options: ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình tròn"],
      answer: "Hình tròn",
      hint: "Hình tròn không có góc và cạnh thẳng, các hình kia đều có 4 cạnh.",
      explanation: "Hình tròn là hình cong, 3 hình còn lại đều là tứ giác có 4 cạnh thẳng.",
      xp: 10
    },
    {
      id: "logic-q18",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Số nào không thuộc cùng nhóm với các số còn lại: 2, 4, 6, 9, 8?",
      questionEn: "Which number does not belong to the group: 2, 4, 6, 9, 8?",
      options: ["4", "6", "9", "8"],
      answer: "9",
      hint: "9 là số lẻ, các số còn lại đều là số chẵn.",
      explanation: "9 là số lẻ duy nhất trong nhóm.",
      xp: 15
    },
    {
      id: "logic-q19",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có 3 hộp quà: Đỏ, Xanh, Vàng đựng Bút, Thước, Tẩy. Hộp Đỏ không đựng Bút. Hộp Xanh đựng Thước. Hỏi hộp Đỏ đựng gì?",
      questionEn: "3 boxes Red, Blue, Yellow holding Pen, Ruler, Eraser. Red has no Pen, Blue has Ruler. What is in Red?",
      options: ["Bút", "Thước", "Tẩy", "Không có gì"],
      answer: "Tẩy",
      hint: "Hộp Xanh = Thước. Hộp Đỏ không đựng Bút nên phải đựng Tẩy.",
      explanation: "Hộp Đỏ đựng Tẩy, Hộp Vàng đựng Bút, Hộp Xanh đựng Thước.",
      xp: 20
    },
    {
      id: "logic-q20",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Một người thợ cắt một khúc gỗ dài thành 4 đoạn. Mỗi lần cưa mất 2 phút. Hỏi cưa xong mất bao nhiêu phút? [ ? ]",
      questionEn: "A carpenter cuts a wooden log into 4 pieces. Each cut takes 2 mins. Total minutes? [ ? ]",
      answer: "6",
      hint: "Để cắt thành 4 đoạn chỉ cần cưa 3 nhát! 3 × 2 = 6 phút.",
      explanation: "Số nhát cưa = 4 - 1 = 3 nhát. Thời gian = 3 × 2 = 6 phút.",
      xp: 20
    },

    // --- TOPIC 4: ADVANCED ARITHMETIC (20 Questions) ---
    {
      id: "adv-q1",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Mai có 8 bông hoa. Lan tặng Mai thêm 5 bông hoa. Sau đó Mai đem tặng cô giáo 4 bông hoa. Hỏi Mai còn lại bao nhiêu bông hoa?",
      questionEn: "Mai has 8 flowers. Lan gives her 5 more. Then Mai gives teacher 4 flowers. How many left?",
      options: ["8", "9", "10", "11"],
      answer: "9",
      hint: "8 + 5 = 13; 13 - 4 = 9.",
      explanation: "8 + 5 - 4 = 9 bông hoa.",
      xp: 10
    },
    {
      id: "adv-q2",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Bể cá có 12 con cá, mẹ thả thêm 6 con cá, chú mèo vớt trộm mất 3 con cá. Trong bể còn lại [ ? ] con cá.",
      questionEn: "Tank has 12 fish, mom adds 6 fish, cat steals 3 fish. How many fish left in tank? [ ? ]",
      answer: "15",
      hint: "12 + 6 = 18; 18 - 3 = 15.",
      explanation: "12 + 6 - 3 = 15 con cá.",
      xp: 10
    },
    {
      id: "adv-q3",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Xe buýt có 15 hành khách. Đến trạm thứ nhất, 4 người xuống và 7 người lên. Hỏi trên xe lúc này có bao nhiêu người?",
      questionEn: "Bus has 15 passengers. 4 get off, 7 get on at first stop. How many passengers now?",
      options: ["18", "19", "17", "16"],
      answer: "18",
      hint: "15 - 4 + 7 = 11 + 7 = 18.",
      explanation: "15 - 4 + 7 = 18 người.",
      xp: 15
    },
    {
      id: "adv-q4",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Huy có 20 viên bi. Huy cho Đạt 5 viên, sau đó Đạt trả lại Huy 2 viên. Hỏi Huy còn lại bao nhiêu viên bi? [ ? ]",
      questionEn: "Huy has 20 marbles. Huy gives Dat 5, then Dat returns 2. How many marbles Huy has left? [ ? ]",
      answer: "17",
      hint: "20 - 5 + 2 = 17 viên.",
      explanation: "20 - 5 + 2 = 17 viên bi.",
      xp: 20
    },

    // Adv Lesson 2
    {
      id: "adv-q5",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hùng có 10 cái kẹo, Dũng có 4 cái kẹo. Hùng cho Dũng mấy cái kẹo để hai bạn có số kẹo bằng nhau?",
      questionEn: "Hung has 10 candies, Dung has 4. How many candies must Hung give Dung to have equal?",
      options: ["2", "3", "4", "6"],
      answer: "3",
      hint: "Tổng số kẹo: 10 + 4 = 14. Mỗi bạn có 7 cái. Hùng cho Dũng: 10 - 7 = 3 cái.",
      explanation: "Chênh lệch là 6 cái ➔ Hùng cho Dũng: 6 : 2 = 3 cái kẹo.",
      xp: 10
    },
    {
      id: "adv-q6",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Túi thứ nhất có 14 quả táo, túi thứ hai có 6 quả táo. Cần chuyển từ túi thứ nhất sang túi thứ hai [ ? ] quả để 2 túi bằng nhau.",
      questionEn: "Bag 1 has 14 apples, Bag 2 has 6 apples. Transfer [ ? ] apples to make them equal.",
      answer: "4",
      hint: "(14 - 6) : 2 = 8 : 2 = 4 quả.",
      explanation: "Chuyển 4 quả táo.",
      xp: 15
    },
    {
      id: "adv-q7",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Sau khi An cho Bình 2 chiếc bút thì hai bạn có số bút bằng nhau và đều có 8 chiếc. Hỏi ban đầu An có bao nhiêu chiếc bút?",
      questionEn: "After An gives Binh 2 pens, both have 8 pens. How many pens did An originally have?",
      options: ["6", "8", "10", "12"],
      answer: "10",
      hint: "An cho đi 2 chiếc thì còn 8 chiếc ➔ Ban đầu An có: 8 + 2 = 10 chiếc.",
      explanation: "Ban đầu An có 8 + 2 = 10 chiếc bút.",
      xp: 15
    },
    {
      id: "adv-q8",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Bình có 18 viên bi, sau khi cho Cường một số viên bi thì Bình còn nhiều hơn Cường 2 viên. Hỏi Bình đã cho Cường mấy viên bi biết ban đầu Cường chưa có viên nào? [ ? ]",
      questionEn: "Binh has 18 marbles, gives Cuong some so Binh has 2 more than Cuong. How many given? [ ? ]",
      answer: "8",
      hint: "Nếu Bình cho 8 viên: Bình còn 10 viên, Cường có 8 viên. 10 - 8 = 2 (Đúng!).",
      explanation: "Bình cho Cường 8 viên bi.",
      xp: 20
    },

    // Adv Lesson 3
    {
      id: "adv-q9",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Một quả táo giá 3 đồng, một quả chuối giá 2 đồng. Bé mua 2 quả táo và 1 quả chuối hết bao nhiêu đồng?",
      questionEn: "An apple costs 3 coins, banana 2 coins. Buying 2 apples and 1 banana costs how many coins?",
      options: ["7", "8", "9", "6"],
      answer: "8",
      hint: "2 quả táo = 3 + 3 = 6 đồng. Thêm 1 quả chuối: 6 + 2 = 8 đồng.",
      explanation: "3 + 3 + 2 = 8 đồng.",
      xp: 10
    },
    {
      id: "adv-q10",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Bé có 20 đồng. Bé mua 1 chiếc bánh kem giá 12 đồng và 1 hộp sữa giá 5 đồng. Bé còn lại [ ? ] đồng.",
      questionEn: "You have 20 coins. Buying cake for 12 coins and milk for 5 coins leaves how many coins? [ ? ]",
      answer: "3",
      hint: "Tổng tiền mua: 12 + 5 = 17 đồng. Còn lại: 20 - 17 = 3 đồng.",
      explanation: "20 - (12 + 5) = 3 đồng.",
      xp: 15
    },
    {
      id: "adv-q11",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một hộp bút giá 9 nghìn đồng. Bé đưa cô bán hàng tờ 20 nghìn đồng. Cô trả lại bé bao nhiêu nghìn đồng?",
      questionEn: "A pencil case costs 9 thousand dong. You pay with a 20-thousand note. How much change do you get (in thousands)?",
      visual: "💵 20",
      options: [
        "9",
        "10",
        "11",
        "12"
      ],
      answer: "11",
      hint: "Tiền trả lại = tiền đưa - giá hộp bút.",
      explanation: "20 - 9 = 11 nghìn đồng.",
      xp: 15
    },
    {
      id: "adv-q12",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Mua 2 chiếc bút chì và 1 cục tẩy hết 10 đồng. Biết 1 cục tẩy giá 2 đồng. Hỏi 1 chiếc bút chì giá bao nhiêu đồng?",
      questionEn: "2 pencils and 1 eraser cost 10 coins. 1 eraser costs 2 coins. Price of 1 pencil?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      hint: "2 chiếc bút chì có giá: 10 - 2 = 8 đồng ➔ 1 chiếc giá: 8 : 2 = 4 đồng.",
      explanation: "Giá 2 bút chì là 8 đồng ➔ 1 chiếc bút chì giá 4 đồng.",
      xp: 20
    },

    // Adv Lesson 4
    {
      id: "adv-q13",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Năm nay Mai 7 tuổi. Hỏi 4 năm nữa Mai bao nhiêu tuổi?",
      questionEn: "Mai is currently 7 years old. How old will Mai be in 4 years?",
      options: ["10", "11", "12", "13"],
      answer: "11",
      hint: "7 + 4 = 11.",
      explanation: "7 + 4 = 11 tuổi.",
      xp: 10
    },
    {
      id: "adv-q14",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Năm nay Anh 10 tuổi, Em 6 tuổi. Hỏi 5 năm sau, Anh hơn Em bao nhiêu tuổi?",
      questionEn: "Brother is 10, Sister is 6. In 5 years, how much older is Brother than Sister?",
      options: ["4", "5", "9", "11"],
      answer: "4",
      hint: "Hiệu số tuổi không đổi theo thời gian: 10 - 6 = 4 tuổi.",
      explanation: "Dù 5 năm sau hay bao lâu thì Anh vẫn luôn hơn Em 4 tuổi.",
      xp: 15
    },
    {
      id: "adv-q15",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Cách đây 2 năm, tổng số tuổi của hai anh em là 10 tuổi. Hỏi hiện nay tổng số tuổi của hai anh em là bao nhiêu? [ ? ]",
      questionEn: "2 years ago, combined age of 2 siblings was 10. What is combined age now? [ ? ]",
      answer: "14",
      hint: "Sau 2 năm, mỗi người tăng 2 tuổi ➔ Tổng tuổi tăng 4 tuổi: 10 + 4 = 14.",
      explanation: "10 + 2 + 2 = 14 tuổi.",
      xp: 15
    },
    {
      id: "adv-q16",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Khi Lan 5 tuổi thì mẹ 30 tuổi. Năm nay Lan 8 tuổi, hỏi năm nay mẹ bao nhiêu tuổi? [ ? ]",
      questionEn: "When Lan was 5, Mom was 30. Now Lan is 8, how old is Mom now? [ ? ]",
      answer: "33",
      hint: "Mẹ hơn Lan: 30 - 5 = 25 tuổi. Năm nay mẹ: 8 + 25 = 33 tuổi.",
      explanation: "Mẹ luôn hơn Lan 25 tuổi ➔ Năm nay mẹ 8 + 25 = 33 tuổi.",
      xp: 20
    },

    // Adv Lesson 5
    {
      id: "adv-q17",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 1,
      type: "fill-blank",
      question: "Tìm số ban đầu: Lấy số đó cộng với 5 thì được 12. Số đó là [ ? ]",
      questionEn: "Find original number: Adding 5 to it yields 12. The number is [ ? ]",
      answer: "7",
      hint: "12 - 5 = 7.",
      explanation: "12 - 5 = 7.",
      xp: 10
    },
    {
      id: "adv-q18",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Nghĩ ra một số, lấy số đó trừ đi 6 rồi cộng thêm 8 thì được 15. Số ban đầu là số nào?",
      questionEn: "Think of a number, subtract 6 then add 8 to get 15. What is the original number?",
      options: ["11", "12", "13", "14"],
      answer: "13",
      hint: "Đi ngược lại: 15 - 8 = 7, sau đó 7 + 6 = 13.",
      explanation: "15 - 8 + 6 = 13.",
      xp: 15
    },
    {
      id: "adv-q19",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Thỏ Trắng hái được một số củ cà rốt. Thỏ ăn hết 3 củ, sau đó mẹ cho thêm 7 củ thì có tất cả 16 củ. Ban đầu Thỏ hái được [ ? ] củ cà rốt.",
      questionEn: "Rabbit picks carrots, eats 3, gets 7 from mom, now has 16. Original count? [ ? ]",
      answer: "12",
      hint: "Đi ngược: 16 - 7 = 9 củ; 9 + 3 = 12 củ.",
      explanation: "Ban đầu Thỏ có 16 - 7 + 3 = 12 củ cà rốt.",
      xp: 20
    },
    {
      id: "adv-q20",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có 2 giỏ đựng cam, giỏ A có nhiều hơn giỏ B 6 quả. Nếu lấy 2 quả từ giỏ A chuyển sang giỏ B thì giỏ A còn nhiều hơn giỏ B mấy quả?",
      questionEn: "Basket A has 6 more oranges than B. If 2 move from A to B, A has how many more than B?",
      options: ["2", "3", "4", "5"],
      answer: "2",
      hint: "Chuyển 2 quả thì khoảng cách rút ngắn 4 quả: 6 - 4 = 2 quả.",
      explanation: "Giỏ A giảm 2, giỏ B tăng 2 ➔ Chênh lệch mới là 6 - 4 = 2 quả.",
      xp: 20
    },

    // --- TOPIC 5: COMBINATORICS (20 Questions) ---
    {
      id: "comb-q1",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bạn Nam có 2 chiếc mũ (xanh, đỏ) và 2 chiếc áo (vàng, trắng). Hỏi Nam có bao nhiêu cách chọn 1 mũ và 1 áo?",
      questionEn: "Nam has 2 hats (blue, red) and 2 shirts (yellow, white). How many outfit combos?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      hint: "2 × 2 = 4 cách phối đồ.",
      explanation: "Mỗi mũ ghép với 2 áo ➔ 2 × 2 = 4 cách.",
      xp: 10
    },
    {
      id: "comb-q2",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Có 3 loại kem (vani, dâu, socola) và 2 loại ốc quế (ngọt, giòn). Có tất cả [ ? ] cách chọn 1 cây kem ốc quế.",
      questionEn: "3 ice cream flavors and 2 cone types. How many total ice cream cone choices? [ ? ]",
      answer: "6",
      hint: "3 × 2 = 6 cách.",
      explanation: "3 × 2 = 6 cách.",
      xp: 10
    },
    {
      id: "comb-q3",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 3 con đường đi từ nhà An đến trường, và có 2 con đường đi từ trường đến công viên. Hỏi có bao nhiêu cách đi từ nhà An qua trường rồi đến công viên?",
      questionEn: "3 paths from house to school, 2 paths school to park. How many paths house to park?",
      options: ["5", "6", "8", "9"],
      answer: "6",
      hint: "3 × 2 = 6 cách đi.",
      explanation: "Mỗi con đường đến trường có 2 con đường tiếp theo ➔ 3 × 2 = 6 cách.",
      xp: 15
    },
    {
      id: "comb-q4",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Bạn Hoa có 3 cái kẹp tóc khác nhau, 2 cái váy khác nhau và 3 đôi giày khác nhau. Hỏi Hoa có bao nhiêu cách chọn 1 bộ gồm 1 kẹp tóc, 1 váy và 1 đôi giày? [ ? ]",
      questionEn: "3 hairpins, 2 dresses, 3 shoe pairs. How many total outfits of 1 pin, 1 dress, 1 shoe? [ ? ]",
      answer: "18",
      hint: "3 × 2 × 3 = 18 cách.",
      explanation: "3 × 2 × 3 = 18 cách phối trang phục.",
      xp: 20
    },

    // Comb Lesson 2
    {
      id: "comb-q5",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Từ 2 chữ số 1 và 5, có thể lập được bao nhiêu số có hai chữ số khác nhau?",
      questionEn: "Using digits 1 and 5, how many 2-digit numbers with distinct digits can be formed?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      hint: "Gồm số 15 và 51.",
      explanation: "Lập được 2 số: 15 và 51.",
      xp: 10
    },
    {
      id: "comb-q6",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Cho 3 chữ số 2, 4, 6. Có thể lập được bao nhiêu số có 2 chữ số khác nhau? [ ? ]",
      questionEn: "Given digits 2, 4, 6. How many 2-digit numbers with distinct digits? [ ? ]",
      answer: "6",
      hint: "24, 26, 42, 46, 62, 64 (tổng cộng 6 số).",
      explanation: "Có 6 số: 24, 26, 42, 46, 62, 64.",
      xp: 15
    },
    {
      id: "comb-q7",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Cho 3 chữ số 0, 3, 7. Có thể lập được bao nhiêu số có 2 chữ số khác nhau?",
      questionEn: "Given digits 0, 3, 7. How many 2-digit numbers with distinct digits can be formed?",
      options: ["6", "4", "5", "3"],
      answer: "4",
      hint: "Chữ số 0 không thể đứng ở hàng chục! Các số là: 30, 37, 70, 73.",
      explanation: "Chữ số hàng chục chỉ có thể là 3 hoặc 7 ➔ Lập được 4 số: 30, 37, 70, 73.",
      xp: 15
    },
    {
      id: "comb-q8",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Từ các chữ số 1, 2, 3, có thể lập được bao nhiêu số có 2 chữ số (cho phép 2 chữ số giống nhau như 11, 22)? [ ? ]",
      questionEn: "From digits 1, 2, 3, how many 2-digit numbers (repeats allowed like 11) can be formed? [ ? ]",
      answer: "9",
      hint: "Hàng chục có 3 cách, hàng đơn vị có 3 cách ➔ 3 × 3 = 9 số.",
      explanation: "Có 9 số: 11, 12, 13, 21, 22, 23, 31, 32, 33.",
      xp: 20
    },

    // Comb Lesson 3
    {
      id: "comb-q9",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Dùng 2 màu Đỏ và Vàng để tô 2 quả bóng liền nhau, mỗi quả 1 màu và khác màu nhau. Có mấy cách tô?",
      questionEn: "Using Red and Yellow to color 2 adjacent balls with different colors. How many ways?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      hint: "Đỏ - Vàng hoặc Vàng - Đỏ.",
      explanation: "Có 2 cách tô: (Đỏ, Vàng) và (Vàng, Đỏ).",
      xp: 10
    },
    {
      id: "comb-q10",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 3 ô tròn thẳng hàng. Dùng 2 màu (Xanh, Trắng) để tô sao cho 2 ô cạnh nhau không cùng màu. Có mấy cách tô?",
      questionEn: "3 circles in a line. Color with Blue and White so adjacent circles differ. How many ways?",
      options: ["2", "3", "4", "6"],
      answer: "2",
      hint: "Cách 1: Xanh - Trắng - Xanh. Cách 2: Trắng - Xanh - Trắng.",
      explanation: "Chỉ có đúng 2 cách tô xen kẽ màu.",
      xp: 15
    },
    {
      id: "comb-q11",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Có 3 lá cờ đứng cạnh nhau. Dùng 3 màu (Đỏ, Xanh, Vàng) để tô mỗi lá cờ một màu khác nhau. Có tất cả [ ? ] cách tô cờ.",
      questionEn: "3 flags in a row. Using 3 colors (Red, Blue, Yellow), 1 color each flag. How many ways? [ ? ]",
      answer: "6",
      hint: "3 × 2 × 1 = 6 cách.",
      explanation: "Lá cờ 1 có 3 màu, cờ 2 có 2 màu, cờ 3 có 1 màu ➔ 3 × 2 × 1 = 6 cách.",
      xp: 20
    },

    // Comb Lesson 4
    {
      id: "comb-q12",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Trong đĩa có 3 loại quả: Táo, Cam, Chuối. Bé muốn chọn 2 loại quả khác nhau. Có bao nhiêu cách chọn?",
      questionEn: "In a dish of Apple, Orange, Banana, choose 2 different fruits. How many combinations?",
      options: ["2", "3", "4", "6"],
      answer: "3",
      hint: "(Táo, Cam), (Táo, Chuối), (Cam, Chuối).",
      explanation: "Có 3 cặp quả khác nhau.",
      xp: 10
    },
    {
      id: "comb-q13",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Có 3 bạn nhỏ An, Bình, Chi gặp nhau. Mỗi bạn bắt tay với bạn kia một lần. Có tất cả [ ? ] cái bắt tay.",
      questionEn: "3 friends An, Binh, Chi meet. Each shakes hands with others once. Total handshakes? [ ? ]",
      answer: "3",
      hint: "An-Bình, An-Chi, Bình-Chi (3 cái).",
      explanation: "Có đúng 3 cái bắt tay.",
      xp: 15
    },
    {
      id: "comb-q14",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 4 bạn nhỏ chơi cờ vua với nhau. Cứ 2 bạn đấu 1 ván. Hỏi có tất cả bao nhiêu ván cờ?",
      questionEn: "4 friends play chess with each other. Every pair plays 1 game. Total games?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      hint: "3 + 2 + 1 = 6 ván cờ.",
      explanation: "Tổng số ván cờ = 3 + 2 + 1 = 6 ván.",
      xp: 15
    },
    {
      id: "comb-q15",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Có 5 bạn nhỏ cùng chơi trò đổi thiệp chúc mừng. Mỗi bạn gửi tặng mỗi bạn khác 1 tấm thiệp. Có tất cả bao nhiêu tấm thiệp được gửi đi? [ ? ]",
      questionEn: "5 friends exchange cards. Each sends 1 card to every other friend. Total cards sent? [ ? ]",
      answer: "20",
      hint: "Mỗi bạn gửi 4 tấm thiệp cho 4 bạn khác ➔ 5 × 4 = 20 tấm thiệp.",
      explanation: "5 × 4 = 20 tấm thiệp.",
      xp: 20
    },

    // Comb Lesson 5
    {
      id: "comb-q16",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Cắt 1 sợi dây bằng 2 nhát kéo thẳng, sợi dây đứt thành mấy đoạn?",
      questionEn: "Cutting a string with 2 straight scissor cuts divides it into how many pieces?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      hint: "Mỗi nhát cắt tăng thêm 1 đoạn: 1 + 2 = 3 đoạn.",
      explanation: "Số đoạn = số nhát cắt + 1 = 2 + 1 = 3 đoạn dây.",
      xp: 10
    },
    {
      id: "comb-q17",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Muốn chia một chiếc bánh mì dài thành 5 khúc, cần cắt ít nhất [ ? ] nhát dao.",
      questionEn: "To divide a long bread into 5 pieces, at least how many knife cuts are needed? [ ? ]",
      answer: "4",
      hint: "5 - 1 = 4 nhát dao.",
      explanation: "Cần cắt 5 - 1 = 4 nhát dao.",
      xp: 15
    },
    {
      id: "comb-q18",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 3 hình tròn đồng tâm (nhỏ lồng trong lớn). Chúng chia mặt phẳng thành bao nhiêu phần?",
      questionEn: "3 concentric circles divide the plane into how many regions?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      hint: "1 phần trong cùng + 2 vành đai tròn + 1 phần ngoài cùng = 4.",
      explanation: "Chia mặt phẳng thành 4 vùng không gian.",
      xp: 15
    },
    {
      id: "comb-q19",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Một hình chữ nhật được chia thành 4 ô vuông thẳng hàng. Hỏi có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?",
      questionEn: "A rectangle is divided into 4 squares in a row. How many rectangles (including squares) are there?",
      visual: "⬜⬜⬜⬜",
      options: [
        "4",
        "8",
        "10",
        "12"
      ],
      answer: "10",
      hint: "Đếm hình gồm 1 ô, 2 ô, 3 ô, 4 ô.",
      explanation: "4 + 3 + 2 + 1 = 10 hình chữ nhật.",
      xp: 20
    },
    {
      id: "comb-q20",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Muốn cưa một khúc gỗ thành 6 đoạn thì cần cưa ít nhất bao nhiêu nhát? [ ? ]",
      questionEn: "To saw a log into 6 pieces, how many cuts are needed at least? [ ? ]",
      visual: "🪵",
      answer: "5",
      hint: "Số nhát cưa = số đoạn - 1.",
      explanation: "6 - 1 = 5 nhát cưa.",
      xp: 20
    }
  ,    
    // --- NEW EXPANDED BILINGUAL QUESTIONS ---
    {
      id: "arith-q26",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Bé có 9 quả táo, mẹ cho thêm 7 quả táo nữa. Hỏi bé có tất cả [ ? ] quả táo?",
      questionEn: "You have 9 apples, mom gives you 7 more. How many apples do you have in total? [ ? ]",
      answer: "16",
      hint: "9 + 7 = 16.",
      explanation: "9 + 7 = 16 quả táo.",
      xp: 15
    },
    {
      id: "arith-q27",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Trên đĩa có 16 cái bánh, bé ăn mất 7 cái bánh. Hỏi trên đĩa còn lại mấy cái bánh?",
      questionEn: "There are 16 cakes on a plate, you ate 7 cakes. How many cakes are left?",
      options: ["8", "9", "10", "7"],
      answer: "9",
      hint: "16 - 7 = 9.",
      explanation: "16 - 7 = 9 cái bánh.",
      xp: 15
    },
    {
      id: "arith-q28",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Tính kết quả phép tính: 45 + 34 = [ ? ]",
      questionEn: "Calculate the sum: 45 + 34 = [ ? ]",
      answer: "79",
      hint: "45 + 34 = 79.",
      explanation: "45 + 34 = 79.",
      xp: 15
    },
    {
      id: "arith-q29",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Điền số thích hợp vào ô trống: [ ? ] - 9 = 8",
      questionEn: "Fill in the blank: [ ? ] - 9 = 8",
      answer: "17",
      hint: "8 + 9 = 17.",
      explanation: "17 - 9 = 8.",
      xp: 20
    },
    {
      id: "arith-q30",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Tìm số tiếp theo trong dãy số: 4, 8, 12, 16, [ ? ]",
      questionEn: "Find the next number in the pattern: 4, 8, 12, 16, [ ? ]",
      options: ["18", "19", "20", "22"],
      answer: "20",
      hint: "Mỗi số cộng thêm 4.",
      explanation: "16 + 4 = 20.",
      xp: 20
    },

    {
      id: "geo-q21",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tìm hình tiếp theo trong dãy: 🔺 🟦 🔺 🟦 🔺 ?",
      questionEn: "Find the next shape: 🔺 🟦 🔺 🟦 🔺 ?",
      visual: "🔺 🟦 🔺 🟦 🔺 ❓",
      options: [
        "🔺",
        "🟦",
        "🔴",
        "⭐"
      ],
      answer: "🟦",
      hint: "Dãy lặp lại 2 hình: tam giác, vuông.",
      explanation: "Quy luật lặp: 🔺 🟦. Sau 🔺 là 🟦.",
      xp: 10
    },
    {
      id: "geo-q22",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một hình vuông được kẻ cả 2 đường chéo. Hỏi có tất cả bao nhiêu hình tam giác?",
      questionEn: "A square has both diagonals drawn. How many triangles are there in total?",
      visual: "⊠",
      options: [
        "4",
        "6",
        "8",
        "10"
      ],
      answer: "8",
      hint: "Đếm 4 tam giác nhỏ, rồi đếm các tam giác ghép từ 2 tam giác nhỏ.",
      explanation: "4 tam giác nhỏ + 4 tam giác ghép (mỗi nửa hình vuông theo 1 đường chéo) = 8 tam giác.",
      xp: 15
    },
    {
      id: "geo-q23",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Bé có 7 que tính. Bé xếp được nhiều nhất bao nhiêu hình tam giác rời nhau (không chung cạnh)?",
      questionEn: "You have 7 sticks. At most how many separate triangles (no shared sides) can you make?",
      visual: "🥢🥢🥢🥢🥢🥢🥢",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "2",
      hint: "Mỗi tam giác rời cần 3 que.",
      explanation: "3 + 3 = 6 que cho 2 tam giác, còn thừa 1 que không đủ xếp tam giác thứ 3.",
      xp: 15
    },
    {
      id: "geo-q24",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Trên một đường thẳng có 6 điểm. Hỏi có tất cả bao nhiêu đoạn thẳng? [ ? ]",
      questionEn: "There are 6 points on a line. How many line segments are there in total? [ ? ]",
      visual: "•—•—•—•—•—•",
      answer: "15",
      hint: "Cộng 5 + 4 + 3 + 2 + 1.",
      explanation: "Số đoạn thẳng = 5 + 4 + 3 + 2 + 1 = 15 đoạn.",
      xp: 20
    },
    {
      id: "geo-q25",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Xếp khối lập phương thành bậc thang: hàng dưới 3 khối, hàng giữa 2 khối, hàng trên 1 khối. Có tất cả bao nhiêu khối? [ ? ]",
      questionEn: "Cubes form stairs: 3 on the bottom, 2 in the middle, 1 on top. How many cubes in total? [ ? ]",
      visual: "🟫<br>🟫🟫<br>🟫🟫🟫",
      answer: "6",
      hint: "Cộng số khối từng hàng.",
      explanation: "3 + 2 + 1 = 6 khối.",
      xp: 15
    },

    {
      id: "logic-q21",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Gấu nặng hơn Thỏ, Thỏ nặng hơn Mèo. Hỏi con vật nào nặng nhất?",
      questionEn: "Bear is heavier than Rabbit, Rabbit is heavier than Cat. Which animal is the heaviest?",
      options: ["Thỏ / Rabbit", "Mèo / Cat", "Gấu / Bear", "Bằng nhau / Equal"],
      answer: "Gấu / Bear",
      hint: "Gấu > Thỏ > Mèo.",
      explanation: "Gấu nặng nhất.",
      xp: 10
    },
    {
      id: "logic-q22",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Hôm kia là Chủ Nhật. Hỏi hôm nay là thứ mấy?",
      questionEn: "The day before yesterday was Sunday. What day is today?",
      options: [
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm"
      ],
      answer: "Thứ Ba",
      hint: "Hôm kia + 2 ngày = hôm nay.",
      explanation: "Chủ Nhật → Thứ Hai (hôm qua) → Thứ Ba (hôm nay).",
      xp: 15
    },
    {
      id: "logic-q23",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Hàng có 9 bạn. Hoa đứng chính giữa hàng. Hoa đứng thứ mấy tính từ đầu hàng? [ ? ]",
      questionEn: "There are 9 children in a line. Hoa stands exactly in the middle. What is her position from the front? [ ? ]",
      answer: "5",
      hint: "Hai bên Hoa có số bạn bằng nhau.",
      explanation: "Bỏ Hoa ra còn 8 bạn, mỗi bên 4 bạn ➔ Hoa đứng thứ 4 + 1 = 5.",
      xp: 20
    },
    {
      id: "logic-q24",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "1 quả Táo nặng bằng 2 quả Cam. 1 quả Cam nặng bằng 3 quả Dâu tây. Hỏi 1 quả Táo nặng bằng bao nhiêu quả Dâu tây? [ ? ]",
      questionEn: "1 Apple equals 2 Oranges. 1 Orange equals 3 Strawberries. How many Strawberries equal 1 Apple? [ ? ]",
      answer: "6",
      hint: "2 × 3 = 6 quả dâu.",
      explanation: "1 Táo = 2 Cam = 2 × 3 Dâu = 6 quả Dâu tây.",
      xp: 15
    },
    {
      id: "logic-q25",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "An, Bình, Cường mặc 3 áo màu: Đỏ, Xanh, Vàng. Biết An không mặc Đỏ, Bình mặc Vàng. Cường mặc áo màu gì?",
      questionEn: "An, Binh, Cuong wear Red, Blue, Yellow shirts. An does not wear Red, Binh wears Yellow. What color shirt does Cuong wear?",
      options: ["Áo Đỏ / Red", "Áo Xanh / Blue", "Áo Vàng / Yellow", "Áo Trắng / White"],
      answer: "Áo Đỏ / Red",
      hint: "Bình mặc Vàng ➔ An mặc Xanh ➔ Cường mặc Đỏ.",
      explanation: "Cường mặc áo Đỏ.",
      xp: 20
    },

    {
      id: "adv-q21",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Lan có 12 cái kẹo. Mẹ cho Lan thêm 5 cái, sau đó Lan ăn mất 3 cái. Hỏi Lan còn lại bao nhiêu cái kẹo? [ ? ]",
      questionEn: "Lan has 12 candies. Mom gives her 5 more, then she eats 3. How many candies are left? [ ? ]",
      answer: "14",
      hint: "12 + 5 - 3 = 14.",
      explanation: "12 + 5 - 3 = 14 cái kẹo.",
      xp: 15
    },
    {
      id: "adv-q22",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Hùng có 14 viên bi, Dũng có 8 viên bi. Hùng phải cho Dũng bao nhiêu viên bi để 2 bạn có số bi bằng nhau? [ ? ]",
      questionEn: "Hung has 14 marbles, Dung has 8. How many marbles must Hung give Dung to have equal? [ ? ]",
      answer: "3",
      hint: "(14 - 8) : 2 = 3.",
      explanation: "Hùng hơn Dũng 6 viên ➔ Hùng cho Dũng 3 viên.",
      xp: 15
    },
    {
      id: "adv-q23",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Bút chì giá 5 xu, cục tẩy giá 3 xu. Bé mua 2 bút chì và 1 cục tẩy. Bé phải trả tất cả bao nhiêu xu? [ ? ]",
      questionEn: "A pencil costs 5 coins, an eraser costs 3 coins. Buying 2 pencils and 1 eraser costs how many coins? [ ? ]",
      answer: "13",
      hint: "5 + 5 + 3 = 13.",
      explanation: "5 + 5 + 3 = 13 xu.",
      xp: 15
    },
    {
      id: "adv-q24",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Năm nay Mẹ 32 tuổi, Con 7 tuổi. Hỏi 5 năm sau Mẹ hơn Con bao nhiêu tuổi? [ ? ]",
      questionEn: "Currently Mom is 32 years old, Child is 7. In 5 years, how much older will Mom be than Child? [ ? ]",
      answer: "25",
      hint: "Hiệu số tuổi không đổi: 32 - 7 = 25.",
      explanation: "32 - 7 = 25 tuổi.",
      xp: 15
    },
    {
      id: "adv-q25",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Nghĩ ra một số, lấy số đó cộng với 6 rồi trừ đi 4 thì được 15. Hỏi số ban đầu là bao nhiêu? [ ? ]",
      questionEn: "Think of a number, add 6 to it, then subtract 4 to get 15. What is the original number? [ ? ]",
      answer: "13",
      hint: "15 + 4 - 6 = 13.",
      explanation: "Số ban đầu = 15 + 4 - 6 = 13.",
      xp: 20
    },

    {
      id: "comb-q21",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bạn Gấu có 3 chiếc áo (Đỏ, Xanh, Vàng) và 2 chiếc quần (Đen, Trắng). Có bao nhiêu cách phối 1 áo và 1 quần?",
      questionEn: "Bear has 3 shirts (Red, Blue, Yellow) and 2 pants (Black, White). How many outfit combinations?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      hint: "3 × 2 = 6.",
      explanation: "3 × 2 = 6 cách phối trang phục.",
      xp: 10
    },
    {
      id: "comb-q22",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Cho 3 chữ số 1, 3, 5. Có thể lập được bao nhiêu số có 2 chữ số khác nhau? [ ? ]",
      questionEn: "Given digits 1, 3, 5. How many 2-digit numbers with distinct digits can be formed? [ ? ]",
      answer: "6",
      hint: "13, 15, 31, 35, 51, 53.",
      explanation: "Có 6 số: 13, 15, 31, 35, 51, 53.",
      xp: 15
    },
    {
      id: "comb-q23",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Dùng 3 màu (Đỏ, Xanh, Vàng) để tô 2 ô vuông liền nhau sao cho 2 ô khác màu nhau. Có tất cả [ ? ] cách tô.",
      questionEn: "Using 3 colors (Red, Blue, Yellow) to color 2 adjacent squares of different colors. How many ways? [ ? ]",
      answer: "6",
      hint: "3 × 2 = 6.",
      explanation: "3 × 2 = 6 cách tô.",
      xp: 15
    },
    {
      id: "comb-q24",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Có 4 bạn nhỏ gặp nhau, mỗi bạn bắt tay với bạn khác một lần. Hỏi có tất cả bao nhiêu cái bắt tay? [ ? ]",
      questionEn: "4 friends meet, each shakes hands with every other friend once. How many handshakes in total? [ ? ]",
      answer: "6",
      hint: "3 + 2 + 1 = 6.",
      explanation: "3 + 2 + 1 = 6 cái bắt tay.",
      xp: 15
    },
    {
      id: "comb-q25",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Cắt một sợi dây ruy-băng bằng 4 nhát kéo thẳng. Sợi dây đứt thành mấy đoạn?",
      questionEn: "Cutting a ribbon with 4 straight scissor cuts. How many pieces is it cut into?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      hint: "4 + 1 = 5.",
      explanation: "4 + 1 = 5 đoạn dây.",
      xp: 10
    },

    // --- UPDATE 2026-10: 10 câu/bài + dạng bài mới ---
    {
      id: "arith-q31",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính: 6 + 9 = ?",
      questionEn: "Calculate: 6 + 9 = ?",
      options: [
        "13",
        "14",
        "15",
        "16"
      ],
      answer: "15",
      hint: "6 + 4 = 10, rồi cộng thêm 5.",
      explanation: "6 + 9 = 15.",
      xp: 10
    },
    {
      id: "arith-q32",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Tính nhanh: 5 + 8 + 5 = [ ? ]",
      questionEn: "Quick sum: 5 + 8 + 5 = [ ? ]",
      answer: "18",
      hint: "Gộp 5 + 5 = 10 trước.",
      explanation: "5 + 5 = 10; 10 + 8 = 18.",
      xp: 15
    },
    {
      id: "arith-q33",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Phép cộng nào có kết quả bằng 13?",
      questionEn: "Which addition equals 13?",
      options: [
        "6 + 6",
        "7 + 5",
        "8 + 5",
        "9 + 3"
      ],
      answer: "8 + 5",
      hint: "Tính từng phép cộng rồi so sánh với 13.",
      explanation: "6 + 6 = 12; 7 + 5 = 12; 8 + 5 = 13; 9 + 3 = 12.",
      xp: 15
    },
    {
      id: "arith-q34",
      topic: "arithmetic",
      lessonId: "arith-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Tính nhanh: 1 + 2 + 3 + 4 + 5 + 5 = [ ? ]",
      questionEn: "Quick sum: 1 + 2 + 3 + 4 + 5 + 5 = [ ? ]",
      answer: "20",
      hint: "Ghép các cặp có tổng bằng 10 hoặc 5.",
      explanation: "(5 + 5) + (1 + 4) + (2 + 3) = 10 + 5 + 5 = 20.",
      xp: 20
    },
    {
      id: "arith-q35",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính: 12 - 5 = ?",
      questionEn: "Calculate: 12 - 5 = ?",
      options: [
        "6",
        "7",
        "8",
        "9"
      ],
      answer: "7",
      hint: "12 - 2 = 10, rồi trừ tiếp 3.",
      explanation: "12 - 5 = 7.",
      xp: 10
    },
    {
      id: "arith-q36",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Tính: 19 - 6 - 3 = [ ? ]",
      questionEn: "Calculate: 19 - 6 - 3 = [ ? ]",
      answer: "10",
      hint: "Trừ lần lượt từ trái sang phải.",
      explanation: "19 - 6 = 13; 13 - 3 = 10.",
      xp: 15
    },
    {
      id: "arith-q37",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Phép trừ nào có kết quả bé nhất?",
      questionEn: "Which subtraction has the smallest result?",
      options: [
        "14 - 6",
        "13 - 7",
        "15 - 8",
        "11 - 2"
      ],
      answer: "13 - 7",
      hint: "Tính từng phép trừ rồi so sánh.",
      explanation: "14 - 6 = 8; 13 - 7 = 6; 15 - 8 = 7; 11 - 2 = 9 ➔ bé nhất là 6.",
      xp: 15
    },
    {
      id: "arith-q38",
      topic: "arithmetic",
      lessonId: "arith-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Tính nhanh: 20 - 1 - 2 - 3 - 4 = [ ? ]",
      questionEn: "Quick calculation: 20 - 1 - 2 - 3 - 4 = [ ? ]",
      answer: "10",
      hint: "Trừ liên tiếp 1, 2, 3, 4 cũng là trừ đi tổng của chúng.",
      explanation: "1 + 2 + 3 + 4 = 10; 20 - 10 = 10.",
      xp: 20
    },
    {
      id: "arith-q39",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tính: 60 + 30 = ?",
      questionEn: "Calculate: 60 + 30 = ?",
      options: [
        "70",
        "80",
        "90",
        "100"
      ],
      answer: "90",
      hint: "6 chục + 3 chục = 9 chục.",
      explanation: "60 + 30 = 90.",
      xp: 10
    },
    {
      id: "arith-q40",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "So sánh: 45 + 3 và 50 - 1. Kết quả phép tính thứ nhất thế nào so với phép tính thứ hai?",
      questionEn: "Compare 45 + 3 and 50 - 1. How does the first result compare with the second?",
      options: [
        "Lớn hơn",
        "Bé hơn",
        "Bằng nhau"
      ],
      answer: "Bé hơn",
      hint: "Tính hai vế trước rồi mới so sánh.",
      explanation: "45 + 3 = 48; 50 - 1 = 49; 48 bé hơn 49.",
      xp: 15
    },
    {
      id: "arith-q41",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Tính: 99 - 45 = [ ? ]",
      questionEn: "Calculate: 99 - 45 = [ ? ]",
      answer: "54",
      hint: "Trừ hàng đơn vị, rồi trừ hàng chục.",
      explanation: "9 - 5 = 4 (đơn vị); 9 - 4 = 5 (chục) ➔ 54.",
      xp: 15
    },
    {
      id: "arith-q42",
      topic: "arithmetic",
      lessonId: "arith-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Phép tính nào có kết quả lớn hơn: 67 - 25 hay 21 + 20?",
      questionEn: "Which is greater: 67 - 25 or 21 + 20?",
      options: [
        "67 - 25",
        "21 + 20",
        "Bằng nhau"
      ],
      answer: "67 - 25",
      hint: "Tính cả hai phép tính.",
      explanation: "67 - 25 = 42; 21 + 20 = 41; 42 lớn hơn 41.",
      xp: 20
    },
    {
      id: "arith-q43",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 1,
      type: "fill-blank",
      question: "Điền số vào ô trống: [ ? ] + 6 = 14",
      questionEn: "Fill in the blank: [ ? ] + 6 = 14",
      answer: "8",
      hint: "Lấy tổng trừ đi số đã biết.",
      explanation: "14 - 6 = 8. Thử lại: 8 + 6 = 14.",
      xp: 10
    },
    {
      id: "arith-q44",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Điền dấu thích hợp vào ô trống: 12 [ ? ] 5 = 7",
      questionEn: "Fill in the correct sign: 12 [ ? ] 5 = 7",
      options: [
        "+",
        "-"
      ],
      answer: "-",
      hint: "Kết quả 7 bé hơn 12, vậy là cộng hay trừ?",
      explanation: "12 - 5 = 7 nên điền dấu trừ (-).",
      xp: 15
    },
    {
      id: "arith-q45",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Nếu ⭐ + ⭐ + ⭐ = 15 thì ⭐ bằng bao nhiêu?",
      questionEn: "If ⭐ + ⭐ + ⭐ = 15, what is ⭐?",
      visual: "⭐ ➕ ⭐ ➕ ⭐ 🟰 15",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: "5",
      hint: "Thử từng đáp án: 3 số giống nhau cộng lại bằng 15.",
      explanation: "5 + 5 + 5 = 15 nên ⭐ = 5.",
      xp: 15
    },
    {
      id: "arith-q46",
      topic: "arithmetic",
      lessonId: "arith-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Điền số: 18 - [ ? ] = 4 + 5",
      questionEn: "Fill in the number: 18 - [ ? ] = 4 + 5",
      answer: "9",
      hint: "Tính vế phải trước.",
      explanation: "4 + 5 = 9; 18 - [ ? ] = 9 ➔ [ ? ] = 18 - 9 = 9.",
      xp: 20
    },
    {
      id: "arith-q47",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tìm số tiếp theo: 10, 20, 30, 40, ?",
      questionEn: "Find the next number: 10, 20, 30, 40, ?",
      options: [
        "41",
        "45",
        "50",
        "60"
      ],
      answer: "50",
      hint: "Mỗi số tăng thêm 10.",
      explanation: "40 + 10 = 50.",
      xp: 10
    },
    {
      id: "arith-q48",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Điền số tiếp theo: 1, 3, 5, 7, 9, [ ? ]",
      questionEn: "Fill in the next number: 1, 3, 5, 7, 9, [ ? ]",
      answer: "11",
      hint: "Mỗi số tăng thêm 2.",
      explanation: "9 + 2 = 11.",
      xp: 15
    },
    {
      id: "arith-q49",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tìm số tiếp theo: 20, 18, 16, 14, ?",
      questionEn: "Find the next number: 20, 18, 16, 14, ?",
      options: [
        "10",
        "11",
        "12",
        "13"
      ],
      answer: "12",
      hint: "Mỗi số giảm đi 2.",
      explanation: "14 - 2 = 12.",
      xp: 15
    },
    {
      id: "arith-q50",
      topic: "arithmetic",
      lessonId: "arith-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Điền số tiếp theo: 1, 1, 2, 3, 5, 8, [ ? ]",
      questionEn: "Fill in the next number: 1, 1, 2, 3, 5, 8, [ ? ]",
      answer: "13",
      hint: "Mỗi số bằng tổng của 2 số đứng ngay trước nó.",
      explanation: "1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13.",
      xp: 20
    },
    {
      id: "geo-q26",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bánh xe đạp có dạng hình gì?",
      questionEn: "What shape is a bicycle wheel?",
      visual: "🚲",
      options: [
        "Hình vuông",
        "Hình tam giác",
        "Hình tròn",
        "Hình chữ nhật"
      ],
      answer: "Hình tròn",
      hint: "Bánh xe lăn tròn được.",
      explanation: "Bánh xe có dạng hình tròn.",
      xp: 10
    },
    {
      id: "geo-q27",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Tìm hình tiếp theo: 🔴 🔺 🔴 🔺 🔴 ?",
      questionEn: "Find the next shape: 🔴 🔺 🔴 🔺 🔴 ?",
      visual: "🔴 🔺 🔴 🔺 🔴 ❓",
      options: [
        "🔴",
        "🔺",
        "🟦",
        "⭐"
      ],
      answer: "🔺",
      hint: "Hai hình lặp đi lặp lại.",
      explanation: "Quy luật lặp: 🔴 🔺. Sau 🔴 là 🔺.",
      xp: 10
    },
    {
      id: "geo-q28",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tìm hình tiếp theo: 🟦 🟦 🔺 🟦 🟦 🔺 🟦 ?",
      questionEn: "Find the next shape: 🟦 🟦 🔺 🟦 🟦 🔺 🟦 ?",
      visual: "🟦 🟦 🔺 🟦 🟦 🔺 🟦 ❓",
      options: [
        "🟦",
        "🔺",
        "🔴",
        "⭐"
      ],
      answer: "🟦",
      hint: "Nhóm lặp gồm 3 hình: 🟦 🟦 🔺.",
      explanation: "Nhóm thứ 3 bắt đầu bằng 🟦, hình tiếp theo vẫn là 🟦.",
      xp: 15
    },
    {
      id: "geo-q29",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hình chữ nhật có mấy cạnh?",
      questionEn: "How many sides does a rectangle have?",
      visual: "▭",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: "4",
      hint: "Đếm các cạnh xung quanh hình.",
      explanation: "Hình chữ nhật có 4 cạnh (2 cạnh dài, 2 cạnh ngắn).",
      xp: 10
    },
    {
      id: "geo-q30",
      topic: "geometry",
      lessonId: "geo-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Dãy quả lặp lại: 🍎 🍌 🍇 🍎 🍌 🍇 ... Quả thứ 10 là quả gì?",
      questionEn: "Repeating pattern: 🍎 🍌 🍇 🍎 🍌 🍇 ... What is the 10th fruit?",
      visual: "🍎 🍌 🍇 🍎 🍌 🍇 ...",
      options: [
        "🍎",
        "🍌",
        "🍇"
      ],
      answer: "🍎",
      hint: "Mỗi nhóm 3 quả. Quả thứ 9 là quả cuối của nhóm thứ 3.",
      explanation: "Quả thứ 3, 6, 9 là 🍇 ➔ quả thứ 10 bắt đầu nhóm mới: 🍎.",
      xp: 20
    },
    {
      id: "geo-q31",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Một hình vuông được kẻ 1 đường chéo. Hỏi có bao nhiêu hình tam giác?",
      questionEn: "A square has one diagonal drawn. How many triangles are there?",
      visual: "◩",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "2",
      hint: "Đường chéo chia hình vuông thành 2 phần.",
      explanation: "Có 2 hình tam giác.",
      xp: 10
    },
    {
      id: "geo-q32",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Hình chữ nhật được chia thành 2 ô vuông bằng nhau. Có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)? [ ? ]",
      questionEn: "A rectangle is split into 2 equal squares. How many rectangles (including squares) are there? [ ? ]",
      visual: "⬜⬜",
      answer: "3",
      hint: "Đếm hình 1 ô và hình 2 ô.",
      explanation: "2 hình 1 ô + 1 hình 2 ô = 3 hình.",
      xp: 15
    },
    {
      id: "geo-q33",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Đếm số hình tròn trong dãy sau:",
      questionEn: "Count the circles below:",
      visual: "🔴 🔵 🔺 🔴 🟦 🔵 🔴",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: "5",
      hint: "Chỉ đếm hình tròn (🔴 🔵), bỏ qua 🔺 và 🟦.",
      explanation: "🔴 🔵 🔴 🔵 🔴 = 5 hình tròn.",
      xp: 15
    },
    {
      id: "geo-q34",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Một hình tam giác lớn được kẻ 3 đường từ đỉnh xuống đáy, chia thành 4 tam giác nhỏ. Có tất cả bao nhiêu hình tam giác? [ ? ]",
      questionEn: "A big triangle has 3 lines from the top to the base, making 4 small triangles. How many triangles in total? [ ? ]",
      visual: "🔺",
      answer: "10",
      hint: "Đếm tam giác gồm 1, 2, 3, 4 phần nhỏ.",
      explanation: "4 + 3 + 2 + 1 = 10 hình tam giác.",
      xp: 20
    },
    {
      id: "geo-q35",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Một lưới 2 hàng, 2 cột (4 ô vuông). Có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?",
      questionEn: "A 2×2 grid has 4 squares. How many rectangles (including squares) are there?",
      visual: "⬜⬜<br>⬜⬜",
      options: [
        "5",
        "7",
        "9",
        "10"
      ],
      answer: "9",
      hint: "Đếm hình 1 ô, 2 ô ngang, 2 ô dọc và 4 ô.",
      explanation: "4 (1 ô) + 2 (2 ô ngang) + 2 (2 ô dọc) + 1 (4 ô) = 9 hình.",
      xp: 20
    },
    {
      id: "geo-q36",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Cần bao nhiêu que diêm để xếp được 1 hình vuông (mỗi cạnh 1 que)?",
      questionEn: "How many matchsticks make 1 square (1 stick per side)?",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: "4",
      hint: "Hình vuông có mấy cạnh?",
      explanation: "Hình vuông có 4 cạnh ➔ cần 4 que diêm.",
      xp: 10
    },
    {
      id: "geo-q37",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Xếp 2 hình vuông cạnh nhau, chung 1 cạnh. Cần ít nhất bao nhiêu que diêm? [ ? ]",
      questionEn: "Make 2 squares side by side sharing 1 side. At least how many matchsticks? [ ? ]",
      visual: "⬜⬜",
      answer: "7",
      hint: "Hình thứ hai dùng lại 1 cạnh của hình thứ nhất.",
      explanation: "4 + 3 = 7 que diêm.",
      xp: 15
    },
    {
      id: "geo-q38",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Cắt hình vuông theo 1 đường chéo, bé được 2 hình gì?",
      questionEn: "Cut a square along a diagonal. What 2 shapes do you get?",
      options: [
        "Hình tròn",
        "Hình tam giác",
        "Hình vuông",
        "Hình chữ nhật"
      ],
      answer: "Hình tam giác",
      hint: "Mỗi phần có mấy cạnh?",
      explanation: "Mỗi phần có 3 cạnh ➔ 2 hình tam giác.",
      xp: 15
    },
    {
      id: "geo-q39",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Xếp 3 hình vuông thành một hàng, 2 hình cạnh nhau chung 1 cạnh. Cần bao nhiêu que diêm? [ ? ]",
      questionEn: "Make 3 squares in a row, neighbours sharing a side. How many matchsticks? [ ? ]",
      visual: "⬜⬜⬜",
      answer: "10",
      hint: "Hình đầu cần 4 que, mỗi hình sau cần thêm 3 que.",
      explanation: "4 + 3 + 3 = 10 que diêm.",
      xp: 20
    },
    {
      id: "geo-q40",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có 9 que diêm xếp thành 3 hình tam giác rời nhau. Bớt đi 3 que thì còn lại nhiều nhất mấy hình tam giác?",
      questionEn: "9 matchsticks form 3 separate triangles. If 3 sticks are removed, at most how many triangles remain?",
      visual: "🔺 🔺 🔺",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      answer: "2",
      hint: "Bớt cả 3 que của cùng 1 tam giác.",
      explanation: "Bớt hết 3 que của 1 tam giác thì 2 tam giác còn lại vẫn nguyên.",
      xp: 20
    },
    {
      id: "geo-q41",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bút chì dài 15 cm, thước kẻ dài 20 cm. Thước dài hơn bút chì bao nhiêu xăng-ti-mét?",
      questionEn: "A pencil is 15 cm long and a ruler is 20 cm. How much longer is the ruler?",
      visual: "✏️ 15 cm 📏 20 cm",
      options: [
        "3 cm",
        "5 cm",
        "10 cm",
        "35 cm"
      ],
      answer: "5 cm",
      hint: "Lấy độ dài lớn trừ độ dài bé.",
      explanation: "20 - 15 = 5 cm.",
      xp: 10
    },
    {
      id: "geo-q42",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "A, B, C thẳng hàng, B ở giữa. AB dài 8 cm, BC dài 7 cm. Đoạn AC dài bao nhiêu cm? [ ? ]",
      questionEn: "A, B, C are on a line with B in the middle. AB = 8 cm, BC = 7 cm. How long is AC in cm? [ ? ]",
      visual: "A———B———C",
      answer: "15",
      hint: "AC gồm AB và BC.",
      explanation: "AC = 8 + 7 = 15 cm.",
      xp: 15
    },
    {
      id: "geo-q43",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hình tam giác được tạo bởi bao nhiêu đoạn thẳng?",
      questionEn: "How many line segments form a triangle?",
      visual: "🔺",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: "3",
      hint: "Đếm các cạnh.",
      explanation: "Hình tam giác có 3 cạnh = 3 đoạn thẳng.",
      xp: 10
    },
    {
      id: "geo-q44",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Sợi dây dài 20 cm. Bé cắt đi 6 cm, rồi cắt tiếp 5 cm. Sợi dây còn lại dài bao nhiêu cm? [ ? ]",
      questionEn: "A string is 20 cm. Cut off 6 cm, then 5 cm more. How long is it now in cm? [ ? ]",
      answer: "9",
      hint: "Trừ lần lượt hai đoạn đã cắt.",
      explanation: "20 - 6 = 14; 14 - 5 = 9 cm.",
      xp: 20
    },
    {
      id: "geo-q45",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Một chú kiến bò 1 vòng quanh hình vuông, mỗi cạnh dài 3 cm. Kiến bò được bao nhiêu cm?",
      questionEn: "An ant walks once around a square with 3 cm sides. How far does it walk?",
      visual: "🐜 ⬜",
      options: [
        "6 cm",
        "9 cm",
        "12 cm",
        "15 cm"
      ],
      answer: "12 cm",
      hint: "Hình vuông có 4 cạnh bằng nhau.",
      explanation: "3 + 3 + 3 + 3 = 12 cm.",
      xp: 20
    },
    {
      id: "geo-q46",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Quả bóng đá có dạng khối gì?",
      questionEn: "What solid shape is a football?",
      visual: "⚽",
      options: [
        "Khối lập phương",
        "Khối cầu",
        "Khối trụ",
        "Khối hộp chữ nhật"
      ],
      answer: "Khối cầu",
      hint: "Quả bóng tròn đều mọi phía.",
      explanation: "Quả bóng có dạng khối cầu.",
      xp: 10
    },
    {
      id: "geo-q47",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Viên gạch có dạng khối gì?",
      questionEn: "What solid shape is a brick?",
      visual: "🧱",
      options: [
        "Khối cầu",
        "Khối trụ",
        "Khối hộp chữ nhật",
        "Hình tròn"
      ],
      answer: "Khối hộp chữ nhật",
      hint: "Viên gạch có 6 mặt là hình chữ nhật.",
      explanation: "Viên gạch có dạng khối hộp chữ nhật.",
      xp: 10
    },
    {
      id: "geo-q48",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Xếp 2 tầng khối lập phương: tầng dưới 4 khối, tầng trên 2 khối. Có tất cả bao nhiêu khối? [ ? ]",
      questionEn: "Two layers of cubes: 4 on the bottom, 2 on top. How many cubes? [ ? ]",
      visual: "🟫🟫<br>🟫🟫🟫🟫",
      answer: "6",
      hint: "Cộng số khối 2 tầng.",
      explanation: "4 + 2 = 6 khối.",
      xp: 15
    },
    {
      id: "geo-q49",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Mèo ngồi trên cái hộp, chó nằm dưới gầm bàn, cái hộp đặt trên mặt bàn. Con nào ở cao hơn?",
      questionEn: "A cat sits on a box, the box is on a table, and a dog lies under the table. Which animal is higher?",
      visual: "🐱📦 / 🪑 / 🐶",
      options: [
        "Con mèo",
        "Con chó",
        "Cao bằng nhau"
      ],
      answer: "Con mèo",
      hint: "Mèo ở trên bàn, chó ở dưới bàn.",
      explanation: "Mèo ở trên hộp, trên bàn ➔ mèo cao hơn chó.",
      xp: 15
    },
    {
      id: "geo-q50",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Tháp 3 tầng khối lập phương: tầng trên cùng 1 khối, mỗi tầng phía dưới nhiều hơn tầng ngay trên nó 2 khối. Tháp có tất cả bao nhiêu khối? [ ? ]",
      questionEn: "A 3-level tower: 1 cube on top, each lower level has 2 more cubes than the level above. How many cubes? [ ? ]",
      answer: "9",
      hint: "Tầng trên 1, tầng giữa 3, tầng dưới 5.",
      explanation: "1 + 3 + 5 = 9 khối.",
      xp: 20
    },
    {
      id: "logic-q26",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Một tuần lễ có mấy ngày?",
      questionEn: "How many days are there in a week?",
      visual: "📅",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      answer: "7",
      hint: "Kể từ Thứ Hai đến Chủ Nhật.",
      explanation: "Thứ Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ Nhật = 7 ngày.",
      xp: 10
    },
    {
      id: "logic-q27",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Kim ngắn chỉ số 3, kim dài chỉ số 12. Đồng hồ chỉ mấy giờ?",
      questionEn: "The short hand points to 3 and the long hand to 12. What time is it?",
      visual: "🕒",
      options: [
        "3 giờ",
        "12 giờ",
        "3 giờ 30 phút",
        "12 giờ 15 phút"
      ],
      answer: "3 giờ",
      hint: "Kim ngắn chỉ giờ, kim dài chỉ số 12 là giờ đúng.",
      explanation: "Kim ngắn ở số 3, kim dài ở số 12 ➔ 3 giờ đúng.",
      xp: 10
    },
    {
      id: "logic-q28",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Thứ Hai tuần này là ngày 8. Thứ Hai tuần sau là ngày bao nhiêu?",
      questionEn: "This Monday is the 8th. What date is next Monday?",
      options: [
        "9",
        "14",
        "15",
        "16"
      ],
      answer: "15",
      hint: "Cùng một thứ ở tuần sau thì cộng thêm 7 ngày.",
      explanation: "8 + 7 = 15.",
      xp: 15
    },
    {
      id: "logic-q29",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Bé đi ngủ lúc 9 giờ tối và thức dậy lúc 6 giờ sáng hôm sau. Bé ngủ được mấy tiếng? [ ? ]",
      questionEn: "A child sleeps at 9 pm and wakes at 6 am. How many hours of sleep? [ ? ]",
      visual: "🌙 ➔ ☀️",
      answer: "9",
      hint: "Đếm từ 9 giờ tối đến 12 giờ đêm, rồi từ 12 giờ đêm đến 6 giờ sáng.",
      explanation: "9 giờ → 12 giờ: 3 tiếng; 12 giờ → 6 giờ: 6 tiếng; 3 + 6 = 9 tiếng.",
      xp: 20
    },
    {
      id: "logic-q30",
      topic: "logic",
      lessonId: "logic-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Ngày 1 tháng này là Thứ Sáu. Ngày 3 tháng này là thứ mấy?",
      questionEn: "The 1st of this month is a Friday. What day is the 3rd?",
      options: [
        "Thứ Bảy",
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Năm"
      ],
      answer: "Chủ Nhật",
      hint: "Ngày 3 cách ngày 1 là 2 ngày.",
      explanation: "Ngày 1: Thứ Sáu; ngày 2: Thứ Bảy; ngày 3: Chủ Nhật.",
      xp: 15
    },
    {
      id: "logic-q31",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hôm nay là Thứ Hai. Ngày mai là thứ mấy?",
      questionEn: "Today is Monday. What day is tomorrow?",
      options: [
        "Chủ Nhật",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Hai"
      ],
      answer: "Thứ Ba",
      hint: "Ngày mai = hôm nay + 1 ngày.",
      explanation: "Thứ Hai + 1 ngày = Thứ Ba.",
      xp: 10
    },
    {
      id: "logic-q32",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hôm nay là Thứ Năm. Hôm qua là thứ mấy?",
      questionEn: "Today is Thursday. What day was yesterday?",
      options: [
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Sáu",
        "Thứ Bảy"
      ],
      answer: "Thứ Tư",
      hint: "Hôm qua = hôm nay - 1 ngày.",
      explanation: "Thứ Năm - 1 ngày = Thứ Tư.",
      xp: 10
    },
    {
      id: "logic-q33",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Ngày mai của hôm qua là ngày nào?",
      questionEn: "What is the day after yesterday?",
      options: [
        "Hôm kia",
        "Hôm qua",
        "Hôm nay",
        "Ngày mai"
      ],
      answer: "Hôm nay",
      hint: "Từ hôm qua tiến thêm 1 ngày.",
      explanation: "Hôm qua + 1 ngày = hôm nay.",
      xp: 15
    },
    {
      id: "logic-q34",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Hôm nay là ngày 20. Hôm kia là ngày bao nhiêu? [ ? ]",
      questionEn: "Today is the 20th. What date was the day before yesterday? [ ? ]",
      answer: "18",
      hint: "Hôm kia = hôm nay - 2 ngày.",
      explanation: "20 - 2 = 18.",
      xp: 15
    },
    {
      id: "logic-q35",
      topic: "logic",
      lessonId: "logic-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Nếu hôm kia là Thứ Sáu thì ngày mai là thứ mấy?",
      questionEn: "If the day before yesterday was Friday, what day is tomorrow?",
      options: [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Bảy"
      ],
      answer: "Thứ Hai",
      hint: "Tìm hôm nay trước: hôm kia + 2 ngày.",
      explanation: "Thứ Sáu + 2 = Chủ Nhật (hôm nay) ➔ ngày mai là Thứ Hai.",
      xp: 20
    },
    {
      id: "logic-q36",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Hàng có 5 bạn. Bạn Tú đứng thứ 2 tính từ đầu hàng. Tú đứng thứ mấy tính từ cuối hàng?",
      questionEn: "There are 5 children in a line. Tu is 2nd from the front. What is Tu's position from the back?",
      visual: "🧒🧒🧒🧒🧒",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: "4",
      hint: "Đếm số bạn đứng sau Tú rồi cộng 1.",
      explanation: "Sau Tú có 5 - 2 = 3 bạn ➔ Tú đứng thứ 3 + 1 = 4 từ cuối.",
      xp: 10
    },
    {
      id: "logic-q37",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Trồng 5 cây thẳng hàng, 2 cây cạnh nhau cách nhau 2 m. Từ cây đầu đến cây cuối dài bao nhiêu mét? [ ? ]",
      questionEn: "5 trees are planted in a row, 2 m apart. How many metres from the first tree to the last? [ ? ]",
      visual: "🌳—🌳—🌳—🌳—🌳",
      answer: "8",
      hint: "5 cây thì có 4 khoảng cách.",
      explanation: "Số khoảng = 5 - 1 = 4; 2 + 2 + 2 + 2 = 8 m.",
      xp: 20
    },
    {
      id: "logic-q38",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Trồng 6 cây thẳng hàng. Giữa các cây liền nhau có tất cả mấy khoảng cách?",
      questionEn: "6 trees are planted in a row. How many gaps are there between neighbouring trees?",
      visual: "🌳🌳🌳🌳🌳🌳",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: "5",
      hint: "Số khoảng cách = số cây - 1.",
      explanation: "6 - 1 = 5 khoảng cách.",
      xp: 10
    },
    {
      id: "logic-q39",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Đi từ tầng 1 lên tầng 2 phải leo 10 bậc thang. Đi từ tầng 1 lên tầng 3 phải leo bao nhiêu bậc? [ ? ]",
      questionEn: "From floor 1 to floor 2 there are 10 steps. How many steps from floor 1 to floor 3? [ ? ]",
      visual: "🪜",
      answer: "20",
      hint: "Từ tầng 1 lên tầng 3 phải đi qua 2 đoạn cầu thang.",
      explanation: "Tầng 1 → 2: 10 bậc; tầng 2 → 3: 10 bậc; 10 + 10 = 20 bậc.",
      xp: 20
    },
    {
      id: "logic-q40",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 4 bạn xếp hàng, giữa 2 bạn đứng liền nhau đặt 1 chậu hoa. Có mấy chậu hoa?",
      questionEn: "4 children stand in a line with a flower pot between each two neighbours. How many pots?",
      visual: "🧒🌷🧒🌷🧒🌷🧒",
      options: [
        "3",
        "4",
        "5",
        "2"
      ],
      answer: "3",
      hint: "Đếm số khoảng giữa các bạn.",
      explanation: "4 bạn có 4 - 1 = 3 khoảng ➔ 3 chậu hoa.",
      xp: 15
    },
    {
      id: "logic-q41",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Ba con vật xếp hàng: 🐱 🐶 🐰. Con nào đứng ở giữa?",
      questionEn: "Three animals stand in a row: 🐱 🐶 🐰. Which one is in the middle?",
      visual: "🐱 🐶 🐰",
      options: [
        "Con mèo",
        "Con chó",
        "Con thỏ"
      ],
      answer: "Con chó",
      hint: "Con ở giữa có 1 bạn bên trái, 1 bạn bên phải.",
      explanation: "Chó đứng giữa mèo và thỏ.",
      xp: 10
    },
    {
      id: "logic-q42",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Bé giơ tay phải lên rồi quay người ra phía sau. Lúc này tay bé đang giơ là tay nào?",
      questionEn: "You raise your right hand and turn around. Which hand is raised now?",
      visual: "✋",
      options: [
        "Tay phải",
        "Tay trái"
      ],
      answer: "Tay phải",
      hint: "Quay người không làm đổi tay của bé.",
      explanation: "Bé vẫn giơ tay phải; chỉ hướng nhìn thay đổi.",
      xp: 15
    },
    {
      id: "logic-q43",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Lan ngồi bên trái Mai. Mai ngồi bên trái Hồng. Ai ngồi ở giữa?",
      questionEn: "Lan sits to the left of Mai. Mai sits to the left of Hong. Who is in the middle?",
      options: [
        "Lan",
        "Mai",
        "Hồng"
      ],
      answer: "Mai",
      hint: "Sắp xếp từ trái sang phải.",
      explanation: "Thứ tự từ trái sang phải: Lan, Mai, Hồng ➔ Mai ở giữa.",
      xp: 15
    },
    {
      id: "logic-q44",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Trên giá có 7 quyển sách xếp thành hàng. Quyển truyện tranh đứng thứ 3 tính từ bên trái. Bên phải quyển truyện tranh có mấy quyển sách? [ ? ]",
      questionEn: "7 books stand on a shelf. The comic is 3rd from the left. How many books are to its right? [ ? ]",
      visual: "📚📚📕📚📚📚📚",
      answer: "4",
      hint: "Bỏ đi quyển truyện và các quyển bên trái nó.",
      explanation: "7 - 3 = 4 quyển.",
      xp: 15
    },
    {
      id: "logic-q45",
      topic: "logic",
      lessonId: "logic-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Bốn bạn ngồi hàng ngang. An ngồi bên phải Bình. Cường ngồi bên trái Bình. Dũng ngồi ngoài cùng bên phải. Ai ngồi ngoài cùng bên trái?",
      questionEn: "Four friends sit in a row. An is to the right of Binh. Cuong is to the left of Binh. Dung is at the far right. Who is at the far left?",
      options: [
        "An",
        "Bình",
        "Cường",
        "Dũng"
      ],
      answer: "Cường",
      hint: "Xếp Bình trước, rồi đặt Cường, An quanh Bình.",
      explanation: "Thứ tự từ trái: Cường, Bình, An, Dũng ➔ Cường ngồi ngoài cùng bên trái.",
      xp: 20
    },
    {
      id: "logic-q46",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Đĩa cân bên trái có 1 quả dưa, đĩa bên phải có 3 quả táo. Cân thăng bằng. 1 quả dưa và 1 quả táo, quả nào nặng hơn?",
      questionEn: "A balance has 1 melon on the left and 3 apples on the right, and it is level. Which is heavier: 1 melon or 1 apple?",
      visual: "🍈 ⚖️ 🍎🍎🍎",
      options: [
        "Quả dưa",
        "Quả táo",
        "Nặng bằng nhau"
      ],
      answer: "Quả dưa",
      hint: "1 quả dưa nặng bằng cả 3 quả táo.",
      explanation: "1 quả dưa = 3 quả táo ➔ quả dưa nặng hơn 1 quả táo.",
      xp: 10
    },
    {
      id: "logic-q47",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Cân thăng bằng: 1 🍉 nặng bằng 2 🍍, 1 🍍 nặng bằng 2 🍎. Hỏi 1 🍉 nặng bằng mấy 🍎? [ ? ]",
      questionEn: "1 🍉 weighs the same as 2 🍍, and 1 🍍 weighs the same as 2 🍎. How many 🍎 equal 1 🍉? [ ? ]",
      visual: "🍉 ⚖️ 🍍🍍",
      answer: "4",
      hint: "Thay mỗi 🍍 bằng 2 🍎.",
      explanation: "1 🍉 = 2 🍍 = 2 + 2 = 4 🍎.",
      xp: 15
    },
    {
      id: "logic-q48",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Lớp có 10 bạn thích vẽ, 8 bạn thích hát, trong đó 3 bạn thích cả vẽ và hát. Có bao nhiêu bạn chỉ thích vẽ? [ ? ]",
      questionEn: "10 pupils like drawing and 8 like singing; 3 like both. How many like only drawing? [ ? ]",
      visual: "🎨 ⭕⭕ 🎤",
      answer: "7",
      hint: "Vẽ sơ đồ 2 vòng tròn giao nhau (sơ đồ Venn).",
      explanation: "Chỉ thích vẽ = 10 - 3 = 7 bạn.",
      xp: 20
    },
    {
      id: "logic-q49",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bảng đếm quả: Táo 🍎🍎🍎, Cam 🍊🍊🍊🍊🍊, Lê 🍐🍐. Loại quả nào nhiều nhất?",
      questionEn: "Fruit chart: Apples 🍎🍎🍎, Oranges 🍊🍊🍊🍊🍊, Pears 🍐🍐. Which fruit is the most?",
      visual: "🍎×3 | 🍊×5 | 🍐×2",
      options: [
        "Táo",
        "Cam",
        "Lê"
      ],
      answer: "Cam",
      hint: "Đếm từng loại quả.",
      explanation: "Táo 3, Cam 5, Lê 2 ➔ Cam nhiều nhất.",
      xp: 10
    },
    {
      id: "logic-q50",
      topic: "logic",
      lessonId: "logic-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Mỗi bạn trong nhóm thích bóng đá hoặc cầu lông (có bạn thích cả hai). 6 bạn thích bóng đá, 5 bạn thích cầu lông, 2 bạn thích cả hai. Nhóm có bao nhiêu bạn? [ ? ]",
      questionEn: "Each child likes football or badminton (some like both). 6 like football, 5 like badminton, 2 like both. How many children are in the group? [ ? ]",
      visual: "⚽ ⭕⭕ 🏸",
      answer: "9",
      hint: "Các bạn thích cả hai bị đếm 2 lần.",
      explanation: "6 + 5 - 2 = 9 bạn.",
      xp: 20
    },
    {
      id: "adv-q26",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Có 9 con gà, thêm 4 con nữa. Có tất cả bao nhiêu con gà? [ ? ]",
      questionEn: "There are 9 chickens and 4 more come. How many chickens in total? [ ? ]",
      visual: "🐔",
      answer: "13",
      hint: "Thêm thì làm phép cộng.",
      explanation: "9 + 4 = 13 con gà.",
      xp: 10
    },
    {
      id: "adv-q27",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 18 quả bóng bay, 5 quả bị vỡ. Còn lại bao nhiêu quả bóng bay?",
      questionEn: "There are 18 balloons and 5 pop. How many are left?",
      visual: "🎈",
      options: [
        "12",
        "13",
        "14",
        "23"
      ],
      answer: "13",
      hint: "Bớt đi thì làm phép trừ.",
      explanation: "18 - 5 = 13 quả.",
      xp: 10
    },
    {
      id: "adv-q28",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tàu có 20 hành khách. Đến ga thứ nhất có 6 người xuống. Đến ga thứ hai có 3 người lên. Trên tàu lúc này có bao nhiêu người?",
      questionEn: "A train has 20 passengers. 6 get off at the first station, 3 get on at the second. How many are on the train now?",
      visual: "🚆",
      options: [
        "11",
        "14",
        "17",
        "23"
      ],
      answer: "17",
      hint: "Xuống thì trừ, lên thì cộng.",
      explanation: "20 - 6 + 3 = 17 người.",
      xp: 15
    },
    {
      id: "adv-q29",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Mẹ mua 15 quả trứng, dùng 4 quả làm bánh và 3 quả để rán. Còn lại bao nhiêu quả trứng? [ ? ]",
      questionEn: "Mum buys 15 eggs, uses 4 for a cake and 3 for frying. How many eggs are left? [ ? ]",
      visual: "🥚",
      answer: "8",
      hint: "Trừ lần lượt số trứng đã dùng.",
      explanation: "15 - 4 - 3 = 8 quả trứng.",
      xp: 15
    },
    {
      id: "adv-q30",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Nam có nhiều hơn Hà 5 viên bi. Hà có 9 viên bi. Hai bạn có tất cả bao nhiêu viên bi?",
      questionEn: "Nam has 5 more marbles than Ha. Ha has 9. How many marbles do they have altogether?",
      options: [
        "14",
        "19",
        "23",
        "24"
      ],
      answer: "23",
      hint: "Tìm số bi của Nam trước.",
      explanation: "Nam: 9 + 5 = 14 viên; cả hai: 14 + 9 = 23 viên.",
      xp: 20
    },
    {
      id: "adv-q31",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "An có 6 cái kẹo, Bình có 2 cái kẹo. An phải cho Bình mấy cái để hai bạn có số kẹo bằng nhau?",
      questionEn: "An has 6 sweets, Binh has 2. How many must An give Binh so they have the same?",
      visual: "🍬",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "2",
      hint: "Chênh lệch chia đôi.",
      explanation: "Chênh lệch 6 - 2 = 4; cho một nửa là 2 cái ➔ mỗi bạn 4 cái.",
      xp: 10
    },
    {
      id: "adv-q32",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "1 con cá đổi được 2 quả táo. Hỏi 3 con cá đổi được bao nhiêu quả táo? [ ? ]",
      questionEn: "1 fish can be swapped for 2 apples. How many apples for 3 fish? [ ? ]",
      visual: "🐟 = 🍎🍎",
      answer: "6",
      hint: "Mỗi con cá đổi được 2 quả.",
      explanation: "2 + 2 + 2 = 6 quả táo.",
      xp: 15
    },
    {
      id: "adv-q33",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "2 viên bi xanh đổi được 1 viên bi đỏ. Muốn đổi lấy 4 viên bi đỏ cần bao nhiêu viên bi xanh?",
      questionEn: "2 blue marbles swap for 1 red marble. How many blue marbles for 4 red ones?",
      visual: "🔵🔵 = 🔴",
      options: [
        "2",
        "4",
        "6",
        "8"
      ],
      answer: "8",
      hint: "Mỗi viên đỏ cần 2 viên xanh.",
      explanation: "2 + 2 + 2 + 2 = 8 viên bi xanh.",
      xp: 15
    },
    {
      id: "adv-q34",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Lan và Hoa có tổng cộng 16 nhãn vở, số nhãn của hai bạn bằng nhau. Nếu Lan cho Hoa 3 nhãn thì Hoa có bao nhiêu nhãn vở? [ ? ]",
      questionEn: "Lan and Hoa have 16 stickers in total, the same number each. If Lan gives Hoa 3, how many does Hoa have? [ ? ]",
      answer: "11",
      hint: "Mỗi bạn có một nửa của 16.",
      explanation: "Mỗi bạn có 8 nhãn; Hoa nhận thêm 3 ➔ 8 + 3 = 11 nhãn.",
      xp: 20
    },
    {
      id: "adv-q35",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Hộp A có 12 viên bi, hộp B có 4 viên bi. Phải chuyển bao nhiêu viên từ hộp A sang hộp B để hộp B nhiều hơn hộp A 2 viên?",
      questionEn: "Box A has 12 marbles, box B has 4. How many should move from A to B so that B has 2 more than A?",
      options: [
        "4",
        "5",
        "6",
        "8"
      ],
      answer: "5",
      hint: "Tổng số bi không đổi là 16. Thử từng đáp án.",
      explanation: "Chuyển 5 viên: A còn 7, B có 9; 9 - 7 = 2 ✔.",
      xp: 20
    },
    {
      id: "adv-q36",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bé có 1 tờ 10 nghìn đồng và 1 tờ 5 nghìn đồng. Bé có tất cả bao nhiêu tiền?",
      questionEn: "You have a 10-thousand note and a 5-thousand note. How much money do you have?",
      visual: "💵 10 + 💵 5",
      options: [
        "5 nghìn đồng",
        "10 nghìn đồng",
        "15 nghìn đồng",
        "20 nghìn đồng"
      ],
      answer: "15 nghìn đồng",
      hint: "Cộng giá trị 2 tờ tiền.",
      explanation: "10 + 5 = 15 nghìn đồng.",
      xp: 10
    },
    {
      id: "adv-q37",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Quyển vở giá 8 nghìn đồng, cái bút giá 6 nghìn đồng. Mua 1 quyển vở và 1 cái bút hết bao nhiêu nghìn đồng? [ ? ]",
      questionEn: "A notebook costs 8 thousand and a pen 6 thousand. How much (in thousands) for one of each? [ ? ]",
      visual: "📒 ✒️",
      answer: "14",
      hint: "Cộng giá hai món.",
      explanation: "8 + 6 = 14 nghìn đồng.",
      xp: 15
    },
    {
      id: "adv-q38",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Bé có 20 nghìn đồng, mua một cái kẹp tóc giá 7 nghìn đồng. Bé còn lại bao nhiêu nghìn đồng?",
      questionEn: "You have 20 thousand and buy a hair clip for 7 thousand. How much is left (in thousands)?",
      options: [
        "12",
        "13",
        "14",
        "27"
      ],
      answer: "13",
      hint: "Lấy số tiền có trừ giá kẹp tóc.",
      explanation: "20 - 7 = 13 nghìn đồng.",
      xp: 15
    },
    {
      id: "adv-q39",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Một cái bánh giá 5 nghìn đồng. Bé có 18 nghìn đồng. Bé mua được nhiều nhất mấy cái bánh? [ ? ]",
      questionEn: "A cake costs 5 thousand. You have 18 thousand. At most how many cakes can you buy? [ ? ]",
      visual: "🧁",
      answer: "3",
      hint: "Cộng dần 5, 10, 15, 20 và so với 18.",
      explanation: "3 cái hết 15 nghìn (≤ 18); 4 cái hết 20 nghìn (> 18) ➔ nhiều nhất 3 cái.",
      xp: 20
    },
    {
      id: "adv-q40",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Mua 2 cái kem giá bằng nhau hết 12 nghìn đồng. Mỗi cái kem giá bao nhiêu?",
      questionEn: "2 ice creams of the same price cost 12 thousand. How much is one?",
      visual: "🍦🍦",
      options: [
        "5 nghìn đồng",
        "6 nghìn đồng",
        "7 nghìn đồng",
        "10 nghìn đồng"
      ],
      answer: "6 nghìn đồng",
      hint: "Tìm số cộng với chính nó bằng 12.",
      explanation: "6 + 6 = 12 ➔ mỗi cái 6 nghìn đồng.",
      xp: 20
    },
    {
      id: "adv-q41",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 1,
      type: "fill-blank",
      question: "Năm nay Bin 6 tuổi. Năm ngoái Bin mấy tuổi? [ ? ]",
      questionEn: "Bin is 6 this year. How old was Bin last year? [ ? ]",
      visual: "🎂",
      answer: "5",
      hint: "Năm ngoái ít hơn năm nay 1 tuổi.",
      explanation: "6 - 1 = 5 tuổi.",
      xp: 10
    },
    {
      id: "adv-q42",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Bố 35 tuổi, con 7 tuổi. Bố hơn con bao nhiêu tuổi?",
      questionEn: "Dad is 35 and his child is 7. How much older is Dad?",
      visual: "👨 👦",
      options: [
        "27",
        "28",
        "32",
        "42"
      ],
      answer: "28",
      hint: "Lấy tuổi bố trừ tuổi con.",
      explanation: "35 - 7 = 28 tuổi.",
      xp: 10
    },
    {
      id: "adv-q43",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Năm nay chị 9 tuổi, em 5 tuổi. Khi chị 12 tuổi thì em bao nhiêu tuổi?",
      questionEn: "The sister is 9 and the brother is 5. When the sister is 12, how old will the brother be?",
      options: [
        "7",
        "8",
        "9",
        "10"
      ],
      answer: "8",
      hint: "Hiệu số tuổi không bao giờ thay đổi.",
      explanation: "Chị hơn em 9 - 5 = 4 tuổi ➔ em 12 - 4 = 8 tuổi.",
      xp: 15
    },
    {
      id: "adv-q44",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Năm nay tổng số tuổi của hai anh em là 15. Sau 2 năm nữa, tổng số tuổi của hai anh em là bao nhiêu? [ ? ]",
      questionEn: "The two brothers' ages add up to 15 now. What will the total be in 2 years? [ ? ]",
      answer: "19",
      hint: "Mỗi người thêm 2 tuổi.",
      explanation: "15 + 2 + 2 = 19 tuổi.",
      xp: 15
    },
    {
      id: "adv-q45",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Anh hơn em 3 tuổi. Tổng số tuổi hai anh em là 13. Anh bao nhiêu tuổi?",
      questionEn: "The older brother is 3 years older. Their ages add up to 13. How old is the older brother?",
      options: [
        "5",
        "7",
        "8",
        "10"
      ],
      answer: "8",
      hint: "Thử: hai số hơn kém nhau 3 và cộng lại bằng 13.",
      explanation: "Anh 8, em 5: 8 + 5 = 13 và 8 - 5 = 3 ✔.",
      xp: 20
    },
    {
      id: "adv-q46",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 1,
      type: "fill-blank",
      question: "Một số trừ đi 4 thì được 10. Số đó là bao nhiêu? [ ? ]",
      questionEn: "A number minus 4 equals 10. What is the number? [ ? ]",
      answer: "14",
      hint: "Làm ngược lại: cộng 4 vào 10.",
      explanation: "10 + 4 = 14.",
      xp: 10
    },
    {
      id: "adv-q47",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Gấu có một số hũ mật. Gấu ăn hết 5 hũ thì còn 7 hũ. Lúc đầu Gấu có mấy hũ mật?",
      questionEn: "Bear has some honey jars. After eating 5, there are 7 left. How many jars at first?",
      visual: "🐻🍯",
      options: [
        "2",
        "10",
        "12",
        "13"
      ],
      answer: "12",
      hint: "Cộng số đã ăn với số còn lại.",
      explanation: "7 + 5 = 12 hũ.",
      xp: 15
    },
    {
      id: "adv-q48",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Thùng có 10 lít nước. Đổ thêm một số lít thì được 17 lít. Đã đổ thêm bao nhiêu lít? [ ? ]",
      questionEn: "A tank has 10 litres. After adding some water it has 17 litres. How many litres were added? [ ? ]",
      visual: "🪣",
      answer: "7",
      hint: "Lấy số lít sau trừ số lít trước.",
      explanation: "17 - 10 = 7 lít.",
      xp: 15
    },
    {
      id: "adv-q49",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Mai cho Lan 4 cái kẹo, sau đó mẹ cho Mai thêm 6 cái thì Mai có 15 cái. Lúc đầu Mai có mấy cái kẹo?",
      questionEn: "Mai gives Lan 4 sweets, then Mum gives Mai 6, and Mai has 15. How many did Mai have at first?",
      options: [
        "11",
        "13",
        "15",
        "17"
      ],
      answer: "13",
      hint: "Đi ngược: bỏ 6 cái mẹ cho, trả lại 4 cái đã cho.",
      explanation: "15 - 6 + 4 = 13 cái kẹo.",
      xp: 20
    },
    {
      id: "adv-q50",
      topic: "advanced-arithmetic",
      lessonId: "adv-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Đoạn dây thứ nhất dài hơn đoạn dây thứ hai 4 cm. Hai đoạn dài tổng cộng 16 cm. Đoạn dây thứ hai dài bao nhiêu cm? [ ? ]",
      questionEn: "String 1 is 4 cm longer than string 2. Together they are 16 cm. How long is string 2? [ ? ]",
      visual: "━━━━━━━━━━<br>━━━━━━",
      answer: "6",
      hint: "Bớt phần dài hơn 4 cm, phần còn lại chia đôi.",
      explanation: "16 - 4 = 12; 12 chia đôi = 6 cm. Thử: 6 + 10 = 16 ✔.",
      xp: 20
    },
    {
      id: "comb-q26",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 2 loại bánh và 3 loại nước uống. Chọn 1 bánh và 1 nước uống thì có mấy cách?",
      questionEn: "There are 2 kinds of cake and 3 kinds of drink. How many ways to choose 1 cake and 1 drink?",
      visual: "🍰🧁 | 🥤🧃🥛",
      options: [
        "5",
        "6",
        "4",
        "3"
      ],
      answer: "6",
      hint: "Mỗi loại bánh đi với 3 loại nước.",
      explanation: "3 + 3 = 6 cách.",
      xp: 10
    },
    {
      id: "comb-q27",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Có 2 bạn trai (An, Bình) và 2 bạn gái (Chi, Dung). Ghép 1 bạn trai với 1 bạn gái thành 1 cặp. Có mấy cách ghép? [ ? ]",
      questionEn: "2 boys (An, Binh) and 2 girls (Chi, Dung). How many ways to make 1 boy-girl pair? [ ? ]",
      answer: "4",
      hint: "Liệt kê: An-Chi, An-Dung, ...",
      explanation: "An-Chi, An-Dung, Bình-Chi, Bình-Dung = 4 cách.",
      xp: 10
    },
    {
      id: "comb-q28",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 4 chiếc áo và 2 chiếc quần. Có bao nhiêu bộ quần áo khác nhau?",
      questionEn: "There are 4 shirts and 2 pairs of trousers. How many different outfits?",
      visual: "👕👕👕👕 | 👖👖",
      options: [
        "6",
        "8",
        "4",
        "2"
      ],
      answer: "8",
      hint: "Mỗi chiếc áo đi với 2 chiếc quần.",
      explanation: "2 + 2 + 2 + 2 = 8 bộ.",
      xp: 15
    },
    {
      id: "comb-q29",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Từ nhà đến chợ có 2 con đường, từ chợ đến trường có 4 con đường. Có bao nhiêu cách đi từ nhà qua chợ đến trường? [ ? ]",
      questionEn: "2 roads go from home to the market, 4 from the market to school. How many ways from home to school via the market? [ ? ]",
      visual: "🏠 ⇉ 🏪 ⇶ 🏫",
      answer: "8",
      hint: "Mỗi đường đến chợ có 4 cách đi tiếp.",
      explanation: "4 + 4 = 8 cách.",
      xp: 15
    },
    {
      id: "comb-q30",
      topic: "combinatorics",
      lessonId: "comb-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Bé chọn 1 món chính (cơm hoặc phở) và 1 món tráng miệng (chuối, kem hoặc sữa chua). Bé không ăn phở cùng kem. Có mấy cách chọn?",
      questionEn: "Choose 1 main (rice or pho) and 1 dessert (banana, ice cream or yoghurt). Pho with ice cream is not allowed. How many choices?",
      visual: "🍚🍜 | 🍌🍦🥛",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: "5",
      hint: "Đếm tất cả rồi bỏ cách không được phép.",
      explanation: "Tất cả 3 + 3 = 6 cách, bỏ 1 cách (phở + kem) ➔ 5 cách.",
      xp: 20
    },
    {
      id: "comb-q31",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Từ 2 thẻ số 3 và 8, bé lập được các số có 2 chữ số khác nhau nào?",
      questionEn: "With cards 3 and 8, which 2-digit numbers (different digits) can you make?",
      visual: "[3] [8]",
      options: [
        "38 và 83",
        "Chỉ 38",
        "Chỉ 83",
        "33 và 88"
      ],
      answer: "38 và 83",
      hint: "Đổi chỗ 2 thẻ.",
      explanation: "Thẻ 3 đứng trước: 38; thẻ 8 đứng trước: 83.",
      xp: 10
    },
    {
      id: "comb-q32",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Từ 3 thẻ số 1, 4, 7 lập các số có 2 chữ số khác nhau. Số lớn nhất là số nào? [ ? ]",
      questionEn: "Using cards 1, 4, 7, make 2-digit numbers with different digits. What is the largest? [ ? ]",
      visual: "[1] [4] [7]",
      answer: "74",
      hint: "Chọn thẻ lớn nhất làm hàng chục.",
      explanation: "Hàng chục 7, hàng đơn vị lớn nhất còn lại 4 ➔ 74.",
      xp: 15
    },
    {
      id: "comb-q33",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có bao nhiêu số có 2 chữ số mà chữ số hàng chục là 5?",
      questionEn: "How many 2-digit numbers have 5 as the tens digit?",
      options: [
        "5",
        "9",
        "10",
        "11"
      ],
      answer: "10",
      hint: "Đó là các số từ 50 đến 59.",
      explanation: "50, 51, ..., 59 = 10 số.",
      xp: 15
    },
    {
      id: "comb-q34",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Từ các thẻ 0, 2, 5 lập các số có 2 chữ số khác nhau. Số bé nhất là số nào? [ ? ]",
      questionEn: "Using cards 0, 2, 5, make 2-digit numbers with different digits. What is the smallest? [ ? ]",
      visual: "[0] [2] [5]",
      answer: "20",
      hint: "Chữ số 0 không đứng ở hàng chục.",
      explanation: "Hàng chục bé nhất có thể là 2, hàng đơn vị bé nhất là 0 ➔ 20.",
      xp: 20
    },
    {
      id: "comb-q35",
      topic: "combinatorics",
      lessonId: "comb-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có bao nhiêu số có 2 chữ số mà 2 chữ số giống nhau (như 11, 22)?",
      questionEn: "How many 2-digit numbers have two equal digits (like 11, 22)?",
      options: [
        "8",
        "9",
        "10",
        "11"
      ],
      answer: "9",
      hint: "Không có số 00.",
      explanation: "11, 22, 33, 44, 55, 66, 77, 88, 99 = 9 số.",
      xp: 20
    },
    {
      id: "comb-q36",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 2 màu Xanh và Đỏ. Tô 1 quả bóng bằng 1 màu. Có mấy cách tô?",
      questionEn: "There are 2 colours, blue and red. Colour 1 ball with 1 colour. How many ways?",
      visual: "⚪",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "2",
      hint: "Mỗi màu là 1 cách.",
      explanation: "Tô Xanh hoặc tô Đỏ = 2 cách.",
      xp: 10
    },
    {
      id: "comb-q37",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 1,
      type: "fill-blank",
      question: "Có 3 bút màu khác nhau. Tô 1 bông hoa bằng 1 màu. Có mấy cách tô? [ ? ]",
      questionEn: "There are 3 different crayons. Colour 1 flower with 1 colour. How many ways? [ ? ]",
      visual: "🖍️🖍️🖍️ 🌼",
      answer: "3",
      hint: "Mỗi bút màu là 1 cách.",
      explanation: "Có 3 cách tô.",
      xp: 10
    },
    {
      id: "comb-q38",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tô 2 ô liền nhau bằng 2 màu Đỏ và Vàng, 2 ô được phép cùng màu. Có mấy cách tô?",
      questionEn: "Colour 2 neighbouring boxes using red and yellow; the boxes may be the same colour. How many ways?",
      visual: "⬜⬜",
      options: [
        "2",
        "3",
        "4",
        "6"
      ],
      answer: "4",
      hint: "Liệt kê: Đỏ-Đỏ, Đỏ-Vàng, ...",
      explanation: "Đỏ-Đỏ, Đỏ-Vàng, Vàng-Đỏ, Vàng-Vàng = 4 cách.",
      xp: 15
    },
    {
      id: "comb-q39",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Có 4 màu. Tô 2 ô liền nhau sao cho 2 ô khác màu. Có mấy cách tô? [ ? ]",
      questionEn: "There are 4 colours. Colour 2 neighbouring boxes so they are different. How many ways? [ ? ]",
      visual: "⬜⬜",
      answer: "12",
      hint: "Ô 1 có 4 cách, ô 2 còn 3 cách.",
      explanation: "3 + 3 + 3 + 3 = 12 cách.",
      xp: 20
    },
    {
      id: "comb-q40",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Tô 3 ô thẳng hàng bằng 3 màu Đỏ, Xanh, Vàng, mỗi ô 1 màu khác nhau, ô ở giữa phải màu Đỏ. Có mấy cách tô?",
      questionEn: "Colour 3 boxes in a row with red, blue and yellow, all different, and the middle one must be red. How many ways?",
      visual: "⬜🟥⬜",
      options: [
        "1",
        "2",
        "3",
        "6"
      ],
      answer: "2",
      hint: "Ô giữa đã cố định, chỉ còn đổi chỗ Xanh và Vàng.",
      explanation: "Xanh-Đỏ-Vàng và Vàng-Đỏ-Xanh = 2 cách.",
      xp: 15
    },
    {
      id: "comb-q41",
      topic: "combinatorics",
      lessonId: "comb-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Bản đồ có 3 vùng A, B, C, vùng nào cũng giáp 2 vùng còn lại. Dùng 3 màu, 2 vùng giáp nhau phải khác màu. Có mấy cách tô?",
      questionEn: "A map has 3 regions A, B, C, each touching the other two. Using 3 colours, touching regions must differ. How many ways?",
      visual: "🗺️",
      options: [
        "3",
        "4",
        "6",
        "9"
      ],
      answer: "6",
      hint: "Vùng A có 3 cách, vùng B còn 2 cách, vùng C còn 1 cách.",
      explanation: "A có 3 cách; mỗi cách A, B có 2 cách; C chỉ còn 1 cách ➔ 2 + 2 + 2 = 6 cách.",
      xp: 20
    },
    {
      id: "comb-q42",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 2 bạn gặp nhau, mỗi bạn bắt tay bạn kia 1 lần. Có mấy cái bắt tay?",
      questionEn: "2 friends meet and shake hands once. How many handshakes?",
      visual: "🤝",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "1",
      hint: "Một cái bắt tay cần 2 bàn tay của 2 bạn.",
      explanation: "Chỉ có 1 cái bắt tay.",
      xp: 10
    },
    {
      id: "comb-q43",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Có 4 loại quả: táo, cam, lê, xoài. Chọn 2 loại khác nhau. Có mấy cách chọn? [ ? ]",
      questionEn: "4 fruits: apple, orange, pear, mango. Choose 2 different ones. How many ways? [ ? ]",
      visual: "🍎🍊🍐🥭",
      answer: "6",
      hint: "Liệt kê theo từng quả, không đếm trùng.",
      explanation: "Táo đi với 3 quả, cam với 2 quả còn lại, lê với 1 ➔ 3 + 2 + 1 = 6 cách.",
      xp: 15
    },
    {
      id: "comb-q44",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 5 đội bóng, mỗi đội đấu với mỗi đội khác đúng 1 trận. Có tất cả bao nhiêu trận?",
      questionEn: "5 teams each play every other team once. How many matches in total?",
      visual: "⚽",
      options: [
        "8",
        "10",
        "12",
        "20"
      ],
      answer: "10",
      hint: "Đội 1 đấu 4 trận, đội 2 thêm 3 trận mới, ...",
      explanation: "4 + 3 + 2 + 1 = 10 trận.",
      xp: 15
    },
    {
      id: "comb-q45",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Hộp có 3 bi đỏ và 3 bi xanh. Không nhìn, phải lấy ra ít nhất bao nhiêu viên để chắc chắn có 2 viên cùng màu? [ ? ]",
      questionEn: "A box has 3 red and 3 blue marbles. Without looking, how many must you take to be sure of 2 the same colour? [ ? ]",
      visual: "🔴🔴🔴🔵🔵🔵",
      answer: "3",
      hint: "Nghĩ đến trường hợp xui nhất: 2 viên đầu khác màu.",
      explanation: "2 viên đầu có thể 1 đỏ 1 xanh; viên thứ 3 chắc chắn trùng màu ➔ 3 viên.",
      xp: 20
    },
    {
      id: "comb-q46",
      topic: "combinatorics",
      lessonId: "comb-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Hộp có 5 bi đỏ và 4 bi xanh. Không nhìn, phải lấy ra ít nhất mấy viên để chắc chắn có 1 viên bi xanh?",
      questionEn: "A box has 5 red and 4 blue marbles. Without looking, how many must you take to be sure of getting a blue one? [ ? ]",
      visual: "🔴🔴🔴🔴🔴🔵🔵🔵🔵",
      options: [
        "4",
        "5",
        "6",
        "9"
      ],
      answer: "6",
      hint: "Trường hợp xui nhất: lấy hết bi đỏ trước.",
      explanation: "Lấy hết 5 bi đỏ, viên thứ 6 chắc chắn là bi xanh ➔ 6 viên.",
      xp: 20
    },
    {
      id: "comb-q47",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 1,
      type: "fill-blank",
      question: "Cắt 1 sợi dây bằng 3 nhát kéo thẳng. Sợi dây đứt thành mấy đoạn? [ ? ]",
      questionEn: "Cut a string 3 times. How many pieces are there? [ ? ]",
      visual: "✂️",
      answer: "4",
      hint: "Số đoạn = số nhát cắt + 1.",
      explanation: "3 + 1 = 4 đoạn.",
      xp: 10
    },
    {
      id: "comb-q48",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Bánh pizza tròn được cắt 3 nhát thẳng, nhát nào cũng đi qua tâm bánh. Được mấy miếng?",
      questionEn: "A round pizza is cut 3 times, every cut through the centre. How many slices?",
      visual: "🍕",
      options: [
        "3",
        "4",
        "6",
        "8"
      ],
      answer: "6",
      hint: "Mỗi nhát qua tâm tạo thêm 2 miếng.",
      explanation: "1 nhát: 2 miếng; 2 nhát: 4 miếng; 3 nhát: 6 miếng.",
      xp: 15
    },
    {
      id: "comb-q49",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Hàng rào có 6 cái cọc thẳng hàng. Giữa 2 cọc liền nhau căng 1 tấm lưới. Cần mấy tấm lưới? [ ? ]",
      questionEn: "A fence has 6 posts in a row with one net between each two neighbouring posts. How many nets? [ ? ]",
      visual: "|#|#|#|#|#|",
      answer: "5",
      hint: "Số tấm lưới = số khoảng giữa các cọc.",
      explanation: "6 - 1 = 5 tấm lưới.",
      xp: 15
    },
    {
      id: "comb-q50",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Cưa một khúc gỗ thành 5 đoạn, mỗi lần cưa mất 3 phút. Cưa xong hết bao nhiêu phút?",
      questionEn: "Sawing a log into 5 pieces takes 3 minutes per cut. How many minutes in total?",
      visual: "🪵",
      options: [
        "9",
        "12",
        "15",
        "10"
      ],
      answer: "12",
      hint: "Tìm số nhát cưa trước.",
      explanation: "Số nhát cưa = 5 - 1 = 4; 3 + 3 + 3 + 3 = 12 phút.",
      xp: 20
    },

    // --- TOPIC: NUMBER THEORY / LÝ THUYẾT SỐ (50 câu) ---
    {
      id: "nt-q1",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số nào là số chẵn?",
      questionEn: "Which number is even?",
      options: [
        "3",
        "5",
        "8",
        "9"
      ],
      answer: "8",
      hint: "Số chẵn có chữ số tận cùng 0, 2, 4, 6, 8.",
      explanation: "8 là số chẵn (chia thành 2 phần bằng nhau: 4 và 4).",
      xp: 10
    },
    {
      id: "nt-q2",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số nào là số lẻ?",
      questionEn: "Which number is odd?",
      options: [
        "2",
        "4",
        "6",
        "7"
      ],
      answer: "7",
      hint: "Số lẻ có chữ số tận cùng 1, 3, 5, 7, 9.",
      explanation: "7 là số lẻ.",
      xp: 10
    },
    {
      id: "nt-q3",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 1,
      type: "fill-blank",
      question: "Số chẵn liền sau số 6 là số nào? [ ? ]",
      questionEn: "What is the next even number after 6? [ ? ]",
      answer: "8",
      hint: "Hai số chẵn liền nhau hơn kém nhau 2.",
      explanation: "6 + 2 = 8.",
      xp: 10
    },
    {
      id: "nt-q4",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Từ 1 đến 10 có bao nhiêu số chẵn? [ ? ]",
      questionEn: "How many even numbers are there from 1 to 10? [ ? ]",
      visual: "1 2 3 4 5 6 7 8 9 10",
      answer: "5",
      hint: "Liệt kê các số chẵn.",
      explanation: "2, 4, 6, 8, 10 = 5 số chẵn.",
      xp: 15
    },
    {
      id: "nt-q5",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Cộng hai số lẻ với nhau thì được số chẵn hay số lẻ?",
      questionEn: "Is the sum of two odd numbers even or odd?",
      options: [
        "Số chẵn",
        "Số lẻ"
      ],
      answer: "Số chẵn",
      hint: "Thử: 3 + 5 = ?",
      explanation: "Ví dụ 3 + 5 = 8, 1 + 7 = 8: tổng hai số lẻ luôn là số chẵn.",
      xp: 15
    },
    {
      id: "nt-q6",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 9 chiếc giày. Ghép thành từng đôi thì thế nào?",
      questionEn: "There are 9 shoes. What happens when you put them into pairs?",
      visual: "👟👟👟👟👟👟👟👟👟",
      options: [
        "Vừa đủ, không thừa chiếc nào",
        "Thừa 1 chiếc"
      ],
      answer: "Thừa 1 chiếc",
      hint: "9 là số chẵn hay số lẻ?",
      explanation: "9 là số lẻ nên ghép đôi được 4 đôi và thừa 1 chiếc.",
      xp: 15
    },
    {
      id: "nt-q7",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 2,
      type: "fill-blank",
      question: "Số lẻ lớn nhất có 1 chữ số là số nào? [ ? ]",
      questionEn: "What is the largest 1-digit odd number? [ ? ]",
      answer: "9",
      hint: "Số có 1 chữ số là từ 0 đến 9.",
      explanation: "Số lẻ có 1 chữ số: 1, 3, 5, 7, 9 ➔ lớn nhất là 9.",
      xp: 15
    },
    {
      id: "nt-q8",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Từ 11 đến 20 có bao nhiêu số lẻ? [ ? ]",
      questionEn: "How many odd numbers are there from 11 to 20? [ ? ]",
      answer: "5",
      hint: "Liệt kê các số tận cùng 1, 3, 5, 7, 9.",
      explanation: "11, 13, 15, 17, 19 = 5 số lẻ.",
      xp: 20
    },
    {
      id: "nt-q9",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 3,
      type: "multiple-choice",
      question: "Số chẵn lớn nhất có 2 chữ số là số nào?",
      questionEn: "What is the largest 2-digit even number?",
      options: [
        "90",
        "98",
        "99",
        "100"
      ],
      answer: "98",
      hint: "99 là số lẻ; 100 có 3 chữ số.",
      explanation: "Số chẵn lớn nhất có 2 chữ số là 98.",
      xp: 20
    },
    {
      id: "nt-q10",
      topic: "number-theory",
      lessonId: "nt-lesson-1",
      difficulty: 3,
      type: "fill-blank",
      question: "Tính tổng các số lẻ từ 1 đến 9: 1 + 3 + 5 + 7 + 9 = [ ? ]",
      questionEn: "Add the odd numbers from 1 to 9: 1 + 3 + 5 + 7 + 9 = [ ? ]",
      answer: "25",
      hint: "Ghép cặp có tổng bằng 10: (1 + 9), (3 + 7).",
      explanation: "(1 + 9) + (3 + 7) + 5 = 10 + 10 + 5 = 25.",
      xp: 20
    },
    {
      id: "nt-q11",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số 35 gồm mấy chục và mấy đơn vị?",
      questionEn: "How many tens and ones are in 35?",
      visual: "🧺🧺🧺 + 🍎🍎🍎🍎🍎",
      options: [
        "3 chục và 5 đơn vị",
        "5 chục và 3 đơn vị",
        "35 chục",
        "3 đơn vị và 5 chục"
      ],
      answer: "3 chục và 5 đơn vị",
      hint: "Chữ số bên trái là hàng chục.",
      explanation: "35 = 30 + 5 = 3 chục và 5 đơn vị.",
      xp: 10
    },
    {
      id: "nt-q12",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 1,
      type: "fill-blank",
      question: "Số gồm 4 chục và 7 đơn vị là số nào? [ ? ]",
      questionEn: "Which number has 4 tens and 7 ones? [ ? ]",
      answer: "47",
      hint: "Viết chữ số hàng chục trước.",
      explanation: "4 chục và 7 đơn vị = 40 + 7 = 47.",
      xp: 10
    },
    {
      id: "nt-q13",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 1,
      type: "multiple-choice",
      question: "Chữ số hàng đơn vị của số 60 là chữ số nào?",
      questionEn: "What is the ones digit of 60?",
      options: [
        "0",
        "6",
        "60",
        "1"
      ],
      answer: "0",
      hint: "Hàng đơn vị là chữ số bên phải.",
      explanation: "60 = 6 chục và 0 đơn vị ➔ chữ số hàng đơn vị là 0.",
      xp: 10
    },
    {
      id: "nt-q14",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Số gồm 8 đơn vị và 2 chục là số nào? [ ? ]",
      questionEn: "Which number has 8 ones and 2 tens? [ ? ]",
      answer: "28",
      hint: "Chú ý: chục viết trước, đơn vị viết sau.",
      explanation: "2 chục và 8 đơn vị = 20 + 8 = 28.",
      xp: 15
    },
    {
      id: "nt-q15",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Mỗi bó que tính có 10 que. 5 bó và 3 que rời có tất cả bao nhiêu que tính?",
      questionEn: "Each bundle has 10 sticks. How many sticks are in 5 bundles and 3 loose sticks?",
      visual: "🥢×10 ×5 + 🥢🥢🥢",
      options: [
        "8",
        "35",
        "50",
        "53"
      ],
      answer: "53",
      hint: "5 bó là 5 chục.",
      explanation: "5 chục + 3 đơn vị = 50 + 3 = 53 que.",
      xp: 15
    },
    {
      id: "nt-q16",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 2,
      type: "fill-blank",
      question: "Số liền sau của 39 là số nào? [ ? ]",
      questionEn: "What number comes right after 39? [ ? ]",
      answer: "40",
      hint: "Thêm 1 vào 39.",
      explanation: "39 + 1 = 40 (9 đơn vị thêm 1 thành 1 chục).",
      xp: 15
    },
    {
      id: "nt-q17",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Số có 2 chữ số, chữ số hàng chục là 7, chữ số hàng đơn vị kém chữ số hàng chục 2. Số đó là số nào?",
      questionEn: "A 2-digit number has tens digit 7 and its ones digit is 2 less than the tens digit. What is it?",
      options: [
        "57",
        "72",
        "75",
        "79"
      ],
      answer: "75",
      hint: "Hàng đơn vị = 7 - 2.",
      explanation: "Hàng đơn vị: 7 - 2 = 5 ➔ số 75.",
      xp: 15
    },
    {
      id: "nt-q18",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Tổng hai chữ số của số 46 là bao nhiêu? [ ? ]",
      questionEn: "What is the sum of the digits of 46? [ ? ]",
      answer: "10",
      hint: "Cộng chữ số hàng chục với chữ số hàng đơn vị.",
      explanation: "4 + 6 = 10.",
      xp: 20
    },
    {
      id: "nt-q19",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có bao nhiêu số có 2 chữ số mà tổng hai chữ số bằng 3?",
      questionEn: "How many 2-digit numbers have digits adding up to 3?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: "3",
      hint: "Hàng chục có thể là 1, 2, 3.",
      explanation: "12, 21, 30 = 3 số.",
      xp: 20
    },
    {
      id: "nt-q20",
      topic: "number-theory",
      lessonId: "nt-lesson-2",
      difficulty: 3,
      type: "fill-blank",
      question: "Số tròn chục lớn nhất bé hơn 75 là số nào? [ ? ]",
      questionEn: "What is the largest multiple of ten less than 75? [ ? ]",
      answer: "70",
      hint: "Số tròn chục có hàng đơn vị là 0.",
      explanation: "Các số tròn chục bé hơn 75: 10, 20, ..., 70 ➔ lớn nhất là 70.",
      xp: 20
    },
    {
      id: "nt-q21",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số nào lớn nhất: 45, 54, 39, 50?",
      questionEn: "Which is the largest: 45, 54, 39, 50?",
      options: [
        "45",
        "54",
        "39",
        "50"
      ],
      answer: "54",
      hint: "So sánh chữ số hàng chục trước.",
      explanation: "Hàng chục lớn nhất là 5 (54 và 50); so tiếp hàng đơn vị: 4 > 0 ➔ 54.",
      xp: 10
    },
    {
      id: "nt-q22",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số nào bé nhất: 17, 71, 27, 12?",
      questionEn: "Which is the smallest: 17, 71, 27, 12?",
      options: [
        "17",
        "71",
        "27",
        "12"
      ],
      answer: "12",
      hint: "So sánh hàng chục, rồi hàng đơn vị.",
      explanation: "Hàng chục bé nhất là 1 (17 và 12); 2 < 7 ➔ 12.",
      xp: 10
    },
    {
      id: "nt-q23",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 1,
      type: "fill-blank",
      question: "Số liền trước của 50 là số nào? [ ? ]",
      questionEn: "What number comes right before 50? [ ? ]",
      answer: "49",
      hint: "Bớt 1 từ 50.",
      explanation: "50 - 1 = 49.",
      xp: 10
    },
    {
      id: "nt-q24",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Sắp xếp các số 28, 82, 52 theo thứ tự từ bé đến lớn:",
      questionEn: "Order 28, 82, 52 from smallest to largest:",
      options: [
        "28, 52, 82",
        "82, 52, 28",
        "52, 28, 82",
        "28, 82, 52"
      ],
      answer: "28, 52, 82",
      hint: "So sánh chữ số hàng chục: 2, 8, 5.",
      explanation: "2 < 5 < 8 ➔ 28, 52, 82.",
      xp: 15
    },
    {
      id: "nt-q25",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Có bao nhiêu số nằm giữa 15 và 21? [ ? ]",
      questionEn: "How many numbers are between 15 and 21? [ ? ]",
      answer: "5",
      hint: "Không tính 15 và 21.",
      explanation: "16, 17, 18, 19, 20 = 5 số.",
      xp: 15
    },
    {
      id: "nt-q26",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Số nào lớn hơn 36, bé hơn 40 và là số chẵn?",
      questionEn: "Which number is greater than 36, less than 40 and even?",
      options: [
        "37",
        "38",
        "39",
        "40"
      ],
      answer: "38",
      hint: "Các số lớn hơn 36 và bé hơn 40 là 37, 38, 39.",
      explanation: "Trong 37, 38, 39 chỉ có 38 là số chẵn.",
      xp: 15
    },
    {
      id: "nt-q27",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 2,
      type: "fill-blank",
      question: "Số bé nhất có 2 chữ số là số nào? [ ? ]",
      questionEn: "What is the smallest 2-digit number? [ ? ]",
      answer: "10",
      hint: "Hàng chục không được là 0.",
      explanation: "Số bé nhất có 2 chữ số là 10.",
      xp: 15
    },
    {
      id: "nt-q28",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Số lớn nhất có 2 chữ số khác nhau là số nào? [ ? ]",
      questionEn: "What is the largest 2-digit number with different digits? [ ? ]",
      answer: "98",
      hint: "99 có 2 chữ số giống nhau.",
      explanation: "Hàng chục lớn nhất 9, hàng đơn vị lớn nhất khác 9 là 8 ➔ 98.",
      xp: 20
    },
    {
      id: "nt-q29",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 3,
      type: "multiple-choice",
      question: "Số 5[ ? ] lớn hơn 57 và là số lẻ. Chữ số còn thiếu là chữ số nào?",
      questionEn: "The number 5[ ? ] is greater than 57 and odd. What is the missing digit?",
      options: [
        "6",
        "7",
        "8",
        "9"
      ],
      answer: "9",
      hint: "Số lớn hơn 57 là 58 hoặc 59.",
      explanation: "58 là số chẵn, 59 là số lẻ ➔ chữ số còn thiếu là 9.",
      xp: 20
    },
    {
      id: "nt-q30",
      topic: "number-theory",
      lessonId: "nt-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Có bao nhiêu số có 2 chữ số lớn hơn 90? [ ? ]",
      questionEn: "How many 2-digit numbers are greater than 90? [ ? ]",
      answer: "9",
      hint: "Đếm từ 91 đến 99.",
      explanation: "91, 92, ..., 99 = 9 số.",
      xp: 20
    },
    {
      id: "nt-q31",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 6 cái kẹo chia đều cho 2 bạn. Mỗi bạn được mấy cái?",
      questionEn: "6 sweets are shared equally between 2 children. How many does each get?",
      visual: "🍬🍬🍬🍬🍬🍬",
      options: [
        "2",
        "3",
        "4",
        "6"
      ],
      answer: "3",
      hint: "Phát lần lượt mỗi bạn 1 cái cho đến hết.",
      explanation: "3 + 3 = 6 ➔ mỗi bạn 3 cái.",
      xp: 10
    },
    {
      id: "nt-q32",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 1,
      type: "fill-blank",
      question: "Có 8 quả táo xếp đều vào 2 đĩa. Mỗi đĩa có mấy quả? [ ? ]",
      questionEn: "8 apples are placed equally on 2 plates. How many on each plate? [ ? ]",
      visual: "🍎🍎🍎🍎🍎🍎🍎🍎",
      answer: "4",
      hint: "Tìm số cộng với chính nó bằng 8.",
      explanation: "4 + 4 = 8 ➔ mỗi đĩa 4 quả.",
      xp: 10
    },
    {
      id: "nt-q33",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 1,
      type: "multiple-choice",
      question: "Có 10 bông hoa, cắm vào các lọ, mỗi lọ 5 bông. Cần mấy lọ?",
      questionEn: "10 flowers go into vases, 5 per vase. How many vases?",
      visual: "🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸",
      options: [
        "1",
        "2",
        "3",
        "5"
      ],
      answer: "2",
      hint: "Đếm từng nhóm 5 bông.",
      explanation: "5 + 5 = 10 ➔ cần 2 lọ.",
      xp: 10
    },
    {
      id: "nt-q34",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Có 12 cái bánh xếp vào các hộp, mỗi hộp 3 cái. Cần mấy hộp? [ ? ]",
      questionEn: "12 cakes go into boxes, 3 per box. How many boxes? [ ? ]",
      visual: "🧁🧁🧁 🧁🧁🧁 🧁🧁🧁 🧁🧁🧁",
      answer: "4",
      hint: "Đếm số nhóm 3 cái.",
      explanation: "3 + 3 + 3 + 3 = 12 ➔ 4 hộp.",
      xp: 15
    },
    {
      id: "nt-q35",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 9 viên bi chia đều cho 3 bạn. Mỗi bạn được mấy viên?",
      questionEn: "9 marbles are shared equally among 3 children. How many each?",
      visual: "🔵🔵🔵🔵🔵🔵🔵🔵🔵",
      options: [
        "2",
        "3",
        "4",
        "6"
      ],
      answer: "3",
      hint: "Tìm số cộng 3 lần bằng 9.",
      explanation: "3 + 3 + 3 = 9 ➔ mỗi bạn 3 viên.",
      xp: 15
    },
    {
      id: "nt-q36",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 2,
      type: "fill-blank",
      question: "Có 7 cái kẹo chia đều cho 2 bạn. Mỗi bạn được nhiều nhất mấy cái? [ ? ]",
      questionEn: "7 sweets are shared equally between 2 children. At most how many does each get? [ ? ]",
      visual: "🍬🍬🍬🍬🍬🍬🍬",
      answer: "3",
      hint: "7 là số lẻ nên sẽ thừa 1 cái.",
      explanation: "3 + 3 = 6, thừa 1 cái ➔ mỗi bạn nhiều nhất 3 cái.",
      xp: 15
    },
    {
      id: "nt-q37",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 2,
      type: "multiple-choice",
      question: "Có 14 chiếc đũa. Ghép được bao nhiêu đôi đũa?",
      questionEn: "There are 14 chopsticks. How many pairs can be made?",
      visual: "🥢",
      options: [
        "6",
        "7",
        "8",
        "14"
      ],
      answer: "7",
      hint: "Mỗi đôi gồm 2 chiếc.",
      explanation: "7 + 7 = 14 ➔ 7 đôi đũa.",
      xp: 15
    },
    {
      id: "nt-q38",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Có 15 quả cam chia đều vào 3 giỏ. Mỗi giỏ có mấy quả? [ ? ]",
      questionEn: "15 oranges are shared equally into 3 baskets. How many in each? [ ? ]",
      visual: "🍊",
      answer: "5",
      hint: "Tìm số cộng 3 lần bằng 15.",
      explanation: "5 + 5 + 5 = 15 ➔ mỗi giỏ 5 quả.",
      xp: 20
    },
    {
      id: "nt-q39",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 3,
      type: "multiple-choice",
      question: "Có 11 bạn đi thuyền, mỗi thuyền chở được nhiều nhất 4 bạn. Cần ít nhất mấy chiếc thuyền?",
      questionEn: "11 children take boats; each boat holds at most 4. At least how many boats are needed?",
      visual: "⛵",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: "3",
      hint: "2 thuyền chở được 8 bạn, còn thừa bạn nào không?",
      explanation: "2 thuyền chở 8 bạn, còn 3 bạn cần thêm 1 thuyền ➔ 3 thuyền.",
      xp: 20
    },
    {
      id: "nt-q40",
      topic: "number-theory",
      lessonId: "nt-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Có 20 cái bút chia đều cho 4 bạn. Mỗi bạn được mấy cái? [ ? ]",
      questionEn: "20 pens are shared equally among 4 children. How many each? [ ? ]",
      visual: "✏️",
      answer: "5",
      hint: "Tìm số cộng 4 lần bằng 20.",
      explanation: "5 + 5 + 5 + 5 = 20 ➔ mỗi bạn 5 cái.",
      xp: 20
    },
    {
      id: "nt-q41",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Chữ cái tiếp theo: A, B, C, D, ?",
      questionEn: "Next letter: A, B, C, D, ?",
      options: [
        "E",
        "F",
        "G",
        "C"
      ],
      answer: "E",
      hint: "Theo thứ tự bảng chữ cái.",
      explanation: "Sau D là E.",
      xp: 10
    },
    {
      id: "nt-q42",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Chữ cái tiếp theo: A, B, A, B, A, ?",
      questionEn: "Next letter: A, B, A, B, A, ?",
      options: [
        "A",
        "B",
        "C"
      ],
      answer: "B",
      hint: "Nhóm A, B lặp lại.",
      explanation: "Sau A là B.",
      xp: 10
    },
    {
      id: "nt-q43",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 1,
      type: "multiple-choice",
      question: "Số tiếp theo: 1, 2, 1, 2, 1, ?",
      questionEn: "Next number: 1, 2, 1, 2, 1, ?",
      options: [
        "1",
        "2",
        "3"
      ],
      answer: "2",
      hint: "Nhóm 1, 2 lặp lại.",
      explanation: "Sau 1 là 2.",
      xp: 10
    },
    {
      id: "nt-q44",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Chữ cái tiếp theo: A, C, E, G, ?",
      questionEn: "Next letter: A, C, E, G, ?",
      options: [
        "H",
        "I",
        "J",
        "K"
      ],
      answer: "I",
      hint: "Mỗi lần bỏ qua 1 chữ cái.",
      explanation: "A (b) C (d) E (f) G (h) I ➔ I.",
      xp: 15
    },
    {
      id: "nt-q45",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Chữ cái tiếp theo: A, A, B, B, C, C, ?",
      questionEn: "Next letter: A, A, B, B, C, C, ?",
      options: [
        "C",
        "D",
        "E"
      ],
      answer: "D",
      hint: "Mỗi chữ cái xuất hiện 2 lần.",
      explanation: "Sau C, C là D.",
      xp: 15
    },
    {
      id: "nt-q46",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Dãy số lặp lại: 1, 2, 3, 1, 2, 3, ... Số thứ 8 là số nào? [ ? ]",
      questionEn: "Repeating pattern: 1, 2, 3, 1, 2, 3, ... What is the 8th number? [ ? ]",
      answer: "2",
      hint: "Mỗi nhóm có 3 số; số thứ 6 là số cuối nhóm thứ 2.",
      explanation: "Số thứ 7 là 1, số thứ 8 là 2.",
      xp: 15
    },
    {
      id: "nt-q47",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 2,
      type: "multiple-choice",
      question: "Dãy chữ T, O, A, N lặp lại: T O A N T O A N ... Chữ thứ 6 là chữ gì?",
      questionEn: "The letters T, O, A, N repeat: T O A N T O A N ... What is the 6th letter?",
      options: [
        "T",
        "O",
        "A",
        "N"
      ],
      answer: "O",
      hint: "Mỗi nhóm có 4 chữ.",
      explanation: "Chữ thứ 5 là T, chữ thứ 6 là O.",
      xp: 15
    },
    {
      id: "nt-q48",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Chữ cái tiếp theo: Z, Y, X, W, ?",
      questionEn: "Next letter: Z, Y, X, W, ?",
      options: [
        "U",
        "V",
        "T",
        "X"
      ],
      answer: "V",
      hint: "Bảng chữ cái đếm ngược.",
      explanation: "Đếm lùi: Z, Y, X, W, V.",
      xp: 20
    },
    {
      id: "nt-q49",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Dãy lặp lại: 5, 10, 5, 10, 5, 10, ... Tổng 6 số đầu tiên là bao nhiêu? [ ? ]",
      questionEn: "Repeating: 5, 10, 5, 10, 5, 10, ... What is the sum of the first 6 numbers? [ ? ]",
      answer: "45",
      hint: "Mỗi cặp (5, 10) có tổng 15.",
      explanation: "6 số = 3 cặp; 15 + 15 + 15 = 45.",
      xp: 20
    },
    {
      id: "nt-q50",
      topic: "number-theory",
      lessonId: "nt-lesson-5",
      difficulty: 3,
      type: "multiple-choice",
      question: "Dãy hình lặp lại: 🔴 🔵 🔵 🔴 🔵 🔵 🔴 ... Hình thứ 9 là hình gì?",
      questionEn: "Repeating: 🔴 🔵 🔵 🔴 🔵 🔵 🔴 ... What is the 9th shape?",
      visual: "🔴 🔵 🔵 🔴 🔵 🔵 🔴 ...",
      options: [
        "🔴",
        "🔵"
      ],
      answer: "🔵",
      hint: "Mỗi nhóm có 3 hình, hình cuối nhóm là 🔵.",
      explanation: "Hình thứ 3, 6, 9 là hình cuối mỗi nhóm ➔ 🔵.",
      xp: 20
    }
  ],

  // Badges
  badges: [
    {
      id: "badge-arithmetic",
      name: "Nhà Thám Hiểm Số Học",
      englishName: "Number Explorer",
      icon: "🔢",
      desc: "Hoàn thành toàn bộ 5 bài học Số học",
      topicId: "arithmetic"
    },
    {
      id: "badge-number-theory",
      name: "Nhà Thông Thái Con Số",
      englishName: "Number Wizard",
      icon: "🧮",
      desc: "Hoàn thành toàn bộ 5 bài học Lý thuyết số",
      topicId: "number-theory"
    },
    {
      id: "badge-geometry",
      name: "Bậc Thầy Hình Học",
      englishName: "Shape Master",
      icon: "📐",
      desc: "Hoàn thành toàn bộ 5 bài học Hình học",
      topicId: "geometry"
    },
    {
      id: "badge-logic",
      name: "Thám Tử Tư Duy Logic",
      englishName: "Logic Detective",
      icon: "🧠",
      desc: "Hoàn thành toàn bộ 5 bài học Lập luận Logic",
      topicId: "logic"
    },
    {
      id: "badge-adv-arithmetic",
      name: "Chuyên Gia Toán Thực Tế",
      englishName: "Math Story Solver",
      icon: "📚",
      desc: "Hoàn thành toàn bộ 5 bài học Số học nâng cao",
      topicId: "advanced-arithmetic"
    },
    {
      id: "badge-combinatorics",
      name: "Quán Quân Tổ Hợp",
      englishName: "Counting Champion",
      icon: "🎯",
      desc: "Hoàn thành toàn bộ 5 bài học Tổ hợp",
      topicId: "combinatorics"
    },
    {
      id: "badge-timo-master",
      name: "Đại Hiệp TIMO 1 Vô Địch",
      englishName: "TIMO 1 Grandmaster",
      icon: "👑",
      desc: "Hoàn thành xuất sắc toàn bộ 30 bài học của TIMO 1",
      topicId: "all"
    }
  ],

  // Roadmap Stages
  roadmap: [
    {
      level: 1,
      title: "Cấp độ 1: Nền tảng Phép tính",
      englishTitle: "Level 1 — Foundation",
      lessons: ["arith-lesson-1", "arith-lesson-2", "arith-lesson-3"],
      icon: "🌱"
    },
    {
      level: 2,
      title: "Cấp độ 2: Ẩn số & Dãy số bí mật",
      englishTitle: "Level 2 — Number Patterns",
      lessons: ["arith-lesson-4", "arith-lesson-5"],
      icon: "🔍"
    },
    {
      level: 3,
      title: "Cấp độ 3: Bí mật Con số",
      englishTitle: "Level 3 — Number Theory",
      lessons: [
        "nt-lesson-1",
        "nt-lesson-2",
        "nt-lesson-3",
        "nt-lesson-4",
        "nt-lesson-5"
      ],
      icon: "🧮"
    },
    {
      level: 4,
      title: "Cấp độ 4: Thế giới Hình học",
      englishTitle: "Level 3 — Geometry Universe",
      lessons: ["geo-lesson-1", "geo-lesson-2", "geo-lesson-3", "geo-lesson-4", "geo-lesson-5"],
      icon: "📐"
    },
    {
      level: 5,
      title: "Cấp độ 5: Thám tử Lập luận Logic",
      englishTitle: "Level 4 — Logical Thinking",
      lessons: ["logic-lesson-1", "logic-lesson-2", "logic-lesson-3", "logic-lesson-4", "logic-lesson-5"],
      icon: "🧠"
    },
    {
      level: 6,
      title: "Cấp độ 6: Bài toán Lời văn & Thực tế",
      englishTitle: "Level 5 — Word Problems",
      lessons: ["adv-lesson-1", "adv-lesson-2", "adv-lesson-3", "adv-lesson-4", "adv-lesson-5"],
      icon: "📚"
    },
    {
      level: 7,
      title: "Cấp độ 7: Đỉnh cao Tổ hợp & Đếm nhanh",
      englishTitle: "Level 6 — Combinatorics Master",
      lessons: ["comb-lesson-1", "comb-lesson-2", "comb-lesson-3", "comb-lesson-4", "comb-lesson-5"],
      icon: "🏆"
    }
  ]
};

window.TIMO_DATA = TIMO_DATA;

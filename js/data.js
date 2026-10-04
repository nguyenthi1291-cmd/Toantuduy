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

  // Over 105 rich questions covering all topics, lesson tests, practice mode, TIMO challenge & daily challenge
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
      question: "Ghép 2 hình tam giác vuông giống hệt nhau có thể tạo thành hình nào?",
      questionEn: "Combining 2 identical right-angled triangles can form which shape?",
      options: ["Hình tròn", "Hình vuông", "Hình ngôi sao", "Hình trụ"],
      answer: "Hình vuông",
      hint: "2 nửa hình vuông ghép lại tạo thành hình vuông.",
      explanation: "2 tam giác vuông cân ghép lại tạo thành hình vuông.",
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
      question: "Có 15 chiếc kẹo chia đều cho 3 bạn Nam, Việt, Long. Hỏi mỗi bạn được mấy chiếc kẹo?",
      questionEn: "15 candies shared equally among 3 friends. How many candies does each friend get?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      hint: "5 + 5 + 5 = 15.",
      explanation: "Mỗi bạn nhận được 5 chiếc kẹo.",
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
      question: "Một hình vuông được kẻ 1 đường dọc và 1 đường ngang chia thành 4 ô vuông nhỏ. Hỏi có tất cả bao nhiêu hình vuông?",
      questionEn: "A square divided by 1 vertical and 1 horizontal line into 4 small squares. Total squares?",
      options: ["4", "5", "6", "8"],
      answer: "5",
      hint: "4 ô vuông nhỏ + 1 ô vuông lớn bao ngoài = 5.",
      explanation: "4 + 1 = 5 hình vuông.",
      xp: 20
    },
    {
      id: "comb-q20",
      topic: "combinatorics",
      lessonId: "comb-lesson-5",
      difficulty: 3,
      type: "fill-blank",
      question: "Xếp 5 học sinh A, B, C, D, E thành một hàng ngang. Biết bạn A luôn phải đứng đầu hàng. Có bao nhiêu cách xếp 4 bạn còn lại? [ ? ]",
      questionEn: "5 students in a row. A must stand first. How many arrangements for remaining 4? [ ? ]",
      answer: "24",
      hint: "4 × 3 × 2 × 1 = 24 cách xếp.",
      explanation: "Có 4 × 3 × 2 × 1 = 24 cách xếp.",
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
      question: "Hình nào sau đây có đúng 3 cạnh và 3 góc?",
      questionEn: "Which shape has exactly 3 sides and 3 angles?",
      options: ["Hình vuông / Square", "Hình tam giác / Triangle", "Hình tròn / Circle", "Hình chữ nhật / Rectangle"],
      answer: "Hình tam giác / Triangle",
      hint: "Hình tam giác có 3 cạnh.",
      explanation: "Hình tam giác có 3 cạnh và 3 góc.",
      xp: 10
    },
    {
      id: "geo-q22",
      topic: "geometry",
      lessonId: "geo-lesson-2",
      difficulty: 2,
      type: "multiple-choice",
      question: "Một hình chữ nhật được chia thành 3 ô vuông nhỏ thẳng hàng. Hỏi có tất cả bao nhiêu hình chữ nhật?",
      questionEn: "A rectangle is divided into 3 small squares in a row. How many rectangles in total?",
      options: ["4", "5", "6", "3"],
      answer: "6",
      hint: "3 + 2 + 1 = 6.",
      explanation: "3 hình đơn + 2 hình đôi + 1 hình ba = 6 hình chữ nhật.",
      xp: 15
    },
    {
      id: "geo-q23",
      topic: "geometry",
      lessonId: "geo-lesson-3",
      difficulty: 2,
      type: "multiple-choice",
      question: "Ghép 2 hình tam giác vuông giống nhau có thể tạo thành hình nào?",
      questionEn: "Combining 2 identical right-angled triangles can form which shape?",
      options: ["Hình tròn / Circle", "Hình chữ nhật / Rectangle", "Hình ngũ giác / Pentagon", "Hình elip / Ellipse"],
      answer: "Hình chữ nhật / Rectangle",
      hint: "Ghép 2 tam giác vuông theo cạnh huyền.",
      explanation: "2 tam giác vuông cân ghép lại tạo thành hình chữ nhật hoặc hình vuông.",
      xp: 15
    },
    {
      id: "geo-q24",
      topic: "geometry",
      lessonId: "geo-lesson-4",
      difficulty: 3,
      type: "fill-blank",
      question: "Trên một đường thẳng có 5 điểm mốc A, B, C, D, E. Hỏi có tất cả bao nhiêu đoạn thẳng? [ ? ]",
      questionEn: "There are 5 marked points A, B, C, D, E on a line. How many line segments are formed? [ ? ]",
      answer: "10",
      hint: "4 + 3 + 2 + 1 = 10.",
      explanation: "Tổng số đoạn thẳng = 4 + 3 + 2 + 1 = 10 đoạn.",
      xp: 20
    },
    {
      id: "geo-q25",
      topic: "geometry",
      lessonId: "geo-lesson-5",
      difficulty: 2,
      type: "fill-blank",
      question: "Một khối lập phương (Cube) có tất cả bao nhiêu mặt phẳng vuông bằng nhau? [ ? ]",
      questionEn: "How many identical square faces does a cube have? [ ? ]",
      answer: "6",
      hint: "Khối lập phương có 6 mặt.",
      explanation: "Khối lập phương có đúng 6 mặt phẳng hình vuông.",
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
      question: "Nếu hôm nay là Thứ Tư, thì 2 ngày nữa sẽ là Thứ mấy trong tuần?",
      questionEn: "If today is Wednesday, what day of the week will it be in 2 days?",
      options: ["Thứ Năm / Thursday", "Thứ Sáu / Friday", "Thứ Bảy / Saturday", "Chủ Nhật / Sunday"],
      answer: "Thứ Sáu / Friday",
      hint: "Thứ Tư + 2 ngày = Thứ Sáu.",
      explanation: "Thứ Tư cộng 2 ngày là Thứ Sáu.",
      xp: 15
    },
    {
      id: "logic-q23",
      topic: "logic",
      lessonId: "logic-lesson-3",
      difficulty: 3,
      type: "fill-blank",
      question: "Nam đứng thứ 4 từ đầu hàng và đứng thứ 3 từ cuối hàng. Hỏi hàng đó có tất cả bao nhiêu bạn? [ ? ]",
      questionEn: "Nam is 4th from front and 3rd from back in a line. How many students in total? [ ? ]",
      answer: "6",
      hint: "4 + 3 - 1 = 6.",
      explanation: "4 + 3 - 1 = 6 bạn.",
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
      desc: "Hoàn thành xuất sắc toàn bộ 25 bài học của TIMO 1",
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
      title: "Cấp độ 3: Thế giới Hình học",
      englishTitle: "Level 3 — Geometry Universe",
      lessons: ["geo-lesson-1", "geo-lesson-2", "geo-lesson-3", "geo-lesson-4", "geo-lesson-5"],
      icon: "📐"
    },
    {
      level: 4,
      title: "Cấp độ 4: Thám tử Lập luận Logic",
      englishTitle: "Level 4 — Logical Thinking",
      lessons: ["logic-lesson-1", "logic-lesson-2", "logic-lesson-3", "logic-lesson-4", "logic-lesson-5"],
      icon: "🧠"
    },
    {
      level: 5,
      title: "Cấp độ 5: Bài toán Lời văn & Thực tế",
      englishTitle: "Level 5 — Word Problems",
      lessons: ["adv-lesson-1", "adv-lesson-2", "adv-lesson-3", "adv-lesson-4", "adv-lesson-5"],
      icon: "📚"
    },
    {
      level: 6,
      title: "Cấp độ 6: Đỉnh cao Tổ hợp & Đếm nhanh",
      englishTitle: "Level 6 — Combinatorics Master",
      lessons: ["comb-lesson-1", "comb-lesson-2", "comb-lesson-3", "comb-lesson-4", "comb-lesson-5"],
      icon: "🏆"
    }
  ]
};

window.TIMO_DATA = TIMO_DATA;

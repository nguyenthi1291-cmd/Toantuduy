# 📐 TIMO 1 Math Adventure — Nền Tảng Học & Luyện Thi Toán Lớp 1

Nền tảng học toán tương tác và chuẩn bị thi **Toán Quốc tế TIMO 1 (Thailand International Mathematical Olympiad)** dành cho học sinh **Lớp 1** với hệ thống **Đăng Ký / Đăng Nhập Tài Khoản Bắt Buộc**, lưu trữ tiến độ bài học, số điểm và đồng bộ đám mây Supabase.

---

## 🌟 Tính Năng Mới & Nổi Bật

1. **Cổng Đăng Nhập & Tạo Tài Khoản Bé Bắt Buộc (Mandatory Auth Gate)**:
   - Khi truy cập, hệ thống yêu cầu bé/phụ huynh **Đăng ký tài khoản mới** hoặc **Đăng nhập** trước khi vào học.
   - **Tạo tài khoản bé mới**:
     - Họ tên bé (Lớp 1)
     - Chọn Avatar biểu tượng ngộ nghĩnh (🦁 🐯 🐼 🦄 🚀 🦊 🐰 🐶 🦖 🦸 👑 🐱)
     - Tên đăng nhập / Email
     - Mật khẩu / Mã PIN bảo vệ
   - **Đăng nhập**: Nhập tài khoản + mật khẩu hoặc bấm chọn nhanh bé đã lưu trên thiết bị.
   - **Tách biệt dữ liệu**: Mỗi bé có kho dữ liệu riêng biệt (tiến độ 25 bài học, số sao, điểm XP, danh hiệu, lịch sử thi và các câu từng làm sai).

2. **Giao diện Trực Quan, Chuẩn Sư Phạm cho Bé Lớp 1**:
   - Thiết kế Bright, Friendly & Gamified với màu sắc tươi sáng, font chữ bo tròn dễ đọc (`Nunito`).
   - Mô phỏng toán học trực quan (quả táo 🍎, que tính, trục số 📏, khối hình 🔺🟦🔴, chia kẹo 🍬).
   - Hiệu ứng âm thanh sinh động (sử dụng Web Audio API không phụ thuộc file ngoài).

3. **Đầy Đủ 5 Chủ Đề Cốt Lõi (25 Bài Học + Hơn 105 Câu Hỏi)**:
   - **Số học (Arithmetic)**: Cộng trừ trong phạm vi 20, 100, tìm số chưa biết, quy luật dãy số.
   - **Hình học (Geometry)**: Nhận biết hình, đếm hình tam giác/chữ nhật, ghép hình, đếm đoạn thẳng, khối lập phương.
   - **Lập luận logic (Logical Thinking)**: Ngày thứ trong tuần, hôm qua - hôm nay - ngày mai, thứ tự xếp hàng, trái phải trước sau, suy luận loại trừ.
   - **Số học nâng cao (Advanced Arithmetic)**: Toán lời văn thêm bớt, trao đổi cân bằng, toán mua sắm thực tế, bài toán tính tuổi, sơ đồ đoạn thẳng.
   - **Tổ hợp (Combinatorics)**: Phối trang phục, lập số từ các thẻ số, bài toán tô màu, bắt tay/chọn cặp, chia bánh.

4. **Chế Độ Học Tập & Thi Đấu Đa Dạng**:
   - **Bài học theo chuẩn 6 bước**: Mục tiêu ➔ Lý thuyết trực quan ➔ Ví dụ mẫu có lời giải ➔ Luyện tập thực hành ➔ Nhận thưởng XP & Sao.
   - **Đấu Trường TIMO 1**: Bài thi thử 10 câu hỏi tổng hợp trong 15 phút có đồng hồ đếm ngược.
   - **Thử Thách Hàng Ngày (Daily Challenge)**: Làm mới mỗi ngày, duy trì chuỗi học liên tiếp (Streak 🔥).
   - **Trung Tâm Luyện Tập Tự Do (Practice Center)**: Tùy chọn chủ đề, cấp độ khó 1-3 sao và số lượng câu hỏi (5/10/20 câu).
   - **Góc Ôn Tập Câu Sai (Mistake Review)**: Tự động ghi nhớ câu hỏi bé trả lời sai để luyện lại đến khi thuần thục.

5. **Lưu Trữ Riêng Cho Từng Bé & Đồng Bộ Supabase Cloud**:
   - Tự động lưu tiến độ, XP, sao, huy hiệu, lịch sử bài làm theo `user_id`.
   - Kết nối và đồng bộ đám mây với **Supabase** (`https://zidaconljcntuvxtqkxy.supabase.co`).
   - File SQL khởi tạo bảng cơ sở dữ liệu `supabase_schema.sql`.

---

## 🚀 Hướng Dẫn Khởi Chạy & Sử Dụng

1. Mở trực tiếp file [index.html](file:///D:/TIMO/index.html) bằng trình duyệt web.
2. Màn hình Chào mừng & Đăng ký sẽ xuất hiện:
   - Bé nhập Tên, chọn Avatar yêu thích, tạo Tên đăng nhập và Mật khẩu/PIN ➔ Bấm **"Tạo Tài Khoản & Bắt Đầu Học Ngay"**.
3. Sau khi đăng nhập:
   - Bé có thể học 25 bài học, làm bài tập, thi thử TIMO, thu thập huy hiệu.
   - Muốn chuyển đổi bé khác hoặc đăng xuất: Bấm vào avatar của bé ở góc trên bên phải thanh Header ➔ Chọn **"Đổi sang tài khoản bé khác"** hoặc **"Đăng xuất"**.

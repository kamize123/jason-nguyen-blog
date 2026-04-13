import { StudyPlan } from './types';

// Optimized study plan for 650 → 900+ TOEIC score in 90 days
// Based on professional TOEIC instructor evaluation
// Target: August 15, 2026

export const studyPlanData: StudyPlan = {
  month1: [
    {
      week: "Tuần 1: Grammar Foundation & Listening Immersion",
      days: [
        { 
          day: "Thứ 2", 
          type: "Grammar", 
          icon: "book-open", 
          task: "12 Thì & Thể bị động nâng cao", 
          desc: "Làm rõ các thì hoàn thành và bị động trong câu phức - nền tảng cho Part 5-6.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 12 thì tiếng Anh, tập trung vào các thì hoàn thành (Present Perfect, Past Perfect, Future Perfect)
- Phân biệt rõ ràng giữa chủ động và bị động trong câu phức
- Nhận diện bẫy về thì và thể trong câu hỏi TOEIC Part 5-6
- Xây dựng khả năng phản xạ nhận biết time markers (since, for, by, already, yet, v.v.)

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Ôn tập lý thuyết (15 phút)*
1. Đọc hướng dẫn ngữ pháp 12 thì trên Study4.com
2. Chú ý đặc biệt đến:
   - Present Perfect vs. Simple Past (bẫy phổ biến nhất)
   - Present Perfect Continuous (nhấn mạnh thời lượng)
   - Thể bị động với động từ khuyết thiếu (must be done, should be completed)
3. Tạo bảng tham khảo nhanh: Thì → Time Marker → Ví dụ

*Giai đoạn 2: Luyện tập chủ động (20 phút)*
1. Làm 20 câu Part 5 tập trung vào động từ
2. Áp dụng quy trình cho MỖI câu:
   - Bước 1: Xác định time markers trong câu (2 giây)
   - Bước 2: Xác định chủ ngữ chủ động hay bị động (2 giây)
   - Bước 3: Chọn thì/thể đúng (2 giây)
   - Bước 4: Kiểm tra logic câu (4 giây)
   - **Tổng: <10 giây/câu**
3. Đánh dấu các câu không chắc chắn (kể cả khi đúng)

*Giai đoạn 3: Sửa lỗi sâu (5 phút)*
1. Với MỖI câu sai:
   - Viết lại câu đầy đủ với đáp án đúng
   - Xác định TẠI SAO chọn sai (bỏ sót time marker? nhầm thể?)
   - Tạo "ghi chú lỗi" để ôn sau
2. Với câu không chắc (kể cả đúng):
   - Xác nhận quy tắc ngữ pháp
   - Tạo câu ví dụ với cấu trúc tương tự

**Phân bổ thời gian:**
- Ôn lý thuyết: 15 phút
- Làm bài tập: 20 phút
- Sửa lỗi & ghi chú: 5 phút
- **Tổng: 40 phút**

**Kết quả mong đợi:**
- Đạt 18/20 câu trở lên (90% độ chính xác)
- Hoàn thành mỗi câu trong <10 giây
- Hiểu rõ sự khác biệt giữa các thì hoàn thành và thì đơn
- Tự tin nhận biết chủ động/bị động`,
          methodology: [
            "Giai đoạn 1: Ôn lý thuyết 12 thì từ Study4.com (15 phút)",
            "Giai đoạn 2: Làm 20 câu Part 5 về động từ (20 phút)",
            "Giai đoạn 3: Phân tích sâu mọi lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Ôn lý thuyết": 15,
            "Làm bài tập": 20,
            "Sửa lỗi & ghi chú": 5
          },
          commonMistakes: [
            "❌ Nhầm 'since' (mốc thời gian) với 'for' (khoảng thời gian) → Sai: 'I have worked here since 5 years' → Đúng: 'for 5 years' hoặc 'since 2021'",
            "❌ Dùng bị động khi chủ ngữ thực hiện hành động → Sai: 'The report was completed by the team' (khi team là chủ ngữ) → Đúng: 'The team completed the report'",
            "❌ Trộn lẫn thì trong cùng khung thời gian → Sai: 'He said he will come' → Đúng: 'He said he would come' (câu tường thuật)"
          ],
          instructorTips: [
            "💡 Tạo bảng 'time marker cheat sheet' và học thuộc: Present Perfect (already, yet, just, recently, since, for) vs. Simple Past (yesterday, ago, last week)",
            "💡 Với bị động, hỏi 'Ai làm?' Nếu câu trả lời rõ ràng/không quan trọng → dùng bị động. VD: 'The meeting was scheduled for 3 PM' (ai đặt lịch? không quan trọng)",
            "💡 Trong TOEIC, nếu thấy 'by + thời gian' → nghĩ đến thì Hoàn thành. VD: 'The project will have been completed by Friday' (Future Perfect)"
          ],
          checkpoints: [
            "✅ Hoàn thành 20 câu Part 5 về động từ trong <10 giây/câu",
            "✅ Đạt 18/20 câu trở lên (90% độ chính xác)",
            "✅ Tạo ghi chú lỗi cho tất cả câu sai",
            "✅ Giải thích được sự khác biệt Present Perfect vs. Simple Past bằng ví dụ của mình",
            "✅ Học thuộc bảng time markers"
          ], 
          link: "https://study4.com/grammar/12-thi-trong-tieng-anh/",
          additionalLinks: [
            { title: "Video: 12 Thì Tiếng Anh Chi Tiết", url: "https://www.youtube.com/watch?v=qjg_GUqU5gQ" },
            { title: "Bài tập Part 5 - Động từ", url: "https://study4.com/tests/toeic-part-5-training/" }
          ]
        },
        { 
          day: "Thứ 3", 
          type: "Vocab", 
          icon: "briefcase", 
          task: "Business Vocabulary: Contracts & Personnel", 
          desc: "Từ vựng then chốt về Hợp đồng và Nhân sự - xuất hiện nhiều trong TOEIC.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng chủ đề Contracts và Personnel
- Hiểu nghĩa và cách dùng trong ngữ cảnh kinh doanh
- Nhận biết collocations thường gặp (agreement with, negotiate for, terms and conditions)
- Áp dụng từ vựng vào câu thực tế

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
1. Truy cập Quizlet set "600 Essential Words - Contracts"
2. Học 40 từ với phương pháp:
   - Đọc từ + phiên âm
   - Đọc định nghĩa tiếng Anh (KHÔNG dịch sang tiếng Việt ngay)
   - Đọc câu ví dụ
   - Tưởng tượng tình huống sử dụng từ
3. Chú ý các collocations: sign an agreement, negotiate terms, binding contract

*Giai đoạn 2: Luyện tập (20 phút)*
1. Làm bài test Quizlet (chế độ Learn)
2. Viết 5 câu ví dụ thực tế với từ mới:
   - Liên quan đến công việc của bạn
   - Hoặc tình huống kinh doanh bạn biết
   - VD: "Our company negotiated a new contract with the supplier last month"
3. Đọc to các câu ví dụ (luyện phát âm)

*Giai đoạn 3: Ôn tập ngắt quãng (10 phút)*
1. Làm bài test Quizlet lần 2 (chế độ Test)
2. Mục tiêu: 100% chính xác
3. Ghi chú các từ vẫn còn nhầm lẫn

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Viết câu ví dụ: 20 phút
- Test & ôn tập: 10 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng (100%)
- Vượt qua Quizlet test với 100% độ chính xác
- Viết được 5 câu ví dụ thực tế
- Phát âm đúng các từ khó`,
          methodology: [
            "Giai đoạn 1: Học 40 từ vựng từ Quizlet (20 phút)",
            "Giai đoạn 2: Viết 5 câu ví dụ thực tế (20 phút)",
            "Giai đoạn 3: Test và ôn tập (10 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Viết câu ví dụ": 20,
            "Test & ôn tập": 10
          },
          commonMistakes: [
            "❌ Học từ bằng cách dịch sang tiếng Việt → Không hiểu nghĩa sâu → Sai: 'negotiate' = 'đàm phán' (chỉ dịch) → Đúng: Hiểu 'negotiate' = discuss to reach agreement",
            "❌ Không chú ý collocations → Sai: 'make an agreement' → Đúng: 'reach/sign an agreement'",
            "❌ Học từ đơn lẻ không có ngữ cảnh → Khó nhớ và áp dụng → Nên học trong câu ví dụ"
          ],
          instructorTips: [
            "💡 Học từ vựng qua NGỮ CẢNH, không học thuộc lòng danh sách. Tạo câu ví dụ liên quan đến công việc/cuộc sống của bạn",
            "💡 Chú ý COLLOCATIONS (từ đi với từ): sign a contract, negotiate terms, binding agreement. TOEIC thường test collocations",
            "💡 Dùng spaced repetition: Ôn lại sau 1 ngày, 3 ngày, 1 tuần. Quizlet có tính năng này",
            "💡 Đọc TO các từ và câu ví dụ → Giúp nhớ lâu hơn và cải thiện phát âm"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng chủ đề Contracts & Personnel",
            "✅ Vượt qua Quizlet test đạt 100%",
            "✅ Viết 5 câu ví dụ thực tế và đọc to",
            "✅ Ghi nhớ 10 collocations quan trọng",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ], 
          link: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/",
          additionalLinks: [
            { title: "Anki Deck: TOEIC Vocabulary 3000", url: "https://ankiweb.net/shared/decks/toeic" },
            { title: "Business English Collocations", url: "https://www.englishclub.com/business-english/collocations.htm" }
          ]
        },
        { 
          day: "Thứ 4", 
          type: "Listening", 
          icon: "headphones", 
          task: "Part 1 Mastery: 6/6 Perfection Strategy", 
          desc: "Chiến thuật đạt điểm tuyệt đối Part 1 - phần dễ nhất nhưng KHÔNG được sai.",
          detailedDesc: `**Mục tiêu học tập:**
- Đạt 6/6 điểm tuyệt đối trên TOEIC Part 1 (Photos)
- Nắm vững bẫy "being" cho vật thể vs. con người
- Nhận diện các distractor phổ biến (âm thanh tương tự, sai thì, sai chủ ngữ)
- Xây dựng tự tin cho phần dễ nhất của bài thi

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học chiến thuật (15 phút)*
1. Xem video: "TOEIC Part 1 Strategy - Common Traps"
2. Học 4 loại ảnh Part 1:
   - **Loại A**: Một người đang làm gì đó
   - **Loại B**: Nhiều người đang làm gì đó
   - **Loại C**: Vật thể/phong cảnh (KHÔNG có người)
   - **Loại D**: Hỗn hợp (người + vật)
3. Hiểu 3 bẫy phổ biến nhất:
   - **Bẫy 1**: Âm thanh tương tự (VD: "copying" vs. "coffee")
   - **Bẫy 2**: Sai thì (VD: "is being repaired" vs. "has been repaired")
   - **Bẫy 3**: Sai chủ ngữ (VD: "A man is sitting" khi ảnh là phụ nữ)

*Giai đoạn 2: Quy tắc "BEING" (10 phút)*
**QUY TẮC QUAN TRỌNG CHO 900+ ĐIỂM:**

- Với CON NGƯỜI: Dùng "is/are + V-ing" (hiện tại tiếp diễn)
  ✅ "A woman is walking down the street"
  ❌ "A woman is being walked" (vô nghĩa)
  
- Với VẬT THỂ: Dùng "is/are being + V-ed" (bị động tiếp diễn) CHỈ KHI hành động đang xảy ra NGAY BÂY GIỜ
  ✅ "A car is being repaired" (thợ đang sửa xe trong ảnh)
  ❌ "A car is being parked" (thường chỉ "is parked")
  
- Với VẬT THỂ (trạng thái): Dùng "is/are + V-ed" (bị động đơn)
  ✅ "Cars are parked in the lot" (trạng thái, không phải hành động)
  ✅ "A table is set for dinner" (trạng thái)

**GHI NHỚ**: Nếu nghe "being" với VẬT THỂ, hành động phải đang DIỄN RA trong ảnh. Nếu chỉ là trạng thái/kết quả, "being" là SAI.

*Giai đoạn 3: Luyện tập chuyên sâu (30 phút)*
1. Làm 5 bộ Part 1 đầy đủ từ ETS 2024 (30 câu tổng)
2. Quy trình cho MỖI câu:
   - **Trước khi nghe**: Quan sát ảnh 5 giây
     - Đếm số người (nếu có)
     - Xác định hành động/trạng thái chính
     - Chú ý các vật thể quan trọng
   - **Khi đang nghe**: Lắng nghe bẫy
     - Âm thanh tương tự? (coffee/copying)
     - Sai thì? (is/was/has been)
     - Sai chủ ngữ? (man/woman, số ít/số nhiều)
     - Bẫy "being"? (hành động vs. trạng thái)
   - **Sau khi nghe**: Chọn đáp án trong 2 giây
3. Mục tiêu: 28-30/30 đúng (93%+)

*Giai đoạn 4: Sửa lỗi sâu (5 phút)*
1. Với MỖI câu sai:
   - Nhìn lại ảnh - bạn bỏ sót gì?
   - Nghe lại audio - bạn rơi vào bẫy nào?
   - Ghi loại bẫy (âm tương tự, sai thì, sai chủ ngữ, bẫy being)
2. Tạo "Part 1 Trap Log" để theo dõi điểm yếu

**Phân bổ thời gian:**
- Học chiến thuật: 15 phút
- Quy tắc "being": 10 phút
- Luyện tập (30 câu): 30 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Đạt 28-30/30 trong luyện tập (93%+)
- Không sai câu nào về bẫy "being"
- Tự tin đạt 6/6 trong thi thật
- Hiểu rõ cả 4 loại ảnh`,
          methodology: [
            "Giai đoạn 1: Học chiến thuật và 3 bẫy phổ biến (15 phút)",
            "Giai đoạn 2: Nắm vững quy tắc 'being' (10 phút)",
            "Giai đoạn 3: Làm 30 câu Part 1 từ ETS 2024 (30 phút)",
            "Giai đoạn 4: Phân tích mọi lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học chiến thuật": 15,
            "Quy tắc being": 10,
            "Luyện tập": 30,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Chọn đáp án có từ NGHE GIỐNG từ trong ảnh → Ảnh: Quán cà phê → Bẫy: 'copying documents' (nghe giống 'coffee') → Đúng: 'sitting at a café'",
            "❌ Chọn 'being' cho vật ở TRẠNG THÁI (không phải hành động) → Ảnh: Xe đỗ trong bãi → Bẫy: 'Cars are being parked' → Đúng: 'Cars are parked'",
            "❌ Không để ý số ít/số nhiều → Ảnh: Hai phụ nữ đi bộ → Bẫy: 'A woman is walking' (số ít) → Đúng: 'Women are walking' (số nhiều)"
          ],
          instructorTips: [
            "💡 Part 1 là phần DỄ NHẤT của TOEIC. Bạn PHẢI đạt 6/6 để có 900+ điểm. Không có lý do gì để sai",
            "💡 Nếu không chắc, loại đáp án có: Từ KHÔNG có trong ảnh, Số lượng người sai (số ít/nhiều), 'Being' cho vật ở trạng thái",
            "💡 Luyện tập với mắt nhắm sau khi xem ảnh → Rèn tai nghe bắt bẫy",
            "💡 Đáp án đúng thường là mô tả ĐƠN GIẢN, RÕ RÀNG nhất của ảnh. Đừng nghĩ phức tạp"
          ],
          checkpoints: [
            "✅ Đạt 28-30/30 câu trong luyện tập (93%+)",
            "✅ Không sai câu nào về bẫy 'being'",
            "✅ Giải thích được quy tắc 'being' bằng lời của mình",
            "✅ Hoàn thành tất cả câu với tự tin (không đoán)",
            "✅ Tạo trap log cho mọi lỗi sai"
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "Video: Part 1 Strategy - TOEIC with Junia", url: "https://www.youtube.com/@TOEICwithJunia" },
            { title: "Part 1 Practice Tests", url: "https://study4.com/tests/toeic-part-1-training/" }
          ]
        },
        { 
          day: "Thứ 5", 
          type: "Skill", 
          icon: "zap", 
          task: "Word Form Speed Mastery: <10s/câu", 
          desc: "Nhận diện hậu tố nhanh như chớp - tiết kiệm thời gian quý báu trong Part 5.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 20 hậu tố phổ biến nhất trong TOEIC
- Đạt tốc độ <10 giây/câu cho câu hỏi từ loại
- Nhận biết ngay vị trí cần điền (danh từ, động từ, tính từ, trạng từ)
- Xây dựng phản xạ tự động cho Word Form

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học hậu tố (15 phút)*
**20 hậu tố PHẢI NHỚ:**

*Danh từ (Nouns):*
- -tion/-sion: information, decision
- -ment: development, agreement
- -ness: happiness, business
- -ity/-ty: ability, safety
- -ance/-ence: performance, difference

*Động từ (Verbs):*
- -ify: clarify, simplify
- -ize/-ise: organize, realize
- -ate: operate, create

*Tính từ (Adjectives):*
- -able/-ible: reliable, possible
- -ful: successful, helpful
- -less: useless, endless
- -ive: effective, active
- -ous: famous, dangerous

*Trạng từ (Adverbs):*
- -ly: quickly, carefully
- -ward: forward, backward

Tạo flashcards cho 20 hậu tố này

*Giai đoạn 2: Nhận diện vị trí (15 phút)*
**Quy tắc vị trí:**
1. **Sau mạo từ (a, an, the) + tính từ → DANH TỪ**
   - "The successful ___" → development (danh từ)
2. **Trước danh từ → TÍNH TỪ**
   - "The ___ report" → detailed (tính từ)
3. **Sau chủ ngữ, trước tân ngữ → ĐỘNG TỪ**
   - "The company ___ the project" → completed (động từ)
4. **Sau động từ, trước dấu phẩy/chấm → TRẠNG TỪ**
   - "He works ___" → carefully (trạng từ)

Làm 10 câu ví dụ để nhận diện vị trí

*Giai đoạn 3: Speed Drills (25 phút)*
1. Làm 30 câu Part 5 chuyên về từ loại
2. Quy trình NHANH cho mỗi câu:
   - Bước 1: Xác định vị trí cần điền (2 giây)
   - Bước 2: Xác định từ loại cần điền (2 giây)
   - Bước 3: Nhìn hậu tố của các đáp án (2 giây)
   - Bước 4: Chọn đáp án đúng (2 giây)
   - **Tổng: <10 giây/câu**
3. Dùng đồng hồ bấm giờ - ép thời gian
4. Mục tiêu: 28/30 đúng trong <5 phút

*Giai đoạn 4: Review & Speed Test (5 phút)*
1. Xem lại các câu sai
2. Làm lại 10 câu khó nhất với mắt nhắm (nghe đọc câu)
3. Kiểm tra tốc độ: Có đạt <10s/câu không?

**Phân bổ thời gian:**
- Học hậu tố: 15 phút
- Nhận diện vị trí: 15 phút
- Speed drills: 25 phút
- Review: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhớ 20 hậu tố phổ biến nhất
- Đạt 28/30 câu đúng (93%+)
- Hoàn thành mỗi câu trong <10 giây
- Tự tin với câu hỏi từ loại`,
          methodology: [
            "Giai đoạn 1: Học 20 hậu tố phổ biến (15 phút)",
            "Giai đoạn 2: Luyện nhận diện vị trí từ loại (15 phút)",
            "Giai đoạn 3: Speed drills với 30 câu (25 phút)",
            "Giai đoạn 4: Review và speed test (5 phút)"
          ],
          timeAllocation: {
            "Học hậu tố": 15,
            "Nhận diện vị trí": 15,
            "Speed drills": 25,
            "Review": 5
          },
          commonMistakes: [
            "❌ Nhầm -tion/-sion (danh từ) với -tive/-sive (tính từ) → 'information' (N) vs. 'informative' (Adj)",
            "❌ Chọn -ly (trạng từ) khi cần tính từ → Sai: 'a quickly decision' → Đúng: 'a quick decision'",
            "❌ Không nhận ra vị trí cần điền → Mất thời gian đọc cả câu → Nên nhìn cấu trúc trước"
          ],
          instructorTips: [
            "💡 Tạo flashcards cho 20 hậu tố và ôn HÀNG NGÀY. Sau 1 tuần, bạn sẽ nhận biết TỰ ĐỘNG",
            "💡 Với câu Word Form, KHÔNG cần đọc hiểu cả câu. Chỉ cần nhìn VỊ TRÍ và HẬU TỐ",
            "💡 Luyện với đồng hồ bấm giờ. Ép thời gian <10s/câu. Trong thi thật, Part 5-6 chỉ có 15 phút cho 40 câu",
            "💡 Nếu không chắc, chọn đáp án có hậu tố PHỔ BIẾN nhất (-tion, -ment, -able, -ly)"
          ],
          checkpoints: [
            "✅ Ghi nhớ 20 hậu tố phổ biến nhất",
            "✅ Làm 30 câu Part 5 từ loại đạt 28/30 (93%+)",
            "✅ Hoàn thành mỗi câu trong <10 giây",
            "✅ Tạo flashcards và lên lịch ôn hàng ngày",
            "✅ Tự tin nhận diện vị trí cần điền chỉ bằng mắt"
          ], 
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Video: Word Form Tricks - TOEIC", url: "https://www.youtube.com/results?search_query=word+form+toeic+tricks" },
            { title: "Flashcards: 20 Common Suffixes", url: "https://quizlet.com/search?query=toeic%20suffixes&type=sets" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Listening",
          icon: "mic",
          task: "Daily Listening Immersion: Shadowing Practice",
          desc: "Luyện shadowing hàng ngày - chìa khóa cải thiện listening nhanh chóng.",
          detailedDesc: `**Mục tiêu học tập:**
- Xây dựng thói quen shadowing (nhại lại) HÀNG NGÀY
- Cải thiện khả năng nhận diện âm thanh tự nhiên
- Tăng tốc độ xử lý ngôn ngữ (language processing speed)
- Làm quen với giọng nói, ngữ điệu, và nhịp điệu của người bản xứ

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Chọn tài liệu (5 phút)*
1. Chọn 1 đoạn hội thoại Part 3 hoặc bài nói Part 4 từ Study4.com
2. Tiêu chí chọn:
   - Độ dài: 30-60 giây
   - Độ khó: Vừa phải (hiểu được 70-80%)
   - Chủ đề: Liên quan công việc/kinh doanh
3. KHÔNG xem transcript (bản văn) trước

*Giai đoạn 2: Nghe và hiểu (10 phút)*
1. Nghe đoạn audio 3 lần:
   - Lần 1: Nghe tổng quan, hiểu ý chính
   - Lần 2: Chú ý từng câu, từng từ
   - Lần 3: Chú ý ngữ điệu, nhấn giọng
2. Ghi chú những từ/cụm từ không nghe rõ
3. Chỉ xem transcript NẾU thực sự không hiểu (sau 3 lần nghe)

*Giai đoạn 3: Shadowing (20 phút)*
**Kỹ thuật Shadowing:**
1. Phát audio và ĐỒNG THỜI nhại lại (delay 0.5-1 giây)
2. Tập trung vào:
   - Phát âm chính xác
   - Ngữ điệu giống người nói
   - Nhịp điệu và tốc độ
   - Weak forms (từ phát âm yếu: a, the, to, of)
   - Linking sounds (nối âm giữa các từ)
3. Lặp lại 10-15 lần cho đến khi:
   - Nói trơn tru, không vấp
   - Ngữ điệu khớp 90% với audio
   - Tự tin với tốc độ

*Giai đoạn 4: Self-assessment (5 phút)*
1. Thu âm lại lần shadowing cuối cùng của bạn
2. So sánh với audio gốc:
   - Phát âm: Có đúng không?
   - Ngữ điệu: Có tự nhiên không?
   - Tốc độ: Có theo kịp không?
3. Ghi chú điểm cần cải thiện cho ngày mai

**Phân bổ thời gian:**
- Chọn tài liệu: 5 phút
- Nghe và hiểu: 10 phút
- Shadowing: 20 phút
- Self-assessment: 5 phút
- **Tổng: 40 phút**

**Kết quả mong đợi:**
- Hoàn thành 10-15 lần shadowing
- Ngữ điệu khớp 90% với audio gốc
- Phát âm cải thiện rõ rệt
- Tự tin hơn với listening`,
          methodology: [
            "Giai đoạn 1: Chọn 1 đoạn Part 3 hoặc Part 4 (5 phút)",
            "Giai đoạn 2: Nghe 3 lần để hiểu (10 phút)",
            "Giai đoạn 3: Shadowing 10-15 lần (20 phút)",
            "Giai đoạn 4: Thu âm và tự đánh giá (5 phút)"
          ],
          timeAllocation: {
            "Chọn tài liệu": 5,
            "Nghe và hiểu": 10,
            "Shadowing": 20,
            "Self-assessment": 5
          },
          commonMistakes: [
            "❌ Xem transcript TRƯỚC KHI nghe → Mất cơ hội luyện tai → Nên nghe trước, xem transcript SAU (nếu cần)",
            "❌ Shadowing quá chậm → Không theo kịp tốc độ tự nhiên → Nên bắt đầu chậm rồi tăng dần tốc độ",
            "❌ Chỉ tập trung phát âm, bỏ qua ngữ điệu → Nghe không tự nhiên → Phải chú ý CẢ ngữ điệu và nhịp điệu"
          ],
          instructorTips: [
            "💡 Shadowing là KỸ THUẬT MẠNH NHẤT để cải thiện listening. Luyện HÀNG NGÀY 20 phút = +100 điểm LC trong 3 tháng",
            "💡 Đừng lo nếu ban đầu không theo kịp. Bắt đầu với đoạn NGẮN (30 giây) và DỄ (70-80% hiểu). Tăng dần độ khó",
            "💡 Chú ý WEAK FORMS: 'to' phát âm /tə/, 'and' phát âm /ən/, 'of' phát âm /əv/. Đây là lý do nhiều người nghe không rõ",
            "💡 Thu âm lại giọng của bạn → So sánh với gốc → Bạn sẽ THẤY sự tiến bộ rõ ràng sau 1 tuần"
          ],
          checkpoints: [
            "✅ Chọn 1 đoạn Part 3/4 phù hợp độ khó",
            "✅ Nghe 3 lần trước khi xem transcript",
            "✅ Shadowing 10-15 lần đến khi trơn tru",
            "✅ Ngữ điệu khớp 90% với audio gốc",
            "✅ Thu âm và so sánh với gốc"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "Video: How to Shadow Effectively", url: "https://www.youtube.com/results?search_query=shadowing+technique+english" },
            { title: "Shadowing Practice Materials", url: "https://www.youtube.com/@TOEICwithJunia" }
          ]
        }
      ]
    }
  ],
  month2: [],
  month3: []
};

export const TARGET_DATE = "2026-08-15T00:00:00";

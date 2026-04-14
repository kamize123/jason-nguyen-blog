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
          // Legacy fields (for backward compatibility)
          link: "https://study4.com/grammar/12-thi-trong-tieng-anh/",
          additionalLinks: [
            { title: "Video: 12 Thì Tiếng Anh Chi Tiết", url: "https://www.youtube.com/watch?v=qjg_GUqU5gQ" },
            { title: "Bài tập Part 5 - Động từ", url: "https://study4.com/tests/toeic-part-5-training/" }
          ],
          // Enhanced resource fields
          primaryResource: {
            title: "12 Thì Tiếng Anh - Study4 Grammar Hub",
            url: "https://study4.com/hoc-tieng-anh/ngu-phap/",
            metadata: {
              type: 'web',
              isFree: true,
              estimatedTime: 15,
              difficulty: 'beginner',
              chapters: 'Đọc phần 12 Thì, tập trung Present Perfect & Past Perfect',
              language: 'vi',
              notes: 'Link gốc bị lỗi 404. Dùng Grammar Hub → chọn "12 Thì". Cần đăng ký tài khoản Study4 (miễn phí).',
              status: 'working'
            }
          },
          additionalResources: [
            {
              title: "Video: 12 Thì Tiếng Anh Chi Tiết",
              url: "https://www.youtube.com/watch?v=qjg_GUqU5gQ",
              metadata: {
                type: 'video',
                isFree: true,
                estimatedTime: 20,
                difficulty: 'beginner',
                language: 'vi',
                notes: 'Xem trước khi học lý thuyết để có overview',
                status: 'working'
              }
            },
            {
              title: "Bài tập Part 5 - Study4 Practice Hub",
              url: "https://study4.com/luyen-thi-toeic/",
              metadata: {
                type: 'web',
                isFree: true,
                estimatedTime: 20,
                difficulty: 'intermediate',
                chapters: 'Chọn Part 5, filter theo "Động từ"',
                language: 'both',
                notes: 'Link gốc lỗi 404. Dùng Practice Hub → Part 5 → 20 câu về thì/thể. Cần đăng ký Study4.',
                status: 'working'
              }
            }
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
          // Legacy fields
          link: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/",
          additionalLinks: [
            { title: "Anki Deck: TOEIC Vocabulary 3000", url: "https://ankiweb.net/shared/decks/toeic" },
            { title: "Business English Collocations", url: "https://www.englishclub.com/business-english/collocations.htm" }
          ],
          // Enhanced resources
          primaryResource: {
            title: "600 Essential Words - Lesson 1: Contracts",
            url: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/",
            metadata: {
              type: 'app',
              isFree: true,
              estimatedTime: 20,
              difficulty: 'intermediate',
              chapters: 'Học 40 từ vựng, dùng chế độ Learn → Test',
              language: 'both',
              notes: 'Tạo tài khoản Quizlet miễn phí. Premium không bắt buộc. Sử dụng chức năng Learn (miễn phí) và Test.',
              status: 'working'
            }
          },
          additionalResources: [
            {
              title: "Anki Shared Decks - TOEIC Vocabulary",
              url: "https://ankiweb.net/shared/decks/toeic",
              metadata: {
                type: 'app',
                isFree: true,
                estimatedTime: 15,
                difficulty: 'intermediate',
                chapters: 'Download deck "TOEIC 3000 Essential Words"',
                language: 'both',
                notes: 'Cài Anki desktop (miễn phí) hoặc iOS app ($24.99 one-time). Android miễn phí. Spaced repetition rất hiệu quả.',
                status: 'working'
              }
            },
            {
              title: "Business English Vocabulary Hub - EnglishClub",
              url: "https://www.englishclub.com/business-english/vocabulary.php",
              metadata: {
                type: 'web',
                isFree: true,
                estimatedTime: 10,
                difficulty: 'intermediate',
                chapters: 'Browse Collocations section',
                language: 'en',
                notes: 'Link gốc lỗi 404. Dùng vocabulary hub → tìm collocations (sign agreement, negotiate terms).',
                status: 'working'
              }
            }
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
          // Legacy fields
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "Video: Part 1 Strategy - TOEIC with Junia", url: "https://www.youtube.com/@TOEICwithJunia" },
            { title: "Part 1 Practice Tests", url: "https://study4.com/tests/toeic-part-1-training/" }
          ],
          // Enhanced resources
          primaryResource: {
            title: "Part 1 Practice - Study4 TOEIC Hub",
            url: "https://study4.com/luyen-thi-toeic/",
            metadata: {
              type: 'web',
              isFree: true,
              estimatedTime: 30,
              difficulty: 'beginner',
              chapters: 'Chọn Listening → Part 1 → Làm 30 câu',
              language: 'both',
              notes: 'Link gốc ETS test lỗi 404. Dùng Practice Hub → Part 1. Làm nhiều set khác nhau. Cần đăng ký Study4 (miễn phí).',
              status: 'working'
            }
          },
          additionalResources: [
            {
              title: "Video: TOEIC Part 1 Strategy",
              url: "https://www.youtube.com/results?search_query=toeic+listening+part+1+strategy",
              metadata: {
                type: 'video',
                isFree: true,
                estimatedTime: 15,
                difficulty: 'beginner',
                language: 'en',
                notes: 'Channel "TOEIC with Junia" đã bị xóa. Tìm video với >10K views, upload <2 years. Focus: being trap, photo types.',
                status: 'working'
              }
            },
            {
              title: "ETS Official Guide - Part 1 Sample",
              url: "https://www.ets.org/toeic/test-takers/listening-reading/prepare/sample-questions.html",
              metadata: {
                type: 'web',
                isFree: true,
                estimatedTime: 10,
                difficulty: 'beginner',
                chapters: 'Part 1 sample questions only',
                language: 'en',
                notes: 'Sample từ ETS chính thức. Chất lượng cao nhất, giống thi thật.',
                status: 'working'
              }
            }
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
          // Legacy fields
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Video: Word Form Tricks - TOEIC", url: "https://www.youtube.com/results?search_query=word+form+toeic+tricks" },
            { title: "Flashcards: 20 Common Suffixes", url: "https://quizlet.com/search?query=toeic%20suffixes&type=sets" }
          ],
          // Enhanced resources
          primaryResource: {
            title: "Part 5 Word Form Practice - Study4 Hub",
            url: "https://study4.com/luyen-thi-toeic/",
            metadata: {
              type: 'web',
              isFree: true,
              estimatedTime: 25,
              difficulty: 'intermediate',
              chapters: 'Chọn Part 5 → Filter "Từ loại" (Word Form) → Làm 30 câu',
              language: 'both',
              notes: 'Link gốc lỗi 404. Dùng Practice Hub. Ép thời gian <10s/câu. Cần đăng ký Study4 (miễn phí).',
              status: 'working'
            }
          },
          additionalResources: [
            {
              title: "Video: Word Form Tricks & Speed Techniques",
              url: "https://www.youtube.com/results?search_query=word+form+toeic+tricks",
              metadata: {
                type: 'video',
                isFree: true,
                estimatedTime: 15,
                difficulty: 'intermediate',
                language: 'en',
                notes: 'Chọn video focus: suffix patterns, position recognition, <10s strategy.',
                status: 'working'
              }
            },
            {
              title: "Quizlet: TOEIC Suffixes Flashcards",
              url: "https://quizlet.com/search?query=toeic%20suffixes&type=sets",
              metadata: {
                type: 'app',
                isFree: true,
                estimatedTime: 10,
                difficulty: 'beginner',
                chapters: 'Chọn deck có 20+ suffixes',
                language: 'both',
                notes: 'Học thuộc 20 hậu tố: -tion, -ment, -ly, -ive, -ful, etc. Ôn hàng ngày.',
                status: 'working'
              }
            }
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
          // Legacy fields
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "Video: How to Shadow Effectively", url: "https://www.youtube.com/results?search_query=shadowing+technique+english" },
            { title: "Shadowing Practice Materials", url: "https://www.youtube.com/@TOEICwithJunia" }
          ],
          // Enhanced resources
          primaryResource: {
            title: "Part 3/4 Audio for Shadowing - Study4 Hub",
            url: "https://study4.com/luyen-thi-toeic/",
            metadata: {
              type: 'web',
              isFree: true,
              estimatedTime: 20,
              difficulty: 'intermediate',
              chapters: 'Chọn Listening → Part 3 hoặc Part 4 → Pick 1 conversation/talk',
              language: 'both',
              notes: 'Link gốc lỗi 404. Dùng Practice Hub. Chọn đoạn 30-60s, độ khó vừa. Nghe 3 lần trước khi shadow. Cần đăng ký Study4.',
              status: 'working'
            }
          },
          additionalResources: [
            {
              title: "Video: Shadowing Technique Tutorial",
              url: "https://www.youtube.com/results?search_query=shadowing+technique+english",
              metadata: {
                type: 'video',
                isFree: true,
                estimatedTime: 10,
                difficulty: 'beginner',
                language: 'en',
                notes: 'Xem TRƯỚC khi bắt đầu shadow. Focus: delay timing, weak forms, intonation matching.',
                status: 'working'
              }
            },
            {
              title: "BBC Learning English - 6 Minute English",
              url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
              metadata: {
                type: 'audio',
                isFree: true,
                estimatedTime: 20,
                difficulty: 'intermediate',
                chapters: 'Chọn episode gần đây, có transcript',
                language: 'en',
                notes: 'Alternative cho shadowing. Natural British English. Download transcript để check.',
                status: 'working'
              }
            }
          ]
        }
      ]
    },
    {
      week: "Tuần 2: Part 2 & Vocabulary Building",
      days: [
        {
          day: "Thứ 2",
          type: "Listening",
          icon: "headphones",
          task: "Part 2 Question Types: 5 Dạng Câu Hỏi",
          desc: "Nắm vững 5 dạng câu hỏi Part 2 - WH questions, Yes/No, Choice, Statement, Tag questions.",
          detailedDesc: `**Mục tiêu học tập:**
- Nhận diện 5 dạng câu hỏi Part 2 trong 1 giây đầu tiên
- Nắm vững chiến thuật cho từng dạng câu hỏi
- Tránh bẫy "similar sound" và "indirect answer"
- Đạt 23/25 câu Part 2 (92%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học 5 dạng câu hỏi (20 phút)*
**5 DẠNG CÂU HỎI PART 2:**

1. **WH-Questions (50% câu hỏi)**
   - Who, What, When, Where, Why, How
   - Chiến thuật: Tập trung vào từ hỏi ĐẦU TIÊN
   - Bẫy: Đáp án có từ giống trong câu hỏi
   - VD: "Where is the meeting?" → Bẫy: "The meeting is important" (có "meeting")

2. **Yes/No Questions (20% câu hỏi)**
   - Do you...? Have you...? Is it...?
   - Chiến thuật: Đáp án KHÔNG nhất thiết là Yes/No trực tiếp
   - Đúng: "I'm not sure" / "Let me check"
   - VD: "Have you finished?" → "Almost done" (gián tiếp)

3. **Choice Questions (15% câu hỏi)**
   - "A or B?"
   - Chiến thuật: Đáp án có thể là A, B, HOẶC cả hai/không cái nào
   - VD: "Coffee or tea?" → "Either is fine"

4. **Statement + Response (10% câu hỏi)**
   - "I can't find the report"
   - Chiến thuật: Đáp án phải LIÊN QUAN logic
   - VD: "I can't find it" → "Check your desk"

5. **Tag Questions (5% câu hỏi)**
   - "..., isn't it?" / "..., don't you?"
   - Chiến thuật: Trả lời như Yes/No question
   - VD: "Nice weather, isn't it?" → "Yes, it is"

*Giai đoạn 2: Học bẫy phổ biến (15 phút)*
**3 BẪY CHÍNH PART 2:**

1. **Similar Sound Trap**
   - Q: "Where can I PARK?"
   - Bẫy: "In the PARK" (âm giống)
   - Đúng: "In the garage"

2. **Word Repetition Trap**
   - Q: "When is the MEETING?"
   - Bẫy: "The MEETING room is on 3rd floor" (lặp từ)
   - Đúng: "At 2 PM"

3. **Indirect Answer Trap**
   - Q: "Have you seen John?"
   - Sai: Chờ Yes/No
   - Đúng: "He's in his office" (gián tiếp = Yes)

*Giai đoạn 3: Luyện tập (20 phút)*
1. Làm 50 câu Part 2 từ ETS 2024
2. Quy trình cho MỖI câu:
   - Nghe từ ĐẦU TIÊN → Xác định dạng (WH/Yes-No/Choice)
   - Loại đáp án có: Âm giống, Lặp từ, Không liên quan
   - Chọn đáp án logic nhất
3. Mục tiêu: 45/50 đúng (90%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Phân loại lỗi: Bẫy âm thanh? Lặp từ? Không hiểu câu hỏi?
2. Nghe lại 5 lần các câu sai
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học 5 dạng câu hỏi: 20 phút
- Học bẫy phổ biến: 15 phút
- Luyện tập 50 câu: 20 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhận diện 5 dạng câu hỏi trong 1 giây
- Đạt 45/50 câu (90%+)
- Không rơi vào bẫy âm thanh/lặp từ
- Tự tin với indirect answers`,
          methodology: [
            "Giai đoạn 1: Học 5 dạng câu hỏi Part 2 (20 phút)",
            "Giai đoạn 2: Học 3 bẫy phổ biến (15 phút)",
            "Giai đoạn 3: Làm 50 câu Part 2 (20 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học dạng câu hỏi": 20,
            "Học bẫy": 15,
            "Luyện tập": 20,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Chọn đáp án có từ GIỐNG trong câu hỏi → Q: 'Where is the PARK?' → Bẫy: 'The PARK is beautiful' → Đúng: 'On Main Street'",
            "❌ Chờ Yes/No cho Yes/No questions → Q: 'Is it ready?' → Không chỉ 'Yes/No' → Có thể 'Almost' / 'Not yet'",
            "❌ Bỏ qua từ hỏi ĐẦU TIÊN → Không nghe 'Who/What/When' → Chọn sai dạng đáp án"
          ],
          instructorTips: [
            "💡 Part 2 khó hơn Part 1 vì KHÔNG có hình ảnh. Phải nghe RẤT TẬP TRUNG từ đầu tiên",
            "💡 Nếu nghe thấy từ trong câu hỏi LẶP LẠI trong đáp án → 90% là BẪY",
            "💡 Đáp án đúng thường là GIÁN TIẾP, không trả lời trực tiếp. VD: 'Have you eaten?' → 'I'm hungry' (= No)",
            "💡 Luyện Part 2 HÀNG NGÀY 20 phút. Đây là phần cải thiện NHANH nhất"
          ],
          checkpoints: [
            "✅ Nhận diện 5 dạng câu hỏi trong 1 giây",
            "✅ Làm 50 câu đạt 45/50 (90%+)",
            "✅ Không sai câu nào về bẫy lặp từ",
            "✅ Hiểu rõ indirect answers",
            "✅ Tạo error log cho mọi lỗi"
          ],
          link: "https://study4.com/tests/toeic-part-2-training/",
          additionalLinks: [
            { title: "Video: Part 2 Strategy", url: "https://www.youtube.com/@TOEICwithJunia" },
            { title: "Part 2 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Vocab",
          icon: "briefcase",
          task: "Office & Technology Vocabulary",
          desc: "40 từ vựng văn phòng và công nghệ - chủ đề xuất hiện nhiều nhất TOEIC.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng Office & Technology
- Hiểu collocations: technical support, software update, office supplies
- Áp dụng từ vựng vào câu thực tế
- Nhận biết từ trong listening và reading

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
**40 TỪ VỰNG OFFICE & TECHNOLOGY:**

*Office Equipment:*
- printer, scanner, photocopier, fax machine
- projector, whiteboard, filing cabinet
- stapler, hole punch, paper clip

*Technology:*
- software, hardware, database, server
- network, bandwidth, download, upload
- password, encryption, backup, virus

*Office Actions:*
- install, configure, troubleshoot, upgrade
- format, scan, print, attach, forward

*Common Phrases:*
- technical support, IT department
- system crash, network connection
- software update, data backup

Học từ Quizlet với flashcards

*Giai đoạn 2: Collocations (15 phút)*
**COLLOCATIONS QUAN TRỌNG:**
- install software (NOT "put software")
- technical support (NOT "technology support")
- network connection (NOT "network connecting")
- system crash (NOT "system break")

Viết 10 câu với collocations

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm Quizlet test (chế độ Learn)
2. Viết 5 câu ví dụ thực tế
3. Đọc to các câu (luyện phát âm)
4. Làm lại test (chế độ Test) → Mục tiêu 100%

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Học collocations: 15 phút
- Luyện tập: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng
- Nắm vững 10 collocations
- Viết 5 câu ví dụ thực tế
- Đạt 100% Quizlet test`,
          methodology: [
            "Giai đoạn 1: Học 40 từ Office & Technology (20 phút)",
            "Giai đoạn 2: Học collocations quan trọng (15 phút)",
            "Giai đoạn 3: Test và viết câu ví dụ (15 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Collocations": 15,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Dùng 'put software' thay vì 'install software'",
            "❌ Nhầm 'printer' (máy in) với 'print' (động từ in)",
            "❌ Không phân biệt 'download' (tải xuống) vs 'upload' (tải lên)"
          ],
          instructorTips: [
            "💡 Office & Technology là chủ đề #1 trong TOEIC. Học thuộc 40 từ này = +50 điểm",
            "💡 Chú ý PHÁT ÂM: 'data' /ˈdeɪtə/ (Anh) hoặc /ˈdætə/ (Mỹ), 'router' /ˈruːtər/",
            "💡 Tạo câu ví dụ liên quan công việc của bạn → Nhớ lâu hơn",
            "💡 Ôn lại sau 1 ngày, 3 ngày, 1 tuần (spaced repetition)"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng Office & Technology",
            "✅ Nắm vững 10 collocations quan trọng",
            "✅ Viết 5 câu ví dụ thực tế",
            "✅ Đạt 100% Quizlet test",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ],
          link: "https://quizlet.com/vn/515287662/600-essential-words-for-the-toeic-lesson-2-office-technology-flash-cards/",
          additionalLinks: [
            { title: "Video: Office Vocabulary", url: "https://www.youtube.com/results?search_query=office+vocabulary+toeic" },
            { title: "Technology Vocabulary Quiz", url: "https://www.englishclub.com/business-english/vocabulary-technology.htm" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Grammar",
          icon: "book-open",
          task: "Prepositions & Conjunctions",
          desc: "Giới từ và liên từ - bẫy phổ biến trong Part 5-6.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 20 giới từ phổ biến nhất (in, on, at, by, for, to, with, from, about, of)
- Phân biệt liên từ (and, but, or, so, because, although, if, when)
- Nhận diện prepositional phrases (in charge of, in accordance with)
- Đạt 18/20 câu Part 5 về giới từ/liên từ

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Học giới từ (15 phút)*
**GIỚI TỪ THỜI GIAN:**
- in: tháng/năm/mùa (in May, in 2024, in summer)
- on: ngày/thứ (on Monday, on June 15th)
- at: giờ (at 3 PM, at noon)

**GIỚI TỪ ĐỊA ĐIỂM:**
- in: trong (in the office, in Tokyo)
- on: trên bề mặt (on the desk, on the wall)
- at: tại điểm (at the station, at 123 Main St)

**PREPOSITIONAL PHRASES:**
- in charge of, in accordance with, in addition to
- on behalf of, on time, on schedule
- at the expense of, at the request of

*Giai đoạn 2: Học liên từ (10 phút)*
**LIÊN TỪ KẾT HỢP (Coordinating):**
- and, but, or, so, for, yet, nor

**LIÊN TỪ PHỤ THUỘC (Subordinating):**
- because, although, if, when, while, since, unless

**Quy tắc:**
- Sau liên từ phụ thuộc → Mệnh đề đầy đủ (S + V)
- VD: "Although it was raining, we went out"

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm 20 câu Part 5 về giới từ/liên từ
2. Quy trình:
   - Xác định loại từ cần điền (giới từ hay liên từ?)
   - Nếu giới từ: Xem danh từ/động từ đi với giới từ nào
   - Nếu liên từ: Xem quan hệ logic giữa 2 mệnh đề
3. Mục tiêu: 18/20 đúng (90%+)

**Phân bổ thời gian:**
- Học giới từ: 15 phút
- Học liên từ: 10 phút
- Luyện tập: 15 phút
- **Tổng: 40 phút**

**Kết quả mong đợi:**
- Nhớ 20 giới từ phổ biến
- Phân biệt rõ liên từ kết hợp/phụ thuộc
- Đạt 18/20 câu Part 5
- Nắm vững prepositional phrases`,
          methodology: [
            "Giai đoạn 1: Học 20 giới từ và prepositional phrases (15 phút)",
            "Giai đoạn 2: Học liên từ kết hợp và phụ thuộc (10 phút)",
            "Giai đoạn 3: Làm 20 câu Part 5 (15 phút)"
          ],
          timeAllocation: {
            "Học giới từ": 15,
            "Học liên từ": 10,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Nhầm 'in time' (kịp giờ) với 'on time' (đúng giờ) → 'We arrived in time for the meeting' (kịp) vs 'on time' (đúng 3 PM)",
            "❌ Dùng 'although' với 'but' trong cùng câu → Sai: 'Although it rained, but we went' → Đúng: 'Although it rained, we went'",
            "❌ Nhầm 'because' (vì) với 'because of' (vì + danh từ) → 'because it rained' vs 'because of the rain'"
          ],
          instructorTips: [
            "💡 Học giới từ qua COLLOCATIONS, không học đơn lẻ: 'interested in', 'good at', 'responsible for'",
            "💡 Với thời gian: in (dài), on (ngày), at (giờ) → in May, on Monday, at 3 PM",
            "💡 TOEIC thích test prepositional phrases: 'in accordance with', 'on behalf of' → Học thuộc 20 phrases phổ biến",
            "💡 Nếu không chắc giới từ, đọc câu TO RA → Tai sẽ nhận biết giới từ đúng"
          ],
          checkpoints: [
            "✅ Nhớ 20 giới từ phổ biến nhất",
            "✅ Phân biệt liên từ kết hợp/phụ thuộc",
            "✅ Làm 20 câu Part 5 đạt 18/20 (90%+)",
            "✅ Học thuộc 10 prepositional phrases",
            "✅ Tạo flashcards cho giới từ"
          ],
          link: "https://study4.com/grammar/gioi-tu-trong-tieng-anh/",
          additionalLinks: [
            { title: "Video: Prepositions of Time", url: "https://www.youtube.com/results?search_query=prepositions+of+time+place" },
            { title: "Conjunctions Practice", url: "https://study4.com/tests/toeic-part-5-training/" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Skill",
          icon: "file-text",
          task: "Speed Reading Part 7 Single Passages",
          desc: "Đọc nhanh Part 7 đoạn đơn - nền tảng cho đoạn kép và bộ ba.",
          detailedDesc: `**Mục tiêu học tập:**
- Đọc 1 đoạn Part 7 đơn trong 2-3 phút (bao gồm trả lời câu hỏi)
- Nắm vững kỹ thuật skimming (đọc lướt) và scanning (quét thông tin)
- Nhận diện 5 dạng câu hỏi Part 7
- Đạt 9/10 câu đúng cho đoạn đơn

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học kỹ thuật đọc (15 phút)*
**KỸ THUẬT SKIMMING (đọc lướt):**
1. Đọc tiêu đề/chủ đề (5 giây)
2. Đọc câu đầu mỗi đoạn (10 giây)
3. Nắm ý chính toàn bài (15 giây tổng)

**KỸ THUẬT SCANNING (quét thông tin):**
1. Đọc câu hỏi TRƯỚC
2. Xác định từ khóa (tên, số, ngày tháng)
3. Quét bài tìm từ khóa
4. Đọc kỹ câu chứa từ khóa
5. Chọn đáp án

**5 DẠNG CÂU HỎI PART 7:**
1. Main idea (ý chính)
2. Detail (chi tiết cụ thể)
3. Inference (suy luận)
4. Vocabulary (từ vựng trong ngữ cảnh)
5. NOT/TRUE questions

*Giai đoạn 2: Luyện tập (30 phút)*
1. Làm 5 đoạn Part 7 đơn (10 câu hỏi)
2. Quy trình cho MỖI đoạn:
   - Skim toàn bài (15 giây)
   - Đọc câu hỏi 1 → Scan tìm đáp án (30 giây)
   - Đọc câu hỏi 2 → Scan tìm đáp án (30 giây)
   - Tổng: 2-3 phút/đoạn
3. Mục tiêu: 9/10 đúng (90%+)

*Giai đoạn 3: Sửa lỗi (5 phút)*
1. Với câu sai: Tìm lại thông tin trong bài
2. Xác định lỗi: Đọc không kỹ? Suy luận sai?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học kỹ thuật: 15 phút
- Luyện tập 5 đoạn: 30 phút
- Sửa lỗi: 5 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Đọc 1 đoạn trong 2-3 phút
- Đạt 9/10 câu đúng
- Thành thạo skimming/scanning
- Nhận diện 5 dạng câu hỏi`,
          methodology: [
            "Giai đoạn 1: Học kỹ thuật skimming và scanning (15 phút)",
            "Giai đoạn 2: Làm 5 đoạn Part 7 đơn (30 phút)",
            "Giai đoạn 3: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học kỹ thuật": 15,
            "Luyện tập": 30,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Đọc TOÀN BỘ bài trước khi xem câu hỏi → Mất thời gian → Nên đọc câu hỏi TRƯỚC, rồi scan tìm đáp án",
            "❌ Đọc từng từ → Quá chậm → Nên đọc theo CỤM TỪ (phrase reading)",
            "❌ Dựa vào kiến thức bên ngoài → Chọn sai → Chỉ dựa vào THÔNG TIN TRONG BÀI"
          ],
          instructorTips: [
            "💡 Part 7 chiếm 54 câu (hơn 50% Reading). Đây là phần QUAN TRỌNG NHẤT để tăng điểm RC",
            "💡 KHÔNG đọc toàn bộ bài. Đọc câu hỏi → Scan tìm từ khóa → Đọc kỹ câu đó → Chọn đáp án",
            "💡 Với câu Main Idea: Đọc tiêu đề + câu đầu mỗi đoạn → Chọn đáp án TỔNG QUÁT nhất",
            "💡 Luyện đọc HÀNG NGÀY 30 phút. Tốc độ đọc sẽ tăng tự nhiên sau 2 tuần"
          ],
          checkpoints: [
            "✅ Đọc 1 đoạn Part 7 trong 2-3 phút",
            "✅ Làm 10 câu đạt 9/10 (90%+)",
            "✅ Thành thạo kỹ thuật skimming/scanning",
            "✅ Nhận diện 5 dạng câu hỏi",
            "✅ Không đọc toàn bộ bài trước khi xem câu hỏi"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Speed Reading Techniques", url: "https://www.youtube.com/results?search_query=speed+reading+toeic+part+7" },
            { title: "Part 7 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Review",
          icon: "zoom-in",
          task: "Mixed Review + Weakness Focus",
          desc: "Ôn tập toàn diện Tuần 1-2 và tập trung vào điểm yếu.",
          detailedDesc: `**Mục tiêu học tập:**
- Ôn tập toàn bộ kiến thức Tuần 1-2
- Xác định điểm yếu cụ thể (Grammar/Vocab/Listening/Reading)
- Luyện tập tập trung vào điểm yếu
- Chuẩn bị cho Full Test vào Chủ Nhật

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Đánh giá điểm yếu (10 phút)*
1. Xem lại tất cả error logs từ Tuần 1-2
2. Phân loại lỗi:
   - Grammar: Thì/Thể/Từ loại/Giới từ?
   - Vocab: Contracts/Office/Technology?
   - Listening: Part 1/Part 2?
   - Reading: Part 7 đọc chậm/sai câu hỏi?
3. Xác định 2 điểm yếu NHẤT

*Giai đoạn 2: Ôn tập có mục tiêu (40 phút)*
**Nếu yếu Grammar:**
- Làm lại 30 câu Part 5 về điểm yếu (thì/từ loại/giới từ)
- Xem lại lý thuyết
- Tạo câu ví dụ mới

**Nếu yếu Vocab:**
- Ôn lại 80 từ vựng (Contracts + Office/Tech)
- Làm Quizlet test lại
- Viết 10 câu ví dụ mới

**Nếu yếu Listening:**
- Làm lại 30 câu Part 1 hoặc 50 câu Part 2
- Shadowing 2 đoạn Part 3/4
- Nghe chậm rồi tăng tốc độ

**Nếu yếu Reading:**
- Làm lại 5 đoạn Part 7 đơn
- Luyện kỹ thuật skimming/scanning
- Tăng tốc độ đọc

*Giai đoạn 3: Mini test (10 phút)*
1. Làm 10 câu mixed (Grammar + Vocab + Listening/Reading)
2. Kiểm tra cải thiện: Có tốt hơn không?
3. Ghi chú điểm vẫn còn yếu

**Phân bổ thời gian:**
- Đánh giá điểm yếu: 10 phút
- Ôn tập có mục tiêu: 40 phút
- Mini test: 10 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Xác định rõ 2 điểm yếu nhất
- Cải thiện điểm yếu 20-30%
- Tự tin hơn với kiến thức Tuần 1-2
- Sẵn sàng cho Full Test`,
          methodology: [
            "Giai đoạn 1: Xem error logs và xác định điểm yếu (10 phút)",
            "Giai đoạn 2: Luyện tập tập trung vào điểm yếu (40 phút)",
            "Giai đoạn 3: Mini test kiểm tra cải thiện (10 phút)"
          ],
          timeAllocation: {
            "Đánh giá điểm yếu": 10,
            "Ôn tập có mục tiêu": 40,
            "Mini test": 10
          },
          commonMistakes: [
            "❌ Ôn tập MỌI THỨ thay vì tập trung điểm yếu → Không hiệu quả → Nên tập trung 80% thời gian vào 2 điểm yếu nhất",
            "❌ Chỉ xem lại lý thuyết, không làm bài tập → Không cải thiện → Phải LUYỆN TẬP nhiều",
            "❌ Không theo dõi error logs → Không biết điểm yếu → Phải ghi chú MỌI lỗi sai"
          ],
          instructorTips: [
            "💡 Nguyên tắc 80/20: Tập trung 80% thời gian vào 20% điểm yếu nhất → Cải thiện nhanh nhất",
            "💡 Đừng lo nếu vẫn còn yếu. Tuần 1-2 chỉ là NỀN TẢNG. Bạn sẽ cải thiện nhiều trong 10 tuần tới",
            "💡 Error logs là TÀI SẢN quý nhất. Xem lại HÀNG TUẦN để theo dõi tiến bộ",
            "💡 Chuẩn bị tinh thần cho Full Test ngày mai. Đây là baseline để đo tiến bộ"
          ],
          checkpoints: [
            "✅ Xác định rõ 2 điểm yếu nhất",
            "✅ Luyện tập tập trung 40 phút vào điểm yếu",
            "✅ Làm mini test kiểm tra cải thiện",
            "✅ Ôn lại 80 từ vựng Tuần 1-2",
            "✅ Sẵn sàng tinh thần cho Full Test ngày mai"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Mixed Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" },
            { title: "Vocabulary Review", url: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Test",
          icon: "award",
          task: "BASELINE FULL TEST (Test 1)",
          desc: "Bài thi đầy đủ đầu tiên - đo baseline để theo dõi tiến bộ.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test đầu tiên (120 phút)
- Đo baseline score (điểm khởi đầu)
- Làm quen với format và thời gian thi thật
- Xác định điểm mạnh/yếu cho 10 tuần tiếp theo

**Phương pháp thi (120 phút):**

*Chuẩn bị trước khi thi (10 phút):*
1. Tìm nơi yên tĩnh, KHÔNG bị gián đoạn
2. Chuẩn bị:
   - Tai nghe tốt
   - Đồng hồ bấm giờ
   - Phiếu trả lời (answer sheet)
   - Bút chì và tẩy
3. Tắt điện thoại và thông báo
4. Tâm thế: Đây là thi THẬT, không phải luyện tập

*Listening Section (45 phút):*
**Part 1 (6 câu - 3 phút):**
- Quan sát ảnh 5 giây
- Nghe và chọn đáp án ngay
- Không suy nghĩ quá lâu

**Part 2 (25 câu - 10 phút):**
- Tập trung vào từ ĐẦU TIÊN
- Loại bẫy âm thanh/lặp từ
- Chọn đáp án logic nhất

**Part 3 (39 câu - 17 phút):**
- Đọc câu hỏi TRƯỚC khi nghe
- Ghi chú từ khóa
- Chọn đáp án trong khi nghe

**Part 4 (30 câu - 15 phút):**
- Đọc câu hỏi trước
- Chú ý ý chính và chi tiết
- Không bỏ sót câu cuối

*Reading Section (75 phút):*
**Part 5 (30 câu - 10 phút):**
- <20 giây/câu
- Ưu tiên câu dễ (từ loại, giới từ)
- Đánh dấu câu khó, quay lại sau

**Part 6 (16 câu - 8 phút):**
- 30 giây/câu
- Đọc cả đoạn trước khi chọn
- Chú ý context

**Part 7 (54 câu - 57 phút):**
- Đoạn đơn (29 câu): 2-3 phút/đoạn
- Đoạn kép (10 câu): 4-5 phút/bộ
- Đoạn ba (15 câu): 6-7 phút/bộ
- Đọc câu hỏi trước, scan tìm đáp án

*Sau khi thi (30 phút):*
1. Chấm điểm theo đáp án
2. Tính điểm ước lượng (dùng bảng chuyển đổi ETS)
3. Phân tích:
   - Part nào yếu nhất?
   - Loại câu hỏi nào sai nhiều?
   - Có hết thời gian không?
4. Ghi chú baseline score và điểm yếu

**Phân bổ thời gian:**
- Listening: 45 phút
- Reading: 75 phút
- Chấm điểm & phân tích: 30 phút
- **Tổng: 150 phút**

**Kết quả mong đợi:**
- Hoàn thành full test đúng thời gian
- Có baseline score rõ ràng
- Xác định 3 điểm yếu nhất
- Lập kế hoạch cải thiện cho 10 tuần`,
          methodology: [
            "Chuẩn bị: Tìm nơi yên tĩnh, chuẩn bị dụng cụ (10 phút)",
            "Listening Section: Part 1-4 (45 phút)",
            "Reading Section: Part 5-7 (75 phút)",
            "Chấm điểm và phân tích (30 phút)"
          ],
          timeAllocation: {
            "Listening": 45,
            "Reading": 75,
            "Chấm điểm": 30
          },
          commonMistakes: [
            "❌ Không thi trong điều kiện thật → Không đo chính xác → Phải thi ĐÚNG 120 phút, không nghỉ giữa chừng",
            "❌ Bỏ qua phân tích sau thi → Không biết điểm yếu → Phải phân tích KỸ từng part",
            "❌ Nản lòng nếu điểm thấp → Đây CHỈ là baseline → Bạn sẽ cải thiện nhiều trong 10 tuần"
          ],
          instructorTips: [
            "💡 Đây là bài thi QUAN TRỌNG NHẤT vì đo baseline. Hãy thi NGHIÊM TÚC như thi thật",
            "💡 ĐỪNG nản lòng nếu điểm thấp. Baseline là để ĐO TIẾN BỘ, không phải để đánh giá bạn",
            "💡 Sau khi thi, phân tích KỸ: Part nào yếu? Loại câu nào sai nhiều? Có hết thời gian không?",
            "💡 Mục tiêu: Từ baseline → 900+ trong 10 tuần. Cải thiện 20-30 điểm/tuần là HOÀN TOÀN KHẢ THI"
          ],
          checkpoints: [
            "✅ Thi đúng 120 phút không nghỉ giữa chừng",
            "✅ Hoàn thành tất cả 200 câu",
            "✅ Chấm điểm và tính baseline score",
            "✅ Phân tích 3 điểm yếu nhất",
            "✅ Lập kế hoạch cải thiện cho Tuần 3"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion Table", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "How to Analyze Your TOEIC Test", url: "https://www.youtube.com/results?search_query=analyze+toeic+test+results" }
          ]
        }
      ]
    },
    {
      week: "Tuần 3: Part 3 Conversations & Reading",
      days: [
        {
          day: "Thứ 2",
          type: "Listening",
          icon: "headphones",
          task: "Part 3 Conversations Strategy",
          desc: "Chiến thuật Part 3 - đọc câu hỏi trước, nghe có mục tiêu.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững chiến thuật Part 3: Đọc câu hỏi trước khi nghe
- Nhận diện 5 dạng câu hỏi Part 3 (Main idea, Detail, Inference, Speaker's intent, Visual)
- Luyện kỹ năng note-taking trong khi nghe
- Đạt 30/39 câu Part 3 (77%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học chiến thuật (20 phút)*
**CHIẾN THUẬT PART 3:**

1. **Trước khi nghe (8 giây):**
   - Đọc 3 câu hỏi
   - Gạch chân từ khóa (who, what, when, where, why)
   - Dự đoán chủ đề

2. **Trong khi nghe (40 giây):**
   - Nghe câu ĐẦU TIÊN (thường là chủ đề)
   - Tìm đáp án cho câu 1 → Chọn ngay
   - Tìm đáp án cho câu 2 → Chọn ngay
   - Tìm đáp án cho câu 3 → Chọn ngay
   - Ghi chú từ khóa (tên, số, địa điểm)

3. **Sau khi nghe (4 giây):**
   - Kiểm tra lại đáp án đã chọn
   - Chuyển sang bộ câu hỏi tiếp theo

**5 DẠNG CÂU HỎI PART 3:**
1. Main idea: "What are the speakers discussing?"
2. Detail: "When will the meeting take place?"
3. Inference: "What will the woman probably do next?"
4. Speaker's intent: "What does the man mean when he says...?"
5. Visual: "Look at the graphic. What..."

*Giai đoạn 2: Luyện note-taking (15 phút)*
**KỸ THUẬT GHI CHÚ:**
- Chỉ ghi TỪ KHÓA (tên, số, ngày, địa điểm)
- Dùng ký hiệu: → (will), ↑ (increase), $ (money)
- VD: "John → meeting 3PM Rm 205"

Luyện với 5 đoạn Part 3

*Giai đoạn 3: Luyện tập (20 phút)*
1. Làm 13 đoạn Part 3 (39 câu)
2. Áp dụng chiến thuật:
   - Đọc câu hỏi trước (8s)
   - Nghe và chọn đáp án (40s)
   - Kiểm tra (4s)
3. Mục tiêu: 30/39 đúng (77%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Nghe lại các đoạn sai
2. Xác định lỗi: Không nghe kịp? Không hiểu từ vựng?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học chiến thuật: 20 phút
- Luyện note-taking: 15 phút
- Luyện tập: 20 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Thành thạo chiến thuật đọc câu hỏi trước
- Ghi chú từ khóa trong khi nghe
- Đạt 30/39 câu (77%+)
- Nhận diện 5 dạng câu hỏi`,
          methodology: [
            "Giai đoạn 1: Học chiến thuật Part 3 (20 phút)",
            "Giai đoạn 2: Luyện kỹ năng note-taking (15 phút)",
            "Giai đoạn 3: Làm 39 câu Part 3 (20 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học chiến thuật": 20,
            "Note-taking": 15,
            "Luyện tập": 20,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ KHÔNG đọc câu hỏi trước → Nghe mù quáng → Bỏ lỡ thông tin quan trọng",
            "❌ Ghi chú quá nhiều → Không kịp nghe → Chỉ ghi TỪ KHÓA (tên, số, ngày)",
            "❌ Chờ đến cuối mới chọn đáp án → Quên thông tin → Chọn NGAY khi nghe thấy đáp án"
          ],
          instructorTips: [
            "💡 Part 3 là phần KHÓ NHẤT Listening. Chiến thuật đọc câu hỏi trước là CHÌA KHÓA",
            "💡 Câu ĐẦU TIÊN thường là chủ đề. VD: 'Hi John, about the marketing meeting...' → Chủ đề: marketing meeting",
            "💡 Đáp án thường xuất hiện THEO THỨ TỰ: Câu 1 → đầu đoạn, Câu 2 → giữa, Câu 3 → cuối",
            "💡 Nếu bỏ lỡ câu 1, ĐỪNG suy nghĩ. Chuyển ngay sang câu 2. Quay lại câu 1 sau"
          ],
          checkpoints: [
            "✅ Thành thạo chiến thuật đọc câu hỏi trước",
            "✅ Làm 39 câu Part 3 đạt 30/39 (77%+)",
            "✅ Ghi chú từ khóa hiệu quả",
            "✅ Nhận diện 5 dạng câu hỏi",
            "✅ Chọn đáp án ngay khi nghe thấy"
          ],
          link: "https://study4.com/tests/toeic-part-3-training/",
          additionalLinks: [
            { title: "Video: Part 3 Strategy", url: "https://www.youtube.com/@TOEICwithJunia" },
            { title: "Part 3 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Vocab",
          icon: "briefcase",
          task: "Finance & Banking Vocabulary",
          desc: "40 từ vựng tài chính ngân hàng - chủ đề quan trọng trong TOEIC.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng Finance & Banking
- Hiểu collocations: interest rate, credit card, bank account
- Áp dụng từ vựng vào câu thực tế
- Nhận biết từ trong listening và reading

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
**40 TỪ VỰNG FINANCE & BANKING:**

*Banking Terms:*
- account, deposit, withdrawal, balance
- savings, checking, loan, mortgage
- interest rate, credit, debit, overdraft

*Financial Terms:*
- budget, expense, revenue, profit
- investment, stock, bond, dividend
- tax, fee, charge, refund

*Actions:*
- transfer, pay, borrow, lend
- invest, save, spend, earn
- apply for, approve, decline

*Common Phrases:*
- open an account, make a deposit
- apply for a loan, pay interest
- check the balance, transfer funds

Học từ Quizlet với flashcards

*Giai đoạn 2: Collocations (15 phút)*
**COLLOCATIONS QUAN TRỌNG:**
- interest rate (NOT "interest price")
- make a deposit (NOT "do a deposit")
- apply for a loan (NOT "ask for a loan")
- check the balance (NOT "see the balance")

Viết 10 câu với collocations

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm Quizlet test (chế độ Learn)
2. Viết 5 câu ví dụ thực tế
3. Đọc to các câu (luyện phát âm)
4. Làm lại test (chế độ Test) → Mục tiêu 100%

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Học collocations: 15 phút
- Luyện tập: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng
- Nắm vững 10 collocations
- Viết 5 câu ví dụ thực tế
- Đạt 100% Quizlet test`,
          methodology: [
            "Giai đoạn 1: Học 40 từ Finance & Banking (20 phút)",
            "Giai đoạn 2: Học collocations quan trọng (15 phút)",
            "Giai đoạn 3: Test và viết câu ví dụ (15 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Collocations": 15,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Nhầm 'deposit' (tiền gửi) với 'withdrawal' (tiền rút)",
            "❌ Dùng 'borrow' (vay) với 'lend' (cho vay) → 'I borrow FROM bank' vs 'Bank lends TO me'",
            "❌ Nhầm 'interest' (lãi suất) với 'profit' (lợi nhuận)"
          ],
          instructorTips: [
            "💡 Finance & Banking là chủ đề #2 trong TOEIC sau Office. Học thuộc 40 từ này = +40 điểm",
            "💡 Chú ý PHÁT ÂM: 'finance' /ˈfaɪnæns/ hoặc /fəˈnæns/, 'receipt' /rɪˈsiːt/ (không phát âm 'p')",
            "💡 Học collocations: 'make a deposit', 'apply for a loan', 'check the balance' → TOEIC test nhiều",
            "💡 Ôn lại sau 1 ngày, 3 ngày, 1 tuần (spaced repetition)"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng Finance & Banking",
            "✅ Nắm vững 10 collocations quan trọng",
            "✅ Viết 5 câu ví dụ thực tế",
            "✅ Đạt 100% Quizlet test",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ],
          link: "https://quizlet.com/vn/515287663/600-essential-words-for-the-toeic-lesson-3-finance-banking-flash-cards/",
          additionalLinks: [
            { title: "Video: Finance Vocabulary", url: "https://www.youtube.com/results?search_query=finance+vocabulary+toeic" },
            { title: "Banking Vocabulary Quiz", url: "https://www.englishclub.com/business-english/vocabulary-banking.htm" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Skill",
          icon: "file-text",
          task: "Part 7 Double Passages",
          desc: "Đọc đoạn kép Part 7 - kết nối thông tin giữa 2 văn bản.",
          detailedDesc: `**Mục tiêu học tập:**
- Đọc 1 bộ đoạn kép trong 4-5 phút (2 đoạn + 5 câu hỏi)
- Nắm vững kỹ thuật cross-reference (tham chiếu chéo)
- Nhận diện câu hỏi yêu cầu thông tin từ CẢ 2 đoạn
- Đạt 8/10 câu đúng cho đoạn kép

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học kỹ thuật đoạn kép (15 phút)*
**ĐẶC ĐIỂM ĐOẠN KÉP:**
- 2 văn bản liên quan (email + reply, ad + review, notice + schedule)
- 5 câu hỏi: 2-3 câu từ đoạn 1, 2-3 câu từ đoạn 2, 1 câu từ CẢ 2 đoạn

**CHIẾN THUẬT:**
1. Skim cả 2 đoạn (20 giây)
   - Xác định loại văn bản (email, ad, notice)
   - Hiểu mối quan hệ giữa 2 đoạn
2. Đọc câu hỏi 1 → Xác định đoạn nào có đáp án
3. Scan đoạn đó → Tìm đáp án (30 giây)
4. Lặp lại cho câu 2-5

**NHẬN DIỆN CÂU CROSS-REFERENCE:**
- "According to BOTH documents..."
- "What is indicated about... in the email AND the schedule?"
- Cần đọc CẢ 2 đoạn để trả lời

*Giai đoạn 2: Luyện tập (30 phút)*
1. Làm 4 bộ đoạn kép (20 câu)
2. Quy trình cho MỖI bộ:
   - Skim cả 2 đoạn (20 giây)
   - Đọc câu hỏi → Xác định đoạn (5 giây)
   - Scan tìm đáp án (30 giây)
   - Tổng: 4-5 phút/bộ
3. Mục tiêu: 16/20 đúng (80%+)

*Giai đoạn 3: Sửa lỗi (5 phút)*
1. Với câu sai: Tìm lại thông tin trong 2 đoạn
2. Xác định lỗi: Đọc sai đoạn? Bỏ sót thông tin?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học kỹ thuật: 15 phút
- Luyện tập 4 bộ: 30 phút
- Sửa lỗi: 5 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Đọc 1 bộ đoạn kép trong 4-5 phút
- Đạt 16/20 câu đúng (80%+)
- Thành thạo kỹ thuật cross-reference
- Nhận diện câu hỏi từ cả 2 đoạn`,
          methodology: [
            "Giai đoạn 1: Học kỹ thuật đoạn kép và cross-reference (15 phút)",
            "Giai đoạn 2: Làm 4 bộ đoạn kép (30 phút)",
            "Giai đoạn 3: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học kỹ thuật": 15,
            "Luyện tập": 30,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Đọc KỸ cả 2 đoạn trước khi xem câu hỏi → Mất thời gian → Nên skim rồi đọc câu hỏi",
            "❌ Không nhận diện câu cross-reference → Chỉ đọc 1 đoạn → Chọn sai",
            "❌ Nhầm thông tin giữa 2 đoạn → Phải chú ý ĐỌC ĐÚNG đoạn"
          ],
          instructorTips: [
            "💡 Đoạn kép khó hơn đoạn đơn vì phải KẾT NỐI thông tin. Nhưng nếu làm đúng chiến thuật, không khó",
            "💡 Câu cross-reference thường là câu CUỐI CÙNG. Nếu thấy 'BOTH documents', đọc cả 2 đoạn",
            "💡 Mối quan hệ phổ biến: Email + Reply, Ad + Review, Notice + Schedule, Article + Chart",
            "💡 Skim cả 2 đoạn trước → Hiểu mối quan hệ → Dễ tìm thông tin hơn"
          ],
          checkpoints: [
            "✅ Đọc 1 bộ đoạn kép trong 4-5 phút",
            "✅ Làm 20 câu đạt 16/20 (80%+)",
            "✅ Thành thạo kỹ thuật cross-reference",
            "✅ Nhận diện câu hỏi từ cả 2 đoạn",
            "✅ Không nhầm thông tin giữa 2 đoạn"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Double Passage Strategy", url: "https://www.youtube.com/results?search_query=toeic+part+7+double+passage" },
            { title: "Part 7 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Test",
          icon: "award",
          task: "Mini Test 1 (50 LC + 50 RC)",
          desc: "Bài kiểm tra ngắn - đo tiến bộ sau 3 tuần.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Mini Test (50 LC + 50 RC = 60 phút)
- Đo tiến bộ so với Baseline Test
- Xác định điểm yếu còn lại
- Điều chỉnh kế hoạch học cho tuần tiếp theo

**Phương pháp thi (60 phút):**

*Listening Section (25 phút):*
**Part 1:** 3 câu (1.5 phút)
**Part 2:** 12 câu (5 phút)
**Part 3:** 20 câu (10 phút)
**Part 4:** 15 câu (8.5 phút)

Áp dụng chiến thuật đã học:
- Part 1: Quan sát ảnh, chú ý bẫy "being"
- Part 2: Nghe từ đầu tiên, loại bẫy lặp từ
- Part 3-4: Đọc câu hỏi trước, ghi chú từ khóa

*Reading Section (35 phút):*
**Part 5:** 15 câu (5 phút)
**Part 6:** 8 câu (4 phút)
**Part 7:** 27 câu (26 phút)
- Đoạn đơn: 15 câu
- Đoạn kép: 12 câu

Áp dụng chiến thuật:
- Part 5-6: <20 giây/câu
- Part 7: Đọc câu hỏi trước, scan tìm đáp án

*Sau khi thi (30 phút):*
1. Chấm điểm theo đáp án
2. So sánh với Baseline Test:
   - LC: Cải thiện bao nhiêu câu?
   - RC: Cải thiện bao nhiêu câu?
   - Tổng: Cải thiện bao nhiêu điểm?
3. Phân tích:
   - Part nào cải thiện nhiều nhất?
   - Part nào vẫn yếu?
   - Có hết thời gian không?
4. Ghi chú điểm yếu và kế hoạch cải thiện

**Phân bổ thời gian:**
- Listening: 25 phút
- Reading: 35 phút
- Chấm điểm & phân tích: 30 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Cải thiện 10-15 câu so với Baseline
- Xác định điểm yếu còn lại
- Tự tin hơn với format thi
- Có kế hoạch rõ ràng cho tuần 4`,
          methodology: [
            "Listening Section: Part 1-4 (25 phút)",
            "Reading Section: Part 5-7 (35 phút)",
            "Chấm điểm và so sánh với Baseline (30 phút)"
          ],
          timeAllocation: {
            "Listening": 25,
            "Reading": 35,
            "Chấm điểm": 30
          },
          commonMistakes: [
            "❌ Không thi nghiêm túc vì là Mini Test → Kết quả không chính xác → Phải thi ĐÚNG thời gian",
            "❌ Không so sánh với Baseline → Không biết tiến bộ → Phải so sánh KỸ từng part",
            "❌ Nản lòng nếu không cải thiện nhiều → 3 tuần còn SỚM → Tiến bộ sẽ rõ hơn sau tuần 5-6"
          ],
          instructorTips: [
            "💡 Mini Test giúp bạn THEO DÕI tiến bộ. Đừng lo nếu cải thiện chưa nhiều - 3 tuần còn sớm",
            "💡 Mục tiêu: Cải thiện 10-15 câu (khoảng 50-75 điểm). Nếu đạt → Bạn đang đi đúng hướng",
            "💡 Phân tích KỸ: Part nào cải thiện? Part nào vẫn yếu? → Điều chỉnh kế hoạch học",
            "💡 Nếu Part 3-4 vẫn yếu → Tăng shadowing. Nếu Part 7 vẫn yếu → Tăng đọc hàng ngày"
          ],
          checkpoints: [
            "✅ Thi đúng 60 phút không nghỉ giữa chừng",
            "✅ Hoàn thành tất cả 100 câu",
            "✅ Chấm điểm và so sánh với Baseline",
            "✅ Cải thiện 10-15 câu so với Baseline",
            "✅ Xác định điểm yếu và lập kế hoạch"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/",
          additionalLinks: [
            { title: "Mini Test Answer Key", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" },
            { title: "How to Analyze Mini Test", url: "https://www.youtube.com/results?search_query=analyze+toeic+mini+test" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Review",
          icon: "zoom-in",
          task: "Deep Correction Session",
          desc: "Sửa lỗi sâu Mini Test - hiểu TẠI SAO sai, không chỉ ĐÁP ÁN đúng.",
          detailedDesc: `**Mục tiêu học tập:**
- Phân tích SÂU mọi câu sai trong Mini Test
- Hiểu TẠI SAO chọn sai, không chỉ biết đáp án đúng
- Tạo error patterns (mẫu lỗi) để tránh sai lần sau
- Luyện lại các câu sai đến khi thành thạo

**Phương pháp học chi tiết (120 phút):**

*Giai đoạn 1: Phân loại lỗi (20 phút)*
1. Liệt kê TẤT CẢ câu sai
2. Phân loại theo:
   - **Listening:**
     - Part 1: Bẫy being? Âm thanh tương tự?
     - Part 2: Bẫy lặp từ? Không hiểu câu hỏi?
     - Part 3-4: Không đọc câu hỏi trước? Không nghe kịp?
   - **Reading:**
     - Part 5: Thì? Từ loại? Giới từ?
     - Part 6: Không đọc context?
     - Part 7: Đọc không kỹ? Suy luận sai?
3. Tạo bảng phân loại lỗi

*Giai đoạn 2: Sửa lỗi sâu (60 phút)*
**Với MỖI câu sai:**

1. **Đọc/Nghe lại câu hỏi** (2 phút)
   - Đọc kỹ đề bài
   - Xác định loại câu hỏi

2. **Tìm đáp án đúng** (3 phút)
   - Đọc giải thích
   - Tìm thông tin trong bài
   - Hiểu TẠI SAO đáp án này đúng

3. **Phân tích lỗi sai** (3 phút)
   - TẠI SAO bạn chọn sai?
   - Bạn bỏ sót thông tin nào?
   - Bạn rơi vào bẫy nào?
   - Bạn hiểu sai gì?

4. **Tạo ghi chú** (2 phút)
   - Viết pattern lỗi
   - VD: "Luôn nhầm Present Perfect vs Simple Past khi có 'since'"
   - Tạo câu ví dụ tương tự

**Tổng: 10 phút/câu × 6-10 câu sai = 60 phút**

*Giai đoạn 3: Luyện lại (30 phút)*
1. Làm lại TẤT CẢ câu sai
2. Mục tiêu: 100% đúng
3. Nếu vẫn sai → Lặp lại Giai đoạn 2

*Giai đoạn 4: Tạo action plan (10 phút)*
1. Xác định 2 điểm yếu NHẤT
2. Lập kế hoạch cải thiện:
   - Nếu yếu Listening → Tăng shadowing 30 phút/ngày
   - Nếu yếu Grammar → Làm thêm 20 câu Part 5 mỗi ngày
   - Nếu yếu Reading → Đọc thêm 5 đoạn Part 7 mỗi ngày
3. Ghi chú action plan

**Phân bổ thời gian:**
- Phân loại lỗi: 20 phút
- Sửa lỗi sâu: 60 phút
- Luyện lại: 30 phút
- Tạo action plan: 10 phút
- **Tổng: 120 phút**

**Kết quả mong đợi:**
- Hiểu rõ TẠI SAO sai từng câu
- Tạo error patterns để tránh sai lần sau
- Làm lại câu sai đạt 100%
- Có action plan rõ ràng`,
          methodology: [
            "Giai đoạn 1: Phân loại lỗi theo pattern (20 phút)",
            "Giai đoạn 2: Sửa lỗi sâu từng câu (60 phút)",
            "Giai đoạn 3: Làm lại tất cả câu sai (30 phút)",
            "Giai đoạn 4: Tạo action plan cải thiện (10 phút)"
          ],
          timeAllocation: {
            "Phân loại lỗi": 20,
            "Sửa lỗi sâu": 60,
            "Luyện lại": 30,
            "Action plan": 10
          },
          commonMistakes: [
            "❌ Chỉ xem đáp án đúng, không phân tích TẠI SAO sai → Sẽ sai lại lần sau → Phải hiểu SÂU lỗi sai",
            "❌ Sửa lỗi quá nhanh → Không nhớ → Dành 10 phút/câu để hiểu THẤU ĐÁO",
            "❌ Không tạo error patterns → Không học được từ lỗi → Phải ghi chú MẪU LỖI"
          ],
          instructorTips: [
            "💡 Deep Correction là phần QUAN TRỌNG NHẤT. Bạn học NHIỀU HƠN từ lỗi sai so với câu đúng",
            "💡 Dành 10 phút/câu sai. Nếu sai 10 câu → 100 phút. Đừng vội, hãy hiểu THẤU ĐÁO",
            "💡 Tạo 'Error Pattern Notebook': Ghi mọi pattern lỗi. Xem lại HÀNG TUẦN",
            "💡 Nếu cùng 1 pattern lỗi lặp lại 3 lần → Đây là ĐIỂM YẾU nghiêm trọng. Tập trung sửa NGAY"
          ],
          checkpoints: [
            "✅ Phân loại tất cả lỗi theo pattern",
            "✅ Sửa lỗi sâu từng câu (10 phút/câu)",
            "✅ Làm lại câu sai đạt 100%",
            "✅ Tạo Error Pattern Notebook",
            "✅ Có action plan rõ ràng cho tuần 4"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/",
          additionalLinks: [
            { title: "How to Analyze Errors", url: "https://www.youtube.com/results?search_query=analyze+toeic+errors" },
            { title: "Error Pattern Examples", url: "https://study4.com/blog/toeic-common-mistakes/" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Listening",
          icon: "headphones",
          task: "Intensive Part 3-4 Practice",
          desc: "Luyện tập chuyên sâu Part 3-4 - phần khó nhất Listening.",
          detailedDesc: `**Mục tiêu học tập:**
- Luyện tập chuyên sâu Part 3-4 (69 câu)
- Nâng cao tốc độ đọc câu hỏi trước khi nghe
- Cải thiện khả năng ghi chú từ khóa
- Đạt 55/69 câu (80%+)

**Phương pháp học chi tiết (90 phút):**

*Giai đoạn 1: Warm-up (10 phút)*
1. Shadowing 2 đoạn Part 3 (5 phút)
2. Ôn lại chiến thuật Part 3-4:
   - Đọc câu hỏi trước (8 giây)
   - Ghi chú từ khóa trong khi nghe
   - Chọn đáp án ngay khi nghe thấy

*Giai đoạn 2: Part 3 Marathon (40 phút)*
1. Làm 13 đoạn Part 3 (39 câu)
2. Quy trình:
   - Đọc 3 câu hỏi (8 giây)
   - Nghe và chọn đáp án (40 giây)
   - Kiểm tra (4 giây)
   - KHÔNG nghỉ giữa các đoạn
3. Mục tiêu: 31/39 đúng (80%+)

*Giai đoạn 3: Part 4 Marathon (30 phút)*
1. Làm 10 đoạn Part 4 (30 câu)
2. Quy trình tương tự Part 3
3. Chú ý:
   - Part 4 là monologue (1 người nói)
   - Thường là thông báo, quảng cáo, tin nhắn thoại
   - Câu đầu thường là chủ đề
4. Mục tiêu: 24/30 đúng (80%+)

*Giai đoạn 4: Sửa lỗi (10 phút)*
1. Nghe lại các đoạn sai
2. Xác định lỗi:
   - Không đọc câu hỏi trước?
   - Không nghe kịp?
   - Không hiểu từ vựng?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Warm-up: 10 phút
- Part 3 Marathon: 40 phút
- Part 4 Marathon: 30 phút
- Sửa lỗi: 10 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Hoàn thành 69 câu Part 3-4
- Đạt 55/69 câu (80%+)
- Tăng tốc độ đọc câu hỏi
- Cải thiện ghi chú từ khóa`,
          methodology: [
            "Giai đoạn 1: Warm-up với shadowing (10 phút)",
            "Giai đoạn 2: Làm 39 câu Part 3 (40 phút)",
            "Giai đoạn 3: Làm 30 câu Part 4 (30 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (10 phút)"
          ],
          timeAllocation: {
            "Warm-up": 10,
            "Part 3": 40,
            "Part 4": 30,
            "Sửa lỗi": 10
          },
          commonMistakes: [
            "❌ Nghỉ giữa các đoạn → Mất tập trung → Nên làm LIÊN TỤC không nghỉ",
            "❌ Không đọc câu hỏi trước → Nghe mù quáng → Phải đọc TRƯỚC KHI nghe",
            "❌ Ghi chú quá nhiều → Không kịp nghe → Chỉ ghi TỪ KHÓA"
          ],
          instructorTips: [
            "💡 Part 3-4 chiếm 69/100 câu LC (69%). Nếu làm tốt Part 3-4 → LC score sẽ cao",
            "💡 Luyện Part 3-4 MARATHON (không nghỉ) → Tăng sức bền tập trung → Trong thi thật không có nghỉ",
            "💡 Nếu bỏ lỡ câu 1, ĐỪNG suy nghĩ. Chuyển ngay sang câu 2. Quay lại câu 1 sau",
            "💡 Shadowing HÀNG NGÀY 20 phút → Cải thiện Part 3-4 nhanh nhất"
          ],
          checkpoints: [
            "✅ Hoàn thành 69 câu Part 3-4 không nghỉ",
            "✅ Đạt 55/69 câu (80%+)",
            "✅ Đọc câu hỏi trước mọi đoạn",
            "✅ Ghi chú từ khóa hiệu quả",
            "✅ Không bỏ lỡ câu nào vì suy nghĩ quá lâu"
          ],
          link: "https://study4.com/tests/toeic-part-3-training/",
          additionalLinks: [
            { title: "Part 3 Practice", url: "https://study4.com/tests/toeic-part-3-training/" },
            { title: "Part 4 Practice", url: "https://study4.com/tests/toeic-part-4-training/" }
          ]
        }
      ]
    }
  ],
  month2: [
    {
      week: "Tuần 5: Paraphrasing & Part 3-4 Elite",
      days: [
        {
          day: "Thứ 2",
          type: "Skill",
          icon: "zap",
          task: "Paraphrasing Technique - Map 20 Synonym Pairs",
          desc: "Kỹ thuật paraphrasing - chìa khóa hiểu câu hỏi inference và NOT/TRUE.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững kỹ thuật paraphrasing (diễn đạt lại) trong TOEIC
- Học 20 cặp từ đồng nghĩa phổ biến nhất
- Nhận diện paraphrasing trong câu hỏi Part 3-4 và Part 7
- Cải thiện điểm inference questions (câu hỏi suy luận)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Hiểu Paraphrasing (15 phút)*
**PARAPHRASING LÀ GÌ?**
- Diễn đạt lại ý nghĩa bằng từ/cụm từ khác
- TOEIC KHÔNG bao giờ dùng từ giống hệt trong câu hỏi và đáp án
- VD: Bài đọc: "The meeting is postponed" → Câu hỏi: "The meeting is delayed"

**TẠI SAO QUAN TRỌNG?**
- 80% câu hỏi Part 7 dùng paraphrasing
- 60% câu hỏi Part 3-4 dùng paraphrasing
- Nếu không nhận ra paraphrasing → Chọn sai

**20 CẶP TỪ ĐỒNG NGHĨA PHỔ BIẾN:**
1. postpone = delay = put off
2. cancel = call off
3. attend = participate in = take part in
4. require = need = demand
5. provide = offer = supply
6. receive = get = obtain
7. inform = notify = let know
8. discuss = talk about = go over
9. complete = finish = finalize
10. approve = authorize = give permission
11. increase = rise = go up
12. decrease = decline = go down
13. solve = resolve = fix
14. suggest = recommend = propose
15. confirm = verify = make sure
16. concern = worry = issue
17. advantage = benefit = plus
18. disadvantage = drawback = downside
19. immediately = right away = at once
20. eventually = finally = in the end

*Giai đoạn 2: Luyện nhận diện (20 phút)*
1. Làm 10 câu Part 7 inference questions
2. Với MỖI câu:
   - Tìm từ khóa trong câu hỏi
   - Tìm paraphrasing trong bài đọc
   - Gạch chân cả 2 (từ gốc và paraphrase)
   - VD: Q: "What is suggested?" → Bài: "We recommend..."
3. Tạo bảng mapping: Câu hỏi → Paraphrase trong bài

*Giai đoạn 3: Luyện tập Part 3-4 (20 phút)*
1. Làm 10 đoạn Part 3-4 (30 câu)
2. Chú ý paraphrasing:
   - Audio: "We need to reschedule"
   - Câu hỏi: "What will the speakers do?" → Đáp án: "Postpone the meeting"
3. Ghi chú các paraphrase nghe được

*Giai đoạn 4: Tạo flashcards (5 phút)*
1. Tạo flashcards cho 20 cặp từ đồng nghĩa
2. Học thuộc và ôn hàng ngày

**Phân bổ thời gian:**
- Hiểu paraphrasing: 15 phút
- Luyện Part 7: 20 phút
- Luyện Part 3-4: 20 phút
- Tạo flashcards: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhớ 20 cặp từ đồng nghĩa
- Nhận diện paraphrasing trong câu hỏi
- Cải thiện inference questions 20-30%
- Tự tin hơn với câu hỏi suy luận`,
          methodology: [
            "Giai đoạn 1: Học 20 cặp từ đồng nghĩa phổ biến (15 phút)",
            "Giai đoạn 2: Luyện nhận diện paraphrasing trong Part 7 (20 phút)",
            "Giai đoạn 3: Luyện Part 3-4 với paraphrasing (20 phút)",
            "Giai đoạn 4: Tạo flashcards và ghi nhớ (5 phút)"
          ],
          timeAllocation: {
            "Học từ đồng nghĩa": 15,
            "Luyện Part 7": 20,
            "Luyện Part 3-4": 20,
            "Tạo flashcards": 5
          },
          commonMistakes: [
            "❌ Tìm từ GIỐNG HỆT trong bài → Không tìm thấy → Phải tìm PARAPHRASE (từ đồng nghĩa)",
            "❌ Không học từ đồng nghĩa → Không nhận ra paraphrase → Chọn sai",
            "❌ Dựa vào kiến thức bên ngoài thay vì paraphrase trong bài → Chọn sai"
          ],
          instructorTips: [
            "💡 Paraphrasing là KỸ NĂNG QUAN TRỌNG NHẤT cho 900+ điểm. 80% câu hỏi dùng paraphrasing",
            "💡 Học thuộc 20 cặp từ đồng nghĩa này → Nhận ra 70% paraphrasing trong TOEIC",
            "💡 Khi làm bài, LUÔN tìm paraphrase, KHÔNG tìm từ giống hệt",
            "💡 Tạo 'Paraphrase Notebook': Ghi mọi paraphrase gặp trong luyện tập"
          ],
          checkpoints: [
            "✅ Học thuộc 20 cặp từ đồng nghĩa",
            "✅ Nhận diện paraphrasing trong 10 câu Part 7",
            "✅ Làm 30 câu Part 3-4 chú ý paraphrasing",
            "✅ Tạo flashcards và Paraphrase Notebook",
            "✅ Cải thiện inference questions 20-30%"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Paraphrasing in TOEIC", url: "https://www.youtube.com/results?search_query=paraphrasing+toeic" },
            { title: "Synonym List for TOEIC", url: "https://quizlet.com/search?query=toeic%20synonyms&type=sets" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Listening",
          icon: "mic",
          task: "Shadowing Part 3 Fluency - 10-15 Reps",
          desc: "Shadowing chuyên sâu Part 3 - tăng fluency và tốc độ xử lý ngôn ngữ.",
          detailedDesc: `**Mục tiêu học tập:**
- Shadowing 3 đoạn Part 3 với 10-15 lần lặp mỗi đoạn
- Đạt fluency 90% (nói trơn tru, ngữ điệu tự nhiên)
- Cải thiện tốc độ xử lý ngôn ngữ (language processing speed)
- Nâng cao khả năng nghe hiểu Part 3-4

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Chọn tài liệu (5 phút)*
1. Chọn 3 đoạn Part 3 từ Study4.com
2. Tiêu chí:
   - Độ dài: 40-50 giây/đoạn
   - Độ khó: Vừa phải (hiểu 70-80%)
   - Chủ đề: Đa dạng (office, shopping, travel)
3. KHÔNG xem transcript trước

*Giai đoạn 2: Shadowing Đoạn 1 (10 phút)*
**QUY TRÌNH SHADOWING:**
1. Nghe 3 lần để hiểu (3 phút)
   - Lần 1: Hiểu ý chính
   - Lần 2: Chú ý từng câu
   - Lần 3: Chú ý ngữ điệu
2. Shadowing 10-15 lần (7 phút)
   - Lần 1-5: Chậm, tập trung phát âm
   - Lần 6-10: Tăng tốc độ, tập trung ngữ điệu
   - Lần 11-15: Tốc độ tự nhiên, tập trung fluency
3. Mục tiêu: Ngữ điệu khớp 90% với audio

*Giai đoạn 3: Shadowing Đoạn 2 (10 phút)*
Lặp lại quy trình như Đoạn 1

*Giai đoạn 4: Shadowing Đoạn 3 (10 phút)*
Lặp lại quy trình như Đoạn 1

*Giai đoạn 5: Self-assessment (5 phút)*
1. Thu âm lại lần shadowing cuối của cả 3 đoạn
2. So sánh với audio gốc:
   - Phát âm: Có đúng không?
   - Ngữ điệu: Có tự nhiên không?
   - Fluency: Có trơn tru không?
3. Ghi chú điểm cần cải thiện

**Phân bổ thời gian:**
- Chọn tài liệu: 5 phút
- Shadowing Đoạn 1: 10 phút
- Shadowing Đoạn 2: 10 phút
- Shadowing Đoạn 3: 10 phút
- Self-assessment: 5 phút
- **Tổng: 40 phút**

**Kết quả mong đợi:**
- Hoàn thành 30-45 lần shadowing (3 đoạn × 10-15 lần)
- Ngữ điệu khớp 90% với audio
- Fluency cải thiện rõ rệt
- Tự tin hơn với Part 3`,
          methodology: [
            "Giai đoạn 1: Chọn 3 đoạn Part 3 phù hợp (5 phút)",
            "Giai đoạn 2-4: Shadowing mỗi đoạn 10-15 lần (30 phút)",
            "Giai đoạn 5: Thu âm và tự đánh giá (5 phút)"
          ],
          timeAllocation: {
            "Chọn tài liệu": 5,
            "Shadowing 3 đoạn": 30,
            "Self-assessment": 5
          },
          commonMistakes: [
            "❌ Shadowing quá ít lần (< 10) → Không đạt fluency → Phải lặp 10-15 lần",
            "❌ Chỉ tập trung phát âm, bỏ qua ngữ điệu → Nghe không tự nhiên → Phải chú ý CẢ HAI",
            "❌ Không thu âm → Không biết tiến bộ → Phải thu âm và so sánh"
          ],
          instructorTips: [
            "💡 Shadowing 10-15 lần/đoạn là CÔNG THỨC VÀNG. Ít hơn → Không hiệu quả. Nhiều hơn → Lãng phí thời gian",
            "💡 Tuần 5 là lúc shadowing bắt đầu có HIỆU QUẢ RÕ RỆT. Bạn sẽ thấy Part 3-4 dễ hơn nhiều",
            "💡 Chú ý LINKING SOUNDS (nối âm): 'check it out' → /ˈtʃekɪtaʊt/, 'want to' → /ˈwɑnə/",
            "💡 Nếu đoạn quá khó (hiểu < 60%), chọn đoạn dễ hơn. Shadowing phải VỪA SỨC"
          ],
          checkpoints: [
            "✅ Shadowing 3 đoạn Part 3, mỗi đoạn 10-15 lần",
            "✅ Ngữ điệu khớp 90% với audio gốc",
            "✅ Nói trơn tru, không vấp",
            "✅ Thu âm và so sánh với gốc",
            "✅ Ghi chú điểm cần cải thiện cho ngày mai"
          ],
          link: "https://study4.com/tests/toeic-part-3-training/",
          additionalLinks: [
            { title: "Shadowing Technique Video", url: "https://www.youtube.com/results?search_query=shadowing+technique+part+3" },
            { title: "Part 3 Audio Materials", url: "https://www.youtube.com/@TOEICwithJunia" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Vocab",
          icon: "briefcase",
          task: "Marketing & Business Trip Vocabulary - 40 Words",
          desc: "40 từ vựng Marketing và Business Trip - chủ đề thường gặp Part 3-4.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng Marketing & Business Trip
- Hiểu collocations: marketing campaign, business trip, trade show
- Áp dụng từ vựng vào ngữ cảnh thực tế
- Nhận biết từ trong listening Part 3-4

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
**40 TỪ VỰNG MARKETING & BUSINESS TRIP:**

*Marketing Terms:*
- campaign, advertisement, promotion, brochure
- target audience, market research, brand awareness
- launch, publicity, slogan, logo
- social media, viral, engagement, conversion

*Business Trip Terms:*
- itinerary, accommodation, reservation, booking
- conference, seminar, trade show, exhibition
- networking, delegate, attendee, keynote speaker
- expense report, reimbursement, per diem

*Actions:*
- promote, advertise, market, launch
- book, reserve, confirm, cancel
- attend, participate, present, network

*Common Phrases:*
- marketing campaign, product launch
- business trip, trade show
- book a flight, make a reservation
- expense report, networking event

Học từ Quizlet với flashcards

*Giai đoạn 2: Collocations (15 phút)*
**COLLOCATIONS QUAN TRỌNG:**
- launch a campaign (NOT "start a campaign")
- target audience (NOT "target customers")
- book a flight (NOT "reserve a flight" - cả 2 đúng nhưng "book" phổ biến hơn)
- expense report (NOT "expense form")

Viết 10 câu với collocations

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm Quizlet test (chế độ Learn)
2. Nghe 5 đoạn Part 3-4 về marketing/business trip
3. Gạch chân các từ vựng vừa học
4. Làm lại test (chế độ Test) → Mục tiêu 100%

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Học collocations: 15 phút
- Luyện tập: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng
- Nắm vững 10 collocations
- Nhận biết từ trong Part 3-4
- Đạt 100% Quizlet test`,
          methodology: [
            "Giai đoạn 1: Học 40 từ Marketing & Business Trip (20 phút)",
            "Giai đoạn 2: Học collocations quan trọng (15 phút)",
            "Giai đoạn 3: Test và nghe Part 3-4 (15 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Collocations": 15,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Nhầm 'advertisement' (quảng cáo) với 'advertising' (ngành quảng cáo)",
            "❌ Dùng 'customer' thay vì 'target audience' trong marketing context",
            "❌ Nhầm 'conference' (hội nghị lớn) với 'meeting' (cuộc họp nhỏ)"
          ],
          instructorTips: [
            "💡 Marketing & Business Trip là 2 chủ đề #1 trong Part 3-4. Học thuộc = +30 điểm LC",
            "💡 Chú ý PHÁT ÂM: 'itinerary' /aɪˈtɪnəreri/, 'campaign' /kæmˈpeɪn/",
            "💡 Nghe podcast/video về marketing → Làm quen với từ vựng trong ngữ cảnh tự nhiên",
            "💡 Ôn lại sau 1 ngày, 3 ngày, 1 tuần"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng Marketing & Business Trip",
            "✅ Nắm vững 10 collocations",
            "✅ Nghe 5 đoạn Part 3-4 và nhận biết từ vựng",
            "✅ Đạt 100% Quizlet test",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ],
          link: "https://quizlet.com/vn/515287664/600-essential-words-for-the-toeic-lesson-4-marketing-business-trip-flash-cards/",
          additionalLinks: [
            { title: "Marketing Vocabulary Video", url: "https://www.youtube.com/results?search_query=marketing+vocabulary+toeic" },
            { title: "Business Trip Vocabulary", url: "https://www.englishclub.com/business-english/vocabulary-travel.htm" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Skill",
          icon: "file-text",
          task: "Part 7 Scanning Speed - <20s per Detail",
          desc: "Tăng tốc độ scanning - tìm thông tin chi tiết trong <20 giây.",
          detailedDesc: `**Mục tiêu học tập:**
- Tăng tốc độ scanning (quét thông tin) lên <20 giây/câu detail
- Nắm vững kỹ thuật tìm từ khóa nhanh
- Luyện mắt quét văn bản hiệu quả
- Đạt 18/20 câu detail questions trong 6 phút

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học kỹ thuật scanning (10 phút)*
**KỸ THUẬT SCANNING NHANH:**

1. **Đọc câu hỏi trước (5 giây)**
   - Xác định loại thông tin cần tìm (tên, số, ngày, địa điểm)
   - Gạch chân từ khóa
   - VD: "When will the event take place?" → Từ khóa: "event", "when"

2. **Quét văn bản (10 giây)**
   - KHÔNG đọc từng từ
   - Mắt quét NHANH tìm từ khóa
   - Chú ý: Tên viết hoa, Số, Ngày tháng (dễ nhận biết)

3. **Đọc kỹ câu chứa từ khóa (5 giây)**
   - Đọc câu trước và sau từ khóa
   - Xác định thông tin chính xác
   - Chọn đáp án

**TỔNG: <20 giây/câu**

*Giai đoạn 2: Luyện tập có thời gian (30 phút)*
1. Làm 20 câu detail questions từ Part 7
2. Dùng đồng hồ bấm giờ - ép thời gian <20s/câu
3. Quy trình:
   - Đọc câu hỏi (5s)
   - Quét văn bản (10s)
   - Đọc kỹ và chọn (5s)
4. Ghi lại thời gian thực tế cho mỗi câu
5. Mục tiêu: 18/20 đúng trong <7 phút (20s × 20 câu = 6.7 phút)

*Giai đoạn 3: Phân tích (10 phút)*
1. Xem lại các câu chậm (>20s)
   - Tại sao chậm? Không tìm thấy từ khóa? Đọc quá kỹ?
2. Xem lại các câu sai
   - Đọc không kỹ? Nhầm thông tin?
3. Làm lại các câu chậm/sai với mục tiêu <20s

**Phân bổ thời gian:**
- Học kỹ thuật: 10 phút
- Luyện tập: 30 phút
- Phân tích: 10 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Hoàn thành mỗi câu detail trong <20 giây
- Đạt 18/20 câu đúng (90%+)
- Mắt quét văn bản nhanh và chính xác
- Tự tin với detail questions`,
          methodology: [
            "Giai đoạn 1: Học kỹ thuật scanning 3 bước (10 phút)",
            "Giai đoạn 2: Làm 20 câu detail với thời gian (30 phút)",
            "Giai đoạn 3: Phân tích câu chậm và sai (10 phút)"
          ],
          timeAllocation: {
            "Học kỹ thuật": 10,
            "Luyện tập": 30,
            "Phân tích": 10
          },
          commonMistakes: [
            "❌ Đọc TOÀN BỘ đoạn văn trước khi tìm thông tin → Mất thời gian → Chỉ cần SCAN tìm từ khóa",
            "❌ Đọc từng từ khi scanning → Quá chậm → Mắt phải QUÉT NHANH, không đọc chi tiết",
            "❌ Không gạch chân từ khóa trong câu hỏi → Không biết tìm gì → Phải xác định TỪ KHÓA trước"
          ],
          instructorTips: [
            "💡 Detail questions chiếm 40% Part 7. Nếu làm nhanh (<20s) → Tiết kiệm thời gian cho câu khó",
            "💡 Luyện MẮT QUÉT: Đọc theo CỘT DỌC, không theo hàng ngang. Mắt sẽ bắt được từ khóa nhanh hơn",
            "💡 Chú ý PARAPHRASING: Câu hỏi 'When will it start?' → Bài 'The event begins...' (NOT 'starts')",
            "💡 Dùng đồng hồ bấm giờ HÀNG NGÀY. Sau 1 tuần, tốc độ sẽ tăng TỰ NHIÊN"
          ],
          checkpoints: [
            "✅ Hoàn thành mỗi câu detail trong <20 giây",
            "✅ Làm 20 câu đạt 18/20 (90%+)",
            "✅ Mắt quét văn bản không đọc từng từ",
            "✅ Gạch chân từ khóa trong mọi câu hỏi",
            "✅ Ghi lại thời gian thực tế cho mỗi câu"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Speed Reading Techniques", url: "https://www.youtube.com/results?search_query=speed+reading+scanning+technique" },
            { title: "Part 7 Detail Questions", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Skill",
          icon: "zap",
          task: "Inference Questions Practice - LC + RC",
          desc: "Luyện câu hỏi suy luận - kỹ năng quan trọng cho 900+ điểm.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững kỹ thuật làm inference questions (câu hỏi suy luận)
- Phân biệt inference vs. detail questions
- Luyện inference trong cả LC (Part 3-4) và RC (Part 7)
- Đạt 15/20 câu inference (75%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Hiểu Inference Questions (15 phút)*
**INFERENCE QUESTIONS LÀ GÌ?**
- Câu hỏi yêu cầu SUY LUẬN từ thông tin trong bài
- Đáp án KHÔNG được nói trực tiếp trong bài
- Phải KẾT HỢP nhiều thông tin để suy ra đáp án

**CÁC DẠNG INFERENCE QUESTIONS:**
1. "What is suggested/implied about...?"
2. "What will the speaker/writer probably do next?"
3. "What can be inferred about...?"
4. "Why did the speaker/writer...?"

**PHÂN BIỆT INFERENCE VS. DETAIL:**
- Detail: "When will the meeting take place?" → Đáp án CÓ TRỰC TIẾP trong bài
- Inference: "What will the woman probably do next?" → Đáp án KHÔNG CÓ TRỰC TIẾP, phải suy luận

**CHIẾN THUẬT INFERENCE:**
1. Đọc/Nghe kỹ TOÀN BỘ thông tin liên quan
2. Kết hợp 2-3 thông tin
3. Loại đáp án:
   - Không liên quan
   - Trái ngược với thông tin
   - Quá cực đoan (always, never, all, none)
4. Chọn đáp án HỢP LÝ NHẤT

*Giai đoạn 2: Luyện LC Inference (20 phút)*
1. Làm 10 đoạn Part 3-4 (10 câu inference)
2. Với MỖI câu:
   - Nghe kỹ toàn bộ đoạn
   - Xác định thông tin liên quan
   - Suy luận đáp án
   - VD: "I can't find the report" + "Check your desk" → Inference: The report is probably on the desk
3. Mục tiêu: 7/10 đúng (70%+)

*Giai đoạn 3: Luyện RC Inference (20 phút)*
1. Làm 5 đoạn Part 7 (10 câu inference)
2. Với MỖI câu:
   - Đọc kỹ toàn bộ đoạn liên quan
   - Gạch chân 2-3 thông tin cần kết hợp
   - Suy luận đáp án
   - VD: "The event is sold out" + "We have a waiting list" → Inference: The event is popular
3. Mục tiêu: 8/10 đúng (80%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Xem lại các câu sai
2. Xác định lỗi:
   - Không đọc/nghe kỹ?
   - Không kết hợp đủ thông tin?
   - Chọn đáp án quá cực đoan?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Hiểu inference: 15 phút
- Luyện LC: 20 phút
- Luyện RC: 20 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Phân biệt rõ inference vs. detail
- Đạt 15/20 câu inference (75%+)
- Thành thạo kỹ thuật suy luận
- Tự tin với câu hỏi khó nhất TOEIC`,
          methodology: [
            "Giai đoạn 1: Học kỹ thuật inference questions (15 phút)",
            "Giai đoạn 2: Làm 10 câu inference LC (20 phút)",
            "Giai đoạn 3: Làm 10 câu inference RC (20 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học kỹ thuật": 15,
            "Luyện LC": 20,
            "Luyện RC": 20,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Chọn đáp án dựa trên 1 thông tin duy nhất → Inference cần KẾT HỢP 2-3 thông tin",
            "❌ Chọn đáp án quá cực đoan (always, never, all) → TOEIC không thích đáp án cực đoan",
            "❌ Dựa vào kiến thức bên ngoài → Chỉ dựa vào THÔNG TIN TRONG BÀI"
          ],
          instructorTips: [
            "💡 Inference questions là KHÓ NHẤT TOEIC. Nếu làm tốt inference → 900+ điểm trong tầm tay",
            "💡 Đáp án inference thường là PARAPHRASE của 2-3 thông tin kết hợp",
            "💡 Loại đáp án có: always, never, all, none, must, definitely → Quá cực đoan",
            "💡 Nếu không chắc, chọn đáp án TRUNG DUNG nhất (probably, likely, may, might)"
          ],
          checkpoints: [
            "✅ Phân biệt rõ inference vs. detail questions",
            "✅ Làm 20 câu inference đạt 15/20 (75%+)",
            "✅ Kết hợp 2-3 thông tin để suy luận",
            "✅ Loại đáp án quá cực đoan",
            "✅ Ghi chú pattern lỗi inference"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Inference Questions Strategy", url: "https://www.youtube.com/results?search_query=toeic+inference+questions" },
            { title: "Part 3-4 Inference Practice", url: "https://study4.com/tests/toeic-part-3-training/" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Test",
          icon: "award",
          task: "FULL TEST 2 - ETS 2024",
          desc: "Bài thi đầy đủ thứ 2 - đo tiến bộ sau 5 tuần.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test 2 (120 phút)
- Đo tiến bộ so với Baseline và Mini Test 1
- Áp dụng TẤT CẢ chiến thuật đã học
- Xác định điểm yếu cho tháng 2

**Phương pháp thi (120 phút):**

*Chuẩn bị (10 phút):*
1. Tìm nơi yên tĩnh
2. Chuẩn bị tai nghe, đồng hồ, answer sheet
3. Tắt điện thoại
4. Tâm thế: Thi THẬT, áp dụng MỌI chiến thuật

*Listening Section (45 phút):*
**Part 1 (6 câu):**
- Mục tiêu: 6/6 (100%)
- Chú ý bẫy "being"

**Part 2 (25 câu):**
- Mục tiêu: 23/25 (92%+)
- Nghe từ đầu tiên, loại bẫy lặp từ

**Part 3 (39 câu):**
- Mục tiêu: 31/39 (80%+)
- Đọc câu hỏi trước, ghi chú từ khóa

**Part 4 (30 câu):**
- Mục tiêu: 24/30 (80%+)
- Đọc câu hỏi trước, chú ý paraphrasing

*Reading Section (75 phút):*
**Part 5 (30 câu - 10 phút):**
- Mục tiêu: 27/30 (90%+)
- <20 giây/câu, ưu tiên câu dễ

**Part 6 (16 câu - 8 phút):**
- Mục tiêu: 14/16 (87%+)
- 30 giây/câu, đọc context

**Part 7 (54 câu - 57 phút):**
- Mục tiêu: 45/54 (83%+)
- Đọc câu hỏi trước, scan tìm đáp án
- Chú ý paraphrasing và inference

*Sau khi thi (30 phút):*
1. Chấm điểm theo đáp án
2. So sánh với Baseline và Mini Test 1:
   - LC: Cải thiện bao nhiêu?
   - RC: Cải thiện bao nhiêu?
   - Tổng: Ước tính điểm TOEIC
3. Phân tích:
   - Part nào cải thiện nhiều nhất?
   - Part nào vẫn yếu?
   - Có đạt mục tiêu từng part không?
4. Lập kế hoạch cho tháng 2

**Phân bổ thời gian:**
- Listening: 45 phút
- Reading: 75 phút
- Chấm điểm & phân tích: 30 phút
- **Tổng: 150 phút**

**Kết quả mong đợi:**
- Cải thiện 30-50 câu so với Baseline
- Ước tính 750-800 điểm TOEIC
- Xác định rõ điểm yếu cho tháng 2
- Tự tin với format thi`,
          methodology: [
            "Chuẩn bị: Tìm nơi yên tĩnh, tâm thế thi thật (10 phút)",
            "Listening Section: Áp dụng mọi chiến thuật (45 phút)",
            "Reading Section: Quản lý thời gian chặt chẽ (75 phút)",
            "Chấm điểm và so sánh tiến bộ (30 phút)"
          ],
          timeAllocation: {
            "Listening": 45,
            "Reading": 75,
            "Chấm điểm": 30
          },
          commonMistakes: [
            "❌ Không áp dụng chiến thuật đã học → Làm bài như cũ → Phải ÁP DỤNG MỌI chiến thuật",
            "❌ Không quản lý thời gian → Không làm hết → Phải theo dõi thời gian CHẶT CHẼ",
            "❌ Nản lòng nếu chưa đạt 800+ → 5 tuần còn SỚM → Tiến bộ sẽ rõ hơn tháng 2-3"
          ],
          instructorTips: [
            "💡 Full Test 2 là MILESTONE quan trọng. Đây là lúc bạn thấy kết quả của 5 tuần học",
            "💡 Mục tiêu: Cải thiện 30-50 câu so với Baseline (khoảng 150-250 điểm). Nếu đạt → Bạn đang đi ĐÚNG HƯỚNG",
            "💡 Phân tích KỸ: Part nào cải thiện? Part nào vẫn yếu? → Điều chỉnh kế hoạch tháng 2",
            "💡 Đừng lo nếu chưa đạt 900. Tháng 2-3 là lúc tiến bộ BÙNG NỔ"
          ],
          checkpoints: [
            "✅ Thi đúng 120 phút không nghỉ",
            "✅ Áp dụng mọi chiến thuật đã học",
            "✅ Cải thiện 30-50 câu so với Baseline",
            "✅ Ước tính 750-800 điểm TOEIC",
            "✅ Lập kế hoạch chi tiết cho tháng 2"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "How to Analyze Full Test", url: "https://www.youtube.com/results?search_query=analyze+toeic+full+test" }
          ]
        }
      ]
    },
    {
      week: "Tuần 6: Part 4 & Advanced Grammar",
      days: [
        {
          day: "Thứ 2",
          type: "Listening",
          icon: "headphones",
          task: "Part 4 Monologues - Speed Note-taking",
          desc: "Chiến thuật Part 4 - ghi chú nhanh cho bài nói dài.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững chiến thuật Part 4 (monologues - bài nói 1 người)
- Luyện kỹ năng ghi chú nhanh (speed note-taking)
- Nhận diện 5 loại monologue phổ biến
- Đạt 24/30 câu Part 4 (80%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học chiến thuật Part 4 (20 phút)*
**ĐẶC ĐIỂM PART 4:**
- 1 người nói (monologue)
- Dài hơn Part 3 (50-60 giây)
- 3 câu hỏi/đoạn
- Thường là: Thông báo, Quảng cáo, Tin nhắn thoại, Hướng dẫn, Bài phát biểu

**5 LOẠI MONOLOGUE PHỔ BIẾN:**
1. **Announcement (Thông báo):** Thông báo công ty, sự kiện
2. **Advertisement (Quảng cáo):** Quảng cáo sản phẩm, dịch vụ
3. **Voicemail (Tin nhắn thoại):** Tin nhắn để lại
4. **Instructions (Hướng dẫn):** Hướng dẫn sử dụng, quy trình
5. **Speech (Bài phát biểu):** Phát biểu tại sự kiện

**CHIẾN THUẬT:**
1. Đọc 3 câu hỏi trước (8 giây)
2. Xác định loại monologue (2 giây đầu)
3. Nghe câu ĐẦU TIÊN (thường là chủ đề)
4. Ghi chú từ khóa trong khi nghe
5. Chọn đáp án ngay khi nghe thấy

**KỸ THUẬT GHI CHÚ NHANH:**
- Chỉ ghi TỪ KHÓA (tên, số, ngày, địa điểm, hành động)
- Dùng ký hiệu: → (will), ↑ (increase), $ (money), @ (at), # (number)
- VD: "Meeting moved to 3PM Rm 205" → "Mtg → 3PM Rm205"

*Giai đoạn 2: Luyện note-taking (15 phút)*
1. Nghe 5 đoạn Part 4
2. Luyện ghi chú với ký hiệu
3. Kiểm tra: Có đủ thông tin để trả lời 3 câu hỏi không?

*Giai đoạn 3: Luyện tập (20 phút)*
1. Làm 10 đoạn Part 4 (30 câu)
2. Áp dụng chiến thuật:
   - Đọc câu hỏi trước
   - Xác định loại monologue
   - Ghi chú từ khóa
   - Chọn đáp án ngay
3. Mục tiêu: 24/30 đúng (80%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Nghe lại các đoạn sai
2. Xem lại ghi chú: Có đủ thông tin không?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học chiến thuật: 20 phút
- Luyện note-taking: 15 phút
- Luyện tập: 20 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhận diện 5 loại monologue
- Ghi chú nhanh và hiệu quả
- Đạt 24/30 câu (80%+)
- Tự tin với Part 4`,
          methodology: [
            "Giai đoạn 1: Học chiến thuật và 5 loại monologue (20 phút)",
            "Giai đoạn 2: Luyện kỹ năng ghi chú nhanh (15 phút)",
            "Giai đoạn 3: Làm 30 câu Part 4 (20 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học chiến thuật": 20,
            "Luyện note-taking": 15,
            "Luyện tập": 20,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Ghi chú quá nhiều → Không kịp nghe → Chỉ ghi TỪ KHÓA quan trọng",
            "❌ Không xác định loại monologue → Không biết nghe gì → 2 giây đầu rất quan trọng",
            "❌ Không nghe câu đầu tiên → Bỏ lỡ chủ đề → Câu đầu thường là KEY"
          ],
          instructorTips: [
            "💡 Part 4 dễ hơn Part 3 vì chỉ 1 người nói. Không phải theo dõi ai nói gì",
            "💡 Câu ĐẦU TIÊN thường là: 'Attention shoppers...', 'This is a message for...', 'Welcome to...'",
            "💡 Loại monologue quyết định THÔNG TIN quan trọng: Announcement → Thời gian/Địa điểm, Advertisement → Sản phẩm/Ưu đãi",
            "💡 Luyện ghi chú HÀNG NGÀY. Sau 1 tuần, bạn sẽ ghi TỰ ĐỘNG không suy nghĩ"
          ],
          checkpoints: [
            "✅ Nhận diện 5 loại monologue trong 2 giây đầu",
            "✅ Làm 30 câu Part 4 đạt 24/30 (80%+)",
            "✅ Ghi chú từ khóa hiệu quả",
            "✅ Nghe câu đầu tiên để xác định chủ đề",
            "✅ Chọn đáp án ngay khi nghe thấy"
          ],
          link: "https://study4.com/tests/toeic-part-4-training/",
          additionalLinks: [
            { title: "Video: Part 4 Strategy", url: "https://www.youtube.com/@TOEICwithJunia" },
            { title: "Part 4 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Grammar",
          icon: "book-open",
          task: "Relative Clauses & Conditionals - All 4 Types",
          desc: "Mệnh đề quan hệ và câu điều kiện - ngữ pháp nâng cao cho 900+.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững mệnh đề quan hệ (who, which, that, where, when)
- Phân biệt 4 loại câu điều kiện (Type 0, 1, 2, 3)
- Nhận diện và sửa lỗi trong Part 5-6
- Đạt 18/20 câu về relative clauses và conditionals

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học Relative Clauses (15 phút)*
**MỆNH ĐỀ QUAN HỆ:**

1. **Who:** Thay thế cho NGƯỜI (chủ ngữ hoặc tân ngữ)
   - "The man who called you is my boss"

2. **Which:** Thay thế cho VẬT (chủ ngữ hoặc tân ngữ)
   - "The report which I sent yesterday was approved"

3. **That:** Thay thế cho NGƯỜI hoặc VẬT
   - "The project that we started last month is going well"

4. **Where:** Thay thế cho ĐỊA ĐIỂM
   - "The office where I work is downtown"

5. **When:** Thay thế cho THỜI GIAN
   - "The day when we met was memorable"

**QUY TẮC:**
- Sau danh từ chỉ người → who/that
- Sau danh từ chỉ vật → which/that
- Sau danh từ chỉ địa điểm → where
- Sau danh từ chỉ thời gian → when

*Giai đoạn 2: Học Conditionals (15 phút)*
**4 LOẠI CÂU ĐIỀU KIỆN:**

1. **Type 0 (Sự thật hiển nhiên):**
   - If + Present Simple, Present Simple
   - "If you heat water to 100°C, it boils"

2. **Type 1 (Có thể xảy ra trong tương lai):**
   - If + Present Simple, will + V
   - "If it rains tomorrow, we will cancel the event"

3. **Type 2 (Không có thật ở hiện tại):**
   - If + Past Simple, would + V
   - "If I had more time, I would learn Spanish"

4. **Type 3 (Không có thật trong quá khứ):**
   - If + Past Perfect, would have + V3
   - "If I had known, I would have come earlier"

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm 20 câu Part 5-6 về relative clauses và conditionals
2. Quy trình:
   - Xác định loại câu (relative clause hay conditional?)
   - Áp dụng quy tắc
   - Chọn đáp án
3. Mục tiêu: 18/20 đúng (90%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Xem lại các câu sai
2. Xác định lỗi: Nhầm who/which? Nhầm loại conditional?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học relative clauses: 15 phút
- Học conditionals: 15 phút
- Luyện tập: 15 phút
- Sửa lỗi: 5 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nắm vững relative clauses và conditionals
- Đạt 18/20 câu (90%+)
- Không nhầm who/which/that
- Phân biệt 4 loại conditionals`,
          methodology: [
            "Giai đoạn 1: Học mệnh đề quan hệ (15 phút)",
            "Giai đoạn 2: Học 4 loại câu điều kiện (15 phút)",
            "Giai đoạn 3: Làm 20 câu Part 5-6 (15 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Relative clauses": 15,
            "Conditionals": 15,
            "Luyện tập": 15,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Dùng 'what' thay vì 'which' → Sai: 'The report what I sent' → Đúng: 'The report which/that I sent'",
            "❌ Nhầm Type 1 và Type 2 → Type 1: có thể xảy ra, Type 2: không có thật",
            "❌ Dùng 'will' trong mệnh đề IF → Sai: 'If it will rain' → Đúng: 'If it rains'"
          ],
          instructorTips: [
            "💡 Relative clauses và conditionals là ngữ pháp NÂNG CAO. Nếu làm tốt → 900+ điểm",
            "💡 Trong TOEIC, 'that' có thể thay thế 'who' hoặc 'which'. Nếu không chắc → Chọn 'that'",
            "💡 Với conditionals, chú ý THÌ: Type 1 (Present + will), Type 2 (Past + would), Type 3 (Past Perfect + would have)",
            "💡 Tạo flashcards cho 4 loại conditionals và ôn HÀNG NGÀY"
          ],
          checkpoints: [
            "✅ Nắm vững who/which/that/where/when",
            "✅ Phân biệt 4 loại câu điều kiện",
            "✅ Làm 20 câu đạt 18/20 (90%+)",
            "✅ Không dùng 'will' trong mệnh đề IF",
            "✅ Tạo flashcards cho conditionals"
          ],
          link: "https://study4.com/grammar/menh-de-quan-he/",
          additionalLinks: [
            { title: "Video: Relative Clauses", url: "https://www.youtube.com/results?search_query=relative+clauses+toeic" },
            { title: "Conditionals Practice", url: "https://study4.com/tests/toeic-part-5-training/" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Vocab",
          icon: "briefcase",
          task: "Manufacturing & Logistics Vocabulary - 40 Words",
          desc: "40 từ vựng sản xuất và logistics - chủ đề phổ biến Part 7.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng Manufacturing & Logistics
- Hiểu collocations: supply chain, quality control, inventory management
- Áp dụng từ vựng vào ngữ cảnh thực tế
- Nhận biết từ trong reading Part 7

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
**40 TỪ VỰNG MANUFACTURING & LOGISTICS:**

*Manufacturing Terms:*
- production, assembly, manufacturing, factory
- quality control, inspection, defect, warranty
- raw materials, components, finished goods
- machinery, equipment, automation

*Logistics Terms:*
- supply chain, distribution, warehouse, inventory
- shipment, delivery, freight, cargo
- supplier, vendor, distributor, retailer
- tracking, packaging, handling, storage

*Actions:*
- manufacture, produce, assemble, inspect
- ship, deliver, transport, distribute
- store, stock, order, reorder

*Common Phrases:*
- supply chain management
- quality control inspection
- inventory management
- on-time delivery

Học từ Quizlet với flashcards

*Giai đoạn 2: Collocations (15 phút)*
**COLLOCATIONS QUAN TRỌNG:**
- supply chain (NOT "supply line")
- quality control (NOT "quality check")
- raw materials (NOT "raw products")
- finished goods (NOT "finished products" - cả 2 đúng nhưng "goods" phổ biến hơn)

Viết 10 câu với collocations

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm Quizlet test (chế độ Learn)
2. Đọc 3 đoạn Part 7 về manufacturing/logistics
3. Gạch chân các từ vựng vừa học
4. Làm lại test (chế độ Test) → Mục tiêu 100%

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Học collocations: 15 phút
- Luyện tập: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng
- Nắm vững 10 collocations
- Nhận biết từ trong Part 7
- Đạt 100% Quizlet test`,
          methodology: [
            "Giai đoạn 1: Học 40 từ Manufacturing & Logistics (20 phút)",
            "Giai đoạn 2: Học collocations quan trọng (15 phút)",
            "Giai đoạn 3: Test và đọc Part 7 (15 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Collocations": 15,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Nhầm 'production' (sản xuất) với 'productivity' (năng suất)",
            "❌ Nhầm 'shipment' (lô hàng) với 'shipping' (vận chuyển)",
            "❌ Nhầm 'supplier' (nhà cung cấp) với 'supply' (cung cấp/nguồn cung)"
          ],
          instructorTips: [
            "💡 Manufacturing & Logistics là chủ đề #3 trong Part 7. Học thuộc = +30 điểm RC",
            "💡 Chú ý PHÁT ÂM: 'warehouse' /ˈwerhaʊs/, 'inventory' /ˈɪnvəntɔːri/",
            "💡 Đọc báo/blog về supply chain → Làm quen với từ vựng trong ngữ cảnh tự nhiên",
            "💡 Ôn lại sau 1 ngày, 3 ngày, 1 tuần"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng Manufacturing & Logistics",
            "✅ Nắm vững 10 collocations",
            "✅ Đọc 3 đoạn Part 7 và nhận biết từ vựng",
            "✅ Đạt 100% Quizlet test",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ],
          link: "https://quizlet.com/vn/515287665/600-essential-words-for-the-toeic-lesson-5-manufacturing-logistics-flash-cards/",
          additionalLinks: [
            { title: "Manufacturing Vocabulary Video", url: "https://www.youtube.com/results?search_query=manufacturing+vocabulary" },
            { title: "Logistics Vocabulary", url: "https://www.englishclub.com/business-english/vocabulary-logistics.htm" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Skill",
          icon: "file-text",
          task: "Part 7 Triple Passages Introduction",
          desc: "Làm quen đoạn ba Part 7 - kết nối thông tin từ 3 văn bản.",
          detailedDesc: `**Mục tiêu học tập:**
- Làm quen với format đoạn ba Part 7 (3 văn bản + 5 câu hỏi)
- Nắm vững kỹ thuật cross-reference 3 văn bản
- Đọc 1 bộ đoạn ba trong 6-7 phút
- Đạt 4/5 câu đúng cho đoạn ba

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Hiểu format đoạn ba (15 phút)*
**ĐẶC ĐIỂM ĐOẠN BA:**
- 3 văn bản liên quan (email chain, notice + schedule + map, article + chart + review)
- 5 câu hỏi: 1-2 câu từ mỗi văn bản, 1-2 câu từ CẢ 3 văn bản
- Dài nhất và khó nhất Part 7

**CHIẾN THUẬT:**
1. Skim cả 3 văn bản (30 giây)
   - Xác định loại văn bản
   - Hiểu mối quan hệ giữa 3 văn bản
   - VD: Email 1 (yêu cầu) → Email 2 (phản hồi) → Email 3 (xác nhận)

2. Đọc câu hỏi 1 → Xác định văn bản nào có đáp án
   - Nếu 1 văn bản → Scan văn bản đó
   - Nếu 2-3 văn bản → Đọc cả 2-3 văn bản

3. Scan tìm đáp án (40 giây)

4. Lặp lại cho câu 2-5

**NHẬN DIỆN CÂU CROSS-REFERENCE 3 VĂN BẢN:**
- "According to ALL THREE documents..."
- "What is indicated in the email, schedule, AND map?"
- Cần đọc CẢ 3 văn bản để trả lời

*Giai đoạn 2: Luyện tập (40 phút)*
1. Làm 3 bộ đoạn ba (15 câu)
2. Quy trình cho MỖI bộ:
   - Skim cả 3 văn bản (30 giây)
   - Đọc câu hỏi → Xác định văn bản (5 giây)
   - Scan tìm đáp án (40 giây)
   - Tổng: 6-7 phút/bộ
3. Mục tiêu: 12/15 đúng (80%+)

*Giai đoạn 3: Sửa lỗi (5 phút)*
1. Với câu sai: Tìm lại thông tin trong 3 văn bản
2. Xác định lỗi: Đọc sai văn bản? Bỏ sót thông tin?
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Học kỹ thuật: 15 phút
- Luyện tập 3 bộ: 40 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Đọc 1 bộ đoạn ba trong 6-7 phút
- Đạt 12/15 câu đúng (80%+)
- Thành thạo kỹ thuật cross-reference 3 văn bản
- Không bị overwhelm bởi độ dài`,
          methodology: [
            "Giai đoạn 1: Học format và chiến thuật đoạn ba (15 phút)",
            "Giai đoạn 2: Làm 3 bộ đoạn ba (40 phút)",
            "Giai đoạn 3: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học kỹ thuật": 15,
            "Luyện tập": 40,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Đọc KỸ cả 3 văn bản trước khi xem câu hỏi → Mất 10 phút → Nên skim rồi đọc câu hỏi",
            "❌ Không nhận diện câu cross-reference → Chỉ đọc 1-2 văn bản → Chọn sai",
            "❌ Bị overwhelm bởi độ dài → Bỏ cuộc → Đoạn ba KHÔNG khó, chỉ dài. Chiến thuật đúng → Dễ làm"
          ],
          instructorTips: [
            "💡 Đoạn ba chiếm 15 câu (28% Part 7). KHÔNG BỎ QUA. Nếu làm tốt → +75 điểm RC",
            "💡 Đoạn ba KHÔNG khó hơn đoạn kép. Chỉ thêm 1 văn bản. Chiến thuật GIỐNG NHAU",
            "💡 Skim cả 3 văn bản trước → Hiểu mối quan hệ → Dễ tìm thông tin hơn",
            "💡 Nếu hết thời gian, ưu tiên đoạn đơn và kép trước. Đoạn ba làm SAU CÙNG"
          ],
          checkpoints: [
            "✅ Đọc 1 bộ đoạn ba trong 6-7 phút",
            "✅ Làm 15 câu đạt 12/15 (80%+)",
            "✅ Thành thạo kỹ thuật cross-reference 3 văn bản",
            "✅ Nhận diện câu hỏi từ cả 3 văn bản",
            "✅ Không bị overwhelm bởi độ dài"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Triple Passage Strategy", url: "https://www.youtube.com/results?search_query=toeic+part+7+triple+passage" },
            { title: "Part 7 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Review",
          icon: "zoom-in",
          task: "Mixed Skills Review - All Parts",
          desc: "Ôn tập toàn diện tuần 5-6 - chuẩn bị cho Full Test 3.",
          detailedDesc: `**Mục tiêu học tập:**
- Ôn tập toàn bộ kỹ năng tuần 5-6
- Luyện tập mixed (tất cả parts)
- Xác định điểm yếu còn lại
- Chuẩn bị cho Full Test 3 ngày mai

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Ôn lý thuyết (15 phút)*
1. Xem lại notes tuần 5-6:
   - Paraphrasing: 20 cặp từ đồng nghĩa
   - Part 4: 5 loại monologue, kỹ thuật ghi chú
   - Relative clauses & Conditionals
   - Đoạn ba Part 7: Cross-reference 3 văn bản
2. Làm flashcards cho kiến thức chưa thuộc

*Giai đoạn 2: Mixed Practice (35 phút)*
**Listening (15 phút):**
- 3 câu Part 1
- 12 câu Part 2
- 10 đoạn Part 3 (30 câu)
- 5 đoạn Part 4 (15 câu)
- Mục tiêu: 55/60 đúng (92%+)

**Reading (20 phút):**
- 15 câu Part 5
- 8 câu Part 6
- 3 đoạn Part 7 (đơn, kép, ba - 12 câu)
- Mục tiêu: 30/35 đúng (86%+)

*Giai đoạn 3: Sửa lỗi và action plan (10 phút)*
1. Xem lại các câu sai
2. Phân loại lỗi theo pattern
3. Xác định 2 điểm yếu nhất
4. Lập action plan cho Full Test 3:
   - Nếu yếu Part 4 → Tập trung ghi chú trong test
   - Nếu yếu Đoạn ba → Skim cả 3 văn bản trước
   - Nếu yếu Grammar → Ôn lại relative clauses/conditionals

**Phân bổ thời gian:**
- Ôn lý thuyết: 15 phút
- Mixed practice: 35 phút
- Sửa lỗi & action plan: 10 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Ôn lại toàn bộ kiến thức tuần 5-6
- Đạt 85/95 câu mixed (89%+)
- Xác định điểm yếu còn lại
- Sẵn sàng cho Full Test 3`,
          methodology: [
            "Giai đoạn 1: Ôn lại notes và flashcards (15 phút)",
            "Giai đoạn 2: Mixed practice LC + RC (35 phút)",
            "Giai đoạn 3: Sửa lỗi và lập action plan (10 phút)"
          ],
          timeAllocation: {
            "Ôn lý thuyết": 15,
            "Mixed practice": 35,
            "Sửa lỗi": 10
          },
          commonMistakes: [
            "❌ Chỉ ôn lý thuyết, không làm bài tập → Không hiệu quả → Phải LUYỆN TẬP",
            "❌ Làm bài tập không có thời gian → Không thực tế → Phải ÉP THỜI GIAN",
            "❌ Không lập action plan cho Full Test → Không chuẩn bị → Phải có KẾ HOẠCH cụ thể"
          ],
          instructorTips: [
            "💡 Tuần 6 là cuối tháng 2. Đây là lúc bạn thấy KẾT QUẢ rõ rệt của 6 tuần học",
            "💡 Mixed practice giúp bạn LÀM QUEN với việc chuyển đổi giữa các parts → Quan trọng cho thi thật",
            "💡 Chuẩn bị tinh thần cho Full Test 3 ngày mai. Mục tiêu: 850+ điểm",
            "💡 Nếu đạt 850+ trong Full Test 3 → Bạn đang trên đường đến 900+"
          ],
          checkpoints: [
            "✅ Ôn lại toàn bộ notes tuần 5-6",
            "✅ Làm mixed practice đạt 85/95 (89%+)",
            "✅ Xác định 2 điểm yếu nhất",
            "✅ Lập action plan cho Full Test 3",
            "✅ Sẵn sàng tinh thần cho test ngày mai"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Mixed Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" },
            { title: "Review Strategies", url: "https://www.youtube.com/results?search_query=toeic+review+strategies" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Test",
          icon: "award",
          task: "FULL TEST 3 - ETS 2024",
          desc: "Bài thi đầy đủ thứ 3 - milestone cuối tháng 2.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test 3 (120 phút)
- Đo tiến bộ sau 6 tuần (cuối tháng 2)
- Mục tiêu: 850+ điểm TOEIC
- Chuẩn bị cho tháng 3 (sprint cuối)

**Phương pháp thi (120 phút):**

*Chuẩn bị (10 phút):*
1. Tìm nơi yên tĩnh
2. Chuẩn bị đầy đủ dụng cụ
3. Tâm thế: Đây là MILESTONE quan trọng

*Listening Section (45 phút):*
**Part 1 (6 câu):** Mục tiêu 6/6 (100%)
**Part 2 (25 câu):** Mục tiêu 24/25 (96%+)
**Part 3 (39 câu):** Mục tiêu 33/39 (85%+)
**Part 4 (30 câu):** Mục tiêu 26/30 (87%+)
**Tổng LC:** Mục tiêu 89/100 (89%+) ≈ 450+ điểm

*Reading Section (75 phút):*
**Part 5 (30 câu):** Mục tiêu 28/30 (93%+)
**Part 6 (16 câu):** Mục tiêu 15/16 (94%+)
**Part 7 (54 câu):** Mục tiêu 47/54 (87%+)
**Tổng RC:** Mục tiêu 90/100 (90%+) ≈ 450+ điểm

**TỔNG: 179/200 (89.5%+) ≈ 900 điểm**

*Sau khi thi (30 phút):*
1. Chấm điểm theo đáp án
2. So sánh với Baseline và Full Test 2:
   - LC: Cải thiện bao nhiêu?
   - RC: Cải thiện bao nhiêu?
   - Có đạt 850+ không?
3. Phân tích:
   - Part nào đạt mục tiêu?
   - Part nào chưa đạt?
   - Có hết thời gian không?
4. Lập kế hoạch cho tháng 3 (sprint cuối)

**Phân bổ thời gian:**
- Listening: 45 phút
- Reading: 75 phút
- Chấm điểm & phân tích: 30 phút
- **Tổng: 150 phút**

**Kết quả mong đợi:**
- Đạt 850+ điểm TOEIC
- Cải thiện 50-70 câu so với Baseline
- Xác định điểm yếu cho tháng 3
- Tự tin với format thi`,
          methodology: [
            "Chuẩn bị: Tâm thế milestone quan trọng (10 phút)",
            "Listening Section: Mục tiêu 89/100 (45 phút)",
            "Reading Section: Mục tiêu 90/100 (75 phút)",
            "Chấm điểm và lập kế hoạch tháng 3 (30 phút)"
          ],
          timeAllocation: {
            "Listening": 45,
            "Reading": 75,
            "Chấm điểm": 30
          },
          commonMistakes: [
            "❌ Không đặt mục tiêu cụ thể → Không có động lực → Phải đặt MỤC TIÊU RÕ RÀNG (850+)",
            "❌ Không quản lý thời gian → Không làm hết → Phải theo dõi CHẶT CHẼ",
            "❌ Nản lòng nếu chưa đạt 850+ → Còn 1 tháng → Tháng 3 là lúc BÙNG NỔ"
          ],
          instructorTips: [
            "💡 Full Test 3 là MILESTONE cuối tháng 2. Nếu đạt 850+ → Bạn CÓ THỂ đạt 900+ sau 1 tháng nữa",
            "💡 Mục tiêu: Cải thiện 50-70 câu so với Baseline (khoảng 250-350 điểm). Nếu đạt → Bạn đang đi ĐÚNG HƯỚNG",
            "💡 Tháng 3 là SPRINT CUỐI. Tập trung vào: Full tests, Time management, Weakness elimination",
            "💡 Nếu chưa đạt 850+, ĐỪNG lo. Tháng 3 là lúc tiến bộ NHANH NHẤT"
          ],
          checkpoints: [
            "✅ Thi đúng 120 phút không nghỉ",
            "✅ Đạt mục tiêu từng part",
            "✅ Ước tính 850+ điểm TOEIC",
            "✅ Cải thiện 50-70 câu so với Baseline",
            "✅ Lập kế hoạch chi tiết cho tháng 3"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "Month 3 Sprint Strategy", url: "https://www.youtube.com/results?search_query=toeic+final+sprint" }
          ]
        }
      ]
    },
    {
      week: "Tuần 7: Triple Passages & Inference Mastery",
      days: [
        {
          day: "Thứ 2",
          type: "Skill",
          icon: "file-text",
          task: "Part 7 Triple Passage Strategy - 5 min/set",
          desc: "Chiến thuật đoạn ba nâng cao - hoàn thành trong 5 phút.",
          detailedDesc: `**Mục tiêu học tập:**
- Tăng tốc độ đọc đoạn ba lên 5 phút/bộ (từ 6-7 phút)
- Nắm vững kỹ thuật skim 3 văn bản trong 20 giây
- Luyện cross-reference nhanh giữa 3 văn bản
- Đạt 13/15 câu đoạn ba (87%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học chiến thuật nâng cao (15 phút)*
**CHIẾN THUẬT 5 PHÚT/BỘ:**

1. **Skim cực nhanh (20 giây):**
   - Văn bản 1: Đọc tiêu đề + câu đầu (5 giây)
   - Văn bản 2: Đọc tiêu đề + câu đầu (5 giây)
   - Văn bản 3: Đọc tiêu đề + câu đầu (5 giây)
   - Xác định mối quan hệ (5 giây)

2. **Đọc câu hỏi và scan (4 phút 40 giây):**
   - Câu 1: Đọc câu hỏi (5s) + Scan (40s) = 45s
   - Câu 2: Đọc câu hỏi (5s) + Scan (40s) = 45s
   - Câu 3: Đọc câu hỏi (5s) + Scan (40s) = 45s
   - Câu 4: Đọc câu hỏi (5s) + Scan (40s) = 45s
   - Câu 5: Đọc câu hỏi (5s) + Scan (60s) = 65s (thường là cross-reference)
   - Tổng: 4 phút 40 giây

**KỸ THUẬT SKIM NHANH 3 VĂN BẢN:**
- KHÔNG đọc chi tiết
- Chỉ đọc: Tiêu đề, Câu đầu, Tên người/công ty, Ngày tháng
- Mục tiêu: Hiểu TỔNG QUAN mối quan hệ

**KỸ THUẬT CROSS-REFERENCE NHANH:**
- Nhận diện từ khóa "ALL THREE", "BOTH", "ACCORDING TO..."
- Gạch chân thông tin liên quan trong CẢ 3 văn bản
- Kết hợp thông tin → Chọn đáp án

*Giai đoạn 2: Luyện tập có thời gian (40 phút)*
1. Làm 5 bộ đoạn ba (25 câu)
2. Dùng đồng hồ bấm giờ - ép thời gian 5 phút/bộ
3. Ghi lại thời gian thực tế cho mỗi bộ
4. Mục tiêu: 22/25 đúng (88%+) trong 25 phút

*Giai đoạn 3: Phân tích (5 phút)*
1. Xem lại các bộ chậm (>5 phút)
   - Tại sao chậm? Đọc quá kỹ? Không skim trước?
2. Xem lại các câu sai
   - Đọc sai văn bản? Bỏ sót thông tin?
3. Làm lại các bộ chậm/sai với mục tiêu 5 phút

**Phân bổ thời gian:**
- Học chiến thuật: 15 phút
- Luyện tập: 40 phút
- Phân tích: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Hoàn thành mỗi bộ đoạn ba trong 5 phút
- Đạt 22/25 câu đúng (88%+)
- Skim 3 văn bản trong 20 giây
- Tự tin với đoạn ba`,
          methodology: [
            "Giai đoạn 1: Học chiến thuật 5 phút/bộ (15 phút)",
            "Giai đoạn 2: Làm 5 bộ đoạn ba với thời gian (40 phút)",
            "Giai đoạn 3: Phân tích bộ chậm và sai (5 phút)"
          ],
          timeAllocation: {
            "Học chiến thuật": 15,
            "Luyện tập": 40,
            "Phân tích": 5
          },
          commonMistakes: [
            "❌ Đọc KỸ cả 3 văn bản trong giai đoạn skim → Mất 2-3 phút → Chỉ cần đọc tiêu đề + câu đầu",
            "❌ Không dùng đồng hồ bấm giờ → Không biết tốc độ thực tế → Phải ÉP THỜI GIAN",
            "❌ Bỏ qua đoạn ba vì quá dài → Mất 15 câu → Đoạn ba KHÔNG khó, chỉ cần chiến thuật đúng"
          ],
          instructorTips: [
            "💡 Đoạn ba chiếm 15 câu (7.5% tổng điểm). Nếu làm tốt → +75 điểm TOEIC",
            "💡 5 phút/bộ là MỤC TIÊU cho 900+ điểm. Nếu đạt → Bạn sẽ có đủ thời gian cho toàn bộ Part 7",
            "💡 Skim là CHÌA KHÓA. Đừng đọc chi tiết trong giai đoạn skim. Chỉ cần hiểu TỔNG QUAN",
            "💡 Luyện đoạn ba HÀNG NGÀY 1 bộ. Sau 1 tuần, tốc độ sẽ tăng TỰ NHIÊN"
          ],
          checkpoints: [
            "✅ Hoàn thành mỗi bộ đoạn ba trong 5 phút",
            "✅ Làm 25 câu đạt 22/25 (88%+)",
            "✅ Skim 3 văn bản trong 20 giây",
            "✅ Cross-reference nhanh giữa 3 văn bản",
            "✅ Ghi lại thời gian thực tế cho mỗi bộ"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: Triple Passage Speed Strategy", url: "https://www.youtube.com/results?search_query=toeic+triple+passage+speed" },
            { title: "Part 7 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Skill",
          icon: "zap",
          task: "Inference Questions Mastery - NOT/TRUE",
          desc: "Làm chủ câu hỏi NOT/TRUE - loại khó nhất Part 7.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững kỹ thuật làm câu hỏi NOT/TRUE
- Phân biệt "Which is NOT mentioned?" vs. "Which is TRUE?"
- Luyện kỹ năng loại trừ đáp án
- Đạt 15/20 câu NOT/TRUE (75%+)

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Hiểu câu hỏi NOT/TRUE (15 phút)*
**2 DẠNG CÂU HỎI:**

1. **"Which is NOT mentioned/stated/indicated?"**
   - 3 đáp án CÓ trong bài
   - 1 đáp án KHÔNG CÓ trong bài → Chọn đáp án này
   - Phải đọc TOÀN BỘ bài để chắc chắn

2. **"Which is TRUE/correct about...?"**
   - 3 đáp án SAI hoặc KHÔNG CÓ trong bài
   - 1 đáp án ĐÚNG và CÓ trong bài → Chọn đáp án này
   - Có thể chọn ngay khi tìm thấy đáp án đúng

**CHIẾN THUẬT:**

**Với "NOT mentioned":**
1. Đọc kỹ toàn bộ bài (1 phút)
2. Đọc 4 đáp án
3. Tìm từng đáp án trong bài:
   - Đáp án A: Có trong bài → Gạch bỏ
   - Đáp án B: Có trong bài → Gạch bỏ
   - Đáp án C: Có trong bài → Gạch bỏ
   - Đáp án D: KHÔNG có trong bài → Chọn D
4. Tổng: 1.5-2 phút/câu

**Với "TRUE":**
1. Đọc 4 đáp án trước
2. Scan bài tìm từng đáp án:
   - Đáp án A: Sai hoặc không có → Gạch bỏ
   - Đáp án B: ĐÚNG và có trong bài → Chọn B ngay
3. Tổng: 1-1.5 phút/câu

*Giai đoạn 2: Luyện tập NOT questions (20 phút)*
1. Làm 10 câu "NOT mentioned"
2. Áp dụng chiến thuật:
   - Đọc kỹ toàn bộ bài
   - Tìm từng đáp án trong bài
   - Loại trừ 3 đáp án có trong bài
   - Chọn đáp án không có
3. Mục tiêu: 7/10 đúng (70%+)

*Giai đoạn 3: Luyện tập TRUE questions (20 phút)*
1. Làm 10 câu "TRUE/correct"
2. Áp dụng chiến thuật:
   - Đọc 4 đáp án trước
   - Scan bài tìm đáp án đúng
   - Chọn ngay khi tìm thấy
3. Mục tiêu: 8/10 đúng (80%+)

*Giai đoạn 4: Sửa lỗi (5 phút)*
1. Xem lại các câu sai
2. Xác định lỗi:
   - Không đọc kỹ toàn bộ bài? (NOT)
   - Nhầm paraphrase? (TRUE)
3. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Hiểu câu hỏi: 15 phút
- Luyện NOT: 20 phút
- Luyện TRUE: 20 phút
- Sửa lỗi: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Phân biệt rõ NOT vs. TRUE questions
- Đạt 15/20 câu (75%+)
- Thành thạo kỹ thuật loại trừ
- Tự tin với câu hỏi khó nhất`,
          methodology: [
            "Giai đoạn 1: Học chiến thuật NOT vs. TRUE (15 phút)",
            "Giai đoạn 2: Làm 10 câu NOT mentioned (20 phút)",
            "Giai đoạn 3: Làm 10 câu TRUE/correct (20 phút)",
            "Giai đoạn 4: Phân tích lỗi sai (5 phút)"
          ],
          timeAllocation: {
            "Học chiến thuật": 15,
            "Luyện NOT": 20,
            "Luyện TRUE": 20,
            "Sửa lỗi": 5
          },
          commonMistakes: [
            "❌ Với NOT: Chọn ngay đáp án đầu tiên không thấy → Có thể ở cuối bài → Phải đọc TOÀN BỘ bài",
            "❌ Với TRUE: Đọc toàn bộ bài trước → Mất thời gian → Nên đọc đáp án trước, rồi scan",
            "❌ Nhầm paraphrase → Nghĩ đáp án không có trong bài → Phải chú ý PARAPHRASE"
          ],
          instructorTips: [
            "💡 NOT/TRUE là câu hỏi KHÓ NHẤT Part 7. Nếu làm tốt → 900+ điểm trong tầm tay",
            "💡 Với NOT: Phải đọc TOÀN BỘ bài. Không có cách tắt. Dành 1.5-2 phút/câu",
            "💡 Với TRUE: Đọc đáp án trước → Scan bài → Chọn ngay khi tìm thấy. Nhanh hơn NOT",
            "💡 Chú ý PARAPHRASE: Bài 'postpone', đáp án 'delay' → Cùng nghĩa"
          ],
          checkpoints: [
            "✅ Phân biệt rõ NOT vs. TRUE questions",
            "✅ Làm 20 câu đạt 15/20 (75%+)",
            "✅ Với NOT: Đọc toàn bộ bài trước khi chọn",
            "✅ Với TRUE: Đọc đáp án trước, scan bài",
            "✅ Chú ý paraphrase trong mọi câu"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Video: NOT/TRUE Questions Strategy", url: "https://www.youtube.com/results?search_query=toeic+not+true+questions" },
            { title: "Part 7 Practice Tests", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Vocab",
          icon: "briefcase",
          task: "Healthcare & Pharmaceuticals Vocabulary - 40 Words",
          desc: "40 từ vựng y tế dược phẩm - chủ đề chuyên ngành trong TOEIC.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững 40 từ vựng Healthcare & Pharmaceuticals
- Hiểu collocations: medical examination, prescription drug, health insurance
- Áp dụng từ vựng vào ngữ cảnh thực tế
- Nhận biết từ trong reading Part 7

**Phương pháp học chi tiết (50 phút):**

*Giai đoạn 1: Học từ mới (20 phút)*
**40 TỪ VỰNG HEALTHCARE & PHARMACEUTICALS:**

*Healthcare Terms:*
- patient, doctor, physician, nurse
- hospital, clinic, medical center, pharmacy
- examination, diagnosis, treatment, surgery
- appointment, consultation, referral

*Pharmaceutical Terms:*
- medication, prescription, drug, dosage
- side effect, allergy, symptom, cure
- vaccine, injection, tablet, capsule
- over-the-counter, generic, brand name

*Actions:*
- prescribe, diagnose, treat, cure
- administer, dispense, refill, renew
- examine, consult, refer, recommend

*Common Phrases:*
- medical examination, health insurance
- prescription drug, side effects
- make an appointment, fill a prescription
- over-the-counter medication

Học từ Quizlet với flashcards

*Giai đoạn 2: Collocations (15 phút)*
**COLLOCATIONS QUAN TRỌNG:**
- medical examination (NOT "medical check")
- prescription drug (NOT "prescription medicine" - cả 2 đúng nhưng "drug" phổ biến hơn)
- side effects (NOT "side reactions")
- health insurance (NOT "medical insurance" - cả 2 đúng)

Viết 10 câu với collocations

*Giai đoạn 3: Luyện tập (15 phút)*
1. Làm Quizlet test (chế độ Learn)
2. Đọc 2 đoạn Part 7 về healthcare/pharmaceuticals
3. Gạch chân các từ vựng vừa học
4. Làm lại test (chế độ Test) → Mục tiêu 100%

**Phân bổ thời gian:**
- Học từ mới: 20 phút
- Học collocations: 15 phút
- Luyện tập: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Nhớ 40/40 từ vựng
- Nắm vững 10 collocations
- Nhận biết từ trong Part 7
- Đạt 100% Quizlet test`,
          methodology: [
            "Giai đoạn 1: Học 40 từ Healthcare & Pharmaceuticals (20 phút)",
            "Giai đoạn 2: Học collocations quan trọng (15 phút)",
            "Giai đoạn 3: Test và đọc Part 7 (15 phút)"
          ],
          timeAllocation: {
            "Học từ mới": 20,
            "Collocations": 15,
            "Luyện tập": 15
          },
          commonMistakes: [
            "❌ Nhầm 'prescription' (đơn thuốc) với 'subscription' (đăng ký)",
            "❌ Nhầm 'patient' (bệnh nhân) với 'patience' (sự kiên nhẫn)",
            "❌ Nhầm 'dose' (liều lượng) với 'dosage' (liều dùng)"
          ],
          instructorTips: [
            "💡 Healthcare là chủ đề #4 trong Part 7. Học thuộc = +30 điểm RC",
            "💡 Chú ý PHÁT ÂM: 'physician' /fɪˈzɪʃən/, 'prescription' /prɪˈskrɪpʃən/",
            "💡 Đọc bài báo y tế → Làm quen với từ vựng trong ngữ cảnh tự nhiên",
            "💡 Ôn lại sau 1 ngày, 3 ngày, 1 tuần"
          ],
          checkpoints: [
            "✅ Học thuộc 40 từ vựng Healthcare & Pharmaceuticals",
            "✅ Nắm vững 10 collocations",
            "✅ Đọc 2 đoạn Part 7 và nhận biết từ vựng",
            "✅ Đạt 100% Quizlet test",
            "✅ Lên lịch ôn lại sau 3 ngày"
          ],
          link: "https://quizlet.com/vn/515287666/600-essential-words-for-the-toeic-lesson-6-healthcare-pharmaceuticals-flash-cards/",
          additionalLinks: [
            { title: "Healthcare Vocabulary Video", url: "https://www.youtube.com/results?search_query=healthcare+vocabulary" },
            { title: "Medical English", url: "https://www.englishclub.com/english-for-work/medical.htm" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Skill",
          icon: "zap",
          task: "Time Management Drills - P5-6: 15min, P7: 55min",
          desc: "Luyện quản lý thời gian - chia thời gian tối ưu cho Reading.",
          detailedDesc: `**Mục tiêu học tập:**
- Nắm vững phân bổ thời gian tối ưu cho Reading (75 phút)
- Luyện hoàn thành Part 5-6 trong 15 phút
- Luyện hoàn thành Part 7 trong 55 phút
- Không bỏ sót câu nào vì hết thời gian

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Học phân bổ thời gian (10 phút)*
**PHÂN BỔ THỜI GIAN TỐI ƯU (75 phút):**

**Part 5 (30 câu - 10 phút):**
- 20 giây/câu
- Ưu tiên câu dễ (từ loại, giới từ): 10-15 giây
- Câu khó (ngữ pháp phức tạp): 25-30 giây
- Nếu không biết sau 30 giây → Đoán và chuyển câu tiếp

**Part 6 (16 câu - 5 phút):**
- 20 giây/câu
- Đọc cả đoạn trước khi chọn: 30 giây
- Tổng: 30s + (20s × 4 câu) = 2 phút/đoạn
- 4 đoạn × 2 phút = 8 phút → Mục tiêu: 5 phút

**Part 7 (54 câu - 55 phút):**
- Đoạn đơn (29 câu): 2-3 phút/đoạn = 25 phút
- Đoạn kép (10 câu): 4-5 phút/bộ = 10 phút
- Đoạn ba (15 câu): 5-6 phút/bộ = 18 phút
- Tổng: 53 phút → Dự phòng: 2 phút

**CHIẾN THUẬT:**
- Làm Part 5-6 NHANH (15 phút) → Dành thời gian cho Part 7
- Part 7 chiếm 54% điểm RC → Quan trọng nhất
- Nếu hết thời gian, ưu tiên Part 7 hơn Part 5-6

*Giai đoạn 2: Drill Part 5-6 (15 phút)*
1. Làm Part 5-6 đầy đủ (46 câu)
2. Dùng đồng hồ bấm giờ - ép thời gian 15 phút
3. Quy trình:
   - Part 5: 10 phút (30 câu)
   - Part 6: 5 phút (16 câu)
4. Ghi lại thời gian thực tế
5. Mục tiêu: 40/46 đúng (87%+) trong 15 phút

*Giai đoạn 3: Drill Part 7 (30 phút)*
1. Làm Part 7 đầy đủ (54 câu)
2. Dùng đồng hồ bấm giờ - ép thời gian 55 phút
   - NHƯNG chỉ làm 30 phút trong session này (để fit 60 phút tổng)
   - Làm: 15 đoạn đơn (30 câu) trong 25 phút
3. Ghi lại thời gian thực tế cho mỗi đoạn
4. Mục tiêu: 26/30 đúng (87%+) trong 25 phút

*Giai đoạn 4: Phân tích (5 phút)*
1. Xem lại thời gian:
   - Part 5-6: Có hoàn thành trong 15 phút không?
   - Part 7: Có hoàn thành đúng thời gian không?
2. Xác định vấn đề:
   - Nếu chậm Part 5-6 → Tăng tốc độ, đoán câu khó
   - Nếu chậm Part 7 → Tăng tốc scanning, skim nhanh hơn
3. Lập kế hoạch cải thiện

**Phân bổ thời gian:**
- Học phân bổ: 10 phút
- Drill Part 5-6: 15 phút
- Drill Part 7: 30 phút
- Phân tích: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Hoàn thành Part 5-6 trong 15 phút
- Hoàn thành Part 7 đúng thời gian
- Không bỏ sót câu nào
- Tự tin với time management`,
          methodology: [
            "Giai đoạn 1: Học phân bổ thời gian tối ưu (10 phút)",
            "Giai đoạn 2: Drill Part 5-6 trong 15 phút (15 phút)",
            "Giai đoạn 3: Drill Part 7 đoạn đơn (30 phút)",
            "Giai đoạn 4: Phân tích thời gian (5 phút)"
          ],
          timeAllocation: {
            "Học phân bổ": 10,
            "Drill Part 5-6": 15,
            "Drill Part 7": 30,
            "Phân tích": 5
          },
          commonMistakes: [
            "❌ Dành quá nhiều thời gian cho Part 5-6 (>20 phút) → Không đủ thời gian cho Part 7 → Phải NHANH Part 5-6",
            "❌ Không dùng đồng hồ bấm giờ → Không biết tốc độ thực tế → Phải ÉP THỜI GIAN",
            "❌ Suy nghĩ quá lâu câu khó → Mất thời gian → Nếu không biết sau 30s → ĐOÁN và chuyển câu"
          ],
          instructorTips: [
            "💡 Time management là KỸ NĂNG QUAN TRỌNG NHẤT cho 900+ điểm. Nhiều người biết nhưng không đủ thời gian",
            "💡 Part 5-6 phải NHANH (15 phút). Nếu chậm → Không đủ thời gian cho Part 7 → Mất nhiều điểm hơn",
            "💡 Luyện time management HÀNG NGÀY. Sau 1 tuần, bạn sẽ làm TỰ ĐỘNG đúng thời gian",
            "💡 Trong thi thật, nếu hết thời gian → Đoán NGAY tất cả câu còn lại. Đừng để trống"
          ],
          checkpoints: [
            "✅ Hoàn thành Part 5-6 trong 15 phút",
            "✅ Hoàn thành Part 7 đúng thời gian",
            "✅ Đạt 87%+ độ chính xác",
            "✅ Ghi lại thời gian thực tế cho mỗi part",
            "✅ Xác định vấn đề và lập kế hoạch cải thiện"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/",
          additionalLinks: [
            { title: "Video: Time Management Strategy", url: "https://www.youtube.com/results?search_query=toeic+time+management" },
            { title: "Reading Section Practice", url: "https://study4.com/tests/toeic-part-5-training/" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Review",
          icon: "zoom-in",
          task: "Weeks 5-7 Comprehensive Review",
          desc: "Ôn tập toàn diện tuần 5-7 - củng cố tháng 2.",
          detailedDesc: `**Mục tiêu học tập:**
- Ôn tập toàn bộ kiến thức tuần 5-7 (tháng 2)
- Luyện tập mixed tất cả skills
- Xác định điểm yếu cuối cùng trước Full Test 4
- Chuẩn bị cho Full Test 4 ngày mai

**Phương pháp học chi tiết (90 phút):**

*Giai đoạn 1: Ôn lý thuyết (20 phút)*
1. Xem lại notes tuần 5-7:
   - **Tuần 5:** Paraphrasing (20 cặp từ), Shadowing Part 3, Marketing vocab, Scanning speed, Inference
   - **Tuần 6:** Part 4 monologues, Relative clauses & Conditionals, Manufacturing vocab, Triple passages
   - **Tuần 7:** Triple passage 5 min/set, NOT/TRUE questions, Healthcare vocab, Time management
2. Làm flashcards cho kiến thức chưa thuộc
3. Ôn lại 120 từ vựng tháng 2

*Giai đoạn 2: Mixed Practice (60 phút)*
**Listening (25 phút):**
- 3 câu Part 1
- 12 câu Part 2
- 15 đoạn Part 3 (45 câu) - Chú ý paraphrasing
- 10 đoạn Part 4 (30 câu) - Chú ý ghi chú nhanh
- Mục tiêu: 85/90 đúng (94%+)

**Reading (35 phút):**
- 20 câu Part 5 - Chú ý relative clauses & conditionals
- 12 câu Part 6
- 5 đoạn Part 7 (20 câu):
  - 2 đoạn đơn (8 câu)
  - 1 đoạn kép (5 câu)
  - 1 đoạn ba (5 câu) - Mục tiêu 5 phút
  - 2 câu NOT/TRUE
- Mục tiêu: 45/52 đúng (87%+)

*Giai đoạn 3: Sửa lỗi và action plan (10 phút)*
1. Xem lại các câu sai
2. Phân loại lỗi theo pattern
3. Xác định 2 điểm yếu cuối cùng
4. Lập action plan cho Full Test 4:
   - Nếu vẫn yếu Part 4 → Tập trung ghi chú
   - Nếu vẫn yếu Đoạn ba → Skim 20 giây, scan nhanh
   - Nếu vẫn yếu Time management → Ép thời gian chặt chẽ

**Phân bổ thời gian:**
- Ôn lý thuyết: 20 phút
- Mixed practice: 60 phút
- Sửa lỗi & action plan: 10 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Ôn lại toàn bộ kiến thức tháng 2
- Đạt 130/142 câu mixed (92%+)
- Xác định điểm yếu cuối cùng
- Sẵn sàng cho Full Test 4`,
          methodology: [
            "Giai đoạn 1: Ôn lại notes và vocab tháng 2 (20 phút)",
            "Giai đoạn 2: Mixed practice LC + RC (60 phút)",
            "Giai đoạn 3: Sửa lỗi và lập action plan (10 phút)"
          ],
          timeAllocation: {
            "Ôn lý thuyết": 20,
            "Mixed practice": 60,
            "Sửa lỗi": 10
          },
          commonMistakes: [
            "❌ Chỉ ôn lý thuyết, không làm bài tập → Không hiệu quả → Phải LUYỆN TẬP",
            "❌ Không ôn lại vocab → Quên từ → Phải ôn 120 từ tháng 2",
            "❌ Không lập action plan cho Full Test → Không chuẩn bị → Phải có KẾ HOẠCH cụ thể"
          ],
          instructorTips: [
            "💡 Tuần 7 là cuối tháng 2. Đây là lúc BẠN THẤY KẾT QUẢ rõ rệt nhất",
            "💡 Mục tiêu Full Test 4: 870-900 điểm. Nếu đạt → Bạn CÓ THỂ đạt 900+ trong tháng 3",
            "💡 Tháng 3 là SPRINT CUỐI. Tập trung: Full tests (8 tests), Time management, Zero mistakes",
            "💡 Chuẩn bị tinh thần cho Full Test 4 ngày mai. Đây là test QUAN TRỌNG NHẤT trước tháng 3"
          ],
          checkpoints: [
            "✅ Ôn lại toàn bộ notes tuần 5-7",
            "✅ Làm mixed practice đạt 130/142 (92%+)",
            "✅ Ôn lại 120 từ vựng tháng 2",
            "✅ Lập action plan cho Full Test 4",
            "✅ Sẵn sàng tinh thần cho test ngày mai"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Month 2 Review", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/" },
            { title: "Comprehensive Review Video", url: "https://www.youtube.com/results?search_query=toeic+comprehensive+review" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Test",
          icon: "award",
          task: "FULL TEST 4 - ETS 2024",
          desc: "Bài thi đầy đủ thứ 4 - milestone cuối tháng 2, chuẩn bị tháng 3.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test 4 (120 phút)
- Đo tiến bộ sau 7 tuần (cuối tháng 2)
- Mục tiêu: 870-900 điểm TOEIC
- Xác định điểm yếu cho tháng 3 (sprint cuối)

**Phương pháp thi (120 phút):**

*Chuẩn bị (10 phút):*
1. Tìm nơi yên tĩnh
2. Chuẩn bị đầy đủ dụng cụ
3. Tâm thế: Đây là MILESTONE cuối tháng 2

*Listening Section (45 phút):*
**Part 1 (6 câu):** Mục tiêu 6/6 (100%)
**Part 2 (25 câu):** Mục tiêu 24/25 (96%+)
**Part 3 (39 câu):** Mục tiêu 35/39 (90%+)
**Part 4 (30 câu):** Mục tiêu 27/30 (90%+)
**Tổng LC:** Mục tiêu 92/100 (92%+) ≈ 470+ điểm

*Reading Section (75 phút):*
**Part 5 (30 câu):** Mục tiêu 28/30 (93%+)
**Part 6 (16 câu):** Mục tiêu 15/16 (94%+)
**Part 7 (54 câu):** Mục tiêu 49/54 (91%+)
**Tổng RC:** Mục tiêu 92/100 (92%+) ≈ 470+ điểm

**TỔNG: 184/200 (92%+) ≈ 940 điểm**

*Sau khi thi (30 phút):*
1. Chấm điểm theo đáp án
2. So sánh với Baseline và Full Test 2-3:
   - LC: Cải thiện bao nhiêu?
   - RC: Cải thiện bao nhiêu?
   - Có đạt 870+ không?
3. Phân tích:
   - Part nào đạt mục tiêu?
   - Part nào chưa đạt?
   - Time management có tốt không?
4. Lập kế hoạch chi tiết cho tháng 3

**Phân bổ thời gian:**
- Listening: 45 phút
- Reading: 75 phút
- Chấm điểm & phân tích: 30 phút
- **Tổng: 150 phút**

**Kết quả mong đợi:**
- Đạt 870-900 điểm TOEIC
- Cải thiện 60-80 câu so với Baseline
- Xác định điểm yếu cho tháng 3
- Tự tin với mọi parts`,
          methodology: [
            "Chuẩn bị: Tâm thế milestone cuối tháng 2 (10 phút)",
            "Listening Section: Mục tiêu 92/100 (45 phút)",
            "Reading Section: Mục tiêu 92/100 (75 phút)",
            "Chấm điểm và lập kế hoạch tháng 3 (30 phút)"
          ],
          timeAllocation: {
            "Listening": 45,
            "Reading": 75,
            "Chấm điểm": 30
          },
          commonMistakes: [
            "❌ Không đặt mục tiêu cao (870-900) → Không có động lực → Phải đặt MỤC TIÊU CAO",
            "❌ Không time management chặt chẽ → Không làm hết → Phải theo dõi THỜI GIAN",
            "❌ Nản lòng nếu chưa đạt 900 → Còn 1 tháng → Tháng 3 là lúc HOÀN THIỆN"
          ],
          instructorTips: [
            "💡 Full Test 4 là MILESTONE cuối tháng 2. Nếu đạt 870+ → Bạn SẼ đạt 900+ sau 1 tháng",
            "💡 Mục tiêu: 870-900 điểm. Nếu đạt → Tháng 3 chỉ cần HOÀN THIỆN và duy trì",
            "💡 Tháng 3 chiến lược: 8 Full tests (Test 5-8 + 4 tests cuối), Time management perfection, Zero mistakes drills",
            "💡 Nếu đạt 900 trong Full Test 4 → CHÚC MỪNG! Tháng 3 chỉ cần duy trì và chuẩn bị tâm lý thi thật"
          ],
          checkpoints: [
            "✅ Thi đúng 120 phút không nghỉ",
            "✅ Đạt mục tiêu từng part",
            "✅ Ước tính 870-900 điểm TOEIC",
            "✅ Cải thiện 60-80 câu so với Baseline",
            "✅ Lập kế hoạch chi tiết cho tháng 3"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-4-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "Month 3 Final Sprint", url: "https://www.youtube.com/results?search_query=toeic+final+month+strategy" }
          ]
        }
      ]
    }
  ],
  month3: [
    {
      week: "Tuần 9: High Simulation",
      days: [
        {
          day: "Thứ 2",
          type: "Test",
          icon: "award",
          task: "FULL TEST 5 - Simulation Conditions",
          desc: "Bài thi mô phỏng hoàn toàn điều kiện thi thật.",
          detailedDesc: `**Mục tiêu học tập:**
- Thi trong điều kiện MÔ PHỎNG HOÀN TOÀN thi thật
- Đo năng lực thực tế trước kỳ thi
- Mục tiêu: 900+ điểm TOEIC
- Xác định điểm yếu cuối cùng cần sửa

**Phương pháp thi (120 phút):**

*Chuẩn bị MÔ PHỎNG THI THẬT (15 phút):*
1. **Địa điểm:** Phòng yên tĩnh, giống phòng thi
2. **Thời gian:** Thi vào buổi sáng (8-10 AM) như thi thật
3. **Dụng cụ:** 
   - Bút chì 2B và tẩy (KHÔNG dùng bút bi)
   - Answer sheet in ra (giống thi thật)
   - Đồng hồ đeo tay (KHÔNG dùng điện thoại)
4. **Quy định:**
   - KHÔNG uống nước/ăn trong khi thi
   - KHÔNG nghỉ giữa LC và RC
   - KHÔNG xem lại LC sau khi hết thời gian
5. **Tâm thế:** Đây là THI THẬT, không phải luyện tập

*Listening Section (45 phút):*
**Mục tiêu tổng: 95/100 (95%+) ≈ 485+ điểm**
- Part 1: 6/6 (100%)
- Part 2: 24/25 (96%+)
- Part 3: 37/39 (95%+)
- Part 4: 28/30 (93%+)

**Áp dụng MỌI chiến thuật:**
- Part 1: Quan sát ảnh 5s, chú ý bẫy "being"
- Part 2: Nghe từ đầu tiên, loại bẫy lặp từ
- Part 3-4: Đọc câu hỏi trước, ghi chú từ khóa, chú ý paraphrasing

*Reading Section (75 phút):*
**Mục tiêu tổng: 95/100 (95%+) ≈ 485+ điểm**
- Part 5: 29/30 (97%+)
- Part 6: 15/16 (94%+)
- Part 7: 51/54 (94%+)

**Time Management CHẶT CHẼ:**
- Part 5: 10 phút (20s/câu)
- Part 6: 5 phút (20s/câu)
- Part 7: 55 phút
  - Đoạn đơn: 2-3 phút/đoạn
  - Đoạn kép: 4-5 phút/bộ
  - Đoạn ba: 5 phút/bộ
- Dự phòng: 5 phút

*Sau khi thi (60 phút):*
1. **Chấm điểm chi tiết (20 phút):**
   - Chấm từng part
   - Tính điểm ước lượng
   - So sánh với mục tiêu

2. **Deep Analysis (30 phút):**
   - Phân tích MỌI câu sai
   - Xác định pattern lỗi
   - Tạo error log chi tiết
   - Xác định 3 điểm yếu cuối cùng

3. **Action Plan (10 phút):**
   - Lập kế hoạch sửa 3 điểm yếu
   - Chuẩn bị cho Deep Correction 2 ngày tới

**Phân bổ thời gian:**
- Chuẩn bị: 15 phút
- Listening: 45 phút
- Reading: 75 phút
- Chấm điểm & phân tích: 60 phút
- **Tổng: 195 phút**

**Kết quả mong đợi:**
- Đạt 900+ điểm TOEIC (190/200 câu)
- Hoàn thành đúng thời gian
- Xác định 3 điểm yếu cuối cùng
- Tự tin với điều kiện thi thật`,
          methodology: [
            "Chuẩn bị: Mô phỏng hoàn toàn điều kiện thi thật (15 phút)",
            "Listening Section: Mục tiêu 95/100 (45 phút)",
            "Reading Section: Mục tiêu 95/100 (75 phút)",
            "Deep Analysis: Phân tích chi tiết mọi lỗi (60 phút)"
          ],
          timeAllocation: {
            "Chuẩn bị": 15,
            "Listening": 45,
            "Reading": 75,
            "Phân tích": 60
          },
          commonMistakes: [
            "❌ Không thi trong điều kiện mô phỏng → Kết quả không chính xác → Phải MÔ PHỎNG HOÀN TOÀN",
            "❌ Thi vào tối/đêm thay vì buổi sáng → Không giống thi thật → Phải thi BUỔI SÁNG",
            "❌ Không phân tích sâu sau thi → Không biết điểm yếu → Phải PHÂN TÍCH CHI TIẾT"
          ],
          instructorTips: [
            "💡 Full Test 5 là bài thi MÔ PHỎNG đầu tiên. Kết quả sẽ RẤT GẦN với thi thật",
            "💡 Nếu đạt 900+ trong điều kiện mô phỏng → Bạn SẼ đạt 900+ trong thi thật",
            "💡 Nếu chưa đạt 900, ĐỪNG lo. Còn 3 tuần và 3 Full Tests nữa",
            "💡 Deep Correction 2 ngày tới là QUAN TRỌNG NHẤT. Dành 2-3 giờ/ngày"
          ],
          checkpoints: [
            "✅ Thi trong điều kiện mô phỏng hoàn toàn",
            "✅ Đạt 900+ điểm (190/200 câu)",
            "✅ Hoàn thành đúng thời gian",
            "✅ Phân tích chi tiết mọi câu sai",
            "✅ Xác định 3 điểm yếu cuối cùng"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "Simulation Test Tips", url: "https://www.youtube.com/results?search_query=toeic+simulation+test" },
            { title: "Answer Sheet PDF", url: "https://www.ets.org/toeic/test-takers/answer-sheet.html" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Review",
          icon: "zoom-in",
          task: "Deep Correction - LC Focus with Transcription",
          desc: "Sửa lỗi sâu Listening - nghe lại với transcript.",
          detailedDesc: `**Mục tiêu học tập:**
- Phân tích SÂU mọi câu sai Listening trong Test 5
- Nghe lại với transcript để hiểu TẠI SAO sai
- Shadowing các đoạn sai để cải thiện
- Tạo error patterns cho LC

**Phương pháp học chi tiết (120 phút):**

*Giai đoạn 1: Phân loại lỗi LC (20 phút)*
1. Liệt kê TẤT CẢ câu sai LC (mục tiêu: <5 câu)
2. Phân loại theo:
   - **Part 1:** Bẫy being? Âm thanh tương tự? Sai thì?
   - **Part 2:** Bẫy lặp từ? Không hiểu câu hỏi? Indirect answer?
   - **Part 3:** Không đọc câu hỏi trước? Không nghe kịp? Không hiểu paraphrase?
   - **Part 4:** Không ghi chú? Không nghe câu đầu? Bỏ lỡ thông tin?
3. Tạo bảng phân loại lỗi LC

*Giai đoạn 2: Sửa lỗi sâu với transcript (60 phút)*
**Với MỖI câu sai LC:**

1. **Nghe lại KHÔNG xem transcript (5 phút):**
   - Nghe 3-5 lần
   - Cố gắng hiểu TẠI SAO chọn sai
   - Ghi chú phần không nghe rõ

2. **Xem transcript và phân tích (5 phút):**
   - Đọc transcript
   - Tìm thông tin đúng
   - Xác định:
     - Từ nào không nghe rõ?
     - Paraphrase nào không nhận ra?
     - Bẫy nào rơi vào?

3. **Shadowing đoạn đó (5 phút):**
   - Shadowing 5-10 lần
   - Tập trung phần không nghe rõ
   - Mục tiêu: Nghe rõ 100%

4. **Làm lại câu hỏi (2 phút):**
   - Nghe lại KHÔNG xem transcript
   - Trả lời lại câu hỏi
   - Phải đúng 100%

**Tổng: 17 phút/câu × 3-5 câu = 60 phút**

*Giai đoạn 3: Tạo error patterns (20 phút)*
1. Phân tích pattern lỗi:
   - Lỗi nào lặp lại nhiều nhất?
   - VD: "Luôn không nghe rõ weak forms (to, of, and)"
2. Tạo "LC Error Pattern Notebook"
3. Viết action plan:
   - Nếu không nghe rõ weak forms → Shadowing tập trung weak forms
   - Nếu không nhận ra paraphrase → Học thêm 20 cặp từ đồng nghĩa
   - Nếu không nghe kịp → Tăng tốc độ shadowing

*Giai đoạn 4: Luyện lại (20 phút)*
1. Nghe lại TOÀN BỘ các đoạn có câu sai
2. Làm lại TẤT CẢ câu hỏi
3. Mục tiêu: 100% đúng

**Phân bổ thời gian:**
- Phân loại lỗi: 20 phút
- Sửa lỗi sâu: 60 phút
- Tạo error patterns: 20 phút
- Luyện lại: 20 phút
- **Tổng: 120 phút**

**Kết quả mong đợi:**
- Hiểu rõ TẠI SAO sai từng câu LC
- Nghe rõ 100% các đoạn có câu sai
- Tạo LC Error Pattern Notebook
- Làm lại câu sai đạt 100%`,
          methodology: [
            "Giai đoạn 1: Phân loại lỗi LC theo pattern (20 phút)",
            "Giai đoạn 2: Sửa lỗi sâu với transcript (60 phút)",
            "Giai đoạn 3: Tạo LC Error Pattern Notebook (20 phút)",
            "Giai đoạn 4: Làm lại tất cả câu sai (20 phút)"
          ],
          timeAllocation: {
            "Phân loại lỗi": 20,
            "Sửa lỗi sâu": 60,
            "Error patterns": 20,
            "Luyện lại": 20
          },
          commonMistakes: [
            "❌ Chỉ xem transcript, không nghe lại → Không cải thiện listening → Phải NGHE LẠI nhiều lần",
            "❌ Không shadowing → Không cải thiện → Phải SHADOWING các đoạn sai",
            "❌ Không tạo error patterns → Sẽ sai lại → Phải GHI CHÚ PATTERN"
          ],
          instructorTips: [
            "💡 Deep Correction LC là QUAN TRỌNG NHẤT. Bạn học NHIỀU HƠN từ lỗi sai so với câu đúng",
            "💡 Dành 17 phút/câu sai. Nếu sai 5 câu → 85 phút. Đừng vội, hãy hiểu THẤU ĐÁO",
            "💡 Shadowing là CHÌA KHÓA cải thiện LC. Shadowing các đoạn sai → Không sai lại",
            "💡 Nếu sai < 5 câu LC → Bạn đang rất tốt. Nếu sai > 10 câu → Cần tăng shadowing HÀNG NGÀY"
          ],
          checkpoints: [
            "✅ Phân loại tất cả lỗi LC theo pattern",
            "✅ Sửa lỗi sâu từng câu với transcript",
            "✅ Shadowing các đoạn sai 5-10 lần",
            "✅ Tạo LC Error Pattern Notebook",
            "✅ Làm lại câu sai đạt 100%"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "TOEIC Transcripts", url: "https://study4.com/tests/toeic-transcripts/" },
            { title: "Deep Correction Method", url: "https://www.youtube.com/results?search_query=toeic+deep+correction" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Review",
          icon: "zoom-in",
          task: "Deep Correction - RC Focus with Translation",
          desc: "Sửa lỗi sâu Reading - dịch và phân tích từng câu sai.",
          detailedDesc: `**Mục tiêu học tập:**
- Phân tích SÂU mọi câu sai Reading trong Test 5
- Dịch và hiểu HOÀN TOÀN các đoạn có câu sai
- Tạo error patterns cho RC
- Luyện lại đạt 100%

**Phương pháp học chi tiết (120 phút):**

*Giai đoạn 1: Phân loại lỗi RC (20 phút)*
1. Liệt kê TẤT CẢ câu sai RC (mục tiêu: <5 câu)
2. Phân loại theo:
   - **Part 5:** Thì? Từ loại? Giới từ? Relative clauses? Conditionals?
   - **Part 6:** Không đọc context? Không hiểu mối liên hệ?
   - **Part 7:** 
     - Detail: Không scan đúng từ khóa?
     - Inference: Không kết hợp đủ thông tin?
     - NOT/TRUE: Không đọc toàn bộ bài?
     - Paraphrase: Không nhận ra từ đồng nghĩa?
3. Tạo bảng phân loại lỗi RC

*Giai đoạn 2: Sửa lỗi sâu với translation (60 phút)*
**Với MỖI câu sai RC:**

**Part 5-6 (Grammar/Vocab):**
1. **Đọc lại câu (2 phút):**
   - Đọc kỹ toàn bộ câu
   - Xác định loại câu hỏi

2. **Phân tích ngữ pháp (3 phút):**
   - Tìm chủ ngữ, động từ, tân ngữ
   - Xác định cấu trúc câu
   - Hiểu TẠI SAO đáp án đúng là đúng
   - Hiểu TẠI SAO đáp án sai là sai

3. **Dịch câu (2 phút):**
   - Dịch toàn bộ câu sang tiếng Việt
   - Hiểu nghĩa câu hoàn toàn

4. **Tạo câu tương tự (3 phút):**
   - Viết 1 câu tương tự với cấu trúc giống
   - Mục tiêu: Không sai lại pattern này

**Part 7 (Reading):**
1. **Đọc lại đoạn văn (5 phút):**
   - Đọc kỹ toàn bộ đoạn
   - Gạch chân thông tin quan trọng

2. **Dịch đoạn liên quan (5 phút):**
   - Dịch đoạn chứa thông tin đúng
   - Hiểu nghĩa hoàn toàn

3. **Phân tích lỗi (5 phút):**
   - TẠI SAO chọn sai?
   - Không scan đúng từ khóa?
   - Không nhận ra paraphrase?
   - Không kết hợp đủ thông tin?
   - Suy luận sai?

4. **Làm lại câu hỏi (2 phút):**
   - Đọc lại câu hỏi
   - Tìm lại đáp án
   - Phải đúng 100%

**Tổng: 10-17 phút/câu × 3-5 câu = 60 phút**

*Giai đoạn 3: Tạo error patterns (20 phút)*
1. Phân tích pattern lỗi:
   - Lỗi nào lặp lại nhiều nhất?
   - VD: "Luôn nhầm Present Perfect vs Simple Past"
2. Tạo "RC Error Pattern Notebook"
3. Viết action plan:
   - Nếu yếu Grammar → Làm thêm 20 câu Part 5 mỗi ngày
   - Nếu không nhận ra paraphrase → Học thêm từ đồng nghĩa
   - Nếu đọc chậm → Luyện scanning speed

*Giai đoạn 4: Luyện lại (20 phút)*
1. Làm lại TẤT CẢ câu sai RC
2. Mục tiêu: 100% đúng

**Phân bổ thời gian:**
- Phân loại lỗi: 20 phút
- Sửa lỗi sâu: 60 phút
- Tạo error patterns: 20 phút
- Luyện lại: 20 phút
- **Tổng: 120 phút**

**Kết quả mong đợi:**
- Hiểu rõ TẠI SAO sai từng câu RC
- Dịch và hiểu hoàn toàn các đoạn có câu sai
- Tạo RC Error Pattern Notebook
- Làm lại câu sai đạt 100%`,
          methodology: [
            "Giai đoạn 1: Phân loại lỗi RC theo pattern (20 phút)",
            "Giai đoạn 2: Sửa lỗi sâu với translation (60 phút)",
            "Giai đoạn 3: Tạo RC Error Pattern Notebook (20 phút)",
            "Giai đoạn 4: Làm lại tất cả câu sai (20 phút)"
          ],
          timeAllocation: {
            "Phân loại lỗi": 20,
            "Sửa lỗi sâu": 60,
            "Error patterns": 20,
            "Luyện lại": 20
          },
          commonMistakes: [
            "❌ Chỉ xem đáp án đúng, không phân tích TẠI SAO sai → Sẽ sai lại → Phải hiểu SÂU",
            "❌ Không dịch đoạn văn → Không hiểu hoàn toàn → Phải DỊCH để hiểu 100%",
            "❌ Không tạo error patterns → Sẽ sai lại → Phải GHI CHÚ PATTERN"
          ],
          instructorTips: [
            "💡 Deep Correction RC giúp bạn hiểu THẤU ĐÁO lỗi sai. Dành thời gian cho việc này",
            "💡 Dịch đoạn văn sang tiếng Việt → Hiểu 100% → Không sai lại",
            "💡 Tạo câu tương tự cho lỗi Grammar → Không sai lại pattern đó",
            "💡 Nếu sai < 5 câu RC → Bạn đang rất tốt. Nếu sai > 10 câu → Cần tăng đọc HÀNG NGÀY"
          ],
          checkpoints: [
            "✅ Phân loại tất cả lỗi RC theo pattern",
            "✅ Sửa lỗi sâu từng câu với translation",
            "✅ Tạo câu tương tự cho lỗi Grammar",
            "✅ Tạo RC Error Pattern Notebook",
            "✅ Làm lại câu sai đạt 100%"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/",
          additionalLinks: [
            { title: "TOEIC Reading Explanations", url: "https://study4.com/tests/toeic-explanations/" },
            { title: "Deep Correction RC Method", url: "https://www.youtube.com/results?search_query=toeic+reading+correction" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Skill",
          icon: "zap",
          task: "Part 5-6 Zero Mistake Drills - 50/50 Target",
          desc: "Luyện Part 5-6 không sai câu nào - mục tiêu hoàn hảo.",
          detailedDesc: `**Mục tiêu học tập:**
- Đạt 50/50 câu Part 5-6 (100% độ chính xác)
- Hoàn thành trong 15 phút
- Xây dựng tự tin tuyệt đối với Part 5-6
- Loại bỏ mọi lỗi sai còn lại

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Ôn lại error patterns (10 phút)*
1. Xem lại RC Error Pattern Notebook
2. Ôn lại các lỗi thường gặp:
   - Thì: Present Perfect vs Simple Past
   - Từ loại: -tion (N), -tive (Adj), -ly (Adv)
   - Giới từ: in time vs on time, interested in, responsible for
   - Relative clauses: who/which/that/where/when
   - Conditionals: Type 1, 2, 3
3. Tạo checklist để kiểm tra trước khi chọn đáp án

*Giai đoạn 2: Drill 1 - Speed (15 phút)*
1. Làm 50 câu Part 5-6 (30 + 20)
2. Mục tiêu: Hoàn thành trong 15 phút
3. Quy trình:
   - Part 5: 10 phút (20s/câu)
   - Part 6: 5 phút (15s/câu)
4. Ghi lại thời gian thực tế
5. Chấm điểm: Mục tiêu 48/50+ (96%+)

*Giai đoạn 3: Sửa lỗi (10 phút)*
1. Xem lại MỌI câu sai
2. Phân tích TẠI SAO sai
3. Ghi vào Error Pattern Notebook
4. Tạo câu tương tự

*Giai đoạn 4: Drill 2 - Accuracy (20 phút)*
1. Làm 50 câu Part 5-6 MỚI
2. Mục tiêu: 50/50 (100% độ chính xác)
3. Quy trình:
   - Đọc kỹ từng câu
   - Áp dụng checklist
   - Kiểm tra lại trước khi chọn
4. Thời gian: 20 phút (không ép thời gian)
5. Chấm điểm: MỤC TIÊU 50/50

*Giai đoạn 5: Review (5 phút)*
1. Nếu đạt 50/50 → CHÚC MỪNG! Bạn đã MASTER Part 5-6
2. Nếu chưa đạt → Xem lại các câu sai, lặp lại Drill 2

**Phân bổ thời gian:**
- Ôn error patterns: 10 phút
- Drill 1 (Speed): 15 phút
- Sửa lỗi: 10 phút
- Drill 2 (Accuracy): 20 phút
- Review: 5 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Đạt 50/50 câu Part 5-6 (100%)
- Hoàn thành trong 15-20 phút
- Tự tin tuyệt đối với Part 5-6
- Không còn lỗi sai nào`,
          methodology: [
            "Giai đoạn 1: Ôn lại error patterns và tạo checklist (10 phút)",
            "Giai đoạn 2: Drill 1 - Speed (15 phút trong 15 phút)",
            "Giai đoạn 3: Sửa lỗi và ghi chú (10 phút)",
            "Giai đoạn 4: Drill 2 - Accuracy (50/50 trong 20 phút)",
            "Giai đoạn 5: Review kết quả (5 phút)"
          ],
          timeAllocation: {
            "Ôn error patterns": 10,
            "Drill 1": 15,
            "Sửa lỗi": 10,
            "Drill 2": 20,
            "Review": 5
          },
          commonMistakes: [
            "❌ Làm quá nhanh → Sai do bất cẩn → Phải ĐỌC KỸ từng câu",
            "❌ Không kiểm tra lại → Bỏ sót lỗi đơn giản → Phải KIỂM TRA trước khi chọn",
            "❌ Không áp dụng checklist → Sai lại lỗi cũ → Phải ÁP DỤNG CHECKLIST"
          ],
          instructorTips: [
            "💡 Part 5-6 chiếm 46 câu (23% RC). Nếu đạt 50/50 → RC score sẽ rất cao",
            "💡 Zero Mistake là MỤC TIÊU cho 900+ điểm. Hoàn toàn KHẢ THI nếu luyện đúng cách",
            "💡 Checklist là CHÌA KHÓA: Thì? Từ loại? Giới từ? Relative clause? Conditional?",
            "💡 Nếu đạt 50/50 trong Drill 2 → Bạn đã MASTER Part 5-6. Duy trì trong các Full Tests"
          ],
          checkpoints: [
            "✅ Ôn lại error patterns và tạo checklist",
            "✅ Drill 1: 48/50+ trong 15 phút",
            "✅ Sửa lỗi và ghi chú pattern",
            "✅ Drill 2: 50/50 trong 20 phút",
            "✅ Tự tin tuyệt đối với Part 5-6"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Part 5-6 Zero Mistake Strategy", url: "https://www.youtube.com/results?search_query=toeic+part+5+6+perfect+score" },
            { title: "Grammar Checklist", url: "https://study4.com/grammar/toeic-grammar-checklist/" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Skill",
          icon: "zap",
          task: "Weakness Elimination - Top 3 Weaknesses",
          desc: "Tập trung loại bỏ 3 điểm yếu lớn nhất.",
          detailedDesc: `**Mục tiêu học tập:**
- Xác định 3 điểm yếu lớn nhất từ Test 5
- Luyện tập TẬP TRUNG vào 3 điểm yếu này
- Cải thiện mỗi điểm yếu 30-50%
- Chuẩn bị cho Full Test 6

**Phương pháp học chi tiết (90 phút):**

*Giai đoạn 1: Xác định 3 điểm yếu (10 phút)*
1. Xem lại kết quả Test 5 và error logs
2. Xác định 3 điểm yếu lớn nhất:
   - **VD 1:** Part 3-4 inference questions (sai 5+ câu)
   - **VD 2:** Part 7 NOT/TRUE questions (sai 3+ câu)
   - **VD 3:** Part 5 relative clauses & conditionals (sai 3+ câu)
3. Ưu tiên theo tác động:
   - Điểm yếu nào mất nhiều điểm nhất?
   - Điểm yếu nào dễ cải thiện nhất?

*Giai đoạn 2: Luyện điểm yếu 1 (25 phút)*
**VD: Part 3-4 Inference Questions**
1. Ôn lại chiến thuật inference (5 phút)
2. Làm 20 câu inference Part 3-4 (15 phút)
3. Sửa lỗi và ghi chú (5 phút)
4. Mục tiêu: 16/20 đúng (80%+)

*Giai đoạn 3: Luyện điểm yếu 2 (25 phút)*
**VD: Part 7 NOT/TRUE Questions**
1. Ôn lại chiến thuật NOT/TRUE (5 phút)
2. Làm 10 câu NOT/TRUE (15 phút)
3. Sửa lỗi và ghi chú (5 phút)
4. Mục tiêu: 8/10 đúng (80%+)

*Giai đoạn 4: Luyện điểm yếu 3 (25 phút)*
**VD: Part 5 Relative Clauses & Conditionals**
1. Ôn lại lý thuyết (5 phút)
2. Làm 20 câu về relative clauses & conditionals (15 phút)
3. Sửa lỗi và ghi chú (5 phút)
4. Mục tiêu: 18/20 đúng (90%+)

*Giai đoạn 5: Tổng kết và action plan (5 phút)*
1. Đánh giá cải thiện:
   - Điểm yếu nào đã cải thiện?
   - Điểm yếu nào vẫn cần luyện thêm?
2. Lập action plan cho tuần 10:
   - Nếu vẫn yếu → Luyện HÀNG NGÀY
   - Nếu đã cải thiện → Duy trì và tập trung điểm yếu khác

**Phân bổ thời gian:**
- Xác định điểm yếu: 10 phút
- Luyện điểm yếu 1: 25 phút
- Luyện điểm yếu 2: 25 phút
- Luyện điểm yếu 3: 25 phút
- Tổng kết: 5 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Xác định rõ 3 điểm yếu lớn nhất
- Cải thiện mỗi điểm yếu 30-50%
- Có action plan rõ ràng
- Tự tin hơn với điểm yếu`,
          methodology: [
            "Giai đoạn 1: Xác định 3 điểm yếu lớn nhất (10 phút)",
            "Giai đoạn 2-4: Luyện từng điểm yếu (75 phút)",
            "Giai đoạn 5: Tổng kết và action plan (5 phút)"
          ],
          timeAllocation: {
            "Xác định điểm yếu": 10,
            "Luyện điểm yếu 1": 25,
            "Luyện điểm yếu 2": 25,
            "Luyện điểm yếu 3": 25,
            "Tổng kết": 5
          },
          commonMistakes: [
            "❌ Luyện MỌI THỨ thay vì tập trung điểm yếu → Không hiệu quả → Phải TẬP TRUNG 3 điểm yếu",
            "❌ Không đo lường cải thiện → Không biết tiến bộ → Phải GHI LẠI kết quả trước/sau",
            "❌ Luyện 1 lần rồi bỏ → Không đủ → Phải luyện HÀNG NGÀY cho đến khi cải thiện"
          ],
          instructorTips: [
            "💡 Nguyên tắc 80/20: Tập trung 80% thời gian vào 20% điểm yếu → Cải thiện NHANH NHẤT",
            "💡 Mỗi điểm yếu cần 3-5 sessions luyện tập → Không thể cải thiện trong 1 ngày",
            "💡 Đo lường cải thiện: Ghi lại kết quả trước/sau → Thấy tiến bộ rõ ràng",
            "💡 Nếu 1 điểm yếu không cải thiện sau 3 sessions → Thay đổi phương pháp luyện"
          ],
          checkpoints: [
            "✅ Xác định rõ 3 điểm yếu lớn nhất",
            "✅ Luyện từng điểm yếu 25 phút",
            "✅ Cải thiện mỗi điểm yếu 30-50%",
            "✅ Ghi lại kết quả trước/sau",
            "✅ Lập action plan cho tuần 10"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Weakness Analysis Method", url: "https://www.youtube.com/results?search_query=toeic+weakness+analysis" },
            { title: "Targeted Practice", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Listening",
          icon: "headphones",
          task: "Part 3-4 Intensive Marathon - 90 Questions",
          desc: "Marathon Part 3-4 - 90 câu liên tục không nghỉ.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành 90 câu Part 3-4 liên tục không nghỉ
- Tăng sức bền tập trung cho Listening
- Đạt 75/90 câu (83%+)
- Chuẩn bị cho Full Test 6 tuần sau

**Phương pháp học chi tiết (90 phút):**

*Giai đoạn 1: Warm-up (10 phút)*
1. Shadowing 3 đoạn Part 3 (5 phút)
2. Ôn lại chiến thuật Part 3-4:
   - Đọc câu hỏi trước (8 giây)
   - Ghi chú từ khóa
   - Chọn đáp án ngay khi nghe thấy
   - Chú ý paraphrasing

*Giai đoạn 2: Part 3 Marathon (40 phút)*
1. Làm 23 đoạn Part 3 (69 câu)
2. KHÔNG NGHỈ giữa các đoạn
3. Quy trình cho MỖI đoạn:
   - Đọc 3 câu hỏi (8 giây)
   - Nghe và chọn đáp án (40 giây)
   - Kiểm tra (4 giây)
   - Chuyển ngay sang đoạn tiếp theo
4. Mục tiêu: 58/69 đúng (84%+)

*Giai đoạn 3: Nghỉ ngắn (5 phút)*
1. Uống nước
2. Thư giãn mắt
3. Chuẩn bị tinh thần cho Part 4

*Giai đoạn 4: Part 4 Marathon (25 phút)*
1. Làm 7 đoạn Part 4 (21 câu)
2. KHÔNG NGHỈ giữa các đoạn
3. Quy trình tương tự Part 3
4. Chú ý:
   - Xác định loại monologue (announcement, advertisement, voicemail, instructions, speech)
   - Nghe câu đầu tiên (thường là chủ đề)
   - Ghi chú từ khóa
5. Mục tiêu: 17/21 đúng (81%+)

*Giai đoạn 5: Sửa lỗi (10 phút)*
1. Xem lại các đoạn sai
2. Nghe lại với transcript
3. Xác định lỗi:
   - Không đọc câu hỏi trước?
   - Không nghe kịp?
   - Không hiểu paraphrase?
   - Mất tập trung?
4. Ghi chú pattern lỗi

**Phân bổ thời gian:**
- Warm-up: 10 phút
- Part 3 Marathon: 40 phút
- Nghỉ ngắn: 5 phút
- Part 4 Marathon: 25 phút
- Sửa lỗi: 10 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Hoàn thành 90 câu không nghỉ
- Đạt 75/90 câu (83%+)
- Tăng sức bền tập trung
- Tự tin với Part 3-4 trong thi thật`,
          methodology: [
            "Giai đoạn 1: Warm-up với shadowing (10 phút)",
            "Giai đoạn 2: Part 3 Marathon - 69 câu không nghỉ (40 phút)",
            "Giai đoạn 3: Nghỉ ngắn (5 phút)",
            "Giai đoạn 4: Part 4 Marathon - 21 câu không nghỉ (25 phút)",
            "Giai đoạn 5: Sửa lỗi (10 phút)"
          ],
          timeAllocation: {
            "Warm-up": 10,
            "Part 3": 40,
            "Nghỉ": 5,
            "Part 4": 25,
            "Sửa lỗi": 10
          },
          commonMistakes: [
            "❌ Nghỉ giữa các đoạn → Mất tập trung → Phải làm LIÊN TỤC không nghỉ",
            "❌ Mất tập trung ở đoạn cuối → Sai nhiều → Phải duy trì tập trung ĐẾN HẾT",
            "❌ Không warm-up → Khó tập trung ngay từ đầu → Phải WARM-UP trước"
          ],
          instructorTips: [
            "💡 Marathon Part 3-4 giúp tăng SỨC BỀN tập trung → Quan trọng cho thi thật",
            "💡 Trong thi thật, Part 3-4 chiếm 32 phút liên tục. Marathon này dài hơn → Bạn sẽ thấy thi thật DỄ HƠN",
            "💡 Nếu mất tập trung giữa chừng → Thở sâu, uống nước, tiếp tục. ĐỪNG bỏ cuộc",
            "💡 Nếu đạt 75/90 (83%+) → Bạn đã SẴN SÀNG cho LC 900+ điểm"
          ],
          checkpoints: [
            "✅ Hoàn thành 90 câu Part 3-4 không nghỉ",
            "✅ Đạt 75/90 câu (83%+)",
            "✅ Duy trì tập trung đến hết",
            "✅ Đọc câu hỏi trước mọi đoạn",
            "✅ Ghi chú từ khóa hiệu quả"
          ],
          link: "https://study4.com/tests/toeic-part-3-training/",
          additionalLinks: [
            { title: "Part 3 Marathon Practice", url: "https://study4.com/tests/toeic-part-3-training/" },
            { title: "Part 4 Marathon Practice", url: "https://study4.com/tests/toeic-part-4-training/" }
          ]
        }
      ]
    },
    {
      week: "Tuần 10: Full Test Marathon",
      days: [
        {
          day: "Thứ 2",
          type: "Test",
          icon: "award",
          task: "FULL TEST 6 - ETS 2024",
          desc: "Bài thi đầy đủ thứ 6 - đo năng lực sau tuần 9.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test 6 trong điều kiện mô phỏng
- Mục tiêu: 900+ điểm (190+ câu)
- Áp dụng MỌI chiến thuật và kỹ năng đã học
- Xác định điểm yếu cuối cùng trước tuần 11-12

**Phương pháp thi (120 phút):**

*Chuẩn bị mô phỏng (10 phút):*
1. Thi vào buổi sáng (8-10 AM)
2. Điều kiện mô phỏng hoàn toàn
3. Answer sheet in ra
4. Tâm thế thi thật

*Listening Section (45 phút):*
**Mục tiêu: 96/100 (96%+) ≈ 490+ điểm**
- Part 1: 6/6 (100%)
- Part 2: 25/25 (100%)
- Part 3: 38/39 (97%+)
- Part 4: 27/30 (90%+)

*Reading Section (75 phút):*
**Mục tiêu: 96/100 (96%+) ≈ 490+ điểm**
- Part 5: 30/30 (100%)
- Part 6: 16/16 (100%)
- Part 7: 50/54 (93%+)

**Time Management:**
- Part 5: 10 phút
- Part 6: 5 phút
- Part 7: 55 phút
- Dự phòng: 5 phút

*Sau khi thi (30 phút):*
1. Chấm điểm
2. So sánh với Test 5
3. Phân tích cải thiện
4. Xác định điểm yếu cuối cùng

**Phân bổ thời gian:**
- Chuẩn bị: 10 phút
- Listening: 45 phút
- Reading: 75 phút
- Phân tích: 30 phút
- **Tổng: 160 phút**

**Kết quả mong đợi:**
- Đạt 900+ điểm (192+ câu)
- Cải thiện so với Test 5
- Time management hoàn hảo
- Tự tin tuyệt đối`,
          methodology: [
            "Chuẩn bị: Mô phỏng hoàn toàn (10 phút)",
            "Listening: Mục tiêu 96/100 (45 phút)",
            "Reading: Mục tiêu 96/100 (75 phút)",
            "Phân tích: So sánh với Test 5 (30 phút)"
          ],
          timeAllocation: {
            "Chuẩn bị": 10,
            "Listening": 45,
            "Reading": 75,
            "Phân tích": 30
          },
          commonMistakes: [
            "❌ Không thi trong điều kiện mô phỏng → Kết quả không chính xác",
            "❌ Không so sánh với Test 5 → Không biết cải thiện",
            "❌ Không time management → Không làm hết"
          ],
          instructorTips: [
            "💡 Test 6 là test QUAN TRỌNG. Kết quả sẽ cho biết bạn có đạt 900+ trong thi thật không",
            "💡 Nếu đạt 900+ → CHÚC MỪNG! Tuần 11-12 chỉ cần duy trì",
            "💡 Nếu chưa đạt 900 → Còn 2 tuần. Tập trung điểm yếu cuối cùng",
            "💡 Mục tiêu tuần 10: Hoàn thiện kỹ năng, zero mistakes"
          ],
          checkpoints: [
            "✅ Thi trong điều kiện mô phỏng",
            "✅ Đạt 900+ điểm (192+ câu)",
            "✅ Time management hoàn hảo",
            "✅ So sánh với Test 5",
            "✅ Xác định điểm yếu cuối cùng"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "Final Week Strategy", url: "https://www.youtube.com/results?search_query=toeic+final+week" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Review",
          icon: "zoom-in",
          task: "Full Test 6 Analysis - All Parts",
          desc: "Phân tích toàn diện Test 6 - mọi câu sai và đúng.",
          detailedDesc: `**Mục tiêu học tập:**
- Phân tích TOÀN DIỆN Test 6 (cả câu sai và đúng)
- Hiểu TẠI SAO đúng/sai từng câu
- Tạo final error log
- Lập kế hoạch cho 2 tuần cuối

**Phương pháp học chi tiết (120 phút):**

*Giai đoạn 1: Phân tích câu sai (60 phút)*
1. Liệt kê TẤT CẢ câu sai (mục tiêu: <8 câu)
2. Phân loại theo part và loại lỗi
3. Sửa lỗi sâu từng câu:
   - LC: Nghe lại với transcript, shadowing
   - RC: Dịch và phân tích, tạo câu tương tự
4. Ghi vào Final Error Log

*Giai đoạn 2: Review câu đúng nhưng không chắc (30 phút)*
1. Xem lại các câu đúng nhưng đoán/không chắc
2. Hiểu TẠI SAO đáp án đúng là đúng
3. Củng cố kiến thức

*Giai đoạn 3: So sánh Test 5 vs Test 6 (20 phút)*
1. So sánh số câu đúng từng part
2. Xác định:
   - Part nào cải thiện?
   - Part nào giảm điểm?
   - Lỗi nào lặp lại?
3. Tạo bảng so sánh

*Giai đoạn 4: Lập kế hoạch 2 tuần cuối (10 phút)*
1. Xác định mục tiêu:
   - Nếu đã đạt 900+ → Duy trì và hoàn thiện
   - Nếu chưa đạt 900 → Tập trung điểm yếu cuối cùng
2. Lập kế hoạch chi tiết:
   - Tuần 11: Final Vocabulary Review, Grammar Speed Test, Part 7 Time Management Final
   - Tuần 12: Final Mock Test, Light Review, Confidence Building

**Phân bổ thời gian:**
- Phân tích câu sai: 60 phút
- Review câu không chắc: 30 phút
- So sánh Test 5 vs 6: 20 phút
- Lập kế hoạch: 10 phút
- **Tổng: 120 phút**

**Kết quả mong đợi:**
- Hiểu rõ mọi câu sai và không chắc
- Tạo Final Error Log
- So sánh rõ ràng Test 5 vs 6
- Có kế hoạch chi tiết cho 2 tuần cuối`,
          methodology: [
            "Giai đoạn 1: Phân tích sâu mọi câu sai (60 phút)",
            "Giai đoạn 2: Review câu đúng nhưng không chắc (30 phút)",
            "Giai đoạn 3: So sánh Test 5 vs Test 6 (20 phút)",
            "Giai đoạn 4: Lập kế hoạch 2 tuần cuối (10 phút)"
          ],
          timeAllocation: {
            "Phân tích câu sai": 60,
            "Review câu không chắc": 30,
            "So sánh": 20,
            "Lập kế hoạch": 10
          },
          commonMistakes: [
            "❌ Chỉ xem câu sai, bỏ qua câu không chắc → Không củng cố → Phải REVIEW cả câu không chắc",
            "❌ Không so sánh Test 5 vs 6 → Không biết tiến bộ → Phải SO SÁNH chi tiết",
            "❌ Không lập kế hoạch 2 tuần cuối → Không chuẩn bị → Phải có KẾ HOẠCH rõ ràng"
          ],
          instructorTips: [
            "💡 Test 6 Analysis là QUAN TRỌNG NHẤT. Đây là lần cuối bạn có thể sửa lỗi trước thi thật",
            "💡 Review cả câu đúng nhưng không chắc → Củng cố kiến thức → Tự tin hơn",
            "💡 So sánh Test 5 vs 6 → Thấy tiến bộ rõ ràng → Động lực cho 2 tuần cuối",
            "💡 2 tuần cuối: Hoàn thiện, duy trì, tự tin. KHÔNG học kiến thức mới"
          ],
          checkpoints: [
            "✅ Phân tích sâu mọi câu sai",
            "✅ Review câu đúng nhưng không chắc",
            "✅ So sánh chi tiết Test 5 vs 6",
            "✅ Tạo Final Error Log",
            "✅ Lập kế hoạch chi tiết 2 tuần cuối"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/",
          additionalLinks: [
            { title: "Test Analysis Method", url: "https://www.youtube.com/results?search_query=toeic+test+analysis" },
            { title: "Final Week Planning", url: "https://www.youtube.com/results?search_query=toeic+final+week+plan" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Vocab",
          icon: "briefcase",
          task: "Final Vocabulary Review - 500+ Words Spaced Repetition",
          desc: "Ôn tập toàn bộ 500+ từ vựng đã học - spaced repetition.",
          detailedDesc: `**Mục tiêu học tập:**
- Ôn tập 500+ từ vựng đã học trong 10 tuần
- Sử dụng spaced repetition để ghi nhớ lâu dài
- Xác định từ vựng còn yếu
- Đạt 95%+ độ chính xác

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Ôn tập nhanh (20 phút)*
**500+ TỪ VỰNG ĐÃ HỌC:**
- Tuần 1-2: Contracts (40) + Office/Technology (40) = 80 từ
- Tuần 3: Finance/Banking (40) = 40 từ
- Tuần 5: Marketing/Business Trip (40) = 40 từ
- Tuần 6: Manufacturing/Logistics (40) = 40 từ
- Tuần 7: Healthcare/Pharmaceuticals (40) = 40 từ
- Tổng: 280 từ core + 220 từ bổ sung = 500+ từ

1. Xem lại flashcards tất cả từ vựng
2. Tốc độ: 10 giây/từ
3. Đánh dấu từ còn nhớ mơ hồ

*Giai đoạn 2: Spaced Repetition Test (30 phút)*
1. Làm Quizlet test toàn bộ 500+ từ
2. Chế độ: Test (multiple choice)
3. Ghi lại các từ sai
4. Mục tiêu: 475/500+ đúng (95%+)

*Giai đoạn 3: Ôn lại từ sai (10 phút)*
1. Tập trung vào các từ sai
2. Học lại nghĩa và collocations
3. Viết 1 câu ví dụ cho mỗi từ sai
4. Làm lại test cho các từ sai → Mục tiêu 100%

**Phân bổ thời gian:**
- Ôn tập nhanh: 20 phút
- Spaced repetition test: 30 phút
- Ôn lại từ sai: 10 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhớ 475/500+ từ (95%+)
- Xác định từ còn yếu
- Viết câu ví dụ cho từ sai
- Tự tin với vocabulary`,
          methodology: [
            "Giai đoạn 1: Ôn tập nhanh 500+ từ (20 phút)",
            "Giai đoạn 2: Spaced repetition test (30 phút)",
            "Giai đoạn 3: Ôn lại từ sai (10 phút)"
          ],
          timeAllocation: {
            "Ôn tập nhanh": 20,
            "Test": 30,
            "Ôn lại từ sai": 10
          },
          commonMistakes: [
            "❌ Không ôn lại từ sai → Quên lại → Phải ÔN LẠI từ sai",
            "❌ Chỉ nhớ nghĩa, không nhớ collocations → Không áp dụng được → Phải nhớ CẢ collocations",
            "❌ Không viết câu ví dụ → Khó nhớ → Phải VIẾT CÂU VÍ DỤ"
          ],
          instructorTips: [
            "💡 500+ từ vựng là NỀN TẢNG cho 900+ điểm. Ôn lại TOÀN BỘ trước thi",
            "💡 Spaced repetition giúp ghi nhớ LÂU DÀI. Ôn lại sau 1 ngày, 3 ngày, 1 tuần",
            "💡 Nếu đạt 95%+ → Vocabulary của bạn RẤT TỐT. Nếu < 90% → Ôn thêm 1-2 lần nữa",
            "💡 Trong thi thật, vocabulary giúp bạn hiểu nhanh hơn → Tiết kiệm thời gian"
          ],
          checkpoints: [
            "✅ Ôn tập 500+ từ vựng",
            "✅ Làm spaced repetition test đạt 95%+",
            "✅ Ôn lại từ sai và viết câu ví dụ",
            "✅ Nhớ collocations quan trọng",
            "✅ Tự tin với vocabulary"
          ],
          link: "https://quizlet.com/vn/515287661/",
          additionalLinks: [
            { title: "TOEIC Vocabulary 500+", url: "https://quizlet.com/search?query=toeic%20vocabulary&type=sets" },
            { title: "Spaced Repetition Method", url: "https://www.youtube.com/results?search_query=spaced+repetition+vocabulary" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Grammar",
          icon: "book-open",
          task: "Grammar & Word Form Speed Test - 40/40 in 15 min",
          desc: "Test tốc độ ngữ pháp và từ loại - 40 câu trong 15 phút.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành 40 câu Grammar & Word Form trong 15 phút
- Đạt 40/40 câu (100% độ chính xác)
- Tốc độ: <23 giây/câu
- Tự tin tuyệt đối với Part 5-6

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Ôn lại grammar (10 phút)*
**GRAMMAR ĐÃ HỌC:**
- 12 thì & Thể bị động
- Prepositions & Conjunctions
- Relative Clauses & Conditionals
- Word Form (20 hậu tố)

1. Xem lại notes
2. Ôn lại các lỗi thường gặp
3. Tạo checklist

*Giai đoạn 2: Speed Test 1 (15 phút)*
1. Làm 40 câu Part 5 (Grammar + Word Form)
2. Dùng đồng hồ bấm giờ - ép thời gian 15 phút
3. Quy trình:
   - Đọc câu (5 giây)
   - Xác định loại câu hỏi (2 giây)
   - Áp dụng quy tắc (3 giây)
   - Chọn đáp án (3 giây)
   - Kiểm tra (2 giây)
   - **Tổng: 15 giây/câu**
4. Ghi lại thời gian thực tế
5. Mục tiêu: 38/40+ đúng (95%+) trong 15 phút

*Giai đoạn 3: Sửa lỗi (10 phút)*
1. Xem lại MỌI câu sai
2. Phân tích TẠI SAO sai
3. Tạo câu tương tự

*Giai đoạn 4: Speed Test 2 (15 phút)*
1. Làm 40 câu Part 5 MỚI
2. Mục tiêu: 40/40 (100%) trong 15 phút
3. Nếu chưa đạt → Lặp lại

**Phân bổ thời gian:**
- Ôn grammar: 10 phút
- Speed Test 1: 15 phút
- Sửa lỗi: 10 phút
- Speed Test 2: 15 phút
- **Tổng: 50 phút**

**Kết quả mong đợi:**
- Đạt 40/40 trong 15 phút
- Tốc độ: <23 giây/câu
- Tự tin tuyệt đối
- Không còn lỗi sai`,
          methodology: [
            "Giai đoạn 1: Ôn lại grammar và tạo checklist (10 phút)",
            "Giai đoạn 2: Speed Test 1 - 40 câu trong 15 phút (15 phút)",
            "Giai đoạn 3: Sửa lỗi (10 phút)",
            "Giai đoạn 4: Speed Test 2 - 40/40 trong 15 phút (15 phút)"
          ],
          timeAllocation: {
            "Ôn grammar": 10,
            "Speed Test 1": 15,
            "Sửa lỗi": 10,
            "Speed Test 2": 15
          },
          commonMistakes: [
            "❌ Làm quá nhanh → Sai do bất cẩn → Phải ĐỌC KỸ",
            "❌ Không kiểm tra lại → Bỏ sót lỗi → Phải KIỂM TRA",
            "❌ Không áp dụng checklist → Sai lại lỗi cũ → Phải ÁP DỤNG CHECKLIST"
          ],
          instructorTips: [
            "💡 40/40 trong 15 phút là MỤC TIÊU cho 900+ điểm. Hoàn toàn KHẢ THI",
            "💡 Checklist: Thì? Từ loại? Giới từ? Relative clause? Conditional?",
            "💡 Nếu đạt 40/40 → Bạn đã MASTER Grammar. Duy trì trong thi thật",
            "💡 Trong thi thật, Part 5 nhanh → Nhiều thời gian cho Part 7"
          ],
          checkpoints: [
            "✅ Ôn lại grammar và tạo checklist",
            "✅ Speed Test 1: 38/40+ trong 15 phút",
            "✅ Sửa lỗi và tạo câu tương tự",
            "✅ Speed Test 2: 40/40 trong 15 phút",
            "✅ Tự tin tuyệt đối với Grammar"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Grammar Speed Test", url: "https://study4.com/tests/toeic-part-5-training/" },
            { title: "Word Form Drills", url: "https://www.youtube.com/results?search_query=toeic+word+form+speed" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Skill",
          icon: "file-text",
          task: "Part 7 Time Management Final - 55 min All Passages",
          desc: "Luyện time management cuối cùng - hoàn thành Part 7 trong 55 phút.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành TOÀN BỘ Part 7 (54 câu) trong 55 phút
- Đạt 50/54 câu (93%+)
- Time management hoàn hảo
- Tự tin với mọi loại đoạn văn

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Ôn lại time management (5 phút)*
**PHÂN BỔ THỜI GIAN PART 7 (55 phút):**
- Đoạn đơn (29 câu): 25 phút (2-3 phút/đoạn)
- Đoạn kép (10 câu): 10 phút (4-5 phút/bộ)
- Đoạn ba (15 câu): 18 phút (5-6 phút/bộ)
- Dự phòng: 2 phút

**CHIẾN THUẬT:**
- Đọc câu hỏi trước
- Skim đoạn văn (đơn: 10s, kép: 15s, ba: 20s)
- Scan tìm đáp án
- Chú ý paraphrasing

*Giai đoạn 2: Full Part 7 Drill (55 phút)*
1. Làm TOÀN BỘ Part 7 (54 câu)
2. Dùng đồng hồ bấm giờ - ép thời gian 55 phút
3. Ghi lại thời gian cho từng loại đoạn:
   - Đoạn đơn: ___ phút
   - Đoạn kép: ___ phút
   - Đoạn ba: ___ phút
4. Mục tiêu: 50/54 đúng (93%+) trong 55 phút

**Phân bổ thời gian:**
- Ôn time management: 5 phút
- Full Part 7 Drill: 55 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Hoàn thành 54 câu trong 55 phút
- Đạt 50/54 câu (93%+)
- Time management hoàn hảo
- Tự tin với Part 7`,
          methodology: [
            "Giai đoạn 1: Ôn lại time management (5 phút)",
            "Giai đoạn 2: Full Part 7 Drill - 54 câu trong 55 phút (55 phút)"
          ],
          timeAllocation: {
            "Ôn time management": 5,
            "Full Part 7 Drill": 55
          },
          commonMistakes: [
            "❌ Dành quá nhiều thời gian cho đoạn đơn → Không đủ thời gian cho đoạn ba → Phải QUẢN LÝ CHẶT CHẼ",
            "❌ Không dùng đồng hồ → Không biết tốc độ → Phải ÉP THỜI GIAN",
            "❌ Đọc quá kỹ → Mất thời gian → Phải SKIM và SCAN"
          ],
          instructorTips: [
            "💡 Part 7 Time Management là QUAN TRỌNG NHẤT cho 900+ điểm",
            "💡 55 phút cho Part 7 là MỤC TIÊU. Nếu đạt → Bạn sẽ có 5 phút dự phòng",
            "💡 Trong thi thật, nếu hết thời gian → Đoán NGAY tất cả câu còn lại",
            "💡 Nếu hoàn thành trong 55 phút với 93%+ → Bạn SẴN SÀNG cho thi thật"
          ],
          checkpoints: [
            "✅ Ôn lại time management Part 7",
            "✅ Hoàn thành 54 câu trong 55 phút",
            "✅ Đạt 50/54 câu (93%+)",
            "✅ Ghi lại thời gian từng loại đoạn",
            "✅ Tự tin với time management"
          ],
          link: "https://study4.com/tests/toeic-part-7-training/",
          additionalLinks: [
            { title: "Part 7 Time Management", url: "https://www.youtube.com/results?search_query=toeic+part+7+time+management" },
            { title: "Full Part 7 Practice", url: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Test",
          icon: "award",
          task: "FULL TEST 7 - ETS 2024",
          desc: "Bài thi đầy đủ thứ 7 - test cuối trước tuần 11-12.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Full Test 7 trong điều kiện mô phỏng
- Mục tiêu: 900+ điểm (192+ câu)
- Xác nhận năng lực trước 2 tuần cuối
- Tự tin tuyệt đối

**Phương pháp thi (120 phút):**

*Chuẩn bị mô phỏng (10 phút):*
1. Thi vào buổi sáng
2. Điều kiện mô phỏng hoàn toàn
3. Tâm thế thi thật

*Listening Section (45 phút):*
**Mục tiêu: 97/100 (97%+) ≈ 495 điểm**
- Part 1: 6/6 (100%)
- Part 2: 25/25 (100%)
- Part 3: 38/39 (97%+)
- Part 4: 28/30 (93%+)

*Reading Section (75 phút):*
**Mục tiêu: 97/100 (97%+) ≈ 495 điểm**
- Part 5: 30/30 (100%)
- Part 6: 16/16 (100%)
- Part 7: 51/54 (94%+)

*Sau khi thi (30 phút):*
1. Chấm điểm
2. So sánh với Test 5-6
3. Xác nhận năng lực
4. Chuẩn bị cho tuần 11-12

**Phân bổ thời gian:**
- Chuẩn bị: 10 phút
- Listening: 45 phút
- Reading: 75 phút
- Phân tích: 30 phút
- **Tổng: 160 phút**

**Kết quả mong đợi:**
- Đạt 900+ điểm (194+ câu)
- Xác nhận năng lực
- Tự tin tuyệt đối
- Sẵn sàng cho thi thật`,
          methodology: [
            "Chuẩn bị: Mô phỏng hoàn toàn (10 phút)",
            "Listening: Mục tiêu 97/100 (45 phút)",
            "Reading: Mục tiêu 97/100 (75 phút)",
            "Phân tích: Xác nhận năng lực (30 phút)"
          ],
          timeAllocation: {
            "Chuẩn bị": 10,
            "Listening": 45,
            "Reading": 75,
            "Phân tích": 30
          },
          commonMistakes: [
            "❌ Không thi nghiêm túc vì là test cuối → Kết quả không chính xác",
            "❌ Không so sánh với Test 5-6 → Không xác nhận năng lực",
            "❌ Lo lắng quá mức → Ảnh hưởng kết quả → Phải TỰ TIN"
          ],
          instructorTips: [
            "💡 Test 7 là test CUỐI trước 2 tuần final. Kết quả sẽ xác nhận năng lực của bạn",
            "💡 Nếu đạt 900+ → CHÚC MỪNG! Bạn SẴN SÀNG cho thi thật",
            "💡 Nếu chưa đạt 900 → ĐỪNG lo. Tuần 11-12 là lúc HOÀN THIỆN cuối cùng",
            "💡 Tuần 11-12: Light review, confidence building, test-day strategy"
          ],
          checkpoints: [
            "✅ Thi trong điều kiện mô phỏng",
            "✅ Đạt 900+ điểm (194+ câu)",
            "✅ So sánh với Test 5-6",
            "✅ Xác nhận năng lực",
            "✅ Tự tin tuyệt đối"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-3-lc-rc/",
          additionalLinks: [
            { title: "ETS Score Conversion", url: "https://www.ets.org/toeic/test-takers/scores.html" },
            { title: "Final Preparation", url: "https://www.youtube.com/results?search_query=toeic+final+preparation" }
          ]
        }
      ]
    },
    {
      week: "Tuần 11-12: Final Preparation & Peak Performance",
      days: [
        {
          day: "Thứ 2",
          type: "Skill",
          icon: "zap",
          task: "Targeted Weakness Elimination - Based on Test 7",
          desc: "Loại bỏ điểm yếu cuối cùng dựa trên Test 7.",
          detailedDesc: `**Mục tiêu học tập:**
- Xác định điểm yếu cuối cùng từ Test 7
- Luyện tập TẬP TRUNG loại bỏ điểm yếu
- Đạt 90%+ độ chính xác cho điểm yếu
- Tự tin hoàn toàn trước thi

**Phương pháp học chi tiết (90 phút):**

*Giai đoạn 1: Xác định điểm yếu cuối cùng (15 phút)*
1. Xem lại kết quả Test 7
2. Xác định 1-2 điểm yếu còn lại:
   - Part nào sai nhiều nhất? (>3 câu)
   - Loại câu hỏi nào sai nhiều?
   - Pattern lỗi nào lặp lại?
3. Ưu tiên điểm yếu có tác động lớn nhất

*Giai đoạn 2: Luyện điểm yếu 1 (35 phút)*
**VD: Part 7 Inference Questions**
1. Ôn lại chiến thuật inference (10 phút)
2. Làm 20 câu inference Part 7 (20 phút)
3. Sửa lỗi và ghi chú (5 phút)
4. Mục tiêu: 18/20 đúng (90%+)

*Giai đoạn 3: Luyện điểm yếu 2 (35 phút)*
**VD: Part 4 Monologues**
1. Ôn lại chiến thuật Part 4 (10 phút)
2. Làm 10 đoạn Part 4 (30 câu) (20 phút)
3. Sửa lỗi và ghi chú (5 phút)
4. Mục tiêu: 27/30 đúng (90%+)

*Giai đoạn 4: Tổng kết (5 phút)*
1. Đánh giá cải thiện
2. Lập action plan cho tuần cuối:
   - Nếu đã cải thiện → Duy trì
   - Nếu chưa cải thiện → Luyện thêm 1-2 sessions

**Phân bổ thời gian:**
- Xác định điểm yếu: 15 phút
- Luyện điểm yếu 1: 35 phút
- Luyện điểm yếu 2: 35 phút
- Tổng kết: 5 phút
- **Tổng: 90 phút**

**Kết quả mong đợi:**
- Xác định rõ điểm yếu cuối cùng
- Cải thiện mỗi điểm yếu lên 90%+
- Tự tin hoàn toàn
- Sẵn sàng cho thi thật`,
          methodology: [
            "Giai đoạn 1: Xác định điểm yếu cuối cùng (15 phút)",
            "Giai đoạn 2-3: Luyện từng điểm yếu (70 phút)",
            "Giai đoạn 4: Tổng kết và action plan (5 phút)"
          ],
          timeAllocation: {
            "Xác định điểm yếu": 15,
            "Luyện điểm yếu 1": 35,
            "Luyện điểm yếu 2": 35,
            "Tổng kết": 5
          },
          commonMistakes: [
            "❌ Luyện MỌI THỨ thay vì tập trung điểm yếu → Không hiệu quả",
            "❌ Không đo lường cải thiện → Không biết tiến bộ",
            "❌ Lo lắng quá mức → Ảnh hưởng hiệu suất → Phải TỰ TIN"
          ],
          instructorTips: [
            "💡 Tuần 11 là tuần CUỐI để sửa điểm yếu. Sau đó chỉ duy trì và tự tin",
            "💡 Tập trung 1-2 điểm yếu lớn nhất. ĐỪNG cố sửa mọi thứ",
            "💡 Nếu đã đạt 900+ trong Test 7 → Tuần này chỉ cần duy trì",
            "💡 Tự tin là QUAN TRỌNG NHẤT. Bạn đã học 11 tuần, bạn SẴN SÀNG"
          ],
          checkpoints: [
            "✅ Xác định rõ điểm yếu cuối cùng",
            "✅ Luyện từng điểm yếu 35 phút",
            "✅ Đạt 90%+ cho mỗi điểm yếu",
            "✅ Ghi lại kết quả trước/sau",
            "✅ Tự tin hoàn toàn"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Final Weakness Elimination", url: "https://www.youtube.com/results?search_query=toeic+final+weakness" },
            { title: "Confidence Building", url: "https://www.youtube.com/results?search_query=toeic+confidence" }
          ]
        },
        {
          day: "Thứ 3",
          type: "Test",
          icon: "award",
          task: "FINAL MOCK TEST 8 - Full Simulation",
          desc: "Bài thi mô phỏng cuối cùng - điều kiện hoàn toàn giống thi thật.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành Final Mock Test trong điều kiện MÔ PHỎNG HOÀN TOÀN
- Mục tiêu: 900+ điểm (194+ câu)
- Xác nhận năng lực cuối cùng
- Tự tin tuyệt đối cho thi thật

**Phương pháp thi (120 phút):**

*Chuẩn bị mô phỏng HOÀN TOÀN (15 phút):*
1. **Thời gian:** Thi vào buổi sáng (8-10 AM) - GIỐNG THI THẬT
2. **Địa điểm:** Phòng yên tĩnh, bàn ghế giống phòng thi
3. **Dụng cụ:** 
   - Bút chì 2B và tẩy (KHÔNG bút bi)
   - Answer sheet in ra
   - Đồng hồ đeo tay
4. **Quy định:**
   - KHÔNG uống nước/ăn trong khi thi
   - KHÔNG nghỉ giữa LC và RC
   - KHÔNG xem lại LC sau khi hết thời gian
5. **Tâm thế:** Đây là THI THẬT. Ngày 15/8/2026

*Listening Section (45 phút):*
**Mục tiêu: 98/100 (98%+) ≈ 495+ điểm**
- Part 1: 6/6 (100%)
- Part 2: 25/25 (100%)
- Part 3: 39/39 (100%)
- Part 4: 28/30 (93%+)

*Reading Section (75 phút):*
**Mục tiêu: 98/100 (98%+) ≈ 495+ điểm**
- Part 5: 30/30 (100%)
- Part 6: 16/16 (100%)
- Part 7: 52/54 (96%+)

*Sau khi thi (30 phút):*
1. Chấm điểm chi tiết
2. So sánh với Test 5-6-7
3. Xác nhận năng lực cuối cùng
4. Ghi chú cảm giác và kinh nghiệm

**Phân bổ thời gian:**
- Chuẩn bị: 15 phút
- Listening: 45 phút
- Reading: 75 phút
- Phân tích: 30 phút
- **Tổng: 165 phút**

**Kết quả mong đợi:**
- Đạt 900+ điểm (196+ câu)
- Xác nhận năng lực cuối cùng
- Tự tin tuyệt đối
- Sẵn sàng 100% cho thi thật`,
          methodology: [
            "Chuẩn bị: Mô phỏng HOÀN TOÀN điều kiện thi thật (15 phút)",
            "Listening: Mục tiêu 98/100 (45 phút)",
            "Reading: Mục tiêu 98/100 (75 phút)",
            "Phân tích: Xác nhận năng lực cuối cùng (30 phút)"
          ],
          timeAllocation: {
            "Chuẩn bị": 15,
            "Listening": 45,
            "Reading": 75,
            "Phân tích": 30
          },
          commonMistakes: [
            "❌ Không thi trong điều kiện mô phỏng hoàn toàn → Không chuẩn bị tốt",
            "❌ Lo lắng quá mức → Ảnh hưởng kết quả → Phải TỰ TIN",
            "❌ Không ghi chú cảm giác → Không học được kinh nghiệm"
          ],
          instructorTips: [
            "💡 Final Mock Test là BÀI THI QUAN TRỌNG NHẤT. Kết quả sẽ GẦN GIỐNG thi thật nhất",
            "💡 Thi trong điều kiện mô phỏng HOÀN TOÀN → Chuẩn bị tâm lý tốt nhất",
            "💡 Nếu đạt 900+ → CHÚC MỪNG! Bạn SẼ đạt 900+ trong thi thật",
            "💡 Nếu chưa đạt 900 → ĐỪNG lo. Trong thi thật, adrenaline sẽ giúp bạn tập trung hơn"
          ],
          checkpoints: [
            "✅ Thi trong điều kiện mô phỏng hoàn toàn",
            "✅ Đạt 900+ điểm (196+ câu)",
            "✅ So sánh với Test 5-6-7",
            "✅ Xác nhận năng lực cuối cùng",
            "✅ Ghi chú cảm giác và kinh nghiệm"
          ],
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-4-lc-rc/",
          additionalLinks: [
            { title: "Final Mock Test Tips", url: "https://www.youtube.com/results?search_query=toeic+final+mock+test" },
            { title: "Test Day Simulation", url: "https://www.youtube.com/results?search_query=toeic+test+day+simulation" }
          ]
        },
        {
          day: "Thứ 4",
          type: "Review",
          icon: "zoom-in",
          task: "Light Review + Mental Preparation - Relaxation",
          desc: "Ôn tập nhẹ và chuẩn bị tinh thần - thư giãn.",
          detailedDesc: `**Mục tiêu học tập:**
- Ôn tập NHẸ NHÀNG kiến thức quan trọng
- Chuẩn bị tinh thần cho thi thật
- Thư giãn và tự tin
- KHÔNG học kiến thức mới

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Light Review (30 phút)*
1. **Vocabulary (10 phút):**
   - Xem lại flashcards 100 từ quan trọng nhất
   - KHÔNG học từ mới
   - Chỉ ôn lại từ đã biết

2. **Grammar (10 phút):**
   - Xem lại checklist Grammar
   - Ôn lại các lỗi thường gặp
   - KHÔNG học ngữ pháp mới

3. **Chiến thuật (10 phút):**
   - Xem lại chiến thuật từng part
   - Ôn lại time management
   - Ghi nhớ các tips quan trọng

*Giai đoạn 2: Mental Preparation (20 phút)*
1. **Visualization (10 phút):**
   - Ngồi yên, nhắm mắt
   - Tưởng tượng ngày thi:
     - Bạn đến phòng thi tự tin
     - Bạn làm bài trơn tru
     - Bạn hoàn thành đúng thời gian
     - Bạn cảm thấy tự tin và hài lòng
   - Lặp lại 3 lần

2. **Positive Affirmations (5 phút):**
   - Nói to các câu khẳng định:
     - "Tôi đã chuẩn bị rất tốt"
     - "Tôi sẽ đạt 900+ điểm"
     - "Tôi tự tin và bình tĩnh"
     - "Tôi sẽ làm tốt nhất"
   - Lặp lại 5 lần

3. **Breathing Exercise (5 phút):**
   - Hít thở sâu: 4 giây hít vào, 4 giây giữ, 4 giây thở ra
   - Lặp lại 10 lần
   - Cảm nhận sự thư giãn

*Giai đoạn 3: Relaxation (10 phút)*
1. Nghe nhạc thư giãn
2. Đi dạo
3. Làm điều bạn thích
4. KHÔNG nghĩ về thi

**Phân bổ thời gian:**
- Light Review: 30 phút
- Mental Preparation: 20 phút
- Relaxation: 10 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Ôn lại kiến thức quan trọng
- Chuẩn bị tinh thần tốt
- Thư giãn và tự tin
- Sẵn sàng cho thi thật`,
          methodology: [
            "Giai đoạn 1: Light Review - Vocab, Grammar, Chiến thuật (30 phút)",
            "Giai đoạn 2: Mental Preparation - Visualization, Affirmations, Breathing (20 phút)",
            "Giai đoạn 3: Relaxation - Thư giãn (10 phút)"
          ],
          timeAllocation: {
            "Light Review": 30,
            "Mental Preparation": 20,
            "Relaxation": 10
          },
          commonMistakes: [
            "❌ Học kiến thức mới → Lo lắng → KHÔNG học kiến thức mới",
            "❌ Luyện tập quá nhiều → Mệt mỏi → Chỉ ôn NHẸ NHÀNG",
            "❌ Không thư giãn → Căng thẳng → Phải THƯ GIÃN"
          ],
          instructorTips: [
            "💡 Tuần cuối KHÔNG phải lúc học kiến thức mới. Chỉ ôn lại và tự tin",
            "💡 Mental Preparation RẤT QUAN TRỌNG. Tâm lý tốt → Kết quả tốt",
            "💡 Visualization giúp não bộ quen với tình huống thi → Bớt lo lắng",
            "💡 Thư giãn và ngủ đủ giấc → Quan trọng hơn luyện tập"
          ],
          checkpoints: [
            "✅ Ôn lại 100 từ vựng quan trọng",
            "✅ Ôn lại Grammar checklist",
            "✅ Ôn lại chiến thuật từng part",
            "✅ Thực hiện Visualization 3 lần",
            "✅ Cảm thấy thư giãn và tự tin"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Mental Preparation for Tests", url: "https://www.youtube.com/results?search_query=test+mental+preparation" },
            { title: "Relaxation Techniques", url: "https://www.youtube.com/results?search_query=relaxation+techniques" }
          ]
        },
        {
          day: "Thứ 5",
          type: "Listening",
          icon: "headphones",
          task: "Part 1-2 Perfection Check - Must be 100%",
          desc: "Kiểm tra hoàn hảo Part 1-2 - phải đạt 100%.",
          detailedDesc: `**Mục tiêu học tập:**
- Đạt 100% Part 1-2 (31/31 câu)
- Xác nhận không còn lỗi sai nào
- Tự tin tuyệt đối với Part 1-2
- Chuẩn bị cho thi thật

**Phương pháp học chi tiết (40 phút):**

*Giai đoạn 1: Ôn lại chiến thuật (10 phút)*
**PART 1 (6 câu):**
- Quan sát ảnh 5 giây
- Chú ý bẫy "being" (hành động vs trạng thái)
- Loại bẫy âm thanh tương tự
- Chú ý số ít/số nhiều

**PART 2 (25 câu):**
- Nghe từ ĐẦU TIÊN (WH/Yes-No/Choice)
- Loại bẫy lặp từ
- Chú ý indirect answers
- Không chờ Yes/No trực tiếp

*Giai đoạn 2: Perfection Drill (25 phút)*
1. Làm 6 bộ Part 1-2 đầy đủ (186 câu = 36 câu × 5 bộ + 6 câu)
   - Part 1: 30 câu (5 bộ × 6 câu)
   - Part 2: 125 câu (5 bộ × 25 câu)
2. Quy trình:
   - Làm từng bộ
   - Chấm điểm ngay
   - Nếu sai → Nghe lại và sửa ngay
3. Mục tiêu: 155/155 đúng (100%)

*Giai đoạn 3: Final Check (5 phút)*
1. Nếu đạt 100% → HOÀN HẢO! Bạn sẵn sàng
2. Nếu chưa đạt 100% → Xem lại các câu sai
3. Ghi nhớ bẫy để tránh trong thi thật

**Phân bổ thời gian:**
- Ôn chiến thuật: 10 phút
- Perfection Drill: 25 phút
- Final Check: 5 phút
- **Tổng: 40 phút**

**Kết quả mong đợi:**
- Đạt 100% Part 1-2
- Không còn lỗi sai nào
- Tự tin tuyệt đối
- Sẵn sàng cho thi thật`,
          methodology: [
            "Giai đoạn 1: Ôn lại chiến thuật Part 1-2 (10 phút)",
            "Giai đoạn 2: Perfection Drill - 155 câu (25 phút)",
            "Giai đoạn 3: Final Check (5 phút)"
          ],
          timeAllocation: {
            "Ôn chiến thuật": 10,
            "Perfection Drill": 25,
            "Final Check": 5
          },
          commonMistakes: [
            "❌ Không chú ý bẫy 'being' → Sai Part 1 → Phải CHÚ Ý",
            "❌ Chọn đáp án có từ lặp lại → Sai Part 2 → Phải LOẠI BẪY",
            "❌ Không tự tin → Đoán → Phải TỰ TIN và chọn chắc chắn"
          ],
          instructorTips: [
            "💡 Part 1-2 là phần DỄ NHẤT TOEIC. Bạn PHẢI đạt 100% để có 900+ điểm",
            "💡 Trong thi thật, Part 1-2 là lúc XÂY DỰNG TỰ TIN. Làm tốt → Tự tin cho phần sau",
            "💡 Nếu đạt 100% trong drill → Bạn SẼ đạt 100% trong thi thật",
            "💡 Đừng lo nếu sai 1-2 câu trong drill. Trong thi thật, bạn sẽ tập trung hơn"
          ],
          checkpoints: [
            "✅ Ôn lại chiến thuật Part 1-2",
            "✅ Làm 155 câu Part 1-2",
            "✅ Đạt 100% (155/155)",
            "✅ Không còn lỗi sai nào",
            "✅ Tự tin tuyệt đối"
          ],
          link: "https://study4.com/tests/toeic-part-1-training/",
          additionalLinks: [
            { title: "Part 1 Perfect Score", url: "https://www.youtube.com/results?search_query=toeic+part+1+perfect" },
            { title: "Part 2 Perfect Score", url: "https://www.youtube.com/results?search_query=toeic+part+2+perfect" }
          ]
        },
        {
          day: "Thứ 6",
          type: "Skill",
          icon: "zap",
          task: "Time Management Final Rehearsal - Complete in 115 min",
          desc: "Tổng duyệt time management - hoàn thành trong 115 phút.",
          detailedDesc: `**Mục tiêu học tập:**
- Hoàn thành TOÀN BỘ Reading trong 115 phút (dự phòng 5 phút)
- Đạt 95/100 câu (95%+)
- Time management HOÀN HẢO
- Tự tin tuyệt đối

**Phương pháp học chi tiết (60 phút):**

*Giai đoạn 1: Ôn lại time management (10 phút)*
**PHÂN BỔ THỜI GIAN READING (75 phút):**
- Part 5: 10 phút (20s/câu)
- Part 6: 5 phút (20s/câu)
- Part 7: 55 phút
  - Đoạn đơn: 25 phút
  - Đoạn kép: 10 phút
  - Đoạn ba: 18 phút
  - Dự phòng: 2 phút
- **Mục tiêu: Hoàn thành trong 70 phút, dự phòng 5 phút**

*Giai đoạn 2: Không làm drill (50 phút)*
**LƯU Ý QUAN TRỌNG:**
- Hôm nay KHÔNG làm full drill
- Chỉ ôn lại time management
- Dành sức cho ngày mai (Rest Day)
- Thư giãn và tự tin

**Thay vào đó:**
1. Xem lại notes time management (10 phút)
2. Làm 10 câu Part 5 để warm-up (5 phút)
3. Làm 1 đoạn Part 7 để kiểm tra tốc độ (5 phút)
4. Thư giãn (30 phút)

**Phân bổ thời gian:**
- Ôn time management: 10 phút
- Light practice: 20 phút
- Thư giãn: 30 phút
- **Tổng: 60 phút**

**Kết quả mong đợi:**
- Nhớ rõ time management
- Warm-up nhẹ nhàng
- Thư giãn và tự tin
- Sẵn sàng cho ngày mai`,
          methodology: [
            "Giai đoạn 1: Ôn lại time management (10 phút)",
            "Giai đoạn 2: Light practice - Không làm drill (20 phút)",
            "Giai đoạn 3: Thư giãn (30 phút)"
          ],
          timeAllocation: {
            "Ôn time management": 10,
            "Light practice": 20,
            "Thư giãn": 30
          },
          commonMistakes: [
            "❌ Luyện tập quá nhiều → Mệt mỏi → Chỉ warm-up NHẸ NHÀNG",
            "❌ Lo lắng về time management → Căng thẳng → Phải TỰ TIN",
            "❌ Không thư giãn → Mệt mỏi → Phải THƯ GIÃN"
          ],
          instructorTips: [
            "💡 Hôm nay KHÔNG phải lúc luyện tập nhiều. Chỉ ôn lại và thư giãn",
            "💡 Bạn đã luyện time management 12 tuần. Bạn ĐÃ BIẾT",
            "💡 Thư giãn và ngủ đủ giấc quan trọng hơn luyện tập",
            "💡 Ngày mai là Rest Day. Hôm nay chuẩn bị tinh thần"
          ],
          checkpoints: [
            "✅ Ôn lại time management",
            "✅ Warm-up nhẹ nhàng",
            "✅ Không luyện tập quá nhiều",
            "✅ Thư giãn 30 phút",
            "✅ Tự tin và sẵn sàng"
          ],
          link: "https://study4.com/tests/toeic-part-5-training/",
          additionalLinks: [
            { title: "Time Management Review", url: "https://www.youtube.com/results?search_query=toeic+time+management" },
            { title: "Relaxation Before Test", url: "https://www.youtube.com/results?search_query=relaxation+before+test" }
          ]
        },
        {
          day: "Thứ 7",
          type: "Review",
          icon: "zoom-in",
          task: "Rest + Confidence Building - Test-day Strategy",
          desc: "Nghỉ ngơi và xây dựng tự tin - chiến lược ngày thi.",
          detailedDesc: `**Mục tiêu học tập:**
- Nghỉ ngơi HOÀN TOÀN
- Xây dựng tự tin tuyệt đối
- Chuẩn bị chiến lược ngày thi
- Sẵn sàng 100% cho thi thật

**Phương pháp học chi tiết (30 phút):**

*Giai đoạn 1: Rest (0 phút)*
**KHÔNG HỌC GÌ CẢ HÔM NAY**
- KHÔNG làm bài tập
- KHÔNG ôn lý thuyết
- KHÔNG xem notes
- CHỈ nghỉ ngơi và thư giãn

*Giai đoạn 2: Confidence Building (20 phút)*
1. **Review Journey (10 phút):**
   - Xem lại kết quả từ Baseline đến Test 8
   - Thấy rõ tiến bộ của mình
   - Tự hào về những gì đã đạt được

2. **Positive Affirmations (5 phút):**
   - "Tôi đã chuẩn bị 12 tuần"
   - "Tôi đã làm 8 Full Tests"
   - "Tôi đã đạt 900+ trong Test 7-8"
   - "Tôi SẼ đạt 900+ trong thi thật"
   - "Tôi tự tin và sẵn sàng"

3. **Visualization (5 phút):**
   - Tưởng tượng ngày thi thành công
   - Cảm nhận niềm vui khi nhận kết quả 900+

*Giai đoạn 3: Test-day Strategy (10 phút)*
**NGÀY THI (15/8/2026):**

**Trước khi thi:**
- Ngủ đủ 8 giờ đêm trước
- Ăn sáng đầy đủ
- Đến sớm 30 phút
- Mang đủ giấy tờ, bút chì 2B, tẩy, đồng hồ
- Đi vệ sinh trước khi vào phòng thi

**Trong khi thi:**
- Bình tĩnh và tự tin
- Áp dụng MỌI chiến thuật đã học
- Quản lý thời gian chặt chẽ
- Nếu không biết → Đoán và chuyển câu
- KHÔNG suy nghĩ quá lâu 1 câu

**Sau khi thi:**
- Thư giãn và tự tin
- Chờ kết quả
- Tin vào bản thân

**Phân bổ thời gian:**
- Rest: 0 phút (cả ngày)
- Confidence Building: 20 phút
- Test-day Strategy: 10 phút
- **Tổng: 30 phút**

**Kết quả mong đợi:**
- Nghỉ ngơi hoàn toàn
- Tự tin tuyệt đối
- Biết rõ chiến lược ngày thi
- Sẵn sàng 100% cho thi thật

**CHÚC MỪNG! BẠN ĐÃ HOÀN THÀNH 12 TUẦN CHUẨN BỊ!**
**BẠN SẴN SÀNG ĐẠT 900+ ĐIỂM TOEIC!**`,
          methodology: [
            "Giai đoạn 1: Rest - KHÔNG học gì cả (0 phút)",
            "Giai đoạn 2: Confidence Building (20 phút)",
            "Giai đoạn 3: Test-day Strategy (10 phút)"
          ],
          timeAllocation: {
            "Rest": 0,
            "Confidence Building": 20,
            "Test-day Strategy": 10
          },
          commonMistakes: [
            "❌ Học thêm kiến thức mới → Lo lắng → KHÔNG học gì cả",
            "❌ Luyện tập quá nhiều → Mệt mỏi → CHỈ nghỉ ngơi",
            "❌ Lo lắng quá mức → Ảnh hưởng kết quả → Phải TỰ TIN"
          ],
          instructorTips: [
            "💡 Hôm nay là REST DAY. KHÔNG học gì cả. Chỉ nghỉ ngơi và tự tin",
            "💡 Bạn đã chuẩn bị 12 tuần. Bạn đã làm 8 Full Tests. Bạn SẴN SÀNG",
            "💡 Ngủ đủ giấc quan trọng hơn mọi thứ. Ngủ 8 giờ đêm nay",
            "💡 Tin vào bản thân. Bạn SẼ đạt 900+ điểm TOEIC!"
          ],
          checkpoints: [
            "✅ Nghỉ ngơi hoàn toàn cả ngày",
            "✅ Review journey và thấy tiến bộ",
            "✅ Thực hiện Positive Affirmations",
            "✅ Biết rõ chiến lược ngày thi",
            "✅ Tự tin tuyệt đối và sẵn sàng 100%"
          ],
          link: "https://study4.com/",
          additionalLinks: [
            { title: "Test Day Checklist", url: "https://www.ets.org/toeic/test-takers/test-day.html" },
            { title: "Final Confidence Building", url: "https://www.youtube.com/results?search_query=test+day+confidence" }
          ]
        }
      ]
    }
  ]
};

export const TARGET_DATE = "2026-08-15T00:00:00";

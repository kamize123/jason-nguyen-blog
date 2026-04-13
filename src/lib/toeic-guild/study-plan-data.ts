import { StudyPlan } from './types';

export const studyPlanData: StudyPlan = {
  month1: [
    {
      week: "Tuần 1: Grammar Elite & Word Form",
      days: [
        { 
          day: "Thứ 2", 
          type: "Grammar", 
          icon: "book-open", 
          task: "12 Thì & Thể bị động nâng cao", 
          desc: "Học cách xử lý các thì hoàn thành và bị động trong câu phức.", 
          checkpoints: [
            "Hoàn thành 20 câu Part 5 chuyên đề Động từ.",
            "Phân biệt được chủ động/bị động gây nhầm lẫn.",
            "Target: Đúng ít nhất 18/20 câu."
          ], 
          link: "https://study4.com/grammar/12-thi-trong-tieng-anh/" 
        },
        { 
          day: "Thứ 3", 
          type: "Vocab", 
          icon: "briefcase", 
          task: "Personnel & Contracts", 
          desc: "Từ vựng then chốt về Hợp đồng và Nhân sự.", 
          checkpoints: [
            "Thuộc lòng 40 từ vựng chủ đề Contracts.",
            "Vượt qua bài test Quizlet 100%.",
            "Đặt 5 câu ví dụ thực tế."
          ], 
          link: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/" 
        },
        { 
          day: "Thứ 4", 
          type: "Listening", 
          icon: "headphones", 
          task: "Part 1 Mastery (6/6)", 
          desc: "Chiến thuật xử lý tranh mô tả vật và người.", 
          checkpoints: [
            "Nắm chắc bẫy 'being' cho vật.",
            "Làm 5 đề Part 1 ETS 2024.",
            "Target: 6/6 câu tuyệt đối."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 5", 
          type: "Skill", 
          icon: "zap", 
          task: "Word Form: Phản xạ 2s", 
          desc: "Nhận diện hậu tố để tiết kiệm thời gian Part 5.", 
          checkpoints: [
            "Ghi nhớ 20 hậu tố phổ biến nhất.",
            "Làm 30 câu Part 5 từ loại.",
            "Target: Xử lý < 10s/câu."
          ], 
          link: "https://www.youtube.com/results?search_query=word+form+toeic+meo+lam+bai" 
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
          task: "Part 2 Question Types", 
          desc: "Phân loại và xử lý các dạng câu hỏi trong Part 2.", 
          checkpoints: [
            "Học 5 dạng câu hỏi phổ biến nhất.",
            "Làm 50 câu Part 2 mixed.",
            "Target: Đúng 45/50 câu."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 3", 
          type: "Vocab", 
          icon: "globe", 
          task: "Office & Technology", 
          desc: "Từ vựng văn phòng và công nghệ thường gặp.", 
          checkpoints: [
            "Học 50 từ vựng chủ đề Office.",
            "Hoàn thành Quizlet test.",
            "Viết 10 câu sử dụng từ mới."
          ], 
          link: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/" 
        },
        { 
          day: "Thứ 4", 
          type: "Grammar", 
          icon: "book-open", 
          task: "Prepositions & Conjunctions", 
          desc: "Giới từ và liên từ trong câu phức.", 
          checkpoints: [
            "Học 30 cụm giới từ phổ biến.",
            "Làm 25 câu Part 5 về giới từ.",
            "Target: 23/25 đúng."
          ], 
          link: "https://study4.com/grammar/prepositions/" 
        },
        { 
          day: "Thứ 5", 
          type: "Skill", 
          icon: "zap", 
          task: "Speed Reading Part 7", 
          desc: "Kỹ thuật đọc nhanh và scanning.", 
          checkpoints: [
            "Đọc 5 đoạn văn đơn.",
            "Thời gian trung bình < 1 phút/đoạn.",
            "Đúng 100% câu hỏi."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2023-test-1-lc-rc/" 
        }
      ]
    },
    {
      week: "Tuần 3: Part 3 Conversations & Reading Strategies",
      days: [
        { 
          day: "Thứ 2", 
          type: "Listening", 
          icon: "mic", 
          task: "Part 3 Conversations", 
          desc: "Luyện nghe hội thoại 3 người và map từ khóa.", 
          checkpoints: [
            "Nghe 10 hội thoại Part 3.",
            "Practice note-taking technique.",
            "Target: 27/30 câu đúng."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" 
        },
        { 
          day: "Thứ 3", 
          type: "Vocab", 
          icon: "briefcase", 
          task: "Finance & Banking", 
          desc: "Từ vựng tài chính và ngân hàng.", 
          checkpoints: [
            "Học 40 từ vựng Finance.",
            "Làm bài test đạt > 90%.",
            "Ghi nhớ 10 collocations."
          ], 
          link: "https://quizlet.com/vn/515288258/600-essential-words-for-the-toeic-lesson-2-marketing-flash-cards/" 
        },
        { 
          day: "Thứ 4", 
          type: "Skill", 
          icon: "search", 
          task: "Part 7 Double Passages", 
          desc: "Chiến thuật xử lý đoạn văn kép.", 
          checkpoints: [
            "Làm 5 đoạn văn kép.",
            "Thời gian < 3 phút/đoạn.",
            "Đúng 90% câu hỏi."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2023-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 5", 
          type: "Test", 
          icon: "award", 
          task: "Mini Test 1", 
          desc: "Làm bài test 50 câu LC + 50 câu RC.", 
          checkpoints: [
            "Hoàn thành trong 60 phút.",
            "Không gián đoạn.",
            "Target: 85/100 đúng."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
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
          icon: "repeat", 
          task: "Kỹ thuật Map từ đồng nghĩa", 
          desc: "Học cách nhận diện từ vựng đã được thay đổi trong đáp án.", 
          checkpoints: [
            "Ghi chép 20 cặp từ Paraphrase thường gặp.",
            "Luyện map từ khóa trước khi nghe.",
            "Target: Nghe A chọn A'."
          ], 
          link: "https://www.youtube.com/results?search_query=toeic+paraphrasing+techniques+part+3" 
        },
        { 
          day: "Thứ 3", 
          type: "Listening", 
          icon: "mic", 
          task: "Shadowing Part 3 (Fluency)", 
          desc: "Nhại lại giọng máy để tăng phản xạ tai.", 
          checkpoints: [
            "Chọn 3 hội thoại dài, nghe và nhại lại không nhìn script.",
            "Đảm bảo ngữ điệu khớp 90% với băng.",
            "Nghe lại 3 lần sau khi shadowing."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" 
        },
        { 
          day: "Thứ 4", 
          type: "Vocab", 
          icon: "globe", 
          task: "Marketing & Business Trip", 
          desc: "Từ vựng về quảng cáo, hội nghị và công tác.", 
          checkpoints: [
            "Học 40 từ chủ đề Marketing.",
            "Làm Mini-test từ vựng đạt > 90%.",
            "Note lại 5 collocations hay dùng."
          ], 
          link: "https://quizlet.com/vn/515288258/600-essential-words-for-the-toeic-lesson-2-marketing-flash-cards/" 
        },
        { 
          day: "Thứ 5", 
          type: "Skill", 
          icon: "search", 
          task: "Part 7 Scanning Speed", 
          desc: "Kỹ thuật tìm thông tin trong đoạn văn đơn < 20s.", 
          checkpoints: [
            "Làm 10 đoạn đơn Part 7.",
            "Ép thời gian 1 phút/đoạn.",
            "Target: Đúng 100% thông tin chi tiết."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2023-test-1-lc-rc/" 
        }
      ]
    }
  ],
  month3: [
    {
      week: "Tuần 9: High Simulation & Final Sprint",
      days: [
        { 
          day: "Thứ 2", 
          type: "Test", 
          icon: "award", 
          task: "ETS 2024 - Full Test 1", 
          desc: "Làm bài nghiêm túc 120 phút chuẩn giờ thi.", 
          checkpoints: [
            "Tắt điện thoại, không gián đoạn.",
            "Hoàn thành đúng 120 phút.",
            "Target: Đạt mức 850+."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 3", 
          type: "Review", 
          icon: "zoom-in", 
          task: "Deep Correction (LC Focus)", 
          desc: "Phân tích mọi câu sai phần nghe. Tại sao sai?", 
          checkpoints: [
            "Nghe lại đoạn sai không nhìn sub.",
            "Chép chính tả câu chứa từ khóa sai.",
            "Ghi chú bẫy âm thanh vừa gặp."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 4", 
          type: "Review", 
          icon: "file-search", 
          task: "Deep Correction (RC Focus)", 
          desc: "Dịch thô các đoạn văn Part 7 chứa câu sai.", 
          checkpoints: [
            "Xác định chính xác dòng chứa đáp án.",
            "Học toàn bộ từ mới xuất hiện trong câu sai.",
            "Note lại bẫy logic suy luận."
          ], 
          link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" 
        },
        { 
          day: "Thứ 5", 
          type: "Skill", 
          icon: "crosshair", 
          task: "Part 5 & 6 Zero Mistake", 
          desc: "Luyện Part 5-6 với mục tiêu tuyệt đối không sai câu nào.", 
          checkpoints: [
            "Làm 50 câu hỗn hợp P5-6.",
            "Ép thời gian 15 phút.",
            "Target: 50/50 câu đúng."
          ], 
          link: "https://study4.com/tests/toeic-part-5-training/" 
        }
      ]
    }
  ]
};

export const TARGET_DATE = "2026-08-15T00:00:00";

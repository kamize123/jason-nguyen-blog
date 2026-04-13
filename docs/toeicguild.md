<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOEIC 900+ Master Hub v2.6 - Jason</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.0/lucide.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            background-color: #f1f5f9;
        }
        .tab-active { 
            @apply bg-blue-600 text-white shadow-xl ring-2 ring-blue-200; 
        }
        .checkbox-custom:checked + label { 
            @apply line-through text-slate-400 opacity-60 font-normal; 
        }
        .task-card { 
            @apply transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-slate-300 bg-white shadow-md rounded-[2rem]; 
        }
        .bright-header { 
            background: white;
            border-bottom: 3px solid #cbd5e1;
        }
        .category-badge {
            @apply px-3 py-1 rounded-full text-[10px] font-black uppercase border-2 shadow-sm;
        }
        details summary::-webkit-details-marker { display: none; }
        .checkpoint-item {
            @apply flex items-start gap-2 text-[11px] text-slate-600 font-medium mb-1.5;
        }
    </style>
</head>
<body class="min-h-screen pb-20 text-slate-800">

    <!-- Header Section -->
    <header class="bright-header pt-12 pb-20 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                <div class="max-w-2xl">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-200">
                            <i data-lucide="shield-check" class="text-white w-7 h-7"></i>
                        </div>
                        <h1 class="text-2xl font-black tracking-tight text-slate-900 uppercase">Jason's <span class="text-blue-600">TOEIC 900+</span> Elite Hub</h1>
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                        Tập trung tuyệt đối. <span class="text-blue-600">Kỷ luật sắt.</span>
                    </h2>
                    <p class="text-slate-500 text-lg font-medium mb-8">Lộ trình 3 giai đoạn đã fix lỗi hiển thị và nâng cấp độ tương phản.</p>
                </div>

                <!-- Progress Dashboard -->
                <div class="bg-white p-8 rounded-[2.5rem] border-4 border-slate-100 shadow-2xl shadow-blue-100/40 w-full max-w-md">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <p class="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Tiến độ 90 ngày</p>
                            <h3 class="text-4xl font-black text-slate-900" id="progress-percent">0%</h3>
                        </div>
                        <div class="text-right">
                            <div id="nav-countdown" class="text-sm font-bold text-blue-800 bg-blue-100 px-4 py-2 rounded-2xl mb-2 inline-block border border-blue-200">00d 00h left</div>
                        </div>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-5 mb-4 shadow-inner p-1 border border-slate-200">
                        <div id="progress-bar" class="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%"></div>
                    </div>
                    <p id="countdown" class="text-center font-mono text-[11px] font-bold text-slate-500 bg-slate-50 py-1 rounded-lg">Target: 15/08/2026</p>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto -mt-10 px-6 pb-20 relative z-20">
        
        <!-- Tab Navigation -->
        <div id="tabs-section" class="flex p-2 bg-white rounded-3xl shadow-2xl mb-12 border-2 border-slate-200 w-full max-w-3xl mx-auto">
            <button onclick="switchTab('month1')" id="tab-month1" class="flex-1 px-4 py-4 font-bold text-slate-500 transition-all rounded-2xl tab-active uppercase text-[11px] tracking-widest">Sprint 1: Nền tảng</button>
            <button onclick="switchTab('month2')" id="tab-month2" class="flex-1 px-4 py-4 font-bold text-slate-500 transition-all rounded-2xl uppercase text-[11px] tracking-widest border border-transparent">Sprint 2: Kỹ năng</button>
            <button onclick="switchTab('month3')" id="tab-month3" class="flex-1 px-4 py-4 font-bold text-slate-500 transition-all rounded-2xl uppercase text-[11px] tracking-widest border border-transparent">Sprint 3: Về đích</button>
        </div>

        <!-- Roadmap Content -->
        <div id="roadmap-container">
            <div id="month1" class="tab-content grid grid-cols-1 gap-12"></div>
            <div id="month2" class="tab-content hidden grid grid-cols-1 gap-12"></div>
            <div id="month3" class="tab-content hidden grid grid-cols-1 gap-12"></div>
        </div>

    </main>

    <script>
        const targetDate = new Date("2026-08-15T00:00:00").getTime();
        
        const roadmapData = {
            month1: [
                {
                    week: "Tuần 1: Grammar Elite & Word Form",
                    days: [
                        { day: "Thứ 2", type: "Grammar", icon: "book-open", task: "12 Thì & Thể bị động nâng cao", desc: "Học cách xử lý các thì hoàn thành và bị động trong câu phức.", checkpoints: ["Hoàn thành 20 câu Part 5 chuyên đề Động từ.","Phân biệt được chủ động/bị động gây nhầm lẫn.","Target: Đúng ít nhất 18/20 câu."], link: "https://study4.com/grammar/12-thi-trong-tieng-anh/" },
                        { day: "Thứ 3", type: "Vocab", icon: "briefcase", task: "Personnel & Contracts", desc: "Từ vựng then chốt về Hợp đồng và Nhân sự.", checkpoints: ["Thuộc lòng 40 từ vựng chủ đề Contracts.","Vượt qua bài test Quizlet 100%.","Đặt 5 câu ví dụ thực tế."], link: "https://quizlet.com/vn/515287661/600-essential-words-for-the-toeic-lesson-1-contracts-flash-cards/" },
                        { day: "Thứ 4", type: "Listening", icon: "headphones", task: "Part 1 Mastery (6/6)", desc: "Chiến thuật xử lý tranh mô tả vật và người.", checkpoints: ["Nắm chắc bẫy 'being' cho vật.","Làm 5 đề Part 1 ETS 2024.","Target: 6/6 câu tuyệt đối."], link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" },
                        { day: "Thứ 5", type: "Skill", icon: "zap", task: "Word Form: Phản xạ 2s", desc: "Nhận diện hậu tố để tiết kiệm thời gian Part 5.", checkpoints: ["Ghi nhớ 20 hậu tố phổ biến nhất.","Làm 30 câu Part 5 từ loại.","Target: Xử lý < 10s/câu."], link: "https://www.youtube.com/results?search_query=word+form+toeic+meo+lam+bai" }
                    ]
                }
            ],
            month2: [
                {
                    week: "Tuần 5: Paraphrasing & Part 3-4 Elite",
                    days: [
                        { day: "Thứ 2", type: "Skill", icon: "repeat", task: "Kỹ thuật Map từ đồng nghĩa", desc: "Học cách nhận diện từ vựng đã được thay đổi trong đáp án.", checkpoints: ["Ghi chép 20 cặp từ Paraphrase thường gặp.","Luyện map từ khóa trước khi nghe.","Target: Nghe A chọn A'."], link: "https://www.youtube.com/results?search_query=toeic+paraphrasing+techniques+part+3" },
                        { day: "Thứ 3", type: "Listening", icon: "mic", task: "Shadowing Part 3 (Fluency)", desc: "Nhại lại giọng máy để tăng phản xạ tai.", checkpoints: ["Chọn 3 hội thoại dài, nghe và nhại lại không nhìn script.","Đảm bảo ngữ điệu khớp 90% với băng.","Nghe lại 3 lần sau khi shadowing."], link: "https://study4.com/tests/toeic/ets-toeic-2024-test-2-lc-rc/" },
                        { day: "Thứ 4", type: "Vocab", icon: "globe", task: "Marketing & Business Trip", desc: "Từ vựng về quảng cáo, hội nghị và công tác.", checkpoints: ["Học 40 từ chủ đề Marketing.","Làm Mini-test từ vựng đạt > 90%.","Note lại 5 collocations hay dùng."], link: "https://quizlet.com/vn/515288258/600-essential-words-for-the-toeic-lesson-2-marketing-flash-cards/" },
                        { day: "Thứ 5", type: "Skill", icon: "search", task: "Part 7 Scanning Speed", desc: "Kỹ thuật tìm thông tin trong đoạn văn đơn < 20s.", checkpoints: ["Làm 10 đoạn đơn Part 7.","Ép thời gian 1 phút/đoạn.","Target: Đúng 100% thông tin chi tiết."], link: "https://study4.com/tests/toeic/ets-toeic-2023-test-1-lc-rc/" }
                    ]
                }
            ],
            month3: [
                {
                    week: "Tuần 9: High Simulation & Final Sprint",
                    days: [
                        { day: "Thứ 2", type: "Test", icon: "award", task: "ETS 2024 - Full Test 1", desc: "Làm bài nghiêm túc 120 phút chuẩn giờ thi.", checkpoints: ["Tắt điện thoại, không gián đoạn.","Hoàn thành đúng 120 phút.","Target: Đạt mức 850+."], link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" },
                        { day: "Thứ 3", type: "Review", icon: "zoom-in", task: "Deep Correction (LC Focus)", desc: "Phân tích mọi câu sai phần nghe. Tại sao sai?", checkpoints: ["Nghe lại đoạn sai không nhìn sub.","Chép chính tả câu chứa từ khóa sai.","Ghi chú bẫy âm thanh vừa gặp."], link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" },
                        { day: "Thứ 4", type: "Review", icon: "file-search", task: "Deep Correction (RC Focus)", desc: "Dịch thô các đoạn văn Part 7 chứa câu sai.", checkpoints: ["Xác định chính xác dòng chứa đáp án.","Học toàn bộ từ mới xuất hiện trong câu sai.","Note lại bẫy logic suy luận."], link: "https://study4.com/tests/toeic/ets-toeic-2024-test-1-lc-rc/" },
                        { day: "Thứ 5", type: "Skill", icon: "crosshair", task: "Part 5 & 6 Zero Mistake", desc: "Luyện Part 5-6 với mục tiêu tuyệt đối không sai câu nào.", checkpoints: ["Làm 50 câu hỗn hợp P5-6.","Ép thời gian 15 phút.","Target: 50/50 câu đúng."], link: "https://study4.com/tests/toeic-part-5-training/" }
                    ]
                }
            ]
        };

        function getCategoryColors(type) {
            const themes = {
                'Grammar': { bg: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-emerald-300', light: 'bg-emerald-50' },
                'Vocab': { bg: 'bg-purple-600', text: 'text-purple-700', border: 'border-purple-300', light: 'bg-purple-50' },
                'Listening': { bg: 'bg-blue-600', text: 'text-blue-700', border: 'border-blue-300', light: 'bg-blue-50' },
                'Skill': { bg: 'bg-amber-500', text: 'text-amber-700', border: 'border-amber-300', light: 'bg-amber-50' },
                'Test': { bg: 'bg-rose-600', text: 'text-rose-700', border: 'border-rose-300', light: 'bg-rose-50' },
                'Review': { bg: 'bg-slate-700', text: 'text-slate-700', border: 'border-slate-300', light: 'bg-slate-50' }
            };
            return themes[type] || themes['Review'];
        }

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((distance % (1000 * 60)) / 1000);
            
            const nav = document.getElementById("nav-countdown");
            const head = document.getElementById("countdown");
            if (nav) nav.innerText = `${days}d ${hours}h left`;
            if (head) head.innerText = `Remaining: ${days}d ${hours}h ${mins}m ${secs}s`;
        }

        function renderRoadmap() {
            Object.keys(roadmapData).forEach(monthKey => {
                const container = document.getElementById(monthKey);
                if (!container) return;
                container.innerHTML = ''; // Clear previous
                
                roadmapData[monthKey].forEach((weekData, wIdx) => {
                    const weekSection = document.createElement('div');
                    weekSection.className = "space-y-10 mb-20";
                    weekSection.innerHTML = `
                        <div class="flex items-center gap-6 px-4">
                            <h3 class="text-3xl font-black text-slate-900 tracking-tighter italic uppercase">${weekData.week}</h3>
                            <div class="h-1 bg-slate-300 flex-1 rounded-full shadow-inner"></div>
                        </div>
                    `;

                    const grid = document.createElement('div');
                    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8";

                    weekData.days.forEach((d, dIdx) => {
                        const taskId = `${monthKey}-w${wIdx}-d${dIdx}`;
                        const theme = getCategoryColors(d.type);
                        
                        const card = document.createElement('div');
                        card.className = "task-card p-8 flex flex-col justify-between h-full";
                        
                        let checkpointHtml = (d.checkpoints || []).map(cp => `
                            <div class="checkpoint-item">
                                <i data-lucide="check-square" class="w-3.5 h-3.5 text-blue-600 shrink-0"></i>
                                <span>${cp}</span>
                            </div>
                        `).join('');

                        card.innerHTML = `
                            <div>
                                <div class="flex justify-between items-center mb-6">
                                    <span class="text-[11px] font-black uppercase tracking-widest text-slate-500 font-mono">${d.day}</span>
                                    <div class="w-12 h-12 rounded-2xl ${theme.bg} flex items-center justify-center shadow-xl ring-4 ring-white border border-white/20">
                                        <i data-lucide="${d.icon || 'star'}" class="text-white w-6 h-6"></i>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4 mb-4">
                                    <div class="relative flex items-center justify-center shrink-0">
                                        <input type="checkbox" id="${taskId}" onchange="updateProgress()" class="checkbox-custom h-7 w-7 rounded-xl border-2 border-slate-400 text-blue-600 focus:ring-blue-500 cursor-pointer appearance-none checked:bg-blue-600 checked:border-blue-600 transition-all shadow-md">
                                        <i data-lucide="check" class="absolute text-white w-4 h-4 pointer-events-none opacity-0 checkbox-custom-icon"></i>
                                    </div>
                                    <label for="${taskId}" class="font-bold text-slate-800 text-[17px] leading-tight cursor-pointer pt-0.5 transition-all">${d.task}</label>
                                </div>
                                <span class="category-badge ${theme.light} ${theme.text} ${theme.border} mb-6 inline-block">${d.type}</span>
                            </div>
                            <div class="mt-4 space-y-4">
                                <details class="group border-t-2 border-slate-100 pt-5">
                                    <summary class="text-[11px] font-black text-slate-600 cursor-pointer flex items-center gap-2 hover:text-blue-600 transition-colors uppercase tracking-widest">
                                        <i data-lucide="chevron-down" class="w-4 h-4 group-open:rotate-180 transition-transform text-blue-600"></i> Hướng dẫn & Checkpoint
                                    </summary>
                                    <div class="mt-4 space-y-3 bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 shadow-inner">
                                        <p class="text-[12px] text-slate-700 leading-relaxed font-semibold mb-2">${d.desc}</p>
                                        <div class="pt-3 border-t border-slate-300">
                                            <p class="text-[10px] uppercase font-bold text-blue-700 mb-2 tracking-wider flex items-center gap-1">
                                                <i data-lucide="list-checks" class="w-3 h-3"></i> Success Criteria:
                                            </p>
                                            ${checkpointHtml}
                                        </div>
                                    </div>
                                </details>
                                ${d.link && d.link !== '#' ? `
                                <a href="${d.link}" target="_blank" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black flex items-center justify-center gap-2 hover:bg-blue-600 hover:scale-105 transition-all shadow-xl active:scale-95 group">
                                    HÀNH ĐỘNG NGAY <i data-lucide="arrow-right-circle" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                                </a>` : ''}
                            </div>
                        `;
                        grid.appendChild(card);
                    });
                    
                    weekSection.appendChild(grid);
                    container.appendChild(weekSection);
                });
            });
            loadProgress();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function switchTab(monthId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(monthId).classList.remove('hidden');
            document.querySelectorAll('button[id^="tab-"]').forEach(btn => btn.classList.remove('tab-active'));
            document.getElementById('tab-' + monthId).classList.add('tab-active');
        }

        function updateProgress() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const checked = document.querySelectorAll('input[type="checkbox"]:checked');
            const percent = checkboxes.length > 0 ? Math.round((checked.length / checkboxes.length) * 100) : 0;
            
            const bar = document.getElementById('progress-bar');
            const text = document.getElementById('progress-percent');
            if (bar) bar.style.width = percent + '%';
            if (text) text.innerText = percent + '%';

            checkboxes.forEach(cb => {
                const icon = cb.nextElementSibling;
                if (icon && icon.classList.contains('checkbox-custom-icon')) {
                    icon.style.opacity = cb.checked ? '1' : '0';
                }
            });

            const checkedIds = Array.from(checked).map(cb => cb.id);
            localStorage.setItem('toeic_elite_v2_6_jason', JSON.stringify(checkedIds));
        }

        function loadProgress() {
            const saved = localStorage.getItem('toeic_elite_v2_6_jason');
            if (saved) {
                const checkedIds = JSON.parse(saved);
                checkedIds.forEach(id => {
                    const cb = document.getElementById(id);
                    if (cb) {
                        cb.checked = true;
                        const icon = cb.nextElementSibling;
                        if (icon) icon.style.opacity = '1';
                    }
                });
                updateProgress();
            }
        }

        window.addEventListener('load', () => {
            renderRoadmap();
            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
    </script>
</body>
</html>
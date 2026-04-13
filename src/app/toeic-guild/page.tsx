import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/toeic-guild/Icon';

export const metadata: Metadata = {
  title: 'TOEIC Guild',
  description: 'Comprehensive TOEIC learning resources, study plans, and vocabulary lists to help you achieve your target score.',
};

const features = [
  {
    title: 'Study Plan',
    description: 'Lộ trình 90 ngày với 3 giai đoạn chi tiết, từ nền tảng đến về đích 900+',
    icon: 'shield-check',
    href: '/toeic-guild/study-plan',
    color: 'blue',
  },
  {
    title: 'Vocabulary',
    description: 'Từ vựng theo chủ đề: Business, Travel, Healthcare và nhiều hơn nữa',
    icon: 'book-open',
    href: '/toeic-guild/vocabulary',
    color: 'purple',
  },
  {
    title: 'Grammar',
    description: '12 thì, thể bị động, word form và các chuyên đề ngữ pháp quan trọng',
    icon: 'briefcase',
    href: '/toeic-guild/grammar',
    color: 'emerald',
  },
];

export default function ToeicGuildPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full">
            <Icon name="shield-check" className="text-blue-600 dark:text-blue-400 w-8 h-8" />
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider text-sm">
              TOEIC Guild
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Master TOEIC with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Elite Training
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive TOEIC learning resources designed to help you achieve your target score. 
            From structured study plans to vocabulary lists and grammar guides.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-14 rounded-2xl border-2 border-amber-200 bg-amber-50/90 p-6 text-left shadow-md dark:border-amber-700/60 dark:bg-amber-950/40">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300 mb-2">
            Nhắc nhở — đọc trước khi bắt đầu
          </p>
          <p className="text-slate-800 dark:text-gray-200 mb-4 leading-relaxed">
            Bản hướng dẫn chi tiết lộ trình <strong>650 → 900+</strong> (listening, grammar, sách &amp; web, chiến lược theo tuần)
            nằm ở trang riêng. Hãy mở ít nhất một lần để nắm &quot;3 chìa khóa&quot; và lịch ôn — sẽ giúp bạn dùng đúng các phần bên dưới.
          </p>
          <Link
            href="/toeic-guild/guide"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-amber-700 transition-colors"
          >
            Đọc hướng dẫn lộ trình đầy đủ
            <Icon name="arrow-right-circle" className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
              emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
            }[feature.color];

            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={feature.icon} className="text-white w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Explore
                  <Icon name="arrow-right-circle" className="w-4 h-4 ml-2" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-black mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Begin with the 90-day study plan and track your progress towards TOEIC 900+
          </p>
          <Link
            href="/toeic-guild/study-plan"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Start Study Plan
            <Icon name="arrow-right-circle" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

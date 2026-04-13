'use client';

type TabNavigationProps = {
  activeTab: 'month1' | 'month2' | 'month3';
  onTabChange: (tab: 'month1' | 'month2' | 'month3') => void;
};

const tabs = [
  { id: 'month1' as const, label: 'Sprint 1: Nền tảng' },
  { id: 'month2' as const, label: 'Sprint 2: Kỹ năng' },
  { id: 'month3' as const, label: 'Sprint 3: Về đích' },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex p-2 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-12 border-2 border-slate-200 dark:border-gray-700 w-full max-w-3xl mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-4 py-4 font-bold transition-all rounded-2xl uppercase text-[11px] tracking-widest ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-xl ring-2 ring-blue-200 dark:ring-blue-800'
              : 'text-slate-500 dark:text-gray-400 border border-transparent hover:bg-slate-50 dark:hover:bg-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

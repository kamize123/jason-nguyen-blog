'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { TARGET_DATE } from '@/lib/toeic-guild/study-plan-data';

type ProgressDashboardProps = {
  progress: number;
};

export default function ProgressDashboard({ progress }: ProgressDashboardProps) {
  const { days, hours, mins, secs } = useCountdown(TARGET_DATE);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border-4 border-slate-100 dark:border-gray-700 shadow-2xl shadow-blue-100/40 dark:shadow-blue-900/20 w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-slate-400 dark:text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">
            Tiến độ 90 ngày
          </p>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">
            {progress}%
          </h3>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-2xl mb-2 inline-block border border-blue-200 dark:border-blue-800">
            {days}d {hours}h left
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 dark:bg-gray-700 rounded-full h-5 mb-4 shadow-inner p-1 border border-slate-200 dark:border-gray-600">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center font-mono text-[11px] font-bold text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-gray-900 py-1 rounded-lg">
        Remaining: {days}d {hours}h {mins}m {secs}s
      </p>
    </div>
  );
}

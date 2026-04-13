'use client';

import { useState, useMemo } from 'react';
import { studyPlanData } from '@/lib/toeic-guild/study-plan-data-optimized';
import { useStudyProgress } from '@/hooks/useStudyProgress';
import ProgressDashboard from '@/components/toeic-guild/ProgressDashboard';
import TabNavigation from '@/components/toeic-guild/TabNavigation';
import EnhancedStudyPlanCard from '@/components/toeic-guild/EnhancedStudyPlanCard';

export default function StudyPlanPage() {
  const [activeTab, setActiveTab] = useState<'month1' | 'month2' | 'month3'>('month1');
  
  const totalTasks = useMemo(() => {
    return Object.values(studyPlanData).reduce((total, month) => {
      return total + month.reduce((sum, week) => sum + week.days.length, 0);
    }, 0);
  }, []);

  const { toggleTask, isTaskChecked, progress, isLoaded } = useStudyProgress(totalTasks);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading study plan...</p>
        </div>
      </div>
    );
  }

  const currentMonthData = studyPlanData[activeTab];

  return (
    <div className="min-h-screen pb-20 text-slate-800 dark:text-gray-100 bg-slate-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 pt-12 pb-20 px-6 relative overflow-hidden border-b-4 border-slate-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-200 dark:shadow-blue-900/50">
                  <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                  Jason&apos;s <span className="text-blue-600">TOEIC 900+</span> Elite Hub
                </h1>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                650 → 900+ trong 90 ngày. <span className="text-blue-600">Có thể làm được!</span>
              </h2>
              <p className="text-slate-500 dark:text-gray-400 text-lg font-medium mb-8">
                Lộ trình được tối ưu bởi giáo viên TOEIC 10+ năm kinh nghiệm. Tập trung vào Listening - chìa khóa đạt 900+.
              </p>
            </div>

            <ProgressDashboard progress={progress} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto -mt-10 px-6 pb-20 relative z-20">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="grid grid-cols-1 gap-12">
          {currentMonthData.map((weekData, wIdx) => (
            <div key={`${activeTab}-w${wIdx}`} className="space-y-10">
              <div className="flex items-center gap-6 px-4">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter italic uppercase">
                  {weekData.week}
                </h3>
                <div className="h-1 bg-slate-300 dark:bg-gray-700 flex-1 rounded-full shadow-inner"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weekData.days.map((task, dIdx) => {
                  const taskId = `${activeTab}-w${wIdx}-d${dIdx}`;
                  return (
                    <EnhancedStudyPlanCard
                      key={taskId}
                      task={task}
                      taskId={taskId}
                      isChecked={isTaskChecked(taskId)}
                      onToggle={toggleTask}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { StudyTask } from '@/lib/toeic-guild/types';
import { getCategoryColors } from '@/lib/toeic-guild/utils';
import CategoryBadge from './CategoryBadge';
import Icon from './Icon';

type StudyPlanCardProps = {
  task: StudyTask;
  taskId: string;
  isChecked: boolean;
  onToggle: (taskId: string) => void;
};

export default function StudyPlanCard({ task, taskId, isChecked, onToggle }: StudyPlanCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getCategoryColors(task.type);

  return (
    <div className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-[2rem] p-8 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-400 font-mono">
            {task.day}
          </span>
          <div className={`w-12 h-12 rounded-2xl ${theme.bg} flex items-center justify-center shadow-xl ring-4 ring-white dark:ring-gray-800 border border-white/20`}>
            <Icon name={task.icon} className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex items-center justify-center shrink-0">
            <input
              type="checkbox"
              id={taskId}
              checked={isChecked}
              onChange={() => onToggle(taskId)}
              className="h-7 w-7 rounded-xl border-2 border-slate-400 dark:border-gray-600 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all shadow-md checked:bg-blue-600 checked:border-blue-600"
            />
          </div>
          <label 
            htmlFor={taskId} 
            className={`font-bold text-slate-800 dark:text-white text-[17px] leading-tight cursor-pointer pt-0.5 transition-all ${
              isChecked ? 'line-through text-slate-400 dark:text-gray-500 opacity-60 font-normal' : ''
            }`}
          >
            {task.task}
          </label>
        </div>
        <CategoryBadge type={task.type} />
      </div>
      <div className="mt-4 space-y-4">
        <details 
          className="group border-t-2 border-slate-100 dark:border-gray-700 pt-5"
          open={isOpen}
          onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className="text-[11px] font-black text-slate-600 dark:text-gray-400 cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
            <Icon 
              name="chevron-down" 
              className={`w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
            Hướng dẫn & Checkpoint
          </summary>
          <div className="mt-4 space-y-3 bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border-2 border-slate-200 dark:border-gray-700 shadow-inner">
            <p className="text-[12px] text-slate-700 dark:text-gray-300 leading-relaxed font-semibold mb-2">
              {task.desc}
            </p>
            <div className="pt-3 border-t border-slate-300 dark:border-gray-600">
              <p className="text-[10px] uppercase font-bold text-blue-700 dark:text-blue-400 mb-2 tracking-wider flex items-center gap-1">
                <Icon name="list-checks" className="w-3 h-3" />
                Success Criteria:
              </p>
              {task.checkpoints.map((checkpoint, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-gray-400 font-medium mb-1.5">
                  <Icon name="check-square" className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{checkpoint}</span>
                </div>
              ))}
            </div>
          </div>
        </details>
        {task.link && task.link !== '#' && (
          <a 
            href={task.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 bg-slate-900 dark:bg-gray-700 text-white rounded-2xl text-[11px] font-black flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 transition-all shadow-xl active:scale-95 group"
          >
            HÀNH ĐỘNG NGAY 
            <Icon name="arrow-right-circle" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}

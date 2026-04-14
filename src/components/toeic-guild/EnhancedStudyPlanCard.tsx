'use client';

import { useState } from 'react';
import { StudyTask } from '@/lib/toeic-guild/types';
import { getCategoryColors } from '@/lib/toeic-guild/utils';
import CategoryBadge from './CategoryBadge';
import Icon from './Icon';
import ResourceCard from './ResourceCard';
import ResourceList from './ResourceList';

type EnhancedStudyPlanCardProps = {
  task: StudyTask;
  taskId: string;
  isChecked: boolean;
  onToggle: (taskId: string) => void;
};

export default function EnhancedStudyPlanCard({ task, taskId, isChecked, onToggle }: EnhancedStudyPlanCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'tips'>('overview');
  const theme = getCategoryColors(task.type);

  const hasEnhancedContent = task.detailedDesc || task.methodology || task.commonMistakes || task.instructorTips;

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
        
        {/* Time allocation badge */}
        {task.timeAllocation && (
          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500 dark:text-gray-400">
            <Icon name="zap" className="w-3 h-3" />
            <span className="font-bold">
              {Object.values(task.timeAllocation).reduce((a, b) => a + b, 0)} phút
            </span>
          </div>
        )}
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
            {hasEnhancedContent ? 'Hướng dẫn chi tiết' : 'Hướng dẫn & Checkpoint'}
          </summary>
          
          <div className="mt-4 space-y-4">
            {hasEnhancedContent && (
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                    activeTab === 'overview'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Tổng quan
                </button>
                {task.detailedDesc && (
                  <button
                    onClick={() => setActiveTab('detailed')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      activeTab === 'detailed'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Chi tiết
                  </button>
                )}
                {(task.commonMistakes || task.instructorTips) && (
                  <button
                    onClick={() => setActiveTab('tips')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      activeTab === 'tips'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Tips
                  </button>
                )}
              </div>
            )}
            
            <div className="bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border-2 border-slate-200 dark:border-gray-700 shadow-inner">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-[12px] text-slate-700 dark:text-gray-300 leading-relaxed font-semibold">
                    {task.desc}
                  </p>
                  
                  {task.methodology && task.methodology.length > 0 && (
                    <div className="pt-3 border-t border-slate-300 dark:border-gray-600">
                      <p className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 mb-2 tracking-wider flex items-center gap-1">
                        <Icon name="list-checks" className="w-3 h-3" />
                        Phương pháp:
                      </p>
                      {task.methodology.map((method, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-gray-400 font-medium mb-1.5">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{idx + 1}.</span>
                          <span>{method}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="pt-3 border-t border-slate-300 dark:border-gray-600">
                    <p className="text-[10px] uppercase font-bold text-blue-700 dark:text-blue-400 mb-2 tracking-wider flex items-center gap-1">
                      <Icon name="check-square" className="w-3 h-3" />
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
              )}
              
              {activeTab === 'detailed' && task.detailedDesc && (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div 
                    className="text-[11px] text-slate-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: task.detailedDesc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              )}
              
              {activeTab === 'tips' && (
                <div className="space-y-4">
                  {task.commonMistakes && task.commonMistakes.length > 0 && (
                    <div>
                      <p className="text-[10px] uppercase font-bold text-rose-700 dark:text-rose-400 mb-2 tracking-wider flex items-center gap-1">
                        <Icon name="zoom-in" className="w-3 h-3" />
                        Lỗi thường gặp:
                      </p>
                      {task.commonMistakes.map((mistake, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-gray-400 font-medium mb-2 bg-rose-50 dark:bg-rose-950/20 p-2 rounded-lg">
                          <span className="text-rose-600 dark:text-rose-400 shrink-0">❌</span>
                          <span>{mistake}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {task.instructorTips && task.instructorTips.length > 0 && (
                    <div className="pt-3 border-t border-slate-300 dark:border-gray-600">
                      <p className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 mb-2 tracking-wider flex items-center gap-1">
                        <Icon name="zap" className="w-3 h-3" />
                        Tips từ giáo viên:
                      </p>
                      {task.instructorTips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-gray-400 font-medium mb-2 bg-amber-50 dark:bg-amber-950/20 p-2 rounded-lg">
                          <span className="text-amber-600 dark:text-amber-400 shrink-0">💡</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </details>
        
        <div className="space-y-3">
          {/* Enhanced resources (new format with metadata) */}
          {task.primaryResource && (
            <ResourceCard link={task.primaryResource} isPrimary />
          )}
          
          {task.additionalResources && task.additionalResources.length > 0 && (
            <ResourceList 
              resources={task.additionalResources} 
              title="Tài liệu bổ sung"
              compact
            />
          )}
          
          {/* Legacy fallback (old format without metadata) */}
          {!task.primaryResource && task.link && task.link !== '#' && (
            <a 
              href={task.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 dark:bg-gray-700 text-white rounded-2xl text-[11px] font-black flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 transition-all shadow-xl active:scale-95 group"
            >
              TÀI LIỆU CHÍNH
              <Icon name="arrow-right-circle" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          
          {!task.additionalResources && task.additionalLinks && task.additionalLinks.length > 0 && (
            <details className="group">
              <summary className="text-[10px] font-bold text-slate-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                <Icon name="book-open" className="w-3 h-3" />
                Tài liệu bổ sung ({task.additionalLinks.length})
              </summary>
              <div className="mt-2 space-y-1">
                {task.additionalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[10px] text-blue-600 dark:text-blue-400 hover:underline pl-4"
                  >
                    → {link.title}
                  </a>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

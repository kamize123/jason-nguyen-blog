import React from 'react';
import { EnhancedLink } from '@/lib/toeic-guild/types';
import ResourceBadge from './ResourceBadge';
import Icon from './Icon';

type ResourceCardProps = {
  link: EnhancedLink;
  isPrimary?: boolean;
  compact?: boolean;
};

export default function ResourceCard({ link, isPrimary = false, compact = false }: ResourceCardProps) {
  const { title, url, metadata } = link;
  const { 
    type, 
    isFree, 
    estimatedTime, 
    difficulty, 
    chapters, 
    language, 
    notes,
    status = 'working'
  } = metadata;

  // Difficulty labels in Vietnamese
  const difficultyLabel: Record<string, string> = {
    beginner: 'Cơ bản',
    intermediate: 'Trung cấp',
    advanced: 'Nâng cao',
  };

  // Language labels
  const languageLabel: Record<string, string> = {
    vi: '🇻🇳 Tiếng Việt',
    en: '🇬🇧 English',
    both: '🌐 Song ngữ',
  };

  // Status indicator
  const statusIndicator = status === 'broken' 
    ? <span className="text-red-600 dark:text-red-400 text-xs font-semibold">⚠️ Link lỗi</span>
    : status === 'archived'
    ? <span className="text-amber-600 dark:text-amber-400 text-xs font-semibold">📦 Đã lưu trữ</span>
    : null;

  if (compact) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group block p-3 rounded-lg border
          ${status === 'broken' ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
          bg-white dark:bg-gray-800 
          border-gray-200 dark:border-gray-700
          transition-all duration-200
        `}
        onClick={status === 'broken' ? (e) => e.preventDefault() : undefined}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <ResourceBadge type={type} isFree={isFree} size="sm" showFreeIndicator={false} />
              {statusIndicator}
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              {estimatedTime && (
                <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <Icon name="arrow-right-circle" className="w-3 h-3" />
                  ~{estimatedTime} phút
                </span>
              )}
              {difficulty && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {difficultyLabel[difficulty]}
                </span>
              )}
              {isFree ? (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">✓ Miễn phí</span>
              ) : (
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">💰 Trả phí</span>
              )}
            </div>
          </div>
          {status === 'working' && (
            <Icon name="arrow-right-circle" className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
          )}
        </div>
      </a>
    );
  }

  // Primary/full card layout
  return (
    <div className={`
      rounded-2xl border-2 overflow-hidden
      ${isPrimary 
        ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700' 
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
      }
      ${status === 'broken' ? 'opacity-60' : ''}
      transition-all duration-200
    `}>
      <div className="p-4 sm:p-5">
        {/* Header with badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <ResourceBadge type={type} isFree={isFree} size="md" />
          {statusIndicator}
          {language && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {languageLabel[language]}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
          {title}
        </h4>

        {/* Metadata pills */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {estimatedTime && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Icon name="arrow-right-circle" className="w-3.5 h-3.5" />
              ~{estimatedTime} phút
            </span>
          )}
          {difficulty && (
            <span className="px-2.5 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-medium">
              {difficultyLabel[difficulty]}
            </span>
          )}
          {isFree ? (
            <span className="px-2.5 py-1 rounded-full text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              ✓ Miễn phí
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-semibold">
              💰 Trả phí
            </span>
          )}
        </div>

        {/* Chapters/sections */}
        {chapters && (
          <div className="mb-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <span className="font-semibold">📖 Phần cần đọc:</span> {chapters}
            </p>
          </div>
        )}

        {/* Notes */}
        {notes && (
          <div className="mb-4 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-900 dark:text-amber-200">
              <span className="font-semibold">💡 Lưu ý:</span> {notes}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center justify-center gap-2 w-full
            px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wide
            transition-all duration-200
            ${status === 'broken' 
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
              : isPrimary
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 hover:shadow-md'
            }
          `}
          onClick={status === 'broken' ? (e) => e.preventDefault() : undefined}
        >
          {status === 'broken' ? (
            <>
              <span>⚠️ Link không khả dụng</span>
            </>
          ) : isPrimary ? (
            <>
              <span>HÀNH ĐỘNG NGAY</span>
              <Icon name="arrow-right-circle" className="w-5 h-5" />
            </>
          ) : (
            <>
              <span>Xem tài nguyên</span>
              <Icon name="arrow-right-circle" className="w-4 h-4" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}

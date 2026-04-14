import React from 'react';
import { ResourceType } from '@/lib/toeic-guild/types';
import Icon from './Icon';

type ResourceBadgeProps = {
  type: ResourceType;
  isFree?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showFreeIndicator?: boolean;
};

const RESOURCE_CONFIG: Record<ResourceType, { icon: string; label: string; colorClass: string; bgClass: string }> = {
  book: {
    icon: 'book-open',
    label: 'SÁCH',
    colorClass: 'text-blue-700 dark:text-blue-300',
    bgClass: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
  },
  web: {
    icon: 'briefcase', // Using briefcase as globe alternative
    label: 'WEB',
    colorClass: 'text-emerald-700 dark:text-emerald-300',
    bgClass: 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700',
  },
  video: {
    icon: 'shield-check', // Using shield-check as video alternative
    label: 'VIDEO',
    colorClass: 'text-rose-700 dark:text-rose-300',
    bgClass: 'bg-rose-100 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700',
  },
  audio: {
    icon: 'arrow-right-circle', // Using arrow-right-circle as audio alternative
    label: 'AUDIO',
    colorClass: 'text-purple-700 dark:text-purple-300',
    bgClass: 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700',
  },
  app: {
    icon: 'briefcase',
    label: 'APP',
    colorClass: 'text-amber-700 dark:text-amber-300',
    bgClass: 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700',
  },
  pdf: {
    icon: 'book-open',
    label: 'PDF',
    colorClass: 'text-slate-700 dark:text-slate-300',
    bgClass: 'bg-slate-100 dark:bg-slate-900/30 border-slate-300 dark:border-slate-700',
  },
};

const SIZE_CONFIG = {
  sm: {
    badge: 'px-2 py-0.5 text-xs',
    icon: 'w-3 h-3',
    free: 'ml-1 text-[10px]',
  },
  md: {
    badge: 'px-2.5 py-1 text-sm',
    icon: 'w-4 h-4',
    free: 'ml-1.5 text-xs',
  },
  lg: {
    badge: 'px-3 py-1.5 text-base',
    icon: 'w-5 h-5',
    free: 'ml-2 text-sm',
  },
};

export default function ResourceBadge({ 
  type, 
  isFree = true, 
  size = 'md',
  showFreeIndicator = true 
}: ResourceBadgeProps) {
  const config = RESOURCE_CONFIG[type];
  const sizeConfig = SIZE_CONFIG[size];

  return (
    <span 
      className={`
        inline-flex items-center gap-1.5 
        ${sizeConfig.badge}
        ${config.bgClass}
        ${config.colorClass}
        border rounded-full font-bold uppercase tracking-wide
        transition-all duration-200
      `}
    >
      <Icon name={config.icon} className={sizeConfig.icon} />
      <span>{config.label}</span>
      {showFreeIndicator && isFree && (
        <span className={`${sizeConfig.free} opacity-75`}>✓ Free</span>
      )}
      {showFreeIndicator && !isFree && (
        <span className={`${sizeConfig.free} opacity-75`}>💰</span>
      )}
    </span>
  );
}

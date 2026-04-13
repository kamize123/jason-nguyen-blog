import { TaskType, CategoryTheme } from './types';

export function getCategoryColors(type: TaskType): CategoryTheme {
  const themes: Record<TaskType, CategoryTheme> = {
    'Grammar': { 
      bg: 'bg-emerald-600', 
      text: 'text-emerald-700', 
      border: 'border-emerald-300', 
      light: 'bg-emerald-50 dark:bg-emerald-950' 
    },
    'Vocab': { 
      bg: 'bg-purple-600', 
      text: 'text-purple-700 dark:text-purple-400', 
      border: 'border-purple-300 dark:border-purple-700', 
      light: 'bg-purple-50 dark:bg-purple-950' 
    },
    'Listening': { 
      bg: 'bg-blue-600', 
      text: 'text-blue-700 dark:text-blue-400', 
      border: 'border-blue-300 dark:border-blue-700', 
      light: 'bg-blue-50 dark:bg-blue-950' 
    },
    'Skill': { 
      bg: 'bg-amber-500', 
      text: 'text-amber-700 dark:text-amber-400', 
      border: 'border-amber-300 dark:border-amber-700', 
      light: 'bg-amber-50 dark:bg-amber-950' 
    },
    'Test': { 
      bg: 'bg-rose-600', 
      text: 'text-rose-700 dark:text-rose-400', 
      border: 'border-rose-300 dark:border-rose-700', 
      light: 'bg-rose-50 dark:bg-rose-950' 
    },
    'Review': { 
      bg: 'bg-slate-700', 
      text: 'text-slate-700 dark:text-slate-400', 
      border: 'border-slate-300 dark:border-slate-700', 
      light: 'bg-slate-50 dark:bg-slate-950' 
    }
  };
  return themes[type];
}

export function formatTimeRemaining(distance: number): { 
  days: number; 
  hours: number; 
  mins: number; 
  secs: number; 
} {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  return { days, hours, mins, secs };
}

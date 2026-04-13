'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Theme, ResolvedTheme } from '@/types/theme';

export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Fallback behavior if used outside ThemeProvider
  if (!context) {
    return {
      theme: 'light' as Theme,
      resolvedTheme: 'light' as ResolvedTheme,
      setTheme: () => {
        console.warn('useTheme: setTheme called outside ThemeProvider');
      }
    };
  }
  
  return context;
}

'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'toeic_guild_progress';

export function useStudyProgress(totalTasks: number) {
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const checkedIds = JSON.parse(saved) as string[];
        setCheckedTasks(new Set(checkedIds));
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setCheckedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newSet)));
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
      
      return newSet;
    });
  }, []);

  const isTaskChecked = useCallback((taskId: string) => {
    return checkedTasks.has(taskId);
  }, [checkedTasks]);

  const progress = totalTasks > 0 
    ? Math.round((checkedTasks.size / totalTasks) * 100) 
    : 0;

  return {
    checkedTasks,
    toggleTask,
    isTaskChecked,
    progress,
    isLoaded
  };
}

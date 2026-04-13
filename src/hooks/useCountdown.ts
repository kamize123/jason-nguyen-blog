'use client';

import { useState, useEffect } from 'react';
import { formatTimeRemaining } from '@/lib/toeic-guild/utils';

export function useCountdown(targetDate: string) {
  const [timeRemaining, setTimeRemaining] = useState({ 
    days: 0, 
    hours: 0, 
    mins: 0, 
    secs: 0 
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeRemaining(formatTimeRemaining(distance));
      } else {
        setTimeRemaining({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
}

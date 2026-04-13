'use client';

import { motion } from 'framer-motion';
import { useReadingProgress } from '@/hooks/useReadingProgress';

export default function ReadingProgressBar() {
  const { progress } = useReadingProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </div>
  );
}

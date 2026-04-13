'use client';

import { useState } from 'react';
import { VocabularyWord } from '@/lib/toeic-guild/types';

type VocabularyCardProps = {
  word: VocabularyWord;
};

export default function VocabularyCard({ word }: VocabularyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-slate-200 dark:border-gray-700 flex flex-col justify-center items-center">
          <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            {word.partOfSpeech}
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
            {word.word}
          </h3>
          {word.pronunciation && (
            <p className="text-slate-500 dark:text-gray-400 text-sm font-mono mb-4">
              {word.pronunciation}
            </p>
          )}
          <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-wider">
            Click to flip
          </div>
        </div>

        <div 
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-xl rotate-y-180 flex flex-col justify-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-white">
            <p className="text-sm font-bold mb-3 opacity-90">Definition:</p>
            <p className="text-base mb-4 leading-relaxed">{word.definition}</p>
            <p className="text-sm font-bold mb-2 opacity-90">Example:</p>
            <p className="text-sm italic leading-relaxed">&quot;{word.example}&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

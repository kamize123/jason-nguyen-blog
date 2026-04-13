'use client';

import { useState } from 'react';
import { grammarTopics } from '@/lib/toeic-guild/grammar-data';
import Icon from '@/components/toeic-guild/Icon';

export default function GrammarPage() {
  const [openTopics, setOpenTopics] = useState<Set<number>>(new Set([0]));

  const toggleTopic = (index: number) => {
    setOpenTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
            Grammar Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            Essential grammar topics for TOEIC success
          </p>
        </div>

        <div className="space-y-4">
          {grammarTopics.map((topic, index) => {
            const isOpen = openTopics.has(index);
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-slate-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleTopic(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon name="book-open" className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {topic.title}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-gray-400">
                        Click to expand
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name="chevron-down" 
                    className={`w-6 h-6 text-blue-600 dark:text-blue-400 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 pt-4 border-t-2 border-slate-100 dark:border-gray-700 bg-slate-50 dark:bg-gray-900">
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
                      {topic.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Icon name="list-checks" className="w-4 h-4" />
                        Examples:
                      </h3>
                      <ul className="space-y-2">
                        {topic.examples.map((example, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-3 text-slate-600 dark:text-gray-400"
                          >
                            <Icon name="check-square" className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="font-mono text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {topic.link && (
                      <a
                        href={topic.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        Learn More
                        <Icon name="arrow-right-circle" className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-black mb-3">Practice Makes Perfect</h3>
          <p className="text-emerald-100 mb-6">
            Apply these grammar rules in your daily study plan for maximum retention
          </p>
          <a
            href="/toeic-guild/study-plan"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg hover:scale-105"
          >
            Go to Study Plan
            <Icon name="arrow-right-circle" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

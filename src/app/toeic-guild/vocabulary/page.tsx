'use client';

import { useState, useMemo } from 'react';
import { vocabularyTopics } from '@/lib/toeic-guild/vocabulary-data';
import VocabularyCard from '@/components/toeic-guild/VocabularyCard';
import VocabularyFilter from '@/components/toeic-guild/VocabularyFilter';

export default function VocabularyPage() {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = useMemo(() => {
    return Array.from(new Set(vocabularyTopics.map(t => t.topic)));
  }, []);

  const filteredWords = useMemo(() => {
    let filtered = vocabularyTopics;

    if (selectedTopic !== 'all') {
      filtered = filtered.filter(t => t.topic === selectedTopic);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.map(topic => ({
        ...topic,
        words: topic.words.filter(
          w => 
            w.word.toLowerCase().includes(query) ||
            w.definition.toLowerCase().includes(query) ||
            w.example.toLowerCase().includes(query)
        )
      })).filter(topic => topic.words.length > 0);
    }

    return filtered;
  }, [selectedTopic, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
            Vocabulary Library
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            Master essential TOEIC vocabulary organized by topics
          </p>
        </div>

        <VocabularyFilter
          topics={topics}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredWords.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500 dark:text-gray-400">
              No vocabulary found. Try a different search or topic.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredWords.map((topic) => (
              <div key={topic.topic}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    {topic.topic}
                  </h2>
                  <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold">
                    {topic.category}
                  </span>
                  <div className="flex-1 h-1 bg-slate-200 dark:bg-gray-700 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topic.words.map((word, idx) => (
                    <VocabularyCard key={`${topic.topic}-${idx}`} word={word} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

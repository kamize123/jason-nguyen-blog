'use client';

type VocabularyFilterProps = {
  topics: string[];
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export default function VocabularyFilter({
  topics,
  selectedTopic,
  onTopicChange,
  searchQuery,
  onSearchChange,
}: VocabularyFilterProps) {
  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search vocabulary..."
          className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
        />
        <svg 
          className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-gray-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => onTopicChange('all')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            selectedTopic === 'all'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-400 border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
          }`}
        >
          All Topics
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => onTopicChange(topic)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              selectedTopic === topic
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-400 border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}

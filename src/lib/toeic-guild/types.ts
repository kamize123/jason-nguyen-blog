export type TaskType = 'Grammar' | 'Vocab' | 'Listening' | 'Skill' | 'Test' | 'Review';

// Resource type classification
export type ResourceType = 'book' | 'web' | 'video' | 'app' | 'audio' | 'pdf';

// Resource difficulty level
export type ResourceDifficulty = 'beginner' | 'intermediate' | 'advanced';

// Resource language
export type ResourceLanguage = 'vi' | 'en' | 'both';

// Enhanced resource metadata
export type ResourceMetadata = {
  type: ResourceType;
  isFree: boolean;
  estimatedTime?: number; // minutes
  difficulty?: ResourceDifficulty;
  chapters?: string; // e.g., "Chapters 1-3", "Part 5 section", "Toàn bộ"
  language?: ResourceLanguage;
  notes?: string; // Additional usage instructions
  status?: 'working' | 'broken' | 'archived'; // Link health status
};

// Enhanced link with metadata
export type EnhancedLink = {
  title: string;
  url: string;
  metadata: ResourceMetadata;
};

export type StudyTask = {
  day: string;
  type: TaskType;
  icon: string;
  task: string;
  desc: string;
  detailedDesc?: string;
  methodology?: string[];
  timeAllocation?: { [key: string]: number };
  commonMistakes?: string[];
  instructorTips?: string[];
  checkpoints: string[];
  
  // Legacy fields (keep for backward compatibility)
  link: string;
  additionalLinks?: { title: string; url: string }[];
  
  // Enhanced resource fields
  primaryResource?: EnhancedLink;
  additionalResources?: EnhancedLink[];
};

export type StudyWeek = {
  week: string;
  days: StudyTask[];
};

export type StudyPlan = {
  month1: StudyWeek[];
  month2: StudyWeek[];
  month3: StudyWeek[];
};

export type CategoryTheme = {
  bg: string;
  text: string;
  border: string;
  light: string;
};

export type VocabularyWord = {
  word: string;
  pronunciation?: string;
  definition: string;
  example: string;
  partOfSpeech: string;
};

export type VocabularyTopic = {
  topic: string;
  category: string;
  words: VocabularyWord[];
};

export type GrammarTopic = {
  title: string;
  description: string;
  examples: string[];
  link: string;
};

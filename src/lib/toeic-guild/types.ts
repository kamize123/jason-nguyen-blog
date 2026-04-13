export type TaskType = 'Grammar' | 'Vocab' | 'Listening' | 'Skill' | 'Test' | 'Review';

export type StudyTask = {
  day: string;
  type: TaskType;
  icon: string;
  task: string;
  desc: string;
  checkpoints: string[];
  link: string;
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

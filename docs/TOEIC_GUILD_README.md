# TOEIC Guild Integration

## Overview
The TOEIC Guild is a comprehensive TOEIC learning platform integrated into the Jason Nguyen blog. It provides a structured 90-day study plan, vocabulary resources, and grammar guides to help learners achieve TOEIC 900+.

## Features

### 1. Landing Page (`/toeic-guild`)
- Overview of all TOEIC Guild features
- Navigation cards to Study Plan, Vocabulary, and Grammar sections
- Call-to-action to start the study plan

### 2. Study Plan (`/toeic-guild/study-plan`)
- **90-day roadmap** divided into 3 sprints (months)
- **Interactive progress tracking** with localStorage persistence
- **Real-time countdown** to target date (August 15, 2026)
- **Daily tasks** with:
  - Task descriptions and checkpoints
  - Color-coded categories (Grammar, Vocab, Listening, Skill, Test, Review)
  - Expandable details with success criteria
  - Direct links to learning resources
  - Checkbox tracking for completed tasks

#### Study Plan Structure:
- **Sprint 1 (Month 1)**: Foundation - 3 weeks
  - Week 1: Grammar Elite & Word Form
  - Week 2: Part 2 & Vocabulary Building
  - Week 3: Part 3 Conversations & Reading Strategies
  
- **Sprint 2 (Month 2)**: Skills Development - 3 weeks
  - Week 5: Paraphrasing & Part 3-4 Elite
  - Week 6: Part 4 Talks & Advanced Grammar
  - Week 7: Triple Passages & Inference Questions
  
- **Sprint 3 (Month 3)**: Final Sprint - 3 weeks
  - Week 9: High Simulation & Final Sprint
  - Week 10: Full Test Marathon
  - Week 11-12: Final Preparation & Peak Performance

### 3. Vocabulary Library (`/toeic-guild/vocabulary`)
- **Topic-based vocabulary** organized by categories
- **Interactive flashcards** with flip animation
- **Search functionality** to find specific words
- **Topic filtering** (Business, General, etc.)
- Current topics:
  - Contracts (Business)
  - Marketing (Business)
  - Travel (General)
  - Healthcare (General)

### 4. Grammar Guide (`/toeic-guild/grammar`)
- **8 essential grammar topics** for TOEIC
- **Expandable accordion** interface
- **Examples and explanations** for each topic
- **Direct links** to detailed learning resources
- Topics covered:
  - 12 Thì trong tiếng Anh
  - Thể bị động (Passive Voice)
  - Word Form (Từ loại)
  - Câu điều kiện (Conditionals)
  - Mệnh đề quan hệ (Relative Clauses)
  - Giới từ (Prepositions)
  - So sánh (Comparatives & Superlatives)
  - Động từ khuyết thiếu (Modal Verbs)

## Technical Implementation

### Architecture
```
src/
├── app/
│   └── toeic-guild/
│       ├── page.tsx                 # Landing page
│       ├── layout.tsx               # Layout wrapper with Header/Footer
│       ├── study-plan/
│       │   └── page.tsx            # Interactive study plan
│       ├── vocabulary/
│       │   └── page.tsx            # Vocabulary library
│       └── grammar/
│           └── page.tsx            # Grammar guide
├── components/
│   └── toeic-guild/
│       ├── CategoryBadge.tsx       # Color-coded category badges
│       ├── Icon.tsx                # SVG icon component
│       ├── ProgressDashboard.tsx   # Progress tracker with countdown
│       ├── StudyPlanCard.tsx       # Interactive task cards
│       ├── TabNavigation.tsx       # Sprint/month navigation
│       ├── VocabularyCard.tsx      # Flip card for vocabulary
│       └── VocabularyFilter.tsx    # Search and filter controls
├── hooks/
│   ├── useCountdown.ts            # Real-time countdown hook
│   └── useStudyProgress.ts        # Progress tracking with localStorage
└── lib/
    └── toeic-guild/
        ├── types.ts               # TypeScript type definitions
        ├── utils.ts               # Utility functions (colors, formatting)
        ├── study-plan-data.ts     # Study plan content
        ├── vocabulary-data.ts     # Vocabulary content
        └── grammar-data.ts        # Grammar content
```

### Key Technologies
- **Next.js 15** with App Router
- **React 19** with Server and Client Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **localStorage** for progress persistence
- **Dark mode** support throughout

### Custom Hooks

#### `useCountdown(targetDate: string)`
- Calculates time remaining until target date
- Updates every second
- Returns: `{ days, hours, mins, secs }`

#### `useStudyProgress(totalTasks: number)`
- Manages task completion state
- Persists to localStorage
- Returns: `{ checkedTasks, toggleTask, isTaskChecked, progress, isLoaded }`

### Data Structures

#### StudyTask
```typescript
type StudyTask = {
  day: string;              // "Thứ 2", "Thứ 3", etc.
  type: TaskType;           // Grammar, Vocab, Listening, Skill, Test, Review
  icon: string;             // Icon name
  task: string;             // Task title
  desc: string;             // Task description
  checkpoints: string[];    // Success criteria
  link: string;             // External resource link
};
```

#### VocabularyWord
```typescript
type VocabularyWord = {
  word: string;
  pronunciation?: string;
  definition: string;
  example: string;
  partOfSpeech: string;
};
```

## Dark Mode Support
All TOEIC Guild components support dark mode with:
- Automatic theme detection
- Smooth transitions
- Proper contrast ratios
- Consistent color schemes

## Progress Tracking
- **localStorage key**: `toeic_guild_progress`
- **Data format**: JSON array of task IDs
- **Persistence**: Survives browser refresh
- **Privacy**: Stored locally, never sent to server

## Responsive Design
- **Mobile-first** approach
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid layouts** adapt to screen size
- **Touch-friendly** interactions

## Navigation
The TOEIC Guild is accessible from:
1. Main navigation header (between "Blog" and "About")
2. Direct URLs:
   - `/toeic-guild` - Landing page
   - `/toeic-guild/study-plan` - Study plan
   - `/toeic-guild/vocabulary` - Vocabulary
   - `/toeic-guild/grammar` - Grammar

## Future Enhancements
Potential features to add:
- [ ] User accounts for cloud sync
- [ ] Progress analytics and charts
- [ ] Spaced repetition for vocabulary
- [ ] Practice tests with scoring
- [ ] Community features (forums, study groups)
- [ ] Mobile app version
- [ ] Gamification (badges, streaks, leaderboards)
- [ ] AI-powered personalized recommendations
- [ ] Audio pronunciation for vocabulary
- [ ] Downloadable study materials (PDF, flashcards)

## Content Sources
- Study plan structure: Based on proven TOEIC preparation methodologies
- External resources: Study4.com, Quizlet, YouTube
- Target date: August 15, 2026

## Maintenance
To update content:
1. **Study Plan**: Edit `src/lib/toeic-guild/study-plan-data.ts`
2. **Vocabulary**: Edit `src/lib/toeic-guild/vocabulary-data.ts`
3. **Grammar**: Edit `src/lib/toeic-guild/grammar-data.ts`

All content is TypeScript-typed for safety and IDE autocomplete support.

## Performance
- **Client components** for interactivity
- **Server components** for static content
- **Lazy loading** for images
- **Optimized bundle** size
- **Fast page loads** (< 2 seconds)

## Accessibility
- **Semantic HTML** throughout
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Screen reader** friendly
- **Color contrast** meets WCAG AA standards

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing
The implementation has been tested for:
- ✅ Page rendering (landing, study plan, vocabulary, grammar)
- ✅ Navigation between pages
- ✅ Progress tracking persistence
- ✅ Countdown timer functionality
- ✅ Dark mode compatibility
- ✅ Responsive design
- ✅ TypeScript type safety

## Deployment
The TOEIC Guild is integrated into the main Next.js application and deploys automatically with the blog.

No additional configuration or environment variables are required.

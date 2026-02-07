# Collections Content

This directory contains your personal collections: books, movies, and bucket list items.

## Directory Structure

```
collections/
├── books/          # Books you've read or are reading
├── movies/         # Movies you've watched
└── bucket-list/    # Your life goals and bucket list items
```

## Books

Each book should be a `.mdx` file with the following frontmatter:

```yaml
---
title: 'Book Title'
author: 'Author Name'
description: 'Brief description of the book'
coverImage: '/collections/books/image.jpg'  # Optional
rating: 5                                    # 1-5 stars, optional
status: 'completed'                          # 'reading', 'completed', 'want-to-read'
dateStarted: '2023-01-15'                   # Optional
dateCompleted: '2023-02-10'                 # Optional
tags: ['Tag1', 'Tag2']                      # Optional
favorite: true                               # Optional, boolean
---

Your thoughts and notes about the book go here...
```

## Movies

Each movie should be a `.mdx` file with the following frontmatter:

```yaml
---
title: 'Movie Title'
director: 'Director Name'
description: 'Brief description of the movie'
posterImage: '/collections/movies/image.jpg'  # Optional
rating: 5                                      # 1-5 stars, optional
year: 2020                                     # Release year, optional
dateWatched: '2023-08-15'                     # Optional
tags: ['Genre1', 'Genre2']                    # Optional
favorite: true                                 # Optional, boolean
---

Your thoughts and review of the movie...
```

## Bucket List

Each bucket list item should be a `.mdx` file with the following frontmatter:

```yaml
---
title: 'Goal Title'
description: 'Brief description of the goal'
category: 'travel'           # 'travel', 'career', 'personal', 'adventure', 'learning', 'health', 'relationship', 'creative', 'other'
status: 'dream'              # 'completed', 'in-progress', 'planned', 'dream'
priority: 3                  # 1-5, optional (higher = more important)
dateCompleted: '2023-03-15' # Optional, only for completed items
image: '/collections/bucket-list/image.jpg'  # Optional
order: 1                     # Optional, for custom ordering
---

Details about this goal, your progress, thoughts, etc...
```

## Images

Place your images in the corresponding `public/collections/` directory:

- Books: `public/collections/books/`
- Movies: `public/collections/movies/`
- Bucket List: `public/collections/bucket-list/`

Default images will be used if you don't specify custom images.

## Tips

1. **File Names**: Use lowercase with hyphens (e.g., `atomic-habits.mdx`, `the-social-network.mdx`)
2. **Dates**: Use YYYY-MM-DD format for all dates
3. **Status Tracking**: Update the status field as you progress through books or bucket list items
4. **Favorites**: Mark your favorites to easily filter them later
5. **Tags**: Use consistent tags for easier filtering and organization

## Quick Add Templates

### Book Template
```bash
# Copy atomic-habits.mdx and modify the frontmatter and content
```

### Movie Template
```bash
# Copy inception.mdx and modify the frontmatter and content
```

### Bucket List Template
```bash
# Copy any existing bucket list item and modify
```

## Statistics

The Collections page automatically calculates statistics based on your content:
- Books: Total, Completed, Reading, Want to Read, Favorites
- Movies: Total, Favorites
- Bucket List: Total, Completion Rate, Status Breakdown

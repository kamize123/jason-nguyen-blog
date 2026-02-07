# Collections Feature Guide

Your new Collections section is now live! 🎉

## What's Been Created

### 📚 Books Section
Track all the books you've read, are reading, or want to read. Each book includes:
- Title, Author, Description
- Cover image (optional)
- Rating (1-5 stars)
- Status: Reading, Completed, Want to Read
- Start and completion dates
- Tags and favorites

### 🎬 Movies Section
Keep track of movies you've watched with:
- Title, Director, Description
- Movie poster (optional)
- Rating (1-5 stars)
- Release year and watch date
- Tags and favorites

### 🎯 Bucket List
Document your life goals with up to 100 items:
- Title and detailed description
- Category: Travel, Career, Personal, Adventure, Learning, Health, Relationship, Creative, Other
- Status: Dream, Planned, In Progress, Completed
- Priority level (1-5)
- Completion date tracking
- Custom ordering

## Features

✅ **Beautiful Tab Interface** - Easy navigation between Books, Movies, and Bucket List
✅ **Statistics Dashboard** - See your progress at a glance
✅ **Search & Filters** - Find items quickly with search and status filters
✅ **Responsive Design** - Looks great on all devices
✅ **Status Tracking** - Mark items as completed and track your progress
✅ **Favorites** - Mark your favorite books and movies
✅ **Animations** - Smooth transitions powered by Framer Motion

## How to Add Content

### Adding a New Book

1. Create a new `.mdx` file in `src/content/collections/books/`
2. Use this template:

```yaml
---
title: 'Book Title'
author: 'Author Name'
description: 'What the book is about'
coverImage: '/collections/books/book-cover.jpg'  # optional
rating: 5
status: 'completed'  # reading, completed, want-to-read
dateStarted: '2024-01-15'
dateCompleted: '2024-02-10'
tags: ['Fiction', 'Mystery']
favorite: true
---

Your thoughts and notes about the book...
```

### Adding a New Movie

1. Create a new `.mdx` file in `src/content/collections/movies/`
2. Use this template:

```yaml
---
title: 'Movie Title'
director: 'Director Name'
description: 'Brief plot summary'
posterImage: '/collections/movies/poster.jpg'  # optional
rating: 5
year: 2024
dateWatched: '2024-03-15'
tags: ['Drama', 'Thriller']
favorite: true
---

Your review and thoughts about the movie...
```

### Adding a Bucket List Item

1. Create a new `.mdx` file in `src/content/collections/bucket-list/`
2. Use this template:

```yaml
---
title: 'Your Goal'
description: 'What you want to achieve'
category: 'travel'  # travel, career, personal, adventure, learning, health, relationship, creative, other
status: 'dream'  # dream, planned, in-progress, completed
priority: 5  # 1-5
dateCompleted: '2024-05-01'  # only for completed items
order: 1  # optional, for custom ordering
---

Details about your goal, progress, and reflections...
```

## Adding Images

Place your images in the appropriate public folders:

- **Books**: `public/collections/books/`
- **Movies**: `public/collections/movies/`
- **Bucket List**: `public/collections/bucket-list/`

### Image Recommendations:
- **Book covers**: 400x600px (portrait)
- **Movie posters**: 500x750px (portrait)
- **Bucket list**: 1200x800px (landscape)

If you don't specify an image, default placeholders will be used.

## Accessing Your Collections

Visit: **http://localhost:3000/collections**

The Collections link has been added to your main navigation menu.

## Sample Content Included

I've created sample content to help you get started:

**Books (4):**
- Atomic Habits (Completed, Favorite)
- Sapiens (Completed, Favorite)
- Clean Code (Completed)
- Deep Work (Reading)

**Movies (3):**
- Inception (Favorite)
- Interstellar (Favorite)
- The Social Network

**Bucket List (6 items):**
- Visit Japan (✓ Completed)
- Learn Spanish (In Progress)
- Run a Marathon (Planned)
- Build a Successful Product (In Progress)
- Write a Book (Dream)
- Climb Mount Fuji (Dream)

## Tips

1. **Consistent Naming**: Use lowercase with hyphens for file names (e.g., `atomic-habits.mdx`)
2. **YAML Syntax**: When using apostrophes in YAML strings, double them (`''`) instead of escaping (`\'`)
3. **Dates**: Always use `YYYY-MM-DD` format
4. **Order Your Bucket List**: Use the `order` field to arrange items exactly how you want
5. **Update Status**: As you complete books or goals, update the status and add completion dates
6. **Add Your Thoughts**: Use the MDX content area to add detailed notes, reviews, and reflections

## Next Steps

1. **Add Your Real Content**: Replace the sample content with your actual books, movies, and goals
2. **Add Images**: Upload cover images and posters to make it more visual
3. **Customize**: Feel free to modify the categories, colors, or layout to match your style
4. **Share Your Progress**: The Collections page is a great way to track and share your personal journey

## Need Help?

Check the README in `src/content/collections/README.md` for more detailed templates and examples.

---

**Happy Collecting! 🎉**

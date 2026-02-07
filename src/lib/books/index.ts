import booksData from '@/data/books.json';

export type BookStatus = 'reading' | 'completed' | 'want-to-read';

export type BookItem = {
  id: number;
  title: string;
  author: string;
  coverImage?: string;
  rating?: number;
  status: BookStatus;
  dateStarted?: string;
  dateCompleted?: string;
  goodreadsUrl: string;
  favorite?: boolean;
};

export function getAllBooks(): BookItem[] {
  const items = booksData.items as BookItem[];
  return items.sort((a, b) => {
    if (a.dateCompleted && b.dateCompleted) {
      return new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime();
    }
    if (a.dateCompleted && !b.dateCompleted) return -1;
    if (!a.dateCompleted && b.dateCompleted) return 1;
    if (a.dateStarted && b.dateStarted) {
      return new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime();
    }
    return a.title.localeCompare(b.title);
  });
}

export function getBookStats() {
  const items = getAllBooks();
  return {
    total: items.length,
    completed: items.filter(b => b.status === 'completed').length,
    reading: items.filter(b => b.status === 'reading').length,
    wantToRead: items.filter(b => b.status === 'want-to-read').length,
    favorites: items.filter(b => b.favorite).length,
  };
}

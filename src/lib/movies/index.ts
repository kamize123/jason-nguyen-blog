import moviesData from '@/data/movies.json';

export type MovieItem = {
  id: number;
  title: string;
  director: string;
  posterImage?: string;
  rating?: number;
  year?: number;
  dateWatched?: string;
  favorite?: boolean;
};

export function getAllMovies(): MovieItem[] {
  const items = moviesData.items as MovieItem[];
  return items.sort((a, b) => {
    if (a.dateWatched && b.dateWatched) {
      return new Date(b.dateWatched).getTime() - new Date(a.dateWatched).getTime();
    }
    if (a.dateWatched && !b.dateWatched) return -1;
    if (!a.dateWatched && b.dateWatched) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getMovieStats() {
  const items = getAllMovies();
  return {
    total: items.length,
    favorites: items.filter(m => m.favorite).length,
  };
}

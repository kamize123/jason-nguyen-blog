import { getAllBooks, getBookStats } from "@/lib/books";
import { getAllMovies, getMovieStats } from "@/lib/movies";
import { getAllBucketListItems, getBucketListStats } from "@/lib/bucket-list";
import type { Metadata } from "next";
import { NextPageProps } from "@/lib/types";
import CollectionsClient from "./CollectionsClient";

export const metadata: Metadata = {
  title: 'List 100',
  description: 'Things I want to do before I die. Books I have read and movies I have watched.',
};

export default function CollectionsPage(props: NextPageProps) {
  const books = getAllBooks();
  const movies = getAllMovies();
  const bucketList = getAllBucketListItems();
  const bucketListStats = getBucketListStats();
  const bookStats = getBookStats();
  const movieStats = getMovieStats();

  const stats = {
    books: bookStats,
    movies: movieStats,
    bucketList: bucketListStats
  };

  return (
    <CollectionsClient 
      books={books} 
      movies={movies} 
      bucketList={bucketList}
      stats={stats}
    />
  );
}

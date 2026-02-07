"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookItem } from "@/lib/books";
import { MovieItem } from "@/lib/movies";
import { BucketListItem } from "@/lib/bucket-list";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CollectionsClientProps = {
  books: BookItem[];
  movies: MovieItem[];
  bucketList: BucketListItem[];
  stats: any;
};

type TabType = 'books' | 'movies' | 'bucket-list';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ITEMS_PER_PAGE = 12;

export default function CollectionsClient({ books, movies, bucketList, stats }: CollectionsClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('bucket-list');
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset filters when changing tabs
  useEffect(() => {
    setSearchQuery("");
    setCurrentPage(1);
  }, [activeTab]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filtered Books - sorted by completion date (newest first)
  const filteredBooks = useMemo(() => {
    const filtered = books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    
    // Sort by completion date (newest first), then by start date, then by title
    return filtered.sort((a, b) => {
      if (a.dateCompleted && b.dateCompleted) {
        return new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime();
      }
      if (a.dateCompleted && !b.dateCompleted) return -1;
      if (!a.dateCompleted && b.dateCompleted) return 1;
      
      if (a.dateStarted && b.dateStarted) {
        return new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime();
      }
      if (a.dateStarted && !b.dateStarted) return -1;
      if (!a.dateStarted && b.dateStarted) return 1;
      
      return a.title.localeCompare(b.title);
    });
  }, [books, searchQuery]);

  // Filtered Movies - sorted by watch date (newest first)
  const filteredMovies = useMemo(() => {
    const filtered = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.director.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    
    // Sort by watch date (newest first), then by title
    return filtered.sort((a, b) => {
      if (a.dateWatched && b.dateWatched) {
        return new Date(b.dateWatched).getTime() - new Date(a.dateWatched).getTime();
      }
      if (a.dateWatched && !b.dateWatched) return -1;
      if (!a.dateWatched && b.dateWatched) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [movies, searchQuery]);

  // Paginated data
  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBooks, currentPage]);

  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMovies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMovies, currentPage]);

  const totalBooksPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const totalMoviesPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);

  // Filtered Bucket List
  const filteredBucketList = useMemo(() => {
    // Only filter by search, no status filter
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      return bucketList.filter(item => {
        return item.title.toLowerCase().includes(searchLower) ||
               item.description.toLowerCase().includes(searchLower);
      });
    }

    return bucketList;
  }, [bucketList, searchQuery]);

  const tabs = [
    { id: 'bucket-list' as TabType, label: 'Bucket List', count: stats.bucketList.total, icon: '🎯' },
    { id: 'books' as TabType, label: 'Books', count: stats.books.total, icon: '📚' },
    { id: 'movies' as TabType, label: 'Movies', count: stats.movies.total, icon: '🎬' },
  ];

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'completed': 'bg-green-100 text-green-700',
      'reading': 'bg-blue-100 text-blue-700',
      'want-to-read': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };


  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100 flex flex-col">
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-50 to-transparent opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-50 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-8 pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Compact Header Section */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mb-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    List 100
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-xs sm:text-sm text-gray-500 max-w-2xl">
                    Things I want to do before I die. Please let me know if you have any recommendation.
                  </motion.p>
                </div>

                {/* Completion Rate */}
                <motion.div variants={fadeInUp} className="block">
                  <div className="text-center sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-pink-600">{stats.bucketList.completionRate}%</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Compact Tabs & Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0",
                        activeTab === tab.id 
                          ? "bg-gray-900 text-white shadow-sm" 
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      )}
                    >
                      <span className="text-sm sm:text-base">{tab.icon}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className={cn(
                        "px-1.5 py-0.5 rounded text-xs font-semibold",
                        activeTab === tab.id ? "bg-white/20" : "bg-gray-100"
                      )}>
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Search Bar - only for books and movies */}
                {activeTab !== 'bucket-list' && (
                  <div className="relative flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder={`Search ${activeTab}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Filters */}
              {activeTab === 'books' && (
                <div className="text-right">
                  <span className="text-xs text-gray-500">
                    {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
                  </span>
                </div>
              )}

              {activeTab === 'movies' && (
                <div className="text-right">
                  <span className="text-xs text-gray-500">
                    {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {/* Books Tab */}
              {activeTab === 'books' && (
                <motion.div
                  key="books"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {paginatedBooks.map((book) => (
                    <motion.div variants={fadeInUp} key={book.id}>
                      <a
                        href={book.goodreadsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                          <div className="relative h-56 overflow-hidden bg-gray-50">
                            <Image
                              src={book.coverImage || '/collections/books/default.jpg'}
                              alt={book.title}
                              fill
                              className="object-contain p-2"
                              unoptimized={book.coverImage?.startsWith('http')}
                            />
                            {book.favorite && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                                ❤️
                              </div>
                            )}
                          </div>
                          
                          <div className="p-4 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <span className={cn("text-xs font-medium px-2 py-0.5 rounded", getStatusColor(book.status))}>
                                {book.status.replace('-', ' ')}
                              </span>
                              {book.rating && book.rating > 0 && (
                                <div className="flex items-center gap-0.5 text-xs">
                                  {getRatingStars(book.rating)}
                                </div>
                              )}
                            </div>
                            
                            <h3 className="text-sm font-bold mb-1 leading-tight line-clamp-2">
                              {book.title}
                            </h3>
                            
                            <p className="text-gray-500 text-xs mb-2">
                              {book.author}
                            </p>

                            {book.dateCompleted && (
                              <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                                ✓ Completed {new Date(book.dateCompleted).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </div>
                            )}
                            {book.status === 'reading' && book.dateStarted && (
                              <div className="text-xs text-blue-600 mt-auto pt-2 border-t border-gray-100">
                                📖 Started {new Date(book.dateStarted).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Movies Tab */}
              {activeTab === 'movies' && (
                <motion.div
                  key="movies"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                >
                  {paginatedMovies.map((movie) => (
                    <motion.div variants={fadeInUp} key={movie.id}>
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-64 overflow-hidden bg-gray-50">
                          <Image
                            src={movie.posterImage || '/collections/movies/default.jpg'}
                            alt={movie.title}
                            fill
                            className="object-contain p-2"
                            unoptimized={movie.posterImage?.startsWith('http')}
                          />
                          {movie.favorite && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm">
                              ❤️
                            </div>
                          )}
                        </div>
                        
                        <div className="p-3 flex flex-col flex-grow">
                          <h3 className="text-sm font-bold mb-1 leading-tight line-clamp-2">
                            {movie.title}
                          </h3>
                          
                          <p className="text-gray-500 text-xs mb-2">
                            {movie.director} • {movie.year}
                          </p>

                          {movie.rating && movie.rating > 0 && (
                            <div className="flex items-center gap-0.5 text-xs mb-2">
                              {getRatingStars(movie.rating)}
                            </div>
                          )}

                          {movie.dateWatched && (
                            <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                              👁️ Watched {new Date(movie.dateWatched).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Bucket List Tab */}
              {activeTab === 'bucket-list' && (
                <motion.div
                  key="bucket-list"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                  className="max-w-5xl mx-auto"
                >
                  <div className="space-y-1 sm:space-y-1.5">
                    {filteredBucketList.map((item, index) => (
                      <motion.div variants={fadeInUp} key={item.id}>
                        <div className={cn(
                          "rounded-lg border hover:border-gray-300 transition-all duration-200 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3",
                          item.status === 'completed' ? "bg-green-50/50 border-green-200" : "bg-white border-gray-100"
                        )}>
                          {/* Number */}
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                            {index + 1}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow min-w-0">
                            <h3 className={cn(
                              "text-xs sm:text-sm font-medium",
                              item.status === 'completed' ? "text-gray-600 line-through" : "text-gray-900"
                            )}>
                              {item.title}
                            </h3>
                          </div>

                          {/* Status Icon */}
                          {item.status === 'completed' && (
                            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                              ✓
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {((activeTab === 'books' && totalBooksPages > 1) ||
              (activeTab === 'movies' && totalMoviesPages > 1)) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 sm:mt-12 flex justify-center items-center gap-1 sm:gap-2"
              >
                <button
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide max-w-[200px] sm:max-w-none">
                  {Array.from({ 
                    length: activeTab === 'books' ? totalBooksPages : totalMoviesPages 
                  }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all text-xs sm:text-sm flex items-center justify-center flex-shrink-0",
                        currentPage === page
                          ? "bg-gray-900 text-white shadow-sm"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const maxPage = activeTab === 'books' ? totalBooksPages : totalMoviesPages;
                    setCurrentPage(prev => Math.min(maxPage, prev + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === (activeTab === 'books' ? totalBooksPages : totalMoviesPages)}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            )}

            {/* Empty State */}
            {((activeTab === 'books' && filteredBooks.length === 0) ||
              (activeTab === 'movies' && filteredMovies.length === 0) ||
              (activeTab === 'bucket-list' && filteredBucketList.length === 0)) && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-12 sm:py-20 bg-gray-50 rounded-xl px-4"
              >
                <div className="text-3xl sm:text-4xl mb-3">🔍</div>
                <p className="text-sm sm:text-base text-gray-600 mb-1">No items found</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                  {searchQuery ? 'Try a different search term' : 'Try changing your filter'}
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-indigo-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

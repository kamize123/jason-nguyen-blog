'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '@/lib/mdx';
import { getRelatedPosts } from '@/lib/utils/relatedPosts';

type RelatedPostsProps = {
  currentPost: PostMeta;
  allPosts: PostMeta[];
};

export default function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, allPosts, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section 
      className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800"
      aria-label="Related articles"
    >
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">You Might Also Like</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link 
              href={`/blog/${post.slug}`}
              className="group block h-full"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.thumbnail || '/thumbnails/default.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  
                  <h3 className="text-base font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-grow">
                    {post.description}
                  </p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

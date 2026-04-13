import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";
import { NextPageProps } from "@/lib/types";
import { Suspense } from "react";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about software development, web technologies, and professional growth.',
};

export default async function BlogPage(props: NextPageProps) {
  const posts = await getAllPosts();

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    }>
      <BlogClient posts={posts} />
    </Suspense>
  );
} 
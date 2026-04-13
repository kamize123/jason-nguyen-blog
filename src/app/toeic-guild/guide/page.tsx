import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import Link from 'next/link';
import mdxComponents from '@/lib/mdx/mdx-components';
import Icon from '@/components/toeic-guild/Icon';
import { getToeicStudyGuideSource } from '@/lib/toeic-guild/guide';

export const metadata: Metadata = {
  title: 'Hướng dẫn lộ trình TOEIC 650 → 900+',
  description:
    'Hướng dẫn sử dụng lộ trình TOEIC: listening, grammar, chiến lược đọc, sách và web — nhắc nhở hàng ngày để đạt mục tiêu 900+.',
  openGraph: {
    title: 'Hướng dẫn lộ trình TOEIC 650 → 900+',
    description:
      'Lộ trình 90 ngày, chiến lược listening/reading, tài liệu và mẹo ôn thi.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hướng dẫn lộ trình TOEIC 650 → 900+',
    description: 'Lộ trình 90 ngày và chiến lược đạt 900+.',
  },
  alternates: {
    canonical: '/toeic-guild/guide',
  },
};

export default async function ToeicStudyGuidePage() {
  const source = await getToeicStudyGuideSource();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        <nav className="mb-8 text-sm">
          <Link
            href="/toeic-guild"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <Icon name="arrow-right-circle" className="w-4 h-4 rotate-180" />
            Về TOEIC Guild
          </Link>
        </nav>

        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <MDXRemote source={source} components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}

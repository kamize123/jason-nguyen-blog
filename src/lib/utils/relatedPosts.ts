import { PostMeta } from '@/lib/mdx';

export function getRelatedPosts(
  currentPost: PostMeta,
  allPosts: PostMeta[],
  limit: number = 3
): PostMeta[] {
  const currentTags = currentPost.tags || [];
  
  const postsWithScores = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      const postTags = post.tags || [];
      const matchingTags = postTags.filter(tag => currentTags.includes(tag));
      const score = matchingTags.length;
      
      return { post, score };
    });

  postsWithScores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return postsWithScores.slice(0, limit).map(item => item.post);
}

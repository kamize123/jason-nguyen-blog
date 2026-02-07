import bucketListData from '@/data/bucket-list.json';

export type BucketListStatus = 'completed' | 'todo';

export type BucketListItem = {
  id: number;
  title: string;
  description: string;
  status: BucketListStatus;
};

export function getAllBucketListItems(): BucketListItem[] {
  return bucketListData.items as BucketListItem[];
}

export function getBucketListStats() {
  const items = getAllBucketListItems();
  
  return {
    total: items.length,
    completed: items.filter(i => i.status === 'completed').length,
    todo: items.filter(i => i.status === 'todo').length,
    completionRate: Math.round((items.filter(i => i.status === 'completed').length / items.length) * 100) || 0,
  };
}

import React from 'react';
import { EnhancedLink } from '@/lib/toeic-guild/types';
import ResourceCard from './ResourceCard';

type ResourceListProps = {
  resources: EnhancedLink[];
  title?: string;
  compact?: boolean;
};

export default function ResourceList({ resources, title, compact = true }: ResourceListProps) {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {title && (
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          {title}
        </h4>
      )}
      <div className={compact ? 'space-y-2' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        {resources.map((resource, index) => (
          <ResourceCard 
            key={`${resource.url}-${index}`} 
            link={resource} 
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
}

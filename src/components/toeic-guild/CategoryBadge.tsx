import { TaskType } from '@/lib/toeic-guild/types';
import { getCategoryColors } from '@/lib/toeic-guild/utils';

type CategoryBadgeProps = {
  type: TaskType;
};

export default function CategoryBadge({ type }: CategoryBadgeProps) {
  const theme = getCategoryColors(type);
  
  return (
    <span 
      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border-2 shadow-sm ${theme.light} ${theme.text} ${theme.border}`}
    >
      {type}
    </span>
  );
}

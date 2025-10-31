import BaseBadge from './BaseBadge';

interface CategoryBadgeProps {
    category: string;
    className?: string;
}

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
    return (
        <BaseBadge
            variant="category"
            content={category}
            className={className}
        />
    );
}

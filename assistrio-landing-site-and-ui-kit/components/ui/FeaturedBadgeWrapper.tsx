import BaseBadge from './BaseBadge';

interface FeaturedBadgeProps {
    className?: string;
}

export default function FeaturedBadge({ className = '' }: FeaturedBadgeProps) {
    return (
        <BaseBadge
            variant="featured"
            content="Featured"
            className={className}
        />
    );
}

import BaseBadge from './BaseBadge';

interface IndustryBadgeProps {
    industry: string;
    className?: string;
}

export default function IndustryBadge({ industry, className = '' }: IndustryBadgeProps) {
    return (
        <BaseBadge
            variant="industry"
            content={industry}
            className={className}
        />
    );
}

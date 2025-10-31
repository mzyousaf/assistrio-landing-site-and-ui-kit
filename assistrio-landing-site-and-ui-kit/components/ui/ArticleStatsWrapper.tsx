import BaseStats from './BaseStats';

interface ArticleStatsProps {
    readTime: string;
    rating?: string;
    views?: string;
    className?: string;
}

export default function ArticleStats({
    readTime,
    rating = "4.9",
    views = "2.1K",
    className = ''
}: ArticleStatsProps) {
    return (
        <BaseStats
            variant="article"
            readTime={readTime}
            rating={rating}
            views={views}
            className={className}
        />
    );
}

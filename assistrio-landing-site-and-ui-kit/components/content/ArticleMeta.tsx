import React from 'react';
import { MetaBadge } from '@/components/ui';

interface ArticleMetaProps {
    category: string;
    readTime: string;
    publishedAt: string;
    className?: string;
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({
    category,
    readTime,
    publishedAt,
    className = ''
}) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatDateMobile = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: '2-digit'
        });
    };

    return (
        <div className={`flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in ${className}`}>
            <MetaBadge type="category" value={category} />
            <MetaBadge type="readTime" value={readTime} />
            <MetaBadge
                type="date"
                value={formatDate(publishedAt)}
                mobileValue={formatDateMobile(publishedAt)}
            />
        </div>
    );
};

export default ArticleMeta;

import React from 'react';
import { IconType } from 'react-icons';
import HelpCategoryCard from './HelpCategoryCard';

interface Article {
    title: string;
    description: string;
    hasAlexi?: boolean;
    link: string;
}

interface HelpCategory {
    title: string;
    description: string;
    icon: IconType;
    color: string;
    articles: Article[];
}

interface HelpCenterCategoriesSectionProps {
    categories: HelpCategory[];
    renderHtmlContent: (content: string, isInsideLink?: boolean) => React.ReactNode;
    className?: string;
}

const HelpCenterCategoriesSection: React.FC<HelpCenterCategoriesSectionProps> = ({
    categories,
    renderHtmlContent,
    className = ""
}) => {
    return (
        <div className={`mb-16 ${className}`}>
            <div className="text-center mb-12">
                <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto mb-6 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Browse Help Categories</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <HelpCategoryCard
                        key={index}
                        title={category.title}
                        description={category.description}
                        icon={category.icon}
                        color={category.color}
                        articles={category.articles}
                        renderHtmlContent={renderHtmlContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default HelpCenterCategoriesSection;

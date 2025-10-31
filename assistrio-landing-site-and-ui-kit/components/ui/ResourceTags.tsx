import React from 'react';
import { FaTag } from 'react-icons/fa';

interface ResourceTagsProps {
    tags: string[];
    className?: string;
}

const ResourceTags: React.FC<ResourceTagsProps> = ({
    tags,
    className = "flex flex-wrap gap-2 mb-6 sm:mb-8"
}) => {
    if (!tags || tags.length === 0) return null;

    return (
        <div className={className}>
            {tags.map((tag: string, index: number) => (
                <span
                    key={index}
                    className={`
                        inline-flex items-center px-2.5 sm:px-3 py-1.5 rounded-full
                        bg-gradient-to-r from-blue-50 to-teal-50
                        text-blue-700 text-xs sm:text-sm font-medium
                        border border-blue-200
                        hover:from-blue-100 hover:to-teal-100
                        transition-all duration-200
                        dark:from-blue-900 dark:to-teal-900
                        dark:text-blue-100 dark:border-blue-800
                        dark:hover:from-blue-800 dark:hover:to-teal-800
                    `}
                >
                    <FaTag className="w-3 h-3 mr-1 sm:mr-1.5 text-blue-400 dark:text-blue-200" />
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default ResourceTags;

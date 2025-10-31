import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedPostCardProps {
    title: string;
    slug: string;
    image: string;
    readTime: string;
    category: string;
    className?: string;
}

const RelatedPostCard: React.FC<RelatedPostCardProps> = ({
    title,
    slug,
    image,
    readTime,
    category,
    className = ''
}) => {
    return (
        <Link
            href={`/blog/${slug}`}
            className={`bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 ${className}`}
        >
            <div className="relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={224}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                        {category}
                    </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm text-xs font-medium text-white">
                        {readTime}
                    </span>
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-600 transition-colors line-clamp-2 leading-tight">
                    {title}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">Read more</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-brand-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default RelatedPostCard;

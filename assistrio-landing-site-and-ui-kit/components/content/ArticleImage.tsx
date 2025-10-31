import React from 'react';
import Image from 'next/image';

interface ArticleImageProps {
    src: string;
    alt: string;
    readTime: string;
    category: string;
    className?: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({
    src,
    alt,
    readTime,
    category,
    className = ''
}) => {
    return (
        <div className={`mb-8 sm:mb-12 relative group w-full ${className}`}>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl w-full">
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <div className="flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-gray-900">{readTime}</span>
                        </div>
                        <div className="flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-medium text-gray-900">{category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleImage;
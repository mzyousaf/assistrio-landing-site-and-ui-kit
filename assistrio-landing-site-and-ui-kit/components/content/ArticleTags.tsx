import React from 'react';
import { ShareButton } from '@/components/ui';

interface ArticleTagsProps {
    tags: string[];
    onShare: (platform: string) => void;
    copied: boolean;
    className?: string;
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags, onShare, copied, className = '' }) => {
    if (!tags || tags.length === 0) return null;

    return (
        <div className={`mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-slate-700 ${className}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Article Tags</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-brand-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 text-brand-700 dark:text-brand-400 text-xs sm:text-sm font-medium hover:from-brand-100 hover:to-blue-100 dark:hover:from-slate-600 dark:hover:to-slate-600 hover:text-brand-800 dark:hover:text-brand-300 transition-all duration-200 cursor-pointer border border-brand-200 dark:border-slate-600 hover:border-brand-300 dark:hover:border-slate-500 hover:shadow-sm"
                            >
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Share:</span>
                    <div className="flex space-x-1.5 sm:space-x-2">
                        <ShareButton
                            platform="x"
                            onClick={() => onShare('x')}
                            className="p-1.5 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            title="Share on X"
                        />
                        <ShareButton
                            platform="linkedin"
                            onClick={() => onShare('linkedin')}
                            className="p-1.5 sm:p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                            title="Share on LinkedIn"
                        />
                        <ShareButton
                            platform="copy"
                            onClick={() => onShare('copy')}
                            className={`p-1.5 sm:p-2 rounded-lg transition-colors ${copied
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-600 text-white hover:bg-gray-700'
                                }`}
                            title="Copy Link"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleTags;
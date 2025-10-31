import React from 'react';
import { AuthorAvatar, StarRating } from '@/components/ui';

interface AuthorBioProps {
    authorImage: string;
    author: string;
    authorRole: string;
    authorBio: string;
    className?: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({
    authorImage,
    author,
    authorRole,
    authorBio,
    className = ''
}) => {
    return (
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm max-w-md mx-auto ${className}`}>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About the Author
            </h3>
            <div className="text-center">
                <AuthorAvatar
                    src={authorImage}
                    alt={author}
                    size="medium"
                    className="mb-3 sm:mb-4"
                />
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">{author}</h4>
                <p className="text-brand-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{authorRole}</p>
                <StarRating size="medium" className="mb-3 sm:mb-4" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4">{authorBio}</p>
                <button className="w-full bg-brand-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-brand-600 transition-colors text-sm sm:text-base">
                    Follow Author
                </button>
            </div>
        </div>
    );
};

export default AuthorBio;

'use client';

import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

interface AuthorInfoProps {
    author: string;
    authorRole: string;
    authorImage: string;
    publishedAt: string;
    readTime: string;
    className?: string;
}

export default function AuthorInfo({
    author,
    authorRole,
    authorImage,
    publishedAt,
    readTime,
    className = ''
}: AuthorInfoProps) {
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState(authorImage);

    const handleImageError = () => {
        if (!imageError) {
            setImageError(true);
            setImageSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&size=400&background=6366f1&color=ffffff&bold=true`);
        }
    };

    return (
        <div className={`flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 ${className}`}>
            <div className="flex items-center space-x-3 sm:space-x-4">
                {imageSrc && (
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                        <Image
                            src={imageSrc}
                            alt={author}
                            width={56}
                            height={56}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 sm:border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 bg-gray-100"
                            unoptimized={imageSrc.includes('ui-avatars.com')}
                            onError={handleImageError}
                        />
                    </div>
                )}
                <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg flex items-center">
                        <FaUser className="w-4 h-4 mr-2 text-teal-500 dark:text-brand-400" />
                        {author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{authorRole}</p>
                </div>
            </div>
            <div className="flex sm:ml-auto sm:text-right space-x-4 sm:space-x-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <FaCalendarAlt className="w-3 h-3 mr-1" />
                    {new Date(publishedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <FaClock className="w-3 h-3 mr-1" />
                    {readTime}
                </p>
            </div>
        </div>
    );
}

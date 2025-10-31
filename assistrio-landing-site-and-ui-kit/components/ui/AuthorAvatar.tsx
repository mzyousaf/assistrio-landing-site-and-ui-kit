import React from 'react';
import Image from 'next/image';

interface AuthorAvatarProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    showStatus?: boolean;
    className?: string;
}

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
    src,
    alt,
    size = 'medium',
    showStatus = true,
    className = ''
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'w-12 h-12';
            case 'medium':
                return 'w-16 h-16 sm:w-24 sm:h-24';
            case 'large':
                return 'w-20 h-20 sm:w-32 sm:h-32';
            default:
                return 'w-16 h-16 sm:w-24 sm:h-24';
        }
    };

    const getStatusSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'w-4 h-4 sm:w-6 sm:h-6';
            case 'medium':
                return 'w-6 h-6 sm:w-8 sm:h-8';
            case 'large':
                return 'w-8 h-8 sm:w-10 sm:h-10';
            default:
                return 'w-6 h-6 sm:w-8 sm:h-8';
        }
    };

    const getBorderClasses = () => {
        switch (size) {
            case 'small':
                return 'border-2';
            case 'medium':
                return 'border-2 sm:border-4';
            case 'large':
                return 'border-4 sm:border-6';
            default:
                return 'border-2 sm:border-4';
        }
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={size === 'large' ? 80 : size === 'medium' ? 56 : 40}
                height={size === 'large' ? 80 : size === 'medium' ? 56 : 40}
                className={`${getSizeClasses()} rounded-full object-contain shadow-lg ${getBorderClasses()} border-white bg-gray-100`}
                unoptimized={src.includes('ui-avatars.com')}
            />
            {showStatus && (
                <div className={`absolute -bottom-1 -right-1 ${getStatusSizeClasses()} bg-green-500 rounded-full ${getBorderClasses()} border-white flex items-center justify-center`}>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default AuthorAvatar;

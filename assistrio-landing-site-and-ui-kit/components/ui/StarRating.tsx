import React from 'react';

interface StarRatingProps {
    rating?: number;
    maxRating?: number;
    size?: 'small' | 'medium' | 'large';
    showLabel?: boolean;
    label?: string;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
    maxRating = 5,
    size = 'medium',
    showLabel = true,
    label = 'Expert Author',
    className = ''
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'w-3 h-3';
            case 'medium':
                return 'w-3 h-3 sm:w-4 sm:h-4';
            case 'large':
                return 'w-4 h-4 sm:w-5 sm:h-5';
            default:
                return 'w-3 h-3 sm:w-4 sm:h-4';
        }
    };

    const getLabelSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'text-xs';
            case 'medium':
                return 'text-xs sm:text-sm';
            case 'large':
                return 'text-sm sm:text-base';
            default:
                return 'text-xs sm:text-sm';
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            <div className="flex text-yellow-400">
                {[...Array(maxRating)].map((_, i) => (
                    <svg
                        key={i}
                        className={getSizeClasses()}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            {showLabel && (
                <span className={`text-gray-500 ml-1 sm:ml-2 ${getLabelSizeClasses()}`}>
                    {label}
                </span>
            )}
        </div>
    );
};

export default StarRating;

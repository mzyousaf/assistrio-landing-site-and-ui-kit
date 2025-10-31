import React from 'react';

interface MetaBadgeProps {
    type: 'category' | 'readTime' | 'date';
    value: string;
    mobileValue?: string;
    className?: string;
}

const MetaBadge: React.FC<MetaBadgeProps> = ({ type, value, mobileValue, className = '' }) => {
    const getIcon = () => {
        switch (type) {
            case 'category':
                return (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                );
            case 'readTime':
                return (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'date':
                return (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const getBaseClasses = () => {
        switch (type) {
            case 'category':
                return 'inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-medium shadow-sm';
            case 'readTime':
                return 'inline-flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium shadow-sm';
            case 'date':
                return 'inline-flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium shadow-sm';
            default:
                return '';
        }
    };

    return (
        <div className={`${getBaseClasses()} ${className}`}>
            {getIcon()}
            <span className="hidden sm:inline">{value}</span>
            <span className="sm:hidden">{mobileValue || value}</span>
        </div>
    );
};

export default MetaBadge;

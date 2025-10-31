import React from 'react';

interface LoadingSpinnerProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    title = "Loading Resource",
    subtitle = "Please wait while we fetch the details...",
    className = "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center"
}) => {
    return (
        <div className={className}>
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{subtitle}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;

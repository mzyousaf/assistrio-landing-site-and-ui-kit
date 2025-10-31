import React from 'react';

interface CopyNotificationProps {
    show: boolean;
    message?: string;
    className?: string;
}

const CopyNotification: React.FC<CopyNotificationProps> = ({
    show,
    message = "Link copied to clipboard!",
    className = "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2 animate-bounce"
}) => {
    if (!show) return null;

    return (
        <div className={className}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{message}</span>
        </div>
    );
};

export default CopyNotification;

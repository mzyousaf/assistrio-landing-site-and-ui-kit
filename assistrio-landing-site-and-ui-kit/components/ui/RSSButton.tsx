'use client';

import { useState } from 'react';

interface RSSButtonProps {
    className?: string;
    showTooltip?: boolean;
}

export default function RSSButton({ className = '', showTooltip = true }: RSSButtonProps) {
    const [isRssHovered, setIsRssHovered] = useState(false);

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setIsRssHovered(true)}
            onMouseLeave={() => setIsRssHovered(false)}
        >
            <a
                href="/status/rss"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white dark:text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                <svg className={`w-5 h-5 mr-2 text-white dark:text-white transition-transform duration-300 ${isRssHovered ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C4.97 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M6.18 4C4.97 4 4 4.97 4 6.18S4.97 8.36 6.18 8.36C7.38 8.36 8.36 7.38 8.36 6.18S7.38 4 6.18 4M6.18 9.82C4.97 9.82 4 10.79 4 12S4.97 14.18 6.18 14.18C7.38 14.18 8.36 13.21 8.36 12S7.38 9.82 6.18 9.82M12 6.18C12 4.97 12.97 4 14.18 4S16.36 4.97 16.36 6.18 15.39 8.36 14.18 8.36 12 7.38 12 6.18M12 12C12 10.79 12.97 9.82 14.18 9.82S16.36 10.79 16.36 12 15.39 14.18 14.18 14.18 12 13.21 12 12M12 17.82C12 16.61 12.97 15.64 14.18 15.64S16.36 16.61 16.36 17.82 15.39 20 14.18 20 12 19 12 17.82M18 6.18C18 4.97 18.97 4 20.18 4S22.36 4.97 22.36 6.18 21.39 8.36 20.18 8.36 18 7.38 18 6.18M18 12C18 10.79 18.97 9.82 20.18 9.82S22.36 10.79 22.36 12 21.39 14.18 20.18 14.18 18 13.21 18 12M18 17.82C18 16.61 18.97 15.64 20.18 15.64S22.36 16.61 22.36 17.82 21.39 20 20.18 20 18 19 18 17.82" />
                </svg>
                Subscribe to RSS
            </a>

            {showTooltip && (
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50`}>
                    Get real-time status updates
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
            )}
        </div>
    );
}

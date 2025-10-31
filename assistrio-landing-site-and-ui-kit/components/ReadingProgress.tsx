'use client';

import { useState, useEffect } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
            setProgress(scrollPercent);
        };

        // Initial calculation
        updateProgress();

        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div className="hidden md:block fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-[70] scroll-progress">
            <div
                className="h-full bg-gradient-to-r from-brand-500 to-blue-600 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

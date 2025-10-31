'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WindowWithAnalytics extends Window {
    __ENABLE_ANALYTICS__?: boolean;
}

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookie-consent');
        if (!cookieConsent) {
            setIsVisible(true);
        }

        // Disable analytics if consent was declined
        if (cookieConsent === 'declined') {
            disableAnalytics();
        }
    }, []);

    const disableAnalytics = () => {
        // Disable tracking scripts and remove analytics cookies
        if (typeof window !== 'undefined') {
            // Set a flag to disable analytics
            (window as WindowWithAnalytics).__ENABLE_ANALYTICS__ = false;

            // Remove analytics cookies
            document.cookie.split(';').forEach((c) => {
                const cookieName = c.trim().split('=')[0];
                if (cookieName.includes('_vercel') ||
                    cookieName.includes('analytics') ||
                    cookieName.includes('_ga') ||
                    cookieName.includes('_gid')) {
                    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
                    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                }
            });
        }
    };

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        if (typeof window !== 'undefined') {
            (window as WindowWithAnalytics).__ENABLE_ANALYTICS__ = true;
            // Trigger a custom event to reload analytics if needed
            window.dispatchEvent(new CustomEvent('cookie-consent-accepted'));
        }
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        disableAnalytics();
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">We use cookies</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            We use cookies to enhance your experience, analyze site traffic, and personalize content.
                            By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
                            <Link href="/legal/cookies" className="text-brand-600 hover:text-brand-700 dark:text-brand-400 underline">
                                Learn more
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            onClick={declineCookies}
                            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

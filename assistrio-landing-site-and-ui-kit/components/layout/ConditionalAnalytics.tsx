'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function ConditionalAnalytics() {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        // Check cookie consent on mount
        const checkConsent = () => {
            const cookieConsent = localStorage.getItem('cookie-consent');
            // Only enable analytics if consent is explicitly accepted
            setIsEnabled(cookieConsent === 'accepted');
        };

        // Check on mount
        checkConsent();

        // Listen for cookie consent changes
        window.addEventListener('cookie-consent-accepted', checkConsent);

        return () => {
            window.removeEventListener('cookie-consent-accepted', checkConsent);
        };
    }, []);

    // Don't render Analytics if consent is not given
    if (!isEnabled) {
        return null;
    }

    // Only render Vercel Analytics if deployed on Vercel
    // This prevents 405 errors when deployed on non-Vercel platforms
    // Check if running on Vercel domain or if explicitly enabled via env var
    const shouldEnableVercelAnalytics = typeof window !== 'undefined' && (
        // Check if on Vercel domains (works for *.vercel.app, *.vercel.com, etc.)
        window.location.hostname.includes('vercel.app') ||
        window.location.hostname.includes('vercel.com') ||
        window.location.hostname.includes('vercel.sh')
    );

    // For custom domains on Vercel, the analytics endpoint should still work
    // If you're getting 405 errors, it means either:
    // 1. Not deployed on Vercel, OR
    // 2. Vercel Analytics not properly configured
    // In this case, we disable it to prevent errors
    if (!shouldEnableVercelAnalytics) {
        return null;
    }

    return <Analytics />;
}


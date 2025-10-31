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

    return <Analytics />;
}


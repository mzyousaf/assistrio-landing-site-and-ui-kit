import HelpCenterClient from './HelpCenterClient';

export const metadata = {
    title: 'Assistrio Help Center - Support & Documentation',
    description: 'Find answers to common questions about Assistrio\'s AI customer support platform. Get help with setup, features, billing, and integrations.',
    keywords: ['assistrio help', 'AI support help', 'customer support documentation', 'FAQ', 'technical support'],
    openGraph: {
        title: 'Assistrio Help Center - Support & Documentation',
        description: 'Find answers to common questions about Assistrio\'s AI customer support platform. Get help with setup, features, billing, and integrations.',
        type: 'website',
        url: 'https://assistrio.com/help-center',
        images: [
            {
                url: 'https://assistrio.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Assistrio Help Center - AI Customer Support',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Assistrio Help Center - Support & Documentation',
        description: 'Find answers to common questions about Assistrio\'s AI customer support platform.',
        images: ['https://assistrio.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://assistrio.com/help-center',
    },
};

export default function HelpCenter() {
    return <HelpCenterClient />;
}
import AboutClient from './AboutClient';

export const metadata = {
    title: 'About Us - AI Customer Support Revolution',
    description: 'Learn about our mission to revolutionize customer support with AI-powered assistance. Discover how we\'re making exceptional support accessible to every business.',
    keywords: ['about us', 'AI customer support', 'AI assistant', 'customer support revolution', 'AI technology'],
    openGraph: {
        title: 'About Us - AI Customer Support Revolution',
        description: 'Learn about our mission to revolutionize customer support with AI-powered assistance. Discover how we\'re making exceptional support accessible to every business.',
        type: 'website',
        url: 'https://your-domain.com/about',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'About Us - AI Customer Support',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'About Us - AI Customer Support Revolution',
        description: 'Learn about our mission to revolutionize customer support with AI-powered assistance.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/about',
    },
};

export default function About() {
    return <AboutClient />;
}
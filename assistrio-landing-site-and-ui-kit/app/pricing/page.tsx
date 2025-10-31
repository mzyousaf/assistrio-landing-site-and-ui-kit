import PricingClient from './PricingClient';

export const metadata = {
    title: 'Pricing - Simple, Transparent AI Support Plans',
    description: 'Choose the perfect AI customer support plan for your business. Transparent pricing starting at $29/month with no hidden fees. Compare features and find your ideal plan.',
    keywords: ['AI assistant pricing', 'AI customer support pricing', 'chatbot pricing', 'customer support plans', 'AI assistant pricing', 'transparent pricing'],
    openGraph: {
        title: 'Pricing - Simple, Transparent AI Support Plans',
        description: 'Choose the perfect AI customer support plan for your business. Transparent pricing starting at $29/month with no hidden fees.',
        type: 'website',
        url: 'https://your-domain.com/pricing',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Pricing - AI Customer Support Plans',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Pricing - Simple, Transparent AI Support Plans',
        description: 'Choose the perfect AI customer support plan for your business. Transparent pricing starting at $29/month.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/pricing',
    },
};

export default function Pricing() {
    return <PricingClient />;
}

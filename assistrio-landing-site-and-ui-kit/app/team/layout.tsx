export const metadata = {
    title: 'Our Team - Meet the AI Assistant Experts',
    description: 'Meet the talented team behind our AI customer support platform. Learn about our experts in AI, engineering, design, and customer success.',
    keywords: ['team', 'AI experts', 'customer support team', 'company team', 'leadership'],
    openGraph: {
        title: 'Our Team - Meet the AI Assistant Experts',
        description: 'Meet the talented team behind our AI customer support platform. Learn about our experts in AI, engineering, design, and customer success.',
        type: 'website',
        url: 'https://your-domain.com/team',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Our Team - AI Assistant',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Our Team - Meet the AI Assistant Experts',
        description: 'Meet the talented team behind our AI customer support platform.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/team',
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

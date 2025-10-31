export const metadata = {
    title: 'System Status - AI Assistant Platform',
    description: 'Real-time status monitoring of our AI Assistant platform. Check uptime, performance metrics, and subscribe to status updates via RSS.',
    keywords: ['status page', 'system status', 'uptime', 'AI platform status', 'RSS feed', 'monitoring'],
    openGraph: {
        title: 'System Status - AI Assistant Platform',
        description: 'Real-time status monitoring of our AI Assistant platform. Check uptime, performance metrics, and subscribe to status updates.',
        type: 'website',
        url: 'https://your-domain.com/status',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'System Status - AI Assistant Platform',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'System Status - AI Assistant Platform',
        description: 'Real-time status monitoring of our AI Assistant platform.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/status',
    },
};

export default function StatusLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

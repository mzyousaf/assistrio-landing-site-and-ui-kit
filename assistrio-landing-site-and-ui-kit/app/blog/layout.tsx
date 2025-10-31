export const metadata = {
    title: 'Blog - AI Assistant Insights & Updates',
    description: 'Stay updated with the latest insights, tips, and news about AI customer support, automation, and technology trends.',
    keywords: ['AI blog', 'customer support blog', 'AI automation', 'technology insights', 'AI trends'],
    openGraph: {
        title: 'Blog - AI Assistant Insights & Updates',
        description: 'Stay updated with the latest insights, tips, and news about AI customer support, automation, and technology trends.',
        type: 'website',
        url: 'https://your-domain.com/blog',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'AI Assistant Blog',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Blog - AI Assistant Insights & Updates',
        description: 'Stay updated with the latest insights, tips, and news about AI customer support, automation, and technology trends.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

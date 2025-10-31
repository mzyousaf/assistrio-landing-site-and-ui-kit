import { blogPosts } from '../../../data/landingData';

interface BlogPostLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps) {
    const { slug } = await params;
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} - AI Assistant Blog`,
        description: post.content.substring(0, 160),
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.content.substring(0, 160),
            type: 'article',
            url: `https://your-domain.com/blog/${slug}`,
            images: [
                {
                    url: post.image,
                    width: 800,
                    height: 400,
                    alt: post.title,
                },
            ],
            authors: [post.author],
            publishedTime: post.publishedAt,
        },
        x: {
            card: 'summary_large_image',
            title: post.title,
            description: post.content.substring(0, 160),
            images: [post.image],
        },
        alternates: {
            canonical: `https://your-domain.com/blog/${slug}`,
        },
    };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
    return <>{children}</>;
}

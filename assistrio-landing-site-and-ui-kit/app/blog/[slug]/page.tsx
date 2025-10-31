'use client';

import { useState, use } from 'react';
import Section from '../../../components/Section';
import ReadingProgress from '../../../components/ReadingProgress';
import TableOfContents from '../../../components/TableOfContents';
import Comments from '../../../components/Comments';
import { ShareButton, AuthorAvatar, StarRating } from '@/components/ui';
import { ArticleMeta, AuthorBio, ArticleTags, RelatedPostCard, ArticleImage } from '@/components/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogPosts } from '../../../data/landingData';

// Related posts with enhanced data
const relatedPosts = [
    {
        title: "Measuring AI Success: Key Metrics Every Business Should Track",
        slug: "measuring-ai-success-key-metrics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        readTime: "10 min read",
        category: "Analytics"
    },
    {
        title: "Integrating AI with Your Existing Customer Support Tools",
        slug: "integrating-ai-existing-customer-support-tools",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
        readTime: "15 min read",
        category: "Integration"
    },
    {
        title: "The Psychology of AI-Human Interaction in Customer Service",
        slug: "psychology-ai-human-interaction-customer-service",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
        readTime: "14 min read",
        category: "UX Design"
    }
];

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function BlogPost({ params }: BlogPostPageProps) {
    const [copied, setCopied] = useState(false);
    const { slug } = use(params);
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        notFound();
    }

    const handleShare = async (platform: string) => {
        const url = window.location.href;
        const title = post.title;

        switch (platform) {
            case 'x':
                window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'copy':
                try {
                    await navigator.clipboard.writeText(url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                } catch {
                    // Failed to copy to clipboard
                }
                break;
        }
    };

    return (
        <>
            <ReadingProgress />
            <Section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                        {/* Breadcrumb */}
                        <div className="mb-6 sm:mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-6 sm:mb-8 group transition-all duration-200"
                            >
                                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Blog
                            </Link>
                        </div>

                        <ArticleMeta
                            category={post.category}
                            readTime={post.readTime}
                            publishedAt={post.publishedAt}
                        />

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight animate-slide-in-left">
                            <span className="bg-gradient-to-r from-gray-900 via-brand-600 to-blue-600 bg-clip-text  dark:text-white text-transparent">
                                {post.title}
                            </span>
                        </h1>

                        {/* Author Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-in-right">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <AuthorAvatar
                                    src={post.authorImage}
                                    alt={post.author}
                                    size="small"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg sm:text-xl">{post.author}</p>
                                    <p className="text-brand-600 font-medium text-sm sm:text-base">{post.authorRole}</p>
                                    <StarRating size="small" />
                                </div>
                            </div>

                            {/* Social Share Preview */}
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <span className="text-xs sm:text-sm text-gray-500">Share:</span>
                                <div className="flex space-x-1.5 sm:space-x-2">
                                    <ShareButton
                                        platform="x"
                                        onClick={() => handleShare('x')}
                                        className="p-1.5 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                        title="Share on X"
                                    />
                                    <ShareButton
                                        platform="linkedin"
                                        onClick={() => handleShare('linkedin')}
                                        className="p-1.5 sm:p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                                        title="Share on LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <ArticleImage
                                src={post.image}
                                alt={post.title}
                                readTime={post.readTime}
                                category={post.category}
                            />

                            {/* Enhanced Article Content */}
                            <article
                                className="prose prose-lg sm:prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-base sm:prose-li:text-lg prose-li:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-brand-50 prose-blockquote:pl-4 sm:prose-blockquote:pl-6 prose-blockquote:py-3 sm:prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:px-1.5 sm:prose-code:px-2 prose-code:py-0.5 sm:prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg sm:prose-pre:rounded-xl prose-pre:p-4 sm:prose-pre:p-6 prose-pre:overflow-x-auto"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <ArticleTags
                                tags={post.tags}
                                onShare={handleShare}
                                copied={copied}
                            />
                        </div>

                        {/* Enhanced Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20 lg:top-24 space-y-4 lg:space-y-6">
                                {/* Table of Contents */}
                                <TableOfContents content={post.content} />

                                {/* Article Stats */}
                                <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-brand-200">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        Article Stats
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs sm:text-sm text-gray-600">Reading Time</span>
                                            <span className="font-semibold text-gray-900 text-xs sm:text-sm">{post.readTime}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs sm:text-sm text-gray-600">Category</span>
                                            <span className="font-semibold text-brand-600 text-xs sm:text-sm">{post.category}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs sm:text-sm text-gray-600">Published</span>
                                            <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs sm:text-sm text-gray-600">Tags</span>
                                            <span className="font-semibold text-gray-900 text-xs sm:text-sm">{post.tags.length}</span>
                                        </div>
                                    </div>
                                </div>

                                <AuthorBio
                                    authorImage={post.authorImage}
                                    author={post.author}
                                    authorRole={post.authorRole}
                                    authorBio={post.authorBio}
                                />

                                {/* Newsletter Signup */}
                                <div className="bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Stay Updated
                                    </h3>
                                    <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">Get the latest AI insights delivered to your inbox.</p>
                                    <div className="space-y-2 sm:space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                                        />
                                        <button className="w-full bg-white text-brand-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm">
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-xs opacity-75 mt-2">Join 10,000+ professionals. Unsubscribe anytime.</p>
                                </div>

                                {/* Quick Share */}
                                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                        Quick Share
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                        <ShareButton
                                            platform="x"
                                            onClick={() => handleShare('x')}
                                            title="Share on X (Twitter)"
                                            className="flex flex-col items-center justify-center space-y-1.5 bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-200 min-h-[70px] sm:min-h-[80px] group"
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </ShareButton>
                                        <ShareButton
                                            platform="linkedin"
                                            onClick={() => handleShare('linkedin')}
                                            title="Share on LinkedIn"
                                            className="flex flex-col items-center justify-center space-y-1.5 bg-[#0077B5] hover:bg-[#006399] text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-200 min-h-[70px] sm:min-h-[80px] group"
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            {/* <span className="text-xs sm:text-sm font-medium">LinkedIn</span> */}
                                        </ShareButton>
                                        <ShareButton
                                            platform="facebook"
                                            onClick={() => handleShare('facebook')}
                                            title="Share on Facebook"
                                            className="flex flex-col items-center justify-center space-y-1.5 bg-[#1877F2] hover:bg-[#166FE5] text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-200 min-h-[70px] sm:min-h-[80px] group"
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </ShareButton>
                                        <ShareButton
                                            platform="copy"
                                            onClick={() => handleShare('copy')}
                                            title={copied ? 'Link copied!' : 'Copy link'}
                                            className={`flex flex-col items-center justify-center space-y-1.5 px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-200 min-h-[70px] sm:min-h-[80px] group ${copied
                                                ? 'bg-green-500 hover:bg-green-600 text-white'
                                                : 'bg-gray-600 hover:bg-gray-700 text-white'
                                                }`}
                                        >
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs sm:text-sm font-medium">{copied ? 'Copied!' : 'Copy'}</span>
                                        </ShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Comments Section */}
            <Section className="bg-white">
                <Comments postId={post.id.toString()} postTitle={post.title} />
            </Section>

            {/* Enhanced Related Posts */}
            <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Continue Reading</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover more insights and expert knowledge to help you stay ahead in the AI revolution.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {relatedPosts.map((relatedPost, index) => (
                            <RelatedPostCard
                                key={index}
                                title={relatedPost.title}
                                slug={relatedPost.slug}
                                image={relatedPost.image}
                                readTime={relatedPost.readTime}
                                category={relatedPost.category}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-8 sm:mt-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-500 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            View All Articles
                        </Link>
                    </div>
                </div>
            </Section>

        </>
    );
}

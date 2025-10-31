import Link from 'next/link';
import Image from 'next/image';
import { BaseBadge, BaseMetaInfo, BaseStats } from '../ui';
import { ArticleTags, ArticleImage } from '../content';

interface ArticleFeaturedSectionProps {
    title: string;
    featuredItem: {
        title: string;
        slug: string;
        excerpt: string;
        image: string;
        category?: string;
        tags?: string[];
        author?: string;
        authorRole?: string;
        authorImage?: string;
        publishedAt?: string;
        readTime?: string;
        [key: string]: unknown;
    };
    className?: string;
}

export default function ArticleFeaturedSection({
    title,
    featuredItem,
    className = ''
}: ArticleFeaturedSectionProps) {
    if (!featuredItem) return null;

    return (
        <div className={`mb-12 sm:mb-16 ${className}`}>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-fade-in">{title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-teal-100 dark:border-slate-700 animate-scale-in">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-slide-in-left">
                            {featuredItem.category && <BaseBadge variant="category" content={featuredItem.category} />}
                            <BaseBadge variant="featured" content="Featured" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 group-hover:text-blue-500 dark:group-hover:text-brand-400 transition-colors duration-300 animate-slide-in-right">
                            <Link href={`/blog/${featuredItem.slug}`}>
                                {featuredItem.title}
                            </Link>
                        </h3>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed animate-fade-in">
                            {featuredItem.excerpt}
                        </p>

                        {featuredItem.tags && featuredItem.tags.length > 0 && (
                            <ArticleTags
                                tags={featuredItem.tags}
                                onShare={() => {
                                    // Handle share functionality
                                }}
                                copied={false}
                                className="mb-4 sm:mb-6 animate-scale-in"
                            />
                        )}

                        <BaseMetaInfo
                            variant="author"
                            author={featuredItem.author}
                            authorRole={featuredItem.authorRole}
                            authorImage={featuredItem.authorImage}
                            publishedAt={featuredItem.publishedAt}
                            readTime={featuredItem.readTime}
                            className="mb-6 sm:mb-8 animate-slide-in-left"
                        />

                        <BaseStats
                            variant="article"
                            readTime={featuredItem.readTime}
                            className="mb-6 sm:mb-8 animate-scale-in"
                        />
                    </div>

                    {featuredItem.readTime && featuredItem.category && (
                        <ArticleImage
                            src={featuredItem.image}
                            alt={featuredItem.title}
                            readTime={featuredItem.readTime}
                            category={featuredItem.category}
                            className="order-1 lg:order-2 animate-slide-in-right"
                        />
                    )}
                    {(!featuredItem.readTime || !featuredItem.category) && (
                        <div className="order-1 lg:order-2">
                            <Image
                                src={featuredItem.image}
                                alt={featuredItem.title}
                                width={1200}
                                height={600}
                                style={{ width: 'auto', height: 'auto' }}
                                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

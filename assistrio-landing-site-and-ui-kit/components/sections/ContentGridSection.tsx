import { ContentCard } from '../content';

interface ContentGridSectionProps {
    title: string;
    items: Array<{
        id: string | number;
        title: string;
        slug: string;
        excerpt?: string;
        description?: string;
        image?: string;
        category?: string;
        readTime?: string;
        duration?: string;
        author?: string;
        authorRole?: string;
        authorImage?: string;
        publishedAt?: string;
        lastUpdated?: string;
        date?: string;
        tags?: string[];
        metrics?: {
            automation?: string;
            satisfaction?: string;
            costSavings?: string;
            responseTime?: string;
        };
        company?: string;
        companySize?: string;
        [key: string]: unknown;
    }>;
    viewMode: 'grid' | 'list';
    type: 'blog' | 'case-study' | 'resource';
    showAll?: boolean;
    onShowAll?: () => void;
    className?: string;
}

export default function ContentGridSection({
    title,
    items,
    viewMode,
    type,
    showAll = false,
    onShowAll,
    className = ''
}: ContentGridSectionProps) {
    const displayedItems = showAll ? items : items.slice(0, 6);

    return (
        <div className={`mb-8 ${className}`}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    {title}
                </h2>
                <span className="text-sm text-gray-500">
                    {displayedItems.length} of {items.length} {type === 'blog' ? 'articles' : type === 'case-study' ? 'case studies' : 'resources'}
                </span>
            </div>

            <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" : "space-y-4 sm:space-y-6"}>
                {displayedItems.map((item) => (
                    <ContentCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.excerpt || item.description || ''}
                        image={item.image || ''}
                        category={item.category}
                        readTime={item.readTime}
                        duration={item.duration}
                        author={item.author}
                        authorRole={item.authorRole}
                        authorImage={item.authorImage}
                        publishedAt={item.publishedAt}
                        lastUpdated={item.lastUpdated}
                        date={item.date}
                        tags={item.tags}
                        slug={item.slug}
                        viewMode={viewMode}
                        type={type}
                        metrics={item.metrics}
                        company={item.company}
                        companySize={item.companySize}
                        logo={typeof item.logo === "string" ? item.logo : undefined}
                        difficulty={typeof item.difficulty === "string" ? item.difficulty : undefined}
                        downloadCount={typeof item.downloadCount === "string" ? item.downloadCount : undefined}
                        attendees={typeof item.attendees === "string" ? item.attendees : undefined}
                    />
                ))}
            </div>

            {items.length === 0 && (
                <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No {type === 'blog' ? 'articles' : type === 'case-study' ? 'case studies' : 'resources'} found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {/* Load More Button */}
            {items.length > 6 && onShowAll && (
                <div className="text-center mt-12">
                    <button
                        onClick={onShowAll}
                        className="bg-brand-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {showAll ? 'Show Less' : `Load More ${type === 'blog' ? 'Articles' : type === 'case-study' ? 'Case Studies' : 'Resources'} (${items.length - 6} more)`}
                    </button>
                </div>
            )}
        </div>
    );
}

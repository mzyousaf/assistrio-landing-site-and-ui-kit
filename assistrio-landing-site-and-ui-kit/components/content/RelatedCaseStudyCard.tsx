import Link from 'next/link';
import Image from 'next/image';

interface RelatedCaseStudyCardProps {
    id: string | number;
    title: string;
    industry: string;
    challenge: string;
    duration: string;
    readTime: string;
    image: string;
    slug: string;
    className?: string;
}

export default function RelatedCaseStudyCard({
    title,
    industry,
    challenge,
    duration,
    readTime,
    image,
    slug,
    className = ''
}: RelatedCaseStudyCardProps) {
    return (
        <article className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${className}`}>
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-700 shadow-sm">
                        {industry}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                    <Link href={`/case-studies/${slug}`}>
                        {title}
                    </Link>
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    <strong>Challenge:</strong> {challenge}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{duration}</span>
                    <span>{readTime}</span>
                </div>
            </div>
        </article>
    );
}

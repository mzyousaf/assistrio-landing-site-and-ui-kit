import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDifficultyColor } from '../../utils/resourceHelpers';

interface RelatedResourceCardProps {
    resource: {
        slug: string;
        title: string;
        description: string;
        image: string;
        type: string;
        difficulty?: string;
        readTime?: string;
        duration?: string;
        downloadCount?: string;
        attendees?: string;
    };
    className?: string;
}

const RelatedResourceCard: React.FC<RelatedResourceCardProps> = ({
    resource,
    className = "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
}) => {
    return (
        <Link
            href={`/resources/${resource.slug}`}
            className={className}
        >
            <div className="relative overflow-hidden">
                <Image
                    src={resource.image}
                    alt={resource.title}
                    width={400}
                    height={192}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                        {resource.type}
                    </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm text-xs font-medium text-white">
                        {resource.readTime || resource.duration || 'Free'}
                    </span>
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {resource.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {resource.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {resource.difficulty && (
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(resource.difficulty)}`}>
                                {resource.difficulty}
                            </span>
                        )}
                        {resource.downloadCount && (
                            <span className="text-xs text-gray-500">
                                {resource.downloadCount} downloads
                            </span>
                        )}
                        {resource.attendees && (
                            <span className="text-xs text-gray-500">
                                {resource.attendees} attendees
                            </span>
                        )}
                    </div>
                    <svg className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default RelatedResourceCard;

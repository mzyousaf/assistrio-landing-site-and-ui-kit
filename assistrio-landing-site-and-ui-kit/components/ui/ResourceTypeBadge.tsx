import React from 'react';
import { FaBook, FaFileAlt, FaVideo, FaCog, FaAward } from 'react-icons/fa';

interface ResourceTypeBadgeProps {
    type: string;
    difficulty?: string;
    className?: string;
}

const ResourceTypeBadge: React.FC<ResourceTypeBadgeProps> = ({
    type,
    difficulty,
    className = "flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
}) => {
    const getTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'guide':
                return <FaBook className="w-6 h-6" />;
            case 'whitepaper':
                return <FaFileAlt className="w-6 h-6" />;
            case 'webinar':
                return <FaVideo className="w-6 h-6" />;
            case 'tool':
                return <FaCog className="w-6 h-6" />;
            default:
                return <FaBook className="w-6 h-6" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type.toLowerCase()) {
            case 'guide': return 'from-blue-500 to-cyan-500';
            case 'whitepaper': return 'from-teal-500 to-blue-500';
            case 'webinar': return 'from-cyan-500 to-teal-500';
            case 'tool': return 'from-blue-600 to-teal-600';
            default: return 'from-blue-500 to-teal-500';
        }
    };

    const getDifficultyColor = (difficulty?: string) => {
        switch (difficulty?.toLowerCase()) {
            case 'beginner': return 'bg-green-500';
            case 'intermediate': return 'bg-yellow-500';
            case 'advanced': return 'bg-red-500';
            default: return 'bg-blue-500';
        }
    };

    return (
        <div className={className}>
            <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${getTypeColor(type)} text-white text-xs sm:text-sm font-semibold shadow-lg`}>
                {getTypeIcon(type)}
                <span className="ml-1.5 sm:ml-2 capitalize">{type}</span>
            </div>
            {difficulty && (
                <div className={`inline-flex items-center px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getDifficultyColor(difficulty)} shadow-lg`}>
                    <FaAward className="w-3 h-3 mr-1 sm:mr-1.5" />
                    {difficulty}
                </div>
            )}
        </div>
    );
};

export default ResourceTypeBadge;

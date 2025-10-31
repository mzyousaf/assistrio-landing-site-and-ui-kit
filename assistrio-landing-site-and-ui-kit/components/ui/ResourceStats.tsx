import React from 'react';

interface ResourceStatsProps {
    resource: {
        type: string;
        duration?: string;
        attendees?: string;
        fileSize?: string;
        downloadCount?: string;
    };
    className?: string;
}

const ResourceStats: React.FC<ResourceStatsProps> = ({
    resource,
    className = "grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
}) => {
    return (
        <div className={className}>
            {resource.type === 'webinar' ? (
                <>
                    <div className="group bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">{resource.duration}</div>
                        <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Duration</div>
                    </div>
                    <div className="group bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg border border-teal-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600 mb-1 group-hover:text-teal-700 transition-colors">{resource.attendees}</div>
                        <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Attendees</div>
                    </div>
                </>
            ) : (
                <>
                    <div className="group bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">{resource.fileSize || '2.4 MB'}</div>
                        <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">File Size</div>
                    </div>
                    <div className="group bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg border border-teal-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600 mb-1 group-hover:text-teal-700 transition-colors">{resource.downloadCount}</div>
                        <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Downloads</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ResourceStats;

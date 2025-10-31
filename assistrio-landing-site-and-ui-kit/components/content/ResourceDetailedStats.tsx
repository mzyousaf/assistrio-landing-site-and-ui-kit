import React from 'react';
import { FaClock, FaDownload, FaUsers, FaCalendarAlt, FaUser } from 'react-icons/fa';

interface ResourceDetailedStatsProps {
    resource: {
        type: string;
        duration?: string;
        attendees?: string;
        fileSize?: string;
        downloadCount?: string;
        date?: string;
        presenter?: string;
        readTime?: string;
        lastUpdated?: string;
    };
    className?: string;
}

// Helper to apply dark mode style classes
const cardBase =
    "rounded-xl p-4 sm:p-6 border transition-colors " +
    "bg-gradient-to-br ";
const textTitle =
    "text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-200";
const textNumber =
    "text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100";
const textString =
    "text-sm font-bold text-gray-900 dark:text-gray-100 truncate";

const ResourceDetailedStats: React.FC<ResourceDetailedStatsProps> = ({
    resource,
    className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
}) => {
    if (resource.type === 'webinar') {
        return (
            <div className={className}>
                <div className={
                    cardBase +
                    "from-blue-50 to-cyan-50 border-blue-100 " +
                    "dark:from-blue-900 dark:to-cyan-900 dark:border-blue-800"
                }>
                    <div className="flex items-center mb-3">
                        <div className={
                            "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 " +
                            "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                        }>
                            <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className={textTitle}>Duration</span>
                    </div>
                    <div className={textNumber}>{resource.duration}</div>
                </div>
                <div className={
                    cardBase +
                    "from-teal-50 to-blue-50 border-teal-100 " +
                    "dark:from-teal-900 dark:to-blue-900 dark:border-teal-800"
                }>
                    <div className="flex items-center mb-3">
                        <div className={
                            "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-blue-500 " +
                            "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                        }>
                            <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className={textTitle}>Attendees</span>
                    </div>
                    <div className={textNumber}>{resource.attendees}</div>
                </div>
                <div className={
                    cardBase +
                    "from-purple-50 to-pink-50 border-purple-100 " +
                    "dark:from-purple-900 dark:to-pink-900 dark:border-purple-800"
                }>
                    <div className="flex items-center mb-3">
                        <div className={
                            "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 " +
                            "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                        }>
                            <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className={textTitle}>Date</span>
                    </div>
                    <div className={textNumber}>{resource.date}</div>
                </div>
                <div className={
                    cardBase +
                    "from-green-50 to-emerald-50 border-green-100 " +
                    "dark:from-green-900 dark:to-emerald-900 dark:border-green-800"
                }>
                    <div className="flex items-center mb-3">
                        <div className={
                            "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 " +
                            "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                        }>
                            <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className={textTitle}>Presenter</span>
                    </div>
                    <div className={textString}>{resource.presenter}</div>
                </div>
            </div>
        );
    }

    return (
        <div className={className}>
            <div className={
                cardBase +
                "from-blue-50 to-cyan-50 border-blue-100 " +
                "dark:from-blue-900 dark:to-cyan-900 dark:border-blue-800"
            }>
                <div className="flex items-center mb-3">
                    <div className={
                        "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 " +
                        "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                    }>
                        <FaDownload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={textTitle}>File Size</span>
                </div>
                <div className={textNumber}>{resource.fileSize || '2.4 MB'}</div>
            </div>
            <div className={
                cardBase +
                "from-teal-50 to-blue-50 border-teal-100 " +
                "dark:from-teal-900 dark:to-blue-900 dark:border-teal-800"
            }>
                <div className="flex items-center mb-3">
                    <div className={
                        "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-blue-500 " +
                        "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                    }>
                        <FaDownload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={textTitle}>Downloads</span>
                </div>
                <div className={textNumber}>{resource.downloadCount}</div>
            </div>
            <div className={
                cardBase +
                "from-purple-50 to-pink-50 border-purple-100 " +
                "dark:from-purple-900 dark:to-pink-900 dark:border-purple-800"
            }>
                <div className="flex items-center mb-3">
                    <div className={
                        "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 " +
                        "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                    }>
                        <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={textTitle}>Read Time</span>
                </div>
                <div className={textNumber}>{resource.readTime}</div>
            </div>
            <div className={
                cardBase +
                "from-green-50 to-emerald-50 border-green-100 " +
                "dark:from-green-900 dark:to-emerald-900 dark:border-green-800"
            }>
                <div className="flex items-center mb-3">
                    <div className={
                        "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 " +
                        "rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                    }>
                        <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className={textTitle}>Updated</span>
                </div>
                <div className={textNumber}>{resource.lastUpdated || resource.date}</div>
            </div>
        </div>
    );
};

export default ResourceDetailedStats;

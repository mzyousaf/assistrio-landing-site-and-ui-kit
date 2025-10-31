import React from 'react';
import { FaPlay, FaDownload, FaBookmark, FaHeart, FaShare } from 'react-icons/fa';
import ShareMenu from './ShareMenu';

interface ResourceActionButtonsProps {
    resource: {
        type: string;
        title: string;
    };
    isBookmarked: boolean;
    isLiked: boolean;
    showShareMenu: boolean;
    copied: boolean;
    onBookmark: () => void;
    onLike: () => void;
    onShare: (platform: string) => void;
    onToggleShareMenu: () => void;
    className?: string;
}

const ResourceActionButtons: React.FC<ResourceActionButtonsProps> = ({
    resource,
    isBookmarked,
    isLiked,
    showShareMenu,
    copied,
    onBookmark,
    onLike,
    onShare,
    onToggleShareMenu,
    className = "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
}) => {
    return (
        <div className={className}>
            {/* Main CTA Button */}
            <button className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {resource.type?.toLowerCase() === 'webinar' ? (
                    <>
                        <FaPlay className="w-5 h-5 mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300 text-white" />
                        <span className="relative z-10 whitespace-nowrap">Watch Now</span>
                    </>
                ) : (
                    <>
                        <FaDownload className="w-5 h-5 mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-white" />
                        <span className="relative z-10 whitespace-nowrap">Download Free</span>
                    </>
                )}
            </button>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                {/* Save for Later */}
                <button
                    onClick={onBookmark}
                    className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 ${isBookmarked
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-200'
                        }`}
                    title={isBookmarked ? "Saved for later" : "Save for later"}
                >
                    <FaBookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isBookmarked ? 'animate-bounce' : 'group-hover:scale-110'}`} />
                    <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                        {isBookmarked ? 'Saved' : 'Save'}
                    </span>
                </button>

                {/* Like */}
                <button
                    onClick={onLike}
                    className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 ${isLiked
                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200'
                        }`}
                    title={isLiked ? "Liked" : "Like this resource"}
                >
                    <FaHeart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isLiked ? 'animate-pulse' : 'group-hover:scale-110'}`} />
                    <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                        {isLiked ? 'Liked' : 'Like'}
                    </span>
                </button>

                {/* Share */}
                <div className="relative">
                    <button
                        onClick={onToggleShareMenu}
                        className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-200"
                        title="Share this resource"
                    >
                        <FaShare className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs sm:text-sm font-medium hidden sm:inline">Share</span>
                    </button>

                    <ShareMenu
                        show={showShareMenu}
                        onClose={() => onToggleShareMenu()}
                        onShare={onShare}
                        copied={copied}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResourceActionButtons;

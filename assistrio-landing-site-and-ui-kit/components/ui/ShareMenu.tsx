import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ShareMenuProps {
    show: boolean;
    onClose: () => void;
    onShare: (platform: string) => void;
    copied: boolean;
    className?: string;
}

const ShareMenu: React.FC<ShareMenuProps> = ({
    show,
    onClose,
    onShare,
    copied,
    className = "absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-[9999] min-w-[200px]"
}) => {
    if (!show) return null;

    return (
        <>
            {/* Backdrop for outside click */}
            <div
                className="fixed inset-0 z-[9998]"
                onClick={onClose}
            ></div>

            {/* Share Menu */}
            <div className={className}>
                <div className="flex items-center space-x-1 px-2">
                    <button
                        onClick={() => onShare('x')}
                        className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors group"
                        title="Share on X"
                    >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onShare('linkedin')}
                        className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors group"
                        title="Share on LinkedIn"
                    >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onShare('facebook')}
                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                        title="Share on Facebook"
                    >
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onShare('copy')}
                        className={`p-3 rounded-lg transition-colors group ${copied
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-600 text-white hover:bg-gray-700'
                            }`}
                        title={copied ? "Copied!" : "Copy Link"}
                    >
                        {copied ? (
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <FaExternalLinkAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShareMenu;

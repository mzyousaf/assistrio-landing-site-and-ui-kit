import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchResultsSectionProps {
    searchQuery: string;
    resultCount: number;
    children: React.ReactNode;
    className?: string;
}

const SearchResultsSection: React.FC<SearchResultsSectionProps> = ({
    searchQuery,
    resultCount,
    children,
    className = ""
}) => {
    return (
        <div className={`mb-16 ${className}`}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Search Results for &quot;{searchQuery}&quot; ({resultCount} found)
            </h2>
            <div className="space-y-4">
                {resultCount > 0 ? (
                    children
                ) : (
                    <div className="text-center py-12">
                        <FaSearch className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
                        <p className="text-gray-600 dark:text-gray-300">Try searching with different keywords or browse our help categories below.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsSection;

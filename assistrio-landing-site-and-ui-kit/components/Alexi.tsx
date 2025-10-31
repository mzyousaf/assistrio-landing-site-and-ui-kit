import React from 'react';

interface AlexiProps {
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'light' | 'dark';
    name?: string;
}

const Alexi: React.FC<AlexiProps> = ({ className = '', children, variant = 'default', name = 'Alexi' }) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'light':
                return 'text-white hover:text-gray-200';
            case 'dark':
                return 'text-gray-900 hover:text-gray-700';
            default:
                return 'text-brand-600 hover:text-brand-700';
        }
    };

    return (
        <span
            className={`${getVariantStyles()} transition-colors duration-200 cursor-help relative group ${className}`}
        >
            {children || name}
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Your AI Customer Success Assistant
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></span>
            </span>
        </span>
    );
};

export default Alexi;

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}

export default function TabButton({ label, isActive, onClick, className = '' }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 font-semibold transition-colors ${isActive
                ? 'text-brand-600 border-b-2 border-brand-600'
                : 'text-gray-600 hover:text-gray-900'
                } ${className}`}
        >
            {label}
        </button>
    );
}

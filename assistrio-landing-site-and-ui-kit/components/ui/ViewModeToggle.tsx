interface ViewModeToggleProps {
    viewMode: string;
    onViewModeChange: (mode: string) => void;
    className?: string;
}

export default function ViewModeToggle({
    viewMode,
    onViewModeChange,
    className = ''
}: ViewModeToggleProps) {
    return (
        <div className={`flex rounded-lg border border-gray-200 bg-white shadow-sm h-[38px] inline-flex ${className}`}>
            <button
                onClick={() => onViewModeChange("grid")}
                className={`flex-1 p-2 rounded-l-lg transition-colors ${viewMode === "grid" ? "bg-brand-500 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </button>
            <button
                onClick={() => onViewModeChange("list")}
                className={`flex-1 p-2 rounded-r-lg transition-colors ${viewMode === "list" ? "bg-brand-500 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
}

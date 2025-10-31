interface LegalDocumentBadgeProps {
    className?: string;
}

export default function LegalDocumentBadge({ className = "" }: LegalDocumentBadgeProps) {
    return (
        <div className={`inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 ${className}`}>
            <svg className="w-5 h-5 text-brand-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Legal Document</span>
        </div>
    );
}

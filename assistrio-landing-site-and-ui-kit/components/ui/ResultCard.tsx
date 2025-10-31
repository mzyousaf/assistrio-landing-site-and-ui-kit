interface ResultCardProps {
    result: string;
    className?: string;
}

export default function ResultCard({ result, className = '' }: ResultCardProps) {
    return (
        <div className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
            <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="dark:text-gray-300 font-medium">{result}</p>
            </div>
        </div>
    );
}

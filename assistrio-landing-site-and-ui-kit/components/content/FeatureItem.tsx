interface FeatureItemProps {
    text: string;
    highlighted?: boolean;
    delay?: number;
    className?: string;
}

export default function FeatureItem({
    text,
    highlighted = false,
    delay = 0,
    className = ''
}: FeatureItemProps) {
    return (
        <div
            className={`flex items-center text-gray-700 font-medium transition-all duration-500 transform hover:scale-105 ${highlighted ? 'bg-blue-100 px-3 py-1 rounded' : ''
                } ${className}`}
            style={{
                animationName: 'fadeInUp, bounce',
                animationDuration: '0.3s, 1s',
                animationTimingFunction: 'ease-out, ease-in-out',
                animationFillMode: 'forwards, none',
                animationIterationCount: '1, infinite',
                animationDelay: `${delay}ms, ${delay + 300}ms`
            }}
        >
            <svg
                className="w-5 h-5 text-green-400 mr-2 transition-all duration-300 hover:scale-110 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ animationDelay: `${delay + 0}ms` }}
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
            <span className="transition-colors duration-300 hover:text-gray-900">
                {text}
            </span>
        </div>
    );
}

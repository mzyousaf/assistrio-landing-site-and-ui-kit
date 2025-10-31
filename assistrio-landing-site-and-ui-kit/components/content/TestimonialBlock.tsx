interface TestimonialBlockProps {
    testimonial: string;
    author: string;
    className?: string;
}

export default function TestimonialBlock({ testimonial, author, className = '' }: TestimonialBlockProps) {
    return (
        <div className={`bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl p-8 ${className}`}>
            <div className="flex items-start">
                <svg className="w-8 h-8 text-brand-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div>
                    <p className="text-xl text-gray-700 italic mb-4">&quot;{testimonial}&quot;</p>
                    <p className="text-lg font-semibold text-gray-900">— {author}</p>
                </div>
            </div>
        </div>
    );
}

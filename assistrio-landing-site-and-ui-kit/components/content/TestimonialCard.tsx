import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
    // Home page variant props
    avatarText?: string;
    name?: string;
    role?: string;
    quote?: string;
    animationDelay?: string;

    // Case study variant props
    testimonial?: string;
    author?: string;

    // Common props
    variant?: 'home' | 'case-study';
    className?: string;
}

export default function TestimonialCard({
    // Home page props
    avatarText,
    name,
    role,
    quote,
    animationDelay = '0s',

    // Case study props
    testimonial,
    author,

    // Common props
    variant = 'home',
    className = ''
}: TestimonialCardProps) {
    // Case study variant (original design)
    if (variant === 'case-study') {
        return (
            <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200 dark:border-slate-700 dark:hover:border-brand-500 group ${className}`}>
                <div className="relative">
                    {/* Quote decorations */}
                    <FaQuoteLeft className="absolute -top-2 -left-2 w-6 h-6 text-blue-200 dark:text-brand-400 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <FaQuoteRight className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-200 dark:text-brand-400 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

                    <div className="flex items-start">

                        <div className="pl-5 flex-1">
                            <p className="text-gray-700 dark:text-gray-300 italic mb-3 text-base sm:text-lg leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                                {testimonial}
                            </p>
                            <div className="flex items-center">
                                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-teal-500 dark:from-brand-400 dark:to-cyan-400 rounded-full mr-3"></div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                                    — {author}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Home page variant (new design with stars)
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-brand-500 group transform hover:-translate-y-1 h-full flex flex-col ${className}`}
            style={{ animationDelay }}
        >
            <div className="relative flex-1 flex flex-col">
                {/* Star rating */}
                <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-brand-900/30 dark:to-brand-900/30 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="w-4 h-4 text-blue-500 dark:text-brand-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 pl-10 flex-1">
                        {quote}
                    </p>
                </div>

                {/* Author info */}
                <div className="flex items-center mt-auto">
                    <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                            {avatarText}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                            {name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
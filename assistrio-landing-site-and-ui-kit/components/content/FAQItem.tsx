import { ReactNode } from 'react';

interface FAQItemProps {
    question: string;
    answer: string | ReactNode;
    animationDelay?: string;
    className?: string;
}

export default function FAQItem({
    question,
    answer,
    animationDelay,
    className = '',
}: FAQItemProps) {
    const baseClasses = 'bg-gray-50 p-6 rounded-xl animate-fade-in-up';

    const classes = `${baseClasses} ${className}`;

    return (
        <div className={classes} style={animationDelay ? { animationDelay } : undefined}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
            <div className="text-gray-600">
                {answer}
            </div>
        </div>
    );
}

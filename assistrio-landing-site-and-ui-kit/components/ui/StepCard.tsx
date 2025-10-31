import { ReactNode } from 'react';

interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
    features: string[];
    visualCard: ReactNode;
    reverseOrder?: boolean;
    className?: string;
}

export default function StepCard({
    stepNumber,
    title,
    description,
    features,
    visualCard,
    reverseOrder = false,
    className = '',
}: StepCardProps) {
    const contentClasses = reverseOrder ? 'order-1 md:order-2' : '';
    const visualClasses = reverseOrder ? 'order-2 md:order-1' : '';

    return (
        <div className={`grid md:grid-cols-2 gap-12 items-center ${className}`}>
            <div className={contentClasses}>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                        {stepNumber}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                </div>
                <div className="text-lg text-gray-600 mb-6">
                    {description}
                </div>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-teal mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={visualClasses}>
                {visualCard}
            </div>
        </div>
    );
}

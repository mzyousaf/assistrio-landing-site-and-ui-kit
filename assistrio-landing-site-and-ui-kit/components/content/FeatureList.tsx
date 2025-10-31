import React from 'react';

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeatureListProps {
    title: string;
    features: FeatureItem[];
    className?: string;
}

export default function FeatureList({ title, features, className = '' }: FeatureListProps) {
    return (
        <div className={className}>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">{title}</h3>
            <div className="space-y-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

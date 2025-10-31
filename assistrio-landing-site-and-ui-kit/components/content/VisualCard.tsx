import { ReactNode } from 'react';

interface VisualCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function VisualCard({
    icon,
    title,
    description,
    className = '',
}: VisualCardProps) {
    return (
        <div className={`bg-white border border-gray-200 rounded-xl p-8 shadow-lg ${className}`}>
            <div className="text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}

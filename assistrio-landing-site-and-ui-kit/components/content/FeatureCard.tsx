import { ReactNode } from 'react';
import { Button } from '../ui';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    tag?: string;
    animationDelay?: string;
    showButton?: boolean;
    buttonText?: string;
    buttonIcon?: ReactNode;
    onButtonClick?: () => void;
    additionalContent?: ReactNode;
    className?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    tag,
    animationDelay,
    showButton = false,
    buttonText,
    buttonIcon,
    onButtonClick,
    additionalContent,
    className = '',
}: FeatureCardProps) {
    const baseClasses = 'text-center group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200';
    const animationClasses = animationDelay ? 'animate-fade-in-up' : '';

    const classes = `${baseClasses} ${animationClasses} ${className}`;

    return (
        <div className={classes} style={animationDelay ? { animationDelay } : undefined}>
            <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-200 transition-colors duration-200">
                {icon}
            </div>

            <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{title}</h3>

            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

            {showButton && (
                <div className="mb-4">
                    <Button
                        onClick={onButtonClick}
                        variant="primary"
                        size="sm"
                        className="mx-auto"
                    >
                        {buttonIcon && <span className="flex items-center">{buttonIcon}</span>}
                        {buttonText && <span>{buttonText}</span>}
                    </Button>
                </div>
            )}

            {additionalContent}

            {tag && (
                <div className="text-sm text-brand-600 font-medium">{tag}</div>
            )}
        </div>
    );
}

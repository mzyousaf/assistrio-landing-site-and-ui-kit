'use client';

import { ReactNode } from 'react';
import { useFadeInOnScroll, useSlideIn, useStaggeredAnimation } from '@/hooks/useAnimations';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
}

export function FadeIn({ children, className = '', threshold = 0.1 }: FadeInProps) {
    const { ref, isVisible } = useFadeInOnScroll(threshold);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${className}`}
        >
            {children}
        </div>
    );
}

interface SlideInProps {
    children: ReactNode;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down';
}

export function SlideIn({ children, className = '', direction = 'up' }: SlideInProps) {
    const { ref, isVisible } = useSlideIn(direction);

    const getTransform = () => {
        switch (direction) {
            case 'left': return isVisible ? 'translate-x-0' : '-translate-x-8';
            case 'right': return isVisible ? 'translate-x-0' : 'translate-x-8';
            case 'down': return isVisible ? 'translate-y-0' : '-translate-y-8';
            default: return isVisible ? 'translate-y-0' : 'translate-y-8';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? `opacity-100 ${getTransform()}`
                    : 'opacity-0'
                } ${className}`}
        >
            {children}
        </div>
    );
}

interface StaggeredContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggeredContainer({ children, className = '', staggerDelay = 100 }: StaggeredContainerProps) {
    const { ref, isVisible } = useStaggeredAnimation(staggerDelay);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${className}`}
        >
            {children}
        </div>
    );
}

interface StaggeredItemProps {
    children: ReactNode;
    className?: string;
    index: number;
    staggerDelay?: number;
    isVisible: boolean;
}

export function StaggeredItem({ children, className = '', index, staggerDelay = 100, isVisible }: StaggeredItemProps) {
    const delay = index * staggerDelay;

    return (
        <div
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
}

export function ScaleIn({ children, className = '', threshold = 0.1 }: ScaleInProps) {
    const { ref, isVisible } = useFadeInOnScroll(threshold);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                } ${className}`}
        >
            {children}
        </div>
    );
}

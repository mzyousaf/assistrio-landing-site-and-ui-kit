import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    className?: string;
    as?: React.ElementType;
}

const containerSizes = {
    sm: 'max-w-3xl',      // For narrow content like forms, testimonials text
    md: 'max-w-4xl',      // For standard content sections
    lg: 'max-w-6xl',      // For wide content like feature grids, testimonials
    xl: 'max-w-7xl',      // For very wide content like industry grids, comparison tables
    '2xl': 'max-w-8xl',   // For full-width layouts with constrained content
    full: 'max-w-none'    // For truly full-width content
};

export default function Container({
    children,
    size = 'lg',
    className = '',
    as: Component = 'div'
}: ContainerProps) {
    const ComponentType = Component as React.ElementType;

    return (
        <ComponentType
            className={cn(
                'mx-auto px-4 sm:px-6 lg:px-8',
                containerSizes[size],
                className
            )}
        >
            {children}
        </ComponentType>
    );
}

// Export individual container components for specific use cases
export const ContainerSm = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="sm" className={className} {...props}>{children}</Container>
);

export const ContainerMd = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="md" className={className} {...props}>{children}</Container>
);

export const ContainerLg = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="lg" className={className} {...props}>{children}</Container>
);

export const ContainerXl = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="xl" className={className} {...props}>{children}</Container>
);

export const Container2Xl = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="2xl" className={className} {...props}>{children}</Container>
);

export const ContainerFull = ({ children, className = '', ...props }: Omit<ContainerProps, 'size'>) => (
    <Container size="full" className={className} {...props}>{children}</Container>
);

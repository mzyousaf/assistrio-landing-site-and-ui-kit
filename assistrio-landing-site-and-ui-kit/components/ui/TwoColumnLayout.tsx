import React from 'react';
import Container from './Container';

interface TwoColumnLayoutProps {
    children: React.ReactNode;
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    gap?: string;
    className?: string;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
    children,
    containerSize = "md",
    gap = "gap-12",
    className = ""
}) => {
    return (
        <Container size={containerSize} className={className}>
            <div className={`grid lg:grid-cols-2 ${gap}`}>
                {children}
            </div>
        </Container>
    );
};

export default TwoColumnLayout;

import { ReactNode } from 'react';
import Container from './ui/Container';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export default function Section({ children, className = '', id, containerSize = 'lg' }: SectionProps) {
    return (
        <section id={id} className={`py-4 sm:py-6 md:py-8 lg:py-10 ${className}`}>
            <Container size={containerSize}>
                {children}
            </Container>
        </section>
    );
}

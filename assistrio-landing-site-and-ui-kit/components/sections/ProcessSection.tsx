'use client';

import Section from '../Section';
import { ProcessStep } from '@/components/ui';
import { FadeIn, StaggeredItem } from '@/components/ui';
import { useStaggeredAnimation } from '@/hooks/useAnimations';

interface ProcessStepData {
    stepNumber: number;
    title: string;
    description: string;
}

interface ProcessSectionProps {
    title: string;
    steps: ProcessStepData[];
}

export default function ProcessSection({ title, steps }: ProcessSectionProps) {
    const { ref, isVisible } = useStaggeredAnimation(100);

    return (
        <Section className="bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                </FadeIn>
                <div ref={ref as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <StaggeredItem
                            key={step.stepNumber}
                            index={index}
                            staggerDelay={100}
                            isVisible={isVisible}
                        >
                            <ProcessStep
                                stepNumber={step.stepNumber}
                                title={step.title}
                                description={step.description}
                            />
                        </StaggeredItem>
                    ))}
                </div>
            </div>
        </Section>
    );
}

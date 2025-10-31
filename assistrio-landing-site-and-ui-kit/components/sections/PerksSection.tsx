'use client';

import Section from '../Section';
import { PerkCard } from '@/components/ui';
import { FadeIn, StaggeredItem } from '@/components/ui';
import { useStaggeredAnimation } from '@/hooks/useAnimations';

interface Perk {
    title: string;
    description: string;
    icon: string;
}

interface PerksSectionProps {
    title: string;
    perks: Perk[];
}

export default function PerksSection({ title, perks }: PerksSectionProps) {
    const { ref, isVisible } = useStaggeredAnimation(150);

    return (
        <Section className="bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                </FadeIn>
                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {perks.map((perk, index) => (
                        <StaggeredItem
                            key={index}
                            index={index}
                            staggerDelay={150}
                            isVisible={isVisible}
                        >
                            <PerkCard
                                title={perk.title}
                                description={perk.description}
                                icon={perk.icon}
                            />
                        </StaggeredItem>
                    ))}
                </div>
            </div>
        </Section>
    );
}

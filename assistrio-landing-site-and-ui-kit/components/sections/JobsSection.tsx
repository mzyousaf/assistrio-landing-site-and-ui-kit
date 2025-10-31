'use client';

import Section from '../Section';
import { JobCard } from '@/components/ui';
import { FadeIn, StaggeredItem } from '@/components/ui';
import { useStaggeredAnimation } from '@/hooks/useAnimations';

interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
}

interface JobsSectionProps {
    title: string;
    jobs: Job[];
}

export default function JobsSection({ title, jobs }: JobsSectionProps) {
    const { ref, isVisible } = useStaggeredAnimation(200);

    return (
        <Section className="bg-gray-50 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                </FadeIn>
                <div ref={ref} className="space-y-6">
                    {jobs.map((job, index) => (
                        <StaggeredItem
                            key={job.id}
                            index={index}
                            staggerDelay={200}
                            isVisible={isVisible}
                        >
                            <JobCard
                                id={job.id}
                                title={job.title}
                                department={job.department}
                                location={job.location}
                                type={job.type}
                                experience={job.experience}
                                description={job.description}
                                requirements={job.requirements}
                                benefits={job.benefits}
                            />
                        </StaggeredItem>
                    ))}
                </div>
            </div>
        </Section>
    );
}

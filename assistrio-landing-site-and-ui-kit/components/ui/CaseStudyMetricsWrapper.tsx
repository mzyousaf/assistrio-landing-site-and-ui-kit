import BaseStats from './BaseStats';

interface CaseStudyMetricsProps {
    metrics: {
        automation: string;
        satisfaction: string;
        costSavings: string;
        responseTime: string;
    };
    className?: string;
}

export default function CaseStudyMetrics({
    metrics,
    className = ''
}: CaseStudyMetricsProps) {
    return (
        <BaseStats
            variant="caseStudy"
            metrics={metrics}
            className={className}
            columns={4}
        />
    );
}

import React from 'react';
import { StatsCard } from '@/components/ui';

interface HelpCenterStatsSectionProps {
    faqCount: number;
    categoryCount: number;
    className?: string;
}

const HelpCenterStatsSection: React.FC<HelpCenterStatsSectionProps> = ({
    faqCount,
    categoryCount,
    className = ""
}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 ${className}`}>
            <StatsCard value={faqCount} label="Frequently Asked Questions" />
            <StatsCard value={categoryCount} label="Help Categories" />
            <StatsCard value="24/7" label="Support Available" />
        </div>
    );
};

export default HelpCenterStatsSection;

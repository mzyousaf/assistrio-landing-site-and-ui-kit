'use client';

import { useEffect, useState } from 'react';
import {
    AboutHeroSection,
    MissionVisionSection,
    AlexiShowcaseSection,
    WhatWeDoSection,
    WhyDifferentSection,
    StatsSection,
    TeamSection,
    AboutCTASection
} from '@/components/sections';

export default function AboutClient() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <AboutHeroSection isVisible={isVisible} />
            <MissionVisionSection />
            <AlexiShowcaseSection />
            <WhatWeDoSection />
            <WhyDifferentSection />
            <StatsSection />
            <TeamSection />
            <AboutCTASection />
        </>
    );
}
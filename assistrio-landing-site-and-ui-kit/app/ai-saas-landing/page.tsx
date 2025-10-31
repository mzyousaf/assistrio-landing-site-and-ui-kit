'use client';

import { HomeHeroSection, ProductShowcaseSection, FeaturesSection, IndustrySection, SocialProofSection, LiveStatsSection, TestimonialsSection, ComparisonSection, SecuritySection, FAQSection, CTASection } from '@/components/sections';
import { useEffect } from 'react';

export default function AISaaSLanding() {
    // Scroll progress function
    const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    };

    // Set up scroll listener
    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);

        // Enhanced scroll behavior for security section
        const handleSecurityScroll = () => {
            if (window.location.hash === '#security') {
                setTimeout(() => {
                    const securitySection = document.getElementById('security');
                    if (securitySection) {
                        securitySection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                    }
                }, 100);
            }
        };

        // Handle initial load with hash
        handleSecurityScroll();

        // Handle hash changes
        window.addEventListener('hashchange', handleSecurityScroll);

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('hashchange', handleSecurityScroll);
        };
    }, []);


    return (
        <>
            {/* Hero Section */}
            <HomeHeroSection />

            {/* Product Showcase Section */}
            <ProductShowcaseSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Perfect for Every Industry Section */}
            <IndustrySection />

            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Live Stats Section */}
            <LiveStatsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Comparison Section */}
            <ComparisonSection />


            {/* Security & Compliance Section */}
            <SecuritySection />

            {/* FAQ Preview Section */}
            <FAQSection />

            {/* CTA Section */}
            <CTASection />

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-full bg-brand-500 transition-all duration-300 ease-out"
                    style={{ width: '0%' }}
                    id="scroll-progress"
                ></div>
            </div>


        </>
    );
}


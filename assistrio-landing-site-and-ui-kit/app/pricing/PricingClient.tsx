"use client";

import React, { useState, useEffect } from 'react';
import Section from '../../components/Section';
import { defaultPricingPlans } from '../../utils/defaultPricingPlans';
import { Plan, Feature, FeatureValue } from '../../types/pricing';

// Function to format feature display
const formatFeatureValue = (feature: Feature, value: FeatureValue): string => {
    switch (value.kind) {
        case 'count':
            if (value.unlimited) return 'Unlimited';
            if (value.value === -1) return 'Unlimited';
            const unit = feature.unit || '';
            const period = value.period ? `/${value.period}` : '';
            return `${value.value} ${unit}${period}`;
        case 'size':
            if (value.unlimited) return 'Unlimited';
            if (value.value === -1) return 'Unlimited';
            const sizeUnit = feature.unit || '';
            return `${value.value} ${sizeUnit}`;
        case 'boolean':
            return value.value ? feature.name : `No ${feature.name}`;
        case 'enum':
            const enumValue = value.value as string;
            return enumValue.charAt(0).toUpperCase() + enumValue.slice(1).replace('_', ' ');
        case 'status':
            const state = value.state;
            switch (state) {
                case 'included': return 'Included';
                case 'coming_soon': return 'Coming Soon';
                case 'not_available': return 'Not Available';
                default: return state || 'Unknown';
            }
        default:
            return String(value.value || '');
    }
};

export default function PricingClient() {
    const [pricingPlans, setPricingPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState<string>('growth'); // Default to growth as it's most popular
    const [showStickyBanner, setShowStickyBanner] = useState(false);

    useEffect(() => {
        const loadPricingPlans = async () => {
            try {
                setLoading(true);
                // const plans = await fetchPricingPlans();
                // setPricingPlans(plans);
                setPricingPlans(defaultPricingPlans);
            } catch {
                // Use default data as fallback
                setPricingPlans(defaultPricingPlans);
            } finally {
                setLoading(false);
            }
        };

        loadPricingPlans();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const trialBanner = document.getElementById('trial-banner');
            const choosePlanSection = document.querySelector('[data-section="choose-plan"]');

            if (trialBanner && choosePlanSection) {
                const trialBannerRect = trialBanner.getBoundingClientRect();
                const choosePlanRect = choosePlanSection.getBoundingClientRect();

                // Show sticky banner when:
                // 1. Original banner is scrolled past (trialBannerRect.top < 0)
                // 2. Choose plan section is not yet visible on screen (choosePlanRect.top > window.innerHeight)
                if (trialBannerRect.top < 0 && choosePlanRect.top > window.innerHeight) {
                    setShowStickyBanner(true);
                } else {
                    setShowStickyBanner(false);
                }
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return (
            <>
                <Section className="bg-gray-50">
                    <div className="text-center px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Simple, Transparent Pricing</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600">Choose the plan that fits your business needs</p>
                    </div>
                </Section>
                <Section>
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500"></div>
                        <span className="ml-3 text-gray-600">Loading pricing plans...</span>
                    </div>
                </Section>
            </>
        );
    }

    return (
        <>
            <Section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden" containerSize="md">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="relative text-center">
                    <div className="animate-fade-in-up opacity-100">
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
                            Pricing
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Demo Pricing for Nexa
                        </h1>
                        <div className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            This is a demo pricing page for Nexa. Choose the plan that fits your business needs
                        </div>
                    </div>

                    {/* Free Trial Banner */}
                    <div className="mt-6" id="trial-banner">
                        <div className="bg-brand-500 text-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <div className="font-bold text-lg">Start for free for 7 days</div>
                                        <div className="text-sm opacity-90">No credit card required • Full access to all features</div>
                                    </div>
                                </div>
                                <button
                                    className="bg-white text-brand-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                                    onClick={() => {
                                        window.open('https://app.your-domain.com/signup', '_blank');
                                    }}
                                >
                                    <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Buy Nexa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Sticky Trial Banner */}
            <div className={`fixed top-16 sm:top-20 left-0 right-0 z-30 transition-all duration-300 ${showStickyBanner ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="px-3 sm:px-4 lg:px-8">
                    <div className="bg-brand-500 text-white rounded-lg shadow-lg p-3 sm:p-4 max-w-2xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div className="min-w-0 flex-1">
                                    <div className="font-bold text-xs sm:text-sm">Start for free for 7 days</div>
                                    <div className="text-xs opacity-90 hidden sm:block">No credit card required • Full access to all features</div>
                                    <div className="text-xs opacity-90 sm:hidden">No credit card required</div>
                                </div>
                            </div>
                            <button
                                className="bg-white text-brand-500 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-xs sm:text-sm w-full sm:w-auto"
                                onClick={() => {
                                    window.open('https://app.your-domain.com/signup', '_blank');
                                }}
                            >
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Buy Assistrio
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Section id="pricing-cards" containerSize="lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {pricingPlans.filter(plan => plan.code !== 'free').map((plan, planIndex) => {
                        const price = plan.priceCents / 100;
                        const availableFeatures = plan.features.filter(f => {
                            if (!f.value) return false;
                            return f.value.kind === 'boolean' ? f.value.value === true :
                                f.value.kind === 'status' ? f.value.state === 'included' || f.value.state === 'coming_soon' :
                                    f.value.kind === 'count' ? ((f.value.value as number) > 0 || f.value.unlimited === true || (f.value.value as number) === -1) :
                                        f.value.kind === 'size' ? ((f.value.value as number) > 0 || f.value.unlimited === true || (f.value.value as number) === -1) :
                                            f.value.kind === 'enum' ? f.value.value !== 'not_available' : true;
                        });

                        // Filter out features that are already included in previous plans with same amount
                        const filteredFeatures = availableFeatures.filter(planFeature => {
                            // Always show Multi-language replies for all plans
                            if (planFeature.feature.code === 'multi_language') return true;

                            if (planIndex === 0) return true; // Show all features for the first plan (starter)

                            const currentPlanIndex = pricingPlans.findIndex(p => p.code === plan.code);
                            const previousPlan = pricingPlans[currentPlanIndex - 1];

                            if (!previousPlan) return true;

                            const previousPlanFeature = previousPlan.features.find(pf => pf.feature.code === planFeature.feature.code);

                            if (!previousPlanFeature || !previousPlanFeature.value) return true;

                            // Compare values based on type
                            const currentValue = planFeature.value;
                            const previousValue = previousPlanFeature.value;

                            if (currentValue.kind !== previousValue.kind) return true;

                            switch (currentValue.kind) {
                                case 'boolean':
                                    return currentValue.value !== previousValue.value;
                                case 'count':
                                case 'size':
                                    const currentNum = currentValue.value as number;
                                    const previousNum = previousValue.value as number;
                                    const currentUnlimited = currentValue.unlimited || currentNum === -1;
                                    const previousUnlimited = previousValue.unlimited || previousNum === -1;

                                    if (currentUnlimited && previousUnlimited) return false;
                                    if (currentUnlimited && !previousUnlimited) return true;
                                    if (!currentUnlimited && previousUnlimited) return false;
                                    return currentNum !== previousNum;
                                case 'status':
                                    return currentValue.state !== previousValue.state;
                                case 'enum':
                                    return currentValue.value !== previousValue.value;
                                default:
                                    return true;
                            }
                        });

                        return (
                            <div
                                key={plan._id}
                                id={`plan-${plan.code}`}
                                className={`rounded-lg p-4 sm:p-6 relative flex flex-col h-full bg-white dark:bg-slate-800 ${plan.code === 'growth'
                                    ? 'border-2 border-brand-500 dark:border-brand-500'
                                    : 'border border-gray-200 dark:border-slate-700'
                                    }`}
                            >
                                {plan.code === 'growth' && (
                                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-brand-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="flex-shrink-0">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <span className="text-3xl sm:text-4xl font-bold dark:text-white">${price}</span>
                                        <span className="text-gray-600 dark:text-gray-400">/{plan.interval}</span>
                                    </div>
                                </div>

                                {/* Group features by category */}
                                {(() => {
                                    const featuresByGroup = new Map<string, typeof filteredFeatures>();
                                    filteredFeatures.forEach(planFeature => {
                                        const group = planFeature.feature.group;
                                        if (!featuresByGroup.has(group)) {
                                            featuresByGroup.set(group, []);
                                        }
                                        featuresByGroup.get(group)!.push(planFeature);
                                    });

                                    // Get features from previous plans for "See more" functionality
                                    const getPreviousPlanFeatures = () => {
                                        if (planIndex === 0) return []; // No previous features for starter plan

                                        const currentPlanIndex = pricingPlans.findIndex(p => p.code === plan.code);
                                        const previousPlan = pricingPlans[currentPlanIndex - 1];

                                        if (!previousPlan) return [];

                                        return previousPlan.features.filter(f => {
                                            if (!f.value) return false;
                                            return f.value.kind === 'boolean' ? f.value.value === true :
                                                f.value.kind === 'status' ? f.value.state === 'included' || f.value.state === 'coming_soon' :
                                                    f.value.kind === 'count' ? ((f.value.value as number) > 0 || f.value.unlimited === true || (f.value.value as number) === -1) :
                                                        f.value.kind === 'size' ? ((f.value.value as number) > 0 || f.value.unlimited === true || (f.value.value as number) === -1) :
                                                            f.value.kind === 'enum' ? f.value.value !== 'not_available' : true;
                                        });
                                    };

                                    const previousPlanFeatures = getPreviousPlanFeatures();

                                    return (
                                        <div className="flex-1 space-y-3 mb-4">
                                            {Array.from(featuresByGroup.entries()).map(([groupName, features]) => {
                                                // Get previous plan features for this group
                                                const previousFeaturesInGroup = previousPlanFeatures.filter(pf => pf.feature.group === groupName);
                                                const hasPreviousFeatures = previousFeaturesInGroup.length > 0;

                                                return (
                                                    <div key={groupName} className="relative">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                                                {groupName}
                                                            </h4>
                                                            {hasPreviousFeatures && !['Core', 'Storage', 'Knowledge Base'].includes(groupName) && (
                                                                <button className="relative group text-xs text-brand-600 hover:text-brand-700 font-medium">
                                                                    {plan.code === 'growth' ? 'From Starter' : 'From lower plans'}
                                                                    {/* Hover dropdown for previous plan features */}
                                                                    <div className="absolute top-full left-0 mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 min-w-64 max-w-80">
                                                                        <div className="text-xs font-semibold text-gray-600 mb-2">
                                                                            {plan.code === 'growth' ? 'Included from Starter plan:' : 'Included from previous plans:'}
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            {previousFeaturesInGroup.map((planFeature) => {
                                                                                const { feature, value } = planFeature;
                                                                                const isComingSoon = value.kind === 'status' && value.state === 'coming_soon';
                                                                                return (
                                                                                    <div key={feature._id} className="flex items-center">
                                                                                        {isComingSoon ? (
                                                                                            <svg className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                                                            </svg>
                                                                                        ) : (
                                                                                            <svg className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                                            </svg>
                                                                                        )}
                                                                                        <span className="text-xs text-gray-600">
                                                                                            {(() => {
                                                                                                // For count/size features, show the actual values
                                                                                                if (value.kind === 'count' || value.kind === 'size') {
                                                                                                    const numValue = value.value as number;
                                                                                                    const unit = feature.unit || '';
                                                                                                    const period = value.period ? `/${value.period}` : '';

                                                                                                    if (value.unlimited || numValue === -1) {
                                                                                                        return `Unlimited ${unit}`;
                                                                                                    } else {
                                                                                                        return `${numValue} ${unit}${period}`;
                                                                                                    }
                                                                                                }
                                                                                                // For status features, show coming soon only if actually coming soon
                                                                                                else if (value.kind === 'status') {
                                                                                                    if (value.state === 'coming_soon') {
                                                                                                        return `${feature.name} (Coming Soon)`;
                                                                                                    } else {
                                                                                                        return feature.name;
                                                                                                    }
                                                                                                }
                                                                                                // For boolean features, show the feature name
                                                                                                else if (value.kind === 'boolean') {
                                                                                                    return feature.name;
                                                                                                }
                                                                                                // For enum features, show the actual value
                                                                                                else if (value.kind === 'enum') {
                                                                                                    const enumValue = value.value as string;
                                                                                                    if (enumValue === 'not_available') {
                                                                                                        return `${feature.name} (Not available)`;
                                                                                                    } else {
                                                                                                        const displayValue = enumValue.charAt(0).toUpperCase() + enumValue.slice(1).replace('_', ' ');
                                                                                                        return displayValue;
                                                                                                    }
                                                                                                }
                                                                                                // For other types, show the feature name
                                                                                                else {
                                                                                                    return feature.name;
                                                                                                }
                                                                                            })()}
                                                                                        </span>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            )}
                                                        </div>
                                                        <ul className="space-y-1">
                                                            {features.map((planFeature) => {
                                                                const { feature, value } = planFeature;
                                                                const isComingSoon = value.kind === 'status' && value.state === 'coming_soon';

                                                                // For integrations and knowledge base, show feature name with value
                                                                const shouldShowFeatureName = feature.group === 'Integrations' || feature.group === 'Knowledge Base';

                                                                return (
                                                                    <li key={feature._id} className="flex items-center">
                                                                        {isComingSoon ? (
                                                                            <svg className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                                            </svg>
                                                                        ) : (
                                                                            <svg className="w-3 h-3 text-brand-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                            </svg>
                                                                        )}
                                                                        <span className="text-xs text-gray-600">
                                                                            {shouldShowFeatureName ? (
                                                                                <div>
                                                                                    {feature.group === 'Knowledge Base' ? (
                                                                                        <div className="font-medium">
                                                                                            {(() => {
                                                                                                if (value.kind === 'count' || value.kind === 'size') {
                                                                                                    const numValue = value.value as number;
                                                                                                    const unit = feature.unit || '';

                                                                                                    if (value.unlimited || numValue === -1) {
                                                                                                        return `Unlimited ${unit}`;
                                                                                                    } else {
                                                                                                        // Format the unit to be more readable
                                                                                                        const formattedUnit = unit
                                                                                                            .replace('docs', feature.name)
                                                                                                            .replace('pages', feature.name)
                                                                                                            .replace('files', feature.name)
                                                                                                            .replace('notion_pages', 'Notion Pages')
                                                                                                            .replace('google_drive_files', 'Google Drive Files')
                                                                                                            .replace('website_pages', 'Website Pages');

                                                                                                        return `${numValue} ${formattedUnit}`;
                                                                                                    }
                                                                                                } else {
                                                                                                    return feature.name;
                                                                                                }
                                                                                            })()}
                                                                                        </div>
                                                                                    ) : (
                                                                                        <div>
                                                                                            <div className="font-medium">{feature.name}</div>
                                                                                            <div className="text-gray-500 mt-0.5">{formatFeatureValue(feature, value)}</div>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            ) : (
                                                                                formatFeatureValue(feature, value)
                                                                            )}
                                                                        </span>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })()}



                                {/* Previous Plan Features Note */}
                                {plan.code !== 'starter' && (
                                    <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-brand-900/30 dark:to-brand-900/40 rounded-lg border border-green-200 dark:border-brand-500/50">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 bg-green-100 dark:bg-brand-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-green-600 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-sm font-bold text-green-900 dark:text-white">
                                                    {plan.code === 'growth'
                                                        ? 'Plus everything from Starter plan at no extra cost'
                                                        : 'Plus everything from Starter and Growth plans at no extra cost'
                                                    }
                                                </h4>
                                                <p className="text-xs text-green-700 mt-0.5">
                                                    All previous plan features included in this price
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <button
                                        className={`w-full py-3 rounded-lg transition-colors text-sm sm:text-base ${plan.code === 'growth'
                                            ? 'bg-brand-500 text-white hover:bg-brand-600'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                            }`}
                                        onClick={() => {
                                            window.open(`https://app.your-domain.com/signup?plan=${plan.code}`, '_blank');
                                        }}
                                    >
                                        <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Buy Nexa
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Professional Feature Comparison */}
            <Section className="bg-white" containerSize="xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Compare our plans side-by-side to find the perfect fit for your business needs</p>
                </div>

                {/* Sticky Plan Selector */}
                <div className="sticky top-20 z-10 mb-8">
                    <div className="bg-brand-500 rounded-lg shadow-lg p-3 sm:p-4 border border-brand-600">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <div className="flex-1">
                                <h3 className="text-sm font-medium text-white mb-2">Choose Your Plan:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                                    {pricingPlans.map((plan) => {
                                        const price = (plan.priceCents / 100).toFixed(0);
                                        return (
                                            <button
                                                key={plan._id}
                                                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${selectedPlan === plan.code
                                                    ? 'bg-white text-brand-500 ring-2 ring-white'
                                                    : 'bg-white/20 text-white hover:bg-white/30'
                                                    }`}
                                                onClick={() => {
                                                    setSelectedPlan(plan.code);
                                                }}
                                            >
                                                <div className="truncate">{plan.name}</div>
                                                <div className="text-xs opacity-90">
                                                    {plan.code === 'free' ? '7-day trial' : `$${price}/mo`}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex items-center justify-center sm:justify-end">
                                <button
                                    className="px-4 sm:px-6 py-2 bg-white text-brand-500 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
                                    onClick={() => {
                                        window.open(`https://app.your-domain.com/signup?plan=${selectedPlan}`, '_blank');
                                    }}
                                >
                                    <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Buy Nexa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {(() => {
                    // Get all unique features across plans
                    const allFeatures = new Map<string, Feature>();
                    pricingPlans.forEach(plan => {
                        plan.features.forEach(pf => {
                            allFeatures.set(pf.feature.code, pf.feature);
                        });
                    });

                    // Group features by category
                    const featuresByGroup = new Map<string, Feature[]>();
                    Array.from(allFeatures.values()).forEach(feature => {
                        const group = feature.group;
                        if (!featuresByGroup.has(group)) {
                            featuresByGroup.set(group, []);
                        }
                        featuresByGroup.get(group)!.push(feature);
                    });

                    // Sort features within each group by sortOrder
                    featuresByGroup.forEach(features => {
                        features.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
                    });

                    return (
                        <div className="max-w-7xl mx-auto">
                            {/* Comparison Table */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                                {/* Header Row */}
                                <div className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
                                        <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-200">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Features</h3>
                                            <p className="text-xs sm:text-sm text-gray-500 mt-1">Compare what&apos;s included</p>
                                        </div>
                                        {pricingPlans.map((plan, index) => {
                                            return (
                                                <div key={plan._id} className={`p-4 sm:p-6 text-center ${index < pricingPlans.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : ''}`}>
                                                    <div className="mb-2">
                                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{plan.name}</h4>
                                                        <p className="text-xs sm:text-sm text-gray-500">
                                                            {plan.code === 'free'
                                                                ? '7-day trial with all starter features included'
                                                                : plan.description
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold text-brand-600">
                                                        {plan.priceCents === 0 ? 'Free' : `$${plan.priceCents / 100}`}
                                                        {plan.priceCents > 0 && <span className="text-xs sm:text-sm font-normal text-gray-500">/{plan.interval}</span>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Feature Rows */}
                                <div className="divide-y divide-gray-200 dark:divide-slate-600">
                                    {Array.from(featuresByGroup.entries()).map(([groupName, features]) => (
                                        <div key={groupName}>
                                            {/* Category Header */}
                                            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                                                <h4 className="text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wide">{groupName}</h4>
                                            </div>

                                            {/* Features */}
                                            {features.map((feature) => (
                                                <div key={feature.code} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 hover:bg-gray-50 transition-colors">
                                                    {/* Feature Name */}
                                                    <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-200">
                                                        <div className="flex items-start space-x-3">
                                                            <div className="flex-shrink-0 mt-1">
                                                                <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                                                            </div>
                                                            <div>
                                                                <h5 className="text-xs sm:text-sm font-medium text-gray-900">{feature.name}</h5>
                                                                <p className="text-xs text-gray-500 mt-1 hidden sm:block">{feature.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Plan Values */}
                                                    {pricingPlans.map((plan, index) => {
                                                        const planFeature = plan.features.find(pf => pf.feature.code === feature.code);
                                                        const isIncluded = planFeature && planFeature.value &&
                                                            (planFeature.value.kind === 'boolean' ? planFeature.value.value === true :
                                                                planFeature.value.kind === 'status' ? planFeature.value.state === 'included' :
                                                                    planFeature.value.kind === 'count' ? ((planFeature.value.value as number) > 0 || planFeature.value.unlimited === true || (planFeature.value.value as number) === -1) :
                                                                        planFeature.value.kind === 'size' ? ((planFeature.value.value as number) > 0 || planFeature.value.unlimited === true || (planFeature.value.value as number) === -1) :
                                                                            planFeature.value.kind === 'enum' ? planFeature.value.value !== 'not_available' : true);

                                                        const isComingSoon = planFeature && planFeature.value &&
                                                            planFeature.value.kind === 'status' && planFeature.value.state === 'coming_soon';

                                                        return (
                                                            <div key={`${plan._id}-${feature.code}`} className={`p-4 sm:p-6 text-center ${index < pricingPlans.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : ''}`}>
                                                                {isComingSoon ? (
                                                                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                            </svg>
                                                                        </div>
                                                                        <span className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-400 font-medium">Coming Soon</span>
                                                                    </div>
                                                                ) : isIncluded ? (
                                                                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                                                        <div className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${planFeature?.highlight
                                                                            ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                                                                            : 'bg-green-100 text-green-600'
                                                                            }`}>
                                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </div>
                                                                        <span className={`text-xs sm:text-sm font-medium ${planFeature?.highlight ? 'text-green-700' : 'text-green-700'
                                                                            }`}>
                                                                            {planFeature ? (['Customization', 'Lead Capture', 'Analytics', 'Team', 'Integrations', 'Support'].includes(feature.group) ? 'Included' : formatFeatureValue(feature, planFeature.value)) : 'Included'}
                                                                        </span>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                        </div>
                                                                        <span className="text-xs sm:text-sm text-red-500 dark:text-red-400 font-medium">Not included</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-12 text-center">
                                <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Buy Nexa?</h3>
                                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                        This is a demo pricing page for Nexa. Choose the plan that best fits your needs and start building amazing AI chatbots today.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        {pricingPlans.map((plan) => (
                                            <button
                                                key={plan._id}
                                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${plan.code === 'growth'
                                                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg'
                                                    : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300'
                                                    }`}
                                                onClick={() => {
                                                    window.open(`https://app.your-domain.com/signup?plan=${plan.code}`, '_blank');
                                                }}
                                            >
                                                {plan.code === 'free' ? 'Start Free Trial' : `Get ${plan.name}`}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </Section>

        </>
    );
}

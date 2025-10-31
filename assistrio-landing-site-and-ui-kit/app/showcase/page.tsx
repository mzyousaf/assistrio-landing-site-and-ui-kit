'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiTrendingUp, FiUsers, FiCode, FiZap, FiClock, FiMail, FiHome } from 'react-icons/fi';
import { FaUser, FaLayerGroup, FaSitemap, FaShieldAlt, FaMagic, FaRocket, FaMoon, FaLaptop, FaDollarSign, FaEnvelope, FaQuestionCircle, FaBlog, FaBusinessTime, FaProjectDiagram, FaChartLine, FaLock, FaExclamationTriangle, FaBolt, FaBullseye, FaCode, FaFileAlt } from 'react-icons/fa';

// Convenience re-exports for /showcase demoing all atomic UI components
import {
    AnimatedStatCard,
    AuthorAvatar,
    Badge,
    BaseBadge,
    BaseStats,
    Breadcrumb,
    Button,
    CategoryBadge,
    CategoryFilter,
    ChatDemo,
    ChatInput,
    ChatMessage,
    Container,
    ContainerSm,
    ContainerMd,
    ContainerLg,
    FeaturedBadge,
    IndustryBadge,
    MetricCard,
    MultiSelect,
    MetaBadge,
    RSSButton,
    ResultCard,
    SearchBar,
    ShareButton,
    SectionHeader,
    Select,
    SortDropdown,
    StarRating,
    StatisticCard,
    StatusBadge,
    StatusIcon,
    StepCard,
    SuccessStoryBadge,
    TabButton,
    ViewModeToggle,
    LoadingSpinner,
    NotFoundState,
    CopyNotification,
    ResourceTypeBadge,
    ResourceStats,
    ResourceTags,
    ShareMenu,
    ResourceActionButtons,
    TabNavigation,
    AnimatedBadge,
    FeatureCard,
    StatCard,
    StatsCard,
    FAQItem,
    TrustBadge,
    FeatureTag,
    CTAButton,
    CTAStats,
    TeamSectionHeader,
    PerkIcon,
    PerkCard,
    JobCard,
    ProcessStep,
    ContactInfoItem,
    ContactInfoCard,
    TwoColumnLayout,
    LegalDocumentBadge,
    LegalBackToTopButton,
} from '@/components/ui';

import {
    ArticleImage,
    ArticleMeta,
    ArticleStats,
    ArticleTags,
    AuthorInfo,
    AuthorBio,
    CaseStudyCard,
    CaseStudyImage,
    CaseStudyMetrics,
    CompanyInfo,
    ContentCard,
    FeatureItem,
    IncidentCard,
    IndustryCard,
    ResourceCard,
    RelatedPostCard,
    RelatedCaseStudyCard,
    RelatedResourceCard,
    ServiceCard,
    TestimonialCard,
    TestimonialBlock,
    VisualCard,
    MissionVisionCard,
    AlexiDemoCard,
    FeatureList,
    ResourceDetailedStats,
    BenefitsList,
    TeamMemberCard,
    TeamMemberCompactCard,
    CultureCard,
    ValueCard,
    CultureImageGrid,
    HighlightCard,
    PageCard,
    SolutionCard,
} from '@/components/content';

import {
    ArticleFeaturedSection,
    CaseStudyFeaturedSection,
    CaseStudyHeroSection,
    ComparisonSection,
    ContactSupportSection,
    CTASection,
    IncidentsSection,
    IndustrySection,
    LiveStatsSection,
    OverallStatusSection,
    ProductCTASection,
    ProductDemoSection,
    ProductShowcaseSection,
    ProductStepsSection,
    SearchResultsSection,
    SecuritySection,
    SocialProofSection,
    ResourceCTASection,
    MissionVisionSection,
    AlexiShowcaseSection,
    WhatWeDoSection,
    WhyDifferentSection,
    StatsSection,
    TeamSection,
    AboutCTASection,
    PerksSection,
    JobsSection,
    ProcessSection,
    CareersCTASection,
    ContactInfoSection,
    ContactFormSection,
    HelpCenterStatsSection,
    HelpCenterFAQsSection,
    HelpCenterCategoriesSection,
    LegalQuickActions,
    LegalTableOfContents,
    LegalHeroSection,
    FeaturedContentSection,
} from '@/components/sections';

import { ShowcaseNavigation } from '@/components/layout';

// Mock data for components
const componentData = {
    // Mock data for sections
    services: [
        { title: "AI Assistant", description: "Intelligent AI solutions", icon: <FiZap />, index: 0 },
        { title: "Enterprise Solutions", description: "Scalable business solutions", icon: <FiTrendingUp />, index: 1 },
        { title: "Customer Support", description: "24/7 support services", icon: <FiUsers />, index: 2 },
        { title: "Security", description: "Enterprise-grade security", icon: <FiShield />, index: 3 }
    ],
    jobs: [
        { title: "Senior Full Stack Developer", type: "Full-time", location: "Remote", department: "Engineering" },
        { title: "Product Designer", type: "Full-time", location: "Hybrid", department: "Design" },
        { title: "Marketing Manager", type: "Full-time", location: "On-site", department: "Marketing" }
    ],
    perks: [
        { title: "Health Insurance", description: "Comprehensive coverage" },
        { title: "Remote Work", description: "Work from anywhere" },
        { title: "401k Matching", description: "Company matching program" },
        { title: "Flexible PTO", description: "Unlimited vacation days" }
    ],
    processSteps: [
        { stepNumber: 1, title: "Apply", description: "Submit your application" },
        { stepNumber: 2, title: "Interview", description: "Meet with the team" },
        { stepNumber: 3, title: "Offer", description: "Receive your offer" }
    ],
    // Showcase Services (for UI showcase)
    showcaseServices: [
        {
            icon: <FiCode className="w-10 h-10 text-white" />,
            title: "AI Assistant",
            description: "Intelligent AI solutions",
            showButton: false,
            tag: undefined,
            buttonText: undefined,
            buttonIcon: undefined
        },
        {
            icon: <FiZap className="w-10 h-10 text-white" />,
            title: "Enterprise Solutions",
            description: "Scalable business solutions",
            showButton: true,
            tag: undefined,
            buttonText: "Learn More",
            buttonIcon: <FiArrowRight />
        }
    ],

    // Testimonials
    testimonials: [
        {
            avatarText: "JD",
            name: "John Doe",
            role: "CEO, Company Inc.",
            quote: "This product has transformed our workflow. Highly recommend to anyone looking for efficiency."
        },
        {
            testimonial: "The implementation was seamless and the results exceeded our expectations.",
            author: "Sarah Johnson, Marketing Director"
        },
        {
            avatarText: "MJ",
            name: "Michael Johnson",
            role: "CTO, Tech Corp",
            quote: "Best investment we've made in our infrastructure. The ROI is incredible."
        }
    ],

    // Features
    features: [
        {
            icon: <FiCode className="w-10 h-10 text-white" />,
            title: "Code Quality",
            description: "Built with best practices and modern React patterns",
            showButton: false,
            tag: undefined
        },
        {
            icon: <FiZap className="w-10 h-10 text-white" />,
            title: "Fast Performance",
            description: "Optimized for speed and seamless user experience",
            showButton: true,
            buttonText: "Learn More",
            buttonIcon: <FiArrowRight />,
            tag: undefined
        },
        {
            icon: <FiShield className="w-10 h-10 text-white" />,
            title: "Secure & Safe",
            description: "Enterprise-grade security built into every component",
            tag: "New"
        }
    ],

    // Status Services - All Different Status Variants
    statusServices: [
        {
            name: "API Service",
            status: "operational",
            uptime: "99.9%",
            responseTime: "120ms",
            description: "REST API endpoints - healthy",
            lastIncident: null
        },
        {
            name: "Database",
            status: "degraded",
            uptime: "98.5%",
            responseTime: "450ms",
            description: "Production database - monitoring",
            lastIncident: "2 hours ago"
        },
        {
            name: "CDN",
            status: "outage",
            uptime: "95.2%",
            responseTime: "N/A",
            description: "Content delivery - under maintenance",
            lastIncident: "1"
        },
        {
            name: "Authentication",
            status: "investigating",
            uptime: "97.8%",
            responseTime: "280ms",
            description: "Auth service - investigating issues",
            lastIncident: "5"
        },
        {
            name: "Cache Service",
            status: "resolved",
            uptime: "99.95%",
            responseTime: "25ms",
            description: "Cache layer - resolved recent issue",
            lastIncident: "12"
        }
    ],

    // Case Study
    caseStudies: [
        {
            id: 1,
            title: "How TechCorp Achieved 300% ROI with AI Automation",
            company: "TechCorp Solutions",
            industry: "Technology",
            companySize: "Enterprise",
            challenge: "High support ticket volume was overwhelming the team",
            solution: "Implemented Alexi AI assistant to handle 80% of routine inquiries",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
            logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200",
            metrics: {
                automation: "85%",
                satisfaction: "98%",
                costSavings: "$500K",
                responseTime: "2min"
            },
            testimonial: "Alexi transformed our customer support completely.",
            testimonialAuthor: "Jane Smith, VP of Operations",
            duration: "6 months",
            readTime: "5 min read",
            slug: "techcorp-automation",
            viewMode: "grid" as const
        }
    ],

    // Resources
    resources: [
        {
            id: 1,
            title: "Getting Started with AI Assistants",
            description: "Complete guide to implementing AI customer support",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            type: "guide",
            difficulty: "Beginner",
            duration: "15 min",
            downloadCount: "1.2K",
            fileSize: "2.4 MB",
            tags: ["AI", "Getting Started"],
            slug: "ai-assistants-guide",
            viewMode: "grid" as const
        },
        {
            id: 2,
            title: "Advanced Customization Techniques",
            description: "Learn advanced techniques to customize your AI assistant",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
            type: "tutorial",
            difficulty: "Advanced",
            duration: "30 min",
            downloadCount: "856",
            fileSize: "3.2 MB",
            tags: ["Advanced", "Customization"],
            slug: "advanced-techniques",
            viewMode: "grid" as const
        }
    ],

    // Team Members
    teamMembers: [
        {
            name: "John Doe",
            role: "Chief Executive Officer",
            bio: "Leading the vision and strategy for our company's growth and innovation.",
            image: "https://ui-avatars.com/api/?name=John+Doe&size=400",
            linkedin: "https://linkedin.com",
            x: "https://twitter.com",
            email: "john@example.com",
            index: 0
        },
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            bio: "Driving brand awareness and customer engagement through innovative marketing strategies.",
            image: "https://ui-avatars.com/api/?name=Sarah+Johnson&size=400",
            linkedin: "https://linkedin.com",
            x: "https://twitter.com",
            email: "sarah@example.com",
            index: 1
        }
    ],

    // Incidents
    incidents: [
        {
            id: 1,
            title: "API Response Time Increase",
            status: "resolved",
            severity: "minor",
            description: "Temporary increase in API response times during peak hours",
            startedAt: "2024-01-15T10:00:00Z",
            updatedAt: "2024-01-15T11:00:00Z",
            resolvedAt: "2024-01-15T11:00:00Z",
            affectedServices: ["API", "Database"]
        }
    ],

    // Chat Messages
    chatMessages: [
        {
            sender: "Customer",
            message: "Hi, I need help with my order",
            isCustomer: true
        },
        {
            sender: "Alexi",
            message: "Hello! I'd be happy to help you with your order. Could you please provide your order number?",
            isCustomer: false
        }
    ],

    // MultiSelect Options
    multiSelectOptions: [
        { value: 'react', label: 'React', disabled: false },
        { value: 'nextjs', label: 'Next.js', disabled: false },
        { value: 'typescript', label: 'TypeScript', disabled: false },
        { value: 'tailwind', label: 'Tailwind CSS', disabled: false }
    ],

    // Stats
    stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "10K+", label: "Users" },
        { value: "50+", label: "Components" },
        { value: "24/7", label: "Support" }
    ],

    // FAQ Data for showcase
    showcaseFaqs: [
        {
            question: "How accurate is Alexi?",
            category: "General",
            answer: "Alexi achieves 95%+ accuracy on common customer support queries. It's continuously learning from your interactions to improve over time.",
            isOpen: false
        },
        {
            question: "Can Alexi handle multiple languages?",
            category: "Features",
            answer: "Yes, Alexi supports 50+ languages out of the box and can be trained on your specific terminology.",
            isOpen: false
        },
        {
            question: "What happens when Alexi can't answer?",
            category: "Support",
            answer: "Alexi will ask for clarification or seamlessly transfer to a human agent when needed.",
            isOpen: false
        }
    ],

    // Showcase FAQs (different from showcaseFaqs)
    faqs: [
        {
            question: "How accurate is Alexi?",
            category: "General",
            answer: "Alexi achieves 95%+ accuracy on common customer support queries. It's continuously learning from your interactions to improve over time.",
            isOpen: false
        },
        {
            question: "Can I customize Alexi's responses?",
            category: "Customization",
            answer: "Yes! You can customize Alexi's tone, style, and responses to match your brand voice. You can also provide specific instructions for different types of queries.",
            isOpen: false
        }
    ],

    // Highlights
    highlights: [
        {
            title: '200+ Production Components',
            description: 'Buttons, Cards, Forms, Modals, Badges, Stats, Tables, Navigation & more - all well-structured',
            icon: FaLayerGroup,
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: '15+ Complete Pages',
            description: 'Home, Product, Pricing, About, Contact, Help Center, Blog, Case Studies, Resources, Team, Careers, Status, Legal',
            icon: FaSitemap,
            gradient: 'from-cyan-500 to-teal-500',
        },
        {
            title: 'Modern Tech Stack',
            description: 'Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP & Lenis smooth scroll',
            icon: FaRocket,
            gradient: 'from-teal-500 to-blue-500',
        },
        {
            title: 'SEO & Accessibility',
            description: 'XML sitemap, meta tags, Open Graph, Schema markup, WCAG AA compliant, semantic HTML & ARIA labels',
            icon: FaShieldAlt,
            gradient: 'from-blue-600 to-indigo-600',
        },
        {
            title: 'Smooth Animations',
            description: 'Framer Motion transitions, GSAP parallax effects, Lenis smooth scroll & hover animations',
            icon: FaMagic,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Dark Mode Support',
            description: 'Fully integrated dark mode with system preference detection, localStorage persistence, and smooth transitions',
            icon: FaMoon,
            gradient: 'from-indigo-600 to-purple-600',
        },
    ],

    // Page Cards
    pageCards: [
        { id: 1, name: 'Product', page: '/product', gradient: 'from-purple-600 to-pink-600', icon: FaLaptop },
        { id: 2, name: 'Pricing', page: '/pricing', gradient: 'from-green-600 to-emerald-600', icon: FaDollarSign },
        { id: 3, name: 'About', page: '/about', gradient: 'from-orange-600 to-red-600', icon: FaUser },
        { id: 4, name: 'Contact', page: '/contact', gradient: 'from-blue-600 to-indigo-600', icon: FaEnvelope },
        { id: 5, name: 'Help Center', page: '/help-center', gradient: 'from-indigo-600 to-purple-600', icon: FaQuestionCircle },
        { id: 6, name: 'Blog', page: '/blog', gradient: 'from-pink-600 to-rose-600', icon: FaBlog },
        { id: 7, name: 'Case Studies', page: '/case-studies', gradient: 'from-violet-600 to-purple-600', icon: FaFileAlt },
        { id: 8, name: 'Resources', page: '/resources', gradient: 'from-emerald-600 to-teal-600', icon: FaBusinessTime },
        { id: 9, name: 'Careers', page: '/careers', gradient: 'from-cyan-600 to-blue-600', icon: FaProjectDiagram },
        { id: 10, name: 'Status', page: '/status', gradient: 'from-slate-600 to-gray-700', icon: FaChartLine },
        { id: 11, name: 'Privacy', page: '/legal/privacy', gradient: 'from-blue-700 to-indigo-700', icon: FaLock },
        { id: 12, name: '404 Error', page: '/page-not-found', gradient: 'from-red-600 to-orange-600', icon: FaExclamationTriangle },
    ],

    // Solutions
    solutions: [
        {
            title: 'Production-Ready Sections',
            description: 'Well-structured, copy-paste sections that work out of the box',
            icon: FaBolt,
            gradient: 'from-blue-500 to-teal-500',
        },
        {
            title: 'Conversion-Focused Design',
            description: 'Professional layouts designed to convert visitors to customers',
            icon: FaBullseye,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Clean & Maintainable Code',
            description: 'TypeScript, well-documented code that\'s easy to customize',
            icon: FaCode,
            gradient: 'from-green-500 to-emerald-500',
        },
    ]
};

export default function ShowcasePage() {
    const [activeSection, setActiveSection] = React.useState<string>('cards');
    const [isSidebar, setIsSidebar] = React.useState<boolean>(true);
    const [componentSearchQuery, setComponentSearchQuery] = React.useState("");
    const [demoSearchQuery, setDemoSearchQuery] = React.useState("");
    const [multiSelectValue, setMultiSelectValue] = React.useState<string[]>([]);
    const [selectedTab, setSelectedTab] = React.useState('all');
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [activeTabButton, setActiveTabButton] = React.useState('All Posts');
    const [viewMode, setViewMode] = React.useState('grid');

    const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing'];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className={`bg-gradient-to-br from-blue-50 via-white to-teal-50 border-b border-gray-200 ${isSidebar ? '2xl:ml-72' : ''} px-4 sm:px-6 lg:px-8`}>
                <div className={`${isSidebar ? 'max-w-5xl mx-auto' : 'max-w-7xl mx-auto'} py-12 md:py-16`}>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Everything You Need in One Package
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Assistrio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Landing site Component UI Kit</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            <strong>No need to create components from scratch or rely on external libraries!</strong> Our Landing & UI Kit includes <strong>200+ user-defined, customizable components</strong> and <strong>15+ complete pages</strong>. Every component is ready-to-use and can be <strong>customized according to your specific needs</strong>—simply modify props, styles, and functionality. Build stunning landing pages in minutes with our complete, customizable design system.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold text-gray-900">200+ Components</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold text-gray-900">15+ Pages</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold text-gray-900">Fully Responsive</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold text-gray-900">Production Ready</span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button href="/pricing" variant="primary" size="lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Buy Assistrio Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Container */}
            <ShowcaseNavigation
                activeSection={activeSection}
                isSidebar={isSidebar}
                onSectionClick={scrollToSection}
                onToggleSidebar={() => setIsSidebar(!isSidebar)}
                onSearchChange={setComponentSearchQuery}
            />

            {/* Main Content */}
            <main className={`${isSidebar ? '2xl:ml-72' : ''} px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-12`}>
                <div className={`${isSidebar ? 'max-w-5xl mx-auto' : 'max-w-7xl mx-auto'}`}>

                    {/* CARDS SECTION */}
                    {SectionDivider('Cards', 'cards', 'Various card components with multiple design variants')}

                    {/* Service Cards */}
                    <ComponentSection
                        title="Service Cards - All Status Variants"
                        description="Service cards showing different status states"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {componentData.statusServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </ComponentSection>

                    {/* Testimonial Cards */}
                    <ComponentSection
                        title="Testimonial Cards"
                        description="Different testimonial card variants"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TestimonialCard
                                variant="home"
                                avatarText={componentData.testimonials[0].avatarText}
                                name={componentData.testimonials[0].name}
                                role={componentData.testimonials[0].role}
                                quote={componentData.testimonials[0].quote}
                                animationDelay="0s"
                            />
                            <TestimonialCard
                                variant="case-study"
                                testimonial={componentData.testimonials[1].testimonial}
                                author={componentData.testimonials[1].author}
                            />
                        </div>
                    </ComponentSection>

                    {/* Feature Cards */}
                    <ComponentSection
                        title="Feature Cards"
                        description="Feature card with icon, title, description"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {componentData.features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </ComponentSection>

                    {/* Highlight Cards */}
                    <ComponentSection
                        title="Highlight Cards"
                        description="Feature highlight cards with gradient icons and hover effects"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {componentData.highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                >
                                    <HighlightCard
                                        title={highlight.title}
                                        description={highlight.description}
                                        icon={highlight.icon}
                                        gradient={highlight.gradient}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </ComponentSection>

                    {/* Page Cards */}
                    <ComponentSection
                        title="Page Cards"
                        description="Compact navigation cards for different pages with gradients and hover effects"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                            {componentData.pageCards.map((page) => (
                                <PageCard
                                    key={page.id}
                                    id={page.id}
                                    name={page.name}
                                    page={page.page}
                                    gradient={page.gradient}
                                    icon={page.icon}
                                />
                            ))}
                        </div>
                    </ComponentSection>

                    {/* Solution Cards */}
                    <ComponentSection
                        title="Solution Cards"
                        description="Feature cards with icons, titles, and descriptions"
                    >
                        <div className="space-y-4">
                            {componentData.solutions.map((solution, index) => (
                                <SolutionCard
                                    key={index}
                                    title={solution.title}
                                    description={solution.description}
                                    icon={solution.icon}
                                    gradient={solution.gradient}
                                    index={index}
                                />
                            ))}
                        </div>
                    </ComponentSection>

                    {/* Case Study Card */}
                    <ComponentSection
                        title="Case Study Cards"
                        description="Detailed case study card with metrics and testimonials"
                    >
                        <div className="grid grid-cols-1 gap-6">
                            <CaseStudyCard {...componentData.caseStudies[0]} />
                        </div>
                    </ComponentSection>

                    {/* Resource Card */}
                    <ComponentSection
                        title="Resource Cards - All Variants"
                        description="Showing downloadable and watchable content in both views"
                    >
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Grid View - 3 Cards (mix of download & watch)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <ResourceCard
                                        id="1"
                                        title="Getting Started Guide"
                                        description="Learn how to implement AI solutions in your organization with this comprehensive guide."
                                        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                                        type="guide"
                                        difficulty="beginner"
                                        duration="15 min"
                                        downloadCount="2.5K"
                                        tags={['AI', 'Beginner']}
                                        slug="getting-started-guide"
                                        viewMode="grid"
                                    />
                                    <ResourceCard
                                        id="2"
                                        title="AI Webinar Series"
                                        description="Watch our introduction to AI for enterprise leaders and technical teams."
                                        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                        type="webinar"
                                        duration="30 min"
                                        attendees="800+"
                                        difficulty="beginner"
                                        tags={['Webinar', 'Introduction']}
                                        slug="ai-webinar-series"
                                        viewMode="grid"
                                    />
                                    <ResourceCard
                                        id="3"
                                        title="AI Implementation Whitepaper"
                                        description="Deep dive into enterprise AI implementation strategies and best practices."
                                        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800"
                                        type="whitepaper"
                                        difficulty="intermediate"
                                        downloadCount="1.8K"
                                        fileSize="3.2 MB"
                                        tags={['Enterprise', 'AI']}
                                        slug="ai-implementation-whitepaper"
                                        viewMode="grid"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">List View - 2 Cards (mix of download & watch)</h4>
                                <div className="space-y-6">
                                    <ResourceCard
                                        id="4"
                                        title="How to Build Scalable AI Systems"
                                        description="Learn from industry experts about building scalable AI systems that grow with your business needs and technical requirements for enterprise deployment."
                                        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                        type="webinar"
                                        duration="45 min"
                                        attendees="500+"
                                        difficulty="advanced"
                                        tags={['Webinar', 'Expert', 'Architecture']}
                                        slug="scalable-ai-systems"
                                        viewMode="list"
                                    />
                                    <ResourceCard
                                        id="5"
                                        title="Enterprise AI Best Practices Guide"
                                        description="A comprehensive downloadable guide covering enterprise-level AI best practices, implementation strategies, and scaling techniques for large organizations."
                                        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                                        type="guide"
                                        difficulty="intermediate"
                                        duration="20 min"
                                        downloadCount="4.2K"
                                        fileSize="2.8 MB"
                                        tags={['Enterprise', 'Best Practices', 'Guide']}
                                        slug="enterprise-ai-best-practices"
                                        viewMode="list"
                                    />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* CONTENT SECTION */}
                    {SectionDivider('Content', 'content', 'Article, blog, and content components')}

                    {/* Article Components */}
                    <ComponentSection
                        title="Article Components"
                        description="Article-specific components for blog posts"
                    >
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Article Image</h4>
                                <div className="w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                    <ArticleImage
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                                        alt="Sample Article"
                                        readTime="5 min"
                                        category="Technology"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Article Meta</h4>
                                <ArticleMeta
                                    category="Technology"
                                    readTime="5 min read"
                                    publishedAt="2024-01-15"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Article Stats</h4>
                                <ArticleStats
                                    readTime="5 min"
                                    rating="4.9"
                                    views="2.1K"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Article Tags</h4>
                                <ArticleTags
                                    tags={['React', 'Next.js', 'TypeScript', 'Web Development']}
                                    onShare={() => { }}
                                    copied={false}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* Content Cards */}
                    <ComponentSection
                        title="Content Cards"
                        description="Blog and article content cards"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Content Cards - All Types</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                    <ContentCard
                                        key={1}
                                        id="1"
                                        title="Getting Started with AI"
                                        description="Learn the fundamentals of AI implementation in your business."
                                        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                                        type="blog"
                                        viewMode="grid"
                                        slug="getting-started-ai"
                                        category="AI Trends"
                                        readTime="5 min"
                                        author="John Doe"
                                        authorRole="Senior Writer"
                                        tags={['AI', 'Guide']}
                                    />
                                    <ContentCard
                                        key={2}
                                        id="2"
                                        title="TechCorp Automation Success"
                                        description="How TechCorp achieved 300% ROI with AI automation and reduced support ticket volume by 80%."
                                        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                                        type="case-study"
                                        viewMode="grid"
                                        slug="techcorp-success"
                                        company="TechCorp"
                                        companySize="Enterprise"
                                        publishedAt="Jan 15, 2024"
                                        metrics={{
                                            automation: "85%",
                                            satisfaction: "98%",
                                            costSavings: "$500K"
                                        }}
                                    />
                                    <ContentCard
                                        key={3}
                                        id="3"
                                        title="AI Implementation Guide"
                                        description="Complete guide to implementing AI solutions in your organization with practical examples and best practices."
                                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                                        type="resource"
                                        viewMode="grid"
                                        slug="ai-implementation-guide"
                                        difficulty="intermediate"
                                        downloadCount="3.5K"
                                        readTime="25 min"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Content Cards - List View All Types</h4>
                                <div className="space-y-6">
                                    <ContentCard
                                        key={4}
                                        id="4"
                                        title="Advanced AI Strategies for 2024"
                                        description="Explore the latest AI strategies and trends for 2024, including practical implementation tips, advanced techniques, and industry best practices."
                                        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                        type="blog"
                                        viewMode="list"
                                        slug="advanced-ai-strategies-2024"
                                        category="AI Trends"
                                        readTime="10 min"
                                        author="Sarah Johnson"
                                        authorRole="AI Expert"
                                        tags={['AI', 'Strategy', '2024']}
                                    />
                                    <ContentCard
                                        key={5}
                                        id="5"
                                        title="Enterprise AI Case Study"
                                        description="A detailed case study of how a Fortune 500 company successfully implemented AI solutions across their organization, achieving significant cost savings and improved customer satisfaction."
                                        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                                        type="case-study"
                                        viewMode="list"
                                        slug="enterprise-ai-case-study"
                                        company="Enterprise Corp"
                                        companySize="1000+ employees"
                                        publishedAt="Feb 1, 2024"
                                        metrics={{
                                            automation: "90%",
                                            satisfaction: "99%",
                                            costSavings: "$1.2M"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* Case Study Components */}
                    <ComponentSection
                        title="Case Study Specific Components"
                        description="Components for case study pages"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Case Study Image</h4>
                                <div className="w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                    <CaseStudyImage
                                        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                                        title="TechCorp Automation Success"
                                        slug="techcorp-automation"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Case Study Metrics</h4>
                                <CaseStudyMetrics
                                    metrics={{
                                        automation: "85%",
                                        satisfaction: "98%",
                                        costSavings: "$500K",
                                        responseTime: "2min"
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Company Info</h4>
                                <CompanyInfo
                                    company="TechCorp"
                                    industry="Technology"
                                    companySize="Enterprise"
                                    logo="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200"
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* Related Cards */}
                    <ComponentSection
                        title="Related Content Cards"
                        description="Cards for showing related posts, case studies, and resources"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <RelatedPostCard
                                title="Getting Started with AI Assistants"
                                slug="getting-started-ai"
                                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                readTime="5 min read"
                                category="Tutorial"
                            />
                            <RelatedCaseStudyCard
                                id={1}
                                title="Enterprise Implementation at TechCorp"
                                industry="Technology"
                                challenge="High support ticket volume overwhelming the team"
                                duration="6 months"
                                readTime="5 min read"
                                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                                slug="enterprise-implementation"
                            />
                            <RelatedResourceCard
                                resource={{
                                    slug: "best-practices-guide",
                                    title: "Best Practices for AI Implementation",
                                    description: "Learn the essential best practices for implementing AI in your organization.",
                                    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
                                    type: "guide",
                                    difficulty: "Beginner",
                                    readTime: "15 min",
                                    downloadCount: "1.2K"
                                }}
                            />
                        </div>
                    </ComponentSection>

                    {/* Author Info */}
                    <ComponentSection
                        title="Author Information"
                        description="Author info and bio components"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Author Info</h4>
                                <AuthorInfo
                                    author="John Doe"
                                    authorRole="Senior Content Writer"
                                    authorImage="https://ui-avatars.com/api/?name=John+Doe&size=400"
                                    publishedAt="2024-01-15T00:00:00Z"
                                    readTime="5 min read"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Author Bio</h4>
                                <AuthorBio
                                    author="Sarah Smith"
                                    authorRole="Technical Writer"
                                    authorBio="Expert in developer documentation and technical content with 10+ years of experience."
                                    authorImage="https://ui-avatars.com/api/?name=Sarah+Smith&size=400"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Author Avatar (All Sizes)</h4>
                                <div className="flex gap-4 items-center">
                                    <AuthorAvatar src="https://ui-avatars.com/api/?name=John+Doe&size=200" alt="John Doe" size="small" />
                                    <AuthorAvatar src="https://ui-avatars.com/api/?name=Sarah+Smith&size=200" alt="Sarah Smith" size="medium" />
                                    <AuthorAvatar src="https://ui-avatars.com/api/?name=Mike+Johnson&size=200" alt="Mike Johnson" size="large" />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* FORMS SECTION */}
                    {SectionDivider('Forms', 'forms', 'Form components and inputs')}

                    <ComponentSection
                        title="Form Inputs"
                        description="Search bars, text inputs, and form elements"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Search Bar</h4>
                                <SearchBar
                                    searchQuery={demoSearchQuery}
                                    onSearchChange={setDemoSearchQuery}
                                    placeholder="Search components..."
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Chat Input</h4>
                                <ChatInput
                                    placeholder="Type your message..."
                                    onSend={() => {
                                        // Handle message send
                                    }}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* INPUTS SECTION */}
                    {SectionDivider('Inputs', 'inputs', 'Select, dropdown, and input components')}

                    <ComponentSection
                        title="Category Filter"
                        description="Filter buttons for categories"
                    >
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />
                        <p className="text-sm text-gray-600 mt-4">
                            Current selection: <span className="font-semibold">{selectedCategory}</span>
                        </p>
                    </ComponentSection>

                    <ComponentSection
                        title="Select & Multi-Select"
                        description="Dropdown selects and multi-select components"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Multi-Select</h4>
                                <MultiSelect
                                    options={componentData.multiSelectOptions}
                                    value={multiSelectValue}
                                    onChange={setMultiSelectValue}
                                    placeholder="Select technologies..."
                                    maxSelections={3}
                                    searchable
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Select Dropdown</h4>
                                <Select
                                    options={componentData.multiSelectOptions}
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Choose an option..."
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Sort Dropdown</h4>
                                <SortDropdown
                                    sortBy="newest"
                                    onSortChange={() => { }}
                                    options={[
                                        { value: 'newest', label: 'Newest First' },
                                        { value: 'oldest', label: 'Oldest First' },
                                        { value: 'popular', label: 'Most Popular' }
                                    ]}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* BADGES SECTION */}
                    {SectionDivider('Badges & Tags', 'badges', 'Badge components and tag variants')}

                    <ComponentSection
                        title="Badge Variants - All Variants Displayed"
                        description="Comprehensive badge component variants"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Status Badges - All 5 Variants</h4>
                                <div className="flex flex-wrap gap-3">
                                    <StatusBadge status="operational" />
                                    <StatusBadge status="degraded" />
                                    <StatusBadge status="outage" />
                                    <StatusBadge status="investigating" />
                                    <StatusBadge status="resolved" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Badge Components - Both Variants</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="default">Default Badge</Badge>
                                    <Badge variant="white">White Badge</Badge>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Category & Industry Badges</h4>
                                <div className="flex flex-wrap gap-3">
                                    <CategoryBadge category="Technology" />
                                    <CategoryBadge category="AI Trends" />
                                    <IndustryBadge industry="SaaS" />
                                    <IndustryBadge industry="Healthcare" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Base Badge - All Variants</h4>
                                <div className="flex flex-wrap gap-3">
                                    <BaseBadge variant="category" content="Technology" size="sm" />
                                    <BaseBadge variant="category" content="Business" size="md" />
                                    <BaseBadge variant="industry" content="SaaS" size="sm" />
                                    <BaseBadge variant="industry" content="Healthcare" size="md" />
                                    <BaseBadge variant="featured" content="Featured" size="sm" />
                                    <BaseBadge variant="type" content="Guide" size="md" />
                                    <BaseBadge variant="difficulty" content="Beginner" size="sm" />
                                    <BaseBadge variant="success" content="Success Story" size="md" />
                                    <BaseBadge variant="custom" content="Custom" size="lg" gradient="from-blue-500 to-teal-500" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Type Badges - All Types</h4>
                                <div className="flex flex-wrap gap-3">
                                    <ResourceTypeBadge type="guide" />
                                    <ResourceTypeBadge type="whitepaper" />
                                    <ResourceTypeBadge type="webinar" />
                                    <ResourceTypeBadge type="tool" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Type with Difficulty</h4>
                                <div className="flex flex-wrap gap-3">
                                    <ResourceTypeBadge type="guide" difficulty="beginner" />
                                    <ResourceTypeBadge type="whitepaper" difficulty="intermediate" />
                                    <ResourceTypeBadge type="webinar" difficulty="advanced" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Specialized Badges</h4>
                                <div className="flex flex-wrap gap-3">
                                    <SuccessStoryBadge />
                                    <TrustBadge>Verified</TrustBadge>
                                    <FeatureTag text="New Feature" />
                                    <AnimatedBadge>Featured</AnimatedBadge>
                                    <FeaturedBadge />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Meta Badges</h4>
                                <div className="flex flex-wrap gap-3">
                                    <MetaBadge type="category" value="Technology" />
                                    <MetaBadge type="readTime" value="5 min read" />
                                    <MetaBadge type="date" value="Jan 15, 2024" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">RSS Button</h4>
                                <RSSButton />
                            </div>

                            <ComponentSection
                                title="Perk Icons"
                                description="Icons for employee perks"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <PerkIcon iconName="dollar" />
                                    <PerkIcon iconName="heart" />
                                    <PerkIcon iconName="clock" />
                                    <PerkIcon iconName="book" />
                                </div>
                            </ComponentSection>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Badges</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="default">Guide</Badge>
                                    <Badge variant="white">Tutorial</Badge>
                                    <Badge>Animated</Badge>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* STATS & METRICS SECTION */}
                    {SectionDivider('Stats & Metrics', 'stats', 'Statistics and metrics display components')}

                    <ComponentSection
                        title="Stats Cards"
                        description="Statistics and metric displays"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {componentData.stats.map((stat, index) => (
                                <AnimatedStatCard
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Additional Stat Cards"
                        description="More stat card variants"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard
                                number="99.9%"
                                label="Uptime"
                            />
                            <StatsCard
                                value="10K+"
                                label="Active Users"
                            />
                            <StatisticCard
                                value="50+"
                                label="Components"
                            />
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Metric Cards"
                        description="Varied metric card styles"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <MetricCard
                                value="85%"
                                label="Automation"
                                variant="automation"
                                icon={<FiZap className="w-5 h-5" />}
                            />
                            <MetricCard
                                value="98%"
                                label="Satisfaction"
                                variant="satisfaction"
                                icon={<FiTrendingUp className="w-5 h-5" />}
                            />
                            <MetricCard
                                value="$500K"
                                label="Savings"
                                variant="savings"
                                icon={<FiShield className="w-5 h-5" />}
                            />
                            <MetricCard
                                value="2min"
                                label="Response"
                                variant="response"
                                icon={<FiClock className="w-5 h-5" />}
                            />
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Base Stats"
                        description="Base stats component with multiple metrics"
                    >
                        <BaseStats
                            variant="custom"
                            stats={[
                                { icon: FiTrendingUp, value: "99.9%", label: "Uptime" },
                                { icon: FiUsers, value: "10K+", label: "Active Users" },
                                { icon: FiCode, value: "50+", label: "Components" }
                            ]}
                        />
                    </ComponentSection>

                    {/* NAVIGATION SECTION */}
                    {SectionDivider('Navigation', 'navigation', 'Navigation and tab components')}

                    <ComponentSection
                        title="Navigation Components"
                        description="Tabs, breadcrumbs, and navigation elements"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Tab Navigation</h4>
                                <TabNavigation
                                    tabs={[
                                        { id: 'all', label: 'All' },
                                        { id: 'featured', label: 'Featured' },
                                        { id: 'popular', label: 'Popular' }
                                    ]}
                                    activeTab={selectedTab}
                                    onTabChange={setSelectedTab}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Tab Buttons</h4>
                                <div className="flex gap-2 border-b border-gray-200">
                                    <TabButton
                                        label="All Posts"
                                        isActive={activeTabButton === 'All Posts'}
                                        onClick={() => setActiveTabButton('All Posts')}
                                    />
                                    <TabButton
                                        label="Featured"
                                        isActive={activeTabButton === 'Featured'}
                                        onClick={() => setActiveTabButton('Featured')}
                                    />
                                    <TabButton
                                        label="Popular"
                                        isActive={activeTabButton === 'Popular'}
                                        onClick={() => setActiveTabButton('Popular')}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Active: <span className="font-semibold">{activeTabButton}</span>
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">View Mode Toggle</h4>
                                <div className="flex items-start gap-4">
                                    <ViewModeToggle
                                        viewMode={viewMode}
                                        onViewModeChange={setViewMode}
                                        className="w-auto"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Current view: <span className="font-semibold">{viewMode}</span>
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Breadcrumbs</h4>
                                <Breadcrumb
                                    items={[
                                        { label: 'Home', href: '/' },
                                        { label: 'Showcase', href: '/showcase' },
                                        { label: 'Components', href: '/showcase#cards' }
                                    ]}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* ACTIONS SECTION */}
                    {SectionDivider('Actions', 'actions', 'Action buttons and interactive elements')}

                    <ComponentSection
                        title="Button Variants - All Combinations"
                        description="All button variants, sizes, and icon combinations"
                        searchQuery={componentSearchQuery}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">All Variants (Size: md)</h4>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline">Outline</Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">All Sizes with Primary Variant</h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Button size="sm" variant="primary">Small</Button>
                                    <Button size="md" variant="primary">Medium</Button>
                                    <Button size="lg" variant="primary">Large</Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">All Sizes with Secondary Variant</h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Button size="sm" variant="secondary">Small</Button>
                                    <Button size="md" variant="secondary">Medium</Button>
                                    <Button size="lg" variant="secondary">Large</Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">All Sizes with Outline Variant</h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Button size="sm" variant="outline">Small</Button>
                                    <Button size="md" variant="outline">Medium</Button>
                                    <Button size="lg" variant="outline">Large</Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Icon on Right</h4>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary">
                                        Get Started
                                        <FiArrowRight className="w-5 h-5" />
                                    </Button>
                                    <Button variant="secondary">
                                        Learn More
                                        <FiArrowRight className="w-5 h-5" />
                                    </Button>
                                    <Button variant="outline">
                                        Download
                                        <FiArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Icon on Left</h4>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary">
                                        <FiArrowRight className="w-5 h-5" />
                                        Get Started
                                    </Button>
                                    <Button variant="secondary">
                                        <FiArrowRight className="w-5 h-5" />
                                        Learn More
                                    </Button>
                                    <Button variant="outline">
                                        <FiArrowRight className="w-5 h-5" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* CTAs SECTION */}
                    {SectionDivider('Call-to-Actions', 'ctas', 'CTA section variants')}

                    <ComponentSection
                        title="CTA Components"
                        description="Call-to-action buttons and sections"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">CTA Button (Primary)</h4>
                                <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-8 rounded-xl">
                                    <CTAButton href="/pricing" variant="primary">
                                        Start Free Trial
                                    </CTAButton>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">CTA Button (Secondary)</h4>
                                <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-8 rounded-xl">
                                    <CTAButton href="/pricing" variant="secondary">
                                        Learn More
                                    </CTAButton>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">CTA Stats</h4>
                                <CTAStats
                                    stats={[
                                        { number: "10K+", label: "Happy Customers" },
                                        { number: "99.9%", label: "Uptime" },
                                        { number: "24/7", label: "Support" }
                                    ]}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* TEAM SECTION */}
                    {SectionDivider('Team', 'team', 'Team member cards and components')}

                    {/* Testimonial Block */}
                    <ComponentSection
                        title="Testimonial Block"
                        description="Large testimonial block component"
                    >
                        <TestimonialBlock
                            testimonial="This is the best component library I've ever used. The quality and attention to detail is outstanding."
                            author="Sarah Johnson, Product Manager"
                        />
                    </ComponentSection>

                    <ComponentSection
                        title="Team Member Cards"
                        description="Team member card variants"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            <div className="aspect-square">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Full Card with Social Links</h4>
                                <div className="h-full">
                                    <TeamMemberCard
                                        name="John Doe"
                                        role="Chief Executive Officer"
                                        bio="Leading the vision and strategy for our company's growth and innovation."
                                        image="https://ui-avatars.com/api/?name=John+Doe&size=400"
                                        linkedin="https://linkedin.com"
                                        x="https://twitter.com"
                                        email="john@example.com"
                                        index={0}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Compact Card</h4>
                                <div className="w-full max-w-xs mx-auto aspect-square">
                                    <div className="h-full w-full">
                                        <TeamMemberCompactCard
                                            name="Sarah Johnson"
                                            role="Marketing Director"
                                            bio="Driving brand awareness and customer engagement through innovative marketing strategies."
                                            image="https://ui-avatars.com/api/?name=Sarah+Johnson&size=400"
                                            className="h-full w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* COMPANY SECTION */}
                    {SectionDivider('Company', 'company', 'Company information and culture components')}

                    <ComponentSection
                        title="Industry Cards"
                        description="Cards for different industries we serve"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <IndustryCard
                                title="Technology"
                                description="Enterprise software solutions"
                                iconColor="blue"
                                icon={<FiCode className="w-8 h-8" />}
                            />
                            <IndustryCard
                                title="Healthcare"
                                description="Medical technology innovations"
                                iconColor="green"
                                icon={<FiShield className="w-8 h-8" />}
                            />
                            <IndustryCard
                                title="Finance"
                                description="Financial services and fintech"
                                iconColor="purple"
                                icon={<FiTrendingUp className="w-8 h-8" />}
                            />
                        </div>
                    </ComponentSection>

                    {/* Culture Image Grid */}
                    <ComponentSection
                        title="Culture Image Grid"
                        description="Grid of culture and team images"
                    >
                        <CultureImageGrid
                            images={[
                                { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400", alt: "Team Meeting" },
                                { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", alt: "Collaboration" },
                                { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400", alt: "Innovation" },
                                { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400", alt: "Growth" },
                                { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400", alt: "Workspace" },
                                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400", alt: "Conference" },
                                { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400", alt: "Creativity" },
                                { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400", alt: "Success" }
                            ]}
                        />
                    </ComponentSection>

                    {/* Contact Components */}
                    <ComponentSection
                        title="Contact Components"
                        description="Contact information display"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Contact Info Item</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                                    <ContactInfoItem day="Monday" time="9:00 AM - 6:00 PM" />
                                    <ContactInfoItem day="Tuesday" time="9:00 AM - 6:00 PM" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Contact Info Card</h4>
                                <ContactInfoCard
                                    icon={<FiMail className="w-6 h-6" />}
                                    title="Email Support"
                                    description="Get help via email"
                                    gradientClasses="bg-blue-50"
                                    borderClasses="border-blue-200"
                                    iconBgClasses="bg-blue-100"
                                >
                                    <p className="text-gray-700">support@assistrio.com</p>
                                </ContactInfoCard>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Two Column Layout</h4>
                                <TwoColumnLayout containerSize="full">
                                    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Left Content</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">This is the left column content area.</p>
                                    </div>
                                    <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Right Content</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">This is the right column content area.</p>
                                    </div>
                                </TwoColumnLayout>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* Legal Components */}
                    <ComponentSection
                        title="Legal Components"
                        description="Legal page components"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Legal Document Badge</h4>
                                <LegalDocumentBadge />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Legal Back to Top Button</h4>
                                <LegalBackToTopButton show={false} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Company & Culture Components"
                        description="Mission, vision, culture, and company info components"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative">
                                <MissionVisionCard
                                    title="Our Mission"
                                    description="To empower businesses with innovative AI solutions that transform customer experience."
                                    icon={<FiHome className="w-8 h-8 text-white" />}
                                    gradientFrom="from-brand-500"
                                    gradientTo="to-brand-600"
                                    iconBgColor="bg-white/20"
                                    className="text-white"
                                />
                                <style jsx>{`
                                    div :global(h2),
                                    div :global(p) {
                                        color: white !important;
                                    }
                                `}</style>
                            </div>
                            <CultureCard
                                title="Work-Life Balance"
                                description="We believe in flexible working hours and remote work options."
                                icon={<FiClock className="w-8 h-8 text-brand-600" />}
                            />
                            <ValueCard
                                title="Innovation"
                                description="Constantly pushing boundaries to deliver cutting-edge solutions."
                                icon={<FiZap className="w-8 h-8 text-brand-600" />}
                            />
                        </div>
                    </ComponentSection>

                    {/* FEATURE HIGHLIGHTS SECTION */}
                    {SectionDivider('Feature Highlights', 'feature-highlights', 'Feature showcase components')}

                    {/* Benefits List */}
                    <ComponentSection
                        title="Benefits List"
                        description="List of benefits for resources"
                    >
                        <BenefitsList resourceType="guide" />
                    </ComponentSection>

                    {/* Process Steps */}
                    <ComponentSection
                        title="Process Steps"
                        description="Step-by-step process visualization"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ProcessStep
                                stepNumber={1}
                                title="Sign Up"
                                description="Create your account in seconds"
                            />
                            <ProcessStep
                                stepNumber={2}
                                title="Configure"
                                description="Set up your preferences"
                            />
                            <ProcessStep
                                stepNumber={3}
                                title="Launch"
                                description="Start using the product"
                            />
                        </div>
                    </ComponentSection>

                    {/* Result Card */}
                    <ComponentSection
                        title="Result Cards"
                        description="Display of results and outcomes"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ResultCard result="Task completed successfully" />
                            <ResultCard result="Data processed and saved" />
                        </div>
                    </ComponentSection>

                    {/* Section Headers & Tabs */}
                    <ComponentSection
                        title="Section Headers"
                        description="Headers and section navigation"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Section Header</h4>
                                <SectionHeader
                                    title="Our Amazing Features"
                                    subtitle="Everything you need to succeed"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Team Section Header</h4>
                                <TeamSectionHeader
                                    title="Meet Our Team"
                                    subtitle="The talented people behind Assistrio"
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Feature Lists and Items"
                        description="Feature display components"
                    >
                        <div className="space-y-6">
                            <FeatureList
                                title="Key Features"
                                features={[
                                    {
                                        icon: <FiZap className="w-6 h-6 text-white" />,
                                        title: "Lightning Fast",
                                        description: "Optimized for speed and performance"
                                    },
                                    {
                                        icon: <FiShield className="w-6 h-6 text-white" />,
                                        title: "Secure by Default",
                                        description: "Enterprise-grade security built-in"
                                    },
                                    {
                                        icon: <FiTrendingUp className="w-6 h-6 text-white" />,
                                        title: "Scalable Architecture",
                                        description: "Grows with your business"
                                    }
                                ]}
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Feature Items</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg border border-gray-200">
                                    <FeatureItem text="Clean APIs and comprehensive documentation" />
                                    <FeatureItem text="Easy integration with existing systems" />
                                    <FeatureItem text="Regular updates and new features" highlighted />
                                    <FeatureItem text="24/7 community support" />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* INTERACTIVE COMPONENTS SECTION */}
                    {SectionDivider('Interactive Components', 'interactive-components', 'Interactive and engaging components')}

                    <ComponentSection
                        title="Interactive Elements"
                        description="Chat, ratings, and interactive components"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Chat Demo</h4>
                                <ChatDemo messages={componentData.chatMessages} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Chat Messages (Individual)</h4>
                                <div className="space-y-3">
                                    <ChatMessage sender="Customer" message="How do I reset my password?" isCustomer={true} />
                                    <ChatMessage sender="Alexi" message="I can help you with that! Click on 'Forgot Password' on the login page." isCustomer={false} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Star Rating</h4>
                                <div className="flex gap-4">
                                    <StarRating rating={4.5} maxRating={5} />
                                    <StarRating rating={5} maxRating={5} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Alexi Demo Card</h4>
                                <AlexiDemoCard />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Visual Card</h4>
                                <VisualCard
                                    icon={<FiZap className="w-8 h-8 text-teal-500" />}
                                    title="Fast Performance"
                                    description="Lightning-fast loading and response times"
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Resource Components"
                        description="Resource-specific stats, tags, and action buttons"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Stats (Guide)</h4>
                                <ResourceStats
                                    resource={{
                                        type: "guide",
                                        fileSize: "2.4 MB",
                                        downloadCount: "1.2K"
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Stats (Webinar)</h4>
                                <ResourceStats
                                    resource={{
                                        type: "webinar",
                                        duration: "1 hour",
                                        attendees: "500+"
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Detailed Stats (Guide)</h4>
                                <ResourceDetailedStats
                                    resource={{
                                        type: "guide",
                                        fileSize: "2.4 MB",
                                        downloadCount: "1.2K",
                                        readTime: "15 min",
                                        lastUpdated: "Jan 10, 2024"
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Detailed Stats (Webinar)</h4>
                                <ResourceDetailedStats
                                    resource={{
                                        type: "webinar",
                                        duration: "1 hour",
                                        attendees: "500+",
                                        date: "February 15, 2024",
                                        presenter: "John Smith"
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Tags</h4>
                                <ResourceTags tags={['React', 'Next.js', 'TypeScript', 'Tutorial']} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Resource Action Buttons</h4>
                                <ResourceActionButtons
                                    resource={{
                                        type: "guide",
                                        title: "Getting Started Guide"
                                    }}
                                    isBookmarked={false}
                                    isLiked={false}
                                    showShareMenu={false}
                                    copied={false}
                                    onBookmark={() => { }}
                                    onLike={() => { }}
                                    onShare={() => { }}
                                    onToggleShareMenu={() => { }}
                                />
                            </div>
                        </div>
                    </ComponentSection>

                    {/* Share & Social Components */}
                    <ComponentSection
                        title="Share Components"
                        description="Social sharing buttons and menu"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Share Buttons</h4>
                                <div className="flex gap-2">
                                    <ShareButton platform="x" onClick={() => { }} title="Share on X" />
                                    <ShareButton platform="linkedin" onClick={() => { }} title="Share on LinkedIn" />
                                    <ShareButton platform="facebook" onClick={() => { }} title="Share on Facebook" />
                                    <ShareButton platform="copy" onClick={() => { }} title="Copy Link" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Share Menu</h4>
                                <div className="relative inline-block">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                        Share Options
                                    </button>
                                    <ShareMenu
                                        show={false}
                                        onClose={() => { }}
                                        onShare={() => { }}
                                        copied={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* STATUS & MONITORING SECTION */}
                    {SectionDivider('Status & Monitoring', 'status-and-monitoring', 'Status, incidents, and monitoring components')}

                    <ComponentSection
                        title="Status & Incident Cards"
                        description="Service status and incident monitoring"
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Incident Cards</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {componentData.incidents.map((incident, index) => (
                                        <IncidentCard key={incident.id} incident={incident} index={index} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Status Icons</h4>
                                <div className="flex gap-4">
                                    <StatusIcon status="operational" />
                                    <StatusIcon status="degraded" />
                                    <StatusIcon status="down" />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* SECTION TEMPLATES SECTION */}
                    {SectionDivider('Section Templates', 'section-templates', 'Pre-built section templates')}

                    <ComponentSection
                        title="Hero Sections"
                        description="Hero section templates"
                    >
                        <div className="space-y-8">
                            {/* Hero Section with Dark Mode Support */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 dark:from-blue-900 dark:via-purple-900 dark:to-teal-800 rounded-2xl p-8 sm:p-12 md:p-16 text-white shadow-2xl">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="mb-3">
                                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                                            ⚡ Enhanced Experience
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                                        Welcome to Assistrio
                                    </h2>
                                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 dark:text-white/80 mb-8 max-w-2xl">
                                        Your complete component library with beautiful dark mode support
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="secondary"
                                            className="bg-white text-blue-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                                        >
                                            Get Started
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-2 border-white text-white hover:bg-white/10 dark:border-white/50 dark:hover:bg-white/20"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="FAQ Section"
                        description="FAQ and accordion sections"
                    >
                        <div className="space-y-4">
                            {componentData.showcaseFaqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    category={faq.category}
                                    answer={faq.answer}
                                    hasAlexi={false}
                                    isOpen={faq.isOpen}
                                    onToggle={() => { }}
                                    renderHtmlContent={(content) => <div>{content}</div>}
                                />
                            ))}
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Layout Containers"
                        description="Container components for responsive layouts"
                    >
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Container Sizes</h4>
                                <div className="grid gap-4">
                                    <Container className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4 text-center rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm">
                                        <p className="text-sm text-gray-700 dark:text-blue-200 font-medium">Container (max-w: 1280px)</p>
                                    </Container>
                                    <ContainerSm className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 p-4 text-center rounded-lg border border-teal-200 dark:border-teal-800 shadow-sm">
                                        <p className="text-sm text-gray-700 dark:text-teal-200 font-medium">ContainerSm (max-w: 640px)</p>
                                    </ContainerSm>
                                    <ContainerMd className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 text-center rounded-lg border border-purple-200 dark:border-purple-800 shadow-sm">
                                        <p className="text-sm text-gray-700 dark:text-purple-200 font-medium">ContainerMd (max-w: 768px)</p>
                                    </ContainerMd>
                                    <ContainerLg className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-4 text-center rounded-lg border border-orange-200 dark:border-orange-800 shadow-sm">
                                        <p className="text-sm text-gray-700 dark:text-orange-200 font-medium">ContainerLg (max-w: 1024px)</p>
                                    </ContainerLg>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* LOADING & STATES SECTION */}
                    {SectionDivider('Loading & States', 'loading-and-states', 'Loading, error, and state components')}

                    <ComponentSection
                        title="Loading & Error States"
                        description="Loading spinners and error states"
                    >
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Loading Spinner</h4>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-12 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                                    <div className="flex justify-center">
                                        <LoadingSpinner
                                            className="bg-transparent min-h-0 dark:bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Not Found State</h4>
                                <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-12 rounded-xl border border-gray-200 dark:border-red-800 shadow-sm">
                                    <NotFoundState
                                        title="Item Not Found"
                                        message="The item you're looking for doesn't exist."
                                        className="bg-transparent min-h-0"
                                    />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Skeleton Loader</h4>
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6"></div>
                                        <div className="flex gap-4 mt-6">
                                            <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded w-24"></div>
                                            <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    {/* CAREERS SECTION */}
                    {SectionDivider('Careers', 'careers', 'Job listings and career components')}

                    {/* Perk Cards */}
                    <ComponentSection
                        title="Perk Cards"
                        description="Employee perk cards with icons"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PerkCard
                                title="Competitive Salary"
                                description="Top-tier compensation packages"
                                icon="dollar"
                            />
                            <PerkCard
                                title="Health Benefits"
                                description="Comprehensive health coverage"
                                icon="heart"
                            />
                            <PerkCard
                                title="Flexible Hours"
                                description="Work when you're most productive"
                                icon="clock"
                            />
                        </div>
                    </ComponentSection>

                    {/* Job Card */}
                    <ComponentSection
                        title="Job Cards"
                        description="Job listing cards"
                    >
                        <JobCard
                            id={1}
                            title="Senior Frontend Developer"
                            department="Engineering"
                            location="Remote"
                            type="Full-time"
                            experience="5+ years"
                            description="Join our team to build amazing user experiences with cutting-edge technology."
                            requirements={[
                                "5+ years of React experience",
                                "Strong TypeScript knowledge",
                                "Experience with Next.js"
                            ]}
                            benefits={[
                                "Competitive salary",
                                "Flexible work hours",
                                "Health insurance"
                            ]}
                        />
                    </ComponentSection>

                    {/* Step Card */}
                    <ComponentSection
                        title="Step Cards"
                        description="Large step-by-step cards with visual content"
                    >
                        <StepCard
                            stepNumber={1}
                            title="Get Started"
                            description="Setting up your account is easy and takes just a few minutes."
                            features={[
                                "Create your account",
                                "Verify your email",
                                "Complete your profile"
                            ]}
                            visualCard={
                                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-12 text-white text-center">
                                    <h3 className="text-3xl font-bold mb-4">Step 1</h3>
                                    <p className="text-xl">Get Started Today</p>
                                </div>
                            }
                        />
                    </ComponentSection>

                    {/* Copy Notification */}
                    <ComponentSection
                        title="Copy Notification"
                        description="Notification for copy operations"
                    >
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Copy Notification</h4>
                                <CopyNotification show={false} message="Link copied to clipboard!" />
                            </div>
                            <p className="text-sm text-gray-600">This component shows a notification when users copy content (e.g., URLs, code snippets). It&apos;s currently hidden.</p>
                        </div>
                    </ComponentSection>

                    {/* SECTION TEMPLATES */}
                    {SectionDivider('Section Templates', 'section-templates', 'Full-page section templates')}

                    <ComponentSection
                        title="Section Templates - Rendered Components"
                        description="All section templates are imported and available. Each section is being rendered with mock data."
                    >
                        <div className="space-y-16 border-4 border-dashed border-blue-300 dark:border-blue-600 rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 dark:from-blue-950 dark:via-blue-950 dark:to-indigo-950 shadow-xl">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">40+ Section Templates</h3>
                                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                    These section templates are designed for use on full pages. They are imported and ready to use throughout the application.
                                    Visit the actual pages (home, about, careers, etc.) to see them in action with real data.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ HomeHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ProductHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ AboutHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ CareersHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ContactHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ StatusHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ HelpCenterHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ FeaturesSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ServicesSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ TestimonialsSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ FAQSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ProductShowcaseSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ProductDemoSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ProductStepsSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ SocialProofSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ StatsSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ MissionVisionSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ TeamSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ IndustrySection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ AlexiShowcaseSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ SecuritySection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ OverallStatusSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ IncidentsSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ PerksSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ JobsSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ProcessSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ CTASection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ResourceCTASection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ ContactFormSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ LegalHeroSection</div>
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">✓ And 10+ more...</div>
                            </div>

                            <p className="text-center text-xs text-gray-600 dark:text-gray-400 italic mt-8">
                                Each section template is a complete, production-ready component with proper styling, animations, and responsive design.
                            </p>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Product Sections"
                        description="Product showcase, demo, and steps sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Product Showcase Section</h4>
                                <ProductShowcaseSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Product Demo Section</h4>
                                <ProductDemoSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Product Steps Section</h4>
                                <ProductStepsSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Article & Case Study Sections"
                        description="Content for articles and case studies"
                    >
                        <div className="grid grid-cols-1 gap-16">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Article Featured Section</h4>
                                <div className="min-h-[500px]">
                                    <ArticleFeaturedSection
                                        title="Featured Article"
                                        featuredItem={{
                                            title: "Getting Started with AI Implementation",
                                            excerpt: "Learn how to implement AI solutions in your business with our comprehensive guide. This article covers everything from initial planning to full deployment.",
                                            slug: "getting-started-ai",
                                            category: "AI Guide",
                                            tags: ["AI", "Guide", "Implementation"],
                                            author: "John Doe",
                                            authorRole: "Senior Writer",
                                            authorImage: "https://ui-avatars.com/api/?name=John+Doe&size=400",
                                            publishedAt: "2024-01-15",
                                            readTime: "5 min read",
                                            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Case Study Hero Section</h4>
                                <div className="min-h-[500px]">
                                    <CaseStudyHeroSection caseStudy={{
                                        title: "Enterprise AI Implementation Success",
                                        industry: "Technology",
                                        company: "TechCorp",
                                        companySize: "Enterprise (500+ employees)",
                                        duration: "6 months",
                                        readTime: "5 min read",
                                        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
                                        metrics: {
                                            automation: "85%",
                                            satisfaction: "98%",
                                            costSavings: "$500K"
                                        }
                                    }} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Case Study Featured Section</h4>
                                <div className="min-h-[500px]">
                                    <CaseStudyFeaturedSection
                                        title="Featured Case Study"
                                        featuredItem={{
                                            id: 1,
                                            title: "TechCorp Success Story",
                                            description: "How we helped TechCorp achieve 300% ROI with AI automation",
                                            industry: "Technology",
                                            company: "TechCorp",
                                            companySize: "Enterprise",
                                            slug: "techcorp-success",
                                            challenge: "High support ticket volume overwhelming the team, resulting in slow response times and customer dissatisfaction",
                                            metrics: {
                                                automation: "85%",
                                                satisfaction: "98%",
                                                costSavings: "$500K",
                                                responseTime: "90%"
                                            },
                                            testimonial: "The AI implementation transformed our customer support. We've achieved 85% automation while maintaining high satisfaction rates.",
                                            testimonialAuthor: "Sarah Johnson, CTO at TechCorp",
                                            duration: "6 months",
                                            readTime: "5 min read",
                                            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
                                            logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200"
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Featured Content Section (Blog)</h4>
                                <div className="min-h-[500px]">
                                    <FeaturedContentSection
                                        title="Featured Articles"
                                        type="blog"
                                        featuredItem={{
                                            title: "The Future of AI in Business",
                                            slug: "future-of-ai-business",
                                            excerpt: "Discover how artificial intelligence is transforming the business landscape and what it means for your company's future.",
                                            category: "AI Insights",
                                            tags: ["AI", "Business", "Technology"],
                                            author: "Jane Smith",
                                            authorRole: "Senior AI Researcher",
                                            authorImage: "https://ui-avatars.com/api/?name=Jane+Smith&size=400",
                                            publishedAt: "2024-02-20",
                                            readTime: "8 min read",
                                            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Featured Content Section (Case Study)</h4>
                                <div className="min-h-[500px]">
                                    <FeaturedContentSection
                                        title="Success Stories"
                                        type="case-study"
                                        featuredItem={{
                                            title: "Enterprise AI Transformation",
                                            slug: "enterprise-ai-transformation",
                                            description: "How a Fortune 500 company achieved 95% automation rate and reduced costs by $2M annually with our AI platform.",
                                            category: "Enterprise",
                                            company: "GlobalTech Inc.",
                                            companySize: "Enterprise (5,000+ employees)",
                                            logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200",
                                            metrics: {
                                                automation: "95%",
                                                satisfaction: "99%",
                                                costSavings: "$2M",
                                                responseTime: "2 min"
                                            },
                                            testimonial: "This platform completely revolutionized our operations. The ROI was evident within the first quarter.",
                                            testimonialAuthor: "Michael Chen, VP of Operations",
                                            publishedAt: "2024-01-10",
                                            readTime: "10 min read",
                                            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Featured Content Section (Resource)</h4>
                                <div className="min-h-[500px]">
                                    <FeaturedContentSection
                                        title="Featured Resources"
                                        type="resource"
                                        featuredItem={{
                                            title: "Complete Guide to AI Implementation",
                                            slug: "ai-implementation-guide",
                                            excerpt: "A comprehensive guide covering everything you need to know about implementing AI solutions in your organization.",
                                            type: "ebook",
                                            category: "Guide",
                                            author: "Tech Team",
                                            authorRole: "AI Specialists",
                                            authorImage: "https://ui-avatars.com/api/?name=Tech+Team&size=400",
                                            publishedAt: "2024-03-15",
                                            duration: "45 min read",
                                            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Social Proof & Stats Sections"
                        description="Social proof, testimonials, and statistics"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Social Proof Section</h4>
                                <SocialProofSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Stats Section</h4>
                                <StatsSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Live Stats Section</h4>
                                <LiveStatsSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Company & About Sections"
                        description="Company information, mission, vision, and team"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Mission Vision Section</h4>
                                <MissionVisionSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Team Section</h4>
                                <TeamSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Industry Section</h4>
                                <IndustrySection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">What We Do Section</h4>
                                <WhatWeDoSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Why Different Section</h4>
                                <WhyDifferentSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="AI & Security Sections"
                        description="Alexi showcase and security features"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Alexi Showcase Section</h4>
                                <AlexiShowcaseSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Security Section</h4>
                                <SecuritySection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Status & Monitoring Sections"
                        description="System status and incident tracking"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Overall Status Section</h4>
                                <OverallStatusSection operationalServices={25} totalServices={25} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Incidents Section</h4>
                                <IncidentsSection incidents={[]} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Comparison Section</h4>
                                <ComparisonSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Careers Sections"
                        description="Careers page sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Perks Section</h4>
                                <PerksSection title="Benefits & Perks" perks={[
                                    { title: "Health Insurance", description: "Comprehensive coverage", icon: "health" },
                                    { title: "Remote Work", description: "Work from anywhere", icon: "remote" },
                                    { title: "401k Matching", description: "Company matching program", icon: "retirement" },
                                    { title: "Flexible PTO", description: "Unlimited vacation days", icon: "vacation" }
                                ]} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Jobs Section</h4>
                                <JobsSection title="Open Positions" jobs={[
                                    {
                                        id: 1,
                                        title: "Senior Full Stack Developer",
                                        department: "Engineering",
                                        location: "Remote",
                                        type: "Full-time",
                                        experience: "5+ years",
                                        description: "Lead development of full-stack applications",
                                        requirements: ["React", "Node.js", "TypeScript"],
                                        benefits: ["Health Insurance", "Remote Work"]
                                    },
                                    {
                                        id: 2,
                                        title: "Product Designer",
                                        department: "Design",
                                        location: "Hybrid",
                                        type: "Full-time",
                                        experience: "3+ years",
                                        description: "Design user interfaces and experiences",
                                        requirements: ["Figma", "UI/UX", "Prototyping"],
                                        benefits: ["Health Insurance", "Flexible PTO"]
                                    }
                                ]} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Process Section</h4>
                                <ProcessSection title="Our Hiring Process" steps={componentData.processSteps} />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Help Center Sections"
                        description="Help center and support sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Help Center Categories Section</h4>
                                <HelpCenterCategoriesSection
                                    categories={[]}
                                    renderHtmlContent={(content) => <div>{content}</div>}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Search Results Section</h4>
                                <SearchResultsSection searchQuery="help" resultCount={5}>
                                    <div>Search results here</div>
                                </SearchResultsSection>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Help Center Stats Section</h4>
                                <HelpCenterStatsSection faqCount={50} categoryCount={8} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Help Center FAQs Section</h4>
                                <HelpCenterFAQsSection
                                    faqs={componentData.showcaseFaqs}
                                    openFAQ={0}
                                    onToggleFAQ={() => { }}
                                    renderHtmlContent={(content) => <div>{content}</div>}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Contact Support Section</h4>
                                <ContactSupportSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Contact Sections"
                        description="Contact page sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Contact Form Section</h4>
                                <ContactFormSection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Contact Info Section</h4>
                                <ContactInfoSection />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="Legal Sections"
                        description="Legal page sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Legal Hero Section</h4>
                                <LegalHeroSection title="Terms of Service" lastUpdated="Jan 2024" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Legal Table of Contents</h4>
                                <LegalTableOfContents sections={[]} activeSection="" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Legal Quick Actions</h4>
                                <LegalQuickActions />
                            </div>
                        </div>
                    </ComponentSection>

                    <ComponentSection
                        title="CTA Sections"
                        description="Call-to-action sections"
                    >
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">CTA Section</h4>
                                <CTASection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Product CTA Section</h4>
                                <ProductCTASection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">About CTA Section</h4>
                                <AboutCTASection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Resource CTA Section</h4>
                                <ResourceCTASection />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-4">Careers CTA Section</h4>
                                <CareersCTASection
                                    title="Join Our Team"
                                    subtitle="We're hiring"
                                    buttonText="View Openings"
                                    buttonHref="/careers"
                                />
                            </div>
                        </div>
                    </ComponentSection>

                </div>
            </main>
        </div>
    );
}

function SectionDivider(title: string, id: string, description: string) {
    return (
        <div id={id} className="my-16 scroll-mt-20">
            <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mb-8">
                <div className="flex items-start gap-4">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{description}</p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm">
                            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Included</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ComponentSectionProps {
    title: string;
    description: string;
    children: React.ReactNode;
    visible?: boolean;
    searchQuery?: string;
}

function ComponentSection({ title, description, children, visible = true, searchQuery = '' }: ComponentSectionProps) {
    const isVisible = visible && (searchQuery === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!isVisible) return null;

    return (
        <div className="mb-16">
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>
            {children}
        </div>
    );
}
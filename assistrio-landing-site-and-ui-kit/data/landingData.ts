// Centralized landing page data
// This file contains all dummy content and resources for the landing pages

import { LINKS, getSocialLink } from '../config/links';

// Team members data
export const teamMembers = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        bio: "Sarah has over 15 years of experience in AI and machine learning. She previously led AI research teams at major tech companies and holds a PhD in Computer Science from Stanford.",
        image: LINKS.IMAGES.TEAM_MEMBER_1,
        linkedin: getSocialLink('linkedin', 'sarahchen'),
        x: getSocialLink('x', 'sarahchen'),
        email: "sarah@your-domain.com"
    },
    {
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        bio: "Michael is a serial entrepreneur with expertise in scalable AI systems. He has built and scaled multiple AI startups and holds patents in natural language processing.",
        image: LINKS.IMAGES.TEAM_MEMBER_2,
        linkedin: getSocialLink('linkedin', 'michaelrodriguez'),
        x: getSocialLink('x', 'mrodriguez'),
        email: "michael@your-domain.com"
    },
    {
        name: "Emily Watson",
        role: "Head of Product",
        bio: "Emily brings 10+ years of product management experience from leading SaaS companies. She's passionate about creating user-centered AI solutions that solve real business problems.",
        image: LINKS.IMAGES.TEAM_MEMBER_3,
        linkedin: getSocialLink('linkedin', 'emilywatson'),
        x: getSocialLink('x', 'emilywatson'),
        email: "emily@your-domain.com"
    },
    {
        name: "David Kim",
        role: "Head of Engineering",
        bio: "David leads our engineering team with expertise in distributed systems and AI infrastructure. He previously worked at Google and has a Master's in Computer Science from MIT.",
        image: LINKS.IMAGES.TEAM_MEMBER_4,
        linkedin: getSocialLink('linkedin', 'davidkim'),
        x: getSocialLink('x', 'davidkim'),
        email: "david@your-domain.com"
    },
    {
        name: "Lisa Thompson",
        role: "Head of Design",
        bio: "Lisa is a UX/UI design expert with a focus on AI-human interaction design. She has designed interfaces for millions of users and holds a Master's in Human-Computer Interaction.",
        image: LINKS.IMAGES.TEAM_MEMBER_5,
        linkedin: getSocialLink('linkedin', 'lisathompson'),
        x: getSocialLink('x', 'lisathompson'),
        email: "lisa@your-domain.com"
    },
    {
        name: "Alex Johnson",
        role: "Head of Customer Success",
        bio: "Alex ensures our customers get maximum value from our platform. With 12+ years in customer success, he's helped hundreds of companies implement AI solutions successfully.",
        image: LINKS.IMAGES.TEAM_MEMBER_6,
        linkedin: getSocialLink('linkedin', 'alexjohnson'),
        x: getSocialLink('x', 'alexjohnson'),
        email: "alex@your-domain.com"
    },
    {
        name: "Rachel Green",
        role: "Head of Marketing",
        bio: "Rachel leads our marketing efforts with expertise in B2B SaaS growth. She has scaled marketing teams at multiple startups and holds an MBA from Wharton.",
        image: LINKS.IMAGES.TEAM_MEMBER_7,
        linkedin: getSocialLink('linkedin', 'rachelgreen'),
        x: getSocialLink('x', 'rachelgreen'),
        email: "rachel@your-domain.com"
    },
    {
        name: "James Wilson",
        role: "Head of Sales",
        bio: "James drives our sales strategy with 15+ years of experience in enterprise software sales. He has a track record of building high-performing sales teams and exceeding revenue targets.",
        image: LINKS.IMAGES.TEAM_MEMBER_8,
        linkedin: getSocialLink('linkedin', 'jameswilson'),
        x: getSocialLink('x', 'jameswilson'),
        email: "james@your-domain.com"
    }
];

// Company values data
export const companyValues = [
    {
        title: "Innovation First",
        description: "We're constantly pushing the boundaries of what's possible with AI technology to deliver cutting-edge solutions.",
        icon: "lightbulb"
    },
    {
        title: "Customer Obsessed",
        description: "Every decision we make is guided by what's best for our customers and their success.",
        icon: "heart"
    },
    {
        title: "Transparency",
        description: "We believe in open communication, honest feedback, and building trust through transparency.",
        icon: "check-circle"
    },
    {
        title: "Continuous Learning",
        description: "We're always learning, growing, and adapting to stay ahead in the rapidly evolving AI landscape.",
        icon: "book"
    }
];

// Company perks data
export const companyPerks = [
    {
        title: "Competitive Compensation",
        description: "We offer competitive salaries, equity, and performance bonuses",
        icon: "dollar"
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision insurance for you and your family",
        icon: "heart"
    },
    {
        title: "Flexible Work",
        description: "Work from anywhere with flexible hours and unlimited PTO",
        icon: "clock"
    },
    {
        title: "Learning & Growth",
        description: "Annual learning budget, conference attendance, and mentorship programs",
        icon: "book"
    },
    {
        title: "Modern Tools",
        description: "Latest hardware, software, and tools to help you do your best work",
        icon: "computer"
    },
    {
        title: "Team Events",
        description: "Regular team building events, company retreats, and social activities",
        icon: "users"
    }
];

// Enhanced case studies data
export const caseStudies = [
    {
        id: 1,
        title: "TechCorp Reduces Support Costs by 60% with AI Automation",
        company: "TechCorp",
        industry: "SaaS Technology",
        companySize: "500+ employees",
        challenge: "TechCorp was experiencing exponential growth but their customer support team couldn't scale fast enough. With 10,000+ monthly support tickets and a 48-hour average response time, customer satisfaction was declining while costs were skyrocketing.",
        solution: "Implemented our AI assistant with comprehensive knowledge base training, automated tier-1 support, and intelligent ticket routing. The AI was trained on 2+ years of support data and integrated with their existing Zendesk workflow.",
        results: [
            "60% reduction in support costs ($180K annual savings)",
            "75% of queries resolved automatically without human intervention",
            "40% improvement in response time (from 48h to 29h average)",
            "95% customer satisfaction rate (up from 78%)",
            "85% reduction in support team workload",
            "24/7 availability for global customers"
        ],
        image: LINKS.IMAGES.CASE_STUDY_1,
        logo: LINKS.IMAGES.LOGO_1,
        duration: "3 months",
        readTime: "8 min read",
        slug: "techcorp-reduces-support-costs-60-percent",
        testimonial: "The AI assistant transformed our support operations. We can now handle 3x the volume with the same team size while improving customer satisfaction.",
        testimonialAuthor: "Sarah Mitchell, VP of Customer Success",
        metrics: {
            costSavings: "$180K",
            responseTime: "29h",
            satisfaction: "95%",
            automation: "75%"
        }
    },
    {
        id: 2,
        title: "EcomPlus Scales Customer Support 10x with AI",
        company: "EcomPlus",
        industry: "E-commerce",
        companySize: "200+ employees",
        challenge: "EcomPlus was struggling to keep up with seasonal demand spikes and Black Friday traffic. Their support team was overwhelmed with repetitive questions about shipping, returns, and product availability, leading to frustrated customers and lost sales.",
        solution: "Deployed AI-powered customer support with specialized e-commerce training, inventory integration, and multilingual support. The AI handles order tracking, return processing, and product recommendations automatically.",
        results: [
            "10x increase in support capacity during peak seasons",
            "80% of queries handled by AI (shipping, returns, orders)",
            "50% faster resolution times for common inquiries",
            "90% customer satisfaction maintained during high volume",
            "35% increase in conversion rate from support interactions",
            "Support for 12 languages automatically"
        ],
        image: LINKS.IMAGES.CASE_STUDY_2,
        logo: LINKS.IMAGES.LOGO_2,
        duration: "2 months",
        readTime: "6 min read",
        slug: "ecomplus-scales-customer-support-10x",
        testimonial: "During Black Friday, our AI handled 15,000+ conversations while our team focused on complex issues. It was a game-changer.",
        testimonialAuthor: "Michael Johnson, Head of Support",
        metrics: {
            costSavings: "$120K",
            responseTime: "2.5h",
            satisfaction: "92%",
            automation: "80%"
        }
    },
    {
        id: 3,
        title: "HealthCare Pro Improves Patient Support with AI",
        company: "HealthCare Pro",
        industry: "Healthcare",
        companySize: "1000+ employees",
        challenge: "HealthCare Pro needed to provide 24/7 patient support while maintaining HIPAA compliance and medical accuracy. Their call center was overwhelmed with appointment scheduling, insurance questions, and basic medical inquiries.",
        solution: "Implemented HIPAA-compliant AI assistant trained on medical protocols, appointment systems, and insurance databases. The AI handles appointment scheduling, insurance verification, and basic health information while escalating complex medical questions to human specialists.",
        results: [
            "85% of patient inquiries resolved by AI",
            "60% reduction in call center volume",
            "24/7 availability for patient support",
            "98% accuracy in medical information provided",
            "40% faster appointment scheduling",
            "100% HIPAA compliance maintained"
        ],
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&h=60&fit=crop",
        duration: "4 months",
        readTime: "7 min read",
        slug: "healthcare-pro-improves-patient-support",
        testimonial: "Our patients love the instant responses, and our medical staff can focus on complex cases. The AI never makes medical decisions, which is exactly what we needed.",
        testimonialAuthor: "Dr. Emily Watson, Chief Medical Officer",
        metrics: {
            costSavings: "$95K",
            responseTime: "1.8h",
            satisfaction: "88%",
            automation: "85%"
        }
    },
    {
        id: 4,
        title: "FinanceFirst Automates Customer Onboarding",
        company: "FinanceFirst",
        industry: "Financial Services",
        companySize: "300+ employees",
        challenge: "FinanceFirst's manual onboarding process was taking 2-3 weeks and required multiple touchpoints. Customers were frustrated with the lengthy process, and the compliance team was overwhelmed with document verification.",
        solution: "Deployed AI assistant for automated onboarding, document verification, and compliance checks. The AI guides customers through the process, verifies documents using OCR, and handles KYC requirements automatically.",
        results: [
            "70% reduction in onboarding time (from 3 weeks to 5 days)",
            "90% of onboarding queries automated",
            "50% increase in customer satisfaction scores",
            "40% reduction in compliance team workload",
            "95% accuracy in document verification",
            "Zero compliance violations since implementation"
        ],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop",
        duration: "2 months",
        readTime: "5 min read",
        slug: "financefirst-automates-customer-onboarding",
        testimonial: "The AI onboarding process is faster and more accurate than our manual process. Customers complete their applications in days, not weeks.",
        testimonialAuthor: "David Kim, Head of Operations",
        metrics: {
            costSavings: "$65K",
            responseTime: "4.2h",
            satisfaction: "87%",
            automation: "90%"
        }
    },
    {
        id: 5,
        title: "EduTech Solutions Enhances Student Support",
        company: "EduTech Solutions",
        industry: "Education Technology",
        companySize: "150+ employees",
        challenge: "EduTech Solutions had 50,000+ students but only 8 support agents. Students were waiting days for help with course access, technical issues, and academic questions, leading to high dropout rates.",
        solution: "Implemented AI assistant trained on course content, technical documentation, and academic policies. The AI provides instant help with course access, technical troubleshooting, and basic academic guidance.",
        results: [
            "80% of student queries resolved by AI",
            "65% reduction in support response time",
            "85% student satisfaction rate",
            "30% increase in course completion rates",
            "24/7 support for global students",
            "50% reduction in support team workload"
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=60&fit=crop",
        duration: "3 months",
        readTime: "6 min read",
        slug: "edutech-solutions-enhances-student-support",
        testimonial: "Students can get help instantly, day or night. Our completion rates have improved significantly since implementing the AI assistant.",
        testimonialAuthor: "Lisa Thompson, Director of Student Success",
        metrics: {
            costSavings: "$45K",
            responseTime: "3.1h",
            satisfaction: "84%",
            automation: "78%"
        }
    },
    {
        id: 6,
        title: "RealEstate Pro Streamlines Property Inquiries",
        company: "RealEstate Pro",
        industry: "Real Estate",
        companySize: "100+ employees",
        challenge: "RealEstate Pro was losing potential clients due to slow response times to property inquiries. Agents were overwhelmed with basic questions about properties, pricing, and availability, missing opportunities to convert leads.",
        solution: "Deployed AI assistant integrated with their MLS system to provide instant property information, pricing details, and availability. The AI qualifies leads and schedules appointments with agents for serious prospects.",
        results: [
            "75% of property inquiries handled by AI",
            "45% increase in qualified leads",
            "60% reduction in response time to inquiries",
            "90% lead conversion rate for AI-qualified prospects",
            "24/7 availability for property inquiries",
            "35% increase in agent productivity"
        ],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=120&h=60&fit=crop",
        duration: "2 months",
        readTime: "5 min read",
        slug: "realestate-pro-streamlines-property-inquiries",
        testimonial: "The AI handles all the basic inquiries so our agents can focus on serious buyers. Our conversion rate has never been higher.",
        testimonialAuthor: "Alex Johnson, Sales Director",
        metrics: {
            costSavings: "$35K",
            responseTime: "1.2h",
            satisfaction: "91%",
            automation: "82%"
        }
    }
];

// Industries filter for case studies
export const industries = ["All", "SaaS Technology", "E-commerce", "Healthcare", "Financial Services", "Education Technology", "Real Estate"];

// Enhanced resources data
export const resources = {
    guides: [
        {
            title: "Complete Guide to AI Customer Support Implementation",
            description: "A comprehensive step-by-step guide covering everything from planning and setup to optimization and scaling. Includes real-world examples, best practices, and common pitfalls to avoid.",
            type: "Guide",
            readTime: "15 min read",
            downloadCount: "2.5k",
            fileSize: "2.4 MB",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
            slug: "complete-guide-ai-customer-support-implementation",
            difficulty: "Beginner",
            lastUpdated: "2024-01-15",
            tags: ["Implementation", "Best Practices", "Setup"]
        },
        {
            title: "AI Training Best Practices for Maximum ROI",
            description: "Learn advanced techniques for training your AI assistant effectively. Covers data preparation, training methodologies, testing strategies, and continuous improvement processes.",
            type: "Guide",
            readTime: "12 min read",
            downloadCount: "1.8k",
            fileSize: "1.9 MB",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            slug: "ai-training-best-practices-maximum-roi",
            difficulty: "Intermediate",
            lastUpdated: "2024-01-12",
            tags: ["Training", "ROI", "Optimization"]
        },
        {
            title: "Measuring AI Success: Key Metrics & KPIs",
            description: "Comprehensive guide to tracking and measuring AI performance. Learn which metrics matter most, how to set up dashboards, and how to interpret results for business impact.",
            type: "Guide",
            readTime: "10 min read",
            downloadCount: "1.2k",
            fileSize: "1.5 MB",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
            slug: "measuring-ai-success-key-metrics-kpis",
            difficulty: "Intermediate",
            lastUpdated: "2024-01-10",
            tags: ["Analytics", "KPIs", "Metrics"]
        },
        {
            title: "Integration Guide: Connecting AI with Your Existing Tools",
            description: "Step-by-step instructions for integrating AI with popular CRM, ticketing, and support tools. Includes API documentation, webhook setup, and troubleshooting tips.",
            type: "Guide",
            readTime: "18 min read",
            downloadCount: "950",
            fileSize: "3.2 MB",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
            slug: "integration-guide-connecting-ai-existing-tools",
            difficulty: "Advanced",
            lastUpdated: "2024-01-08",
            tags: ["Integration", "APIs", "Technical"]
        },
        {
            title: "AI Customer Support Security & Compliance",
            description: "Essential guide to maintaining security and compliance when implementing AI customer support. Covers data protection, privacy regulations, and security best practices.",
            type: "Guide",
            readTime: "14 min read",
            downloadCount: "1.1k",
            fileSize: "2.1 MB",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            slug: "ai-customer-support-security-compliance",
            difficulty: "Intermediate",
            lastUpdated: "2024-01-05",
            tags: ["Security", "Compliance", "Privacy"]
        },
        {
            title: "Scaling AI Support for Enterprise Teams",
            description: "Advanced strategies for scaling AI customer support across large organizations. Includes multi-team coordination, enterprise integrations, and governance frameworks.",
            type: "Guide",
            readTime: "16 min read",
            downloadCount: "800",
            fileSize: "2.8 MB",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
            slug: "scaling-ai-support-enterprise-teams",
            difficulty: "Advanced",
            lastUpdated: "2024-01-03",
            tags: ["Enterprise", "Scaling", "Governance"]
        }
    ],
    whitepapers: [
        {
            title: "The Future of AI in Customer Service: 2024 Report",
            description: "Comprehensive industry analysis covering AI adoption trends, emerging technologies, and predictions for the future of customer service automation.",
            type: "Whitepaper",
            pages: "24 pages",
            downloadCount: "3.2k",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
            slug: "future-ai-customer-service-2024-report",
            difficulty: "All Levels",
            lastUpdated: "2024-01-15",
            tags: ["Industry Report", "Trends", "Future"]
        },
        {
            title: "ROI Analysis: AI Customer Support vs Traditional Methods",
            description: "Detailed cost-benefit analysis comparing AI automation with traditional support methods. Includes case studies, financial models, and implementation timelines.",
            type: "Whitepaper",
            pages: "18 pages",
            downloadCount: "2.1k",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
            slug: "roi-analysis-ai-customer-support-vs-traditional",
            difficulty: "All Levels",
            lastUpdated: "2024-01-12",
            tags: ["ROI", "Analysis", "Business Case"]
        },
        {
            title: "Customer Expectations in the AI Era",
            description: "Research on how customer expectations are evolving with AI-powered support. Based on surveys of 10,000+ customers across different industries and demographics.",
            type: "Whitepaper",
            pages: "16 pages",
            downloadCount: "1.7k",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
            slug: "customer-expectations-ai-era",
            difficulty: "All Levels",
            lastUpdated: "2024-01-10",
            tags: ["Research", "Customer Experience", "Expectations"]
        },
        {
            title: "AI Ethics in Customer Service: A Framework for Responsible Implementation",
            description: "Comprehensive framework for implementing AI in customer service ethically. Covers bias prevention, transparency, human oversight, and ethical decision-making.",
            type: "Whitepaper",
            pages: "20 pages",
            downloadCount: "1.3k",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            slug: "ai-ethics-customer-service-framework",
            difficulty: "All Levels",
            lastUpdated: "2024-01-08",
            tags: ["Ethics", "Responsible AI", "Framework"]
        }
    ],
    webinars: [
        {
            title: "Getting Started with AI Customer Support",
            description: "Perfect introduction for teams new to AI customer support. Learn the fundamentals, common use cases, and how to plan your first implementation.",
            type: "Webinar",
            duration: "45 min",
            attendees: "500+",
            date: "2024-01-15",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
            slug: "getting-started-ai-customer-support",
            difficulty: "Beginner",
            presenter: "Sarah Chen, Head of AI Research"
        },
        {
            title: "Advanced AI Training Techniques",
            description: "Master advanced techniques for training and optimizing your AI assistant. Includes hands-on demonstrations and Q&A session with our AI experts.",
            type: "Webinar",
            duration: "60 min",
            attendees: "300+",
            date: "2024-01-10",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            slug: "advanced-ai-training-techniques",
            difficulty: "Advanced",
            presenter: "Michael Rodriguez, AI Training Specialist"
        },
        {
            title: "Measuring and Optimizing AI Performance",
            description: "Learn how to measure, analyze, and optimize your AI assistant's performance. Includes real-world examples and performance optimization strategies.",
            type: "Webinar",
            duration: "50 min",
            attendees: "400+",
            date: "2024-01-05",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
            slug: "measuring-optimizing-ai-performance",
            difficulty: "Intermediate",
            presenter: "Emily Watson, Head of Product"
        },
        {
            title: "AI Integration Deep Dive: APIs and Webhooks",
            description: "Technical deep dive into integrating AI with your existing systems. Covers API best practices, webhook setup, and troubleshooting common integration issues.",
            type: "Webinar",
            duration: "55 min",
            attendees: "250+",
            date: "2024-01-03",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
            slug: "ai-integration-deep-dive-apis-webhooks",
            difficulty: "Advanced",
            presenter: "David Kim, Head of Engineering"
        },
        {
            title: "Live Demo: Building Your First AI Assistant",
            description: "Watch our experts build a complete AI assistant from scratch in real-time. Perfect for visual learners who want to see the entire process step-by-step.",
            type: "Webinar",
            duration: "90 min",
            attendees: "800+",
            date: "2024-01-20",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
            slug: "live-demo-building-first-ai-assistant",
            difficulty: "Beginner",
            presenter: "Alex Thompson, Solutions Architect"
        },
        {
            title: "AI Troubleshooting and Maintenance",
            description: "Learn how to identify, diagnose, and fix common AI assistant issues. Keep your AI running smoothly with proactive maintenance strategies.",
            type: "Webinar",
            duration: "65 min",
            attendees: "250+",
            date: "2024-01-18",
            image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
            slug: "ai-troubleshooting-maintenance",
            difficulty: "Advanced",
            presenter: "James Wilson, Technical Support Lead"
        },
        {
            title: "Customer Success Stories: Real Results",
            description: "Hear directly from customers who have transformed their support operations with AI. Real case studies, metrics, and lessons learned.",
            type: "Webinar",
            duration: "40 min",
            attendees: "600+",
            date: "2024-01-16",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
            slug: "customer-success-stories-real-results",
            difficulty: "All Levels",
            presenter: "Customer Success Team"
        },
        {
            title: "Future of AI: What's Coming Next",
            description: "Explore emerging AI technologies and trends that will shape the future of customer service. Get ahead of the curve with insights from industry leaders.",
            type: "Webinar",
            duration: "70 min",
            attendees: "450+",
            date: "2024-01-14",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
            slug: "future-ai-whats-coming-next",
            difficulty: "All Levels",
            presenter: "Dr. Sarah Chen, Head of AI Research"
        },
        {
            title: "AI Security and Compliance Best Practices",
            description: "Learn how to secure your AI assistant and ensure compliance with data protection regulations. Essential for enterprise implementations.",
            type: "Webinar",
            duration: "50 min",
            attendees: "300+",
            date: "2024-01-12",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            slug: "ai-security-compliance-best-practices",
            difficulty: "Intermediate",
            presenter: "Lisa Martinez, Security Specialist"
        }
    ],
    tools: [
        {
            title: "AI ROI Calculator",
            description: "Interactive calculator to estimate the potential ROI of implementing AI in your customer support. Input your current metrics to get personalized projections.",
            type: "Tool",
            category: "Calculator",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
            slug: "ai-roi-calculator",
            difficulty: "All Levels",
            features: ["ROI Projections", "Cost Analysis", "Savings Calculator"]
        },
        {
            title: "Knowledge Base Audit Checklist",
            description: "Comprehensive checklist to audit and optimize your knowledge base for AI training. Includes quality metrics, content gaps analysis, and improvement recommendations.",
            type: "Tool",
            category: "Checklist",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
            slug: "knowledge-base-audit-checklist",
            difficulty: "Intermediate",
            features: ["Quality Metrics", "Gap Analysis", "Recommendations"]
        },
        {
            title: "AI Performance Dashboard Template",
            description: "Ready-to-use dashboard template for tracking AI performance metrics. Includes KPIs, charts, and automated reporting features.",
            type: "Tool",
            category: "Template",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
            slug: "ai-performance-dashboard-template",
            difficulty: "Intermediate",
            features: ["KPI Tracking", "Visual Charts", "Automated Reports"]
        },
        {
            title: "AI Training Data Generator",
            description: "Tool to help generate and format training data for your AI assistant. Includes templates, validation tools, and best practice guidelines.",
            type: "Tool",
            category: "Generator",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
            slug: "ai-training-data-generator",
            difficulty: "Advanced",
            features: ["Data Templates", "Validation", "Formatting"]
        },
        {
            title: "Customer Journey Mapping Tool",
            description: "Interactive tool to map customer journeys and identify AI automation opportunities. Includes templates and optimization suggestions.",
            type: "Tool",
            category: "Mapping",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
            slug: "customer-journey-mapping-tool",
            difficulty: "Intermediate",
            features: ["Journey Mapping", "Automation Opportunities", "Optimization"]
        },
        {
            title: "AI Compliance Checklist",
            description: "Comprehensive checklist to ensure your AI implementation meets regulatory requirements and industry standards.",
            type: "Tool",
            category: "Checklist",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            slug: "ai-compliance-checklist",
            difficulty: "All Levels",
            features: ["Regulatory Compliance", "Standards", "Audit Trail"]
        }
    ]
};

// Resource categories filter
export const resourceCategories = ["All", "Guides", "Whitepapers", "Webinars", "Tools"];

// Blog posts data
export const blogPosts = {
    "future-ai-customer-support-2024-trends": {
        id: 1,
        title: "The Future of AI in Customer Support: 2024 Trends",
        content: `
            <p>The landscape of customer support is rapidly evolving, and artificial intelligence is at the forefront of this transformation. As we move through 2024, several key trends are shaping how businesses approach customer service automation, fundamentally changing the way companies interact with their customers.</p>

            <h2>The Rise of Conversational AI</h2>
            <p>Conversational AI has moved beyond simple chatbots to sophisticated systems that can understand context, emotion, and intent. Modern AI assistants can now handle complex queries with human-like understanding, providing personalized responses that adapt to each customer's unique needs and communication style.</p>
            
            <p>These advanced systems leverage natural language processing (NLP) and machine learning to create more meaningful interactions. They can detect customer sentiment, understand nuanced requests, and provide contextually appropriate responses that feel natural and helpful.</p>

            <h2>Predictive Customer Service</h2>
            <p>One of the most exciting developments is the emergence of predictive customer service. AI systems can now analyze customer behavior patterns, purchase history, and support interactions to anticipate issues before they arise. This proactive approach not only improves customer satisfaction but also reduces support volume and operational costs.</p>
            
            <p>By leveraging predictive analytics, businesses can identify potential problems and reach out to customers with solutions before they even realize they need help. This creates a more seamless and satisfying customer experience while reducing the burden on support teams.</p>

            <h2>Multimodal AI Interactions</h2>
            <p>Customers now expect to interact with AI through multiple channels - text, voice, images, and even video. Modern AI systems are becoming increasingly capable of processing and responding to various input types, creating more natural and intuitive customer experiences.</p>
            
            <p>This multimodal approach allows customers to communicate in their preferred format, whether that's typing a message, speaking to a voice assistant, or sharing a screenshot of an issue. The AI can understand and respond appropriately across all these channels.</p>

            <h2>Integration with Existing Systems</h2>
            <p>Seamless integration with existing CRM, ticketing, and knowledge management systems is crucial for AI success. AI solutions that can pull from multiple data sources provide more accurate and comprehensive support responses, creating a unified customer experience.</p>
            
            <p>Modern AI platforms offer robust APIs and integration capabilities that allow them to work alongside existing tools, ensuring that customer data and interactions are properly tracked and managed across all touchpoints.</p>

            <h2>The Human-AI Collaboration Model</h2>
            <p>Rather than replacing human agents entirely, the most successful implementations focus on human-AI collaboration. AI handles routine queries and escalates complex issues to human agents, who can then provide the personal touch that technology cannot replicate.</p>
            
            <p>This hybrid approach maximizes the strengths of both AI and human agents, ensuring that customers receive efficient, accurate, and empathetic support regardless of the complexity of their inquiry.</p>

            <h2>Measuring Success</h2>
            <p>Key metrics for AI customer support success include response time, resolution rate, customer satisfaction scores, and cost per interaction. Businesses are also tracking more nuanced metrics like conversation quality, customer sentiment, and the percentage of queries resolved without human intervention.</p>
            
            <p>Advanced analytics platforms now provide detailed insights into AI performance, allowing businesses to continuously optimize their systems and improve customer experiences.</p>

            <h2>Looking Ahead</h2>
            <p>As we look to the future, we can expect to see even more sophisticated AI capabilities, including emotion recognition, advanced natural language processing, and the ability to handle increasingly complex multi-step processes. The integration of AI with emerging technologies like augmented reality and IoT devices will create entirely new possibilities for customer support.</p>
        `,
        author: "Sarah Chen",
        authorRole: "Head of AI Research",
        authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        authorBio: "Sarah has over 10 years of experience in AI research and has published numerous papers on conversational AI and customer service automation. She holds a PhD in Computer Science from Stanford University and has been recognized as one of the top 50 women in AI by Forbes.",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        tags: ["AI", "Customer Support", "Automation", "Trends", "2024"]
    },
    "train-ai-assistant-maximum-effectiveness": {
        id: 2,
        title: "How to Train Your AI Assistant for Maximum Effectiveness",
        content: `
            <p>Training an AI assistant is both an art and a science. The quality of your training data and methodology directly impacts how well your AI performs in real-world scenarios. In this comprehensive guide, we'll explore the best practices for creating an AI assistant that truly understands your business and delivers exceptional customer experiences.</p>

            <h2>Start with Quality Data</h2>
            <p>The foundation of any effective AI assistant is high-quality training data. This includes your knowledge base, FAQ documents, product information, and historical customer interactions. Ensure your data is accurate, up-to-date, and comprehensive.</p>
            
            <p>Quality data should be well-structured, properly categorized, and free from inconsistencies. It should cover the full spectrum of customer inquiries and include both common questions and edge cases. The more comprehensive your training data, the better your AI will perform.</p>

            <h2>Structure Your Knowledge Base</h2>
            <p>Organize your information in a logical, hierarchical structure. Use clear categories, tags, and metadata to help the AI understand context and relationships between different pieces of information.</p>
            
            <p>Consider creating a knowledge graph that shows how different concepts relate to each other. This helps the AI understand the broader context of customer inquiries and provide more accurate responses.</p>

            <h2>Use Real Customer Conversations</h2>
            <p>Incorporate actual customer conversations into your training data. This helps the AI understand the natural language patterns, common questions, and typical customer concerns in your specific industry.</p>
            
            <p>Analyze your support tickets, chat logs, and phone call transcripts to identify common patterns and pain points. This real-world data is invaluable for training an AI that truly understands your customers.</p>

            <h2>Implement Continuous Learning</h2>
            <p>Set up feedback loops that allow your AI to learn from new interactions. Monitor performance metrics and regularly update training data based on customer feedback and support team insights.</p>
            
            <p>Use machine learning techniques to automatically identify gaps in your knowledge base and suggest improvements. This ensures your AI stays current and continues to improve over time.</p>

            <h2>Test and Iterate</h2>
            <p>Regularly test your AI assistant with various scenarios and edge cases. Use A/B testing to compare different approaches and continuously refine your training methodology.</p>
            
            <p>Create test scenarios that cover different customer personas, inquiry types, and complexity levels. This helps ensure your AI can handle the full range of customer interactions effectively.</p>
        `,
        author: "Michael Rodriguez",
        authorRole: "AI Training Specialist",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        authorBio: "Michael specializes in AI training methodologies and has helped over 100 companies optimize their AI assistant performance. He holds a Master's degree in Machine Learning and has authored several papers on conversational AI optimization.",
        publishedAt: "2024-01-12",
        readTime: "12 min read",
        category: "Best Practices",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
        tags: ["AI Training", "Best Practices", "Knowledge Base", "Optimization"]
    },
    "measuring-ai-success-key-metrics": {
        id: 3,
        title: "Measuring AI Success: Key Metrics Every Business Should Track",
        content: `
            <p>Understanding which metrics matter most when evaluating your AI customer support performance and ROI is crucial for making informed decisions about your AI implementation. In this comprehensive guide, we'll explore the key metrics that every business should track to measure AI success effectively.</p>

            <h2>Response Time Metrics</h2>
            <p>Response time is one of the most critical metrics for AI customer support. Track both average response time and the percentage of queries answered within specific timeframes (e.g., under 30 seconds, under 1 minute).</p>
            
            <p>Compare AI response times to human agent response times to demonstrate the efficiency gains. Most AI systems can respond instantly, while human agents typically take several minutes to respond to each query.</p>

            <h2>Resolution Rate</h2>
            <p>Measure the percentage of customer queries that are fully resolved by the AI without requiring human intervention. A high resolution rate indicates that your AI is well-trained and effective at handling customer inquiries.</p>
            
            <p>Track resolution rates by category to identify areas where the AI excels and areas that may need additional training or human oversight.</p>

            <h2>Customer Satisfaction Scores</h2>
            <p>Implement post-interaction surveys to measure customer satisfaction with AI interactions. Use standardized satisfaction scales and compare AI satisfaction scores to human agent scores.</p>
            
            <p>Monitor satisfaction trends over time to ensure that AI improvements are translating to better customer experiences.</p>

            <h2>Cost Per Interaction</h2>
            <p>Calculate the cost per customer interaction for AI versus human agents. Include all associated costs: technology, training, maintenance, and operational expenses.</p>
            
            <p>Most businesses see significant cost reductions with AI, often achieving 60-80% cost savings compared to traditional human support.</p>

            <h2>Conversation Quality Metrics</h2>
            <p>Implement quality scoring systems that evaluate the accuracy, helpfulness, and appropriateness of AI responses. Use both automated scoring and human review processes.</p>
            
            <p>Track conversation quality improvements over time as the AI learns and adapts to customer needs.</p>

            <h2>Escalation Rates</h2>
            <p>Monitor how often customers request to speak with a human agent or when the AI escalates complex issues. High escalation rates may indicate gaps in AI training or capabilities.</p>
            
            <p>Aim for escalation rates below 20% for most customer support scenarios, with higher rates acceptable for complex technical or emotional situations.</p>

            <h2>Business Impact Metrics</h2>
            <p>Measure broader business impacts such as increased customer retention, higher conversion rates, reduced churn, and improved brand perception.</p>
            
            <p>Track how AI support contributes to overall business goals and customer lifetime value.</p>
        `,
        author: "Emily Watson",
        authorRole: "Data Analyst",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        authorBio: "Emily specializes in data analytics and performance measurement for AI systems. She has helped over 50 companies optimize their AI metrics and reporting processes. She holds a Master's degree in Data Science and has published several papers on AI performance measurement.",
        publishedAt: "2024-01-10",
        readTime: "10 min read",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        tags: ["Analytics", "Metrics", "ROI", "Performance"]
    },
    "integrating-ai-existing-customer-support-tools": {
        id: 4,
        title: "Integrating AI with Your Existing Customer Support Tools",
        content: `
            <p>Seamlessly integrating AI assistants with your current customer support infrastructure is essential for maximizing the benefits of AI automation. This comprehensive guide covers everything from API connections to workflow automation to ensure smooth implementation.</p>

            <h2>Assessment and Planning</h2>
            <p>Start by conducting a thorough assessment of your current support tools and workflows. Identify integration points, data sources, and potential challenges before beginning the implementation process.</p>
            
            <p>Create a detailed integration roadmap that outlines timelines, resources needed, and success criteria for each phase of the implementation.</p>

            <h2>API Integration</h2>
            <p>Most modern AI platforms offer robust APIs that allow seamless integration with existing CRM, ticketing, and knowledge management systems. Ensure your AI solution can pull data from multiple sources to provide comprehensive support responses.</p>
            
            <p>Implement proper authentication, rate limiting, and error handling to ensure reliable API connections and data synchronization.</p>

            <h2>Workflow Automation</h2>
            <p>Design automated workflows that route queries to the appropriate AI or human agents based on complexity, customer type, and issue category. Use intelligent routing to maximize efficiency and customer satisfaction.</p>
            
            <p>Implement escalation protocols that seamlessly transfer complex issues from AI to human agents while maintaining context and conversation history.</p>

            <h2>Data Synchronization</h2>
            <p>Ensure that customer data, interaction history, and knowledge base information are properly synchronized across all systems. This creates a unified customer experience and prevents data inconsistencies.</p>
            
            <p>Implement real-time data updates to ensure that AI responses are always based on the most current information available.</p>

            <h2>Testing and Validation</h2>
            <p>Conduct thorough testing of all integration points before going live. Test various scenarios, edge cases, and failure modes to ensure robust operation.</p>
            
            <p>Implement monitoring and alerting systems to quickly identify and resolve any integration issues that may arise.</p>

            <h2>Training and Change Management</h2>
            <p>Provide comprehensive training for your support team on the new integrated systems. Help them understand how AI and human agents work together to provide better customer service.</p>
            
            <p>Implement change management processes to ensure smooth adoption and minimize disruption to existing workflows.</p>
        `,
        author: "David Kim",
        authorRole: "Integration Engineer",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        authorBio: "David is an expert in system integration and has helped over 75 companies successfully integrate AI solutions with their existing infrastructure. He holds a Bachelor's degree in Computer Engineering and has extensive experience with API development and workflow automation.",
        publishedAt: "2024-01-08",
        readTime: "15 min read",
        category: "Integration",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        tags: ["Integration", "APIs", "Workflow", "Implementation"]
    },
    "psychology-ai-human-interaction-customer-service": {
        id: 5,
        title: "The Psychology of AI-Human Interaction in Customer Service",
        content: `
            <p>Understanding how customers perceive and interact with AI assistants is crucial for designing more human-like experiences. This exploration of psychological principles helps create AI interactions that feel natural, trustworthy, and effective.</p>

            <h2>Trust and Transparency</h2>
            <p>Customers need to trust AI systems to provide accurate and helpful responses. Build trust through transparency about AI capabilities, limitations, and when human agents are available.</p>
            
            <p>Implement clear indicators when customers are interacting with AI versus human agents, and provide easy escalation paths to human support when needed.</p>

            <h2>Emotional Intelligence</h2>
            <p>Design AI responses that acknowledge and appropriately respond to customer emotions. Use empathetic language and tone that matches the customer's emotional state.</p>
            
            <p>Implement sentiment analysis to detect customer emotions and adjust response strategies accordingly, ensuring that frustrated customers receive more careful and supportive responses.</p>

            <h2>Personalization and Context</h2>
            <p>Leverage customer data and interaction history to provide personalized experiences. Use customer names, reference previous interactions, and tailor responses to individual preferences and needs.</p>
            
            <p>Maintain context throughout conversations to create more natural and coherent interactions that feel like talking to a knowledgeable human agent.</p>

            <h2>Cognitive Load Management</h2>
            <p>Design AI interactions that minimize cognitive load by presenting information clearly and concisely. Use progressive disclosure to avoid overwhelming customers with too much information at once.</p>
            
            <p>Implement clear navigation and decision trees that guide customers through complex processes without confusion or frustration.</p>

            <h2>Social Presence and Anthropomorphism</h2>
            <p>Create AI personalities that feel approachable and human-like without being overly artificial. Use appropriate humor, personality traits, and communication styles that align with your brand.</p>
            
            <p>Implement visual and verbal cues that create a sense of social presence, making interactions feel more engaging and less mechanical.</p>

            <h2>Expectation Management</h2>
            <p>Set appropriate expectations about AI capabilities and limitations. Clearly communicate what the AI can and cannot do to prevent customer frustration and disappointment.</p>
            
            <p>Provide clear pathways to human agents for issues that require human judgment, empathy, or complex problem-solving.</p>
        `,
        author: "Lisa Thompson",
        authorRole: "UX Researcher",
        authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        authorBio: "Lisa is a UX researcher specializing in human-computer interaction and AI user experience design. She has conducted extensive research on customer psychology and AI interaction patterns. She holds a PhD in Psychology and has published numerous papers on AI user experience.",
        publishedAt: "2024-01-05",
        readTime: "14 min read",
        category: "UX Design",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
        tags: ["Psychology", "UX", "Human-Computer Interaction", "Design"]
    },
    "case-study-techcorp-reduced-support-costs-60-percent": {
        id: 6,
        title: "Case Study: How TechCorp Reduced Support Costs by 60% with AI",
        content: `
            <p>This detailed case study examines how TechCorp, a mid-size SaaS company, transformed their customer support operations using AI automation, achieving remarkable cost savings while improving customer satisfaction.</p>

            <h2>Company Background</h2>
            <p>TechCorp is a growing SaaS company with 500+ employees serving over 10,000 customers. Their customer support team was struggling to keep up with increasing ticket volume, leading to longer response times and declining customer satisfaction.</p>
            
            <p>Before implementing AI, TechCorp was handling 10,000+ monthly support tickets with an average response time of 48 hours and a customer satisfaction score of 3.2/5.</p>

            <h2>Implementation Strategy</h2>
            <p>TechCorp implemented our AI assistant with a comprehensive knowledge base training program, automated tier-1 support, and intelligent ticket routing. The AI was trained on 2+ years of support data and integrated with their existing Zendesk workflow.</p>
            
            <p>The implementation included a phased rollout approach, starting with common FAQ queries and gradually expanding to more complex support scenarios.</p>

            <h2>Challenges Faced</h2>
            <p>Initial challenges included resistance from some support agents who feared job displacement, technical integration issues with legacy systems, and the need to train the AI on company-specific terminology and processes.</p>
            
            <p>TechCorp addressed these challenges through comprehensive change management, extensive training programs, and gradual AI capability expansion.</p>

            <h2>Results Achieved</h2>
            <p>After 6 months of implementation, TechCorp achieved remarkable results: 60% reduction in support costs, 75% of queries resolved by AI without human intervention, average response time reduced to under 2 minutes, and customer satisfaction increased to 4.6/5.</p>
            
            <p>The AI system now handles 7,500+ queries monthly, allowing human agents to focus on complex technical issues and relationship building.</p>

            <h2>Key Success Factors</h2>
            <p>Success factors included strong leadership support, comprehensive training programs, gradual implementation approach, continuous monitoring and optimization, and maintaining human oversight for complex issues.</p>
            
            <p>TechCorp's commitment to continuous improvement and regular AI training updates has been crucial to maintaining high performance levels.</p>

            <h2>Lessons Learned</h2>
            <p>Key lessons include the importance of change management, the need for continuous AI training and optimization, the value of maintaining human oversight, and the importance of measuring both quantitative and qualitative success metrics.</p>
            
            <p>TechCorp's experience demonstrates that successful AI implementation requires careful planning, strong execution, and ongoing commitment to optimization.</p>
        `,
        author: "Alex Johnson",
        authorRole: "Customer Success Manager",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        authorBio: "Alex is a Customer Success Manager who specializes in AI implementation and optimization. He has helped over 30 companies successfully implement AI solutions and has extensive experience in change management and customer success strategies.",
        publishedAt: "2024-01-03",
        readTime: "12 min read",
        category: "Case Study",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
        tags: ["Case Study", "Cost Reduction", "ROI", "Success Story"]
    },
    "building-trust-ai-transparency-explainability": {
        id: 7,
        title: "Building Trust in AI: Transparency and Explainability",
        content: `
            <p>Building customer trust in AI systems through transparency and explainability is essential for successful AI adoption. This guide explores best practices for making AI decisions understandable and building confidence in automated support.</p>

            <h2>The Importance of AI Transparency</h2>
            <p>Transparency in AI systems helps customers understand how decisions are made, builds trust, and enables better human oversight. Customers need to know when they're interacting with AI and how the system works.</p>
            
            <p>Implement clear communication about AI capabilities, limitations, and decision-making processes to create a foundation of trust with your customers.</p>

            <h2>Explainable AI Techniques</h2>
            <p>Use explainable AI techniques that provide clear explanations for AI decisions. Implement systems that can explain why specific responses were given and what information was used to reach conclusions.</p>
            
            <p>Provide customers with access to AI reasoning when requested, showing the data sources, logic, and confidence levels used in generating responses.</p>

            <h2>Confidence Scoring</h2>
            <p>Implement confidence scoring systems that indicate how certain the AI is about its responses. High-confidence responses can be delivered directly, while low-confidence responses can be flagged for human review.</p>
            
            <p>Display confidence levels to customers when appropriate, helping them understand the reliability of AI responses and when to seek human assistance.</p>

            <h2>Human Oversight and Escalation</h2>
            <p>Maintain human oversight of AI systems with clear escalation paths for complex or uncertain situations. Ensure that human agents can easily review and override AI decisions when necessary.</p>
            
            <p>Implement regular audits of AI performance and decision-making to identify areas for improvement and ensure continued accuracy.</p>

            <h2>Ethical AI Practices</h2>
            <p>Implement ethical AI practices that ensure fairness, avoid bias, and protect customer privacy. Regularly audit AI systems for potential biases and ensure compliance with relevant regulations.</p>
            
            <p>Establish clear guidelines for AI behavior and decision-making that align with your company's values and ethical standards.</p>

            <h2>Customer Education</h2>
            <p>Educate customers about AI capabilities and limitations through clear documentation, FAQs, and interactive demonstrations. Help customers understand how AI can help them and when human assistance might be more appropriate.</p>
            
            <p>Provide training materials and resources that help customers get the most value from AI interactions while understanding the system's capabilities and limitations.</p>
        `,
        author: "Maria Garcia",
        authorRole: "AI Ethics Specialist",
        authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
        authorBio: "Maria is an AI Ethics Specialist who focuses on responsible AI development and implementation. She has helped numerous companies implement ethical AI practices and has extensive experience in AI transparency and explainability. She holds a Master's degree in Ethics and Technology.",
        publishedAt: "2024-01-01",
        readTime: "11 min read",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
        tags: ["AI Ethics", "Trust", "Transparency", "Explainability"]
    },
    "multilingual-ai-support-breaking-language-barriers": {
        id: 8,
        title: "Multilingual AI Support: Breaking Language Barriers",
        content: `
            <p>Providing seamless customer support across multiple languages and cultures is essential for global businesses. This guide explores how AI can break down language barriers and create inclusive customer experiences.</p>

            <h2>Language Detection and Routing</h2>
            <p>Implement automatic language detection systems that can identify customer language preferences and route queries to appropriate AI models or human agents fluent in the customer's language.</p>
            
            <p>Use natural language processing techniques to detect language patterns and ensure accurate language identification for better customer experience.</p>

            <h2>Multilingual AI Training</h2>
            <p>Train AI models on multilingual datasets that include various languages, dialects, and cultural contexts. Ensure that AI responses are culturally appropriate and linguistically accurate.</p>
            
            <p>Implement continuous learning systems that can adapt to new languages and cultural nuances as your customer base expands globally.</p>

            <h2>Cultural Sensitivity</h2>
            <p>Design AI responses that are culturally sensitive and appropriate for different regions and customer segments. Consider cultural norms, communication styles, and business practices in different markets.</p>
            
            <p>Implement cultural adaptation features that adjust AI personality, tone, and response style based on customer cultural background and preferences.</p>

            <h2>Translation Quality and Accuracy</h2>
            <p>Ensure high-quality translation services that maintain context and meaning across languages. Use advanced translation models that understand business terminology and industry-specific language.</p>
            
            <p>Implement quality assurance processes that verify translation accuracy and cultural appropriateness before delivering responses to customers.</p>

            <h2>Regional Compliance</h2>
            <p>Ensure compliance with regional data protection and privacy regulations across different markets. Implement appropriate data handling and storage practices for different jurisdictions.</p>
            
            <p>Stay updated on evolving regulations in different regions and adapt AI systems accordingly to maintain compliance and customer trust.</p>

            <h2>Performance Monitoring</h2>
            <p>Monitor AI performance across different languages and regions to identify areas for improvement. Track customer satisfaction, response accuracy, and cultural appropriateness metrics.</p>
            
            <p>Implement regional performance dashboards that provide insights into AI effectiveness across different markets and customer segments.</p>
        `,
        author: "James Wilson",
        authorRole: "Global Support Director",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        authorBio: "James is a Global Support Director with extensive experience in international customer support and multilingual AI implementation. He has helped companies expand their support capabilities across 15+ languages and has deep expertise in cultural adaptation and global compliance.",
        publishedAt: "2023-12-28",
        readTime: "9 min read",
        category: "Global Support",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
        tags: ["Multilingual", "Global", "Localization", "Language"]
    },
    "ai-powered-sentiment-analysis-understanding-customer-emotions": {
        id: 9,
        title: "AI-Powered Sentiment Analysis: Understanding Customer Emotions",
        content: `
            <p>Understanding customer emotions through AI-powered sentiment analysis is crucial for providing appropriate and empathetic customer support. This guide explores how to implement emotional intelligence in your AI customer support system.</p>

            <h2>Sentiment Analysis Fundamentals</h2>
            <p>Sentiment analysis uses natural language processing to identify and extract emotional information from customer communications. It can detect positive, negative, or neutral sentiments and more nuanced emotions like frustration, excitement, or confusion.</p>
            
            <p>Implement sentiment analysis at multiple levels: overall conversation sentiment, individual message sentiment, and emotional progression throughout the customer journey.</p>

            <h2>Emotion Detection Techniques</h2>
            <p>Use advanced emotion detection techniques that can identify specific emotions like anger, joy, sadness, fear, and surprise. Combine text analysis with contextual understanding to provide accurate emotion detection.</p>
            
            <p>Implement multi-modal emotion detection that can analyze text, voice tone, and other communication signals to provide comprehensive emotional understanding.</p>

            <h2>Response Adaptation</h2>
            <p>Adapt AI responses based on detected customer emotions. Use empathetic language for frustrated customers, celebratory tone for excited customers, and supportive responses for confused or concerned customers.</p>
            
            <p>Implement dynamic response templates that adjust tone, urgency, and approach based on real-time emotion detection and customer sentiment analysis.</p>

            <h2>Escalation Triggers</h2>
            <p>Use sentiment analysis to trigger appropriate escalation protocols. Automatically escalate highly frustrated or angry customers to human agents who can provide more personalized and empathetic support.</p>
            
            <p>Implement sentiment-based routing that directs customers to agents with appropriate emotional intelligence and communication skills for their specific emotional state.</p>

            <h2>Emotional Journey Mapping</h2>
            <p>Track emotional progression throughout customer interactions to identify patterns and improve support strategies. Monitor how customer emotions change during support interactions and optimize accordingly.</p>
            
            <p>Use emotional journey data to identify common pain points and develop proactive strategies to prevent negative emotional experiences.</p>

            <h2>Privacy and Ethics</h2>
            <p>Ensure that emotion detection and sentiment analysis respect customer privacy and comply with relevant regulations. Be transparent about emotion detection capabilities and provide opt-out options when appropriate.</p>
            
            <p>Implement ethical guidelines for emotion detection that protect customer privacy while enabling better support experiences.</p>
        `,
        author: "Dr. Rachel Green",
        authorRole: "AI Psychology Researcher",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        authorBio: "Dr. Rachel Green is an AI Psychology Researcher specializing in emotion detection and sentiment analysis. She has published numerous papers on AI emotional intelligence and has helped develop emotion-aware AI systems for customer support. She holds a PhD in Cognitive Psychology.",
        publishedAt: "2023-12-25",
        readTime: "11 min read",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
        tags: ["Sentiment Analysis", "Emotions", "AI", "Psychology"]
    },
    "roi-ai-customer-support-complete-guide": {
        id: 10,
        title: "The ROI of AI Customer Support: A Complete Guide",
        content: `
            <p>Calculating the return on investment for AI customer support implementation is essential for justifying AI adoption and measuring success. This comprehensive guide covers key metrics, cost savings, and effective measurement strategies.</p>

            <h2>Cost Savings Analysis</h2>
            <p>Calculate direct cost savings from reduced human agent hours, lower training costs, and decreased support infrastructure requirements. Most businesses see 60-80% cost reductions in customer support operations.</p>
            
            <p>Include indirect cost savings such as reduced employee turnover, improved customer retention, and decreased support-related operational expenses.</p>

            <h2>Revenue Impact Metrics</h2>
            <p>Measure revenue impact through improved customer satisfaction, increased customer lifetime value, higher conversion rates, and reduced churn. Track how AI support contributes to overall business growth.</p>
            
            <p>Implement attribution models that connect AI support improvements to specific revenue outcomes and business metrics.</p>

            <h2>Efficiency Gains</h2>
            <p>Quantify efficiency improvements through faster response times, higher resolution rates, and increased support capacity. Measure how AI enables your team to handle more customers with the same resources.</p>
            
            <p>Track productivity metrics such as queries handled per hour, resolution time improvements, and support team capacity utilization.</p>

            <h2>Customer Experience ROI</h2>
            <p>Measure customer experience improvements through satisfaction scores, Net Promoter Score (NPS), customer effort scores, and retention rates. Calculate the business value of improved customer experiences.</p>
            
            <p>Implement customer journey analytics that track how AI support improvements impact overall customer satisfaction and loyalty.</p>

            <h2>Implementation Costs</h2>
            <p>Account for all implementation costs including technology licensing, training, integration, and ongoing maintenance. Include both direct costs and opportunity costs of implementation.</p>
            
            <p>Calculate total cost of ownership (TCO) over 3-5 years to provide a comprehensive view of AI investment requirements.</p>

            <h2>ROI Calculation Methods</h2>
            <p>Use multiple ROI calculation methods including payback period, net present value (NPV), and internal rate of return (IRR). Consider both quantitative and qualitative benefits in your analysis.</p>
            
            <p>Implement ongoing ROI monitoring systems that track performance against initial projections and adjust calculations based on actual results.</p>

            <h2>Long-term Value Assessment</h2>
            <p>Consider long-term value beyond immediate cost savings, including strategic advantages, competitive positioning, and future scalability benefits. Assess how AI support enables business growth and innovation.</p>
            
            <p>Develop scenarios for different growth trajectories and market conditions to understand the full potential value of AI customer support investment.</p>
        `,
        author: "Mark Thompson",
        authorRole: "Business Analyst",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        authorBio: "Mark is a Business Analyst specializing in ROI analysis and business case development for AI implementations. He has helped over 40 companies calculate and optimize their AI investments and has extensive experience in financial modeling and business analytics.",
        publishedAt: "2023-12-22",
        readTime: "13 min read",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
        tags: ["ROI", "Analytics", "Business", "Metrics"]
    }
};

// Blog posts array for listing page
export const blogPostsArray = [
    {
        id: 1,
        title: "The Future of AI in Customer Support: 2024 Trends",
        excerpt: "Discover the latest trends shaping AI customer support and how businesses are leveraging automation to improve customer experiences. From conversational AI to predictive analytics, explore what's driving the industry forward.",
        author: "Sarah Chen",
        authorRole: "Head of AI Research",
        authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
        slug: "future-ai-customer-support-2024-trends",
        featured: true,
        tags: ["AI", "Customer Support", "Automation", "Trends"]
    },
    {
        id: 2,
        title: "How to Train Your AI Assistant for Maximum Effectiveness",
        excerpt: "Learn the best practices for training your AI assistant to provide accurate, helpful responses that delight your customers. From data preparation to continuous learning, master the art of AI training.",
        author: "Michael Rodriguez",
        authorRole: "AI Training Specialist",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-12",
        readTime: "12 min read",
        category: "Best Practices",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
        slug: "train-ai-assistant-maximum-effectiveness",
        featured: false,
        tags: ["Training", "AI", "Best Practices", "Machine Learning"]
    },
    {
        id: 3,
        title: "Measuring AI Success: Key Metrics Every Business Should Track",
        excerpt: "Understand which metrics matter most when evaluating your AI customer support performance and ROI. Learn how to set up dashboards that provide actionable insights for continuous improvement.",
        author: "Emily Watson",
        authorRole: "Data Analyst",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-10",
        readTime: "10 min read",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
        slug: "measuring-ai-success-key-metrics",
        featured: false,
        tags: ["Analytics", "Metrics", "ROI", "Performance"]
    },
    {
        id: 4,
        title: "Integrating AI with Your Existing Customer Support Tools",
        excerpt: "A comprehensive guide to seamlessly integrating AI assistants with your current customer support infrastructure. From API connections to workflow automation, ensure smooth implementation.",
        author: "David Kim",
        authorRole: "Integration Engineer",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-08",
        readTime: "15 min read",
        category: "Integration",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
        slug: "integrating-ai-existing-customer-support-tools",
        featured: false,
        tags: ["Integration", "APIs", "Workflow", "Implementation"]
    },
    {
        id: 5,
        title: "The Psychology of AI-Human Interaction in Customer Service",
        excerpt: "Explore how customers perceive and interact with AI assistants, and how to design more human-like experiences. Discover the psychological principles that make AI interactions feel natural and trustworthy.",
        author: "Lisa Thompson",
        authorRole: "UX Researcher",
        authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-05",
        readTime: "14 min read",
        category: "UX Design",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
        slug: "psychology-ai-human-interaction-customer-service",
        featured: false,
        tags: ["Psychology", "UX", "Human-Computer Interaction", "Design"]
    },
    {
        id: 6,
        title: "Case Study: How TechCorp Reduced Support Costs by 60% with AI",
        excerpt: "A detailed look at how one company transformed their customer support operations using AI automation. Learn about their implementation strategy, challenges faced, and the impressive results achieved.",
        author: "Alex Johnson",
        authorRole: "Customer Success Manager",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-03",
        readTime: "12 min read",
        category: "Case Study",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
        slug: "case-study-techcorp-reduced-support-costs-60-percent",
        featured: false,
        tags: ["Case Study", "Cost Reduction", "ROI", "Success Story"]
    },
    {
        id: 7,
        title: "Building Trust in AI: Transparency and Explainability",
        excerpt: "Learn how to build customer trust in AI systems through transparency and explainability. Discover best practices for making AI decisions understandable and building confidence in automated support.",
        author: "Maria Garcia",
        authorRole: "AI Ethics Specialist",
        authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2024-01-01",
        readTime: "11 min read",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=300&fit=crop",
        slug: "building-trust-ai-transparency-explainability",
        featured: false,
        tags: ["AI Ethics", "Trust", "Transparency", "Explainability"]
    },
    {
        id: 8,
        title: "Multilingual AI Support: Breaking Language Barriers",
        excerpt: "Explore how AI can provide seamless customer support across multiple languages and cultures. Learn about the challenges and solutions for implementing multilingual AI systems.",
        author: "James Wilson",
        authorRole: "Global Support Director",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2023-12-28",
        readTime: "9 min read",
        category: "Global Support",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop",
        slug: "multilingual-ai-support-breaking-language-barriers",
        featured: false,
        tags: ["Multilingual", "Global", "Localization", "Language"]
    },
    {
        id: 9,
        title: "AI-Powered Sentiment Analysis: Understanding Customer Emotions",
        excerpt: "Learn how sentiment analysis can help your AI assistant understand customer emotions and respond appropriately. Discover best practices for implementing emotional intelligence in customer support.",
        author: "Dr. Rachel Green",
        authorRole: "AI Psychology Researcher",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2023-12-25",
        readTime: "11 min read",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
        slug: "ai-powered-sentiment-analysis-understanding-customer-emotions",
        featured: false,
        tags: ["Sentiment Analysis", "Emotions", "AI", "Psychology"]
    },
    {
        id: 10,
        title: "The ROI of AI Customer Support: A Complete Guide",
        excerpt: "Calculate the return on investment for your AI customer support implementation. Learn about key metrics, cost savings, and how to measure success effectively.",
        author: "Mark Thompson",
        authorRole: "Business Analyst",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        publishedAt: "2023-12-22",
        readTime: "13 min read",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
        slug: "roi-ai-customer-support-complete-guide",
        featured: false,
        tags: ["ROI", "Analytics", "Business", "Metrics"]
    }
];

// Related posts data
export const relatedPosts = [
    {
        title: "Measuring AI Success: Key Metrics Every Business Should Track",
        slug: "measuring-ai-success-key-metrics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        readTime: "10 min read",
        category: "Analytics"
    },
    {
        title: "Integrating AI with Your Existing Customer Support Tools",
        slug: "integrating-ai-existing-customer-support-tools",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
        readTime: "15 min read",
        category: "Integration"
    },
    {
        title: "The Psychology of AI-Human Interaction in Customer Service",
        slug: "psychology-ai-human-interaction-customer-service",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
        readTime: "14 min read",
        category: "UX Design"
    }
];

// Testimonials data
export const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "CEO, TechStartup Inc.",
        content: "Our AI assistant handles 75% of customer conversations automatically. Our customers love the instant, accurate responses based on our knowledge base.",
        rating: 5,
        company: "TechStartup Inc.",
        industry: "SaaS Technology"
    },
    {
        name: "Michael Johnson",
        role: "Head of Support, EcomPlus",
        content: "The AI understands our product so well that customers often can't tell they're talking to a bot. Setup was incredibly easy - we were live in 10 minutes.",
        rating: 5,
        company: "EcomPlus",
        industry: "E-commerce"
    },
    {
        name: "Anna Lee",
        role: "Customer Success, SaaSPro",
        content: "We've saved over $50,000 annually on support costs while improving customer satisfaction scores. The analytics dashboard gives us incredible insights.",
        rating: 5,
        company: "SaaSPro",
        industry: "SaaS Technology"
    },
    {
        name: "Dr. Emily Watson",
        role: "Chief Medical Officer, HealthCare Pro",
        content: "Our patients love the instant responses, and our medical staff can focus on complex cases. The AI never makes medical decisions, which is exactly what we needed.",
        rating: 5,
        company: "HealthCare Pro",
        industry: "Healthcare"
    },
    {
        name: "David Kim",
        role: "Head of Operations, FinanceFirst",
        content: "The AI onboarding process is faster and more accurate than our manual process. Customers complete their applications in days, not weeks.",
        rating: 5,
        company: "FinanceFirst",
        industry: "Financial Services"
    },
    {
        name: "Lisa Thompson",
        role: "Director of Student Success, EduTech Solutions",
        content: "Students can get help instantly, day or night. Our completion rates have improved significantly since implementing the AI assistant.",
        rating: 5,
        company: "EduTech Solutions",
        industry: "Education Technology"
    }
];

// Features data
export const features = {
    main: [
        "Smart Knowledge Base",
        "Intelligent Automation",
        "Real-time Analytics",
        "24/7 Availability",
        "Advanced Insights",
        "Seamless Integration"
    ],
    industries: [
        "E-commerce",
        "Healthcare",
        "SaaS & Technology",
        "Financial Services",
        "Real Estate",
        "Education",
        "Travel & Hospitality",
        "Legal Services",
        "Manufacturing",
        "Food & Beverage",
        "Automotive",
        "Non-Profit"
    ]
};

// Statistics data
export const statistics = {
    businesses: "10,000+",
    conversations: "2M+",
    satisfaction: "98%",
    uptime: "99.9%"
};

// Pricing plans data
export const pricingPlans = [
    {
        name: "Starter",
        price: 29,
        period: "month",
        description: "Perfect for small businesses getting started with AI support",
        features: [
            "Up to 1,000 conversations/month",
            "Basic AI responses",
            "Knowledge base training",
            "Email support",
            "Basic analytics",
            "Standard integrations"
        ],
        popular: false,
        cta: "Start Free Trial",
        ctaLink: "https://app.your-domain.com/signup?plan=starter"
    },
    {
        name: "Growth",
        price: 99,
        period: "month",
        description: "Ideal for growing businesses with advanced AI features",
        features: [
            "Up to 10,000 conversations/month",
            "Advanced AI responses",
            "Custom training",
            "Priority support",
            "Advanced analytics",
            "All integrations",
            "API access",
            "Custom branding"
        ],
        popular: true,
        cta: "Start Free Trial",
        ctaLink: "https://app.your-domain.com/signup?plan=growth"
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        description: "For large organizations with unlimited conversations and custom features",
        features: [
            "Unlimited conversations",
            "Custom AI models",
            "Dedicated support",
            "Enterprise features",
            "Custom integrations",
            "SLA guarantee",
            "On-premise deployment",
            "Custom training"
        ],
        popular: false,
        cta: "Contact Sales",
        ctaLink: "https://app.your-domain.com/contact?plan=enterprise"
    }
];

// FAQ data
export const faqs = [
    {
        question: "How quickly can I Buy Assistrio with AI customer support?",
        answer: "You can Buy Assistrio in minutes! Simply upload your knowledge base, configure your AI assistant, and you're ready to handle customer inquiries. Most customers see results within the first day of implementation."
    },
    {
        question: "Will AI replace my human support team?",
        answer: "No, AI is designed to augment your human team, not replace it. AI handles routine inquiries and escalates complex issues to human agents, allowing your team to focus on high-value interactions and strategic work."
    },
    {
        question: "How accurate are AI responses?",
        answer: "Our AI achieves 95%+ accuracy on trained topics. The system continuously learns from interactions and feedback, improving accuracy over time. You can also set confidence thresholds to ensure only high-confidence responses are sent automatically."
    },
    {
        question: "Can I integrate with my existing tools?",
        answer: "Yes! We offer integrations with popular CRM systems, ticketing platforms, and communication tools. Our API also allows for custom integrations with any system you're using."
    },
    {
        question: "Is my data secure and private?",
        answer: "Absolutely. We use enterprise-grade security measures, including encryption at rest and in transit, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties without your explicit consent."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including setup assistance, training, ongoing optimization, and 24/7 technical support. Enterprise customers also get dedicated account managers and priority support."
    }
];

// Contact information
export const contactInfo = {
    email: "hello@your-domain.com",
    supportEmail: "support@your-domain.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, City, State 12345",
    businessHours: {
        weekdays: "9:00 AM - 6:00 PM PST",
        saturday: "10:00 AM - 4:00 PM PST",
        sunday: "Closed"
    }
};

// Social media links
export const socialLinks = {
    x: "@yourcompany",
    linkedin: "yourcompany",
    github: "yourcompany"
};

// App URLs
export const appUrls = {
    signup: "https://app.your-domain.com/signup",
    dashboard: "https://app.your-domain.com/dashboard"
};

// Job openings data
export const jobOpenings = [
    {
        id: 1,
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "5+ years",
        description: "We're looking for a Senior AI Engineer to help build and scale our AI customer support platform. You'll work on cutting-edge NLP models and conversational AI systems.",
        requirements: [
            "5+ years of experience in AI/ML engineering",
            "Strong background in NLP and conversational AI",
            "Experience with Python, TensorFlow, and PyTorch",
            "Knowledge of cloud platforms (AWS, GCP, or Azure)",
            "Experience with production AI systems"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work arrangements",
            "Professional development budget",
            "Unlimited PTO"
        ]
    },
    {
        id: 2,
        title: "Product Manager - AI Platform",
        department: "Product",
        location: "San Francisco, CA",
        type: "Full-time",
        experience: "3+ years",
        description: "Join our product team to help shape the future of AI customer support. You'll work closely with engineering, design, and customer success teams to build amazing products.",
        requirements: [
            "3+ years of product management experience",
            "Experience with AI/ML products preferred",
            "Strong analytical and problem-solving skills",
            "Excellent communication and collaboration skills",
            "Experience with agile development methodologies"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work arrangements",
            "Professional development budget",
            "Unlimited PTO"
        ]
    },
    {
        id: 3,
        title: "Customer Success Manager",
        department: "Customer Success",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Help our customers succeed with our AI platform. You'll work directly with customers to ensure they get maximum value from our solution.",
        requirements: [
            "2+ years of customer success experience",
            "Experience with SaaS products",
            "Strong relationship-building skills",
            "Analytical mindset with attention to detail",
            "Experience with CRM systems"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work arrangements",
            "Professional development budget",
            "Unlimited PTO"
        ]
    },
    {
        id: 4,
        title: "UX Designer",
        department: "Design",
        location: "New York, NY",
        type: "Full-time",
        experience: "3+ years",
        description: "Design intuitive and engaging user experiences for our AI platform. You'll work on everything from user research to high-fidelity prototypes.",
        requirements: [
            "3+ years of UX design experience",
            "Portfolio demonstrating strong design skills",
            "Experience with design tools (Figma, Sketch, etc.)",
            "Understanding of user research methodologies",
            "Experience with AI/ML products preferred"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work arrangements",
            "Professional development budget",
            "Unlimited PTO"
        ]
    },
    {
        id: 5,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "4+ years",
        description: "Help us scale our infrastructure and ensure our platform is reliable and performant. You'll work on everything from CI/CD to monitoring and alerting.",
        requirements: [
            "4+ years of DevOps experience",
            "Experience with cloud platforms (AWS, GCP, or Azure)",
            "Knowledge of containerization (Docker, Kubernetes)",
            "Experience with monitoring and alerting tools",
            "Strong scripting skills (Python, Bash, etc.)"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work arrangements",
            "Professional development budget",
            "Unlimited PTO"
        ]
    }
];

// Status page data
export const services = [
    {
        name: 'AI Assistant API',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '45ms',
        lastIncident: null,
        description: 'Core AI processing and response generation'
    },
    {
        name: 'Authentication Service',
        status: 'operational',
        uptime: '99.8%',
        responseTime: '23ms',
        lastIncident: null,
        description: 'User authentication and authorization'
    },
    {
        name: 'Database',
        status: 'operational',
        uptime: '99.95%',
        responseTime: '12ms',
        lastIncident: null,
        description: 'Primary data storage and retrieval'
    },
    {
        name: 'CDN & Assets',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '8ms',
        lastIncident: null,
        description: 'Content delivery and static assets'
    },
    {
        name: 'Email Service',
        status: 'degraded',
        uptime: '98.2%',
        responseTime: '120ms',
        lastIncident: '2024-01-15T10:30:00Z',
        description: 'Email notifications and communications'
    },
    {
        name: 'Analytics',
        status: 'operational',
        uptime: '99.7%',
        responseTime: '67ms',
        lastIncident: null,
        description: 'Data analytics and reporting'
    }
];

// Help center FAQ data
export const helpCenterFAQs = [
    {
        question: "How accurate is Alexi?",
        answer: "Alexi achieves 95%+ accuracy on common customer support queries. It's continuously learning from your interactions to improve over time.",
        category: "AI & Technology",
        hasAlexi: true
    },
    {
        question: "Can I customize Alexi's responses?",
        answer: "Yes! You can customize Alexi's tone, style, and responses to match your brand voice. You can also provide specific instructions for different types of queries.",
        category: "Customization",
        hasAlexi: true
    },
    {
        question: "What happens when Alexi can't answer a question?",
        answer: "When Alexi encounters a question it can't answer confidently, it will either ask for clarification or seamlessly transfer the conversation to a human agent.",
        category: "AI & Technology",
        hasAlexi: true
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use enterprise-grade security measures including encryption, secure data centers, and comply with GDPR and SOC 2 standards.",
        category: "Security"
    },
    {
        question: "How much does it cost?",
        answer: `Our pricing starts at $29/month for up to 1,000 conversations. See our <a href='${LINKS.PRICING}' class='text-teal-600 hover:text-teal-700 underline font-medium'>pricing page</a> for detailed plans and enterprise options.`,
        category: "Billing"
    },
    {
        question: "Do you offer integrations?",
        answer: `Yes! We integrate with popular CRM systems, ticketing platforms, and communication tools. Check our <a href='${LINKS.INTEGRATIONS}' class='text-teal-600 hover:text-teal-700 underline font-medium'>integrations page</a> for the full list.`,
        category: "Integrations"
    },
    {
        question: "How do I Buy Assistrio?",
        answer: "Getting started is easy! Sign up for a free trial, upload your knowledge base, and configure your AI assistant. Most customers are up and running within minutes.",
        category: "Getting Started"
    },
    {
        question: "Can I try before I buy?",
        answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to Buy Assistrio.",
        category: "Getting Started"
    },
    {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including setup assistance, training, ongoing optimization, and 24/7 technical support. Enterprise customers get dedicated account managers.",
        category: "Support"
    },
    {
        question: "How does Alexi learn from my business?",
        answer: "Alexi learns from your knowledge base, customer interactions, and feedback. The more data you provide, the better Alexi becomes at understanding your specific business and customers.",
        category: "AI & Technology",
        hasAlexi: true
    }
];

// Help center categories data
import { FaRocket, FaCreditCard, FaLink } from 'react-icons/fa';

export const helpCategories = [
    {
        title: "Getting Started",
        description: "Everything you need to know to get up and running",
        icon: FaRocket,
        color: "from-brand-600 to-brand-700",
        articles: [
            {
                title: "How do I set up my first Alexi assistant?",
                description: "Follow our step-by-step guide to configure Alexi and train it on your knowledge base.",
                hasAlexi: true,
                link: "#"
            },
            {
                title: "What data do I need to provide?",
                description: "You can upload your existing documentation, FAQs, and support tickets to train Alexi.",
                hasAlexi: true,
                link: "#"
            },
            {
                title: "How do I Buy Assistrio?",
                description: `Getting started is easy! Simply <a href='${LINKS.SIGNUP_GROWTH}' class='text-brand-600 hover:text-brand-700 underline font-medium' target='_blank'>sign up for our Growth plan</a> and you'll have access to all the features you need.`,
                link: LINKS.SIGNUP_GROWTH
            }
        ]
    },
    {
        title: "Account & Billing",
        description: "Manage your account and understand billing",
        icon: FaCreditCard,
        color: "from-brand-500 to-brand-600",
        articles: [
            {
                title: "How does billing work?",
                description: `We charge based on the number of conversations per month. See our <a href='${LINKS.PRICING}' class='text-brand-600 hover:text-brand-700 underline font-medium'>pricing page</a> for details.`,
                link: LINKS.PRICING
            },
            {
                title: "Can I change my plan anytime?",
                description: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
                link: "#"
            },
            {
                title: "What is your refund policy?",
                description: `Please review our <a href='${LINKS.REFUND}' class='text-brand-600 hover:text-brand-700 underline font-medium'>refund policy</a> for detailed information about our terms and conditions.`,
                link: LINKS.REFUND
            }
        ]
    },
    {
        title: "Features & Integrations",
        description: "Explore features and platform integrations",
        icon: FaLink,
        color: "from-brand-400 to-brand-500",
        articles: [
            {
                title: "What platforms do you integrate with?",
                description: "Currently available: Zapier Integration. Coming soon: Shopify, Wix, WordPress, Google Drive, and Notion. Check our pricing plans for specific availability.",
                link: LINKS.PRICING
            },
            {
                title: "Can I customize Alexi's responses?",
                description: "Yes! Customize tone, style, and responses to match your brand voice and specific requirements.",
                link: "#"
            },
            {
                title: "What happens when Alexi can't answer?",
                description: "Alexi will ask for clarification or seamlessly transfer to a human agent when needed.",
                hasAlexi: true,
                link: "#"
            },
            {
                title: "Integration Status Overview",
                description: "Available now: Zapier. Coming soon: Shopify, Wix, WordPress, Google Drive, Notion. Check pricing plans for plan-specific availability.",
                link: LINKS.PRICING
            }
        ]
    }
];

// Legal page content
export const legalContent = {
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "January 15, 2024",
        content: `
            <h2 id="introduction">1. Introduction</h2>
            <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our AI assistant services. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
            
            <h2 id="information-collect">2. Information We Collect</h2>
            <p>We collect several types of information to provide and improve our services:</p>
            
            <h3 id="personal-info">2.1 Personal Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
                <li>Name and email address</li>
                <li>Account credentials and preferences</li>
                <li>Billing and payment information</li>
                <li>Profile information you choose to provide</li>
            </ul>
            
            <h3 id="auto-collected">2.2 Automatically Collected Information</h3>
            <p>We automatically collect certain information when you use our services:</p>
            <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Log data (access times, error logs, performance metrics)</li>
                <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h3 id="ai-training">2.3 AI Training Data</h3>
            <p>To improve our AI models, we may collect:</p>
            <ul>
                <li>Conversation data (anonymized and aggregated)</li>
                <li>User feedback and ratings</li>
                <li>Interaction patterns and preferences</li>
            </ul>
            
            <h2 id="how-we-use">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            
            <h3 id="service-provision">3.1 Service Provision</h3>
            <ul>
                <li>Provide and maintain our AI assistant services</li>
                <li>Process transactions and manage your account</li>
                <li>Deliver personalized content and recommendations</li>
                <li>Enable communication features</li>
            </ul>
            
            <h3 id="communication">3.2 Communication</h3>
            <ul>
                <li>Send service-related notifications</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Provide important updates about our services</li>
            </ul>
            
            <h3 id="analytics">3.3 Analytics and Improvement</h3>
            <ul>
                <li>Analyze usage patterns to improve our services</li>
                <li>Develop new features and functionality</li>
                <li>Conduct research and development</li>
                <li>Ensure service quality and performance</li>
            </ul>
            
            <h2 id="information-sharing">4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            
            <h3 id="service-providers">4.1 Service Providers</h3>
            <p>We work with third-party service providers who assist us in operating our services. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.</p>
            
            <h3 id="legal-requirements">4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests from government authorities or courts.</p>
            
            <h3 id="business-transfers">4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
            
            <h2 id="data-security">5. Data Security</h2>
            <p>We implement comprehensive security measures to protect your personal information:</p>
            <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
            </ul>
            
            <h2 id="data-retention">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We will delete or anonymize your information when it is no longer needed, unless we are required to retain it for legal or regulatory purposes.</p>
            
            <h2 id="your-rights">7. Your Rights and Choices</h2>
            <p>You have several rights regarding your personal information:</p>
            
            <h3 id="access-portability">7.1 Access and Portability</h3>
            <p>You have the right to access your personal information and receive a copy in a portable format.</p>
            
            <h3 id="correction-updates">7.2 Correction and Updates</h3>
            <p>You can correct or update your personal information at any time through your account settings.</p>
            
            <h3 id="deletion-restriction">7.3 Deletion and Restriction</h3>
            <p>You can request the deletion of your personal information or restrict its processing in certain circumstances.</p>
            
            <h3 id="communication-preferences">7.4 Communication Preferences</h3>
            <p>You can opt out of marketing communications while still receiving important service-related messages.</p>
            
            <h2 id="cookies">8. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to enhance your experience:</p>
            
            <h3 id="cookie-types">8.1 Types of Cookies</h3>
            <ul>
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            
            <h2 id="international-transfers">9. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.</p>
            
            <h2 id="children-privacy">10. Children's Privacy</h2>
            <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
            
            <h2 id="california-rights">11. California Privacy Rights</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how we use it.</p>
            
            <h2 id="eu-gdpr">12. European Union (GDPR) Rights</h2>
            <p>If you are in the European Union, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict, and port your personal data.</p>
            
            <h2 id="policy-changes">13. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
            
            <h2 id="contact">14. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <ul>
                <li><strong>Email:</strong> privacy@your-domain.com</li>
                <li><strong>Address:</strong> 123 AI Street, Tech City, TC 12345</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            </ul>
            
            <h2 id="complaints">15. Complaints</h2>
            <p>If you have concerns about how we handle your personal information, you can file a complaint with your local data protection authority or contact us directly to resolve the issue.</p>
        `
    },
    terms: {
        title: "Terms of Service",
        lastUpdated: "January 15, 2024",
        content: `
            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>By accessing and using our AI assistant services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            <p>These Terms of Service ("Terms") govern your use of our website and services operated by our company. By accessing or using our service, you agree to be bound by these Terms.</p>
            
            <h2 id="use-license">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
            
            <h2 id="disclaimer">3. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            
            <h2 id="limitations">4. Limitations</h2>
            <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if our company or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            
            <h2 id="governing-law">5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            <p>Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in California, and you hereby consent to the personal jurisdiction of such courts.</p>
        `
    },
    cookies: {
        title: "Cookie Policy",
        lastUpdated: "January 15, 2024",
        content: `
            <h2 id="what-are-cookies">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
            <p>Cookies contain information that is transferred to your computer's hard drive. They help us to improve our site and to deliver a better and more personalized service.</p>
            
            <h2 id="how-we-use-cookies">2. How We Use Cookies</h2>
            <p>We use cookies to improve your experience on our website, analyze site usage, and personalize content and advertisements. Specifically, we use cookies to:</p>
            <ul>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve the functionality and performance of our site</li>
                <li>Provide personalized content and recommendations</li>
                <li>Analyze traffic patterns and user behavior</li>
                <li>Enable social media features</li>
            </ul>
            
            <h2 id="types-of-cookies">3. Types of Cookies</h2>
            <p>We use several types of cookies on our website:</p>
            <ul>
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Preference Cookies:</strong> These cookies remember your choices and preferences, such as language settings and region selection.</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant and engaging advertisements.</li>
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.</li>
                <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them.</li>
            </ul>
            
            <h2 id="managing-cookies">4. Managing Cookies</h2>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="${LINKS.ABOUT_COOKIES}" target="_blank" rel="noopener">www.aboutcookies.org</a> or <a href="${LINKS.ALL_ABOUT_COOKIES}" target="_blank" rel="noopener">www.allaboutcookies.org</a>.</p>
            <p>You can also opt out of certain third-party cookies by visiting the Network Advertising Initiative opt-out page at <a href="${LINKS.NETWORK_ADVERTISING_OPT_OUT}" target="_blank" rel="noopener">optout.networkadvertising.org</a>.</p>
        `
    },
    refund: {
        title: "Refund Policy",
        lastUpdated: "January 15, 2024",
        content: `
            <h2 id="refund-eligibility">1. Refund Eligibility</h2>
            <p>We offer refunds for unused portions of your subscription within 30 days of purchase, provided you haven't exceeded the usage limits of your plan. To be eligible for a refund, the following conditions must be met:</p>
            <ul>
                <li>The refund request is made within 30 days of the original purchase</li>
                <li>You have not exceeded the usage limits specified in your subscription plan</li>
                <li>The service has not been used for commercial purposes beyond the scope of your plan</li>
                <li>No custom development work has been performed on your account</li>
                <li>You have not violated our Terms of Service</li>
            </ul>
            <p>Refunds are calculated on a pro-rated basis for the unused portion of your subscription period.</p>
            
            <h2 id="how-to-request">2. How to Request a Refund</h2>
            <p>To request a refund, please contact our support team with the following information:</p>
            <ul>
                <li>Your account email address</li>
                <li>Order number or transaction ID</li>
                <li>Reason for the refund request</li>
                <li>Any relevant documentation or screenshots</li>
            </ul>
            <p>You can reach our support team through:</p>
            <ul>
                <li><strong>Email:</strong> support@your-domain.com</li>
                <li><strong>Live Chat:</strong> Available on our website during business hours</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            </ul>
            <p>Please allow 24-48 hours for our team to review and respond to your refund request.</p>
            
            <h2 id="processing-time">3. Processing Time</h2>
            <p>Once your refund request is approved, the processing time varies depending on your payment method:</p>
            <ul>
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Bank Transfers:</strong> 7-10 business days</li>
                <li><strong>Cryptocurrency:</strong> 1-3 business days</li>
            </ul>
            <p>The refund will be credited to your original payment method. You will receive an email confirmation once the refund has been processed.</p>
            <p>Please note that processing times may be longer during holidays or high-volume periods.</p>
            
            <h2 id="non-refundable">4. Non-Refundable Items</h2>
            <p>The following items and services are non-refundable:</p>
            <ul>
                <li><strong>Custom Development Work:</strong> Once development has begun, custom features and integrations cannot be refunded</li>
                <li><strong>Professional Services:</strong> Consulting, training, and implementation services are non-refundable</li>
                <li><strong>Third-Party Integrations:</strong> Costs associated with third-party services and APIs</li>
                <li><strong>Usage-Based Charges:</strong> Charges for API calls, data processing, or other usage-based services</li>
                <li><strong>Domain Names:</strong> Domain registration and renewal fees</li>
                <li><strong>Digital Products:</strong> Software licenses, templates, or other digital products</li>
            </ul>
            <p>If you have questions about whether a specific item is refundable, please contact our support team before making a purchase.</p>
        `
    }
};
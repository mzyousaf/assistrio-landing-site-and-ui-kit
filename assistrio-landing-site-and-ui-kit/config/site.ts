// Site Configuration
import { LINKS } from './links';

export const siteConfig = {
    // Basic Information
    name: "AI Assistant",
    description: "The modern AI platform that transforms customer support with intelligent automation",
    url: "https://your-domain.com",

    // Contact Information
    contact: {
        email: "hello@your-domain.com",
        supportEmail: "support@your-domain.com",
        phone: "+1 (555) 123-4567",
        address: "123 Business St, City, State 12345"
    },

    // Social Media
    social: {
        x: "@yourcompany",
        linkedin: "yourcompany",
        github: "yourcompany"
    },

    // Business Hours
    businessHours: {
        weekdays: "9:00 AM - 6:00 PM PST",
        saturday: "10:00 AM - 4:00 PM PST",
        sunday: "Closed"
    },

    // App URLs - using centralized links
    appUrls: {
        signup: LINKS.SIGNUP_FREE,
        dashboard: LINKS.DASHBOARD
    },

    // External Links - using centralized links
    external: {
        evanto: LINKS.EVANTO
    },

    // Features
    features: {
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
    },

    // Statistics
    stats: {
        businesses: "10,000+",
        conversations: "2M+",
        satisfaction: "98%",
        uptime: "99.9%"
    },

    // Testimonials
    testimonials: [
        {
            name: "Sarah Mitchell",
            role: "CEO, TechStartup Inc.",
            content: "Our AI assistant handles 75% of customer conversations automatically. Our customers love the instant, accurate responses based on our knowledge base.",
            rating: 5
        },
        {
            name: "Michael Johnson",
            role: "Head of Support, EcomPlus",
            content: "The AI understands our product so well that customers often can't tell they're talking to a bot. Setup was incredibly easy - we were live in 10 minutes.",
            rating: 5
        },
        {
            name: "Anna Lee",
            role: "Customer Success, SaaSPro",
            content: "We've saved over $50,000 annually on support costs while improving customer satisfaction scores. The analytics dashboard gives us incredible insights.",
            rating: 5
        }
    ]
};

export default siteConfig;

// Centralized link configuration for the application
export const LINKS = {
    // Main application links
    SIGNUP: 'https://app.your-domain.com/signup?plan=growth',
    SIGNUP_FREE: 'https://app.your-domain.com/signup',
    SIGNUP_GROWTH: 'https://app.your-domain.com/signup?plan=growth',
    DASHBOARD: 'https://app.your-domain.com/dashboard',
    PRICING: '/pricing',

    // External links
    EVANTO: 'https://themeforest.net/item/assistrio-ai-customer-support-landing-page/your-item-id',
    ABOUT_COOKIES: 'https://www.aboutcookies.org',
    ALL_ABOUT_COOKIES: 'https://www.allaboutcookies.org',
    NETWORK_ADVERTISING_OPT_OUT: 'https://optout.networkadvertising.org',

    // Internal pages
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    BLOG: '/blog',
    HELP_CENTER: '/help-center',
    STATUS: '/status',
    PRODUCT: '/product',
    TEAM: '/team',
    CAREERS: '/careers',
    RESOURCES: '/resources',
    CASE_STUDIES: '/case-studies',
    SECURITY: '/ai-saas-landing#security',
    INTEGRATIONS: '/integrations',
    SHOWCASE: '/showcase',
    LANDINGS: '/ai-saas-landing',

    // Legal pages
    PRIVACY: '/legal/privacy',
    TERMS: '/legal/terms',
    COOKIES: '/legal/cookies',
    REFUND: '/legal/refund',

    // Social media links
    SOCIAL: {
        LINKEDIN: 'https://linkedin.com/in',
        X: 'https://x.com',
        GITHUB: 'https://github.com',
    },

    // External image URLs (for team members and case studies)
    IMAGES: {
        TEAM_MEMBER_1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_4: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_5: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_6: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_7: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format',
        TEAM_MEMBER_8: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format',
        CASE_STUDY_1: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        CASE_STUDY_2: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        LOGO_1: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
        LOGO_2: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop',
    },
} as const;

// Helper function to get signup link with specific plan
export const getSignupLink = (plan?: string) => {
    if (plan) {
        return `${LINKS.SIGNUP_FREE}?plan=${plan}`;
    }
    return LINKS.SIGNUP;
};

// Helper function to get Evanto link with UTM parameters
export const getEvantoLink = (source?: string) => {
    const baseUrl = LINKS.EVANTO;
    if (source) {
        return `${baseUrl}?utm_source=${source}&utm_medium=website&utm_campaign=assistrio`;
    }
    return baseUrl;
};

// Helper function to get social media link
export const getSocialLink = (platform: 'linkedin' | 'x' | 'github', username: string) => {
    const baseUrl = LINKS.SOCIAL[platform.toUpperCase() as keyof typeof LINKS.SOCIAL];
    return `${baseUrl}/${username}`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#F0F9FF',
                    100: '#E0F2FE',
                    200: '#BAE6FD',
                    300: '#7DD3FC',
                    400: '#38BDF8', // light accent
                    500: '#0EA5E9', // primary
                    600: '#0284C7', // hover/active
                    700: '#0369A1',
                    800: '#075985',
                    900: '#0C4A6E',
                },
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                // SaaS accent colors
                purple: {
                    50: '#FAF5FF',
                    100: '#F3E8FF',
                    200: '#E9D5FF',
                    300: '#D8B4FE',
                    400: '#C084FC',
                    500: '#A855F7',
                    600: '#9333EA',
                    700: '#7C3AED',
                    800: '#6B21A8',
                    900: '#581C87',
                },
                // Keep teal for backward compatibility
                teal: { DEFAULT: '#0EA5E9' },
            },
            fontFamily: {
                heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            boxShadow: {
                card: '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
                float: '0 4px 6px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
                hover: '0 10px 15px rgba(0,0,0,0.10), 0 4px 6px rgba(0,0,0,0.05)',
                ring: '0 0 0 4px rgba(20,184,166,0.15)',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.25rem',
            },
            spacing: {
                1.5: '0.375rem',
            },
            fontSize: {
                'hero-sm': ['2rem', { lineHeight: '2.5rem' }],
                'hero-md': ['3rem', { lineHeight: '3.5rem' }],
                'hero-lg': ['4rem', { lineHeight: '4.5rem' }],
                'hero-xl': ['5rem', { lineHeight: '5.5rem' }],
                'hero-2xl': ['6rem', { lineHeight: '6.5rem' }],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
                'slide-in-right': 'slideInRight 0.8s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s infinite',
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slideInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                scaleIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.9)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
                glow: {
                    '0%': {
                        boxShadow: '0 0 5px rgba(20,184,166,0.5)',
                    },
                    '100%': {
                        boxShadow: '0 0 20px rgba(20,184,166,0.8), 0 0 30px rgba(20,184,166,0.6)',
                    },
                },
            },
        },
    },
    plugins: [],
}

"use client";

import React from 'react';
import { FaArrowUp, FaShoppingBag, FaLayerGroup, FaSun, FaMoon } from 'react-icons/fa';
import { FloatingButtons, FloatingButton } from '@/components/ui/FloatingButtons';
import { useScrollY } from '@/hooks/useScrollY';
import { LINKS } from '@/config/links';
import { useTheme } from '@/components/ThemeProvider';

export function FloatingButtonsDemo() {
    const scrollY = useScrollY();
    const { theme, toggleTheme } = useTheme();

    const scrollToTop = () => {
        // Very fast scroll to top using smooth scrolling
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleBuyAssistrio = () => {
        // Replace with actual purchase logic
        alert('Redirecting to purchase page...');
    };

    const buttons: FloatingButton[] = [
        {
            id: 'scroll-to-top',
            icon: <FaArrowUp className="w-5 h-5 text-white" />,
            label: 'Scroll to Top',
            onClick: scrollToTop,
            mode: 'iconHoverLabel',
            ariaLabel: 'Scroll to top',
            className: scrollY === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        },
        {
            id: 'theme-toggle',
            icon: theme === 'dark' ? <FaSun className="w-5 h-5 text-white" /> : <FaMoon className="w-5 h-5 text-white" />,
            label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
            onClick: toggleTheme,
            mode: 'iconHoverLabel',
            ariaLabel: 'Toggle theme',
            className: 'bg-purple-600 hover:bg-purple-700'
        },
        {
            id: 'showcase',
            icon: <FaLayerGroup className="w-5 h-5 text-white" />,
            label: 'View Components',
            onClick: () => window.location.href = LINKS.SHOWCASE,
            mode: 'iconHoverLabel',
            ariaLabel: 'View component showcase',
            className: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            id: 'buy-assistrio',
            icon: <FaShoppingBag className="w-5 h-5 text-white" />,
            label: 'Buy Assistrio',
            onClick: handleBuyAssistrio,
            mode: 'iconHoverLabel',
            ariaLabel: 'Purchase Assistrio product'
        }
    ];

    return <FloatingButtons buttons={buttons} />;
}

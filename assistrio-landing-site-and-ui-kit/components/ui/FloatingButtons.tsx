"use client";

import React, { useState, useEffect, ReactNode } from 'react';

export type FloatingButtonMode = 'icon' | 'iconLabel' | 'iconHoverLabel';

export interface FloatingButton {
    id: string;
    icon: ReactNode;
    label: string;
    onClick: () => void;
    mode: FloatingButtonMode;
    ariaLabel: string;
    className?: string;
}

export interface FloatingButtonsProps {
    buttons: FloatingButton[];
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    gap?: number;
    className?: string;
}

// Utility: Detect if mobile viewport (smaller than md breakpoint, e.g. Tailwind's 768px)
// Handles hydration: always starts as "desktop", only updates after client mount.
function useIsMobile(breakpointPx = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < breakpointPx);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpointPx]);
    return isMobile;
}

export function FloatingButtons({
    buttons,
    position = 'bottom-right',
    gap = 12,
    className = ''
}: FloatingButtonsProps) {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const isMobile = useIsMobile(768);

    // Avoid rendering any client-dynamic UI until after mount for hydration
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Helper to force all button modes to "icon" on mobile
    const getEffectiveMode = (mode: FloatingButtonMode) => (isMobile ? 'icon' : mode);

    const getPositionClasses = () => {
        switch (position) {
            case 'bottom-left':
                return 'bottom-4 left-4';
            case 'top-right':
                return 'top-4 right-4';
            case 'top-left':
                return 'top-4 left-4';
            default:
                return 'bottom-4 right-4';
        }
    };

    const getButtonClasses = (button: FloatingButton, effectiveMode: FloatingButtonMode) => {
        const baseClasses = `relative flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 hover:scale-110 shadow-lg hover:shadow-xl text-white`;

        switch (effectiveMode) {
            case 'icon':
                return `${baseClasses} w-12 h-12  ${position.includes('right') ? 'self-end' : 'self-start'}`;

            case 'iconLabel':
                return `${baseClasses} px-4 py-2 rounded-full ${position.includes('right') ? 'self-end' : 'self-start'}`;

            case 'iconHoverLabel':
                return `${baseClasses} w-12 h-12 px-4 py-2 w-auto transition-all duration-300 ${position.includes('right') ? 'self-end' : 'self-start'}`;

            default:
                return baseClasses;
        }
    };

    const getLabelClasses = (button: FloatingButton, effectiveMode: FloatingButtonMode) => {
        switch (effectiveMode) {
            case 'iconLabel':
                return 'ml-2 text-sm font-medium text-white whitespace-nowrap';

            case 'iconHoverLabel':
                const isHovered = hoveredButton === button.id;
                const shouldShowLabel = isHovered;
                return ` text-sm font-medium text-white whitespace-nowrap transition-all duration-300 ${shouldShowLabel ? 'opacity-100 max-w-xs ml-2' : 'opacity-0 max-w-0 overflow-hidden'
                    }`;

            default:
                return '';
        }
    };

    // During SSR or before hydrate, render markup that matches desktop non-mobile, non-hovered
    if (!hasMounted) {
        return (
            <div
                className={`fixed ${getPositionClasses()} z-50 flex flex-col ${className}`}
                style={{ gap: `${gap}px` }}
            >
                {buttons.map((button) => {
                    // Pretend on SSR: not mobile, not hovered
                    const effectiveMode = button.mode;
                    return (
                        <button
                            key={button.id}
                            className={`${getButtonClasses(button, effectiveMode)} ${button.className || ''}`}
                            aria-label={button.ariaLabel}
                            type="button"
                        >
                            <span className="flex-shrink-0 flex items-center justify-center">
                                {button.icon}
                            </span>
                            {(effectiveMode === 'iconLabel' || effectiveMode === 'iconHoverLabel') && (
                                <span className={
                                    effectiveMode === 'iconLabel'
                                        ? 'ml-2 text-sm font-medium text-white whitespace-nowrap'
                                        : ' text-sm font-medium text-white whitespace-nowrap transition-all duration-300 opacity-0 max-w-0 overflow-hidden'
                                }>
                                    {button.label}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        );
    }

    // After hydration, render with real mobile/hover state
    return (
        <div
            className={`fixed ${getPositionClasses()} z-50 flex flex-col ${className}`}
            style={{ gap: `${gap}px` }}
        >
            {buttons.map((button) => {
                const effectiveMode = getEffectiveMode(button.mode);
                return (
                    <button
                        key={button.id}
                        className={`${getButtonClasses(button, effectiveMode)} ${button.className || ''}`}
                        onClick={button.onClick}
                        onMouseEnter={() => setHoveredButton(button.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        aria-label={button.ariaLabel}
                        type="button"
                    >
                        <span className="flex-shrink-0 flex items-center justify-center">
                            {button.icon}
                        </span>
                        {(effectiveMode === 'iconLabel' || effectiveMode === 'iconHoverLabel') && (
                            <span className={getLabelClasses(button, effectiveMode)}>
                                {button.label}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

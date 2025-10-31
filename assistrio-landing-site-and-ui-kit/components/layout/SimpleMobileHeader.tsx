'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SimpleMobileHeaderProps {
    onMenuToggle: () => void;
    isMenuOpen: boolean;
}

export default function SimpleMobileHeader({ onMenuToggle }: SimpleMobileHeaderProps) {
    return (
        <div
            className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"
            style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 40
            }}
        >
            {/* Menu Button */}
            <button
                onClick={onMenuToggle}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Logo - Centered */}
            <Link href="/" className="flex items-center group">
                <div className="relative h-7 w-auto">
                    <Image
                        src="/img/laptop_logo.png"
                        alt="Assistrio"
                        width={105}
                        height={28}
                        className="h-7 w-auto block dark:hidden"
                    />
                    <Image
                        src="/img/dark%20theme.png"
                        alt="Assistrio"
                        width={105}
                        height={28}
                        className="h-7 w-auto hidden dark:block"
                    />
                </div>
            </Link>

            {/* Spacer */}
            <div className="w-10 h-10"></div>
        </div>
    );
}
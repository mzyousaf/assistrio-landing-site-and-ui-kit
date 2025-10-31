'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
    FaChevronDown,
    FaBookOpen,
    FaRegFileAlt,
    FaUsers,
    FaRegAddressCard,
    FaRegEnvelope,
    FaHeartbeat,
    FaQuestionCircle,
    FaDollarSign,
    FaHome,
    FaBuilding,
    FaPalette,
    FaGraduationCap,
    FaShieldAlt,
    FaCube,
    FaShoppingBag,
    FaNewspaper,
    FaCog
} from 'react-icons/fa';
import SimpleMobileHeader from './SimpleMobileHeader';
import SimpleMobileMenu from './SimpleMobileMenu';
import { LINKS } from '../../config/links';

function HeaderContent() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (activeDropdown) {
                    setActiveDropdown(null);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeDropdown]);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden">
                <SimpleMobileHeader
                    onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    isMenuOpen={isMobileMenuOpen}
                />
                {/* Mobile Menu */}
                <SimpleMobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>

            {/* Desktop Header */}
            <header className="hidden lg:block desktop-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-slate-700/50">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex items-center justify-between h-18 lg:h-20">
                        {/* Logo */}
                        <Link
                            href={LINKS.HOME}
                            className="flex items-center group"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="relative h-8 w-auto">
                                    <Image
                                        src="/img/laptop_logo.png"
                                        alt="Assistrio"
                                        width={120}
                                        height={32}
                                        className="h-8 w-auto block dark:hidden group-hover:scale-105 transition-transform duration-200"
                                    />
                                    <Image
                                        src="/img/dark%20theme.png"
                                        alt="Assistrio"
                                        width={120}
                                        height={32}
                                        className="h-8 w-auto hidden dark:block group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="flex items-center space-x-0.5 xl:space-x-1">
                            <div className="flex items-center space-x-0.5 xl:space-x-1">
                                {/* 1st: AI Landing Demo Link */}
                                <Link
                                    href={LINKS.LANDINGS}
                                    className="group px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800"
                                >
                                    <FaHome className="w-4 h-4 mr-2 text-gray-400 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                    <span className="group-hover:text-brand-600 dark:group-hover:text-brand-400">SaaS Landing Demo</span>
                                </Link>

                                {/* 2nd: Showcase Link */}
                                <Link
                                    href={LINKS.SHOWCASE}
                                    className="group px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800"
                                >
                                    <FaPalette className="w-4 h-4 mr-2 text-gray-400 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                    <span className="group-hover:text-brand-600 dark:group-hover:text-brand-400">Assistrio Kit</span>
                                </Link>

                                {/* 3rd: Content & Resources Dropdown */}
                                <div className="relative group dropdown-container">
                                    <button
                                        className={`px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center ${activeDropdown === 'resources'
                                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 shadow-sm'
                                            : 'text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800'
                                            }`}
                                        onMouseEnter={() => setActiveDropdown('resources')}
                                        onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                                    >
                                        <FaRegFileAlt className="w-4 h-4 mr-2 text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                        Content & Resources
                                        <FaChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''} text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400`} />
                                    </button>
                                    <div className={`absolute top-full right-0 lg:left-0 mt-2 w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 py-3 z-50 transition-all duration-200 ${activeDropdown === 'resources'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                        onMouseEnter={() => setActiveDropdown('resources')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="px-2">
                                            <Link href={LINKS.BLOG} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaNewspaper className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Blog</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Latest insights & tips</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.CASE_STUDIES} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaBookOpen className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Case Studies</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Success stories</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.RESOURCES} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaRegFileAlt className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Resources</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Guides & documentation</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 4th: Product Tour Dropdown */}
                                <div className="relative group dropdown-container">
                                    <button
                                        id="product-tour-button"
                                        className={`px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center ${activeDropdown === 'product'
                                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 shadow-sm'
                                            : 'text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800'
                                            }`}
                                        onMouseEnter={() => setActiveDropdown('product')}
                                        onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                                        aria-expanded={activeDropdown === 'product'}
                                        aria-haspopup="true"
                                        aria-label="Product menu"
                                    >
                                        <FaCube
                                            className="w-4 h-4 mr-2 text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200"
                                            aria-hidden="true"
                                            focusable="false"
                                            title="Product"
                                        />
                                        Product
                                        <FaChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''} text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400`} />
                                    </button>
                                    <div className={`absolute top-full right-0 lg:left-0 mt-2 w-64 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 py-3 z-50 transition-all duration-200 ${activeDropdown === 'product'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                        onMouseEnter={() => setActiveDropdown('product')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        role="menu"
                                        aria-labelledby="product-tour-button"
                                    >
                                        <div className="px-2">
                                            <Link href={LINKS.PRICING} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaDollarSign className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Pricing</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Choose your plan</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.PRODUCT} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaCog className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">How It Works</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">See our AI in action</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.SECURITY} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaShieldAlt className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div className="min-w-0 flex-1">
                                                    <div className="font-medium whitespace-nowrap">Security</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Enterprise-grade protection</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.STATUS} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaHeartbeat className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Status</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">System health & uptime</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* 5th: Company Dropdown */}
                                <div className="relative group dropdown-container">
                                    <button
                                        className={`px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center ${activeDropdown === 'company'
                                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 shadow-sm'
                                            : 'text-gray-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800'
                                            }`}
                                        onMouseEnter={() => setActiveDropdown('company')}
                                        onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                                    >
                                        <FaBuilding className="w-4 h-4 mr-2 text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                        Company
                                        <FaChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''} text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400`} />
                                    </button>
                                    <div className={`absolute top-full right-0 lg:left-0 mt-2 w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 py-3 z-50 transition-all duration-200 ${activeDropdown === 'company'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                        onMouseEnter={() => setActiveDropdown('company')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="px-2">
                                            <Link href={LINKS.ABOUT} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaRegAddressCard className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">About</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Our story & mission</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.TEAM} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaUsers className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Team</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Meet our experts</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.CAREERS} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaGraduationCap className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Careers</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Join our team</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.CONTACT} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaRegEnvelope className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Contact</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Get in touch</div>
                                                </div>
                                            </Link>
                                            <Link href={LINKS.HELP_CENTER} className="dropdown-item flex items-center px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-slate-700 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-all duration-200 group" onClick={() => setActiveDropdown(null)}>
                                                <FaQuestionCircle className="w-4 h-4 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200" />
                                                <div>
                                                    <div className="font-medium">Help Center</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">Support & documentation</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-gray-200 dark:border-slate-700">
                                <Link
                                    href={LINKS.SIGNUP_GROWTH}
                                    target="_blank"
                                    className="inline-flex items-center px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold text-white dark:text-white bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-700 rounded-lg hover:from-brand-600 hover:to-brand-700 dark:hover:from-brand-700 dark:hover:to-brand-800 hover:brightness-110 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                >
                                    <FaShoppingBag className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2 text-white dark:text-white" />
                                    <span className="text-white dark:text-white">Buy Assistrio</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}

export default function Header() {
    return <HeaderContent />;
}
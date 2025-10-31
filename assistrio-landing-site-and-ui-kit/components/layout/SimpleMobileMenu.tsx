'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LINKS } from '../../config/links';
import {
    FaTimes,
    FaChevronRight,
    FaHome,
    FaPalette,
    FaDollarSign,
    FaCog,
    FaShieldAlt,
    FaHeartbeat,
    FaNewspaper,
    FaBookOpen,
    FaRegFileAlt,
    FaRegAddressCard,
    FaUsers,
    FaGraduationCap,
    FaRegEnvelope,
    FaQuestionCircle,
    FaShoppingBag
} from 'react-icons/fa';

interface SimpleMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SimpleMobileMenu({ isOpen, onClose }: SimpleMobileMenuProps) {
    const pathname = usePathname();

    // Helper function to check if a route is active
    const isActiveRoute = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                style={{
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
                }}
                onClick={onClose}
            />

            {/* Menu - Full Width */}
            <div
                className="fixed top-0 left-0 w-full bg-white dark:bg-slate-800 z-50 lg:hidden"
                style={{
                    height: '100dvh',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div
                        className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-slate-700 flex-shrink-0"
                        style={{
                            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                            opacity: isOpen ? 1 : 0,
                            transition: 'all 0.3s ease-out 0.1s'
                        }}
                    >
                        <Link href="/" className="flex items-center" onClick={onClose}>
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
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                            <FaTimes className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>

                    {/* Navigation Content */}
                    <div className="flex-1 overflow-y-scroll p-6" style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}>
                        {/* Quick Actions */}
                        <div
                            className="mb-8"
                            style={{
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isOpen ? 1 : 0,
                                transition: 'all 0.3s ease-out 0.2s'
                            }}
                        >
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-4 border border-blue-200 dark:border-slate-600">
                                <Link
                                    href={LINKS.SIGNUP_GROWTH}
                                    target="_blank"
                                    className="flex items-center justify-between group"
                                    onClick={onClose}
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                            <FaShoppingBag className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Buy Assistrio</div>
                                            <div className="text-sm text-gray-600">Start your free trial</div>
                                        </div>
                                    </div>
                                    <FaChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Sections */}
                        <div
                            className="space-y-6"
                            style={{
                                transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                                opacity: isOpen ? 1 : 0,
                                transition: 'all 0.3s ease-out 0.3s'
                            }}
                        >

                            <div className="space-y-2">
                                {/* AI Landing Demo */}
                                <div >
                                    <Link href={LINKS.LANDINGS} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.LANDINGS)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaHome className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.LANDINGS)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">SaaS Landing Demo</span>
                                    </Link>
                                </div>

                                {/* Showcase */}
                                <div>
                                    <Link href={LINKS.SHOWCASE} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.SHOWCASE)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaPalette className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.SHOWCASE)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Assistrio Kit</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Product */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Product</h3>
                                <div className="space-y-2">
                                    <Link href={LINKS.PRICING} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.PRICING)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaDollarSign className={`w-4 h-4 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.PRICING)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Pricing</span>
                                    </Link>
                                    <Link href={LINKS.PRODUCT} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.PRODUCT)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaCog className={`w-4 h-4 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.PRODUCT)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">How It Works</span>
                                    </Link>
                                    <Link href={LINKS.SECURITY} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.SECURITY)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaShieldAlt className={`w-4 h-4 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.SECURITY)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Security</span>
                                    </Link>
                                    <Link href={LINKS.STATUS} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.STATUS)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaHeartbeat className={`w-4 h-4 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.STATUS)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Status</span>
                                    </Link>
                                </div>
                            </div>



                            {/* Resources */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
                                <div className="space-y-2">
                                    <Link href={LINKS.BLOG} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.BLOG)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaNewspaper className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.BLOG)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Blog</span>
                                    </Link>
                                    <Link href={LINKS.CASE_STUDIES} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.CASE_STUDIES)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaBookOpen className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.CASE_STUDIES)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Case Studies</span>
                                    </Link>
                                    <Link href={LINKS.RESOURCES} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.RESOURCES)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaRegFileAlt className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.RESOURCES)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Resources</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Company</h3>
                                <div className="space-y-2">
                                    <Link href={LINKS.ABOUT} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.ABOUT)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaRegAddressCard className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.ABOUT)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">About</span>
                                    </Link>
                                    <Link href={LINKS.TEAM} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.TEAM)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaUsers className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.TEAM)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Team</span>
                                    </Link>
                                    <Link href={LINKS.CAREERS} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.CAREERS)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaGraduationCap className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.CAREERS)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Careers</span>
                                    </Link>
                                    <Link href={LINKS.CONTACT} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.CONTACT)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaRegEnvelope className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.CONTACT)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Contact</span>
                                    </Link>
                                    <Link href={LINKS.HELP_CENTER} className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${isActiveRoute(LINKS.HELP_CENTER)
                                        ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400'
                                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                                        }`} onClick={onClose}>
                                        <FaQuestionCircle className={`w-5 h-5 mr-3 transition-colors duration-200 ${isActiveRoute(LINKS.HELP_CENTER)
                                            ? 'text-brand-500 dark:text-brand-400'
                                            : 'text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400'
                                            }`} />
                                        <span className="font-medium">Help Center</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

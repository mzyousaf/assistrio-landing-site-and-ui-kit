import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50 dark:bg-slate-900 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="flex items-center gap-2.5">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-600 dark:from-brand-500 dark:to-brand-600 rounded-lg blur-sm opacity-75"></div>
                                    <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 dark:from-brand-500 dark:to-brand-600 p-2 rounded-lg shadow-md dark:shadow-lg">
                                        <FaRocket className="w-5 h-5 text-white dark:text-white" />
                                    </div>
                                </div>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Your logo</span>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                            Professional themes, UI kits, prebuilt dashboards and landing pages for any framework.
                            Ship faster with production-ready components and modern designs.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
                        <div className="space-y-2">
                            <Link href="/pricing" className="block text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-sm sm:text-base">Pricing</Link>
                            <Link href="/product" className="block text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-sm sm:text-base">How It Works</Link>
                            <Link href="/ai-saas-landing#security" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Security</Link>
                            <Link href="/status" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Status</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
                        <div className="space-y-2">
                            <Link href="/blog" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Blog</Link>
                            <Link href="/case-studies" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Case Studies</Link>
                            <Link href="/resources" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Resources</Link>
                            <Link href="/help-center" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Help Center</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                        <div className="space-y-2">
                            <Link href="/about" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">About</Link>
                            <Link href="/team" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Team</Link>
                            <Link href="/careers" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Careers</Link>
                            <Link href="/contact" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm sm:text-base">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t dark:border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                        <Link href="/legal/privacy" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-xs sm:text-sm">Privacy</Link>
                        <Link href="/legal/terms" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-xs sm:text-sm">Terms</Link>
                        <Link href="/legal/refund" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-xs sm:text-sm">Refund Policy</Link>
                        <Link href="/legal/cookies" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors text-xs sm:text-sm">Cookies</Link>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t dark:border-slate-800">
                    <div className="text-center text-xs text-gray-500 dark:text-gray-500">
                        Created with <span className="font-semibold text-brand-600 dark:text-brand-400">Assistrio</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

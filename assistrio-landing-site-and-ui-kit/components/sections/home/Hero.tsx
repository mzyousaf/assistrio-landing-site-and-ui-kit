'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaSitemap, FaLayerGroup, FaCheckCircle, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import GradientBlur from '@/components/ui/GradientBlur';
import Button from '@/components/ui/Button';

const deviceMockups = [
    { id: 1, label: 'Product Page', image: '/next.svg' },
    { id: 2, label: 'Pricing Page', image: '/vercel.svg' },
    { id: 3, label: 'About Page', image: '/file.svg' },
];

export default function Hero() {
    const [currentMockup, setCurrentMockup] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Mount state and auto-rotate mockups
    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentMockup((prev) => (prev + 1) % deviceMockups.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative sm:min-h-screen lg:min-h-[90vh] flex items-start sm:items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Gradient Backgrounds */}
            <GradientBlur size="xl" opacity={0.4} className="top-20 left-10" />
            <GradientBlur size="lg" opacity={0.3} className="bottom-20 right-10" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-4 md:left-20 w-32 h-32 md:w-72 md:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob" />
                <div className="absolute top-40 right-4 md:right-20 w-32 h-32 md:w-72 md:h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 md:w-72 md:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 lg:py-32">
                <div className="grid md:grid-cols-2 items-start md:items-center gap-8 sm:gap-10 md:gap-12">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-center sm:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex sm:inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-blue-600 dark:text-brand-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-200 dark:border-slate-700 w-fit mx-auto sm:mx-0"
                        >
                            <div className="flex items-center gap-2">
                                <FaRocket className="w-3 h-3 sm:w-4 sm:h-4" />
                                <FaSitemap className="w-3 h-3 sm:w-4 sm:h-4" />
                                <FaLayerGroup className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="whitespace-nowrap">Landing Site + UI Kit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Next.js Icon */}
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                                    <path d="M11.5 7v10l6-5-6-5z" fill="#fff" />
                                </svg>
                                <span className="whitespace-nowrap">Next 15</span>
                                <span className="text-gray-400 dark:text-gray-500">•</span>
                                {/* React Icon */}
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                                    <path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" />
                                </svg>
                                <span className="whitespace-nowrap">React 19</span>
                                <span className="text-gray-400 dark:text-gray-500">•</span>
                                {/* Tailwind Icon */}
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.18 4.59 2.18 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.18 4.59 2.18 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
                                </svg>
                                <span className="whitespace-nowrap">Tailwind</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                            className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-snug sm:leading-tight md:leading-tight px-2 sm:px-0 text-center sm:text-left"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="block mb-0 sm:mb-0.5 md:mb-1"
                            >
                                Ready To Deploy
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="block relative mt-0 sm:mt-0.5 md:mt-1"
                            >
                                <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-blue-600 dark:from-gray-100 dark:via-gray-400 dark:to-blue-400 bg-clip-text text-transparent inline-block pb-0 sm:pb-0.5 md:pb-1">
                                    Landing Site
                                </span>
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 200 }}
                                className="block relative mt-0 sm:mt-0.5 md:mt-1"
                            >
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent inline-block pb-0 sm:pb-0.5 md:pb-1">
                                    & UI Kit
                                </span>
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.7, duration: 0.6, type: 'spring', stiffness: 200 }}
                                className="block relative mt-0 sm:mt-0.5 md:mt-1"
                            >
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent inline-block pb-0 sm:pb-0.5 md:pb-1">
                                    By Assistrio
                                </span>
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
                        >
                            <strong>Production Ready Landing Site Theme with UI Kit For Marketing & Startups.</strong> A complete, production-ready SaaS landing site with all pages, components, and features you need. Built with <strong>200+ reusable UI components</strong> that you can use to create multiple sites—just import, customize, and launch.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <Button
                                href="/ai-saas-landing"
                                variant="primary"
                                size="lg"
                                className="group"
                            >
                                View SaaS Landing Site
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Button>
                            <Button
                                href="/showcase"
                                variant="secondary"
                                size="lg"
                                className="border-2 border-blue-500 dark:border-brand-400"
                            >
                                Explore UI Kit
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                                className="flex items-center gap-1.5 sm:gap-2"
                            >
                                <FaMobileAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                <span>Fully Responsive</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.1, duration: 0.4 }}
                                className="flex items-center gap-1.5 sm:gap-2"
                            >
                                <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                <span>Production Ready</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                                className="flex items-center gap-1.5 sm:gap-2"
                            >
                                <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                <span>SEO Optimized</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Device Mockup Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="relative mt-12 sm:mt-16 md:mt-8 lg:mt-12"
                    >
                        <div className="relative h-[500px] sm:h-[550px] md:h-[450px] lg:h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentMockup}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                    onMouseEnter={() => {
                                        // Pause carousel on hover
                                    }}
                                >
                                    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                                        {/* Device Frame */}
                                        <div className="relative bg-white dark:bg-slate-800 rounded-[2rem] p-4 shadow-2xl border-8 border-gray-900 dark:border-slate-700">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 dark:bg-slate-700 rounded-full" />

                                            {/* Screen Content */}
                                            <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl overflow-hidden">
                                                <div className="h-full flex items-center justify-center p-8">
                                                    <div className="text-center">
                                                        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                                            <Image
                                                                src="/img/mobile_logo.png"
                                                                alt="Assistrio"
                                                                width={96}
                                                                height={96}
                                                                className="w-24 h-24 object-contain block dark:hidden"
                                                            />
                                                            <Image
                                                                src="/img/dark%20theme.png"
                                                                alt="Assistrio"
                                                                width={96}
                                                                height={96}
                                                                className="w-24 h-24 object-contain hidden dark:block"
                                                            />
                                                        </div>
                                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                            {deviceMockups[currentMockup].label}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful & Responsive</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Indicators */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                                {deviceMockups.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentMockup(index)}
                                        className={`h-2 rounded-full transition-all ${index === currentMockup ? 'w-8 bg-blue-600 dark:bg-brand-500' : 'w-2 bg-gray-300 dark:bg-gray-600'
                                            }`}
                                        aria-label={`View ${deviceMockups[index].label}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
}

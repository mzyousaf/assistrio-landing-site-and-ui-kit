'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

interface Button {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    bgImage?: string;
    buttons?: Button[];
    gradientFrom?: string;
    gradientTo?: string;
}

export default function Hero({
    title,
    subtitle,
    description,
    bgImage,
    buttons = [],
    gradientFrom = 'from-teal-500',
    gradientTo = 'to-blue-600',
}: HeroProps) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const children = textRef.current.querySelectorAll('.hero-text');
        gsap.from(children, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`} />

            {/* Parallax Background Image */}
            {bgImage && (
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={bgImage}
                        alt=""
                        width={1920}
                        height={1080}
                        className="w-full h-[120%] object-cover"
                        style={{ transform: 'translateZ(0)' }}
                    />
                </div>
            )}

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {subtitle && (
                        <motion.p
                            className="hero-text text-sm sm:text-base font-medium text-white/90 uppercase tracking-wider mb-4"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.h1
                        className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            className="hero-text text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}

                    {buttons.length > 0 && (
                        <motion.div
                            className="hero-text flex flex-wrap gap-4 justify-center"
                        >
                            {buttons.map((button, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        href={button.href}
                                        size="lg"
                                        variant={button.variant || 'secondary'}
                                        className={`${button.variant === 'primary'
                                            ? 'bg-white text-gray-900 hover:bg-gray-100 hover:brightness-110'
                                            : button.variant === 'outline'
                                                ? 'border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:brightness-110'
                                                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:brightness-110'
                                            }`}
                                    >
                                        {button.label}
                                        {index === 0 && (
                                            <FaArrowRight className="ml-2 w-5 h-5" />
                                        )}
                                    </Button>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}


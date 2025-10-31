'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

interface CTAButton {
    label: string;
    href: string;
}

interface CTABandProps {
    title: string;
    button: CTAButton;
    gradientFrom?: string;
    gradientTo?: string;
}

export default function CTABand({
    title,
    button,
}: CTABandProps) {
    return (
        <section className="py-24 bg-gradient-to-br to-gray-50 from-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 to-blue-600 p-12 md:p-16 text-center"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
                        >
                            {title}
                        </motion.h2>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                href={button.href}
                                size="lg"
                                variant="secondary"
                                className="bg-white text-gray-900 hover:bg-gray-100 hover:brightness-110"
                            >
                                {button.label}
                                <FaArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


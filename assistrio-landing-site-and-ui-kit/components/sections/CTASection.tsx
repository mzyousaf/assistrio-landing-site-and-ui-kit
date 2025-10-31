'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import { Badge, Button } from '../ui';
import { LINKS } from '../../config/links';

interface CTASectionProps {
    className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps) {
    const features = [
        "Upload your documents",
        "Train your AI Assistant",
        "Handle conversations"
    ];

    return (
        <Section className={`bg-gradient-to-r from-brand-500 to-blue-600 text-white relative overflow-hidden ${className}`} containerSize="md">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Badge variant="default" className="mb-6">
                        Ready to Buy Assistrio?
                    </Badge>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4"
                >
                    Ready to Train Your AI Assistant?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto"
                >
                    Join 10,000+ companies that have trained their AI with their knowledge base to handle customer conversations intelligently.
                    Buy Assistrio by uploading your documents and see results immediately.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8"
                >
                    <Button
                        href={LINKS.SIGNUP_GROWTH}
                        target="_blank"
                        variant="secondary"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Buy Assistrio
                    </Button>
                    <Button
                        href={LINKS.PRICING}
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-brand-600"
                    >
                        View Pricing
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-white/80"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                            className="flex items-center"
                        >
                            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}

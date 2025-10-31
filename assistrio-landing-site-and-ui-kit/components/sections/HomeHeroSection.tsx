import Section from '../Section';
import Alexi from '../Alexi';
import { Button } from '../ui';
import { FeatureItem } from '../content';

interface HomeHeroSectionProps {
    className?: string;
}

export default function HomeHeroSection({ className = '' }: HomeHeroSectionProps) {
    return (
        <Section className={`relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden ${className}`} containerSize="lg">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative">
                <div className="text-center py-16 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6 animate-fade-in">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Trusted by 10,000+ businesses worldwide
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-in-left">
                            Meet <Alexi /> - Your AI Customer Success Bot
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed animate-slide-in-right">
                            Alexi is Assistrio&apos;s intelligent Customer Success bot that learns from your documents, websites, FAQs, and knowledge base. It handles customer conversations intelligently, providing accurate answers based on your specific business information.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                            <FeatureItem
                                text="Alexi trains on your knowledge base"
                                delay={50}
                            />
                            <FeatureItem
                                text="Alexi handles conversations intelligently"
                                delay={100}
                            />
                            <FeatureItem
                                text="Alexi learns from documents & websites"
                                delay={150}
                            />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                            <Button variant="primary" size="lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Buy Assistrio
                            </Button>
                            <Button variant="secondary" size="lg">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

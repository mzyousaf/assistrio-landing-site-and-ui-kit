import Section from '../Section';
import { TestimonialCard } from '../content';

interface TestimonialsSectionProps {
    className?: string;
}

export default function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
    const testimonials = [
        {
            avatarText: "SM",
            name: "Sarah Mitchell",
            role: "CEO, TechStartup Inc.",
            quote: "Our AI assistant handles 75% of our customer conversations automatically. Our customers love the instant, accurate responses based on our knowledge base, and our team can focus on more complex issues. ROI was immediate.",
            company: "TechStartup Inc.",
            industry: "Technology"
        },
        {
            avatarText: "MJ",
            name: "Michael Johnson",
            role: "Head of Support, EcomPlus",
            quote: "The AI understands our product so well that customers often can't tell they're talking to a bot. Setup was incredibly easy - we were live in 10 minutes. Customer satisfaction increased by 40%.",
            company: "EcomPlus",
            industry: "E-commerce",
            animationDelay: "0.2s"
        },
        {
            avatarText: "AL",
            name: "Anna Lee",
            role: "Customer Success, SaaSPro",
            quote: "We've saved over $50,000 annually on support costs while improving customer satisfaction scores. The analytics dashboard gives us incredible insights into customer behavior.",
            company: "SaaSPro",
            industry: "SaaS",
            animationDelay: "0.4s"
        },
        {
            avatarText: "DR",
            name: "David Rodriguez",
            role: "Operations Director, HealthTech Solutions",
            quote: "The AI assistant reduced our response time from hours to seconds. Our healthcare clients appreciate the 24/7 availability and accurate medical information retrieval.",
            company: "HealthTech Solutions",
            industry: "Healthcare",
            animationDelay: "0.6s"
        },
        {
            avatarText: "EC",
            name: "Emily Chen",
            role: "VP Customer Experience, FinanceFlow",
            quote: "Implementing Assistrio was a game-changer for our financial services. The AI handles complex compliance questions flawlessly and our customers trust the responses completely.",
            company: "FinanceFlow",
            industry: "Fintech",
            animationDelay: "0.8s"
        },
        {
            avatarText: "JT",
            name: "James Thompson",
            role: "Founder, EduTech Academy",
            quote: "Our students get instant help with course materials and assignments. The AI tutor feature has improved learning outcomes by 35% and reduced instructor workload significantly.",
            company: "EduTech Academy",
            industry: "Education",
            animationDelay: "1.0s"
        }
    ];

    return (
        <Section className={`bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 ${className}`} containerSize="xl">
            <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of businesses that have transformed their customer support with AI-powered assistance
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4 sm:gap-8 text-sm text-gray-500">
                    <div className="flex items-center">
                        <div className="flex -space-x-1 mr-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <span className="font-semibold text-gray-700">4.9/5</span>
                    </div>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <div className="font-semibold text-gray-700">2,500+ Happy Customers</div>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <div className="font-semibold text-gray-700">99% Satisfaction Rate</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: testimonial.animationDelay }}
                    >
                        <TestimonialCard
                            variant="home"
                            avatarText={testimonial.avatarText}
                            name={testimonial.name}
                            role={testimonial.role}
                            quote={testimonial.quote}
                            animationDelay={testimonial.animationDelay}
                        />
                    </div>
                ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-12 sm:mt-16 text-center">
                <p className="text-sm text-gray-500 mb-6">Trusted by companies across industries</p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">TechStartup Inc.</div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">EcomPlus</div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">SaaSPro</div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">HealthTech Solutions</div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">FinanceFlow</div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-400">EduTech Academy</div>
                </div>
            </div>
        </Section>
    );
}

import Section from '../Section';
import Alexi from '../Alexi';
import { LINKS } from '../../config/links';

interface ProductCTASectionProps {
    className?: string;
}

export default function ProductCTASection({ className = '' }: ProductCTASectionProps) {
    return (
        <Section className={`bg-teal text-white ${className}`}>
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Product?</h2>
                <div className="text-xl mb-8 opacity-90">
                    Start using Assistrio today and discover how <Alexi variant="light" /> can transform your customer support
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={LINKS.SIGNUP_GROWTH}
                        target="_blank"
                        className="bg-white text-teal px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Buy Assistrio
                    </a>
                    <a
                        href={LINKS.PRICING}
                        className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal transition-colors"
                    >
                        View Pricing
                    </a>
                </div>
            </div>
        </Section>
    );
}

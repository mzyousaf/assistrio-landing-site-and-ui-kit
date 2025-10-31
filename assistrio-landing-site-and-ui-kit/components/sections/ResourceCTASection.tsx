import React from 'react';
import Link from 'next/link';
import { LINKS } from '../../config/links';

interface ResourceCTASectionProps {
    className?: string;
}

const ResourceCTASection: React.FC<ResourceCTASectionProps> = ({
    className = "bg-gradient-to-r from-blue-500 to-teal-600 text-white py-16 sm:py-20"
}) => {
    return (
        <section className={className}>
            <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Buy Assistrio?</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using our resources to advance their AI knowledge
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={LINKS.CONTACT}
                        className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href={LINKS.RESOURCES}
                        className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Browse All Resources
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ResourceCTASection;

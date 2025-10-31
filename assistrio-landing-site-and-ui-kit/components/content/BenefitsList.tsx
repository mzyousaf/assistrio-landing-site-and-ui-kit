import React from 'react';
import { FaCheckCircle, FaLightbulb, FaRocket, FaUser, FaChartLine, FaCog, FaGlobe } from 'react-icons/fa';

interface BenefitsListProps {
    resourceType: string;
    className?: string;
}

const BenefitsList: React.FC<BenefitsListProps> = ({
    resourceType,
    className = "space-y-8"
}) => {
    const getBenefits = (type: string) => {
        if (type === 'webinar') {
            return [
                'Live or recorded session with expert insights',
                'Interactive Q&A with industry professionals',
                'Downloadable materials and resources',
                'Certificate of completion'
            ];
        }

        return [
            'Comprehensive, step-by-step guide',
            'Best practices and expert recommendations',
            'Real-world examples and case studies',
            'Actionable insights you can implement immediately'
        ];
    };

    const benefits = getBenefits(resourceType);

    return (
        <div className={className}>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You&apos;ll Get</h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FaLightbulb className="w-5 h-5 mr-2 text-yellow-500 dark:text-yellow-400" />
                            Key Benefits
                        </h4>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FaRocket className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
                            Perfect For
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center border border-blue-100 dark:border-blue-800">
                                <FaUser className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Beginners</span>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 text-center border border-teal-100 dark:border-teal-800">
                                <FaChartLine className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                                <span className="text-sm font-medium text-teal-800 dark:text-teal-300">Professionals</span>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-100 dark:border-purple-800">
                                <FaCog className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                                <span className="text-sm font-medium text-purple-800 dark:text-purple-300">Developers</span>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center border border-green-100 dark:border-green-800">
                                <FaGlobe className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                                <span className="text-sm font-medium text-green-800 dark:text-green-300">Teams</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsList;

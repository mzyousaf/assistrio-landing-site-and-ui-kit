import { FaRobot, FaHeart, FaDollarSign, FaClock } from 'react-icons/fa';
import useNumberAnimation from '../../hooks/useNumberAnimation';

interface CaseStudyMetricsProps {
    metrics: {
        automation: string;
        satisfaction: string;
        costSavings: string;
        responseTime: string;
    };
    className?: string;
}

export default function CaseStudyMetrics({ metrics, className = '' }: CaseStudyMetricsProps) {
    const animatedAutomation = useNumberAnimation({
        end: parseInt(metrics.automation.replace(/[^\d]/g, '')) || 0,
        duration: 2000,
        delay: 0
    });
    const animatedSatisfaction = useNumberAnimation({
        end: parseInt(metrics.satisfaction.replace(/[^\d]/g, '')) || 0,
        duration: 2000,
        delay: 200
    });
    const animatedCostSavings = useNumberAnimation({
        end: parseInt(metrics.costSavings.replace(/[^\d]/g, '')) || 0,
        duration: 2000,
        delay: 400
    });
    const animatedResponseTime = useNumberAnimation({
        end: parseInt(metrics.responseTime.replace(/[^\d]/g, '')) || 0,
        duration: 2000,
        delay: 600
    });

    return (
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-200 group">
                <div className="flex justify-center mb-2">
                    <FaRobot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{animatedAutomation}</div>
                <div className="text-xs text-gray-600">Automation</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-200 group">
                <div className="flex justify-center mb-2">
                    <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 group-hover:text-pink-600 transition-colors" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{animatedSatisfaction}</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-200 group">
                <div className="flex justify-center mb-2">
                    <FaDollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:text-green-600 transition-colors" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{animatedCostSavings}</div>
                <div className="text-xs text-gray-600">Savings</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-blue-200 group">
                <div className="flex justify-center mb-2">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 group-hover:text-purple-600 transition-colors" />
                </div>
                <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{animatedResponseTime}</div>
                <div className="text-xs text-gray-600">Response Time</div>
            </div>
        </div>
    );
}

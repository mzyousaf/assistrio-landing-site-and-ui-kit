import { FaBuilding, FaUsers, FaExternalLinkAlt, FaHospital, FaUniversity, FaStore, FaIndustry, FaCreditCard, FaShoppingCart, FaCloud, FaHome } from 'react-icons/fa';

interface CompanyInfoProps {
    company: string;
    industry: string;
    companySize: string;
    logo: string;
    className?: string;
}

export default function CompanyInfo({
    company,
    industry,
    companySize,
    className = ''
}: CompanyInfoProps) {
    // Map companies to their specific icons
    const getCompanyIcon = (companyName: string) => {
        const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
            'TechCorp': FaCloud,
            'EcomPlus': FaShoppingCart,
            'HealthCare Pro': FaHospital,
            'FinanceFirst': FaCreditCard,
            'EduTech Solutions': FaUniversity,
            'RealEstate Pro': FaHome
        };
        return iconMap[companyName] || FaBuilding;
    };

    // Map industries to their specific icons
    const getIndustryIcon = (industryName: string) => {
        const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
            'SaaS Technology': FaCloud,
            'E-commerce': FaShoppingCart,
            'Healthcare': FaHospital,
            'Financial Services': FaCreditCard,
            'Education Technology': FaUniversity,
            'Real Estate': FaHome,
            'Manufacturing': FaIndustry,
            'Retail': FaStore
        };
        return iconMap[industryName] || FaBuilding;
    };

    const CompanyIcon = getCompanyIcon(company);
    const IndustryIcon = getIndustryIcon(industry);

    return (
        <div className={`group ${className}`}>
            <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="relative flex-shrink-0">
                    <div className="relative">
                        <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:rotate-2 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-700 dark:to-slate-700 border border-blue-200 dark:border-slate-600 flex items-center justify-center">
                            <CompanyIcon className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600 dark:text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <FaExternalLinkAlt className="w-2 h-2 text-white" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 truncate leading-tight">
                                {company}
                            </h3>
                            <div className="mt-1 space-y-1">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center bg-blue-50 dark:bg-slate-700 rounded-full px-2 py-1 mr-2">
                                        <IndustryIcon className="w-3 h-3 text-blue-500 dark:text-blue-400 mr-1" />
                                        <span className="text-xs font-medium text-blue-700 dark:text-blue-300">{industry}</span>
                                    </div>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center bg-teal-50 dark:bg-slate-700 rounded-full px-2 py-1">
                                        <FaUsers className="w-3 h-3 text-teal-500 dark:text-teal-400 mr-1" />
                                        <span className="text-xs font-medium text-teal-700 dark:text-teal-300">{companySize}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

interface ContactInfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    children: React.ReactNode;
    gradientClasses: string;
    borderClasses: string;
    iconBgClasses: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
    icon,
    title,
    description,
    children,
    gradientClasses,
    borderClasses,
    iconBgClasses
}) => {
    return (
        <div className={`${gradientClasses} dark:bg-slate-800 dark:border-slate-700 rounded-xl p-6 border ${borderClasses}`}>
            <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${iconBgClasses} rounded-lg flex items-center justify-center mr-4`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default ContactInfoCard;

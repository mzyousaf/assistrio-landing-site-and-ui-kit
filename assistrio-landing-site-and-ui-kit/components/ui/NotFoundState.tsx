import React from 'react';
import Link from 'next/link';
import { FaBook, FaArrowLeft } from 'react-icons/fa';

interface NotFoundStateProps {
    title?: string;
    message?: string;
    backHref?: string;
    backText?: string;
    icon?: React.ReactNode;
    className?: string;
}

const NotFoundState: React.FC<NotFoundStateProps> = ({
    title = "Resource Not Found",
    message = "The resource you're looking for doesn't exist or may have been moved. Let's get you back to our resource library.",
    backHref = "/resources",
    backText = "Back to Resources",
    icon = <FaBook className="w-10 h-10 text-red-500 dark:text-red-400" />,
    className = "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center"
}) => {
    return (
        <div className={className}>
            <div className="text-center max-w-md mx-auto px-6">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    {icon}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {message}
                </p>
                <Link
                    href={backHref}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white dark:text-white font-semibold rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    <FaArrowLeft className="w-5 h-5 mr-2 text-white" />
                    {backText}
                </Link>
            </div>
        </div>
    );
};

export default NotFoundState;

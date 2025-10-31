"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaHome,
    FaArrowLeft,
    FaRedo,
    FaExclamationTriangle,
    FaSearch,
    FaServer,
    FaCheckCircle,
    FaEnvelope,
    FaQuestionCircle,
    FaNewspaper,
    FaBriefcase,
    FaUsers,
    FaLaptop
} from "react-icons/fa";

interface ErrorPageProps {
    type?: "404" | "500" | "error";
    message?: string;
    onReset?: () => void;
    showBackButton?: boolean;
}

export default function ErrorPage({
    type = "404",
    message,
    onReset,
    showBackButton = true
}: ErrorPageProps) {
    useEffect(() => {
        // Error page mounted
    }, [type]);

    const quickLinks = [
        { href: "/", label: "Home", icon: FaHome },
        { href: "/product", label: "Product", icon: FaLaptop },
        { href: "/pricing", label: "Pricing", icon: FaBriefcase },
        { href: "/about", label: "About", icon: FaUsers },
        { href: "/blog", label: "Blog", icon: FaNewspaper },
        { href: "/contact", label: "Contact", icon: FaEnvelope },
        { href: "/help-center", label: "Help", icon: FaQuestionCircle },
    ];

    const configs = {
        "404": {
            code: "404",
            title: "Page Not Found",
            description: message || "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.",
            icon: FaSearch,
            iconColor: "text-brand-600",
            iconBg: "bg-brand-50",
            suggestions: [
                "Check the URL for spelling errors or typos",
                "Return to the previous page and try again",
                "Visit our homepage and navigate from there",
                "Use the search functionality to find what you need"
            ],
            primaryButton: "Go to Homepage",
            primaryIcon: FaHome,
            buttonColor: "bg-brand-600 hover:bg-brand-700",
            showQuickLinks: true
        },
        "500": {
            code: "500",
            title: "Internal Server Error",
            description: message || "We're experiencing some technical difficulties. Our team has been notified and is working on a solution.",
            icon: FaServer,
            iconColor: "text-warning",
            iconBg: "bg-orange-50",
            suggestions: [
                "Wait a few minutes and try the request again",
                "Verify your internet connection is working",
                "Check our status page for service updates",
                "Contact support if the problem continues"
            ],
            primaryButton: "Try Again",
            primaryIcon: FaRedo,
            buttonColor: "bg-warning hover:bg-orange-600",
            showQuickLinks: false
        },
        "error": {
            code: "Error",
            title: "An Error Occurred",
            description: message || "Something unexpected happened. Please try again or contact support if the problem continues.",
            icon: FaExclamationTriangle,
            iconColor: "text-error",
            iconBg: "bg-red-50",
            suggestions: [
                "Refresh the page to attempt reloading",
                "Clear your browser cache and cookies",
                "Try accessing the site from a different browser",
                "Report this issue to our technical team"
            ],
            primaryButton: "Reload Page",
            primaryIcon: FaRedo,
            buttonColor: "bg-error hover:bg-red-600",
            showQuickLinks: false
        },
    };

    const config = configs[type];
    const Icon = config.icon;
    const PrimaryIcon = config.primaryIcon;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-16">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Error Code - Large and Bold */}
                    <h1 className="text-8xl sm:text-9xl font-black text-gray-200 mb-4 tracking-tight">
                        {config.code}
                    </h1>

                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                        className="flex justify-center mb-8"
                    >
                        <div className={`w-20 h-20 ${config.iconBg} rounded-2xl flex items-center justify-center`}>
                            <Icon className={`w-10 h-10 ${config.iconColor}`} />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        {config.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {config.description}
                    </p>

                    {/* Quick Links for 404 */}
                    {config.showQuickLinks && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 bg-white rounded-xl p-8 shadow-md border border-gray-200 max-w-2xl mx-auto"
                        >
                            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">
                                Quick Links
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {quickLinks.map((link) => {
                                    const LinkIcon = link.icon;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex flex-col items-center gap-2 px-4 py-4 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all group border border-transparent hover:border-brand-200 hover:shadow-sm"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-brand-100 group-hover:shadow-sm flex items-center justify-center transition-all duration-300">
                                                    <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* Suggestions */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-10 max-w-2xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <FaCheckCircle className="w-5 h-5 text-gray-600" />
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                                Recommended Actions
                            </h3>
                        </div>
                        <div className="grid gap-4 text-left">
                            {config.suggestions.map((suggestion, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-100 group-hover:bg-brand-200 group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                                        <span className="text-sm font-bold text-brand-700">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">{suggestion}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        {/* Primary Button */}
                        <motion.button
                            onClick={onReset || (() => window.location.reload())}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex items-center gap-3 px-8 py-3.5 ${config.buttonColor} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                        >
                            <PrimaryIcon className="w-5 h-5" />
                            {config.primaryButton}
                        </motion.button>

                        {/* Show Home button only for non-404 errors (to avoid duplication) */}
                        {type !== "404" && (
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <FaHome className="w-5 h-5" />
                                    Back to Home
                                </Link>
                            </motion.div>
                        )}

                        {/* Show Back button */}
                        {showBackButton && (
                            <motion.button
                                onClick={() => window.history.back()}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-3.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <FaArrowLeft className="w-5 h-5" />
                                Go Back
                            </motion.button>
                        )}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-sm text-gray-500">
                            Need assistance? <Link href="/contact" className="font-medium text-brand-600 hover:text-brand-700 hover:underline transition-colors">Contact Support</Link>
                            {type === "404" && (
                                <> • <Link href="/sitemap.xml" className="font-medium text-brand-600 hover:text-brand-700 hover:underline transition-colors">View Sitemap</Link></>
                            )}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

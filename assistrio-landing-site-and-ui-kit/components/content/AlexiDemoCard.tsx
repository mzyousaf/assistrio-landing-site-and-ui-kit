import React from 'react';

interface AlexiDemoCardProps {
    className?: string;
}

export default function AlexiDemoCard({ className = '' }: AlexiDemoCardProps) {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-card ${className}`}>
            <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">A</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Alexi in Action</h3>
            </div>
            <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Customer asks:</p>
                    <p className="text-gray-900">&quot;How do I reset my password?&quot;</p>
                </div>
                <div className="bg-brand-50 rounded-lg p-4">
                    <p className="text-sm text-brand-600 mb-2">Alexi responds:</p>
                    <p className="text-gray-900">&quot;I can help you reset your password! Click on &apos;Forgot Password&apos; on the login page, enter your email, and check your inbox for reset instructions. This usually takes just a few minutes.&quot;</p>
                </div>
            </div>
        </div>
    );
}

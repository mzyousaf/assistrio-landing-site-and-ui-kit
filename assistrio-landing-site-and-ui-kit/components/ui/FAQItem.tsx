import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import Alexi from '../Alexi';

interface FAQItemProps {
    question: string;
    category: string;
    answer: string;
    hasAlexi?: boolean;
    isOpen: boolean;
    onToggle: () => void;
    renderHtmlContent: (content: string, isInsideLink?: boolean) => React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({
    question,
    category,
    answer,
    hasAlexi = false,
    isOpen,
    onToggle,
    renderHtmlContent
}) => {
    const renderAnswer = () => {
        if (hasAlexi) {
            if (question === "How accurate is Alexi?") {
                return <>Alexi achieves 95%+ accuracy on common customer support queries. It&apos;s continuously learning from your interactions to improve over time.</>;
            } else if (question === "Can I customize Alexi's responses?") {
                return <>Yes! You can customize <Alexi />&apos;s tone, style, and responses to match your brand voice. You can also provide specific instructions for different types of queries.</>;
            } else if (question === "What happens when Alexi can't answer a question?") {
                return <>When <Alexi /> encounters a question it can&apos;t answer confidently, it will either ask for clarification or seamlessly transfer the conversation to a human agent.</>;
            } else {
                return <>Most customers are up and running within 24 hours. The initial setup includes uploading your knowledge base and configuring <Alexi />.</>;
            }
        } else {
            return renderHtmlContent(answer);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={onToggle}
            >
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>
                <FaQuestionCircle className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                        <div className="text-gray-700 leading-relaxed">
                            {renderAnswer()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQItem;

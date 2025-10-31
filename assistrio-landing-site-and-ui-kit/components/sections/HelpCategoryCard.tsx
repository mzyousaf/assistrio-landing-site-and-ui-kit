import React from 'react';
import { IconType } from 'react-icons';

interface Article {
    title: string;
    description: string;
    hasAlexi?: boolean;
    link: string;
}

interface HelpCategoryCardProps {
    title: string;
    description: string;
    icon: IconType;
    color: string;
    articles: Article[];
    renderHtmlContent: (content: string, isInsideLink?: boolean) => React.ReactNode;
}

const HelpCategoryCard: React.FC<HelpCategoryCardProps> = ({
    title,
    description,
    icon: Icon,
    color,
    articles,
    renderHtmlContent
}) => {
    const renderArticleDescription = (article: Article) => {
        if (article.hasAlexi) {
            if (article.title === "How do I set up my first Alexi assistant?") {
                return <>Follow our step-by-step guide to configure Alexi and train it on your knowledge base.</>;
            } else if (article.title === "What happens when Alexi can't answer?") {
                return <>Alexi will ask for clarification or seamlessly transfer to a human agent when needed.</>;
            } else {
                return <>You can upload your existing documentation, FAQs, and support tickets to train Alexi.</>;
            }
        } else {
            return renderHtmlContent(article.description, true);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow group">
            <div className={`h-2 bg-gradient-to-r ${color} rounded-t-xl`}></div>
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
                <div className="space-y-3">
                    {articles.map((article, articleIndex) => (
                        <a
                            key={articleIndex}
                            href={article.link}
                            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                        >
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                                {article.title}
                            </h4>
                            <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                {renderArticleDescription(article)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpCategoryCard;

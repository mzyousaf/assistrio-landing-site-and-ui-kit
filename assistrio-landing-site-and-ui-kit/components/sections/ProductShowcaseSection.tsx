import Section from '../Section';
import { Badge, Button } from '../ui';
import Alexi from '../Alexi';

interface ProductShowcaseSectionProps {
    className?: string;
}

export default function ProductShowcaseSection({ className = '' }: ProductShowcaseSectionProps) {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Context-Aware Responses",
            description: (
                <>
                    <Alexi /> remembers the entire conversation context, providing relevant and personalized answers that build on previous interactions.
                </>
            )
        },
        {
            icon: (
                <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Instant Problem Resolution",
            description: "Resolve 80% of customer inquiries instantly without human intervention, reducing wait times and improving satisfaction."
        },
        {
            icon: (
                <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Brand-Consistent Tone",
            description: "Trained on your brand voice and knowledge base to ensure every response aligns with your company's personality and values."
        }
    ];

    const handleChatDemo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            const chatDemo = document.getElementById('chat-demo');
            if (chatDemo && input.value.trim()) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'bg-brand-500 p-3 sm:p-4 rounded-lg ml-4 sm:ml-6 lg:ml-8';
                userMessage.innerHTML = `<p class="text-white text-xs sm:text-sm">${input.value}</p>`;
                chatDemo.appendChild(userMessage);

                // Add AI response after a short delay
                setTimeout(() => {
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'bg-gray-800 p-3 sm:p-4 rounded-lg';
                    aiMessage.innerHTML = '<p class="text-gray-300 text-xs sm:text-sm">I understand your question. Let me help you with that. This is a demo, but in the real version, I would provide a detailed, accurate answer based on your business knowledge base.</p>';
                    chatDemo.appendChild(aiMessage);
                    chatDemo.scrollTop = chatDemo.scrollHeight;
                }, 1000);

                input.value = '';
                chatDemo.scrollTop = chatDemo.scrollHeight;
            }
        }
    };

    const handleSendClick = () => {
        const input = document.querySelector('input[placeholder*="Ask"]') as HTMLInputElement;
        if (input && input.value.trim()) {
            const chatDemo = document.getElementById('chat-demo');
            if (chatDemo) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'bg-brand-500 p-3 sm:p-4 rounded-lg ml-4 sm:ml-6 lg:ml-8';
                userMessage.innerHTML = `<p class="text-white text-xs sm:text-sm">${input.value}</p>`;
                chatDemo.appendChild(userMessage);

                // Add AI response after a short delay
                setTimeout(() => {
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'bg-gray-800 p-3 sm:p-4 rounded-lg';
                    aiMessage.innerHTML = '<p class="text-gray-300 text-xs sm:text-sm">I understand your question. Let me help you with that. This is a demo, but in the real version, I would provide a detailed, accurate answer based on your business knowledge base.</p>';
                    chatDemo.appendChild(aiMessage);
                    chatDemo.scrollTop = chatDemo.scrollHeight;
                }, 1000);

                input.value = '';
                chatDemo.scrollTop = chatDemo.scrollHeight;
            }
        }
    };

    return (
        <Section className={`bg-white dark:bg-slate-900 py-16 sm:py-20 lg:py-24 ${className}`} containerSize="lg">
            <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    See <Alexi /> in Action
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Watch how <Alexi /> handles real customer questions with human-like understanding and instant responses
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                <div className="animate-fade-in-up">
                    <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                        <div className="flex items-center mb-4 flex-wrap gap-2">
                            <div className="flex items-center">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-1.5 sm:mr-2"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-1.5 sm:mr-2"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-1.5 sm:mr-2"></div>
                            </div>
                            <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2 flex-shrink-0">AI Assistant</span>
                            <div className="ml-auto">
                                <Badge variant="online" showPulse={true}>
                                    Online
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 lg:max-h-[28rem] xl:max-h-[32rem] overflow-y-auto pr-1 sm:pr-2" id="chat-demo">
                            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                                <p className="text-gray-300 text-xs sm:text-sm">👋 Hi! I&apos;m your AI Customer Success assistant. How can I help you today?</p>
                            </div>
                            <div className="bg-brand-500 p-3 sm:p-4 rounded-lg ml-4 sm:ml-6 lg:ml-8">
                                <p className="text-white text-xs sm:text-sm">I need help with my order #12345. It says it&apos;s shipped but I haven&apos;t received it yet.</p>
                            </div>
                            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                                <p className="text-gray-300 text-xs sm:text-sm">I understand your concern about order #12345. Let me check the tracking information for you. According to our records, your package was shipped on [date] and is currently in transit. The estimated delivery is [date]. Would you like me to send you the tracking number so you can monitor it directly?</p>
                            </div>
                            <div className="bg-brand-500 p-3 sm:p-4 rounded-lg ml-4 sm:ml-6 lg:ml-8">
                                <p className="text-white text-xs sm:text-sm">Yes, that would be helpful. Also, can I change the delivery address?</p>
                            </div>
                            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                                <p className="text-gray-300 text-xs sm:text-sm">I&apos;ll send you the tracking number via email. For address changes, I can help you with that! Since the package is still in transit, I can update the delivery address. What&apos;s the new address you&apos;d like to use?</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <input
                                type="text"
                                placeholder="Ask a question..."
                                className="flex-1 px-3 py-2 sm:py-2.5 bg-gray-800 text-gray-300 rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs sm:text-sm"
                                onKeyPress={handleChatDemo}
                            />
                            <Button
                                onClick={handleSendClick}
                                variant="primary"
                                size="sm"
                                className="rounded-l-none px-4 sm:px-6"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        Intelligent Conversations That Feel Human
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 dark:bg-brand-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h4>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

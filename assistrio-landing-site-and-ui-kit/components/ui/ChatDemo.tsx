import ChatMessage from './ChatMessage';

interface ChatDemoProps {
    messages: Array<{
        sender: string;
        message: string;
        isCustomer?: boolean;
    }>;
    className?: string;
}

export default function ChatDemo({
    messages,
    className = '',
}: ChatDemoProps) {
    return (
        <div className={`bg-white border border-gray-200 rounded-xl p-8 shadow-lg ${className}`}>
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        sender={msg.sender}
                        message={msg.message}
                        isCustomer={msg.isCustomer}
                    />
                ))}
            </div>
        </div>
    );
}

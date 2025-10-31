
interface ChatMessageProps {
    sender: string;
    message: string;
    isCustomer?: boolean;
    className?: string;
}

export default function ChatMessage({
    sender,
    message,
    isCustomer = false,
    className = '',
}: ChatMessageProps) {
    const bgColor = isCustomer ? 'bg-gray-100' : 'bg-teal/10';
    const dotColor = isCustomer ? 'bg-gray-400' : 'bg-teal';
    const marginLeft = isCustomer ? 'ml-8' : '';

    return (
        <div className={`${bgColor} p-4 rounded-lg ${marginLeft} ${className}`}>
            <div className="flex items-center mb-2">
                <div className={`w-2 h-2 rounded-full mr-2 ${dotColor}`}></div>
                <span className="text-sm font-medium text-gray-700">{sender}</span>
            </div>
            <p className="text-sm text-gray-600">{message}</p>
        </div>
    );
}

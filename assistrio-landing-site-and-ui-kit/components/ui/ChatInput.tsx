'use client';


interface ChatInputProps {
    placeholder?: string;
    buttonText?: string;
    onSend?: (message: string) => void;
    className?: string;
}

export default function ChatInput({
    placeholder = "Type your question here...",
    buttonText = "Send",
    onSend,
    className = '',
}: ChatInputProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const message = formData.get('message') as string;
        if (message.trim() && onSend) {
            onSend(message.trim());
            e.currentTarget.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex ${className}`}>
            <input
                type="text"
                name="message"
                placeholder={placeholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            />
            <button
                type="submit"
                className="bg-teal text-white px-6 py-3 rounded-r-lg hover:bg-teal/90 transition-colors font-medium"
            >
                {buttonText}
            </button>
        </form>
    );
}

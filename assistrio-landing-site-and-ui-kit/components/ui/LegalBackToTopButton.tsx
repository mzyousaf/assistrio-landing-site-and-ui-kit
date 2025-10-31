interface LegalBackToTopButtonProps {
    show: boolean;
    onClick: () => void;
}

export default function LegalBackToTopButton({ show, onClick }: LegalBackToTopButtonProps) {
    if (!show) return null;

    return (
        <button
            onClick={onClick}
            className="back-to-top"
            aria-label="Back to top"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
}

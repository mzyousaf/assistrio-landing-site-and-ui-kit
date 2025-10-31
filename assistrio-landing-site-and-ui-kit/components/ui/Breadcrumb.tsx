interface BreadcrumbProps {
    items: Array<{
        label: string;
        href?: string;
    }>;
    className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    return (
        <nav className={className}>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                        {index > 0 && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {item.href ? (
                            <a href={item.href} className="hover:text-brand-600 transition-colors">
                                {item.label}
                            </a>
                        ) : (
                            <span className="text-gray-900">{item.label}</span>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}

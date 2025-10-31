interface LegalTableOfContentsProps {
    sections: Array<{
        id: string;
        title: string;
        subsections?: Array<{
            id: string;
            title: string;
        }>;
    }>;
    activeSection: string;
}

export default function LegalTableOfContents({ sections, activeSection }: LegalTableOfContentsProps) {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100; // Account for sticky header
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
            <nav className="space-y-2 legal-toc max-h-96 overflow-y-auto">
                {sections.map((section) => (
                    <div key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === section.id
                                ? 'bg-brand-50 dark:bg-brand-900/50 text-brand-700 dark:text-brand-400 border-l-2 border-brand-500'
                                : 'text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                                }`}
                        >
                            {section.title}
                        </button>
                        {section.subsections && (
                            <div className="ml-4 mt-1 space-y-1">
                                {section.subsections.map((subsection) => (
                                    <button
                                        key={subsection.id}
                                        onClick={() => scrollToSection(subsection.id)}
                                        className="block w-full text-left px-3 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                                    >
                                        {subsection.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}

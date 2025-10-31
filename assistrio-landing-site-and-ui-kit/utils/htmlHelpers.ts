import React from 'react';

// Helper function to safely render HTML content
export const renderHtmlContent = (content: string, isInsideLink: boolean = false): React.ReactNode => {
    // Simple HTML parser for basic links - more robust than dangerouslySetInnerHTML
    const linkRegex = /<a\s+href=['"]([^'"]*)['"][^>]*class=['"]([^'"]*)['"][^>]*>([^<]*)<\/a>/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            parts.push(content.slice(lastIndex, match.index));
        }

        // If we're already inside a link, just render the text without creating another link
        if (isInsideLink) {
            parts.push(match[3]);
        } else {
            // Add the link using React.createElement to avoid JSX syntax
            parts.push(
                React.createElement(
                    'a',
                    {
                        key: match.index,
                        href: match[1],
                        className: match[2],
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    match[3]
                )
            );
        }

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
        parts.push(content.slice(lastIndex));
    }

    return parts.length > 0 ? parts : content;
};

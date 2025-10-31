/**
 * Simple utility function to merge class names
 * Replaces clsx and tailwind-merge functionality
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
    return inputs
        .filter(Boolean)
        .join(' ')
        .trim()
        .replace(/\s+/g, ' ');
}

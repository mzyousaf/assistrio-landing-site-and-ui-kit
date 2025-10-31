interface GradientBlurProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    opacity?: number;
    className?: string;
}

export default function GradientBlur({
    size = 'md',
    opacity = 0.3,
    className = ''
}: GradientBlurProps) {
    const sizeClasses = {
        sm: 'w-64 h-64',
        md: 'w-96 h-96',
        lg: 'w-[500px] h-[500px]',
        xl: 'w-[800px] h-[800px]',
    };

    return (
        <div
            className={`absolute -z-10 ${sizeClasses[size]} ${className}`}
            style={{
                background: `radial-gradient(circle, rgba(14, 165, 233, ${opacity}) 0%, rgba(20, 184, 166, ${opacity}) 50%, transparent 70%)`,
                filter: 'blur(80px)',
            }}
            aria-hidden="true"
        />
    );
}

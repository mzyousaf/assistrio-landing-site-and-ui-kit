import React from 'react';
import Image from 'next/image';

interface CultureImage {
    src: string;
    alt: string;
}

interface CultureImageGridProps {
    images: CultureImage[];
    className?: string;
}

export default function CultureImageGrid({
    images,
    className = ''
}: CultureImageGridProps) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
            {images.map((image, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden group">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(image.alt)}&size=400&background=6366f1&color=ffffff&bold=true`;
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

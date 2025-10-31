import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

interface CaseStudyImageProps {
    image: string;
    title: string;
    slug: string;
    className?: string;
}

export default function CaseStudyImage({ image, title, className = '' }: CaseStudyImageProps) {
    return (
        <div className={`relative group/image overflow-hidden rounded-xl sm:rounded-2xl w-full ${className}`}>
            <Image
                src={image}
                alt={title}
                width={800}
                height={320}
                className="w-full h-64 sm:h-80 object-cover rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-700 shadow-2xl"
                style={{ width: '100%', height: 'auto' }}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-xl sm:rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FaPlay className="w-3 h-3 text-white" />
                </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
        </div>
    );
}

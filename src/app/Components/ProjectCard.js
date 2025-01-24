'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProjectCard({ title, description, imageUrl }) {
    const router = useRouter();
    
    const handleClick = () => {
        // Convert title to slug format for the URL
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        router.push(`/projects/${slug}`);
    };

    return (
        // Single card container with all our desired styling
        <div 
            onClick={handleClick}
            className="flex-shrink-0 w-72 mx-2 overflow-hidden rounded-xl 
                      bg-opacity-50 backdrop-blur-sm border border-opacity-20 
                      hover:scale-105 transition-transform duration-300 
                      cursor-pointer dark:border-white border-black"
        >
            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            {/* Content section for title and description */}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm opacity-80">{description}</p>
            </div>
        </div>
    );
}
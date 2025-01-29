'use client';

import Image from 'next/image';

export default function ProfileImage({ onClick }) {
    return (
        <div 
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                }
            }}
            className="relative w-[clamp(32px,5vw,48px)] h-[clamp(32px,5vw,48px)]
                     hover:scale-110 transition-transform duration-300"
        >
            <Image
                src="/profile.jpeg"
                alt="Gabriel Yepes"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 24px, 32px"
                quality={95}
            />
        </div>
    );
}
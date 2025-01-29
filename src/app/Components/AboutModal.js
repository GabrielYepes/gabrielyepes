'use client';

import { X, Instagram, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../ThemeContext';

export default function AboutModal({ isOpen, onClose }) {
    const { theme } = useTheme();
    
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 
                       flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div 
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-900'} 
                          rounded-2xl max-w-2xl w-full max-h-[90vh] 
                          overflow-y-auto relative animate-modal
                          border ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full 
                              hover:bg-opacity-20 hover:bg-gray-500 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div>
                    {/* Profile Image */}
                    <div className="relative w-full h-64 mb-6">
                        <Image
                            src="/profile.jpeg"
                            alt="Gabriel Yepes"
                            fill
                            className="object-cover rounded-t-2xl"
                            sizes="(max-width: 1024px) 100vw, 42rem"
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        {/* About Me Header */}
                        <h2 className="text-3xl font-bold text-center mb-6">
                            About Me
                        </h2>

                        {/* About Text */}
                        <div className="mb-8 text-base md:text-lg opacity-90">
                            <p>
                                Hi! I am Gabriel, a multidisciplinary digital designer based in Bogotá, Colombia. A son of the digital age, I have always been passionate about 3D design, animation, and video games. I create comprehensive digital solutions: from detailed 3D models and CAD designs to interactive experiences and brand strategies. Coding complements my creative work, bridging the gap between design and functionality. I dabble in a bit of everything I love, always looking to learn and grow.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <a
                                href="https://www.instagram.com/yyyyvvveeesss/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 transition-colors
                                          ${theme === 'light' 
                                            ? 'hover:text-green-600' 
                                            : 'hover:text-green-400'}`}
                            >
                                <Instagram className="w-5 h-5" />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://www.behance.net/gabrielyepes1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 transition-colors
                                          ${theme === 'light' 
                                            ? 'hover:text-green-600' 
                                            : 'hover:text-green-400'}`}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 7h-7V2H9v5H2v15h20V7zM9 13.47V16H7v-2.53h2zm4 0V16h-2v-2.53h2zm4 0V16h-2v-2.53h2z"/>
                                </svg>
                                <span>Behance</span>
                            </a>
                            <a
                                href="tel:+573125603664"
                                className={`flex items-center gap-2 transition-colors
                                          ${theme === 'light' 
                                            ? 'hover:text-green-600' 
                                            : 'hover:text-green-400'}`}
                            >
                                <Phone className="w-5 h-5" />
                                <span>+57 312 345 6789</span>
                            </a>
                        </div>

                        {/* Contact Button/Email */}
                        <div className="text-center">
                            <a
                                href="mailto:gabsyepes@gmail.com"
                                className={`inline-flex items-center gap-2 px-6 py-3 
                                          rounded-full transition-colors
                                          ${theme === 'light'
                                            ? 'bg-green-600 hover:bg-green-700 text-white'
                                            : 'bg-green-500 hover:bg-green-600 text-white'}`}
                            >
                                <Mail className="w-5 h-5" />
                                <span>gabsyepes@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
'use client';

import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
import Carousel from './Components/Carousel';
import projectsData from './Data/projects.json';
import DownloadButton from './Components/DownloadButton';
import WorkStatus from './Components/WorkStatus';
import ProfileImage from './Components/ProfileImage';
import AboutModal from './Components/AboutModal';

export default function Home() {
    const { theme, toggleTheme } = useTheme();
    const [isAboutOpen, setIsAboutOpen] = useState(false);
  
    return (
        <div className={`min-h-screen ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
            {/* Theme toggle button */}
            <button
                onClick={toggleTheme}
                className="fixed top-4 right-4 p-2 rounded-full 
                          hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            {/* Download button */}
            <DownloadButton />
            
            {/* Main content */}
            <main className="flex flex-col items-center justify-center min-h-screen px-4">
                {/* Header section */}
                <div className="text-center max-w-3xl w-full mb-16">
                    <div className="relative inline-flex items-start justify-center mb-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                            Gabriel Yepes
                        </h1>
                        <div className="absolute -top-[0.5em] -right-[1em] sm:-right-[1.2em] 
                                      translate-x-1/2 -translate-y-1/2">
                            <ProfileImage onClick={() => setIsAboutOpen(true)} />
                        </div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80">
                        Designer, tech enthusiast, giving my best everyday
                    </p>
                </div>

                {/* Projects carousel */}
                <div className="w-full mb-12">
                    <Carousel projects={projectsData.projects} />
                </div>

                {/* Work status indicator */}
                <div className="mb-8">
                    <WorkStatus />
                </div>

                {/* About modal */}
                <AboutModal 
                    isOpen={isAboutOpen} 
                    onClose={() => setIsAboutOpen(false)} 
                />
            </main>
        </div>
    );
}
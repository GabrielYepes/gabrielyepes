'use client';

import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
import Carousel from './Components/Carousel';
import projectsData from './Data/projects.json';
import DownloadButton from './Components/DownloadButton';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </button>
      
      {/* CV Download Button */}
      <DownloadButton />
      
      {/* Main content container */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Gabriel Yepes
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl opacity-80">
            Designer, tech enthusiast, giving my best everyday
          </p>
        </div>

        {/* Projects carousel */}
        <div className="w-full">
          <Carousel projects={projectsData.projects} />
        </div>
      </main>
    </div>
  );
}
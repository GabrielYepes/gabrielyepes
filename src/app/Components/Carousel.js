'use client';

import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ projects }) {
  const scrollContainerRef = useRef(null);

  // Scroll handling functions
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Adjust this value to control scroll distance
    
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Optional: Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') scroll('left');
      if (e.key === 'ArrowRight') scroll('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Navigation buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
                   bg-opacity-50 backdrop-blur-sm hover:bg-opacity-75 transition-all
                   dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Carousel container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 py-4
                   scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div key={index} className="snap-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Right navigation button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
                   bg-opacity-50 backdrop-blur-sm hover:bg-opacity-75 transition-all
                   dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
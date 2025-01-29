'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@/app/ThemeContext';
import Image from 'next/image';
import { ArrowLeft, Play } from 'lucide-react';
import ImageModal from '@/app/Components/ImageModal';
import VideoModal from '@/app/Components/VideoModal';
import projectsData from '@/app/Data/projects.json';

export default function ProjectPage() {
  const { slug } = useParams();
  const { theme } = useTheme();
  const router = useRouter();

  // State management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Find the project
  const project = projectsData.projects.find(p => {
    const projectSlug = p.title.toLowerCase().replace(/\s+/g, '-');
    return projectSlug === slug;
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  // Handle clicking on a grid item
  const handleGridItemClick = (index) => {
    if (project.imageVideos?.[index]) {
      // If there's a video for this item, show video modal
      setCurrentVideo(project.imageVideos[index]);
      setIsVideoModalOpen(true);
    } else {
      // Otherwise show image modal
      setCurrentImageIndex(index);
      setIsImageModalOpen(true);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 p-2 rounded-full hover:bg-opacity-20 
                  hover:bg-gray-500 transition-colors flex items-center gap-2"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
        <span>Back</span>
      </button>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Project header */}
        <header className="mb-12 pl-4 md:pl-6 lg:pl-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            {project.fullDescription || project.description}
          </p>
        </header>

        {/* Main reel section (if it exists) */}
        {project.type === 'video' && project.mainVideoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 pl-4 md:pl-6 lg:pl-8">Demo Reel</h2>
            <div 
              className="relative aspect-video cursor-pointer rounded-xl overflow-hidden"
              onClick={() => {
                setCurrentVideo(project.mainVideoUrl);
                setIsVideoModalOpen(true);
              }}
            >
              <Image
                src={project.imageUrl}
                alt="Demo Reel Thumbnail"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black bg-opacity-50 
                              flex items-center justify-center hover:bg-opacity-70
                              transition-all duration-300">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Individual projects grid - only show if there are images */}
        {project.images && project.images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 pl-4 md:pl-6 lg:pl-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square relative rounded-xl overflow-hidden cursor-pointer
                             transform transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => handleGridItemClick(index)}
                >
                  <Image
                    src={image}
                    alt={project.imageDescriptions?.[index] || `${project.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Show play button if this item has a video */}
                  {project.imageVideos?.[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black bg-opacity-50 
                                    flex items-center justify-center hover:bg-opacity-70
                                    transition-all duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modals */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={currentVideo}
        />

        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={project.images?.[currentImageIndex]}
          imageText={project.imageDescriptions?.[currentImageIndex]}
          onNext={() => setCurrentImageIndex(prev => prev + 1)}
          onPrevious={() => setCurrentImageIndex(prev => prev - 1)}
          hasNext={project.images && currentImageIndex < project.images.length - 1}
          hasPrevious={currentImageIndex > 0}
        />
      </main>
    </div>
  );
}
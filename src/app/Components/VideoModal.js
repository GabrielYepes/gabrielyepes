'use client';

import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) return null;

  // Extract video ID from Vimeo URL if needed
  const getVimeoEmbedUrl = (url) => {
    // If it's already an embed URL, return as is
    if (url.includes('player.vimeo.com')) return url;
    // Convert regular Vimeo URL to embed URL if needed
    const vimeoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${vimeoId}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 
                 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-[90vw] h-[90vh] max-w-7xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full 
                     bg-black bg-opacity-50 hover:bg-opacity-70
                     transition-colors duration-200 z-10"
          aria-label="Close video"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video embed */}
        <div className="relative w-full h-full">
          <iframe
            src={`${getVimeoEmbedUrl(videoUrl)}?autoplay=1&title=0&byline=0&portrait=0`}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
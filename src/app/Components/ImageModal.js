'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Added arrow icons
import Image from 'next/image';

export default function ImageModal({ 
  isOpen, 
  onClose, 
  imageUrl, 
  imageText,
  onNext,          // New prop for handling next image
  onPrevious,      // New prop for handling previous image
  hasNext,         // New prop to know if there's a next image
  hasPrevious      // New prop to know if there's a previous image
}) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && hasNext) {
      onNext();
    } else if (e.key === 'ArrowLeft' && hasPrevious) {
      onPrevious();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown} // Added keyboard support
      className="fixed inset-0 bg-black bg-opacity-80 z-50 
                 flex items-center justify-center backdrop-blur-sm
                 transition-opacity duration-300"
      tabIndex={0} // Makes the div focusable for keyboard events
    >
      <div className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full 
                     bg-black bg-opacity-50 hover:bg-opacity-70
                     transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Navigation buttons */}
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from closing
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                       bg-black bg-opacity-50 hover:bg-opacity-70
                       transition-colors duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from closing
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                       bg-black bg-opacity-50 hover:bg-opacity-70
                       transition-colors duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Image container */}
        <div className="relative">
          <Image
            src={imageUrl}
            alt={imageText || "Full size image"}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh]"
          />
        </div>

        {/* Text section */}
        {imageText && (
          <div className="py-4 px-6 text-center">
            <p className="text-sm md:text-base text-white">
              {imageText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
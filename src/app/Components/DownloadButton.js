'use client';

import { Download } from 'lucide-react';

export default function DownloadButton() {
  // When hovering over the dark theme, we want the button to have a light glow
  // In light theme, we want a subtle shadow effect
  return (
    <a
      href="/assets/CV_GabrielYepes.pdf"
      download
      className="group fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 
                 rounded-full backdrop-blur-sm border border-opacity-20
                 transition-all duration-300 ease-in-out
                 hover:scale-105 active:scale-95
                 dark:border-white dark:bg-white/10 dark:hover:bg-white/20
                 border-black bg-black/10 hover:bg-black/20"
    >
      <Download className="w-5 h-5" />
      <span className="font-medium">Download CV</span>
    </a>
  );
}
import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  src?: string;
  className?: string;
  aspect?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  label = "Asset Slot", 
  src, 
  className = "",
  aspect = "aspect-video"
}) => {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <div className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-[#222222] bg-[#0c0c0c] group ${className}`}>
        <img 
          src={src} 
          alt={label} 
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {/* Option 1: Corner HUD Brackets on hover */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspect} bg-[#0c0c0c] border border-[#222222] hover:border-red-600 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 text-center group transition-colors duration-200 ${className}`}>
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="p-3 rounded-full bg-[#181818] border border-[#262626] mb-2 group-hover:border-red-600 transition-colors">
        <ImageIcon className="w-5 h-5 text-red-600" />
      </div>
      <span className="text-xs uppercase tracking-wider text-[#999999] font-bold">{label}</span>
      <span className="text-[10px] text-[#555555] mt-1 font-mono">
        {src ? 'Check path in /public/images' : 'Ready for Image'}
      </span>
    </div>
  );
};
import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isOpen, onClose, videoUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be/') 
      ? url.split('youtu.be/')[1].split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`bg-black rounded-xl overflow-hidden relative ${
        isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl aspect-video'
      }`}>
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-10 p-4 flex items-center justify-between">
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="w-full h-full">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Loading overlay for better UX */}
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
            <p className="text-white">Loading video...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
import React from 'react';
import { Play, Star, Clock } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface FilmCardProps {
  title: string;
  image: string;
  year: string;
  rating: number;
  duration: string;
  type: 'ai' | 'human';
  genre: string;
  isSubscribed?: boolean;
  onPlay?: () => void;
  videoUrl?: string;
}

const FilmCard: React.FC<FilmCardProps> = ({ title, image, year, rating, duration, type, genre, isSubscribed = false, onPlay, videoUrl }) => {
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = React.useState(false);

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay();
    } else if (videoUrl && isSubscribed) {
      // Open video player modal
      setIsVideoPlayerOpen(true);
    } else if (videoUrl && !isSubscribed) {
      alert(`Subscribe to Five Studio Premium for just €2.50/month to watch "${title}" and all other films!`);
    } else if (!isSubscribed) {
      alert(`Subscribe to Five Studio Premium for just €2.50/month to watch "${title}" and all other films!`);
    } else {
      alert(`Playing "${title}" - This would open the video player in a real application.`);
    }
  };

  return (
    <>
      <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handlePlayClick}
            className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
            type === 'ai' 
              ? 'bg-purple-600 text-white flex items-center space-x-1' 
              : 'bg-orange-600 text-white flex items-center space-x-1'
          }`}>
            {type === 'ai' ? (
              <span>AI</span>
            ) : (
              <span>Human</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
          <span>{year}</span>
          <span className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </span>
        </div>
        
        <div className="text-sm text-gray-300">{genre}</div>
      </div>
    </div>
      
      {/* Video Player Modal */}
      {videoUrl && (
        <VideoPlayer
          isOpen={isVideoPlayerOpen}
          onClose={() => setIsVideoPlayerOpen(false)}
          videoUrl={videoUrl}
          title={title}
        />
      )}
    </>
  );
};

export default FilmCard;
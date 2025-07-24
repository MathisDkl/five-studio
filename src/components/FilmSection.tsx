import React from 'react';
import FilmCard from './FilmCard';
import { ChevronRight } from 'lucide-react';

interface Film {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: number;
  duration: string;
  type: 'ai' | 'human';
  genre: string;
}

interface FilmSectionProps {
  title: string;
  films: Film[];
  type: 'ai' | 'human';
  isSubscribed?: boolean;
  onViewAll?: () => void;
}

const FilmSection: React.FC<FilmSectionProps> = ({ title, films, type, isSubscribed = false, onViewAll }) => {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      alert(`Viewing all ${title} - This would show a full catalog page in a real application.`);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <button 
            onClick={handleViewAll}
            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {films.map((film) => (
            <FilmCard key={film.id} {...film} isSubscribed={isSubscribed} videoUrl={film.videoUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmSection;
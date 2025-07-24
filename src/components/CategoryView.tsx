import React from 'react';
import FilmCard from './FilmCard';
import { ArrowLeft } from 'lucide-react';

interface Film {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: number;
  duration: string;
  type: 'ai' | 'human';
  genre: string;
  videoUrl?: string;
}

interface CategoryViewProps {
  title: string;
  films: Film[];
  isSubscribed?: boolean;
  onBack: () => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({ title, films, isSubscribed = false, onBack }) => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center space-x-4 mb-8">
          <button 
            onClick={onBack}
            className="text-white hover:text-purple-400 transition-colors flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">{title}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {films.map((film) => (
            <FilmCard key={film.id} {...film} isSubscribed={isSubscribed} videoUrl={film.videoUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
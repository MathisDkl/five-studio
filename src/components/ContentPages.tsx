import React from 'react';
import { ArrowLeft, Play, Star, Clock } from 'lucide-react';

interface ContentPageProps {
  title: string;
  onBack: () => void;
}

export const AIFilmsPage: React.FC<ContentPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-white mb-4">AI-Generated Films Collection</h2>
        <p className="text-gray-300 mb-6">
          Explore our cutting-edge collection of films created using artificial intelligence. 
          These groundbreaking works showcase the future of cinema where technology meets creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4">
              <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">AI Film {i}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>8.{i}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>12{i} min</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const HumanFilmsPage: React.FC<ContentPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-4">Human-Created Films Collection</h2>
        <p className="text-gray-300 mb-6">
          Discover our curated selection of films crafted by talented human filmmakers. 
          These works celebrate the art of traditional storytelling and human creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4">
              <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Human Film {i}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>9.{i}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>15{i} min</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ShortFilmsPage: React.FC<ContentPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
        <h2 className="text-2xl font-bold text-white mb-4">Short Films Collection</h2>
        <p className="text-gray-300 mb-6">
          Experience powerful storytelling in bite-sized formats. Our short films collection 
          features both AI-generated and human-created works that pack emotional impact into every minute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4">
              <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Short {i}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>8.{i}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{10 + i} min</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const CollectionsPage: React.FC<ContentPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Curated Collections</h2>
          <p className="text-gray-300 mb-6">
            Discover handpicked collections of films organized by themes, genres, and artistic styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Sci-Fi Futures', 'Human Drama', 'Experimental Art', 'Romance Stories', 'Thriller Collection', 'Documentary Series'].map((collection, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
                <h3 className="text-white font-semibold text-lg mb-2">{collection}</h3>
                <p className="text-gray-400 text-sm mb-4">12-15 films</p>
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm">Explore Collection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
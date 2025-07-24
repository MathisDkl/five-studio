import React from 'react';
import { Play, Star, Clock, Sparkles } from 'lucide-react';

interface NewReleasesProps {
  isSubscribed?: boolean;
}

const NewReleases: React.FC<NewReleasesProps> = ({ isSubscribed = false }) => {
  const handlePlayAstrade = () => {
    if (isSubscribed) {
      alert('Playing ASTRADE - This would open the video player in a real application.');
    } else {
      alert('Subscribe to Five Studio Premium for just €2.50/month to watch "ASTRADE" and all other films!');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center space-x-3 mb-8">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">New Releases</h2>
        </div>
        
        {/* Featured: ASTRADE */}
        <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800 mb-12" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
        }}>
          <div className="p-8">
            {/* Poster - Full width landscape */}
            <div className="relative group mb-8">
              <div className="aspect-[21/9] relative overflow-hidden rounded-xl w-full max-w-6xl mx-auto">
                <img 
                  src="/ASTRADE.png" 
                  alt="ASTRADE"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* AI Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <span>AI</span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button 
                    onClick={handlePlayAstrade}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transform"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
                  Featured Release
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-gray-300 mb-8">
                <span className="text-lg">2024</span>
                <span className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg">9.6</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg">4 min</span>
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Music Video
                </span>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                A young woman lost in Venice's canals discovers a spaceship that takes her on an extraordinary voyage through the cosmos.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={handlePlayAstrade}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Now</span>
                </button>
                
                <div className="flex items-center space-x-2 text-purple-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">AI-Generated Masterpiece</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other New Releases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Venice Journey', type: 'Human', image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', videoUrl: 'https://www.youtube.com/watch?v=tGHMBfC7z0M' },
            { title: 'Neural Symphony', type: 'AI', image: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
            { title: 'Human Stories', type: 'Human', image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
            { title: 'Digital Dreams', type: 'AI', image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
            { title: 'Authentic Voices', type: 'Human', image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' }
          ].map((film, i) => (
            <div key={i} className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => {
                      if (film.videoUrl && isSubscribed) {
                        // This would open the video player with the YouTube video
                        alert(`Playing "${film.title}" - Video will play embedded on your site.`);
                      } else if (film.videoUrl && !isSubscribed) {
                        alert(`Subscribe to Five Studio Premium for just €2.50/month to watch "${film.title}" and all other films!`);
                      } else {
                        alert(`Playing "${film.title}" - This would open the video player in a real application.`);
                      }
                    }}
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Play className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="absolute top-3 left-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    film.type === 'AI' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-orange-600 text-white'
                  }`}>
                    {film.type}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-white font-semibold text-lg">{film.title}</h4>
                <p className="text-gray-400 text-sm">Just Released</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
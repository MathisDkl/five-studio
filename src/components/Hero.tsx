import React from 'react';
import { Play, Info, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/f copy copy.png')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[1.2] tracking-tight">
            <span className="block mb-6">Where AI Meets</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cinema
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Experience groundbreaking films created by both artificial intelligence and human creativity. 
            Stream the future of cinema where technology amplifies human imagination to create 
            extraordinary visual stories.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">AI-Enhanced</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-white">Human-Driven</span>
            <span className="text-gray-400">•</span>
            <span className="text-white">Innovative Storytelling</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <Play className="w-5 h-5" />
              <span>Explore Films</span>
            </button>
            <button className="bg-gray-800/80 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700/80 transition-all duration-300 flex items-center space-x-2 border border-gray-600">
              <Info className="w-5 h-5" />
              <span>About Studio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
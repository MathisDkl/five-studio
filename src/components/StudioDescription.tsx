import React from 'react';
import { Heart, Lightbulb, Users, Sparkles } from 'lucide-react';

const StudioDescription = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Where Human Imagination 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Meets Innovation</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            At Five Studio, human imagination lies at the heart of every project. Our films and short films 
            are passionately created by humans, while artificial intelligence serves as a powerful tool to 
            bring these visionary ideas to life and visualize them in extraordinary ways. Authenticity and 
            human creativity are the core values that drive our approach to storytelling.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Human-Centered</h3>
              <p className="text-gray-400 text-sm">Every story begins with human emotion, passion, and authentic creative vision.</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Innovative Tools</h3>
              <p className="text-gray-400 text-sm">AI amplifies human creativity, transforming imaginative concepts into visual reality.</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Collaborative Spirit</h3>
              <p className="text-gray-400 text-sm">Human artists and AI work in harmony to push creative boundaries.</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Authentic Stories</h3>
              <p className="text-gray-400 text-sm">Genuine narratives that resonate with human experiences and emotions.</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
            <blockquote className="text-2xl font-light text-white italic">
              "Technology is best when it brings people together and amplifies human creativity."
            </blockquote>
            <cite className="block mt-4 text-purple-400 font-medium">— Five Studio Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioDescription;
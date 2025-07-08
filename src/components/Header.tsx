import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onCategoryChange: (category: 'home' | 'ai' | 'human' | 'shorts') => void;
  activeCategory: string;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (category: 'home' | 'ai' | 'human' | 'shorts') => {
    onCategoryChange(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="/incr.png" 
              alt="Five Studio Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-white">Five Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-colors text-sm font-medium ${activeCategory === 'home' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('ai')}
              className={`transition-colors text-sm font-medium ${activeCategory === 'ai' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              AI Films
            </button>
            <button 
              onClick={() => handleNavClick('human')}
              className={`transition-colors text-sm font-medium ${activeCategory === 'human' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Human Films
            </button>
            <button 
              onClick={() => handleNavClick('shorts')}
              className={`transition-colors text-sm font-medium ${activeCategory === 'shorts' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Shorts
            </button>
          </nav>

          {/* Search and User */}
          <div className="flex items-center space-x-3">
            <button className="text-white hover:text-purple-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-purple-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <nav className="flex flex-col space-y-3 px-4 py-4">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-left transition-colors text-sm font-medium ${activeCategory === 'home' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('ai')}
                className={`text-left transition-colors text-sm font-medium ${activeCategory === 'ai' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
              >
                AI Films
              </button>
              <button 
                onClick={() => handleNavClick('human')}
                className={`text-left transition-colors text-sm font-medium ${activeCategory === 'human' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
              >
                Human Films
              </button>
              <button 
                onClick={() => handleNavClick('shorts')}
                className={`text-left transition-colors text-sm font-medium ${activeCategory === 'shorts' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
              >
                Shorts
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
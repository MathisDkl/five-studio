import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import UserModal from './UserModal';
import SubscriptionModal from './SubscriptionModal';

interface HeaderProps {
  onCategoryChange: (category: 'home' | 'ai' | 'human' | 'shorts') => void;
  activeCategory: string;
  isSubscribed: boolean;
  onSubscriptionChange: (subscribed: boolean) => void;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange, activeCategory, isSubscribed, onSubscriptionChange, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (category: 'home' | 'ai' | 'human' | 'shorts') => {
    onCategoryChange(category);
    setIsMenuOpen(false);
  };

  const handleUserClick = () => {
    setIsUserModalOpen(true);
  };

  const handleSubscribe = () => {
    onSubscriptionChange(true);
  };

  const handleSignOut = () => {
    onSubscriptionChange(false);
    alert('You have been signed out successfully!');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
      // In a real app, this would trigger a search function
    }
  };

  return (
    <>
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
              className={`transition-colors text-sm font-medium px-3 py-1 rounded-full border ${
                activeCategory === 'ai' 
                  ? 'text-purple-400 border-purple-400 bg-purple-400/10' 
                  : 'text-white hover:text-purple-400 border-purple-500/30 hover:border-purple-400 hover:bg-purple-400/5'
              }`}
            >
              AI Films
            </button>
            <button 
              onClick={() => handleNavClick('human')}
              className={`transition-colors text-sm font-medium px-3 py-1 rounded-full border ${
                activeCategory === 'human' 
                  ? 'text-orange-400 border-orange-400 bg-orange-400/10' 
                  : 'text-white hover:text-orange-400 border-orange-500/30 hover:border-orange-400 hover:bg-orange-400/5'
              }`}
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
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search films..."
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-400 focus:outline-none w-64"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery.trim()) {
                        setIsSearchOpen(false);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
            <button 
              onClick={handleUserClick}
              className="text-white hover:text-purple-400 transition-colors"
            >
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
                className={`text-left transition-colors text-sm font-medium px-3 py-2 rounded-lg ${
                  activeCategory === 'ai' 
                    ? 'text-purple-400 bg-purple-400/10' 
                    : 'text-white hover:text-purple-400 hover:bg-purple-400/5'
                }`}
              >
                AI Films
              </button>
              <button 
                onClick={() => handleNavClick('human')}
                className={`text-left transition-colors text-sm font-medium px-3 py-2 rounded-lg ${
                  activeCategory === 'human' 
                    ? 'text-orange-400 bg-orange-400/10' 
                    : 'text-white hover:text-orange-400 hover:bg-orange-400/5'
                }`}
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
      
      <UserModal 
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        isSubscribed={isSubscribed}
        onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
        onNavigate={onNavigate}
        onSignOut={handleSignOut}
      />
      
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        onSubscribe={handleSubscribe}
      />
    </>
  );
};

export default Header;
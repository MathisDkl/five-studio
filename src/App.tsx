import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StudioDescription from './components/StudioDescription';
import FilmSection from './components/FilmSection';
import CategoryView from './components/CategoryView';
import Footer from './components/Footer';
import { aiFilms, humanFilms, shortFilms } from './data/films';

type ViewType = 'home' | 'ai' | 'human' | 'shorts';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleCategoryChange = (category: ViewType) => {
    setCurrentView(category);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'ai':
        return (
          <CategoryView
            title="AI-Generated Films"
            films={aiFilms}
            onBack={handleBackToHome}
          />
        );
      case 'human':
        return (
          <CategoryView
            title="Human-Created Films"
            films={humanFilms}
            onBack={handleBackToHome}
          />
        );
      case 'shorts':
        return (
          <CategoryView
            title="Short Films"
            films={shortFilms}
            onBack={handleBackToHome}
          />
        );
      default:
        return (
          <main>
            <Hero />
            <StudioDescription />
            <div className="space-y-16">
              <FilmSection 
                title="AI-Generated Films" 
                films={aiFilms.slice(0, 4)} 
                type="ai"
                onViewAll={() => setCurrentView('ai')}
              />
              <FilmSection 
                title="Human-Created Films" 
                films={humanFilms.slice(0, 4)} 
                type="human"
                onViewAll={() => setCurrentView('human')}
              />
              <FilmSection 
                title="Short Films" 
                films={shortFilms.slice(0, 4)} 
                type="human"
                onViewAll={() => setCurrentView('shorts')}
              />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header onCategoryChange={handleCategoryChange} activeCategory={currentView} />
      {renderContent()}
      {currentView === 'home' && <Footer />}
    </div>
  );
}

export default App;
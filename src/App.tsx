import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewReleases from './components/NewReleases';
import StudioDescription from './components/StudioDescription';
import FilmSection from './components/FilmSection';
import CategoryView from './components/CategoryView';
import Footer from './components/Footer';
import { AIFilmsPage, HumanFilmsPage, ShortFilmsPage, CollectionsPage } from './components/ContentPages';
import { HelpCenterPage, ContactUsPage, PrivacyPolicyPage, TermsOfServicePage } from './components/SupportPages';
import { ProfileSettingsPage, BillingPaymentsPage, AccountSettingsPage } from './components/UserPages';
import { aiFilms, humanFilms, shortFilms } from './data/films';

type ViewType = 'home' | 'ai' | 'human' | 'shorts' | 'ai-films' | 'human-films' | 'short-films' | 'collections' | 'help-center' | 'contact-us' | 'privacy-policy' | 'terms-of-service' | 'profile-settings' | 'billing-payments' | 'account-settings';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCategoryChange = (category: ViewType) => {
    setCurrentView(category);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentView(page as ViewType);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'ai':
        return (
          <CategoryView
            title="AI-Generated Films"
            films={aiFilms}
            isSubscribed={isSubscribed}
            onBack={handleBackToHome}
          />
        );
      case 'human':
        return (
          <CategoryView
            title="Human-Created Films"
            films={humanFilms}
            isSubscribed={isSubscribed}
            onBack={handleBackToHome}
          />
        );
      case 'shorts':
        return (
          <CategoryView
            title="Short Films"
            films={shortFilms}
            isSubscribed={isSubscribed}
            onBack={handleBackToHome}
          />
        );
      case 'ai-films':
        return <AIFilmsPage title="AI Films" onBack={handleBackToHome} />;
      case 'human-films':
        return <HumanFilmsPage title="Human Films" onBack={handleBackToHome} />;
      case 'short-films':
        return <ShortFilmsPage title="Short Films" onBack={handleBackToHome} />;
      case 'collections':
        return <CollectionsPage title="Collections" onBack={handleBackToHome} />;
      case 'help-center':
        return <HelpCenterPage title="Help Center" onBack={handleBackToHome} />;
      case 'contact-us':
        return <ContactUsPage title="Contact Us" onBack={handleBackToHome} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage title="Privacy Policy" onBack={handleBackToHome} />;
      case 'terms-of-service':
        return <TermsOfServicePage title="Terms of Service" onBack={handleBackToHome} />;
      case 'profile-settings':
        return <ProfileSettingsPage title="Profile Settings" onBack={handleBackToHome} />;
      case 'billing-payments':
        return <BillingPaymentsPage title="Billing & Payments" onBack={handleBackToHome} />;
      case 'account-settings':
        return <AccountSettingsPage title="Account Settings" onBack={handleBackToHome} />;
      default:
        return (
          <main>
            <Hero />
            <NewReleases isSubscribed={isSubscribed} />
            <StudioDescription />
            <div className="space-y-16">
              <FilmSection 
                title="AI-Generated Films" 
                films={aiFilms.slice(0, 4)} 
                type="ai"
                isSubscribed={isSubscribed}
                onViewAll={() => setCurrentView('ai')}
              />
              <FilmSection 
                title="Human-Created Films" 
                films={humanFilms.slice(0, 4)} 
                type="human"
                isSubscribed={isSubscribed}
                onViewAll={() => setCurrentView('human')}
              />
              <FilmSection 
                title="Short Films" 
                films={shortFilms.slice(0, 4)} 
                type="human"
                isSubscribed={isSubscribed}
                onViewAll={() => setCurrentView('shorts')}
              />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header 
        onCategoryChange={handleCategoryChange} 
        activeCategory={currentView} 
        isSubscribed={isSubscribed}
        onSubscriptionChange={setIsSubscribed}
        onNavigate={handleNavigate}
      />
      {renderContent()}
      {currentView === 'home' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
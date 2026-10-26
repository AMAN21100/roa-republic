import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StadiumTicker } from './components/StadiumTicker';
import { Footer } from './components/Footer';
import { HomeView } from './pages/HomeView';
import { StoreView } from './pages/StoreView';
import { FeedbackView } from './pages/FeedbackView';
import { SportsNewsView } from './pages/SportsNewsView';
import { EventsView } from './pages/EventsView';
import { MnyView } from './pages/MnyView';
import { AboutView } from './pages/AboutView';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView setCurrentTab={setCurrentTab} />;
      case 'store':
        return <StoreView setCurrentTab={setCurrentTab} />;
      case 'mny':
        return <MnyView setCurrentTab={setCurrentTab} />;
      case 'snews':
        return <SportsNewsView setCurrentTab={setCurrentTab} />;
      case 'event':
        return <EventsView setCurrentTab={setCurrentTab} />;
      case 'about':
        return <AboutView setCurrentTab={setCurrentTab} />;
      case 'feedback':
        return <FeedbackView setCurrentTab={setCurrentTab} />;
      default:
        return <HomeView setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Fixed Sticky Header */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      {/* Option 5: Stadium Broadcast Ticker */}
      <StadiumTicker />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
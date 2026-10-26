import React, { useState } from 'react';
import { Menu, X, Shield, ShoppingBag, Calendar, Newspaper, MapPin, Info, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Shield },
    { id: 'store', label: 'STORE', icon: ShoppingBag },
    { id: 'mny', label: 'MNY', icon: MapPin },
    { id: 'snews', label: 'SPORTS NEWS', icon: Newspaper },
    { id: 'event', label: 'EVENTS', icon: Calendar },
    { id: 'about', label: 'ABOUT', icon: Info },
    { id: 'feedback', label: 'FEEDBACK', icon: MessageSquare },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left Brand Area: Wing Logo + Red ROA Badge */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group shrink-0"
          >
            <img 
              src="/images/header1.png" 
              alt="ROA Logo" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />

            <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 bg-black border-2 border-red-600 flex items-center justify-center font-black text-white text-sm sm:text-base md:text-lg tracking-widest group-hover:bg-red-600 transition-colors">
              ROA
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold tracking-wider uppercase transition-colors duration-150 ${
                    isActive 
                      ? 'text-red-600 border-b-2 border-red-600 pb-1.5' 
                      : 'text-[#aaaaaa] hover:text-red-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Logo / Emblem (header2.png) */}
          <div 
            onClick={() => handleNavClick('home')}
            className="hidden md:flex items-center cursor-pointer group pl-2 shrink-0"
          >
            <img 
              src="/images/header2.png" 
              alt="Republic of Athletes" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-[#111111] border border-[#222222] text-white hover:text-red-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#222222] bg-black px-4 pt-3 pb-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-[#aaaaaa] hover:text-red-600 hover:bg-[#111111]'
                }`}
              >
                <Icon className="w-4 h-4 text-red-600" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
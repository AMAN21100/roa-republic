import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="mt-24 border-t border-[#222222] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-black border border-red-600 flex items-center justify-center font-black text-white text-sm">
                ROA
              </div>
              <span className="font-extrabold tracking-widest text-white uppercase text-lg">ROA</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">
              Unleash your athlete. Dedicated to sports news, performance equipment, community events, and nationwide athletic connectivity.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">Portals</h4>
            <ul className="space-y-2 text-xs text-[#aaaaaa]">
              {['home', 'about', 'store', 'mny'].map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setCurrentTab(tab)}
                    className="hover:text-red-600 capitalize transition-colors flex items-center gap-1 group"
                  >
                    <span>{tab === 'mny' ? 'Match Near You' : tab}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">Media & Community</h4>
            <ul className="space-y-2 text-xs text-[#aaaaaa]">
              {['snews', 'event', 'feedback'].map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setCurrentTab(tab)}
                    className="hover:text-red-600 capitalize transition-colors flex items-center gap-1 group"
                  >
                    <span>{tab === 'snews' ? 'Sports News' : tab}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">Official Dispatch</h4>
            <p className="text-xs text-[#888888] mb-3">Subscribe to tournament dates and gear restocks.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="bg-[#111111] border border-[#262626] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 w-full"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div>© {new Date().getFullYear()} ROA - Rise of the Republic. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-[#aaaaaa] cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-[#aaaaaa] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#aaaaaa] cursor-pointer">Athlete Guidelines</span>
          </div>
        </div>

        <div className="flex justify-center items-center pt-8 mt-8 border-t border-[#1a1a1a]">
          <img 
            src="/images/logo.png" 
            alt="ROA Emblem" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>
    </footer>
  );
};
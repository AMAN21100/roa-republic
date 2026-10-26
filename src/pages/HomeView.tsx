import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { DiveDeeper } from '../components/DiveDeeper';
import { ArrowRight, Trophy, Activity, Flame } from 'lucide-react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeProps> = ({ setCurrentTab }) => {
  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-[#222222] bg-[#080808] p-6 md:p-14">
        
        {/* Option 1: Corner HUD Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-40 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-red-600 opacity-40 pointer-events-none" />

        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-red-600/40 text-red-600 text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Rise of the Republic
          </div>
          
          {/* Option 3: Glitch Split Hover Effect */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none cursor-pointer select-none transition-all duration-200 hover:[text-shadow:3px_0px_0px_#dc2626,-3px_0px_0px_#ffffff]">
            Unleash Your <span className="text-red-600">Athlete</span>
          </h1>

          <p className="text-[#999999] text-sm md:text-base max-w-xl leading-relaxed">
            The unified platform for regional sports coverage, athlete identity, equipment drops, and finding your local competitive match arena.
          </p>

          {/* Option 3: Kinetic Tactile Buttons (active:scale-95) */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => setCurrentTab('store')}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold tracking-wider text-xs uppercase transition-all duration-100 flex items-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
            >
              Explore Gear <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentTab('mny')}
              className="px-6 py-3.5 bg-[#121212] hover:bg-[#1a1a1a] hover:border-red-600 active:scale-95 border border-[#262626] text-white font-bold tracking-wider text-xs uppercase transition-all duration-100 cursor-pointer"
            >
              Find Matches
            </button>
          </div>
        </div>

        {/* Hero Banner with Option 1 Biometric Scanline */}
        <div className="relative mt-10 rounded-xl overflow-hidden border border-[#222222] group shadow-none hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-shadow">
          {/* Scanline Beam */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#dc2626] opacity-70 animate-scanline pointer-events-none z-10" />
          
          <ImagePlaceholder 
            src="/images/1.png" 
            label="Main Slider Banner (1.png)" 
            aspect="aspect-[21/9]" 
          />
        </div>
      </section>

      {/* Dive Into The Republic Grid */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Portals</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mt-1 cursor-pointer transition-all duration-200 hover:[text-shadow:2px_0px_0px_#dc2626]">
            Dive Into The Republic
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'mny', title: 'Matches', img: '/images/img9.jpg', icon: Trophy },
            { id: 'about', title: 'About ROA', img: '/images/img10.jpg', icon: Activity },
            { id: 'event', title: 'Events', img: '/images/img11.jpg', icon: Flame },
            { id: 'snews', title: 'News', img: '/images/img12.jpg', icon: Trophy },
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className="cursor-pointer group relative bg-[#0a0a0a] border border-[#222222] hover:border-red-600 p-3 rounded-xl transition-all duration-200 active:scale-95"
            >
              <ImagePlaceholder src={item.img} label={item.title} aspect="aspect-square" />
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-bold text-xs uppercase text-white group-hover:text-red-600 transition-colors">
                  {item.title}
                </span>
                <item.icon className="w-3.5 h-3.5 text-[#555555] group-hover:text-red-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="space-y-6 bg-[#080808] border border-[#222222] p-6 md:p-10 rounded-2xl relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Showcase</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Unleash Your Athlete — About ROA
            </h2>
          </div>
          <button 
            onClick={() => setCurrentTab('about')}
            className="text-xs uppercase font-bold text-red-600 hover:text-red-500 active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
          >
            Read Story <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImagePlaceholder src="/images/img1.1.jpg" label="Showcase Media 1 (img1.1.jpg)" aspect="aspect-square" />
          <ImagePlaceholder src="/images/img2.1.jpg" label="Showcase Media 2 (img2.1.jpg)" aspect="aspect-square" />
          <ImagePlaceholder src="/images/img3.1.jpg" label="Showcase Media 3 (img3.1.jpg)" aspect="aspect-square" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImagePlaceholder src="/images/img4.jpg" label="Showcase Feature 1 (img4.jpg)" aspect="aspect-[16/10]" />
          <ImagePlaceholder src="/images/img5.jpg" label="Showcase Feature 2 (img5.jpg)" aspect="aspect-[16/10]" />
        </div>
      </section>

      {/* What's Your Republic */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Identity</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mt-1">
            What's Your Republic?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImagePlaceholder src="/images/img6.jpg" label="Division 01 (img6.jpg)" aspect="aspect-[4/3]" />
          <ImagePlaceholder src="/images/img7.jpg" label="Division 02 (img7.jpg)" aspect="aspect-[4/3]" />
          <ImagePlaceholder src="/images/img8.jpg" label="Division 03 (img8.jpg)" aspect="aspect-[4/3]" />
        </div>
      </section>

      <div className="w-full overflow-hidden rounded-xl border border-[#222222]">
        <ImagePlaceholder src="/images/5.png" label="Republic Wide Banner (5.png)" aspect="aspect-[21/9]" />
      </div>

      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
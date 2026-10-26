import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Flame, Radio, ShoppingBag, Eye } from 'lucide-react';

export const AnimationShowcase: React.FC = () => {
  // State for testing 3D Parallax Tilt
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotate({ x: -(y / 8), y: x / 8 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // State for Framer Motion Kinetic tab test
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  return (
    <div className="space-y-16 py-8 border-b border-[#222222]">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600">Motion Lab</span>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          Interactive Animation Testing Suite
        </h2>
        <p className="text-xs text-[#888888]">
          Hover, click, and interact with the 5 concepts below to choose your favorite.
        </p>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATION 1: Pulse & Scanline (Biometric Tactical HUD) */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-[#080808] border border-[#222222] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
          <Radio className="w-4 h-4 animate-pulse" /> Option 1: Tactical Biometric Scanline & Glow
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card with Laser Sweep Line */}
          <div className="relative h-44 rounded-xl bg-[#0f0f0f] border border-[#262626] overflow-hidden flex flex-col justify-end p-5 group hover:border-red-600 transition-colors shadow-none hover:shadow-[0_0_30px_rgba(220,38,38,0.25)]">
            {/* The laser scan beam */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#dc2626] opacity-75 animate-scanline pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[10px] uppercase font-bold text-red-600 tracking-wider">HUD Active</span>
            </div>
            <h4 className="text-lg font-bold uppercase text-white">Biometric Scan Card</h4>
            <p className="text-xs text-[#888888]">Hover to see corner red borders engage with glowing halo.</p>
          </div>

          {/* Card with Corner Bracket Accents */}
          <div className="relative h-44 rounded-xl bg-[#0f0f0f] border border-[#262626] p-5 flex flex-col justify-end group hover:border-red-600 transition-colors">
            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 w-3 h-2 border-b-2 border-l-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 w-3 h-2 border-b-2 border-r-2 border-red-600 opacity-40 group-hover:opacity-100 transition-opacity" />

            <h4 className="text-lg font-bold uppercase text-white">Target Framing Card</h4>
            <p className="text-xs text-[#888888]">Clean corner locks illuminate upon cursor focus.</p>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATION 2: 3D Parallax Tilt (Dynamic Gear Card) */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-[#080808] border border-[#222222] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
          <Eye className="w-4 h-4" /> Option 2: 3D Mouse Parallax Tilt (Hover over card)
        </div>

        <div className="flex justify-center perspective-[1000px] py-4">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full max-w-sm rounded-2xl bg-[#0d0d0d] border border-[#262626] p-6 shadow-2xl hover:border-red-600 hover:shadow-[0_20px_40px_rgba(220,38,38,0.25)] flex flex-col justify-between cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl bg-black border border-[#1f1f1f] p-4 text-center">
              <img 
                src="/images/img16.1.jpg" 
                alt="Product" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="h-32 mx-auto object-contain transition-transform duration-300 hover:scale-110" 
              />
              <span className="text-xs text-red-600 font-bold uppercase tracking-widest block mt-2">ROA Performance Pro</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold uppercase text-white">Dynamic Gear Tilt</h4>
                <p className="text-xs text-[#888888]">Angles along cursor direction</p>
              </div>
              <span className="text-sm font-black text-white">₹4,499</span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATION 3: Glitch & Electric Flash Buttons */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-[#080808] border border-[#222222] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
          <Flame className="w-4 h-4" /> Option 3: Red Split Glitch & Kinetic Press
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-[10px] text-[#666666] uppercase tracking-wider block mb-1">Hover the text below:</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-white cursor-pointer transition-all duration-200 hover:[text-shadow:3px_0px_0px_#dc2626,-3px_0px_0px_#ffffff]">
              UNLEASH YOUR <span className="text-red-600">ATHLETE</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-widest transition-transform duration-100 flex items-center gap-2 shadow-lg shadow-red-600/30">
              <ShoppingBag className="w-4 h-4" /> Kinetic Press Button
            </button>
            <button className="px-6 py-3.5 bg-[#121212] hover:border-red-600 border border-[#262626] active:scale-95 text-white font-bold text-xs uppercase tracking-widest transition-all duration-100">
              Tactical Trigger
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATION 4: Framer Motion Staggered Kinetic Reveal */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-[#080808] border border-[#222222] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
            <Activity className="w-4 h-4" /> Option 4: Staggered Kinetic Reveal
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('A')}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors ${activeTab === 'A' ? 'bg-red-600 text-white' : 'bg-[#141414] text-[#888888]'}`}
            >
              Batch 1
            </button>
            <button
              onClick={() => setActiveTab('B')}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors ${activeTab === 'B' ? 'bg-red-600 text-white' : 'bg-[#141414] text-[#888888]'}`}
            >
              Batch 2
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.08, duration: 0.3 }}
                className="p-5 rounded-xl bg-[#0e0e0e] border border-[#222222] hover:border-red-600 transition-colors"
              >
                <span className="text-[10px] font-bold text-red-600 uppercase">Card 0{num}</span>
                <h4 className="font-bold text-sm uppercase text-white mt-1">Cascade Reveal Item</h4>
                <p className="text-xs text-[#888888] mt-2">Smoothly glides into place on layout switch.</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATION 5: Marquee Stadium Broadcast Ticker */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-[#080808] border border-[#222222] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
          <Radio className="w-4 h-4" /> Option 5: Infinite Stadium Marquee Ticker
        </div>

        <div className="w-full bg-[#0a0a0a] border-y border-[#262626] py-3 overflow-hidden whitespace-nowrap group">
          <div className="inline-flex gap-8 animate-marquee group-hover:[animation-play-state:paused] text-xs font-bold uppercase tracking-widest text-[#aaaaaa]">
            <span>⚡ DELHI NCT COMMUNITY MATCHES ENROLLING NOW</span>
            <span className="text-red-600">///</span>
            <span>FIELD HOCKEY PRO SERIES STICKS BACK IN STORE</span>
            <span className="text-red-600">///</span>
            <span>NEXT TOURNAMENT ANNOUNCEMENT DROPPING FRIDAY</span>
            <span className="text-red-600">///</span>
            <span>UNLEASH YOUR ATHLETE — RISE OF THE REPUBLIC</span>
            <span className="text-red-600">///</span>
            <span>⚡ DELHI NCT COMMUNITY MATCHES ENROLLING NOW</span>
            <span className="text-red-600">///</span>
            <span>FIELD HOCKEY PRO SERIES STICKS BACK IN STORE</span>
            <span className="text-red-600">///</span>
            <span>NEXT TOURNAMENT ANNOUNCEMENT DROPPING FRIDAY</span>
            <span className="text-red-600">///</span>
            <span>UNLEASH YOUR ATHLETE — RISE OF THE REPUBLIC</span>
            <span className="text-red-600">///</span>
          </div>
        </div>
        <span className="text-[10px] text-[#666666] block">Hover over the ribbon above to pause the ticker.</span>
      </div>

    </div>
  );
};
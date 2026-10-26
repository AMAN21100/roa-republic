import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowRight } from 'lucide-react';

interface DiveDeeperProps {
  setCurrentTab: (tab: string) => void;
}

export const DiveDeeper: React.FC<DiveDeeperProps> = ({ setCurrentTab }) => {
  const cards = [
    { id: 'event', title: 'Upcoming Events', desc: 'Tournaments and announcements', img: '/images/img13.jpg' },
    { id: 'mny', title: 'Match Near You', desc: 'Local community arena games', img: '/images/img14.jpg' },
    { id: 'snews', title: 'Sports News', desc: 'Articles and competition highlights', img: '/images/img15.jpg' },
  ];

  return (
    <section className="mt-20 py-10 px-4 border border-[#222222] bg-[#0a0a0a] rounded-xl">
      <div className="text-center mb-8">
        <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Explore Further</span>
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mt-1">
          Dive Deeper
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((c) => (
          <div 
            key={c.id} 
            onClick={() => setCurrentTab(c.id)}
            className="group cursor-pointer bg-black border border-[#222222] hover:border-red-600 p-4 rounded-xl transition-all duration-200"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <ImagePlaceholder src={c.img} label={c.title} aspect="aspect-[16/10]" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white uppercase text-sm group-hover:text-red-600 transition-colors">
                  {c.title}
                </h4>
                <p className="text-xs text-[#888888]">{c.desc}</p>
              </div>
              <div className="p-2 rounded bg-[#181818] group-hover:bg-red-600 text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
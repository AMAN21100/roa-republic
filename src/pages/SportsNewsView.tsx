import React from 'react';
import { ImagePlaceholder } from '../components/imagePlaceholder';
import { DiveDeeper } from '../components/DiveDeeper';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsProps {
  setCurrentTab: (tab: string) => void;
}

export const SportsNewsView: React.FC<NewsProps> = ({ setCurrentTab }) => {
  const articles = [
    { id: 1, title: 'ARTICLE TITLE 1', headline: 'Tournament updates and regional match reviews', img: '/images/img8.jpg' },
    { id: 2, title: 'ARTICLE TITLE 2', headline: 'Grassroots sports equipment standards overview', img: '' },
    { id: 3, title: 'ARTICLE TITLE 3', headline: 'Strength and functional training conditioning', img: '' },
    { id: 4, title: 'ARTICLE TITLE 4', headline: 'Inter-district competition bracket release', img: '' },
    { id: 5, title: 'ARTICLE TITLE 5', headline: 'Youth athletics camp schedules and announcements', img: '' },
    { id: 6, title: 'ARTICLE TITLE 6', headline: 'High-intensity conditioning drills breakdown', img: '' },
  ];

  return (
    <div className="space-y-16">
      
      {/* Page Heading */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Dispatches</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Sports News
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          The heartbeat of competitive athletics, athlete spotlights, and tournament journalism.
        </p>
      </div>

      {/* Featured Lead Story */}
      <div 
        onClick={() => setCurrentTab('about')}
        className="cursor-pointer group rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-red-600 overflow-hidden p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-200"
      >
        <ImagePlaceholder src="/images/img8.jpg" label="Lead Headline Cover (img8.jpg)" aspect="aspect-[16/10]" />
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-red-600/20 text-red-600 border border-red-600/40 text-[10px] uppercase font-bold tracking-wider">
              Featured Story
            </span>
            <span className="text-xs text-[#888888] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 8 min read
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white group-hover:text-red-600 transition-colors">
            Rise of Modern Athletics: Speed & Agility Protocols
          </h2>
          <p className="text-xs md:text-sm text-[#aaaaaa] leading-relaxed">
            From grassroots camps to state championships, how youth competitors leverage functional conditioning to maximize physical resilience and performance.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 pt-2">
            Read Full Article <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer rounded-xl bg-[#0a0a0a] border border-[#222222] hover:border-red-600 p-4 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="overflow-hidden rounded-lg mb-3">
                <ImagePlaceholder 
                  src={item.img} 
                  label={item.title} 
                  aspect="aspect-[16/10]" 
                />
              </div>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block">
                Article
              </span>
              <h3 className="font-bold text-sm uppercase text-white group-hover:text-red-600 transition-colors mt-1">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-[#888888] line-clamp-2 mt-3 pt-3 border-t border-[#1a1a1a]">
              {item.headline}
            </p>
          </div>
        ))}
      </div>

      {/* Dive Deeper Section */}
      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
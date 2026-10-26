import React, { useState } from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Search, ShoppingCart, Tag } from 'lucide-react';
import { DiveDeeper } from '../components/DiveDeeper';

interface StoreProps {
  setCurrentTab: (tab: string) => void;
}

export const StoreView: React.FC<StoreProps> = ({ setCurrentTab }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'FIELD HOCKEY STICK', price: '₹4,499', tag: 'Hockey', img: '/images/img16.1.jpg' },
    { id: 2, name: 'REPUBLIC ELITE CLEATS', price: '₹6,299', tag: 'Football', img: '' },
    { id: 3, name: 'PERFORMANCE VEST', price: '₹1,899', tag: 'Apparel', img: '' },
    { id: 4, name: 'CARBON FIBER SHIN GUARDS', price: '₹1,299', tag: 'Gear', img: '' },
    { id: 5, name: 'HYDRATION FLASK', price: '₹899', tag: 'Accessories', img: '' },
    { id: 6, name: 'ROA TACTICAL DUFFLE', price: '₹3,199', tag: 'Luggage', img: '' },
  ];

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16">
      
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Performance Gear</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          ROA Store
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          &lt;&lt;&lt; UNLEASH YOUR ATHLETE &gt;&gt;&gt;
        </p>

        <div className="relative mt-6">
          <Search className="w-5 h-5 text-[#666666] absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search equipment, hockey sticks, apparel..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#111111] border border-[#222222] text-white placeholder-[#555555] text-sm focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div 
            key={item.id} 
            className="group rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-red-600 p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="overflow-hidden rounded-lg mb-4">
                <ImagePlaceholder src={item.img} label={item.name} aspect="aspect-[4/3]" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] uppercase font-bold text-[#aaaaaa] flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5 text-red-600" /> {item.tag}
                </span>
              </div>
              <h3 className="font-extrabold text-sm uppercase text-white group-hover:text-red-600 transition-colors">
                {item.name}
              </h3>
            </div>

            <div className="pt-4 mt-4 border-t border-[#1a1a1a] flex items-center justify-between">
              <span className="text-base font-black text-white">{item.price}</span>
              <button className="p-2.5 rounded bg-red-600 hover:bg-red-700 text-white transition-colors">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
import React, { useState } from 'react';
import { MapPin, Calendar, Users, Filter, Compass } from 'lucide-react';
import { DiveDeeper } from '../components/DiveDeeper';

interface MnyProps {
  setCurrentTab: (tab: string) => void;
}

export const MnyView: React.FC<MnyProps> = ({ setCurrentTab }) => {
  const [cityFilter, setCityFilter] = useState('All');

  const matches = [
    { id: 1, sport: 'Field Hockey', arena: 'Major Dhyan Chand Stadium', city: 'Delhi', date: 'Tomorrow, 5:00 PM', players: '16/22' },
    { id: 2, sport: 'Football (7v7)', arena: 'Thyagaraj Sports Complex Turf', city: 'Delhi', date: 'Sat, 6:30 AM', players: '12/14' },
    { id: 3, sport: 'Basketball 3v3', arena: 'District Arena Court 2', city: 'Noida', date: 'Sun, 4:00 PM', players: '5/6' },
    { id: 4, sport: 'Athletic Sprints', arena: 'Jawaharlal Nehru Stadium Track', city: 'Delhi', date: 'Next Tue, 6:00 AM', players: 'Open' },
  ];

  return (
    <div className="space-y-16">
      
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Local Fixtures</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Match Near You
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          Find, join, and schedule competitive pick-up matches and sports activities across your zone.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0c0c0c] border border-[#222222]">
        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
          <Compass className="w-4 h-4 text-red-600" /> Current Geo Zone: India NCT Region
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#888888]" />
          {['All', 'Delhi', 'Noida'].map((city) => (
            <button
              key={city}
              onClick={() => setCityFilter(city)}
              className={`px-3 py-1.5 rounded text-xs font-bold uppercase transition-colors ${
                cityFilter === city
                  ? 'bg-red-600 text-white'
                  : 'bg-[#181818] text-[#aaaaaa] hover:text-white'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches
          .filter(m => cityFilter === 'All' || m.city === cityFilter)
          .map((m) => (
            <div 
              key={m.id}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-[#222222] hover:border-red-600 transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#141414] text-red-600 border border-red-600/30 text-xs font-bold uppercase tracking-wider">
                  {m.sport}
                </span>
                <span className="text-xs text-[#888888] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-red-600" /> {m.players} Attending
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white uppercase">{m.arena}</h3>
                <div className="flex items-center gap-4 text-xs text-[#888888] mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-600" /> {m.city}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-red-600" /> {m.date}</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded bg-[#161616] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-[#262626]">
                Join Match Squad
              </button>
            </div>
          ))}
      </div>

      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
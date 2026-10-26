import React from 'react';
import { ImagePlaceholder } from '../components/imagePlaceholder';
import { DiveDeeper } from '../components/DiveDeeper';
import { ShieldCheck, Target, Zap } from 'lucide-react';

interface AboutProps {
  setCurrentTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutProps> = ({ setCurrentTab }) => {
  return (
    <div className="space-y-16">
      
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Manifesto</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          About ROA
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          Rise of the Republic — Unleashing Athletic Discipline Across the Nation.
        </p>
      </div>

      <div className="rounded-2xl bg-[#080808] border border-[#222222] p-6 md:p-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0f0f0f] border border-[#1e1e1e] space-y-3">
            <Target className="w-6 h-6 text-red-600" />
            <h3 className="font-bold text-sm uppercase text-white">Our Mission</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Empowering athletes from grassroots regional academies through accessible equipment, media coverage, and live match scheduling.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f0f0f] border border-[#1e1e1e] space-y-3">
            <Zap className="w-6 h-6 text-red-600" />
            <h3 className="font-bold text-sm uppercase text-white">High Performance</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Equipping every competitor with high-grade technical tools engineered for agility, endurance, and physical safety.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f0f0f] border border-[#1e1e1e] space-y-3">
            <ShieldCheck className="w-6 h-6 text-red-600" />
            <h3 className="font-bold text-sm uppercase text-white">The Republic</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Forging a connected network of sports clubs, school grounds, and athletes across every district.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 space-y-6">
          <ImagePlaceholder src="/images/ASSET.png" label="Academy & Performance Center (ASSET.png)" aspect="aspect-[21/9]" />
          <p className="text-[#aaaaaa] text-sm leading-relaxed max-w-4xl mx-auto text-justify">
            ROA was built to bridge the gap between local enthusiasm and professional athletic rigor. Whether on field hockey turfs, synthetic athletics tracks, or municipal football fields, we stand for discipline, speed, and uncompromising athletic integrity.
          </p>
          <ImagePlaceholder src="/images/ASSET.png" label="Community Athletic Showcase (ASSET.png)" aspect="aspect-[21/9]" />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-[#222222]">
        <ImagePlaceholder src="/images/5.png" label="Banner (5.png)" aspect="aspect-[21/9]" />
      </div>

      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
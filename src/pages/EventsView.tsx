import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { DiveDeeper } from '../components/DiveDeeper';

interface EventsProps {
  setCurrentTab: (tab: string) => void;
}

export const EventsView: React.FC<EventsProps> = ({ setCurrentTab }) => {
  return (
    <div className="space-y-16">
      
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Calendar & Moments</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Date & Announcements
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          Visual chronicles and match schedules from our latest championship events.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ImagePlaceholder src="/images/ney1.jpg" label="Event Shot 1 (ney1.jpg)" aspect="aspect-[16/10]" />
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder src="/images/ney2.jpg" label="Event Shot 2 (ney2.jpg)" aspect="aspect-[16/10]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <ImagePlaceholder src="/images/ney3.jpg" label="Event Shot 3 (ney3.jpg)" aspect="aspect-[16/10]" />
          </div>
          <div className="md:col-span-8">
            <ImagePlaceholder src="/images/ney4.jpg" label="Event Shot 4 (ney4.jpg)" aspect="aspect-[16/10]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6">
            <ImagePlaceholder src="/images/ney5.jpg" label="Event Shot 5 (ney5.jpg)" aspect="aspect-[16/10]" />
          </div>
          <div className="md:col-span-6">
            <ImagePlaceholder src="/images/ney6.jpg" label="Event Shot 6 (ney6.jpg)" aspect="aspect-[16/10]" />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-[#222222]">
        <ImagePlaceholder src="/images/5.png" label="Banner (5.png)" aspect="aspect-[21/9]" />
      </div>

      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};
import React from 'react';

export const StadiumTicker: React.FC = () => {
  const tickerText = [
    "⚡ REGIONAL MATCHES ENROLLING ACROSS ALL ZONES",
    "NEW DROP: PERFORMANCE SHIN GUARDS & STICKS RESTOCKED",
    "INTER-DISTRICT TOURNAMENT SCHEDULE LIVE",
    "UNLEASH YOUR ATHLETE — RISE OF THE REPUBLIC",
  ];

  return (
    <div className="w-full bg-[#080808] border-b border-[#222222] py-2.5 overflow-hidden whitespace-nowrap group select-none">
      <div className="inline-flex gap-8 animate-marquee group-hover:[animation-play-state:paused] text-xs font-black tracking-widest text-[#888888] uppercase">
        {Array.from({ length: 4 }).map((_, i) => (
          <React.Fragment key={i}>
            {tickerText.map((text, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className="hover:text-white transition-colors">{text}</span>
                <span className="text-red-600 font-mono font-bold">///</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
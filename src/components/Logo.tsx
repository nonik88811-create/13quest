import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const dimensions = {
    sm: { circle: 'w-10 h-10', num: 'text-xl', quest: 'text-[8px]' },
    md: { circle: 'w-14 h-14', num: 'text-2xl', quest: 'text-[10px]' },
    lg: { circle: 'w-20 h-20', num: 'text-4xl', quest: 'text-xs' },
    xl: { circle: 'w-32 h-32', num: 'text-6xl', quest: 'text-base' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Exact circular emblem based on the uploaded QUEST 13 logo */}
      <div
        className={`relative ${dimensions.circle} rounded-full flex flex-col items-center justify-center 
        bg-radial from-neutral-900 via-neutral-950 to-black 
        border-2 border-red-700 ring-2 ring-red-950/80 shadow-[0_0_20px_rgba(220,38,38,0.5)] 
        transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] overflow-hidden group`}
      >
        {/* Subtle inner dark vignette & texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/60 via-black/80 to-black pointer-events-none" />
        
        {/* Subtle eerie red ambient glow inside */}
        <div className="absolute inset-0 bg-red-600/10 blur-sm rounded-full pointer-events-none group-hover:bg-red-600/20 transition-all duration-500" />

        {/* Big Red 3D 13 */}
        <span
          className={`relative z-10 font-black tracking-tighter text-red-600 leading-none ${dimensions.num}`}
          style={{
            fontFamily: "'Cinzel', 'Montserrat', sans-serif",
            textShadow: '2px 2px 0 #450a0a, -1px -1px 0 #1c1917, 0 0 12px rgba(220, 38, 38, 0.8)',
          }}
        >
          13
        </span>

        {/* Crisp White Bold QUEST */}
        <span
          className={`relative z-10 font-black tracking-widest text-neutral-100 uppercase leading-none mt-0.5 ${dimensions.quest}`}
          style={{
            letterSpacing: '0.22em',
            textShadow: '0 0 6px rgba(255, 255, 255, 0.8), 1px 1px 2px #000',
          }}
        >
          QUEST
        </span>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-widest text-white text-lg font-cinzel">
              QUEST
            </span>
            <span className="font-black text-red-600 text-xl font-cinzel drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">
              13
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
            Tashkent • 700 m²
          </span>
        </div>
      )}
    </div>
  );
};

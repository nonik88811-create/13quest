import React from 'react';
import { Maximize2, Clock, Users, Brain, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface StatsSectionProps {
  currentLang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const statsCards = [
    {
      icon: Maximize2,
      value: t.stats.areaValue,
      label: t.stats.areaLabel,
      description: t.stats.areaDesc,
      glowColor: 'from-red-600/20 to-red-950/40',
      borderColor: 'border-red-800/60',
      badge: 'TOP 1 ТАШКЕНТ',
    },
    {
      icon: Clock,
      value: t.stats.timeValue,
      label: t.stats.timeLabel,
      description: t.stats.timeDesc,
      glowColor: 'from-amber-600/10 to-neutral-900',
      borderColor: 'border-neutral-800 hover:border-amber-700/60',
      badge: '60 - 90 МИН',
    },
    {
      icon: Users,
      value: t.stats.playersValue,
      label: t.stats.playersLabel,
      description: t.stats.playersDesc,
      glowColor: 'from-neutral-800 to-neutral-900',
      borderColor: 'border-neutral-800 hover:border-red-700/60',
      badge: 'БОЛЬШИЕ КОМАНДЫ',
    },
    {
      icon: Brain,
      value: t.stats.logicValue,
      label: t.stats.logicLabel,
      description: t.stats.logicDesc,
      glowColor: 'from-purple-950/30 to-neutral-900',
      borderColor: 'border-neutral-800 hover:border-purple-700/60',
      badge: 'ИНТЕЛЛЕКТ & ЛОГИКА',
    },
  ];

  return (
    <section id="specs" className="relative py-20 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
      {/* Background glow dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-500 bg-red-950/60 border border-red-800/60 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>QUEST 13 В ЦИФРАХ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-cinzel tracking-wide mb-3">
            {t.stats.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            {t.stats.subtitle}
          </p>
        </div>

        {/* 4 Key Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative group rounded-2xl bg-gradient-to-b ${card.glowColor} p-6 sm:p-7 border ${card.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900/90 text-neutral-400 border border-neutral-800">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel mb-1 tracking-tight group-hover:text-red-400 transition-colors">
                    {card.value}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3 font-mono">
                    {card.label}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-3 border-t border-neutral-800/80">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

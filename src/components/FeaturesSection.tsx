import React from 'react';
import { Maximize, Brain, ShieldAlert, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesSectionProps {
  currentLang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize':
        return <Maximize className="w-6 h-6 text-red-500" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="relative py-20 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.features.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-cinzel mb-3">
            {t.features.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-red-900/60 hover:bg-neutral-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-cinzel group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Гарантия погружения</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

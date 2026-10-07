import React from 'react';
import { Calendar, ChevronDown, Send, Sparkles, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO, SCENARIO_IMAGES } from '../data/translations';
import { AudioAmbience } from './AudioAmbience';
import { Logo } from './Logo';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Zoom & Drift Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={SCENARIO_IMAGES.hero}
          alt="QUEST 13 Horror Quest Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate] filter brightness-65 contrast-125"
        />

        {/* Dynamic Dark Horror Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
        <div className="absolute inset-0 bg-red-950/20 mix-blend-color-burn" />

        {/* Animated Fog Drift Effects */}
        <div className="absolute inset-0 opacity-25 animate-fog pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15),_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges & Ambience Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-700/60 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>{t.hero.badge}</span>
          </div>

          <AudioAmbience
            onLabel={t.hero.soundOn}
            offLabel={t.hero.soundOff}
          />
        </div>

        {/* Emblem Showcase */}
        <div className="mb-6 animate-pulse-red rounded-full p-1 inline-block">
          <Logo size="lg" showText={false} />
        </div>

        {/* Main Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white font-cinzel leading-none mb-4">
          <span className="block text-neutral-300 text-xl sm:text-3xl md:text-4xl font-normal tracking-widest mb-2 font-mono">
            {t.hero.titleFirst}
          </span>
          <span className="text-red-600 text-glow-red inline-block transition-transform hover:scale-105 duration-300">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Professional Atmospheric Welcome Greeting Card */}
        <div className="relative max-w-3xl mx-auto my-6 p-6 sm:p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-red-900/40 shadow-[0_0_35px_rgba(0,0,0,0.8)] text-left group hover:border-red-700/60 transition-all duration-500">
          <div className="absolute -top-3.5 left-6 bg-red-950 border border-red-700 text-red-300 text-[11px] font-bold px-3 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow">
            <AlertTriangle className="w-3 h-3 text-red-400" />
            <span>ПРИВЕТСТВИЕ ОРГАНИЗАТОРА</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-red-500 font-cinzel mb-3 tracking-wide text-glow-red">
            {t.hero.proGreetingTitle}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            {t.hero.proGreetingText}
          </p>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>Администрация QUEST 13</span>
            <span className="text-red-400">Ташкент, ул. Бобура, 73/А</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-medium mb-8">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl">
          <button
            onClick={onOpenBooking}
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-700 via-red-600 to-red-800 hover:from-red-600 hover:to-red-700 shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:shadow-[0_0_40px_rgba(239,68,68,0.9)] border border-red-500 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.hero.bookNow}</span>
          </button>

          <a
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-sky-600/60 hover:border-sky-400 text-sky-400 hover:text-sky-300 shadow-lg transition-all"
          >
            <Send className="w-5 h-5 text-sky-400" />
            <span>{t.hero.telegramQuick}</span>
          </a>

          <a
            href="#scenarios"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-neutral-300 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-700 hover:text-white transition-all"
          >
            <span>{t.hero.exploreScenarios}</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#specs"
          className="mt-12 inline-flex flex-col items-center text-neutral-500 hover:text-red-400 transition-colors animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

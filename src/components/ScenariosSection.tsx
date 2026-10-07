import React, { useState } from 'react';
import { Skull, Clock, Users, Brain, Flame, ArrowRight, Eye, X } from 'lucide-react';
import { Language, Scenario } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ScenariosSectionProps {
  currentLang: Language;
  onSelectScenarioForBooking: (scenarioTitle: string) => void;
}

export const ScenariosSection: React.FC<ScenariosSectionProps> = ({
  currentLang,
  onSelectScenarioForBooking,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeModalScenario, setActiveModalScenario] = useState<Scenario | null>(null);

  return (
    <section id="scenarios" className="relative py-24 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-900/40 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-500 bg-red-950/80 border border-red-800/80 mb-3 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <Skull className="w-3.5 h-3.5" />
            <span>{t.scenariosSection.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-cinzel tracking-wider mb-4">
            {t.scenariosSection.title}
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.scenariosSection.subtitle}
          </p>
        </div>

        {/* 4 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {t.scenariosList.map((scenario) => (
            <div
              key={scenario.id}
              className="group relative rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-red-700/80 overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-85 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute inset-0 bg-red-950/10 mix-blend-color-burn" />

                {/* Genre & Age Limit badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono uppercase bg-black/80 backdrop-blur-md text-red-400 border border-red-900/60 shadow">
                    {scenario.genre}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-black font-mono bg-red-950/90 backdrop-blur-md text-red-300 border border-red-700 shadow">
                    {scenario.ageLimit}
                  </span>
                </div>

                {/* Fear Level Rating Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-neutral-700 text-amber-500">
                  <Flame className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                  <span className="text-xs font-bold font-mono text-white">
                    {scenario.fearLevel}/5
                  </span>
                </div>

                {/* Exact Required User Quote Styled with dramatic red glow */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-red-900/50 shadow-lg">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-red-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{t.scenariosSection.quoteLabel}</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold italic text-red-200 text-glow-red leading-snug">
                    {scenario.quote}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel mb-2 group-hover:text-red-500 transition-colors">
                    {scenario.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                    {scenario.shortDesc}
                  </p>

                  {/* Spec Pills */}
                  <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 mb-6 text-center text-xs">
                    <div className="flex flex-col items-center justify-center p-1">
                      <Clock className="w-4 h-4 text-amber-500 mb-1" />
                      <span className="text-[10px] text-neutral-400 font-mono">{t.scenariosSection.duration}</span>
                      <span className="font-bold text-neutral-200">{scenario.duration}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1 border-x border-neutral-800">
                      <Users className="w-4 h-4 text-sky-400 mb-1" />
                      <span className="text-[10px] text-neutral-400 font-mono">{t.scenariosSection.playersCount}</span>
                      <span className="font-bold text-neutral-200">{scenario.players}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1">
                      <Brain className="w-4 h-4 text-purple-400 mb-1" />
                      <span className="text-[10px] text-neutral-400 font-mono">{t.scenariosSection.logicLevel}</span>
                      <span className="font-bold text-neutral-200">{scenario.logicLevel}/5</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveModalScenario(scenario)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-700/80 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.scenariosSection.detailsBtn}</span>
                  </button>

                  <button
                    onClick={() => onSelectScenarioForBooking(scenario.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] border border-red-500 transition-all cursor-pointer"
                  >
                    <span>{t.scenariosSection.bookScenario}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Detail Modal */}
      {activeModalScenario && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-950 border border-red-900/80 shadow-[0_0_50px_rgba(220,38,38,0.3)] overflow-hidden my-8">
            <button
              onClick={() => setActiveModalScenario(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-neutral-400 hover:text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video">
              <img
                src={activeModalScenario.image}
                alt={activeModalScenario.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-red-900/80 text-red-200 border border-red-700">
                  {activeModalScenario.genre}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel mt-2">
                  {activeModalScenario.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="p-4 rounded-xl bg-neutral-900 border border-red-900/60">
                <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 block mb-1">
                  Цитата из сценария
                </span>
                <p className="text-base sm:text-lg font-bold italic text-red-300 text-glow-red">
                  {activeModalScenario.quote}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                  Сюжетная линия:
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {activeModalScenario.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center text-xs">
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block">Время</span>
                  <span className="font-bold text-white text-sm">{activeModalScenario.duration}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block">Игроки</span>
                  <span className="font-bold text-white text-sm">{activeModalScenario.players}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block">Уровень страха</span>
                  <span className="font-bold text-red-400 text-sm">{activeModalScenario.fearLevel} / 5</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block">Логика</span>
                  <span className="font-bold text-purple-400 text-sm">{activeModalScenario.logicLevel} / 5</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveModalScenario(null)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-neutral-400 bg-neutral-900 hover:text-white border border-neutral-800 transition-colors"
                >
                  Закрыть
                </button>
                <button
                  onClick={() => {
                    const title = activeModalScenario.title;
                    setActiveModalScenario(null);
                    onSelectScenarioForBooking(title);
                  }}
                  className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all cursor-pointer"
                >
                  Забронировать «{activeModalScenario.title}»
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

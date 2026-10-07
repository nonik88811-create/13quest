/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { Language } from './types';
import { CONTACT_INFO } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ScenariosSection } from './components/ScenariosSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedScenarioForBooking, setSelectedScenarioForBooking] = useState<string | undefined>();

  const handleOpenBooking = (scenarioTitle?: string) => {
    setSelectedScenarioForBooking(scenarioTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedScenarioForBooking(undefined);
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-700 selection:text-white flex flex-col">
      {/* Google Sites style responsive navigation bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section with Animated Welcome Greeting */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Quest 13 Key Specs: 700m², 1-1.5h, 4-16 players, logical puzzles */}
        <StatsSection currentLang={currentLang} />

        {/* 4 Horror Scenarios with exact required quotes and photos */}
        <ScenariosSection
          currentLang={currentLang}
          onSelectScenarioForBooking={(title) => handleOpenBooking(title)}
        />

        {/* Why Choose Us & Gameplay Features */}
        <FeaturesSection currentLang={currentLang} />

        {/* Interactive Reviews Section with user submission capability */}
        <ReviewsSection currentLang={currentLang} />

        {/* Location Section at the very end of the site with 1 photo, address, and contacts */}
        <LocationSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        currentLang={currentLang}
        preselectedScenario={selectedScenarioForBooking}
      />

      {/* Floating Action Buttons for instant mobile/desktop booking */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={CONTACT_INFO.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Написать в Telegram @quest13uz"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-[0_4px_20px_rgba(2,132,199,0.5)] border border-sky-400/40 transition-transform hover:scale-105 group"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Telegram
          </span>
        </a>

        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          title="Позвонить: +998(98) 808 55 88"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(5,150,105,0.5)] border border-emerald-400/40 transition-transform hover:scale-105 group"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            +998(98) 808 55 88
          </span>
        </a>
      </div>
    </div>
  );
}

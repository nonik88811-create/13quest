import React from 'react';
import { Send, Instagram, Phone, MapPin, AlertOctagon, Heart } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-600 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-bold">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#scenarios" className="hover:text-red-400 transition-colors">
                  {t.nav.scenarios}
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-red-400 transition-colors">
                  {t.nav.specs}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-red-400 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-400 transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Scenarios */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-bold">
              Сценарии
            </h4>
            <ul className="space-y-2 text-xs">
              {t.scenariosList.map((sc) => (
                <li key={sc.id}>
                  <a href="#scenarios" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-600" />
                    <span>{sc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-bold">
              Контакты
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}, {CONTACT_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                  {CONTACT_INFO.telegram}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  @{CONTACT_INFO.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Warning banner */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 mb-8 flex items-start gap-3 text-xs text-neutral-400">
          <AlertOctagon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-light">
            {t.footer.warning}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} QUEST 13. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Сделано для любителей хоррора</span>
            <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 inline" />
            <span>в Ташкенте</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

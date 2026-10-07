import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Send, Calendar, Globe, Share2, Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data/translations';
import { Logo } from './Logo';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.scenarios, href: '#scenarios' },
    { label: t.nav.specs, href: '#specs' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.location, href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Logo size="md" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/60 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Languages, Social, Booking */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher Buttons */}
            <div className="flex items-center bg-neutral-900/80 border border-neutral-800 rounded-lg p-0.5 shadow-inner">
              <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-neutral-500" />
              {(['ru', 'uz', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md uppercase transition-all duration-200 ${
                    currentLang === lang
                      ? 'bg-red-700 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Share / Copy URL button */}
            <button
              type="button"
              onClick={handleShare}
              title="Скопировать ссылку на сайт"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-700 hover:text-white hover:border-neutral-500 rounded-lg transition-all cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Скопировано!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-red-500" />
                  <span className="hidden xl:inline">13quest</span>
                </>
              )}
            </button>

            {/* Telegram Link */}
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 hover:border-sky-500 hover:text-sky-400 hover:bg-neutral-850 rounded-lg transition-all"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>t.me/quest13uz</span>
            </a>

            {/* Phone Link */}
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 hover:border-emerald-500 hover:text-emerald-400 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">{CONTACT_INFO.phone}</span>
            </a>

            {/* Booking CTA Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 border border-red-500/50 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookBtn}</span>
            </button>
          </div>

          {/* Mobile menu button and quick lang */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Lang Switcher on Mobile */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-md p-0.5">
              {(['ru', 'uz', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded uppercase ${
                    currentLang === lang ? 'bg-red-700 text-white' : 'text-neutral-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-red-400 hover:bg-neutral-900 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg text-center"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Ссылка скопирована!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-red-500" />
                  <span>Поделиться сайтом 13quest</span>
                </>
              )}
            </button>

            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-sky-950/60 border border-sky-800/80 rounded-lg text-center"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Telegram: {CONTACT_INFO.telegram}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-950/60 border border-emerald-800/80 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-pointer"
            >
              {t.nav.bookBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

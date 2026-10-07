import React, { useState } from 'react';
import { X, Send, Phone, Calendar as CalendarIcon, Users, Clock, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedScenario?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedScenario,
}) => {
  const t = TRANSLATIONS[currentLang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scenario, setScenario] = useState(preselectedScenario || t.scenariosList[0]?.title || '');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('18:00');
  const [players, setPlayers] = useState(6);
  const [contactLevel, setContactLevel] = useState<'light' | 'medium' | 'hard'>('medium');

  if (!isOpen) return null;

  const handleTelegramBook = (e: React.FormEvent) => {
    e.preventDefault();
    const contactLevelText = t.bookingModal.contactLevels[contactLevel];
    const textMsg = encodeURIComponent(
      `Здравствуйте! Хочу забронировать квест в QUEST 13 🦇\n\n` +
      `📌 Сценарий: ${scenario}\n` +
      `📅 Дата: ${date}\n` +
      `⏰ Время: ${timeSlot}\n` +
      `👥 Количество игроков: ${players} чел.\n` +
      `⚡ Уровень контакта: ${contactLevelText}\n` +
      `👤 Имя: ${name || 'Гость'}\n` +
      `📞 Телефон: ${phone || 'Не указан'}`
    );

    window.open(`https://t.me/quest13uz?text=${textMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-neutral-950 border border-red-900/80 shadow-[0_0_60px_rgba(220,38,38,0.35)] p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-red-500 font-bold mb-1">
            QUEST 13 • ТАШКЕНТ • 700 М²
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
            {t.bookingModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {t.bookingModal.subtitle}
          </p>
        </div>

        <form onSubmit={handleTelegramBook} className="space-y-4">
          {/* Scenario Selection */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
              {t.bookingModal.scenario} *
            </label>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
            >
              {t.scenariosList.map((sc) => (
                <option key={sc.id} value={sc.title}>
                  {sc.title} ({sc.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-300 mb-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-red-500" />
                <span>{t.bookingModal.date}</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-300 mb-1.5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>{t.bookingModal.timeSlot}</span>
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              >
                {['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '01:30'].map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Players Slider (4 - 16 players) */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-300">
                <Users className="w-3.5 h-3.5 text-red-500" />
                <span>{t.bookingModal.players}</span>
              </label>
              <span className="text-sm font-bold text-red-400 font-mono">
                {players} игроков
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="16"
              value={players}
              onChange={(e) => setPlayers(parseInt(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>Мин: 4 чел</span>
              <span>Макс: 16 чел</span>
            </div>
          </div>

          {/* Contact Level selection */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-300 mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>{t.bookingModal.contactLevel}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['light', 'medium', 'hard'] as const).map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setContactLevel(level)}
                  className={`p-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all text-center ${
                    contactLevel === level
                      ? 'bg-red-950/80 text-red-300 border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  {level === 'light' ? 'Лайт' : level === 'medium' ? 'Медиум' : 'Хард'}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-neutral-400 mt-1.5 italic">
              {t.bookingModal.contactLevels[contactLevel]}
            </p>
          </div>

          {/* User Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                {t.bookingModal.name} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                {t.bookingModal.phone} *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <p className="text-[11px] text-neutral-400 leading-normal">
            {t.bookingModal.note}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 shadow-[0_0_15px_rgba(2,132,199,0.5)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.bookingModal.sendTelegram}</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-850 border border-emerald-600/70 text-emerald-400 hover:text-emerald-300 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{t.bookingModal.callDirect}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

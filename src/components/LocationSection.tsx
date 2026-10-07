import React, { useState } from 'react';
import { MapPin, Phone, Send, Instagram, Navigation, ExternalLink, Clock, X, Check, Copy } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, CONTACT_INFO, SCENARIO_IMAGES } from '../data/translations';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [showGMapGuide, setShowGMapGuide] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mapViewMode, setMapViewMode] = useState<'google' | 'photo'>('google');

  const businessData = `Название: QUEST 13 - Хоррор Квесты в Ташкенте
Категория: Квест-комната (Escape Room / Amusement Center)
Адрес: Узбекистан, г. Ташкент, Яккасарайский район, улица Бобура, 73/А
Телефон: +998 (98) 808 55 88
Сайт: https://t.me/quest13uz
Время работы: Ежедневно 11:00 – 03:00`;

  const copyBusinessInfo = () => {
    navigator.clipboard.writeText(businessData);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="relative py-24 bg-black border-t border-neutral-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-950/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-500 bg-red-950/80 border border-red-800/80 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.locationSection.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-cinzel tracking-wider mb-4">
            {t.locationSection.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            {t.locationSection.subtitle}
          </p>
        </div>

        {/* Location Showcase Card: 1 Photo at the end of the site + Interactive contact panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Google Maps & Tactical Location Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-red-900/60 shadow-[0_0_40px_rgba(220,38,38,0.2)] bg-neutral-950 flex flex-col justify-between">
            {/* View Switcher Tabs Header */}
            <div className="flex items-center justify-between p-3 bg-neutral-900/90 border-b border-neutral-800">
              <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-lg border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setMapViewMode('google')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapViewMode === 'google'
                      ? 'bg-red-700 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps (Интерактивная)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMapViewMode('photo')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapViewMode === 'photo'
                      ? 'bg-red-700 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Схема проезда (Фото)</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                Ташкент, ул. Бобура, 73/А
              </span>
            </div>

            {/* Map Content Viewport */}
            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[480px] bg-neutral-900 overflow-hidden">
              {mapViewMode === 'google' ? (
                /* Seamless Interactive Google Maps Embed iframe */
                <iframe
                  title="QUEST 13 - Google Maps: ул. Бобура 73/А, Ташкент"
                  src="https://maps.google.com/maps?q=Tashkent,+Bobur+street+73A&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 filter contrast-105"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                /* Stylized Tactical Photo Card */
                <div className="relative w-full h-full group">
                  <img
                    src={SCENARIO_IMAGES.location}
                    alt="Локация QUEST 13: Ташкент, ул. Бобура, 73/А"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-red-800/80 shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                      <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                        QUEST 13 • ЛОКАЦИЯ
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-1 font-cinzel">
                      {CONTACT_INFO.address}, {CONTACT_INFO.city}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Navigation Buttons Bar */}
            <div className="p-3 bg-neutral-950 border-t border-neutral-800/80 flex flex-wrap gap-2">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-neutral-900 text-sky-400 hover:text-white hover:bg-sky-700/80 border border-neutral-700 transition-colors shadow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Открыть в Google Maps</span>
              </a>

              <a
                href={CONTACT_INFO.yandexUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-neutral-900 text-neutral-100 hover:text-white hover:bg-red-900/90 border border-neutral-700 transition-colors shadow"
              >
                <Navigation className="w-3.5 h-3.5 text-red-500" />
                <span>Яндекс Карты</span>
              </a>

              <a
                href={CONTACT_INFO.twoGisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-neutral-900 text-neutral-100 hover:text-white hover:bg-emerald-900/90 border border-neutral-700 transition-colors shadow"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>2GIS</span>
              </a>
            </div>

            {/* Quick Helper Button to Add to Google Maps */}
            <div className="px-4 py-2.5 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Хотите зарегистрировать точку в Google Картах?</span>
              <button
                type="button"
                onClick={() => setShowGMapGuide(true)}
                className="text-red-400 hover:text-red-300 font-bold underline cursor-pointer"
              >
                Пошаговая инструкция
              </button>
            </div>
          </div>

          {/* Contact Details & Direct Telegram / Phone Links */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-cinzel mb-4">
                Свяжитесь с нами
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-red-950/80 text-red-500 border border-red-900">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      {t.locationSection.addressLabel}
                    </span>
                    <span className="font-bold text-white text-base">
                      {CONTACT_INFO.address}, {CONTACT_INFO.city}
                    </span>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {t.locationSection.metroValue}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2 rounded-lg bg-neutral-800 text-amber-500 border border-neutral-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      {t.locationSection.hoursLabel}
                    </span>
                    <span className="font-semibold text-neutral-200">
                      {t.locationSection.hoursValue}
                    </span>
                  </div>
                </div>

                {/* Direct Telegram link (Required: t.me/quest13uz) */}
                <a
                  href={CONTACT_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-sky-950/70 to-neutral-900 border border-sky-800/80 hover:border-sky-500 text-white transition-all group shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-900/80 text-sky-400 group-hover:scale-110 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-sky-400 tracking-wider block">
                        Официальный Telegram канал и бронь
                      </span>
                      <span className="font-bold text-base text-white">
                        {CONTACT_INFO.telegram}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone link (Required: +998(98) 808 55 88) */}
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-neutral-900 border border-emerald-800/80 hover:border-emerald-500 text-white transition-all group shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-900/80 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block">
                        {t.locationSection.phoneLabel}
                      </span>
                      <span className="font-bold text-base text-white">
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Вызов
                  </span>
                </a>

                {/* Instagram link (Required: 13quest_) */}
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-pink-950/70 to-neutral-900 border border-pink-800/80 hover:border-pink-500 text-white transition-all group shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-900/80 text-pink-400 group-hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-pink-400 tracking-wider block">
                        Instagram
                      </span>
                      <span className="font-bold text-base text-white">
                        @{CONTACT_INFO.instagram}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Написать администратору в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Addition Guide Modal */}
      {showGMapGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-950 border border-red-900/80 shadow-[0_0_60px_rgba(220,38,38,0.4)] p-6 sm:p-8 my-8 text-neutral-200">
            <button
              onClick={() => setShowGMapGuide(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-red-500 text-xs font-mono font-bold uppercase tracking-widest mb-1">
              <MapPin className="w-4 h-4" />
              <span>ИНСТРУКЦИЯ ДЛЯ ВЛАДЕЛЬЦА</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-cinzel mb-2">
              Как добавить QUEST 13 в Google Карты
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Чтобы ваш квест появился на Google Maps и привлекал клиентов при поиске «квесты в Ташкенте», добавьте его через официальный сервис <strong className="text-white">Google Мой Бизнес (Google Business Profile)</strong>:
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Перейдите в Google Business Profile</h4>
                  <p className="text-neutral-400 text-xs">
                    Откройте сервис управления компаниями Google и войдите под вашим рабочим Google аккаунтом:
                  </p>
                  <a
                    href="https://business.google.com/create"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-sky-400 hover:text-sky-300 underline"
                  >
                    <span>Открыть business.google.com/create</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Укажите готовые данные компании:</h4>
                  <p className="text-neutral-400 text-xs mb-3">
                    Используйте точные данные, подготовленные для карточки:
                  </p>

                  <div className="p-3 rounded-lg bg-black/80 font-mono text-xs text-neutral-300 space-y-1 border border-neutral-800">
                    <div><span className="text-red-400">Название:</span> QUEST 13 - Хоррор Квесты в Ташкенте</div>
                    <div><span className="text-red-400">Категория:</span> Квест-комната (Escape Room)</div>
                    <div><span className="text-red-400">Адрес:</span> ул. Бобура, 73/А, Ташкент</div>
                    <div><span className="text-red-400">Телефон:</span> +998 (98) 808 55 88</div>
                    <div><span className="text-red-400">Сайт:</span> https://t.me/quest13uz</div>
                    <div><span className="text-red-400">Режим работы:</span> 11:00 – 03:00</div>
                  </div>

                  <button
                    onClick={copyBusinessInfo}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Скопировано в буфер!' : 'Скопировать все данные'}</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Поставьте маркер на карте</h4>
                  <p className="text-neutral-400 text-xs">
                    В окне карты переместите красный пин на перекресток улицы Бобура, 73/А в Ташкенте.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Загрузите фотографии</h4>
                  <p className="text-neutral-400 text-xs">
                    Прикрепите логотип QUEST 13, фото вывески и атмосферные фотографии квестов («Дом восковых фигур», «Дом забытых душ», «Не дыши»).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800">
              <a
                href="https://www.google.com/maps/place/add"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 shadow-md"
              >
                <span>Быстро добавить через Google Карты</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowGMapGuide(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-400 bg-neutral-900 hover:text-white"
              >
                Понятно, закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

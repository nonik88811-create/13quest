import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, User, X } from 'lucide-react';
import { Language, Review } from '../types';
import { TRANSLATIONS, INITIAL_REVIEWS } from '../data/translations';

interface ReviewsSectionProps {
  currentLang: Language;
}

const STORAGE_KEY = 'quest13_user_reviews';

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [scenario, setScenario] = useState('');
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load persistent reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch {
      // Fallback to initial reviews
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `user-${Date.now()}`,
      author: author.trim(),
      rating,
      date: currentLang === 'ru' ? 'Только что' : currentLang === 'uz' ? 'Hozirgina' : 'Just now',
      scenario: scenario || (t.scenariosList[0]?.title ?? 'QUEST 13'),
      text: text.trim(),
      verified: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    // Save to localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const userList = saved ? JSON.parse(saved) : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newReview, ...userList]));
    } catch {}

    // Reset and close
    setAuthor('');
    setText('');
    setRating(5);
    setIsModalOpen(false);

    // Show toast
    setToastMessage(t.reviewsSection.successMessage);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <section id="reviews" className="relative py-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and Add Review CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-3">
              <Star className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              <span>{t.reviewsSection.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cinzel mb-2">
              {t.reviewsSection.title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              {t.reviewsSection.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{t.reviewsSection.ratingAverage}</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{t.reviewsSection.leaveReviewBtn}</span>
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {toastMessage && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-950/80 border border-emerald-600 text-emerald-200 flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-red-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-500 font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-cinzel">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-red-400 font-semibold">{rev.scenario}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light italic">
                  «{rev.text}»
                </p>
              </div>

              {rev.verified && (
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  <span>{t.reviewsSection.verifiedPlayer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leave Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-2xl bg-neutral-950 border border-red-900/80 shadow-[0_0_50px_rgba(220,38,38,0.3)] p-6 sm:p-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-cinzel mb-1">
              {t.reviewsSection.modalTitle}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              {t.reviewsSection.modalDesc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  {t.reviewsSection.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder={t.reviewsSection.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  {t.reviewsSection.scenarioLabel}
                </label>
                <select
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600"
                >
                  <option value="">-- Выберите пройденный квест --</option>
                  {t.scenariosList.map((sc) => (
                    <option key={sc.id} value={sc.title}>
                      {sc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  {t.reviewsSection.ratingLabel}
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 transition-transform hover:scale-125 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-mono text-neutral-400">
                    ({rating} из 5)
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  {t.reviewsSection.commentLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={t.reviewsSection.commentPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-400 bg-neutral-900 hover:text-white border border-neutral-800"
                >
                  {t.reviewsSection.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all cursor-pointer"
                >
                  {t.reviewsSection.submitBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

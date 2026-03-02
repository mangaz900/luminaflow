import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: 1, name: "Sofia, 42, Stockholm", rating: 5, comment: "Efter 3 veckor kände jag en tydlig fasthet på låren. Vecka 5 såg min man skillnaden utan att jag sa något. Jag är imponerad.", avatar: "" },
  { id: 2, name: "Maria, 38, Göteborg", rating: 5, comment: "Jag har provat massageroller, krämer och allt möjligt. LuminaFlow är det enda som faktiskt verkar fungera på strukturen. Huden ser märkbart jämnare ut.", avatar: "" },
  { id: 3, name: "Karin, 55, Malmö", rating: 5, comment: "Värvärmen och vakuumkänslan är behaglig. Inte smärtsamt alls, bara en mjuk drag-känsla. Ser resultat efter 4 veckor.", avatar: "" },
  { id: 4, name: "Anna, 47, Uppsala", rating: 5, comment: "Använder den 3 gånger i veckan som rekommenderat. Redan vecka 3 kunde jag se att huden blivit fastare. Mycket nöjd.", avatar: "" },
  { id: 5, name: "Petra, 33", rating: 4, comment: "Tar tid, men man ser skillnad. Jag märkte förbättringar runt vecka 4. Designen är snygg och enkel att använda.", avatar: "" },
  { id: 6, name: "Lena, 50, Helsingborg", rating: 5, comment: "Har haft celluliter sen tonåren. Inget har fungerat. LuminaFlow gav mig synliga resultat för första gången. Jag är chockad och glad.", avatar: "" },
  { id: 7, name: "Emma, 44", rating: 5, comment: "Otroligt enkel att använda. 10 minuter på låren och sedan klart. Huden känns stramare direkt efter och över tid ser man tydlig förbättring.", avatar: "" },
  { id: 8, name: "Åsa, 39, Linköping", rating: 5, comment: "Begriplig logik bakom produkten. Den jobbar med strukturen, inte bara ytan. Det ger mig förtroende och resultaten bekräftar det.", avatar: "" },
  { id: 9, name: "Cecilia, 46", rating: 5, comment: "Värmefunktionen är underbar. Huden känns varmare och lösare efter behandling. Ser resultat efter 5 veckor kontinuerlig användning.", avatar: "" },
  { id: 10, name: "Ulrika, 52, Västerås", rating: 4, comment: "Bra produkt med tydlig känsla av att strukturen påverkas. Märker förbättring efter 4 veckor. Skulle önska lite snabbare resultat men förstår att det tar tid.", avatar: "" },
];


const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Show 1 review on mobile, 3 on desktop
  const getReviewsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1;
    }
    return 1; // Default to mobile
  };

  const [reviewsPerView, setReviewsPerView] = useState(getReviewsPerView());

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerView(getReviewsPerView());
      // Reset index when switching between mobile/desktop
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - reviewsPerView);

  const nextReviews = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Swipe Logic - lägre tröskel för mobil för bättre känsla
  const minSwipeDistance = 30;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextReviews();
    }
    if (isRightSwipe) {
      prevReviews();
    }
  };

  // Calculate average rating (4.8)
  const averageRating = 4.8;
  const totalReviews = reviews.length;

  return (
    <section id="recensioner" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-center text-medical-900 mb-4">Från kvinnor som varit där</h2>

        {/* Rating Overview */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={`${i < Math.floor(averageRating) ? 'text-gold-400 fill-gold-400' : i < averageRating ? 'text-gold-400 fill-gold-400 opacity-50' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-4xl font-bold text-medical-900">{averageRating}</span>
          </div>
          <p className="text-gray-600 text-sm md:text-base">Baserat på {totalReviews} recensioner</p>
        </div>

        <p className="text-center text-gray-500 mb-16">Riktiga resultat från verifierade köpare.</p>

        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full md:min-w-[33.333%] px-2 md:px-4"
              >
                <div className="bg-[#F9FAFB] p-4 md:p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-medical-200 transition-all relative h-full">
                  <Quote className="absolute top-6 right-6 text-medical-200" size={40} />

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed italic text-sm md:text-base min-h-[80px] md:min-h-[100px]">"{review.comment}"</p>

                  <div>
                    <p className="font-bold text-medical-900 text-sm mb-1">{review.name}</p>
                    <p className="text-xs text-green-600 font-medium">Verifierad köpare</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReviews}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg transition-all z-10 hidden md:flex items-center justify-center"
            aria-label="Föregående recensioner"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReviews}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg transition-all z-10 hidden md:flex items-center justify-center"
            aria-label="Nästa recensioner"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? 'w-6 h-1.5 bg-medical-900'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-medical-400'
                }`}
              aria-label={`Gå till recension ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Lena, 52",
    rating: 5,
    comment: "Jag vågade knappt gå till frisören förut för jag skämdes över mina tunna vikar. Efter 3 månader med Lumina frågade min frisör vad jag gjort. Håret känns äntligen levande igen.",
    avatar: ""
  },
  {
    id: 2,
    name: "Maria, 46",
    rating: 5,
    comment: "Tappade massor av hår i duschen pga stress. Var skeptisk till 'oljor' men denna är inte fet alls. Nu stannar håret på huvudet och jag ser små strån växa ut vid pannan.",
    avatar: ""
  },
  {
    id: 3,
    name: "Susanne K.",
    rating: 4,
    comment: "Enkel att använda, vilket var avgörande för mig. Har använt den i 4 månader nu och skillnaden på kronan är tydlig. Önskar jag hittat denna tidigare.",
    avatar: ""
  },
  {
    id: 4,
    name: "Anna, 44",
    rating: 5,
    comment: "Efter min graviditet tappade jag så mycket hår. Lumina har varit min räddning. Efter 2 månader började jag se resultat och nu efter 4 månader är håret betydligt tjockare.",
    avatar: ""
  },
  {
    id: 5,
    name: "Karin, 50",
    rating: 5,
    comment: "Jag har provat allt från apoteket men inget hjälpte. Lumina är den första produkten som faktiskt fungerar. Min hårbotten ser inte längre ut som en väg och jag känner mig så mycket mer självsäker.",
    avatar: ""
  },
  {
    id: 6,
    name: "Eva, 48",
    rating: 5,
    comment: "Klimakteriet tog verkligen på mitt hår. Jag var desperat när jag hittade Lumina. Nu, efter 3 månader, ser jag faktiskt nytt hår växa ut. Det är fantastiskt!",
    avatar: ""
  },
  {
    id: 7,
    name: "Sara, 39",
    rating: 5,
    comment: "Efter min andra graviditet tappade jag hår i handfullar. Lumina har gett mig hopp igen. Efter 5 månader ser jag tydlig förbättring och håret känns starkare.",
    avatar: ""
  },
  {
    id: 8,
    name: "Ingrid, 55",
    rating: 5,
    comment: "Jag trodde att det bara var åldern som gjorde att håret tunnades. Men Lumina har bevisat att det finns hopp. Min hårbotten är mycket tätare nu.",
    avatar: ""
  },
  {
    id: 9,
    name: "Monica, 43",
    rating: 5,
    comment: "Stress på jobbet gjorde att jag tappade så mycket hår. Lumina har varit min räddning. Nu tappar jag nästan inget hår alls och ser nytt hår växa.",
    avatar: ""
  },
  {
    id: 10,
    name: "Helena, 47",
    rating: 4,
    comment: "Bra produkt, enkel att använda. Ser lite förbättring efter 2 månader. Fortsätter att använda för att se mer resultat.",
    avatar: ""
  },
  {
    id: 11,
    name: "Kristina, 51",
    rating: 5,
    comment: "Jag har använt Lumina i 6 månader nu och skillnaden är enorm. Min frisör frågade vad jag gjort - håret är så mycket tjockare!",
    avatar: ""
  },
  {
    id: 12,
    name: "Birgitta, 49",
    rating: 5,
    comment: "Efter klimakteriet blev håret så tunt. Lumina har gett mig tillbaka mitt självförtroende. Jag ser faktiskt resultat i spegeln nu.",
    avatar: ""
  },
  {
    id: 13,
    name: "Camilla, 41",
    rating: 5,
    comment: "Amning tog verkligen på mitt hår. Lumina har hjälpt mig att få tillbaka håret. Efter 4 månader är skillnaden tydlig.",
    avatar: ""
  },
  {
    id: 14,
    name: "Petra, 45",
    rating: 4,
    comment: "Fungerar bra, men det tar tid att se resultat. Efter 3 månader börjar jag se förbättring. Rekommenderar att vara tålmodig.",
    avatar: ""
  },
  {
    id: 15,
    name: "Marianne, 53",
    rating: 5,
    comment: "Jag har provat så många produkter men inget hjälpte. Lumina är den första som faktiskt fungerar. Håret känns levande igen!",
    avatar: ""
  },
  {
    id: 16,
    name: "Elisabeth, 46",
    rating: 5,
    comment: "Perfekt för min vardag - tar bara en minut. Efter 3 månader ser jag små strån växa ut vid tinningarna. Så glad att jag hittade detta!",
    avatar: ""
  },
  {
    id: 17,
    name: "Gunilla, 50",
    rating: 5,
    comment: "Min hårbotten var så tunn att jag skämdes. Nu, efter 5 månader med Lumina, täcker håret mycket bättre. Jag känner mig som mig själv igen.",
    avatar: ""
  },
  {
    id: 18,
    name: "Louise, 42",
    rating: 5,
    comment: "Efter min tredje graviditet tappade jag massor av hår. Lumina har varit fantastisk. Håret är nu betydligt tjockare än förut.",
    avatar: ""
  },
  {
    id: 19,
    name: "Katarina, 48",
    rating: 4,
    comment: "Bra produkt, men resultatet tar tid. Efter 4 månader ser jag lite förbättring. Fortsätter att använda och hoppas på mer resultat.",
    avatar: ""
  },
  {
    id: 20,
    name: "Jenny, 44",
    rating: 5,
    comment: "Jag var så skeptisk men Lumina har överträffat mina förväntningar. Efter 3 månader ser jag tydlig förbättring. Bästa köpet jag gjort!",
    avatar: ""
  }
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
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
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
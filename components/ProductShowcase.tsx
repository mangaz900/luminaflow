
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // BYT UT DESSA LÄNKAR MOT DINA EGNA BILDER
  // Lägg dina bilder i public-mappen och ändra src till "/bildnamn.jpg"
  const slides = [
    {
      id: 1,
      // Produktbild (Roll-on)
      src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80", 
      alt: "Lumina Growth Serum Roll-on",
      badge: "Bäst i test"
    },
    {
      id: 2,
      // Kliniska studier (Exempelbild på labb/textur)
      src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      alt: "Kliniska studier resultat",
      overlayText: "98% Såg resultat"
    },
    {
      id: 3,
      // Applikator / Ingredienser
      src: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      alt: "Ingredienser och Applikator",
    },
    {
      id: 4,
      // Varför Original (Teknologi)
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      alt: "Varför Lumina fungerar bättre",
    },
    {
      id: 5,
      // Före/Efter bild 1
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      alt: "Före och Efter Resultat",
      badge: "Resultat"
    },
    {
      id: 6,
      // Före/Efter bild 2
      src: "https://images.unsplash.com/photo-1595476103518-3c8bed022ac3?auto=format&fit=crop&w=800&q=80",
      alt: "Före och Efter Resultat",
      badge: "Resultat"
    }
  ];

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Swipe Logic
  const minSwipeDistance = 50;

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
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-medical-900 mb-2">Resultat & Vetenskap</h2>
          <p className="text-gray-600 text-sm">Svep för att se före/efter och studier.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-md mx-auto">
          
          {/* Main Slider Frame */}
          <div 
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 group"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image Track */}
            <div 
              className="flex w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full h-full relative">
                  <img 
                    src={slide.src} 
                    alt={slide.alt} 
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  
                  {/* Dark Overlay Gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-900/20 to-transparent pointer-events-none"></div>

                  {/* Badge (Top Right) */}
                  {slide.badge && (
                    <div className="absolute top-4 right-4 bg-medical-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg z-10">
                      {slide.badge}
                    </div>
                  )}

                  {/* Text Overlay (Bottom Center) - Optional */}
                   {slide.overlayText && (
                    <div className="absolute bottom-20 left-0 right-0 text-center z-10">
                       <span className="bg-white/90 backdrop-blur-md text-medical-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                         {slide.overlayText}
                       </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Desktop) */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0 z-20 hidden md:block"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0 z-20 hidden md:block"
            >
              <ChevronRight size={24} />
            </button>

            {/* PERSISTENT REVIEW OVERLAY (Den "dära" recensionen) */}
            <div className="absolute bottom-4 left-4 right-4 z-30">
                <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 cursor-pointer hover:bg-white transition-colors">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" 
                            alt="Reviewer" 
                            className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-full border border-white">
                            <ShieldCheck size={8} />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex text-gold-400 mb-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={10} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-xs font-bold text-gray-900 truncate">"Håret känns äntligen levande igen"</p>
                        <p className="text-[10px] text-gray-500">Lena, verifierad köpare</p>
                    </div>
                </div>
            </div>

          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-6 h-1.5 bg-medical-900' 
                    : 'w-1.5 h-1.5 bg-gray-300 hover:bg-medical-400'
                }`}
                aria-label={`Gå till bild ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

import React, { useState } from 'react';
import { Star, ShieldCheck, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Produktbilder - BYT UT DESSA URL:ER MOT DINA EGNA BILDER
  // Lägg dina bilder i public-mappen eller använd externa URL:er
  const productImages = [
    {
      id: 1,
      src: "/produkt-flaska-sten.jpg", // Produktbild: Klar glasflaska på sten med rosmarin
      alt: "Lumina Growth Serum Roll-on - Produktbild"
    },
    {
      id: 2,
      src: "/produkt-kliniska-studier.jpg", // Produktbild med kliniska studieresultat
      alt: "Kliniska studieresultat - 98% såg resultat"
    },
    {
      id: 3,
      src: "/produkt-ingredienser.jpg", // Produktbild med ingredienser och funktioner
      alt: "Ingredienser: 3% Rosmarin, Redensyl, Aminexil & Anagain"
    },
    {
      id: 4,
      src: "/produkt-original.jpg", // Varför original är bättre - Titanium ball
      alt: "Varför ORIGINAL HairFlow Pro fungerar bättre"
    },
    {
      id: 5,
      src: "/fore-efter-1.jpg", // Före/Efter bild 1
      alt: "Före och efter resultat - Tjockare hår"
    },
    {
      id: 6,
      src: "/fore-efter-2.jpg", // Före/Efter bild 2
      alt: "Före och efter resultat - Fylligare hår"
    },
    {
      id: 7,
      src: "/kvinna-applicerar.jpg", // Kvinna som applicerar produkten
      alt: "Så använder du Lumina Growth Serum Roll-on"
    }
  ];

  // Navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
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
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm border border-gray-100">
              <div className="flex text-gold-400">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={12} className="md:w-[14px] md:h-[14px]" fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide">Över 12 000 nöjda kvinnor</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-medical-900 leading-tight">
              Återupptäck ditt <br />
              <span className="italic text-medical-500">fylliga hår</span> – utan kompromisser.
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Den första serumlösningen med <strong>3% Rosmarin, Redensyl, Aminexil & Anagain™</strong>. Kliniskt bevisad effekt för kvinnor som har provat allt men inte vill ge upp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#erbjudande" className="bg-medical-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-medical-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>Välj ditt paket</span>
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-2 px-4 py-4">
                  <ShieldCheck size={18} className="text-medical-500" />
                  <span className="text-sm font-medium text-gray-600">Testa riskfritt i 90 dagar</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Synligt tjockare hår på 90 dagar</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Hormonfri & Skonsam formula</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-medical-500" /> 90 Dagars Nöjd-Kund-Garanti</span>
            </div>
          </div>

          {/* Product Image Gallery - Swipeable */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute top-10 right-10 -z-10 w-72 h-72 bg-medical-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Main Product Image Carousel */}
              <div className="relative aspect-square">
                <div 
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {productImages.map((image, index) => (
                    <div key={image.id} className="min-w-full h-full relative flex items-center justify-center">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        draggable={false}
                        onError={(e) => {
                          // Fallback om bilden inte finns
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x800?text=Produktbild";
                        }}
                      />
                      
                      {/* BÄST I TEST Badge - Bara på första bilden */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4 bg-medical-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg z-10">
                          BÄST I TEST
                        </div>
                      )}
                   
                      {/* Recension - Bara på första bilden */}
                      {index === 0 && (
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 z-10">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" 
                                alt="Recensent" 
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
                              <p className="text-xs font-bold text-gray-900">"Håret känns äntligen levande igen"</p>
                              <p className="text-[10px] text-gray-500">Lena, verifierad köpare</p>
                            </div>
                      </div>
                   </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows (Desktop) */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden md:flex items-center justify-center"
                  aria-label="Föregående bild"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden md:flex items-center justify-center"
                  aria-label="Nästa bild"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter - Flyttas till vänster på första bilden för att inte krocka med BÄST I TEST */}
                <div className={`absolute top-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium z-10 ${
                  currentImageIndex === 0 ? 'left-4' : 'right-4'
                }`}>
                  {currentImageIndex + 1} / {productImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation (Under bilderna) */}
            <div className="flex justify-center gap-2 mt-4 px-2 flex-wrap">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`
                    relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200
                    ${currentImageIndex === index 
                      ? 'ring-2 ring-medical-900 opacity-100 scale-105' 
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }
                  `}
                  aria-label={`Visa bild ${index + 1}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x100?text=Thumb";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
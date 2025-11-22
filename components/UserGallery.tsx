import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const UserGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const userStories = [
    {
      id: 1,
      image: "/kvinna-applicerar-1.jpg",
      name: "Lena, 52",
      age: "Stockholm",
      rating: 5,
      quote: "Jag trodde aldrig att något skulle fungera efter klimakteriet. Men Lumina har gett mig tillbaka mitt självförtroende. Håret känns faktiskt tjockare och jag ser nya strån växa ut vid tinningarna.",
      testimonial: "Efter 3 månader frågade min frisör vad jag gjort. Det känns så bra att äntligen kunna vara stolt över mitt hår igen."
    },
    {
      id: 2,
      image: "/kvinna-applicerar-2.jpg",
      name: "Maria, 46",
      age: "Göteborg",
      rating: 5,
      quote: "Stressen på jobbet gjorde att jag tappade hår i handfullar. Jag var skeptisk till 'oljor' men Lumina är inte fet alls. Nu stannar håret på huvudet och jag ser små strån växa ut vid pannan.",
      testimonial: "Det tar bara 60 sekunder om dagen. Perfekt för en stressad mamma som mig. Nu känner jag mig som mig själv igen."
    },
    {
      id: 3,
      image: "/kvinna-applicerar-3.jpg",
      name: "Susanne, 58",
      age: "Malmö",
      rating: 5,
      quote: "Jag har provat allt – från dyra salongbehandlingar till oljor. Inget hjälpte. Lumina är den första produkten som faktiskt fungerar. Skillnaden på kronan är tydlig efter bara 2 månader.",
      testimonial: "Enkel att använda, vilket var avgörande för mig. Nu önskar jag bara att jag hittat denna tidigare. Det är aldrig för sent."
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === userStories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? userStories.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-medical-900 mb-3 md:mb-4">
            Så enkelt är det
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Se hur kvinnor som du använder Lumina i sin vardag – och resultaten de fått.
          </p>
        </div>

        {/* Main Gallery Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto md:h-[500px] lg:h-[600px]">
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={userStories[currentIndex].image}
                    alt={`${userStories[currentIndex].name} använder Lumina`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Användarbild";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevStory}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Föregående bild"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextStory}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-900 p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Nästa bild"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                    {currentIndex + 1} / {userStories.length}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={`md:w-5 md:h-5 ${i < userStories[currentIndex].rating ? 'text-gold-400 fill-gold-400' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 italic">
                    "{userStories[currentIndex].quote}"
                  </p>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                    {userStories[currentIndex].testimonial}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-medical-100 flex items-center justify-center">
                      <span className="text-2xl font-serif text-medical-900">
                        {userStories[currentIndex].name.split(',')[0][0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-medical-900 text-lg">
                        {userStories[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {userStories[currentIndex].age} • Verifierad köpare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {userStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200
                  ${currentIndex === index 
                    ? 'border-medical-900 shadow-lg scale-110' 
                    : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                  }
                `}
                aria-label={`Visa ${story.name}`}
              >
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x100?text=Thumb";
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGallery;


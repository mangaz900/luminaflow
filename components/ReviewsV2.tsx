import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviewsV2: Review[] = [
    {
        id: 1,
        name: "Lennart, 58, Göteborg",
        rating: 5,
        comment: "Jag är 58. På bara några år tappade jag massor av densitet i kronan och började alltid se hårbotten i starkt ljus. Jag fick höra att det var 'normalt' och att jag fick acceptera det. Efter 10 veckor med Lumina ser jag små nya strån när jag kollar nära—och framför allt: mindre hår i duschen. För första gången på länge känner jag mig som mig själv igen.",
        avatar: ""
    },
    {
        id: 2,
        name: "Martin, 62, Stockholm",
        rating: 5,
        comment: "Jag väntade i flera år innan jag gjorde något. Tänkte att det skulle plana ut, men det blev bara tunnare—särskilt på hjässan. Efter 12 veckor med Lumina ser jag att kronan inte lyser igenom lika mycket i overhead-ljus. Önskar jag hade börjat tidigare.",
        avatar: ""
    },
    {
        id: 3,
        name: "Kalle, 54, Malmö",
        rating: 5,
        comment: "Min frisör märkte skillnaden efter 8 veckor innan jag ens sa något. 'Det är mer täckning här bak—har du bytt rutin?' Det var ärligt talat det bästa jag hört på länge.",
        avatar: ""
    },
    {
        id: 4,
        name: "Andreas, 44",
        rating: 5,
        comment: "Efter en period med mycket stress tappade jag hår över hela huvudet. Lumina blev min comeback. Efter 2 månader märkte jag mindre shedding och efter 4 månader känns håret tydligt tjockare vid rötterna.",
        avatar: ""
    },
    {
        id: 5,
        name: "Bengt, 56, Uppsala",
        rating: 5,
        comment: "Det blev så tunt vid hjässan att jag började skämmas i vissa vinklar och ljus. Lumina har gett mig tillbaka självförtroendet. Efter 5 månader ser jag skillnad i spegeln och på bilder.",
        avatar: ""
    },
    {
        id: 6,
        name: "Erik, 51, Linköping",
        rating: 5,
        comment: "Jag märkte att hårfästet började krypa och att kronan syntes mer och mer. Jag var desperat när jag hittade Lumina. Nu efter 3 månader ser jag nya små strån och betydligt mindre hår i avloppet.",
        avatar: ""
    },
    {
        id: 7,
        name: "Simon, 39",
        rating: 5,
        comment: "Jag började tappa hår i perioder och paniken tog över. Lumina gav mig hopp igen. Efter 5 månader ser jag tydlig förbättring och håret känns starkare när jag stylar det.",
        avatar: ""
    },
    {
        id: 8,
        name: "Ingvar, 59, Västerås",
        rating: 5,
        comment: "Jag trodde det bara var åldern, men det var frustrerande hur snabbt densiteten försvann. Lumina har bevisat för mig att man faktiskt kan göra något åt det. Kronan ser tätare ut nu, särskilt i starkt ljus.",
        avatar: ""
    },
    {
        id: 9,
        name: "Magnus, 43",
        rating: 5,
        comment: "Stress på jobbet gjorde att jag tappade mycket hår. Lumina har varit min räddning. Nu tappar jag nästan inget jämfört med förut och ser nya strån komma tillbaka vid tinningarna.",
        avatar: ""
    },
    {
        id: 10,
        name: "Henrik, 47",
        rating: 4,
        comment: "Bra produkt och enkel att använda. Ser lite förbättring efter 2 månader. Fortsätter för att ge det en ärlig chans över 90 dagar.",
        avatar: ""
    },
    {
        id: 11,
        name: "Kristoffer, 53, Örebro",
        rating: 5,
        comment: "Jag har använt Lumina i 6 månader och skillnaden är enorm. Jag tappade mycket i kronan och nu ser det betydligt jämnare ut. Min frisör frågade rakt ut vad jag gjort—håret känns mycket tjockare.",
        avatar: ""
    },
    {
        id: 12,
        name: "Marcel, 57, Helsingborg",
        rating: 5,
        comment: "Det tunnades ut så mycket att jag började se äldre ut än jag kände mig. Jag fick höra 'det är normalt i din ålder' men ingen gav en lösning som kändes rimlig. Lumina har gett mig tillbaka självförtroendet—skillnaden syns faktiskt nu.",
        avatar: ""
    },
    {
        id: 13,
        name: "Carl, 41",
        rating: 5,
        comment: "Jag har alltid haft tjockt hår, så när det började tunnas blev jag chockad. Lumina har hjälpt mig få tillbaka känslan av ‘mer hår’ igen. Efter 4 månader är skillnaden tydlig när jag kollar i spegeln.",
        avatar: ""
    },
    {
        id: 14,
        name: "Patrik, 45",
        rating: 4,
        comment: "Funkar bra, men det tar tid. Efter 3 månader började jag se förbättring och mindre shedding. Rekommenderar att vara tålmodig och faktiskt köra rutinen varje dag.",
        avatar: ""
    },
    {
        id: 15,
        name: "Gunnar, 60, Lund",
        rating: 5,
        comment: "Jag har provat massor—schampon, oljor, allt möjligt. Inget höll i längden. Lumina är första grejen som känns som att den gör skillnad, och dessutom förstör den inte min styling.",
        avatar: ""
    },
    {
        id: 16,
        name: "Elias, 46",
        rating: 5,
        comment: "Perfekt i vardagen—tar typ en minut och känns inte kladdig. Efter 3 månader ser jag små strån växa ut vid tinningarna. Väldigt nöjd att jag började när jag gjorde det.",
        avatar: ""
    },
    {
        id: 17,
        name: "Anton, 55, Umeå",
        rating: 5,
        comment: "Hjässan var så tunn att jag började undvika vissa ljus och vinklar. Nu efter 5 månader med Lumina täcker håret mycket bättre. Jag känner mig som mig själv igen.",
        avatar: ""
    },
    {
        id: 18,
        name: "Louie, 42",
        rating: 5,
        comment: "Jag var trött på att se mer och mer hårbotten varje år. Lumina har varit grymt bra för mig. Håret känns nu betydligt tjockare än innan jag började.",
        avatar: ""
    },
    {
        id: 19,
        name: "Klas, 48",
        rating: 4,
        comment: "Bra produkt, men resultat tar tid. Efter 4 månader ser jag lite förbättring och fortsätter för att få ännu bättre densitet.",
        avatar: ""
    },
    {
        id: 20,
        name: "Jens, 44",
        rating: 5,
        comment: "Jag var skeptisk, men Lumina har överträffat mina förväntningar. Efter 3 månader ser jag tydlig förbättring—framför allt mindre hår i duschen och bättre täckning i starkt ljus. Bästa köpet jag gjort.",
        avatar: ""
    }
];

const ReviewsV2: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const getReviewsPerView = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 768 ? 3 : 1;
        }
        return 1;
    };

    const [reviewsPerView, setReviewsPerView] = useState(getReviewsPerView());

    useEffect(() => {
        const handleResize = () => {
            setReviewsPerView(getReviewsPerView());
            setCurrentIndex(0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, reviewsV2.length - reviewsPerView);

    const nextReviews = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevReviews = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

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

        if (isLeftSwipe) nextReviews();
        if (isRightSwipe) prevReviews();
    };

    const averageRating = 4.8;
    const totalReviews = reviewsV2.length;

    return (
        <section id="recensioner" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-4xl text-center text-medical-900 mb-4">Från män som varit där</h2>

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
                    <p className="text-gray-600 text-sm md:text-base">Baserat på 20 recensioner</p>
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
                        {reviewsV2.map((review) => (
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

export default ReviewsV2;

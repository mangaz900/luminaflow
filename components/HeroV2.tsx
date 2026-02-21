import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Star, ShieldCheck, Check, ChevronLeft, ChevronRight, ShoppingBag, Truck, Package, RefreshCw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeroV2Props {
    title?: string;
    subtitle?: string;
    badge?: string;
}

const HeroV2: React.FC<HeroV2Props> = ({
    title = "Ett hårserum för män utvecklat för att vara enkelt, diskret och utan kladd.",
    subtitle = "Väck vilande hårsäckar med vår avancerade roll-on formula. Inga piller. Ingen kladd. 90 dagars garanti",
    badge = "Över 12 000 nöjda användare"
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [selectedPackageId, setSelectedPackageId] = useState<number>(2); // Default to "MEST POPULÄR"
    const navigate = useNavigate();
    const location = useLocation();
    const { addToCart } = useCart();

    const productImages = [
        {
            id: 1,
            src: "/produkt-flaska-sten.jpg",
            alt: "Lumina Growth Serum Roll-on - Produktbild"
        },
        {
            id: 2,
            src: "/produkt-kliniska-studier.jpg",
            alt: "Kliniska studieresultat - 98% såg resultat"
        },
        {
            id: 3,
            src: "/produkt-ingredienser.jpg",
            alt: "Ingredienser: 3% Rosmarin, Redensyl, Aminexil & Anagain"
        },
        {
            id: 4,
            src: "/produkt-original.jpg",
            alt: "Varför ORIGINAL HairFlow Pro fungerar bättre"
        },
        {
            id: 5,
            src: "/30.jpg",
            alt: "Före och efter resultat - Manlig användare"
        },
        {
            id: 6,
            src: "/31.jpg",
            alt: "Före och efter resultat - Manlig användare"
        }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
    };

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
        if (isLeftSwipe) nextImage();
        if (isRightSwipe) prevImage();
    };

    return (
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 md:order-1 space-y-6 md:space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm border border-gray-100">
                            <div className="flex text-gold-400">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} size={12} className="md:w-[14px] md:h-[14px]" fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide">{badge}</span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-medical-900 leading-tight">
                            {title}
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                            {subtitle}
                        </p>

                        {/* Inline Pricing - Package Selection */}
                        <div className="mt-8 w-full max-w-lg">
                            <h3 className="font-serif text-2xl text-medical-900 mb-6 text-center">Välj ditt paket</h3>

                            <div className="flex flex-col gap-4 mb-6">
                                {[
                                    {
                                        id: 1,
                                        quantity: 1,
                                        title: "KÖP 1",
                                        subtitle: "Startpaketet",
                                        price: 399,
                                        originalPrice: 798,
                                        discountLabel: "50% RABATT",
                                        tag: null,
                                    },
                                    {
                                        id: 2,
                                        quantity: 3,
                                        title: "KÖP 3 BETALA FÖR 2",
                                        subtitle: "Behandlingskur",
                                        price: 798,
                                        originalPrice: 2394,
                                        discountLabel: "SPARA 67%",
                                        tag: "MEST POPULÄR",
                                    },
                                    {
                                        id: 3,
                                        quantity: 6,
                                        title: "KÖP 3 FÅ 3 EXTRA",
                                        subtitle: "Storpack",
                                        price: 999,
                                        originalPrice: 4788,
                                        discountLabel: "SPARA 79%",
                                        tag: "MEST VÄRDE",
                                    }
                                ].map((option) => {
                                    const isSelected = selectedPackageId === option.id;

                                    return (
                                        <div
                                            key={option.id}
                                            onClick={() => setSelectedPackageId(option.id)}
                                            className={`
                        relative flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 select-none
                        ${isSelected
                                                    ? 'border-medical-900 bg-white shadow-lg'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                }
                      `}
                                        >
                                            {option.tag && (
                                                <div className="absolute -top-3 right-6 z-20">
                                                    <span className="bg-medical-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                                        {option.tag}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex-shrink-0 mr-5">
                                                <div className={`
                          w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                          ${isSelected ? 'border-medical-900' : 'border-gray-300'}
                        `}>
                                                    {isSelected && (
                                                        <div className="w-3 h-3 bg-medical-900 rounded-full" />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-medical-900 text-lg leading-none">
                                                        {option.title}
                                                    </h4>
                                                    {option.discountLabel && (
                                                        <span className="bg-gray-100 text-medical-900 text-[10px] font-bold px-2 py-0.5 rounded">
                                                            {option.discountLabel}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-500 font-medium">
                                                    {option.subtitle}
                                                </p>
                                            </div>

                                            <div className="text-right pl-2">
                                                <div className="text-xs text-gray-400 line-through decoration-red-400 decoration-1 mb-0.5">
                                                    {option.originalPrice} kr
                                                </div>
                                                <div className="text-xl font-bold text-[#DC2626] leading-none">
                                                    {option.price} kr
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => {
                                    const selectedOption = [
                                        { id: 1, quantity: 1, title: "KÖP 1", subtitle: "Startpaket", price: 399 },
                                        { id: 2, quantity: 3, title: "KÖP 3 BETALA FÖR 2", subtitle: "Behandlingskur", price: 798 },
                                        { id: 3, quantity: 6, title: "KÖP 3 FÅ 3 EXTRA", subtitle: "Storpack", price: 999 }
                                    ].find(o => o.id === selectedPackageId);

                                    if (selectedOption) {
                                        addToCart(selectedOption as any);
                                    }
                                }}
                                className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-medical-800 transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                <ShoppingBag size={20} />
                                <span>Lägg till i varukorg</span>
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-600 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <Truck size={18} /> Gratis frakt
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Package size={18} /> 2-7 dagar leverans
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <RefreshCw size={18} /> 90 dagars garanti
                                </span>
                            </div>

                            {/* Klarna Banner */}
                            <div className="mt-4 flex items-center justify-between bg-[#FFB3C7] px-5 py-3 rounded-xl">
                                <span className="font-bold text-black text-sm">Köp nu. Betala senare Klarna.</span>
                                <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-md tracking-tight">Klarna.</span>
                            </div>

                            {/* Urgency */}
                            <p className="mt-3 text-center text-[#DC2626] font-semibold text-sm">Få kvar i lager!</p>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="order-1 md:order-2 relative">
                        <div className="absolute top-10 right-10 -z-10 w-72 h-72 bg-medical-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl group"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
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
                                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x800?text=Produktbild";
                                                }}
                                            />
                                            {index === 0 && (
                                                <div className="absolute top-4 right-4 bg-medical-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg z-10">
                                                    BÄST I TEST
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hidden md:flex"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hidden md:flex"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-4 px-2 overflow-x-auto scrollbar-hide">
                            {productImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`
                    flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all
                    ${currentImageIndex === index ? 'ring-2 ring-medical-900 scale-105' : 'opacity-60'}
                  `}
                                >
                                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroV2;

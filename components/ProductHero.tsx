import React, { useState } from 'react';
import { Check, ShoppingBag, Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductHero: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number>(2); // Default to option 2 (Best Seller)
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const { addToCart } = useCart();

    const options = [
        {
            id: 1,
            quantity: 1,
            title: "1-Pack",
            subtitle: "Startpaket",
            price: 399,
            originalPrice: 798,
            discountLabel: "50% RABATT",
            tag: null,
        },
        {
            id: 2,
            quantity: 3,
            title: "3-Pack",
            subtitle: "Behandlingskur",
            price: 798,
            originalPrice: 2394,
            discountLabel: "SPARA 67%",
            tag: "MEST POPULÄR",
        },
        {
            id: 3,
            quantity: 6,
            title: "6-Pack",
            subtitle: "Storpack",
            price: 999,
            originalPrice: 4788,
            discountLabel: "SPARA 79%",
            tag: "MEST VÄRDE",
        }
    ];

    const images = [
        "/produkt-hero.jpg",
        "/fore-efter-1.jpg",
        "/fore-efter-2.jpg",
        "/kvinna-applicerar-3.jpg"
    ];

    const handleAddToCart = () => {
        const selectedOption = options.find(o => o.id === selectedId);
        if (selectedOption) {
            addToCart({
                id: selectedOption.id,
                quantity: selectedOption.quantity,
                title: selectedOption.title,
                subtitle: selectedOption.subtitle,
                price: selectedOption.price,
                originalPrice: selectedOption.originalPrice,
            });
        }
    };

    const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="flex flex-col lg:flex-row">

                {/* LEFT COLUMN: Image Gallery */}
                <div className="lg:w-1/2 bg-gray-50 p-6 md:p-8 flex flex-col gap-4">
                    {/* Main Image */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 group">
                        <img
                            src={images[activeImageIndex]}
                            alt="Lumina Hair Growth Roll-on"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000';
                            }}
                        />

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={20} className="text-gray-700" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={20} className="text-gray-700" />
                        </button>

                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-medical-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            BÄST I TEST
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`
                  relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                  ${activeImageIndex === idx ? 'border-medical-900 ring-2 ring-medical-900/20' : 'border-transparent hover:border-gray-300'}
                `}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN: Product Details & Selection */}
                <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col">

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-500">ÖVER 12 000 NÖJDA KVINNOR</span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 mb-4 leading-tight">
                        Fylligare hår börjar i hårbotten.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Den första serumlösningen med 3% Rosmarin, Redensyl, Aminexil & Anagain. Kliniskt bevisad effekt för kvinnor som vill se resultat, inte gissningar.
                    </p>

                    {/* Package Selection */}
                    <div className="space-y-3 mb-8">
                        <label className="text-sm font-bold text-medical-900 uppercase tracking-wide mb-2 block">
                            Välj ditt paket:
                        </label>
                        {options.map((option) => {
                            const isSelected = selectedId === option.id;
                            return (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedId(option.id)}
                                    className={`
                    relative flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 select-none group
                    ${isSelected
                                            ? 'border-medical-900 bg-medical-50/50 shadow-sm'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                        }
                  `}
                                >
                                    {/* Tag */}
                                    {option.tag && (
                                        <div className="absolute -top-3 right-4">
                                            <span className="bg-medical-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                                                {option.tag}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-4">
                                        {/* Radio */}
                                        <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0
                      ${isSelected ? 'border-medical-900' : 'border-gray-300 group-hover:border-gray-400'}
                    `}>
                                            {isSelected && <div className="w-2.5 h-2.5 bg-medical-900 rounded-full" />}
                                        </div>

                                        {/* Title & Subtitle */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-medical-900 text-lg">{option.title}</span>
                                                {option.discountLabel && (
                                                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                        {option.discountLabel}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-sm text-gray-500">{option.subtitle}</div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right">
                                        <div className="text-xs text-gray-400 line-through">{option.originalPrice} kr</div>
                                        <div className="font-bold text-red-600 text-lg">{option.price} kr</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-medical-900 text-white py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-medical-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mb-6 transform active:scale-[0.98]"
                    >
                        <ShoppingBag size={22} />
                        <span>Lägg till i varukorg</span>
                    </button>

                    {/* Trust List */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-700">
                            <Check className="text-green-500 flex-shrink-0" size={20} />
                            <span>Synligt tjockare hår på 90 dagar</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Check className="text-green-500 flex-shrink-0" size={20} />
                            <span>Hormonfri & Skonsam formula</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <ShieldCheck className="text-medical-900 flex-shrink-0" size={20} />
                            <span>90 Dagars Nöjd-Kund-Garanti</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductHero;

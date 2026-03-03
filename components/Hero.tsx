import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ChevronLeft, ChevronRight, ShoppingBag, Truck, RefreshCw, RotateCcw } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<number>(1);
  const { addToCart } = useCart();

  const productImages = [
    { id: 1, src: "/1 (7).jpg", alt: "LuminaFlow 360 – Produktbild 1" },
    { id: 2, src: "/2 (7).jpg", alt: "LuminaFlow 360 – Produktbild 2" },
    { id: 3, src: "/3 (7).jpg", alt: "LuminaFlow 360 – Produktbild 3" },
    { id: 4, src: "/4 (5).jpg", alt: "LuminaFlow 360 – Produktbild 4" },
    { id: 5, src: "/5 (5).jpg", alt: "LuminaFlow 360 – Produktbild 5" },
    { id: 6, src: "/6 (5).jpg", alt: "LuminaFlow 360 – Produktbild 6" },
  ];

  const packages = [
    { id: 1, quantity: 1, title: "LuminaFlow 360", subtitle: "1 st Strukturell Cellulitbehandling", price: 999, originalPrice: 1999, discountLabel: "SPARA 1000 KR", tag: "BEGRÄNSAT ERBJUDANDE" },
  ];

  const nextImage = () => setCurrentImageIndex(p => (p === productImages.length - 1 ? 0 : p + 1));
  const prevImage = () => setCurrentImageIndex(p => (p === 0 ? productImages.length - 1 : p - 1));

  const onTouchStart = (e: React.TouchEvent) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) nextImage();
    if (dist < -50) prevImage();
  };

  return (
    <section className="min-h-screen bg-[#F4EFEA] pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXT LEFT */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#EDE6DF] px-4 py-2 rounded-full border border-[#DDD4CB]">
              <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">LuminaFlow 360</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2E28] leading-[1.15]">
              Celluliter är struktur<br />
              <em className="not-italic text-[#B8986A]">inte fett.</em>
            </h1>

            <p className="text-[#7A6A62] text-lg leading-relaxed max-w-md">
              Teknik utvecklad för synligt jämnare hud hemma.
            </p>

            {/* Package Selection */}
            <div className="space-y-3 pt-2">
              <p className="text-sm font-semibold text-[#7A6A62] uppercase tracking-widest">Välj ditt paket</p>
              {packages.map(option => {
                const isSelected = selectedPackageId === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedPackageId(option.id)}
                    className={`relative flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 select-none ${isSelected ? 'border-[#B8986A] bg-white shadow-md' : 'border-[#DDD4CB] bg-[#EDE6DF] hover:border-[#B8986A]/50'}`}
                  >
                    {option.tag && (
                      <div className="absolute -top-3 right-5 z-20">
                        <span className="bg-[#B8986A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {option.tag}
                        </span>
                      </div>
                    )}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${isSelected ? 'border-[#B8986A]' : 'border-[#DDD4CB]'}`}>
                      {isSelected && <div className="w-2.5 h-2.5 bg-[#B8986A] rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#3B2E28]">{option.title}</span>
                        {option.discountLabel && <span className="text-[10px] bg-[#F4EFEA] text-[#B8986A] font-bold px-2 py-0.5 rounded">{option.discountLabel}</span>}
                      </div>
                      <p className="text-sm text-[#7A6A62]">{option.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#7A6A62] line-through">{option.originalPrice} kr</p>
                      <p className="text-xl font-bold text-[#3B2E28]">{option.price} kr</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                const sel = packages.find(o => o.id === selectedPackageId);
                if (sel) addToCart(sel as any);
              }}
              className="w-full bg-[#3B2E28] text-[#F4EFEA] py-4 rounded-full text-base font-semibold hover:bg-[#B8986A] transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
            >
              <ShoppingBag size={18} />
              Lägg i varukorg
            </button>

            <div className="flex items-center justify-center gap-6 text-xs text-[#7A6A62] font-medium pt-1">
              <span className="flex items-center gap-1.5"><Truck size={15} /> 3-7 dagars leverans</span>
              <span className="flex items-center gap-1.5"><RefreshCw size={15} /> 1 års garanti</span>
              <span className="flex items-center gap-1.5"><RotateCcw size={15} /> Fri retur</span>
            </div>
          </div>

          {/* IMAGE RIGHT */}
          <div className="order-1 md:order-2 relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group bg-[#EDE6DF]"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative aspect-square">
                <div
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {productImages.map(image => (
                    <div key={image.id} className="min-w-full h-full flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Counter */}
                {/* Note: In The original images (e.g. 1 (7).jpg), text including the dash is baked directly into the image pixels. So the user must edit the image in photoshop to remove it. We've removed from the HTML header h1. */}
                <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-sm text-[#3B2E28] px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {currentImageIndex + 1} / {productImages.length}
                </div>

                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-20 hidden md:flex">
                  <ChevronLeft size={20} className="text-[#3B2E28]" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-20 hidden md:flex">
                  <ChevronRight size={20} className="text-[#3B2E28]" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden transition-all duration-200 ${currentImageIndex === index ? 'ring-2 ring-[#B8986A] scale-105' : 'opacity-50 hover:opacity-80'}`}
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

export default Hero;

import React, { useState, useEffect } from 'react';
import { Check, ShoppingBag, ShieldCheck, Star, Clock, Zap } from 'lucide-react';
import AIConsultant from './AIConsultant';
import { useCart } from '../contexts/CartContext';
import { trackViewItemList } from '../services/analytics';

const Pricing: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(2); // Default to option 2 (Best Seller)
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset when timer reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options = [
    {
      id: 1,
      quantity: 1,
      title: "KÖP 1",
      subtitle: "Startpaket",
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
  ];

  // Track view item list when component mounts
  useEffect(() => {
    trackViewItemList(
      options.map(option => ({
        id: option.id,
        name: option.title,
        category: 'Hårvård',
        price: option.price,
      }))
    );
  }, []);

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

  return (
    <section id="erbjudande" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 scroll-mt-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Black Friday Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-pulse">
                BLACK FRIDAY
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-yellow-400 animate-pulse" size={24} />
              <span className="text-yellow-400 font-bold text-lg md:text-xl animate-pulse">
                MEGA RABATTER
              </span>
              <Zap className="text-yellow-400 animate-pulse" size={24} />
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-black/50 backdrop-blur-sm border-2 border-red-500 rounded-xl p-4 md:p-6 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="text-red-500" size={20} />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Erbjudandet slutar om:
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div className="bg-red-600 text-white rounded-lg px-3 md:px-4 py-2 min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs uppercase">Timmar</div>
              </div>
              <span className="text-red-500 text-2xl font-bold">:</span>
              <div className="bg-red-600 text-white rounded-lg px-3 md:px-4 py-2 min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs uppercase">Minuter</div>
              </div>
              <span className="text-red-500 text-2xl font-bold">:</span>
              <div className="bg-red-600 text-white rounded-lg px-3 md:px-4 py-2 min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs uppercase">Sekunder</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-block bg-red-600 text-white text-xs md:text-sm font-black px-4 md:px-6 py-2 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
              ⚡ SLUTSÅLT SNART
            </span>
            <span className="inline-block bg-yellow-500 text-black text-xs md:text-sm font-black px-4 md:px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
              🎁 FRI FRAKT
            </span>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-3">Välj ditt paket</h2>
          <p className="text-gray-300 text-sm md:text-base px-2">
            90 dagars garanti ingår i alla paket
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-4 mb-8">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            
            return (
              <div 
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`
                  relative flex items-center p-4 md:p-5 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-200 border-2 select-none group
                  ${isSelected 
                    ? 'border-red-500 bg-gradient-to-r from-red-50 to-white shadow-2xl shadow-red-500/50 scale-105 z-10 ring-4 ring-red-500/30' 
                    : 'border-gray-600 bg-gray-800/50 hover:border-red-400 hover:bg-gray-800/70'
                  }
                `}
              >
                {/* Floating Badge (Mest Populär) */}
                {option.tag && (
                  <div className="absolute -top-3 right-6 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                      ⭐ {option.tag}
                    </span>
                  </div>
                )}

                {/* Radio Button */}
                <div className="flex-shrink-0 mr-5">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-red-500 bg-red-500' : 'border-gray-500 group-hover:border-red-400'}
                  `}>
                    {isSelected && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`font-black text-lg leading-none ${isSelected ? 'text-gray-900' : 'text-white'}`}>
                      {option.title}
                    </h3>
                    {option.discountLabel && (
                      <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg animate-pulse">
                        {option.discountLabel}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${isSelected ? 'text-gray-700' : 'text-gray-300'}`}>
                    {option.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="text-right pl-2">
                  <div className={`text-xs line-through decoration-2 mb-0.5 ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
                    {option.originalPrice} kr
                  </div>
                  <div className={`text-2xl font-black leading-none ${isSelected ? 'text-red-600' : 'text-red-500'}`}>
                    {option.price} kr
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky/Main CTA Button */}
        <div className="bg-transparent">
            <button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-5 rounded-full text-lg md:text-xl font-black hover:from-red-700 hover:to-red-800 transition-all shadow-2xl shadow-red-500/50 flex items-center justify-center gap-3 transform active:scale-[0.98] animate-pulse hover:animate-none"
            >
                <ShoppingBag size={24} />
                <span>KÖP NU - BLACK FRIDAY PRIS!</span>
                <Zap className="text-yellow-300" size={20} />
            </button>
            
            <p className="mt-4 text-center text-base font-black text-red-400 animate-pulse">
              ⚠️ ENDAST {Math.floor(Math.random() * 5) + 3} KVAR I LAGER!
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 font-medium">
                <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full">
                    <ShieldCheck size={16} className="text-green-400"/> 90 dagars garanti
                </span>
                <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full">
                    <Check size={16} className="text-green-400"/> Klarna & Swish
                </span>
                <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full">
                    <Star size={16} className="text-yellow-400"/> Fri frakt
                </span>
            </div>
        </div>

        {/* AI Consultant Section */}
        <div className="mt-16">
          <AIConsultant />
        </div>

      </div>
    </section>
  );
};

export default Pricing;

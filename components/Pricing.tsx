
import React, { useState } from 'react';
import { Check, ShoppingBag, ShieldCheck, Star } from 'lucide-react';
import AIConsultant from './AIConsultant';
import { useCart } from '../contexts/CartContext';

const Pricing: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(2); // Default to option 2 (Best Seller)
  const { addToCart } = useCart();

  const options = [
    {
      id: 1,
      quantity: 1,
      title: "KÖP 1",
      subtitle: "Startpaket",
      price: 0, // TEST: Satt till 0 kr för testbeställningar
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
    <section id="erbjudande" className="py-12 md:py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block bg-[#DC2626] text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-wider mb-3 md:mb-4 shadow-sm">
            BEGRÄNSAT ERBJUDANDE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-medical-900 mb-2 md:mb-3">Välj ditt paket</h2>
          <p className="text-gray-500 text-xs md:text-sm px-2">
            Fri frakt & 90 dagars garanti ingår i alla paket.
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
                    ? 'border-medical-900 bg-white shadow-lg z-10' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}
              >
                {/* Floating Badge (Mest Populär) */}
                {option.tag && (
                  <div className="absolute -top-3 right-6 z-20">
                    <span className="bg-medical-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {option.tag}
                    </span>
                  </div>
                )}

                {/* Radio Button */}
                <div className="flex-shrink-0 mr-5">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-medical-900' : 'border-gray-300 group-hover:border-gray-400'}
                  `}>
                    {isSelected && (
                      <div className="w-3 h-3 bg-medical-900 rounded-full" />
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-medical-900 text-lg leading-none">
                      {option.title}
                    </h3>
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

                {/* Price */}
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

        {/* Sticky/Main CTA Button */}
        <div className="bg-white">
            <button 
                onClick={handleAddToCart}
                className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-[#0A2A4A] transition-all shadow-xl flex items-center justify-center gap-3 transform active:scale-[0.98]"
            >
                <ShoppingBag size={20} />
                <span>Lägg till i varukorg</span>
            </button>
            
            <p className="mt-3 text-center text-sm font-medium text-[#DC2626]">
              Få kvar i lager!
            </p>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-medical-500"/> 90 dagars garanti
                </span>
                <span className="flex items-center gap-1.5">
                    <Check size={16} className="text-green-500"/> Klarna & Swish
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

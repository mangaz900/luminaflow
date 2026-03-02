import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

const Pricing: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-[#3B2E28]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Beställ nu</span>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#F4EFEA] mt-4 mb-6 leading-tight">
          Utvecklad för dig som vill arbeta<br />
          med strukturen — <em className="not-italic text-[#B8986A]">inte dölja den.</em>
        </h2>

        <p className="text-[#D4B896]/70 text-base mb-10 max-w-xl mx-auto">
          LuminaFlow 360 — hemmabehandling som kombinerar vakuum, värme och mekanisk stimulering för synligt jämnare hud.
        </p>

        <button
          onClick={() => addToCart({ id: 1, quantity: 1, title: "LuminaFlow 360", subtitle: "Startpaket", price: 799 } as any)}
          className="inline-flex items-center gap-3 bg-[#B8986A] hover:bg-[#D4B896] text-white hover:text-[#3B2E28] px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-xl"
        >
          <ShoppingBag size={20} />
          Beställ din behandling idag
        </button>

        <p className="mt-6 text-[#D4B896]/50 text-xs">1 års garanti · Fri retur · 3-7 dagars leverans</p>
      </div>
    </section>
  );
};

export default Pricing;

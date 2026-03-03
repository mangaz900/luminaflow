import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingBag, Truck, RotateCcw, Star } from 'lucide-react';

const packages = [
    { id: 1, quantity: 1, title: "LuminaFlow 360", subtitle: "1 st Strukturell Cellulitbehandling", price: 999, originalPrice: 1999, discountLabel: "SPARA 1000 KR", tag: "BEGRÄNSAT ERBJUDANDE" },
];

const FinalCTA: React.FC = () => {
    const [selectedPackageId, setSelectedPackageId] = useState<number>(1);
    const { addToCart } = useCart();

    const handleOrder = () => {
        const sel = packages.find(p => p.id === selectedPackageId);
        if (sel) addToCart(sel as any);
    };

    return (
        <section className="py-24 bg-[#F4EFEA]" id="order">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-[#B8986A] text-[#B8986A]" />
                    ))}
                </div>

                <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Beställ idag</span>

                <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28] mt-4 mb-6">
                    Börja din förändring —<br />
                    <em className="not-italic text-[#B8986A]">utan risk.</em>
                </h2>

                <p className="text-[#7A6A62] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                    Välj det paket som passar dig bäst. 3-7 dagars leverans, 1 års garanti
                    och fri retur ingår alltid.
                </p>

                {/* Package Offer Card */}
                <div className="space-y-3 mb-8 text-left">
                    {packages.map(option => (
                        <div
                            key={option.id}
                            className="relative flex items-center p-6 rounded-2xl border-2 border-[#B8986A] bg-white shadow-lg transition-all duration-300 select-none"
                        >
                            {option.tag && (
                                <div className="absolute -top-3 right-5 z-20">
                                    <span className="bg-[#B8986A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        {option.tag}
                                    </span>
                                </div>
                            )}

                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#3B2E28] text-lg">{option.title}</span>
                                    {option.discountLabel && (
                                        <span className="text-[10px] bg-[#F4EFEA] text-[#B8986A] font-bold px-2 py-0.5 rounded border border-[#B8986A]/20">
                                            {option.discountLabel}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-[#7A6A62] italic">{option.subtitle}</p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-[#7A6A62] line-through opacity-60">
                                    {option.originalPrice} kr
                                </p>
                                <p className="text-2xl font-bold text-[#3B2E28]">
                                    {option.price} kr
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleOrder}
                    className="w-full bg-[#3B2E28] text-[#F4EFEA] py-5 rounded-full text-base font-semibold hover:bg-[#B8986A] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 mb-6"
                >
                    <ShoppingBag size={20} />
                    Lägg i varukorg
                </button>

                <div className="flex items-center justify-center gap-8 text-xs text-[#7A6A62] font-medium">
                    <span className="flex items-center gap-1.5"><Truck size={14} /> 3-7 dagars leverans</span>
                    <span className="flex items-center gap-1.5"><RotateCcw size={14} /> 1 års garanti</span>
                    <span className="flex items-center gap-1.5"><RotateCcw size={14} /> Fri retur</span>
                </div>

            </div>
        </section>
    );
};

export default FinalCTA;

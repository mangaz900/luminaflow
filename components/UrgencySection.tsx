import React from 'react';
import { ShieldCheck } from 'lucide-react';

const UrgencySection: React.FC = () => {
    return (
        <section className="py-24 bg-[#EDE6DF]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-[#B8986A] flex items-center justify-center mx-auto shadow-sm">
                        <ShieldCheck size={28} className="text-[#B8986A]" />
                    </div>
                </div>

                <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Garanti</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28] mt-3 mb-6">
                    Testa hemma, <em className="not-italic text-[#B8986A]">riskfritt.</em>
                </h2>

                <p className="text-[#7A6A62] text-lg leading-relaxed max-w-xl mx-auto">
                    Vi erbjuder 1 års garanti på alla köp. Om du upplever problem med din produkt,
                    kontaktar du oss och vi hjälper dig — utan krångel.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                    {[
                        { label: "1 år", sub: "Garanti" },
                        { label: "Fri retur", sub: "Enkelt & smidigt" },
                        { label: "Snabb service", sub: "Vi finns här" },
                    ].map(item => (
                        <div key={item.label} className="bg-white rounded-2xl p-5 border border-[#DDD4CB]">
                            <p className="font-bold text-[#3B2E28] text-base">{item.label}</p>
                            <p className="text-[#7A6A62] text-xs mt-1">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UrgencySection;

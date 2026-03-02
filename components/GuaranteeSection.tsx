import React from 'react';
import { Shield, RefreshCw, HeartHandshake } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#3B2E28]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="mb-16 space-y-4">
                    <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Trygghet</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#F4EFEA]">
                        Din investering är{' '}
                        <em className="not-italic text-[#B8986A]">helt skyddad.</em>
                    </h2>
                    <p className="text-[#D4B896]/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Vi är övertygade om att LuminaFlow 360 kommer att ge dig synliga resultat.
                        Därför erbjuder vi en garanti utan krångel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: Shield,
                            title: "1 års garanti",
                            text: "Vi erbjuder 1 års garanti på din LuminaFlow. Tryggt och säkert köp.",
                        },
                        {
                            icon: RefreshCw,
                            title: "Fri retur",
                            text: "Vi betalar returfrakten. Inga dolda avgifter, inga frågor. Så enkelt ska en garanti vara.",
                        },
                        {
                            icon: HeartHandshake,
                            title: "Personlig support",
                            text: "Vårt team finns tillgängligt för att hjälpa dig maximera resultaten under hela behandlingstiden.",
                        },
                    ].map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#B8986A]/20 flex items-center justify-center mb-6">
                                    <Icon size={22} className="text-[#B8986A]" />
                                </div>
                                <h3 className="font-serif text-xl text-[#F4EFEA] mb-3">{item.title}</h3>
                                <p className="text-[#D4B896]/70 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust badge */}
                <div className="inline-flex items-center gap-3 bg-white/5 border border-[#B8986A]/30 rounded-full px-8 py-4">
                    <Shield size={20} className="text-[#B8986A]" />
                    <span className="text-[#F4EFEA] text-sm font-medium">
                        Mer än 4 200 nöjda kunder. Genomsnittligt betyg: <strong className="text-[#B8986A]">4.8 / 5</strong>
                    </span>
                </div>

            </div>
        </section>
    );
};

export default GuaranteeSection;

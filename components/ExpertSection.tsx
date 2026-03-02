import React from 'react';

const ExpertSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#EDE6DF]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Label */}
                <div className="text-center mb-16">
                    <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Expertperspektiv</span>
                    <div className="h-px bg-[#DDD4CB] mt-3 max-w-xs mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* QUOTE LEFT */}
                    <div className="space-y-8">
                        <div className="relative">
                            <svg className="absolute -top-6 -left-4 w-12 h-12 text-[#B8986A]/20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <blockquote className="font-serif text-2xl lg:text-3xl text-[#3B2E28] leading-relaxed pl-4">
                                Celluliter handlar om <em className="not-italic text-[#B8986A]">bindvävens arkitektur</em> — inte om hur mycket fett du har.
                            </blockquote>
                        </div>

                        <p className="text-[#7A6A62] text-lg leading-relaxed">
                            Utan mekanisk stimulering av de underliggande strukturerna — och förbättrad lokal cirkulation —
                            förblir ojämn hudtextur oförändrad, oavsett kost eller träning.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <div className="w-14 h-14 rounded-full bg-[#F4EFEA] border-2 border-[#DDD4CB] flex items-center justify-center">
                                <span className="font-serif text-xl text-[#B8986A]">Dr</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#3B2E28] text-base">Sofia Lindgren</p>
                                <p className="text-xs text-[#B8986A] uppercase tracking-widest">Dermatolog &amp; hudforskare</p>
                            </div>
                        </div>
                    </div>

                    {/* STATS RIGHT */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { number: "85%", label: "av kvinnor upplever celluliter oavsett vikt" },
                            { number: "6 v", label: "genomsnittlig tid för synliga resultat med rätt teknik" },
                            { number: "3×", label: "mer effektivt med mekanisk stimulering vs enbart kräm" },
                            { number: "0", label: "kliniska procedurer behövs med rätt hembehandling" },
                        ].map(stat => (
                            <div
                                key={stat.number}
                                className="bg-white rounded-2xl p-6 border border-[#DDD4CB] flex flex-col gap-2"
                            >
                                <span className="font-serif text-4xl text-[#B8986A]">{stat.number}</span>
                                <p className="text-[#7A6A62] text-sm leading-snug">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;

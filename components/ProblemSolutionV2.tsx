import React from 'react';
import { AlertCircle, HeartHandshake, Microscope } from 'lucide-react';

const ProblemSolutionV2: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Empathy Section */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-medical-900 mb-4 md:mb-6">
                        Varför tappar du hår som man?
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 px-2 text-left md:text-center">
                        Hos de flesta män handlar det om DHT (dihydrotestosteron) och enzymet 5‑alfa‑reduktas. Det gör att hårsäckarna gradvis krymper (miniaturisering) och att tillväxtfasen blir kortare.
                        <br /><br />
                        Håret blir tunnare. Vikarna kryper upp. Hjässan syns mer. Du ser det i spegeln – och i skarpa “overhead lights”.
                        <br /><br />
                        Men här är det viktiga:
                        <br /><br />
                        <strong>Dina hårsäckar är inte borta. De är försvagade.</strong>
                        <br /><br />
                        En hårsäck som verkligen försvunnit kan inte väckas.
                        <br /><br />
                        Men en hårsäck som “somnat” av DHT‑stress kan ofta aktiveras igen – om den får rätt signaler, i rätt ordning, och du är konsekvent över tid.
                    </p>
                    <div className="h-1 w-20 bg-medical-200 mx-auto rounded-full"></div>
                </div>

                {/* The Villain & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">

                    {/* The Problem (The Villain) */}
                    <div className="bg-[#FDF2F2] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-red-100">
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <div className="p-2 md:p-3 bg-red-100 rounded-full text-red-600">
                                <AlertCircle size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-serif text-xl md:text-2xl text-medical-900">Problemet: DHT-stress</h3>
                        </div>

                        {/* Bild under rubriken */}
                        <div className="mb-6 rounded-xl overflow-hidden">
                            <img
                                src="/problem-bild.jpg"
                                alt="Hårsäcken kvävs - Problem illustration"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x400?text=Problem+Bild";
                                }}
                            />
                        </div>

                        <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                            När DHT attackerar hårsäcken börjar den krympa. Kollagenet stelnar, blodtillförseln minskar, och håret blir tunnare och tunnare till det försvinner helt.
                        </p>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span> Vikarna kryper uppåt
                            </li>
                            <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span> Tunnhårighet på hjässan
                            </li>
                            <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span> Hårsäckar som miniaturiseras
                            </li>
                        </ul>
                    </div>

                    {/* The Solution (Science + Nature) */}
                    <div className="bg-[#F0F7FF] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-medical-100 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4 md:mb-6 relative z-10">
                            <div className="p-2 md:p-3 bg-medical-200 rounded-full text-medical-700">
                                <Microscope size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-serif text-xl md:text-2xl text-medical-900">Lösningen: Väck hårsäckarna</h3>
                        </div>

                        {/* Bild under rubriken */}
                        <div className="mb-4 md:mb-6 rounded-xl overflow-hidden relative z-10">
                            <img
                                src="/produkt-flaska-sten.jpg"
                                alt="Lumina Growth Serum Roll-on - Produktbild"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x400?text=Produktbild";
                                }}
                            />
                        </div>

                        <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed relative z-10 text-sm md:text-base">
                            Lumina kombinerar <strong>Redensyl</strong> (väcker stamceller), <strong>Aminexil</strong> (motverkar fibros/stelhet),
                            <strong>Anagain</strong> (förlänger tillväxtfas) och <strong>Rosmarin 3%</strong> (cirkulationsboost).
                            <br /><br />
                            Alla 4 ingredienser arbetar SAMTIDIGT för att motverka DHT-skador och ge hårsäcken ny energi.
                            Hormonfri formel. Kliniskt bevisat.
                        </p>
                        <div className="p-4 bg-white/80 backdrop-blur rounded-xl border border-white relative z-10">
                            <div className="flex items-center gap-3">
                                <HeartHandshake className="text-medical-500" />
                                <p className="text-sm font-medium text-medical-900">Formulan som aktiverar försvagade hårsäckar.</p>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-medical-200 rounded-full blur-3xl opacity-50"></div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProblemSolutionV2;

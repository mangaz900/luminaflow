import React from 'react';
import { Leaf, Shield, Activity, Zap } from 'lucide-react';

const IngredientsV2: React.FC = () => {
    return (
        <section id="ingredienser" className="py-12 md:py-24 bg-medical-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

                    <div className="order-2 lg:order-1">
                        <div className="mb-8 md:mb-10">
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3 md:mb-4">
                                Varför fungerar Lumina när biotin, minoxidil och dyrt schampo inte gör det?
                            </h2>
                            <p className="text-medical-200 text-sm md:text-base leading-relaxed">
                                De flesta produkter är byggda för “allmänt hårproblem” – eller så attackerar de bara en liten del av problemet.
                                <br /><br />
                                Men manligt håravfall är oftast annorlunda.
                                <br /><br />
                                Problemet är inte bara näring. Problemet är DHT‑driven miniaturisering: hårsäcken krymper och tillväxtfasen blir kortare.
                                <br /><br />
                                För att vända det behöver du flera signaler – samtidigt:
                            </p>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            {/* FAS 1 */}
                            <div className="bg-medical-800/50 p-4 md:p-6 rounded-xl border border-medical-700">
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="bg-blue-900/50 p-1.5 md:p-2 rounded-lg text-blue-300"><Zap size={18} className="md:w-5 md:h-5" /></div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">FAS 1</span>
                                            <h3 className="text-lg md:text-xl font-serif text-white uppercase">VÄCK vilande hårsäckar</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                    <strong>Redensyl® 3%:</strong> Aktiverar hårsäckens aktivitet och hjälper dig få igång en ny tillväxtcykel.
                                </p>
                            </div>

                            {/* FAS 2 */}
                            <div className="bg-medical-800/50 p-4 md:p-6 rounded-xl border border-medical-700">
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="bg-purple-900/50 p-1.5 md:p-2 rounded-lg text-purple-300"><Shield size={18} className="md:w-5 md:h-5" /></div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">FAS 2</span>
                                            <h3 className="text-lg md:text-xl font-serif text-white uppercase">SKAPA en starkare “grund”</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                    <strong>Aminexil:</strong> Stöttar miljön runt hårroten så håret sitter bättre och hårbotten inte jobbar emot dig.
                                </p>
                            </div>

                            {/* FAS 3 */}
                            <div className="bg-medical-800/50 p-4 md:p-6 rounded-xl border border-medical-700">
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="bg-yellow-900/50 p-1.5 md:p-2 rounded-lg text-yellow-300"><Activity size={18} className="md:w-5 md:h-5" /></div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">FAS 3</span>
                                            <h3 className="text-lg md:text-xl font-serif text-white uppercase">FÖRLÄNG tillväxtfasen</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                    <strong>Anagain™ 2%:</strong> Stöttar att fler strån stannar längre i tillväxtfasen – vilket ger bättre densitet över tid.
                                </p>
                            </div>

                            {/* FAS 4 */}
                            <div className="bg-medical-800/50 p-4 md:p-6 rounded-xl border border-medical-700">
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="bg-green-900/50 p-1.5 md:p-2 rounded-lg text-green-300"><Leaf size={18} className="md:w-5 md:h-5" /></div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-green-300 uppercase tracking-wider">FAS 4</span>
                                            <h3 className="text-lg md:text-xl font-serif text-white uppercase">STÖTTA mikrocirkulationen</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                    <strong>Rosmarinolja 3%:</strong> Hjälper till att stötta blodflöde/näringsleverans i hårbotten – så de “återstartade” hårsäckarna får bättre förutsättningar.
                                </p>
                            </div>

                            <div className="pt-4 mt-6 border-t border-medical-700/50">
                                <p className="text-medical-200 text-sm italic font-serif leading-relaxed">
                                    Alla 4 faser. Samtidigt. Byggt för män som vill ha resultat utan kladd och utan en krånglig rutin.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative lg:sticky lg:top-24 mb-8 md:mb-12 lg:mb-0">
                        <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden border border-medical-700 shadow-2xl aspect-square md:aspect-[4/5]">
                            <img
                                src="/losning-bild.jpg"
                                alt="Lösningen: Ny Vetenskap för män"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x1000?text=Lösning+Bild";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-medical-900 via-transparent to-transparent"></div>

                            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                                <div className="bg-white/10 backdrop-blur p-3 md:p-4 lg:p-6 rounded-xl border border-white/20">
                                    <p className="text-white italic font-serif text-sm md:text-base lg:text-lg text-center">"Vi tog bort det onödiga och maximerade det som fungerar. Inga hormoner, inget kladd — bara resultat."</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-medical-500/30 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IngredientsV2;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const TimelineV2: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white border-t border-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center text-medical-900 mb-8 md:mb-12">
                    Vad du kan förvänta dig
                </h2>

                <div className="space-y-8">

                    {/* Month 1-2 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-medical-50 p-4 md:p-6 rounded-2xl border border-medical-100">
                        <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
                            <img
                                src="/35.jpg"
                                alt="Månad 1-2 - Mindre shedding"
                                className="w-full object-contain rounded-lg shadow-md"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
                            <div className="bg-medical-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                                Månad 1-2
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Mindre shedding</h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    De flesta märker först att de tappar mindre hår i duschen och på kudden.
                                    Hårbotten känns ofta lugnare och mindre irriterad – och rutinen börjar sitta.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center text-medical-300">
                        <ArrowRight className="rotate-90" size={32} />
                    </div>

                    {/* Month 3-4 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-lg md:transform md:scale-105 z-10">
                        <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
                            <img
                                src="/36.jpg"
                                alt="Månad 3-4 - Nya småhår & hårfäste/krona"
                                className="w-full object-contain rounded-lg shadow-md"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
                            <div className="bg-medical-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                                Månad 3-4
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Nya småhår & hårfäste/krona</h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Nu börjar det roliga. Många ser små, tunna “babyhår” vid hårfästet/vikarna – eller att hjässan ser lite jämnare ut i starkt ljus.
                                    Det är ofta här du märker att konsekvensen börjar betala sig.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center text-medical-300">
                        <ArrowRight className="rotate-90" size={32} />
                    </div>

                    {/* Month 5-6 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-medical-50 p-4 md:p-6 rounded-2xl border border-medical-100">
                        <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
                            <img
                                src="/37.jpg"
                                alt="Månad 5-6 - Synlig densitet"
                                className="w-full object-contain rounded-lg shadow-md"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
                            <div className="bg-medical-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                                Månad 5-6
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Synlig densitet</h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    De nya stråna har blivit längre och känns kraftigare. Håret täcker hårbotten bättre,
                                    och skillnaden syns tydligare i spegeln (och under “overhead lights”)
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TimelineV2;

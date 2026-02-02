import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock } from 'lucide-react';

const UrgencySectionV2: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToPricing = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
        }
        // Note: In HomePageV2 we use the Pricing component which likely has its own ID or we scroll to #erbjudande
        const element = document.querySelector('#erbjudande') || document.querySelector('#pricing');
        if (element) {
            const yOffset = -80; // Offset för fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-red-50 to-white border-t border-red-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                        <Clock className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-medical-900 mb-4 md:mb-6 leading-tight">
                        Varje månad du väntar = mer miniaturisering
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        När DHT driver på processen blir hårsäcken gradvis svagare och strået tunnare/shortare.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-200 mb-8">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center">
                        Hårsäckar som börjat “somna” av DHT‑stress:
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                ✓
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-medical-900 mb-1">Tidigt skede</p>
                                <p className="text-sm text-gray-600">Lättast att påverka</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                !
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-medical-900 mb-1">Mellanläge</p>
                                <p className="text-sm text-gray-600">Svårare, men möjligt</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                !!
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-medical-900 mb-1">Sent skede</p>
                                <p className="text-sm text-gray-600">Mycket svårt</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                !!!
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-medical-900 mb-1">Långt framskridet</p>
                                <p className="text-sm text-gray-600">Extremt svårt (men inte alltid omöjligt)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-medical-50 p-6 rounded-xl border border-medical-200">
                        <p className="text-base md:text-lg text-medical-900 leading-relaxed text-center font-medium">
                            Ju längre processen pågår → desto svårare blir det att få tillbaka densitet.
                            <br /><br />
                            <span className="text-medical-700">Ju tidigare du agerar → desto mer kan du behålla (och desto enklare är det att få rutinen att “vinna tillbaka” mark).</span>
                            <br /><br />
                            <span className="text-red-600 font-bold">Tidsfönstret stänger. Men det är inte stängt än.</span>
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleScrollToPricing}
                        className="bg-medical-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-medical-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <span>Rädda ditt hår nu</span>
                    </button>
                    <p className="text-sm text-gray-500 mt-4">90 dagars pengarna-tillbaka-garanti</p>
                </div>
            </div>
        </section>
    );
};

export default UrgencySectionV2;

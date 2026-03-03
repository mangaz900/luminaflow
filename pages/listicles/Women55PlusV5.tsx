import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowRight, Zap, Droplets, Sun } from 'lucide-react';

const Women55PlusV5: React.FC = () => {
    const navigate = useNavigate();

    // Dynamically load fonts
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const scrollToOffer = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-8">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[42px] font-[900] leading-[1.15] mb-6 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        Den verkliga anledningen till att celluliter inte försvinner (och varför de flesta behandlingar misslyckas)
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-8">
                        <img src="/cellulite-before-after.jpg" alt="Före och efter cellulitbehandling" className="w-full h-auto rounded-2xl shadow-lg" />
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[19px] mb-6 font-medium text-[#4F5256]">
                            Om du fortfarande försöker träna bort celluliter…
                        </p>

                        <p className="text-[18px] mb-4">…så jobbar du mot fel problem.</p>
                        <p className="text-[18px] mb-4">Och det är därför inget händer.</p>
                        <p className="text-[18px] mb-4">Det är inte brist på disciplin.</p>
                        <p className="text-[18px] mb-8 font-bold text-[#17242C]">Det är brist på rätt stimulans.</p>

                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0B2240] mb-8 italic text-gray-700">
                            "Jag tränade. Jag åt bra. Jag köpte krämer. Jag testade verktyg som gjorde ont. Och varje gång det inte fungerade började jag tro att det bara var så här min kropp var."
                        </div>

                        <p className="text-[18px] mb-4">Men celluliter är inte ett fettproblem.</p>
                        <p className="text-[18px] mb-10 font-bold text-[22px]">Det är ett flödes- och strukturproblem.</p>

                        <h2 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad som faktiskt händer under huden
                        </h2>

                        <div className="mb-8">
                            <img src="/cellulite-anatomy.jpg" alt="Anatomi av celluliter under huden" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
                        </div>

                        <p className="text-[18px] mb-6">Celluliter uppstår när:</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-[18px]"><Droplets className="text-[#0B2240] flex-shrink-0" size={20} /> Mikrocirkulationen är låg</li>
                            <li className="flex items-center gap-3 text-[18px]"><Zap className="text-[#0B2240] flex-shrink-0" size={20} /> Bindvävsband blir stela</li>
                            <li className="flex items-center gap-3 text-[18px]"><Droplets className="text-[#0B2240] flex-shrink-0" size={20} /> Vätska stagnerar</li>
                            <li className="flex items-center gap-3 text-[18px]"><Sun className="text-[#0B2240] flex-shrink-0" size={20} /> Huden tappar elasticitet</li>
                        </ul>

                        <div className="bg-[#F8F9FA] p-6 rounded-xl mb-10 border border-gray-200">
                            <p className="text-[18px] mb-2 font-bold mb-4">Fett pressas uppåt.</p>
                            <p className="text-[18px] mb-2 font-bold mb-4">Strama band drar nedåt.</p>
                            <p className="text-[18px] font-bold">Ytan blir ojämn.</p>
                        </div>

                        <p className="text-[18px] mb-4 italic">Det är därför även smala och tränade kvinnor har det.</p>
                        <p className="text-[18px] mb-12">Och det är därför ytliga lösningar misslyckas.</p>

                        <h2 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför krämer och träning inte räcker
                        </h2>

                        <p className="text-[18px] mb-4">Krämer jobbar på hudytan.</p>
                        <p className="text-[18px] mb-4">Träning stärker muskler – inte bindvävsstrukturen.</p>
                        <p className="text-[18px] mb-4">Aggressiva verktyg skapar smärta, men inte nödvändigtvis långsiktig förbättring.</p>
                        <p className="text-[18px] mb-8 font-bold">Problemet sitter djupare.</p>

                        <div className="bg-[#0B2240] text-white p-8 rounded-2xl mb-12 shadow-xl">
                            <p className="text-[20px] mb-4 font-bold">Det var där LuminaFlow™ blev intressant.</p>
                            <h3 className="text-[28px] font-black mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                LuminaFlow™ 3D Tissue Activation
                            </h3>
                            <div className="mb-6">
                                <img src="/luminaflow-usage.jpg" alt="Användning av LuminaFlow™" className="w-full h-auto rounded-xl shadow-md" />
                            </div>
                            <p className="text-[18px] opacity-90">
                                LuminaFlow™ är designad för att arbeta där celluliter faktiskt uppstår.
                                Den kombinerar tre funktioner samtidigt:
                            </p>
                        </div>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4">
                                <div className="bg-[#0B2240] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-[#17242C]">Flow Activation</h4>
                                    <p className="text-[17px]">Dynamisk vakuumrörelse som mobiliserar instängd vävnad.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-[#0B2240] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-[#17242C]">Thermal Softening</h4>
                                    <p className="text-[17px]">Kontrollerad värme som stödjer cirkulation och mjukar upp stela områden.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-[#0B2240] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-[#17242C]">Luminous Strengthening</h4>
                                    <p className="text-[17px]">Rött ljus som stödjer hudens elasticitet över tid.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 mb-12 text-center text-gray-500 font-medium">
                            <p>Inte aggressivt.</p>
                            <p>Inte smärtsamt.</p>
                            <p>Inte en snabbfix.</p>
                            <p className="text-[#0B2240] font-bold text-xl mt-2 tracking-wide">En strukturell förbättring över tid.</p>
                        </div>

                        <h2 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad kvinnor faktiskt märker
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-[#0B2240] mb-4 uppercase tracking-wider text-sm">Efter 2–4 veckor:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2"><span>•</span> Huden känns mjukare</li>
                                    <li className="flex items-start gap-2"><span>•</span> Benen känns mindre “tunga”</li>
                                    <li className="flex items-start gap-2"><span>•</span> Texturen upplevs jämnare</li>
                                </ul>
                            </div>
                            <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-[#0B2240] mb-4 uppercase tracking-wider text-sm">Efter 6–8 veckor:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2"><span>•</span> Mindre synliga gropar i starkt ljus</li>
                                    <li className="flex items-start gap-2"><span>•</span> Fastare känsla</li>
                                    <li className="flex items-start gap-2"><span>•</span> Jämnare yta</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mb-12">
                            <p className="text-[20px] mb-2 italic">Inte perfekt. Men synligt bättre.</p>
                            <p className="text-[22px] font-bold text-[#17242C]">Och viktigast av allt: Du tänker mindre på det.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-8 rounded-2xl border border-[#DCD6F7] mb-12">
                            <h2 className="text-[24px] font-bold mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                ”Men fungerar inte klinikbehandlingar bättre?”
                            </h2>
                            <p className="text-[17px] mb-6">
                                Professionella behandlingar som vakuummassage och RF kan ge resultat. Men låt oss vara ärliga om kostnaden.
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between border-b border-[#DCD6F7] pb-2">
                                    <span>Genomsnittlig behandling:</span>
                                    <span className="font-bold">1 500 – 3 000 kr / session</span>
                                </div>
                                <div className="flex justify-between border-b border-[#DCD6F7] pb-2">
                                    <span>Rekommenderat antal:</span>
                                    <span className="font-bold">8–12 sessioner</span>
                                </div>
                                <div className="flex justify-between font-black text-xl text-[#0B2240]">
                                    <span>Totalkostnad:</span>
                                    <span>12 000 – 30 000 kr</span>
                                </div>
                            </div>
                            <p className="text-[17px] italic mb-6">
                                Och resultaten kräver ofta underhåll. Det är därför många testar några gånger… ser viss förbättring… och slutar på grund av priset.
                            </p>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DCD6F7]">
                                <h4 className="font-bold text-[#17242C] mb-2">LuminaFlow™ bygger på samma principer</h4>
                                <p className="mb-4">Vakuum. Värme. Ljus.</p>
                                <p className="text-[18px] font-bold text-[#0B2240]">Skillnaden? Du betalar en gång. Och äger behandlingen.</p>
                            </div>
                        </div>

                        <h2 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det verkliga priset
                        </h2>

                        <p className="text-[18px] mb-4">Det verkliga priset är inte pengar. Det är:</p>
                        <ul className="space-y-3 mb-8 text-[18px]">
                            <li className="flex items-start gap-2"><span>•</span> Att undvika shorts ännu en sommar</li>
                            <li className="flex items-start gap-2"><span>•</span> Att tänka på ljuset i spegeln</li>
                            <li className="flex items-start gap-2"><span>•</span> Att känna sig obekväm i vissa situationer</li>
                            <li className="flex items-start gap-2"><span>•</span> Att fortsätta tro att inget fungerar</li>
                        </ul>

                        <p className="text-[18px] mb-4">Du har redan investerat i krämer. I träningsprogram. I förhoppningar.</p>
                        <p className="text-[18px] mb-4 font-bold">Frågan är:</p>
                        <p className="text-[18px] mb-4">Vill du fortsätta betala med frustration?</p>
                        <p className="text-[18px] mb-12">Eller investera i en lösning som faktiskt adresserar strukturen?</p>

                        <div className="bg-red-50 border-2 border-red-500 p-8 rounded-2xl mb-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[12px] font-bold px-4 py-1 uppercase tracking-wider">Tidsbegränsat</div>
                            <h2 className="text-[26px] font-black mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Nu är LuminaFlow™ 50% rabatterad
                            </h2>
                            <p className="text-[18px] mb-6">
                                För att fler ska kunna testa utan att tveka erbjuds LuminaFlow™ just nu med 50% rabatt.
                            </p>
                            <p className="text-[18px] mb-6 border-l-4 border-red-500 pl-4 font-medium italic">
                                Du får tillgång till en strukturell, professionell-inspirerad behandling hemma för en bråkdel av kostnaden för kliniksessioner.
                            </p>
                            <p className="text-[16px] text-red-700 font-bold mb-8">
                                Men rabatten gäller under begränsad period. När kampanjen avslutas återgår priset till ordinarie.
                            </p>

                            <div className="bg-[#FFF9EA] border border-[#F4BE19] p-6 rounded-xl mb-8 flex items-center gap-4">
                                <div className="bg-[#F4BE19] p-3 rounded-full text-white"><ShieldCheck size={32} /></div>
                                <div>
                                    <h4 className="font-bold text-[#17242C]">60 dagars garanti</h4>
                                    <p className="text-[15px]">Du testar hemma i lugn och ro. Ser du ingen förbättring? Du får pengarna tillbaka. Enkelt. Ingen risk.</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[22px] py-5 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-3"
                                >
                                    Säkra LuminaFlow™ med 50% rabatt idag <ArrowRight />
                                </button>
                                <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide flex items-center justify-center gap-4">
                                    <span className="flex items-center gap-1 uppercase"><Truck size={14} /> Fri Frakt</span>
                                    <span className="flex items-center gap-1 uppercase"><ShieldCheck size={14} /> 60 dagars öppet köp</span>
                                </p>
                            </div>
                        </div>

                        <div className="text-center py-12 border-t border-gray-100">
                            <h3 className="text-[22px] font-bold mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Direkt fråga
                            </h3>
                            <p className="text-[18px] mb-8">
                                Om du ändå ska fortsätta försöka förbättra dina celluliter… Varför fortsätta med lösningar som inte når problemet?
                            </p>
                            <p className="text-[20px] font-bold text-[#0B2240] mb-2">Behandla strukturen – inte bara ytan.</p>
                            <p className="text-[18px] italic text-gray-500">Du behöver inte perfekt. Du behöver bara bättre.</p>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default Women55PlusV5;

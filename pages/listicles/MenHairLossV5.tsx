import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';

const MenHairLossV5: React.FC = () => {
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
        window.location.href = 'https://www.hairscanpro.com/p2';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-4 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "90 dagar förändrade min hjässa. Så här väckte jag sovande hårsäckar innan det var för sent."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/33.jpg" alt="Man med återställd hårväxt" className="w-full h-auto rounded-lg" />
                    </div>

                    {/* Subheadline */}
                    <div className="text-[16px] md:text-[18px] text-[#4F5256] mb-4 leading-snug font-sans">
                        Svenska män 35+ upptäcker den dolda orsaken till vikar och gles krona – och varför vanliga tillskott aldrig biter
                    </div>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        14 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[17px] mb-4">Tre strån i handfatet. Varje morgon nu.</p>
                        <p className="text-[17px] mb-4">Det är inte längre enstaka hårstrån.</p>
                        <p className="text-[17px] mb-6">Det är en tydlig reträtt.</p>

                        <p className="text-[17px] mb-4">Om du har börjat se hårbotten genom hjässan när taklampan lyser ner...</p>
                        <p className="text-[17px] mb-4">Om dina vikar vid tinningarna har blivit bredare än för ett år sedan...</p>
                        <p className="text-[17px] mb-6">Om du känner paniken i duschen och kollar borsten varje dag...</p>

                        <div className="mb-6">
                            <img src="/30.jpg" alt="Håravfall hos män" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-8 font-bold">Då måste du läsa detta.</p>

                        <p className="text-[17px] mb-4">Det finns en tyst kamp som tusentals svenska män för mot spegeln just nu.</p>
                        <p className="text-[17px] mb-4">De flesta ger upp och rakar av allt.</p>
                        <p className="text-[17px] mb-6">Men här är sanningen:</p>
                        <p className="text-[18px] mb-10 font-bold text-[#17242C]">Det du tror räddar ditt hår kanske faktiskt är det som låter det dö ut helt.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            798 kronor räddade min identitet
                        </h3>

                        <p className="text-[17px] mb-4">Mitt namn är Erik.</p>
                        <p className="text-[17px] mb-4">Jag är 45 år. Jobbar i Stockholm.</p>
                        <p className="text-[17px] mb-4">För ett år sedan började något hända.</p>
                        <p className="text-[17px] mb-4">Först var det bara en känsla.</p>
                        <p className="text-[17px] mb-6">Lite glesare vid vikar. Hjässan kändes inte lika "tät" längre.</p>
                        <p className="text-[17px] mb-4 italic">"Det är bara generna," sa min polare. "Bara att acceptera."</p>
                        <p className="text-[17px] mb-8 font-bold">Men jag ville inte acceptera det.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det började smått – sen gick det fort
                        </h3>

                        <div className="mb-6">
                            <img src="/57.jpg" alt="Manlig håravfall progression" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-3"><strong>Januari 2025:</strong> Jag började spendera 10 minuter varje morgon på att "täcka över" glesa partier.</p>
                        <p className="text-[17px] mb-3"><strong>Mars 2025:</strong> Min frisör erbjöd mig en "kortare frisyr för att dölja det". Jag kände mig gammal.</p>
                        <p className="text-[17px] mb-3"><strong>Maj 2025:</strong> Jag slutade ta foton. Om jag var tvungen att vara med på bild, såg jag alltid till att ha keps.</p>
                        <p className="text-[17px] mb-8"><strong>Juli 2025:</strong> Jag googlade hårtransplantation. 50 000 kr. Ingen garanti. En mardröm.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Sanningen ingen berättar för män
                        </h3>

                        <div className="mb-6">
                            <img src="/3 (6).jpg" alt="Forskning om manligt håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">En natt i september satt jag och googlade desperat.</p>
                        <p className="text-[17px] mb-6">Jag letade efter något annat än "rakapparat".</p>

                        <p className="text-[17px] mb-4">Och då hittade jag det.</p>
                        <p className="text-[17px] mb-6">Den stora boven heter DHT (Dihydrotestosteron).</p>
                        <p className="text-[18px] mb-8 font-bold text-[#17242C]">Här är vad som verkligen händer i din hårbotten:</p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Miniaturisering – när hårsäcken kvävs:</h4>
                            <div className="mb-4">
                                <img src="/problem-bild.jpg" alt="DHT process" className="w-full h-auto rounded-lg" />
                            </div>
                            <p className="text-[17px] mb-3">1. DHT binder sig till receptorer i hårbotten.</p>
                            <p className="text-[17px] mb-3">2. Hårsäcken börjar krympa (miniaturisering).</p>
                            <p className="text-[17px] mb-3">3. Tillväxtfasen kortas ner från år till bara månader.</p>
                            <p className="text-[17px] mb-3">4. Hårsäcken går in i "djupsömn" (telogen dvala).</p>
                            <p className="text-[17px] font-bold">5. Tills hårsäcken somnar helt. Då är det för sent.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[18px] mb-4 font-bold text-[#17242C]">Men här är hoppet: Dina hårsäckar är troligen inte borta. De sover.</p>
                            <p className="text-[17px] mb-4">Forskare kallar det "dormancy".</p>
                            <p className="text-[17px] mb-4">Så länge du ser små fjun finns det hopp.</p>
                            <p className="text-[18px] font-bold text-[#17242C]">Genom att motverka DHT och väcka rötterna kan du starta om processen.</p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför schampo och piller är slöseri med tid
                        </h3>

                        <p className="text-[17px] mb-8">Här är den brutala sanningen om marknaden:</p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Misslyckande #1: Vitaminer når inte hårbotten</h4>
                            <p className="text-[17px] mb-4">Kroppen prioriterar dina organ först (hjärta, lungor). Håret är det sista som får näring.</p>
                            <p className="text-[17px] mb-4">Om du har DHT-stress hjälper inte vitaminer, hur mycket du än äter.</p>
                            <p className="text-[17px] font-bold">Du behöver en lokal attack direkt vid roten.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Misslyckande #2: Schampo stannar bara på ytan</h4>
                            <p className="text-[17px] mb-4">Du tvättar håret i 30 sekunder och sköljer sen bort allt.</p>
                            <p className="text-[17px] mb-4">Ingredienserna hinner aldrig tränga ner till roten.</p>
                            <p className="text-[17px] font-bold">Det är som att försöka vattna en blomma genom att kasta en hink vatten på bladen.</p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Lumina – Den 4-stegs lösning jag letat efter
                        </h3>

                        <p className="text-[17px] mb-4">Jag hittade Lumina. Ett svenskt serum utvecklat för att angripa DHT-problemet från fyra håll samtidigt:</p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">1. Väck sovande stamceller (Redensyl® 3%)</h4>
                                <p className="text-[17px]">Den "molekylära strömbrytaren" som återaktiverar hårväxten. 85% såg resultat i studier.</p>
                            </div>
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">2. Blockera DHT-skada (Rosmarin 3%)</h4>
                                <p className="text-[17px]">Lika effektivt som Minoxidil för att öka cirkulationen, men utan biverkningar eller beroende.</p>
                            </div>
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">3. Stoppa rote-kvävning (Aminexil)</h4>
                                <p className="text-[17px]">Mjukar upp det stela kollagenet runt roten så att håret kan andas och sitta kvar.</p>
                            </div>
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">4. Förläng tillväxten (Anagain™ 2%)</h4>
                                <p className="text-[17px]">Gör att håret stannar kvar längre på huvudet istället för att trilla ut efter några månader.</p>
                            </div>
                        </div>

                        {/* Testing Period */}
                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Min resa: Från keps till självförtroende
                        </h3>

                        <p className="text-[17px] mb-4">Jag köpte ett 3-månaders paket. 90-dagars garanti gjorde beslutet lätt.</p>

                        <p className="text-[17px] mb-3"><strong>Månad 1:</strong> Inga mirakel. Men håret i duschen minskade drastiskt. Inget mer panikartat räknande.</p>
                        <p className="text-[17px] mb-3"><strong>Månad 2:</strong> Jag började se små mörka fjun vid vikarna. De var korta, men de var DÄR.</p>
                        <p className="text-[17px] mb-8"><strong>Månad 3:</strong> Min frisör frågade: "Erik, vad gör du? Det är betydligt tätare här uppe."</p>

                        <div className="mb-6">
                            <img src="/31.jpg" alt="Erik efter 4 månader" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-10 font-bold text-center text-[#17242C]">Jag har slutat bära keps. Jag känner mig som mig själv igen.</p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Viktigt: Agera innan tidsfönstret stängs
                        </h3>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                            <p className="text-[17px] mb-4">Hårbotten är som en trädgård.</p>
                            <p className="text-[17px] mb-4">Om en blomma slokar kan du rädda den med vatten och näring.</p>
                            <p className="text-[17px] mb-4">Men om roten dör helt? Då hjälper ingenting i världen.</p>
                            <p className="text-[17px] font-bold">Varje månad du väntar är en månad där fler hårsäckar riskerar att stänga ner för gott.</p>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C] text-center" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            📦 Välj ditt paket för män:
                        </h3>

                        <div className="space-y-6 mb-10">
                            <div className="bg-white border-4 border-[#F4BE19] p-6 rounded-lg relative">
                                <div className="absolute -top-3 right-6 bg-[#DC2626] text-white text-[12px] font-bold px-4 py-1 rounded-full">🔥 MEST POPULÄR</div>
                                <h4 className="text-[20px] font-bold mb-2 text-[#17242C]">KÖP 3 BETALA FÖR 2 - SPARA 67%</h4>
                                <img src="/package-3-month.jpg" alt="3 månaders paket" className="w-full rounded-lg mb-4" />
                                <p className="text-[18px] font-bold text-[#DC2626] mb-2"><s className="text-gray-400">2394 kr</s> → 798kr</p>
                                <p className="text-[16px] text-gray-600 mb-3">3 flaskor (90 dagars supply)</p>
                                <p className="text-[15px] mb-4"><strong>Rekommenderas:</strong> Den tid det tar att se den biologiska återväxten.</p>
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[16px] py-4 rounded-lg shadow-md transition-all"
                                >
                                    Få 67% Rabatt Nu →
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#FFF9EA] border-2 border-[#F4BE19] p-6 rounded-lg my-10">
                            <h3 className="text-[24px] font-bold mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                🛡️ 90 Dagars Garanti
                            </h3>
                            <p className="text-[17px] mb-4">Använd Lumina i 90 dagar. Om du inte ser en märkbar skillnad vid tinningarna eller kronan – maila oss.</p>
                            <p className="text-[17px] font-bold">Pengarna tillbaka. Inga frågor.</p>
                        </div>

                        {/* Final CTA */}
                        <div className="bg-gray-100 p-8 rounded-lg text-center my-10">
                            <h3 className="font-bold text-[22px] mb-4 text-[#17242C]">Redo att rädda ditt hår?</h3>
                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] py-5 rounded shadow-xl uppercase tracking-wide"
                            >
                                → SE TILLGÄNGLIGA PAKET HÄR ←
                            </button>
                            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
                                <ShieldCheck size={16} /> 90 Dagar Garanti | <Truck size={16} /> Fri Frakt
                            </p>
                        </div>

                    </div>
                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-16 pb-40 text-center text-[13px] text-[#A0A4A8] border-t bg-gray-50">
                <p>&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="mt-4 opacity-50">Resultaten kan variera. Produkten är ett kosmetiskt serum designat för att stödja hårväxt vid konsekvent användning.</p>
            </div>
        </div>
    );
};

export default MenHairLossV5;

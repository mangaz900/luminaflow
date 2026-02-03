import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';

const MenHairLossV3: React.FC = () => {
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
        window.location.href = 'https://www.hairscanpro.com/p2';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-4 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "Jag trodde jag var dömd till rakapparat. Jag hade fel."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/32.jpg" alt="Man med begynnande tunnhårighet" className="w-full h-auto rounded-lg" />
                    </div>

                    {/* Subheadline */}
                    <div className="text-[16px] md:text-[18px] text-[#4F5256] mb-4 leading-snug font-sans">
                        Svenska män upptäcker hur man stoppar DHT-miniaturisering – och varför vanliga tillskott aldrig biter på vikar och krona
                    </div>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        14 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[17px] mb-4">
                            Tre strån i handfatet. Sen tio. Sen hela nävar.
                        </p>

                        <p className="text-[17px] mb-4">
                            Det är inte längre bara naturens gång.
                        </p>

                        <p className="text-[17px] mb-6">
                            Det är en klocka som tickar.
                        </p>

                        <p className="text-[17px] mb-4">
                            Om du börjar se hårbotten genom hjässan när taklampan lyser ner...
                        </p>

                        <p className="text-[17px] mb-4">
                            Om dina vikar vid tinningarna har krupit upp mer än för ett år sedan...
                        </p>

                        <p className="text-[17px] mb-6">
                            Om du känner paniken varje gång du drar handen genom håret...
                        </p>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/30.jpg" alt="Före och efter resultat man" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-8 font-bold">
                            Då måste du läsa detta.
                        </p>

                        <p className="text-[17px] mb-4">
                            Det finns en tyst kamp som tusentals svenska män för just nu.
                        </p>

                        <p className="text-[17px] mb-4">
                            De flesta ger upp. De rakar av allt.
                        </p>

                        <p className="text-[17px] mb-6">
                            Men här är sanningen:
                        </p>

                        <p className="text-[18px] mb-10 font-bold text-[#17242C]">
                            Det du tror är receptet för att rädda håret kanske faktiskt är det som låter det dö ut helt.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            När jag slutade undvika spegeln förändrades allt
                        </h3>

                        <p className="text-[17px] mb-4">
                            Mitt namn är Erik.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag är 45 år. Jobbar i Stockholm.
                        </p>

                        <p className="text-[17px] mb-4">
                            För två år sedan började jag märka det.
                        </p>

                        <p className="text-[17px] mb-4">
                            Först var det bara en känsla.
                        </p>

                        <p className="text-[17px] mb-6">
                            Lite glesare vid vikar. Hjässan kändes inte lika "tät" längre.
                        </p>

                        <p className="text-[17px] mb-4 italic">
                            "Det är bara generna," sa min polare. "Bara att acceptera."
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Men jag ville inte acceptera det.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det började smått – sen gick det fort
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/33.jpg" alt="Man applicerar serum" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-3">
                            <strong>Januari 2025:</strong> Jag började spendera 10 minuter varje morgon på att "täcka över" glesa partier.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Mars 2025:</strong> Min frisör erbjöd mig en "kortare frisyr för att dölja det". Jag kände mig gammal.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Maj 2025:</strong> Jag slutade ta foton. Om jag var tvungen att vara med på bild, såg jag alltid till att ha keps.
                        </p>

                        <p className="text-[17px] mb-8">
                            <strong>Juli 2025:</strong> Jag googlade hårtransplantation. 50 000 kr. Ingen garanti. Ouppnåeligt för mig.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Goda råd som inte hjälpte
                        </h3>

                        <p className="text-[17px] mb-4">
                            I augusti provade jag allt.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag köpte schampo som utlovade "instant volume".
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag tog Biotin-tabletter i sex månader.
                        </p>

                        <p className="text-[17px] mb-6">
                            Det enda som hände var att mina naglar blev hårdare. Håret? Fortfarande på väg bort.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag läste om Minoxidil. Biverkningar, kladdigt hår, livslångt beroende.
                        </p>

                        <p className="text-[17px] mb-6 italic">
                            "Är det verkligen värt biverkningar för lite mer hår?" tänkte jag.
                        </p>

                        <p className="text-[17px] mb-4">
                            Men sen hittade jag förklaringen jag letat efter.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Det handlade inte om vitaminer. Det handlade om biologi.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Sanningen om det manliga håret
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/3 (6).jpg" alt="Manlig hårbiologi" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Den stora boven för oss män heter DHT (Dihydrotestosteron).
                        </p>

                        <p className="text-[17px] mb-6">
                            Det är en restprodukt av testosteron som attackerar dina hårsäckar.
                        </p>

                        <p className="text-[18px] mb-8 font-bold text-[#17242C]">
                            Här är vad som dödar ditt hår just nu:
                        </p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Miniaturisering – när hårsäcken kvävs
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/problem-bild.jpg" alt="Miniaturisering illustration" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            Här är den enkla biologin:
                        </p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Hur det fungerar:
                            </h4>
                            <p className="text-[17px] mb-3">1. DHT binder sig till receptorer i hårbotten.</p>
                            <p className="text-[17px] mb-3">2. Hårsäcken börjar krympa (miniaturisering).</p>
                            <p className="text-[17px] mb-3">3. Tillväxtfasen kortas ner från år till bara månader.</p>
                            <p className="text-[17px]">4. Håret faller av innan det hinner bli tjockt eller långt.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Resultatet:
                            </h4>
                            <p className="text-[17px] mb-3">Vikarna kryper uppåt i jakt på tinningarna.</p>
                            <p className="text-[17px] mb-3">Hjässan blir "gles" och släpper igenom ljus.</p>
                            <p className="text-[17px] mb-3">Du får fjunigt "babyhår" istället för riktiga strån.</p>
                            <p className="text-[17px] font-bold">Tills hårsäcken somnar helt. Då är det för sent.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[18px] mb-4 font-bold text-[#17242C]">
                                Men här är den goda nyheten: Dina hårsäckar är troligen inte borta. De vilar bara.
                            </p>
                            <p className="text-[17px] mb-4">
                                Så länge du ser små fjun finns det hopp.
                            </p>
                            <p className="text-[17px] mb-4">
                                Hårsäckarna har gått in i en dvala på grund av DHT-stress.
                            </p>
                            <p className="text-[18px] font-bold text-[#17242C]">
                                Genom att motverka DHT och väcka rötterna kan du starta om processen.
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför tillskott och schampo är slöseri med tid
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/2 (6).jpg" alt="Schampo vs Serum" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-8">
                            Här är den brutala sanningen om marknaden:
                        </p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Orsak #1: Schampo stannar bara på ytan
                            </h4>
                            <p className="text-[17px] mb-4">
                                Du tvättar håret i 30 sekunder och sköljer sen bort allt.
                            </p>
                            <p className="text-[17px] mb-4">
                                Hur ska ingredienserna hinna tränga ner 3-4 mm under huden till roten?
                            </p>
                            <p className="text-[17px] font-bold">
                                Det händer inte. Du spolar ner dina pengar i avloppet.
                            </p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Orsak #2: Vitaminer når inte hårbotten
                            </h4>
                            <p className="text-[17px] mb-4">
                                Kroppen prioriterar dina organ först (hjärta, lungor). Håret är det sista som får näring.
                            </p>
                            <p className="text-[17px] mb-4">
                                Om du har DHT-stress hjälper inte vitaminer, hur mycket du än äter.
                            </p>
                            <p className="text-[17px] font-bold">
                                Du behöver en lokal attack direkt vid roten.
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Lösningen som förändrade min morgonrutin
                        </h3>

                        <p className="text-[17px] mb-6">
                            Jag hittade Lumina. Det var annorlunda.
                        </p>

                        <p className="text-[17px] mb-8">
                            Det var ett serum, inte en olja. Det var diskret, inte kladdigt. Men framför allt hade det rätt vapen:
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Vapen #1: Redensyl® – Väcker stamcellerna</h4>
                                <p className="text-[16px]">
                                    En patenterad aktivator som ger signalen: "Vakna, det är dags att växa." I kliniska studier överträffade det till och med vissa medicinska alternativ.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Vapen #2: Aminexil – Motverkar att roten "stryps"</h4>
                                <p className="text-[16px]">
                                    Det här mjukar upp kollagenet så att rötterna inte kvävs av stram hud. Det gör att håret sitter kvar längre.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Vapen #3: 3% Rosmarin – Cirkulationsboost</h4>
                                <p className="text-[16px]">
                                    Ger samma effekt som minoxidil på blodflödet, men utan klåda, hjärtklappning eller fett hår. Helt naturligt.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/34.jpg" alt="Lumina applikator och resultat" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-8">
                            Och den smarta delen? **Titanium-kulan.**
                        </p>

                        <p className="text-[17px] mb-8">
                            Jag rollade den bara över vikarna och kronan varje morgon. Det tog 30 sekunder. Det torkade på en minut. Ingen såg att jag hade något i håret.
                        </p>

                        <p className="text-[18px] mb-6 font-bold">
                            Min resa (2025):
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Månad 1:</strong> Inga mirakel, men håret i duschen minskade drastiskt.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Månad 2:</strong> Jag började se små mörka strån där det tidigare var helt blankt vid vikarna.
                        </p>

                        <p className="text-[17px] mb-6">
                            <strong>Månad 4:</strong> Min fru sa: "Erik, har du gjort något med håret? Det ser tätare ut."
                        </p>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/31.jpg" alt="Efter 4 månader med Lumina" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-12 font-bold text-center text-[#17242C]">
                            Jag har slutat bära keps. Jag har fått tillbaka mitt självförtroende.
                        </p>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad säger andra män?
                        </h3>

                        <div className="space-y-4 mb-12">
                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Började märka vikar vid 30. Testat allt. Lumina är det första som faktiskt gett resultat som syns i spegeln. Rekommenderas varmt."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Markus, 34, Göteborg</p>
                            </div>

                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Det bästa är att det inte kladdar. Jag använder det innan jag går till kontoret och det syns inte alls. Nu känns hårbotten tätare."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Johan, 42, Verifierad köpare</p>
                            </div>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varning: Det tar tid
                        </h3>

                        <p className="text-[17px] mb-8">
                            Det här är inte ett mirakel över natten. Om du vill ha en snabbfix får du skaffa en tupé.
                        </p>

                        <p className="text-[17px] mb-8">
                            Men om du är beredd att ge det 90 dagar av konsekvent användning... då tror jag att du kommer bli lika förvånad som jag.
                        </p>

                        {/* Final CTA */}
                        <div className="bg-[#FFF9EA] border border-[#F4BE19] p-6 rounded-lg text-center my-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#F4BE19] text-white text-[10px] font-bold px-2 py-1 uppercase">Begränsat Erbjudande</div>
                            <h3 className="font-bold text-[22px] mb-2 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>DITT EXKLUSIVA PAKET</h3>
                            <p className="text-gray-700 mb-6">Få 50% RABATT + 90-Dagars Nöjd-Kund-Garanti</p>

                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] py-4 rounded shadow-lg transition-transform transform hover:scale-[1.02] uppercase tracking-wide mb-4"
                            >
                                → SE TILLGÄNGLIGA PAKET FÖR MÄN HÄR ←
                            </button>

                            <div className="flex justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                                <span className="flex items-center gap-1"><ShieldCheck size={14} /> 90 Dagar Garanti</span>
                                <span className="flex items-center gap-1"><Truck size={14} /> Fri Frakt</span>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-8 pb-24 text-center text-[11px] text-[#8A8D91] border-t bg-white">
                <p>&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="mt-2">Produkten är ett kosmetiskt serum designat för att stötta hårväxt.</p>
            </div>

        </div>
    );
};

export default MenHairLossV3;

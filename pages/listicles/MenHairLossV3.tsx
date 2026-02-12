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
        window.location.href = 'https://www.luminahairpro.com/';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-4 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "Jag såg min krona i lampan. Jag tog tillbaka kontrollen."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/bild 1.jpg" alt="Män som ser över sitt hår" className="w-full h-auto rounded-lg" />
                    </div>

                    {/* Subheadline */}
                    <div className="text-[16px] md:text-[18px] text-[#4F5256] mb-4 leading-snug font-sans">
                        Män 30–55 ser samma sak om och om igen: i starkt ljus syns hårbotten i virveln, och plötsligt känns allt värre.
                    </div>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        3 februari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[17px] mb-4">
                            Det börjar ofta så här:
                        </p>

                        <p className="text-[17px] mb-4">
                            Du står i badrummet. Lampan lyser rakt ner.<br />
                            Du lutar huvudet lite… och där är den.
                        </p>

                        <p className="text-[18px] mb-6 font-bold">
                            Kronan.
                        </p>

                        <p className="text-[17px] mb-6">
                            Inte ett stort hål. Bara mer hårbotten än förr.
                        </p>

                        {/* Image 2 */}
                        <div className="mb-6">
                            <img src="/bild 3.jpg" alt="Håravfall vid kronan" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Om du:
                        </p>

                        <ul className="list-none pl-0 space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Ser hårbotten i virveln när ljuset kommer uppifrån.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Tänker på hur du ser ut i Zoom och på bilder.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Har testat något men tröttnat för att det blev kladdigt eller krångligt.</span>
                            </li>
                        </ul>

                        <p className="text-[18px] mb-8 font-bold">
                            Läs vidare.
                        </p>

                        <p className="text-[17px] mb-6">
                            För många män fastnar i samma problem:
                        </p>

                        <p className="text-[18px] mb-10 font-bold text-[#17242C]">
                            De vill göra något, men de vill inte göra en stor grej av det.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Ett foto bakifrån ändrade allt
                        </h3>

                        {/* Image 3 */}
                        <div className="mb-6">
                            <img src="/bild 4.jpg" alt="Johan 41" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Jag heter Johan. Jag är 41.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag tänkte inte på mitt hår varje dag.
                        </p>

                        <p className="text-[17px] mb-4">
                            Tills jag såg en bild som någon tog på jobbet. Bakifrån.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag såg kronan direkt.
                        </p>

                        <p className="text-[18px] mb-8 font-bold">
                            Det var då jag fattade att det inte bara handlar om “hår”.<br />
                            Det handlar om hur du ser ut i ljus och på kamera.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför kronan känns extra jobbig
                        </h3>


                        <p className="text-[17px] mb-4">
                            Kronan är svår att se själv.
                        </p>

                        <p className="text-[17px] mb-4">
                            Du märker den ofta först när:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>någon tar ett foto,</li>
                            <li>du ser dig i flera speglar,</li>
                            <li>eller när starkt ljus kommer uppifrån.</li>
                        </ul>

                        <p className="text-[17px] mb-6">
                            Det är därför den här typen av man i research kallas <strong>“Crown‑Thinning Professional”</strong>.
                        </p>

                        <p className="text-[17px] mb-8">
                            Det blir en synlig grej på jobbet, på möten, och på Zoom.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad som händer i håret (enkelt förklarat)
                        </h3>

                        {/* Image 5 */}
                        <div className="mb-6">
                            <img src="/problem-bild.jpg" alt="DHT förklaring" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Vanligt manligt håravfall (AGA) hänger ihop med ett hormon som heter DHT.
                        </p>

                        <p className="text-[17px] mb-4">
                            Det gör att hårstråna sakta kan bli:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>tunnare,</li>
                            <li>kortare,</li>
                            <li>och svagare.</li>
                        </ul>

                        <p className="text-[17px] mb-4">
                            Håret växer i cykler:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Det växer i 2–7 år.</li>
                            <li>Det pausar kort i 1–2 veckor.</li>
                            <li>Sen vilar det i cirka 3 månader innan det byts ut.</li>
                        </ul>

                        <p className="text-[17px] mb-4">
                            Det är en långsam grej. Därför smyger det på.
                        </p>

                        <p className="text-[17px] mb-8">
                            Och det är vanligt: ungefär 50% av män har AGA vid 50 års ålder.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför “inget funkar” för många män
                        </h3>

                        {/* Image 6 */}
                        <div className="mb-6">
                            <img src="/2 (6).jpg" alt="Andra produkter" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Jag testade också saker.
                        </p>

                        <p className="text-[17px] mb-6">
                            Men jag såg snabbt varför folk ger upp:
                        </p>

                        <div className="bg-[#f8f9fa] p-6 rounded-lg mb-6 border border-gray-200">
                            <p className="text-[17px] mb-4"><strong>Problem 1: Det känns kladdigt</strong><br />Många produkter gör håret fett. Då ser håret ännu tunnare ut. Det blir motsatsen till vad man vill.</p>
                            <p className="text-[17px] mb-4"><strong>Problem 2: Det blir en jobbig rutin</strong><br />Om det tar tid, luktar, rinner, eller förstör frisyren… då slutar man.</p>
                            <p className="text-[17px]"><strong>Problem 3: Man litar inte på bolagen</strong><br />Många är trötta på “subscription‑fällor” och krånglig avbokning.</p>
                        </div>

                        <p className="text-[18px] mb-10 font-bold text-center">
                            Och då hamnar man i samma loop: testa → tröttna → sluta → känna sig sämre.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det jag gjorde annorlunda
                        </h3>

                        {/* Image 7 - New */}
                        <div className="mb-6">
                            <img src="/bild 6.jpg" alt="Min plan" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Jag slutade leta efter “perfekt”.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag letade efter något jag kan göra varje dag utan att tänka.
                        </p>

                        <p className="text-[17px] mb-6">
                            För researchen säger samma sak tydligt:
                        </p>

                        <p className="text-[18px] mb-8 italic font-medium">
                            Det som stoppar flest män är friktion i vardagen (kladd, irritation, krångel).
                        </p>

                        <p className="text-[17px] mb-4">
                            Så jag valde en plan med tre regler:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mb-8">
                            <li>Det ska vara enkelt.</li>
                            <li>Det ska inte synas (ingen fet look).</li>
                            <li>Jag ska ge det 90 dagar.</li>
                        </ol>


                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad jag märkte efter ett tag
                        </h3>

                        <p className="text-[17px] mb-4">
                            Första veckorna var det ingen “wow”.
                        </p>

                        <p className="text-[17px] mb-6">
                            Men det var också första gången jag fortsatte, just för att det inte sabbade morgonen.
                        </p>


                        <p className="text-[17px] mb-4">
                            Efter ett tag märkte jag det jag faktiskt ville ha:
                        </p>

                        <p className="text-[18px] mb-6 font-bold">
                            Att kronan såg mer “ifylld” ut i starkt ljus.
                        </p>

                        <p className="text-[17px] mb-8">
                            Inte att jag såg 20 ut. Bara mer normal ut. Det researchen kallar <strong>“invisible density”</strong>.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Detta är inte för alla
                        </h3>

                        {/* Image 10 */}
                        <div className="mb-6">
                            <img src="/produkt-ingredienser.jpg" alt="Inte mirakel" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Det här är inte för dig om:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>du vill ha resultat på en vecka,</li>
                            <li>du hatar allt som heter rutin,</li>
                            <li>du vill ha en mirakelgrej utan att göra något varje dag.</li>
                        </ul>

                        <p className="text-[17px] mb-4">
                            Men om du:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-10">
                            <li>vill slippa se hårbotten i lampan,</li>
                            <li>vill ha något som inte gör håret fett,</li>
                            <li>vill ha en enkel plan du kan hålla i,</li>
                        </ul>

                        <p className="text-[20px] mb-12 font-bold text-center">
                            …då är 90 dagar en rimlig start.
                        </p>

                        {/* Image 11 */}
                        <div className="mb-6">
                            <img src="/losning-bild.jpg" alt="Lumina Systemet" className="w-full h-auto rounded-lg" />
                        </div>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad du gör nu
                        </h3>

                        <p className="text-[17px] mb-4">
                            Du har två val:
                        </p>

                        <div className="space-y-4 mb-12">
                            <p className="text-[17px]"><strong>Val 1:</strong> Gör inget och hoppas att det “bara var ljuset”.</p>
                            <p className="text-[17px]"><strong>Val 2:</strong> Testa en enkel rutin i 90 dagar och se vad som händer.</p>
                        </div>

                        {/* Image 12 */}
                        <div className="mb-6">
                            <img src="/bild 5.jpg" alt="Resultat 90 dagar" className="w-full h-auto rounded-lg" />
                        </div>

                        {/* Final CTA */}
                        <div className="bg-[#FFF9EA] border border-[#F4BE19] p-6 rounded-lg text-center my-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#F4BE19] text-white text-[10px] font-bold px-2 py-1 uppercase">Begränsat Erbjudande</div>
                            <h3 className="font-bold text-[22px] mb-2 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>PROVA 90 DAGAR</h3>
                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] py-4 rounded shadow-lg transition-transform transform hover:scale-[1.02] uppercase tracking-wide mb-4"
                            >
                                → KOLLA TILLGÄNGLIGHET / GÅ VIDARE HÄR ←
                            </button>

                            <div className="flex justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                                <span className="flex items-center gap-1"><ShieldCheck size={14} /> 90 Dagar Öppet Köp</span>
                                <span className="flex items-center gap-1"><Truck size={14} /> Fri Frakt</span>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-8 pb-24 text-center text-[11px] text-[#8A8D91] border-t bg-white">
                <p>&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="mt-2">(Obs: Sponsrat innehåll. Denna webbplats är inte en del av Facebook eller Facebook Inc.)</p>
            </div>

        </div>
    );
};

export default MenHairLossV3;

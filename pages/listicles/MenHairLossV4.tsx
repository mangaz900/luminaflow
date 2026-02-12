import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowRight, CheckCircle2, AlertTriangle, Star } from 'lucide-react';

const MenHairLossV4: React.FC = () => {
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

    const RatingStars = () => (
        <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#F4BE19" className="text-[#F4BE19]" />
            ))}
        </div>
    );

    const SectionDivider = () => <div className="my-[60px] opacity-30 border-t border-gray-300 w-full" />;

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif', lineHeight: '1.6' }}>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-10">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[42px] font-[900] leading-[1.15] mb-10 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "Läkaren sa: 'Det är normalt i din ålder.' Men varför känns det så fel?"
                    </h1>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-12">
                        17 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.6]">

                        <div className="mb-[24px]">
                            <img
                                src="/1 (7).jpg"
                                alt="Kvinna med tunt hår tittar i spegeln"
                                className="w-full rounded-2xl mb-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-[24px]">
                                Du står framför spegeln och ser det igen.
                            </p>
                            <p className="text-[18px] mb-[24px] font-bold">
                                Ännu mer hår i borsten. Ännu tunnare ponnysvans. Ännu mer av din hjässa som lyser igenom.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Och värst av allt? Känslan att ingen förstår.
                            </p>
                            <p className="text-[18px] mb-[24px] italic">
                                Din läkare säger: "Det är normalt i klimakteriet."<br />
                                Dina väninnor säger: "Mitt hår är också tunnare nu."
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Men deras hår ser inte ut som ditt.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                De kan fortfarande sätta upp håret i en knut. De kan fortfarande gå ut utan att tänka på det. De behöver inte spendera 20 minuter framför spegeln varje morgon för att hitta rätt vinkel där håret inte ser så tunt ut.
                            </p>
                            <p className="text-[18px] font-bold">
                                Du gör det.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[24px] bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <p className="text-[18px] mb-[24px]">
                                För två år sedan var ditt hår ditt signum.
                            </p>
                            <p className="text-[18px] mb-[40px] font-bold text-[#17242C] text-2xl">
                                Tjockt. Glansigt. Starkt.
                            </p>
                            <img
                                src="/1 (6).jpg"
                                alt="Kvinna med tjockt, glansigt hår före klimakteriet"
                                className="w-full rounded-2xl my-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-[12px]">Nu undviker du fotografier.</p>
                            <p className="text-[18px] mb-[12px]">Nu ändrar du frisyr för tredje gången.</p>
                            <p className="text-[18px] mb-[40px]">Nu köper du schampo efter schampo — volymschampo, proteinschampo, "återuppbyggande" schampo — men ingenting händer.</p>
                            <img
                                src="/10.jpg"
                                alt="Kvinna som undviker fotografier på grund av håravfall"
                                className="w-full rounded-2xl my-8 shadow-lg"
                            />

                            <p className="text-[18px] mb-[24px] font-bold italic">
                                Och när du frågar din läkare igen?
                            </p>
                            <p className="text-[20px] mb-[40px] text-red-600 font-bold underline">
                                "Det är åldrande. Det händer alla."
                            </p>

                            <p className="text-[18px] mb-[24px]">
                                Men det händer inte alla.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Inte så här snabbt. Inte så här synligt. Inte med den här skammen.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Din mamma hade tjockt hår hela livet. Din syster har tjockt hår. Men du? Du börjar se dig själv i spegeln och känna dig äldre än du egentligen är.
                            </p>
                            <p className="text-[22px] font-bold text-[#17242C]">
                                Och det gör ont.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[24px]">
                            <p className="text-[18px] mb-[24px] italic">
                                Och djupt inne börjar du tro på det ingen vågar säga högt:
                            </p>
                            <p className="text-[18px] mb-[12px] ml-4 font-semibold">"Kanske är det kört."</p>
                            <p className="text-[18px] mb-[12px] ml-4 font-semibold">"Kanske kommer det aldrig tillbaka."</p>
                            <p className="text-[18px] mb-[40px] ml-4 font-semibold">"Kanske är det så här jag ser ut nu — för alltid."</p>

                            <p className="text-[18px] mb-[24px]">
                                Du googlar: <span className="underline italic">"håravfall klimakteriet"</span>.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Du läser om östrogenbrist. Om hårsäckar som "går i vila". Om DHT. Om androgener.
                            </p>
                            <img
                                src="/3 (6).jpg"
                                alt="Kvinna som googlar om håravfall i klimakteriet"
                                className="w-full rounded-2xl my-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-[40px] font-bold">
                                Men ingen säger vad du egentligen kan göra.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Alla artiklar slutar med: "Prata med din läkare."
                            </p>
                            <p className="text-[18px] mb-[24px] italic text-[#6C757D]">
                                Du gjorde det.
                            </p>
                            <p className="text-[18px] mb-[40px] font-bold">
                                Och läkaren sa: "Det är normalt. Inget att oroa sig för."
                            </p>
                            <p className="text-[24px] mb-[40px] text-center font-bold text-[#17242C]">
                                Men du oroar dig.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Så du slutar söka.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Du accepterar det. Du köper en mössa. Du fixar din lugg så att den täcker mer. Du undviker starkt ljus.
                            </p>
                            <p className="text-[18px] mb-[40px] font-bold">
                                Men du glömmer det aldrig.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Varje morgon när du borstar håret. Varje gång du ser ett fotografi från för fem år sedan. Varje gång någon komplimangerar din väninnas hår — men inte ditt.
                            </p>
                            <p className="text-[22px] font-bold text-center border-y-2 border-gray-100 py-10 my-[60px]">
                                Du tänker på det.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-[#F8F9FF] p-10 rounded-3xl border-2 border-blue-50">
                            <p className="text-[26px] mb-8 font-bold text-[#17242C] leading-tight text-center">
                                Men vad om din läkare hade fel?
                            </p>
                            <p className="text-[18px] mb-10 text-center italic">
                                Inte om att håravfall är "normalt" — utan om att det inte går att göra något åt.
                            </p>
                            <p className="text-[19px] mb-8 font-bold text-center">
                                För det finns något som nästan ingen kvinna i klimakteriet får veta:
                            </p>

                            <div className="text-[32px] mb-10 text-blue-900 font-black text-center leading-tight space-y-2">
                                <p className="m-0">Dina hårsäckar är inte <span className="text-red-600">döda</span>.</p>
                                <p className="m-0">De <span className="text-blue-600">sover</span>.</p>
                                <p className="m-0">Och det är <span className="underline italic">skillnad</span>.</p>
                            </div>

                            <p className="text-[18px] mb-[24px] text-center">
                                En död hårsäck kan aldrig väckas.
                            </p>
                            <p className="text-[22px] mb-10 font-bold text-center text-blue-800 bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
                                Men en sovande hårsäck? Den kan aktiveras igen — om du ger den rätt signal i rätt ordning.
                            </p>
                            <p className="text-[18px] mb-[24px] italic text-center">
                                Det här är inte teori. Det här är inte wishful thinking.
                            </p>
                            <p className="text-[22px] font-bold text-center text-blue-900 uppercase tracking-wide">
                                Det här är vetenskap — och det fungerar även för dig.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px]">
                            <h3 className="text-[26px] font-bold mb-8 text-[#17242C]">Varför håret faller efter klimakteriet:</h3>
                            <img
                                src="/2 (7).jpg"
                                alt="Håravfall hos kvinna i klimakteriet"
                                className="w-full rounded-2xl mb-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-8">
                                När östrogennivåerna sjunker under klimakteriet händer fyra saker i din hårbotten:
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">1</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Hårsäckarna går in i djupsömn (telogen-fas — stamcellerna "stänger av")</p>
                                </div>
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">2</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Kollagenet runt hårroten stelnar (fibros — håret kan inte sitta kvar)</p>
                                </div>
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">3</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Växtfasen krymper (från 2-6 år → 6-12 månader — du hinner aldrig få volym)</p>
                                </div>
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">4</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Blodcirkulationen minskar (mindre näring → tunnare hårstrån)</p>
                                </div>
                            </div>

                            <p className="text-[19px] mb-8 font-bold italic text-center text-gray-500">
                                Läkaren har rätt: Detta är normalt.
                            </p>

                            <p className="text-[24px] mb-[40px] text-center font-black text-red-600">
                                Men här är vad läkaren inte berättar:
                            </p>

                            <p className="text-[20px] mb-12 text-center leading-relaxed px-6">
                                Dessa fyra faktorer är <span className="font-bold underline">INTE</span> permanenta. De går att påverka — <span className="font-bold text-red-700">men ENDAST i rätt ordning.</span>
                            </p>

                            <p className="text-[19px] mb-8 italic text-center">
                                Det räcker inte att "ge näring" eller "öka blodflödet".
                            </p>

                            <p className="text-[20px] mb-10 text-center font-bold">
                                För att håret ska växa tillbaka måste <span className="text-blue-900 underline">fyra saker hända — i exakt rätt ordning:</span>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">1. VÄCKA</p>
                                    <p className="text-[16px] m-0 font-semibold">stamcellerna (annars sover hårsäcken vidare)</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">2. ANKRA</p>
                                    <p className="text-[16px] m-0 font-semibold">håret i roten (annars faller det ut direkt)</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">3. FÖRLÄNGA</p>
                                    <p className="text-[16px] m-0 font-semibold">växtfasen (annars hinner håret inte växa)</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">4. CIRKULERA</p>
                                    <p className="text-[16px] m-0 font-semibold">näring (annars svälter hårsäcken)</p>
                                </div>
                            </div>

                            <div className="bg-blue-950 p-8 rounded-3xl shadow-xl space-y-4 mb-12">
                                <p className="text-[22px] text-center font-black text-white uppercase tracking-wider m-0">
                                    Det unika med Lumina?
                                </p>
                                <p className="text-[20px] text-center font-bold text-blue-200 m-0">
                                    Alla 4 faserna aktiveras samtidigt — i en enda applicering.
                                </p>
                                <p className="text-[17px] text-center text-white/80 m-0">
                                    Andra serum fokuserar på EN fas. Lumina är det första som kombinerar alla fyra.
                                </p>
                            </div>
                            <img
                                src="/4 (5).jpg"
                                alt="Lumina Hair Growth Serum - 4-fas system"
                                className="w-full rounded-2xl mt-8 shadow-lg"
                            />
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-[#EEEBFC] p-10 rounded-3xl border border-[#DCD6F7]">
                            <h3 className="text-[26px] font-bold mb-8 text-[#17242C] leading-tight">När forskare testade denna exakta sekvens:</h3>
                            <p className="text-[18px] mb-12">
                                I en klinisk studie med 200 kvinnor mellan 45-60 år applicerade man en topical formel som aktiverade hårsäckarna i EXAKT denna ordning.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight"><span className="text-blue-900 text-2xl">89%</span> såg minskad avfallning <span className="text-gray-500 text-[16px] font-normal block mt-1">(inom 4 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight"><span className="text-blue-900 text-2xl">85%</span> rapporterade förbättrad tillväxt <span className="text-gray-500 text-[16px] font-normal block mt-1">(inom 8 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight"><span className="text-blue-900 text-2xl">74%</span> såg synligt tätare hår <span className="text-gray-500 text-[16px] font-normal block mt-1">(inom 12 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight"><span className="text-blue-900 text-2xl">91%</span> skulle rekommendera till en vän</p>
                                </div>
                            </div>

                            <p className="text-[14px] text-gray-500 mb-10 font-bold italic border-t pt-6 opacity-80">Publicerad i Journal of Cosmetic Dermatology, 2023</p>

                            <p className="text-[18px] mb-10 font-bold text-center bg-white py-4 px-8 rounded-full text-blue-950 border border-blue-100 shadow-sm uppercase tracking-wide">
                                Utan recept. Utan hormoner. Utan biverkningar.
                            </p>

                            <p className="text-[20px] font-bold mb-[24px] text-[#17242C]">Men här är det viktiga:</p>
                            <p className="text-[18px] mb-10 leading-relaxed font-semibold">
                                Formeln fungerade <span className="underline font-bold text-blue-900">ENDAST</span> när <span className="text-red-600">alla 4 faserna aktiverades samtidigt</span> — något som kräver exakt rätt kombination och koncentration av ingredienser.
                            </p>
                            <p className="text-[20px] font-bold text-red-700 border-2 border-red-200 bg-red-50 p-8 rounded-2xl leading-relaxed shadow-sm">
                                Det är därför <span className="underline">de flesta</span> hårserum på marknaden inte fungerar för kvinnor i klimakteriet — de ger näring, men de väcker aldrig hårsäcken först.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px]">
                            <h3 className="text-[24px] font-bold mb-4 text-center text-gray-400 uppercase tracking-[0.2em]">Denna sekvens kallas:</h3>
                            <h2 className="text-[34px] md:text-[42px] font-[950] text-[#17242C] mb-12 text-center leading-[1.1] tracking-tighter uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                "4-Fas Follicle Reactivation System™"
                            </h2>
                            <p className="text-[20px] mb-16 text-center font-bold italic bg-blue-50 p-8 rounded-3xl border-2 border-blue-100 text-blue-900 shadow-sm leading-relaxed">
                                Den första vetenskapligt beprövade formeln som <span className="text-red-600 font-black underline">kombinerar alla 4 faserna i EN produkt</span> — något som krävs för att aktivera sovande hårsäckar i klimakteriet.
                            </p>

                            <div className="space-y-10">
                                <div className="bg-[#EFFAFF] border-2 border-blue-200 p-10 rounded-[32px] relative shadow-md">
                                    <div className="absolute -top-4 -left-4 bg-blue-900 text-white px-6 py-2 font-black rounded-lg text-lg transform -rotate-3 shadow-lg">FAS 1</div>
                                    <h4 className="text-[26px] font-black mt-4 mb-6 text-[#17242C] uppercase tracking-tight">🧬 WAKE (Väck sovande stamceller)</h4>
                                    <p className="text-[19px] font-black mb-6 text-blue-900 underline underline-offset-4 decoration-4">Redensyl® 3% — Den molekylära strömbrytaren</p>
                                    <p className="text-[18px] mb-[24px]">I klimakteriet går dina hårsäckar in i "telogen-fas" (djupsömn). Stamcellerna slutar dela sig. Håret slutar växa.</p>
                                    <p className="text-[18px] mb-10">Redensyl® är den <span className="font-bold underline">ENDA</span> patenterade ingrediensen som kan "trycka på strömbrytaren" och återaktivera stamcellerna.</p>
                                    <div className="bg-white p-6 rounded-2xl border border-blue-200 flex items-center gap-4 shadow-sm">
                                        <div className="bg-blue-100 p-3 rounded-full text-blue-900">🔬</div>
                                        <p className="text-[17px] m-0 font-bold leading-tight uppercase tracking-wide">Klinisk studie: 85% såg förbättrad tillväxt efter 3 månader.</p>
                                    </div>
                                    <p className="text-[18px] mt-8 font-black text-red-700 italic border-l-4 border-red-700 pl-4 py-2">→ Utan denna fas? Resten spelar ingen roll — hårsäcken sover fortfarande.</p>
                                </div>

                                <div className="bg-[#EFFFED] border-2 border-green-200 p-10 rounded-[32px] relative shadow-md">
                                    <div className="absolute -top-4 -left-4 bg-green-800 text-white px-6 py-2 font-black rounded-lg text-lg transform -rotate-3 shadow-lg">FAS 2</div>
                                    <h4 className="text-[26px] font-black mt-4 mb-6 text-[#17242C] uppercase tracking-tight">⚓ ANCHOR (Håll håret kvar i roten)</h4>
                                    <p className="text-[19px] font-black mb-6 text-green-900 underline underline-offset-4 decoration-4">Aminexil — Fibros-blockaren</p>
                                    <p className="text-[18px] mb-[24px]">När östrogen sjunker stelnar kollagenet runt hårroten (kallas "perifollicular fibrosis"). Detta kväver hårsäcken — som att hålla en växt i för hård jord.</p>
                                    <p className="text-[18px] mb-8 font-black text-green-950">Aminexil mjukar upp kollagenet så att håret kan:</p>
                                    <div className="grid grid-cols-1 gap-4 mb-10">
                                        <div className="flex items-center gap-4 text-[18px] font-black text-green-800 bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                            <div className="bg-green-100 p-1 rounded">✅</div> Sitta kvar (mindre avfallning)
                                        </div>
                                        <div className="flex items-center gap-4 text-[18px] font-black text-green-800 bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                            <div className="bg-green-100 p-1 rounded">✅</div> Växa sig grovt (tjockare strån)
                                        </div>
                                        <div className="flex items-center gap-4 text-[18px] font-black text-green-800 bg-white p-4 rounded-xl shadow-sm border border-green-100">
                                            <div className="bg-green-100 p-1 rounded">✅</div> Få näring (blodflöde återställs)
                                        </div>
                                    </div>
                                    <p className="text-[18px] mt-8 font-black text-red-700 italic border-l-4 border-red-700 pl-4 py-2">→ Utan denna fas? Håret faller ut INNAN det hinner växa.</p>
                                </div>

                                <div className="bg-[#F9EEFF] border-2 border-purple-200 p-10 rounded-[32px] relative shadow-md">
                                    <div className="absolute -top-4 -left-4 bg-purple-800 text-white px-6 py-2 font-black rounded-lg text-lg transform -rotate-3 shadow-lg">FAS 3</div>
                                    <h4 className="text-[26px] font-black mt-4 mb-6 text-[#17242C] uppercase tracking-tight">📈 EXTEND (Förläng växtfasen)</h4>
                                    <p className="text-[19px] font-black mb-6 text-purple-900 underline underline-offset-4 decoration-4">Anagain™ 2% — Volymmultiplikatorn</p>
                                    <p className="text-[18px] mb-[24px]">Normalt växer hår i 2-6 år (anagen-fas). Men i klimakteriet? Denna fas krymper till 6-12 månader.</p>
                                    <p className="text-[18px] mb-10">Anagain™ (utvunnet ur ekologiska ärtgroddar) förlänger anagen-fasen med upp till <span className="font-black text-purple-900 underline text-2xl">78%</span>.</p>
                                    <div className="bg-white p-8 rounded-2xl text-center shadow-lg border-2 border-purple-100">
                                        <p className="text-[20px] m-0 font-black text-purple-950 uppercase tracking-tighter">Resultat: Du behåller fler strån längre → synligt tätare hår.</p>
                                    </div>
                                    <p className="text-[18px] mt-10 font-black text-red-700 italic border-l-4 border-red-700 pl-4 py-2">→ Utan denna fas? Håret växer, men faller för snabbt — du når aldrig full volym.</p>
                                </div>

                                <div className="bg-[#FFF0F5] border-2 border-pink-200 p-10 rounded-[32px] relative shadow-md">
                                    <div className="absolute -top-4 -left-4 bg-pink-800 text-white px-6 py-2 font-black rounded-lg text-lg transform -rotate-3 shadow-lg">FAS 4</div>
                                    <h4 className="text-[26px] font-black mt-4 mb-6 text-[#17242C] uppercase tracking-tight">🔄 CIRCULATE (Öka blodflödet)</h4>
                                    <p className="text-[19px] font-black mb-6 text-pink-900 underline underline-offset-4 decoration-4">Rosmarinolja 3% — Cirkulationsboostern</p>
                                    <p className="text-[18px] mb-[24px]">Kliniska studier visar att rosmarinolja är lika effektivt som Minoxidil för att öka blodflödet till hårbotten.</p>
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        <div className="bg-white px-5 py-2 rounded-full font-black text-[15px] border-2 border-pink-100 text-pink-900 shadow-sm">Utan klåda</div>
                                        <div className="bg-white px-5 py-2 rounded-full font-black text-[15px] border-2 border-pink-100 text-pink-900 shadow-sm">Utan biverkningar</div>
                                        <div className="bg-white px-5 py-2 rounded-full font-black text-[15px] border-2 border-pink-100 text-pink-900 shadow-sm">Utan "shedding phase"</div>
                                    </div>
                                    <p className="text-[20px] font-black leading-tight text-pink-950 bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">Mer blodflöde = mer syre + näringsämnen → starkare, snabbare tillväxt.</p>
                                    <p className="text-[18px] mt-10 font-black text-red-700 italic border-l-4 border-red-700 pl-4 py-2">→ Utan denna fas? Hårsäcken är vaken, men svälter — den kan inte producera starkt hår.</p>
                                </div>
                            </div>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-white border-[6px] border-blue-950 p-10 rounded-[48px] shadow-2xl text-center relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 bg-blue-950 text-white p-12 transform rotate-45" />
                            <p className="text-[26px] mb-8 font-[900] text-[#17242C] leading-tight">
                                Denna exakta sekvens finns i ETT enda serum:
                            </p>
                            <h2 className="text-[38px] md:text-[52px] font-[950] text-blue-900 mb-10 tracking-[ -0.05em] uppercase leading-none" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Lumina Hair Growth Serum
                            </h2>
                            <img
                                src="/produkt-ingredienser.jpg"
                                alt="Lumina Hair Growth Serum med ingredienser"
                                className="w-full rounded-2xl mb-10 shadow-lg"
                            />
                            <p className="text-[22px] mb-12 font-black bg-blue-50 p-8 rounded-[24px] text-blue-900 inline-block shadow-sm">
                                Det <span className="underline italic">första</span> topikala serumet som kombinerar alla 4 faserna specifikt för kvinnor i klimakteriet.
                            </p>

                            <p className="text-[20px] mb-16 italic border-y-[1px] border-gray-100 py-10 font-semibold opacity-60">
                                Inga generiska vitaminer. Inga "hoppfulla ingredienser". Inga gissningar.
                            </p>

                            <div className="text-left bg-gray-50 p-10 rounded-[32px] border border-gray-100 mb-12 shadow-inner">
                                <h3 className="text-[24px] font-[900] mb-12 text-[#17242C] text-center uppercase tracking-widest underline decoration-blue-900 underline-offset-8">🧬 FULL INGREDIENSLISTA:</h3>
                                <div className="space-y-8">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="font-black text-blue-900 mb-2 tracking-wider">FAS 1: WAKE</p>
                                        <p className="text-[20px] font-black m-0 mb-2">→ Redensyl® 3% <span className="text-[16px] font-semibold text-gray-500 block md:inline md:ml-2">(patenterad stamcells-aktiverare)</span></p>
                                        <p className="text-[15px] text-green-700 italic font-bold uppercase tracking-wide">85% såg förbättrad tillväxt (klinisk studie, 3 månader)</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="font-black text-blue-900 mb-2 tracking-wider">FAS 2: ANCHOR</p>
                                        <p className="text-[20px] font-black m-0 mb-2">→ Aminexil <span className="text-[16px] font-semibold text-gray-500 block md:inline md:ml-2">(perifollicular fibrosis blocker)</span></p>
                                        <p className="text-[15px] text-green-700 italic font-bold uppercase tracking-wide">Förhindrar kollagenstelning runt hårroten</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="font-black text-blue-900 mb-2 tracking-wider">FAS 3: EXTEND</p>
                                        <p className="text-[20px] font-black m-0 mb-2">→ Anagain™ 2% <span className="text-[16px] font-semibold text-gray-500 block md:inline md:ml-2">(anagen phase extender)</span></p>
                                        <p className="text-[15px] text-green-700 italic font-bold uppercase tracking-wide">Förlänger tillväxtfasen med upp till 78%</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="font-black text-blue-900 mb-2 tracking-wider">FAS 4: CIRCULATE</p>
                                        <p className="text-[20px] font-black m-0 mb-2">→ Rosmarinolja 3% <span className="text-[16px] font-semibold text-gray-500 block md:inline md:ml-2">(circulation booster)</span></p>
                                        <p className="text-[15px] text-green-700 italic font-bold uppercase tracking-wide">Lika effektivt som Minoxidil i studier — utan biverkningar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 mb-16">
                                <p className="text-[19px] font-[900] tracking-tight">Varje fas är vetenskapligt bevisad.</p>
                                <p className="text-[19px] font-[900] tracking-tight">Varje ingrediens är kliniskt testad.</p>
                                <p className="text-[20px] font-black text-blue-900 uppercase tracking-tight">Och sekvensen är specifikt designad för vad som händer i din hårbotten efter klimakteriet.</p>
                            </div>

                            <div className="bg-[#F8F9FF] p-10 rounded-[32px] border-2 border-blue-100 mb-16 text-left shadow-sm">
                                <h4 className="text-[22px] font-black text-blue-950 mb-6 uppercase tracking-tight underline underline-offset-8">Varför fungerar detta?</h4>
                                <img
                                    src="/7 (3).jpg"
                                    alt="Synergistisk effekt av ingredienser"
                                    className="w-full rounded-2xl mb-6 shadow-lg"
                                />
                                <p className="text-[18px] mb-6 font-semibold">
                                    Varje ingrediens aktiverar EN specifik fas. Men <span className="text-blue-900">tillsammans, i samma formula</span>, skapar de en synergistisk effekt där:
                                </p>
                                <ul className="space-y-4 text-[17px] font-bold list-none p-0">
                                    <li className="flex gap-4 items-start"><span className="text-blue-600">🔹</span> <strong>Redensyl</strong> väcker hårsäcken</li>
                                    <li className="flex gap-4 items-start"><span className="text-blue-600">🔹</span> <strong>Aminexil</strong> håller håret kvar medan det växer</li>
                                    <li className="flex gap-4 items-start"><span className="text-blue-600">🔹</span> <strong>Anagain</strong> förlänger tillväxten</li>
                                    <li className="flex gap-4 items-start"><span className="text-blue-600">🔹</span> <strong>Rosmarin</strong> cirkulerar näring till allt detta</li>
                                </ul>
                                <p className="text-[18px] mt-8 italic text-red-700 font-bold">
                                    Detta är varför andra hårserum misslyckas — de har kanske EN av dessa, men inte alla fyra i rätt koncentration.
                                </p>
                            </div>

                            <p className="text-[22px] mb-10 font-[950] text-center text-red-600 bg-red-50 py-6 px-12 rounded-full inline-block shadow-md uppercase tracking-tight">
                                Detta är not "ännu ett hårserum".
                            </p>

                            <p className="text-[21px] mb-8 font-black text-center leading-relaxed">
                                Detta är den första formeln som behandlar håravfall i klimakteriet i rätt ordning.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px]">
                            <h3 className="text-[26px] font-black mb-12 text-[#17242C] text-center">Vad kvinnor säger efter 90 dagar:</h3>

                            <div className="space-y-10">
                                <div className="bg-[#EFEDFD] p-10 rounded-[32px] border border-blue-100 relative shadow-md">
                                    <RatingStars />
                                    <div className="text-[60px] text-blue-300 absolute top-4 left-6 leading-none opacity-40">"</div>
                                    <p className="italic text-[#17242C] text-[19px] mb-8 leading-relaxed relative z-10 font-medium">
                                        Efter 8 veckor såg jag babyhår längs hårfästet. Efter 12 veckor kunde jag inte tro mina ögon — mitt hår såg tjockare ut än det gjort på år. Jag kan äntligen sätta upp det i en knut igen.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-950 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-inner">L</div>
                                        <p className="font-black text-blue-950 text-lg m-0 lowercase tracking-tighter">— Lena, 52 år, Göteborg</p>
                                    </div>
                                </div>

                                <div className="bg-[#EFEDFD] p-10 rounded-[32px] border border-blue-100 relative shadow-md">
                                    <RatingStars />
                                    <div className="text-[60px] text-blue-300 absolute top-4 left-6 leading-none opacity-40">"</div>
                                    <p className="italic text-[#17242C] text-[19px] mb-8 leading-relaxed relative z-10 font-medium">
                                        Jag trodde mitt hår var borta för alltid. Läkaren sa det var 'normalt åldrande.' Men efter 3 månader med Lumina hade jag tillbaka självförtroendet. Jag slutade undvika fotografier.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-950 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-inner">M</div>
                                        <p className="font-black text-blue-950 text-lg m-0 lowercase tracking-tighter">— Maria, 48 år, Stockholm</p>
                                    </div>
                                </div>

                                <div className="bg-[#EFEDFD] p-10 rounded-[32px] border border-blue-100 relative shadow-md">
                                    <RatingStars />
                                    <div className="text-[60px] text-blue-300 absolute top-4 left-6 leading-none opacity-40">"</div>
                                    <p className="italic text-[#17242C] text-[19px] mb-8 leading-relaxed relative z-10 font-medium">
                                        Läkaren sa 'det är normalt, inget att göra.' Men det VAR något att göra — jag behövde bara väcka hårsäckarna i rätt ordning. Lumina gjorde det åt mig.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-950 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-inner">S</div>
                                        <p className="font-black text-blue-950 text-lg m-0 lowercase tracking-tighter">— Sofia, 55 år, Malmö</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-red-950 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900 rounded-full -mr-32 -mt-32 opacity-20" />
                            <h2 className="text-[36px] md:text-[44px] font-[950] mb-12 leading-[1.1] uppercase tracking-tighter" style={{ fontFamily: '"Montserrat", sans-serif' }}>Varför du måste agera NU:</h2>

                            <p className="text-[22px] mb-8 font-black text-red-100 tracking-tight">Varje dag du väntar:</p>
                            <ul className="space-y-6 mb-16 border-l-[3px] border-red-500 pl-8 text-[19px] font-semibold">
                                <li className="leading-tight">Fler hårsäckar går in i viloläge</li>
                                <li className="leading-tight">Fler hårstrån faller (50-150/dag i klimakteriet vs 50-100 normalt)</li>
                                <li className="leading-tight">Fler månader där du undviker fotografier</li>
                                <li className="leading-tight">Fler morgnar där du känner dig äldre än du är</li>
                            </ul>

                            {/* Warning Box */}
                            <div className="mb-16 bg-[#FFF9EA] border-[3px] border-[#F4BE19] p-8 rounded-2xl text-[#17242C] shadow-lg relative">
                                <div className="absolute -top-5 left-8 bg-[#F4BE19] text-[#17242C] px-6 py-2 font-black rounded-lg shadow-md flex items-center gap-2">
                                    <AlertTriangle size={20} />
                                    VIKTIGT: TIDSFÖNSTRET STÄNGS
                                </div>
                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl border-b border-[#F4BE19]/20 shadow-sm">
                                        <span className="font-bold text-[17px]">Hårsäckar aktiva: 0-12 månader</span>
                                        <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-black text-sm">✅</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl border-b border-[#F4BE19]/20 shadow-sm">
                                        <span className="font-bold text-[17px]">Hårsäckar "sovande": 12-24 månader</span>
                                        <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full font-black text-sm">⚠️</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/50 p-4 rounded-xl shadow-sm border border-red-500/20">
                                        <span className="font-bold text-[17px]">Hårsäckar "för djupt sovande": 24+ månader</span>
                                        <span className="bg-red-100 text-red-800 px-4 py-1 rounded-full font-black text-sm">❌</span>
                                    </div>
                                    <p className="text-center font-black mt-8 text-[19px] border-t border-[#F4BE19]/30 pt-6">
                                        Efter lång inaktivitet? Kan inte längre väckas.
                                    </p>
                                    <img
                                        src="/7 (4).jpg"
                                        alt="Tidsfräst för att väcka hårsäckar"
                                        className="w-full rounded-2xl mt-8 shadow-lg"
                                    />
                                </div>
                            </div>

                            <div className="bg-red-900/40 p-10 rounded-[32px] border-2 border-red-800/60 mb-12 shadow-inner">
                                <p className="text-[24px] font-black mb-8 text-yellow-400 uppercase tracking-tighter">Och efter 24 månader i viloläge?</p>
                                <p className="text-[20px] leading-relaxed mb-8 italic opacity-90">
                                    Forskning tyder på att hårsäckar som varit inaktiva under lång tid (ofta 2+ år) blir allt svårare att aktiveras — även med avancerade ingredienser som Redensyl®.
                                </p>
                                <p className="text-[24px] font-black text-center leading-[1.2] m-0 text-white uppercase tracking-tight">
                                    De är inte döda. Men de är för <span className="underline decoration-yellow-400">djupt</span> sovande för att vakna.
                                </p>
                            </div>

                            <p className="text-[28px] font-[950] text-center mb-12 uppercase text-red-50 leading-[1.1] tracking-tighter">
                                Det är därför tidig intervention är <span className="underline decoration-red-500 decoration-8">KRITISK</span>.
                            </p>

                            <p className="text-[20px] mb-12 leading-relaxed text-center px-10 font-medium italic opacity-80">
                                Ditt hår försvinner inte över en natt. Men varje månad du väntar? Fler hårsäckar går förlorade för alltid.
                            </p>

                            <button
                                className="w-full text-[24px] font-black text-center bg-white text-red-950 py-8 rounded-[24px] shadow-[0_12px_24px_rgba(0,0,0,0.3)] uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wider"
                                onClick={scrollToOffer}
                            >
                                Agera nu — medan dina hårsäckar fortfarande kan väckas.
                            </button>
                        </div>

                        <SectionDivider />

                        <div className="mb-32">
                            <h2 className="text-[36px] md:text-[48px] font-[950] text-[#17242C] mb-12 leading-[1.1] tracking-tighter uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Redo att ge ditt hår <br />en andra chans?
                            </h2>

                            <div className="space-y-6 mb-16">
                                <div className="flex gap-6 items-center bg-gray-50/80 p-6 rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="bg-blue-950 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <p className="text-[20px] font-black m-0 leading-tight">90-dagars pengarna-tillbaka-garanti <span className="text-[15px] text-blue-900 underline block font-semibold mt-1 italic">(testa helt riskfritt)</span></p>
                                </div>
                                <div className="flex gap-6 items-center bg-gray-50/80 p-6 rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="bg-blue-950 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <p className="text-[20px] font-black m-0 leading-tight">Kliniskt bevisade ingredienser <span className="text-[15px] text-gray-500 block font-semibold mt-1">(Redensyl® + Anagain™ + Aminexil + Rosmarin)</span></p>
                                </div>
                                <div className="flex gap-6 items-center bg-gray-50/80 p-6 rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="bg-blue-950 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <ArrowRight size={32} />
                                    </div>
                                    <p className="text-[20px] font-black m-0 leading-tight">Specifikt för klimakteriet <span className="text-[15px] text-gray-500 block font-semibold mt-1">(designat för östrogenbrist + fibros + förkortad anagen-fas)</span></p>
                                </div>
                            </div>

                            {/* Final CTA Button */}
                            <div className="bg-white border-[3px] border-dashed border-blue-900 p-10 rounded-[40px] text-center relative shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-red-600 text-white px-8 py-3 font-black text-xs uppercase skew-x-12 translate-x-6 -translate-y-2 shadow-lg z-20">LÄGSTA PRIS GARANTERAT</div>

                                <button
                                    onClick={scrollToOffer}
                                    className="w-full bg-[#1E3A5F] hover:bg-[#152a45] text-white font-black text-[28px] md:text-[36px] py-10 rounded-2xl shadow-[0_12px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:translate-y-2 transition-all duration-300 uppercase tracking-tighter mb-8 relative z-10 min-w-[300px] h-[100px] flex items-center justify-center"
                                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                                >
                                    VÄCK MINA HÅRSÄCKAR →
                                </button>

                                <div className="flex flex-wrap justify-center gap-8 text-[15px] font-[900] text-blue-950 uppercase tracking-widest relative z-10 opacity-70">
                                    <span className="flex items-center gap-2">🛡️ 90 DAGAR NÖJDHETSGARANTI</span>
                                    <span className="flex items-center gap-2">🚚 FRI FRAKT IDAG</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-16 pb-40 text-center text-[13px] text-[#A0A4A8] border-t bg-gray-50 leading-relaxed font-bold tracking-tight shadow-inner">
                <p className="mb-6 uppercase tracking-[0.3em] font-black text-gray-400">&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <div className="flex justify-center flex-wrap gap-6 mb-12">
                    <span className="cursor-pointer hover:text-blue-950 transition-colors underline decoration-1 underline-offset-4 decoration-gray-200">INTEGRITETSPOLICY</span>
                    <span className="cursor-pointer hover:text-blue-950 transition-colors underline decoration-1 underline-offset-4 decoration-gray-200">ANVÄNDARVILLKOR</span>
                    <span className="cursor-pointer hover:text-blue-950 transition-colors underline decoration-1 underline-offset-4 decoration-gray-200">KONTAKT</span>
                </div>
                <p className="max-w-[550px] mx-auto opacity-50 font-medium">Denna webbplats är inte en del av Facebook eller Facebook Inc. Innehållet på denna sida är avsett för utbildningsändamål och är inte en ersättning för professionell medicinsk rådgivning.</p>
            </div>

        </div>
    );
};

export default MenHairLossV4;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

const Women55PlusV4: React.FC = () => {
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
        window.location.href = 'https://www.hairscanpro.com/';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-8 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "Läkaren sa: 'Det är normalt i din ålder.' Men varför känns det så fel?"
                    </h1>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        17 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <div className="mb-10">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-4 uppercase tracking-wider border-b-2 border-red-500 inline-block">📍 INTRO – PROBLEM INTENSIFICATION</h2>
                            <p className="text-[18px] mb-4">
                                Du står framför spegeln och ser det igen.
                            </p>
                            <p className="text-[18px] mb-4 font-bold">
                                Ännu mer hår i borsten. Ännu tunnare ponnysvans. Ännu mer av din hjässa som lyser igenom.
                            </p>
                            <p className="text-[18px] mb-6">
                                Och värst av allt? Känslan att ingen förstår.
                            </p>
                            <p className="text-[18px] mb-4 italic">
                                Din läkare säger: "Det är normalt i klimakteriet."<br />
                                Dina väninnor säger: "Mitt hår är också tunnare nu."
                            </p>
                            <p className="text-[18px] mb-6">
                                Men deras hår ser inte ut som ditt.
                            </p>
                            <p className="text-[18px] mb-4">
                                De kan fortfarande sätta upp håret i en knut. De kan fortfarande gå ut utan att tänka på det. De behöver inte spendera 20 minuter framför spegeln varje morgon för att hitta rätt vinkel där håret inte ser så tunt ut.
                            </p>
                            <p className="text-[18px] font-bold">
                                Du gör det.
                            </p>
                        </div>

                        <div className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-4 uppercase tracking-wider border-b-2 border-red-500 inline-block">📍 AGITATION – LAYER 2</h2>
                            <p className="text-[18px] mb-4">
                                För två år sedan var ditt hår ditt signum.
                            </p>
                            <p className="text-[18px] mb-6 font-bold text-[#17242C]">
                                Tjockt. Glansigt. Starkt.
                            </p>
                            <p className="text-[18px] mb-2">Nu undviker du fotografier.</p>
                            <p className="text-[18px] mb-2">Nu ändrar du frisyr för tredje gången.</p>
                            <p className="text-[18px] mb-6">Nu köper du schampo efter schampo — volymschampo, proteinschampo, "återuppbyggande" schampo — men ingenting händer.</p>

                            <p className="text-[18px] mb-4 font-bold italic">
                                Och när du frågar din läkare igen?
                            </p>
                            <p className="text-[20px] mb-6 text-red-600 font-bold underline">
                                "Det är åldrande. Det händer alla."
                            </p>

                            <p className="text-[18px] mb-4">
                                Men det händer inte alla.
                            </p>
                            <p className="text-[18px] mb-6">
                                Inte så här snabbt. Inte så här synligt. Inte med den här skammen.
                            </p>
                            <p className="text-[18px] mb-4">
                                Din mamma hade tjockt hår hela livet. Din syster har tjockt hår. Men du? Du börjar se dig själv i spegeln och känna dig äldre än du egentligen är.
                            </p>
                            <p className="text-[22px] font-bold text-[#17242C]">
                                Och det gör ont.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-4 uppercase tracking-wider border-b-2 border-red-500 inline-block">📍 AMPLIFICATION – LAYER 3</h2>
                            <p className="text-[18px] mb-4 italic">
                                Och djupt inne börjar du tro på det ingen vågar säga högt:
                            </p>
                            <p className="text-[18px] mb-2 ml-4">"Kanske är det kört."</p>
                            <p className="text-[18px] mb-2 ml-4">"Kanske kommer det aldrig tillbaka."</p>
                            <p className="text-[18px] mb-8 ml-4">"Kanske är det så här jag ser ut nu — för alltid."</p>

                            <p className="text-[18px] mb-6">
                                Du googlar: <span className="underline italic">"håravfall klimakteriet"</span>.
                            </p>
                            <p className="text-[18px] mb-6">
                                Du läser om östrogenbrist. Om hårsäckar som "går i vila". Om DHT. Om androgener.
                            </p>
                            <p className="text-[18px] mb-8 font-bold">
                                Men ingen säger vad du egentligen kan göra.
                            </p>
                            <p className="text-[18px] mb-4">
                                Alla artiklar slutar med: "Prata med din läkare."
                            </p>
                            <p className="text-[18px] mb-6 italic text-[#6C757D]">
                                Du gjorde det.
                            </p>
                            <p className="text-[18px] mb-10 font-bold">
                                Och läkaren sa: "Det är normalt. Inget att oroa sig för."
                            </p>
                            <p className="text-[24px] mb-8 text-center font-bold text-[#17242C]">
                                Men du oroar dig.
                            </p>
                            <p className="text-[18px] mb-6">
                                Så du slutar söka.
                            </p>
                            <p className="text-[18px] mb-4">
                                Du accepterar det. Du köper en mössa. Du fixar din lugg så att den täcker mer. Du undviker starkt ljus.
                            </p>
                            <p className="text-[18px] mb-8 font-bold">
                                Men du glömmer det aldrig.
                            </p>
                            <p className="text-[18px] mb-6">
                                Varje morgon när du borstar håret. Varje gång du ser ett fotografi från för fem år sedan. Varje gång någon komplimangerar din väninnas hår — men inte ditt.
                            </p>
                            <p className="text-[22px] font-bold text-center border-y-2 border-gray-100 py-6 my-10">
                                Du tänker på det.
                            </p>
                        </div>

                        <div className="mb-12 bg-[#F8F9FF] p-8 rounded-2xl border-2 border-blue-50">
                            <h2 className="text-[20px] font-bold text-blue-800 mb-6 uppercase tracking-wider border-b-2 border-blue-500 inline-block">📍 TURNING POINT</h2>
                            <p className="text-[24px] mb-6 font-bold text-[#17242C] leading-tight text-center">
                                Men vad om din läkare hade fel?
                            </p>
                            <p className="text-[18px] mb-8 text-center italic">
                                Inte om att håravfall är "normalt" — utan om att det inte går att göra något åt.
                            </p>
                            <p className="text-[19px] mb-6 font-bold">
                                För det finns något som nästan ingen kvinna i klimakteriet får veta:
                            </p>
                            <p className="text-[26px] mb-6 text-blue-900 font-black text-center leading-tight">
                                Dina hårsäckar är inte döda. De sover.
                            </p>
                            <p className="text-[18px] mb-8">
                                Och det är skillnad. En död hårsäck kan aldrig väckas.
                            </p>
                            <p className="text-[22px] mb-8 font-bold text-center text-blue-800 bg-white p-4 rounded-lg shadow-sm">
                                Men en sovande hårsäck? Den kan aktiveras igen — om du ger den rätt signal i rätt ordning.
                            </p>
                            <p className="text-[18px] mb-4 italic text-center">
                                Det här är inte teori. Det här är inte wishful thinking.
                            </p>
                            <p className="text-[20px] font-bold text-center text-blue-900 uppercase">
                                Det här är vetenskap — och det fungerar även för dig.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-6 uppercase tracking-wider border-b-2 border-green-500 inline-block">📍 GRADUALIZATION (Logical Bridge)</h2>
                            <h3 className="text-[24px] font-bold mb-6 text-[#17242C]">Varför håret faller efter klimakteriet:</h3>
                            <p className="text-[18px] mb-6">
                                När östrogennivåerna sjunker under klimakteriet händer fyra saker i din hårbotten:
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                    <span className="bg-[#17242C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                                    <p className="text-[17px] m-0 leading-relaxed font-bold">Hårsäckarna går in i djupsömn (telogen-fas — stamcellerna "stänger av")</p>
                                </div>
                                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                    <span className="bg-[#17242C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                                    <p className="text-[17px] m-0 leading-relaxed font-bold">Kollagenet runt hårroten stelnar (fibros — håret kan inte sitta kvar)</p>
                                </div>
                                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                    <span className="bg-[#17242C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                                    <p className="text-[17px] m-0 leading-relaxed font-bold">Växtfasen krymper (från 2-6 år → 6-12 månader — du hinner aldrig få volym)</p>
                                </div>
                                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                    <span className="bg-[#17242C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                                    <p className="text-[17px] m-0 leading-relaxed font-bold">Blodcirkulationen minskar (mindre näring → tunnare hårstrån)</p>
                                </div>
                            </div>

                            <p className="text-[19px] mb-8 font-bold italic text-center text-gray-600">
                                Läkaren har rätt: Detta är normalt.
                            </p>

                            <p className="text-[22px] mb-8 text-center font-bold text-red-600">
                                Men här är vad läkaren inte berättar:
                            </p>

                            <p className="text-[19px] mb-10 text-center leading-relaxed px-4">
                                Dessa fyra faktorer är <span className="font-bold underline">INTE</span> permanenta. De går att påverka — <span className="font-bold text-red-700">men ENDAST i rätt ordning.</span>
                            </p>

                            <p className="text-[18px] mb-8 italic text-center">
                                Det räcker inte att "ge näring" eller "öka blodflödet".
                            </p>

                            <p className="text-[20px] mb-10 font-bold text-[#17242C]">Du måste:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                <div className="border-2 border-gray-100 p-4 rounded-xl text-center">
                                    <p className="text-[17px] font-bold text-blue-800 uppercase mb-2 m-0">VÄCKA</p>
                                    <p className="text-[15px] m-0">stamcellerna (annars sover hårsäcken vidare)</p>
                                </div>
                                <div className="border-2 border-gray-100 p-4 rounded-xl text-center">
                                    <p className="text-[17px] font-bold text-blue-800 uppercase mb-2 m-0">ANKRA</p>
                                    <p className="text-[15px] m-0">håret i roten (annars faller det ut direkt)</p>
                                </div>
                                <div className="border-2 border-gray-100 p-4 rounded-xl text-center">
                                    <p className="text-[17px] font-bold text-blue-800 uppercase mb-2 m-0">FÖRLÄNGA</p>
                                    <p className="text-[15px] m-0">växtfasen (annars hinner håret inte växa)</p>
                                </div>
                                <div className="border-2 border-gray-100 p-4 rounded-xl text-center">
                                    <p className="text-[17px] font-bold text-blue-800 uppercase mb-2 m-0">CIRKULERA</p>
                                    <p className="text-[15px] m-0">näring (annars svälter hårsäcken)</p>
                                </div>
                            </div>
                            <p className="text-[22px] text-center font-bold text-[#17242C] border-2 border-[#17242C] p-4 rounded-lg">
                                I denna ordning. Inte förr. Inte senare.
                            </p>
                        </div>

                        <div className="mb-12 bg-[#EEEBFC] p-8 rounded-2xl border border-[#DCD6F7]">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-6 uppercase tracking-wider border-b-2 border-blue-600 inline-block">📍 BREAKTHROUGH MOMENT</h2>
                            <h3 className="text-[24px] font-bold mb-6 text-[#17242C] leading-tight">När forskare testade denna exakta sekvens:</h3>
                            <p className="text-[18px] mb-10">
                                I en klinisk studie med 200 kvinnor mellan 45-60 år applicerade man en topical formel som aktiverade hårsäckarna i EXAKT denna ordning.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={24} />
                                    <p className="text-[19px] font-bold m-0"><span className="text-blue-800">89%</span> såg minskad avfallning <span className="text-gray-500 text-[15px] font-normal">(inom 4 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={24} />
                                    <p className="text-[19px] font-bold m-0"><span className="text-blue-800">85%</span> rapporterade förbättrad tillväxt <span className="text-gray-500 text-[15px] font-normal">(inom 8 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={24} />
                                    <p className="text-[19px] font-bold m-0"><span className="text-blue-800">74%</span> såg synligt tätare hår <span className="text-gray-500 text-[15px] font-normal">(inom 12 veckor)</span></p>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
                                    <CheckCircle2 className="text-green-500" size={24} />
                                    <p className="text-[19px] font-bold m-0"><span className="text-blue-800">91%</span> skulle rekommendera till en vän</p>
                                </div>
                            </div>

                            <p className="text-[14px] text-gray-500 mb-8 font-bold italic border-t pt-4">Publicerad i Journal of Cosmetic Dermatology, 2023</p>

                            <p className="text-[18px] mb-8 font-bold text-center bg-white py-3 rounded-full text-blue-900 border border-blue-100">
                                Utan recept. Utan hormoner. Utan biverkningar.
                            </p>

                            <p className="text-[19px] font-bold mb-4 text-[#17242C]">Men här är det viktiga:</p>
                            <p className="text-[18px] mb-8 leading-relaxed">
                                Formeln fungerade <span className="underline">ENDAST</span> när ingredienserna aktiverades i rätt sekvens. När forskarna testade samma ingredienser i fel ordning? Inga resultat.
                            </p>
                            <p className="text-[20px] font-bold text-red-600 border-2 border-red-100 bg-red-50 p-6 rounded-xl leading-snug">
                                Det är därför 95% av hårsera på marknaden inte fungerar för kvinnor i klimakteriet — de ger näring, men de väcker aldrig hårsäcken först.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-6 uppercase tracking-wider border-b-2 border-blue-500 inline-block">📍 MECHANISM REVEAL</h2>
                            <h3 className="text-[22px] font-bold mb-3 text-center text-gray-600">Denna sekvens kallas:</h3>
                            <h2 className="text-[32px] font-black text-[#17242C] mb-12 text-center leading-tight tracking-tight uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                "The 4-Phase Follicle Reactivation System™"
                            </h2>
                            <p className="text-[18px] mb-10 text-center font-bold italic bg-gray-50 p-6 rounded-xl border border-gray-100">
                                Den enda vetenskapligt beprövda metoden som aktiverar sovande hårsäckar i klimakteriet — i exakt rätt ordning.
                            </p>

                            <div className="space-y-8">
                                <div className="border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bg-blue-900 text-white px-4 py-1 font-bold rounded-br-lg text-sm">PHASE 1</div>
                                    <h4 className="text-[24px] font-bold mt-4 mb-4 text-[#17242C]">🧬 WAKE (Väck sovande stamceller)</h4>
                                    <p className="text-[18px] font-bold mb-4 text-blue-800 underline">Redensyl® 3% — Den molekylära strömbrytaren</p>
                                    <p className="text-[17px] mb-4">I klimakteriet går dina hårsäckar in i "telogen-fas" (djupsömn). Stamcellerna slutar dela sig. Håret slutar växa.</p>
                                    <p className="text-[17px] mb-6">Redensyl® är den ENDA patenterade ingrediensen som kan "trycka på strömbrytaren" och återaktivera stamcellerna.</p>
                                    <p className="text-[16px] font-bold bg-blue-50 p-3 rounded-lg border border-blue-100">Klinisk studie: 85% av användarna såg förbättrad tillväxt efter 3 månader.</p>
                                    <p className="text-[16px] mt-4 font-bold text-red-600 italic">→ Utan denna fas? Resten spelar ingen roll — hårsäcken sover fortfarande.</p>
                                </div>

                                <div className="border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bg-blue-900 text-white px-4 py-1 font-bold rounded-br-lg text-sm">PHASE 2</div>
                                    <h4 className="text-[24px] font-bold mt-4 mb-4 text-[#17242C]">⚓ ANCHOR (Håll håret kvar i roten)</h4>
                                    <p className="text-[18px] font-bold mb-4 text-blue-800 underline">Aminexil — Fibros-blockaren</p>
                                    <p className="text-[17px] mb-4">När östrogen sjunker stelnar kollagenet runt hårroten (kallas "perifollicular fibrosis"). Detta kväver hårsäcken — som att hålla en växt i för hård jord.</p>
                                    <p className="text-[17px] mb-6 font-bold">Aminexil mjukar upp kollagenet så att håret kan:</p>
                                    <ul className="mb-6 space-y-2">
                                        <li className="flex items-center gap-2 text-[17px] font-bold text-green-700"><CheckCircle2 size={18} /> Sitta kvar (mindre avfallning)</li>
                                        <li className="flex items-center gap-2 text-[17px] font-bold text-green-700"><CheckCircle2 size={18} /> Växa sig grovt (tjockare strån)</li>
                                        <li className="flex items-center gap-2 text-[17px] font-bold text-green-700"><CheckCircle2 size={18} /> Få näring (blodflöde återställs)</li>
                                    </ul>
                                    <p className="text-[16px] mt-4 font-bold text-red-600 italic">→ Utan denna fas? Håret faller ut INNAN det hinner växa.</p>
                                </div>

                                <div className="border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bg-blue-900 text-white px-4 py-1 font-bold rounded-br-lg text-sm">PHASE 3</div>
                                    <h4 className="text-[24px] font-bold mt-4 mb-4 text-[#17242C]">📈 EXTEND (Förläng växtfasen)</h4>
                                    <p className="text-[18px] font-bold mb-4 text-blue-800 underline">Anagain™ 2% — Volymmultiplikatorn</p>
                                    <p className="text-[17px] mb-4">Normalt växer hår i 2-6 år (anagen-fas). Men i klimakteriet? Denna fas krymper till 6-12 månader.</p>
                                    <p className="text-[17px] mb-6">Anagain™ (utvunnet ur ekologiska ärtgroddar) förlänger anagen-fasen med upp till <span className="font-bold underline">78%</span>.</p>
                                    <p className="text-[17px] font-bold bg-green-50 p-4 rounded-xl text-center text-green-900">Resultat: Du behåller fler strån längre → synligt tätare hår.</p>
                                    <p className="text-[16px] mt-4 font-bold text-red-600 italic">→ Utan denna fas? Håret växer, men faller för snabbt — du når aldrig full volym.</p>
                                </div>

                                <div className="border-2 border-gray-100 p-8 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bg-blue-900 text-white px-4 py-1 font-bold rounded-br-lg text-sm">PHASE 4</div>
                                    <h4 className="text-[24px] font-bold mt-4 mb-4 text-[#17242C]">🔄 CIRCULATE (Öka blodflödet)</h4>
                                    <p className="text-[18px] font-bold mb-4 text-blue-800 underline">Rosmarinolja 3% — Cirkulationsboostern</p>
                                    <p className="text-[17px] mb-6">Kliniska studier visar att rosmarinolja är lika effektivt som Minoxidil för att öka blodflödet till hårbotten.</p>
                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-bold text-[14px] border border-orange-100">Utan klåda</span>
                                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold text-[14px] border border-orange-200">Utan biverkningar</span>
                                        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-bold text-[14px] border border-orange-100">Utan "shedding phase"</span>
                                    </div>
                                    <p className="text-[18px] font-bold leading-snug">Mer blodflöde = mer syre + näringsämnen → starkare, snabbare tillväxt.</p>
                                    <p className="text-[16px] mt-4 font-bold text-red-600 italic">→ Utan denna fas? Hårsäcken är vaken, men svälter — den kan inte producera starkt hår.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 bg-white border-4 border-blue-900 p-8 rounded-3xl shadow-xl text-center relative">
                            <h2 className="text-[20px] font-bold text-blue-900 mb-6 uppercase tracking-wider border-b-2 border-blue-900 inline-block">📍 PRODUCT REVEAL</h2>
                            <p className="text-[24px] mb-6 font-bold text-[#17242C] leading-tight">
                                Denna exakta sekvens finns i ETT enda serum:
                            </p>
                            <h2 className="text-[42px] font-black text-blue-900 mb-8 tracking-tight uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Lumina Hair Growth Serum
                            </h2>
                            <p className="text-[20px] mb-10 font-bold bg-[#F0F4FF] p-6 rounded-2xl text-blue-800 inline-block">
                                Det ENDA topikala serumet designat specifikt för kvinnor i klimakteriet.
                            </p>

                            <p className="text-[18px] mb-12 italic border-y-2 border-gray-100 py-6">
                                Inga generiska vitaminer. Inga "hoppfulla ingredienser". Inga gissningar.
                            </p>

                            <div className="text-left bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10 overflow-hidden relative">
                                <h3 className="text-[22px] font-bold mb-8 text-[#17242C] text-center uppercase tracking-wider">🧬 FULL INGREDIENSLISTA:</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-blue-900 mb-1">PHASE 1: WAKE</p>
                                        <p className="text-[18px] font-bold">→ Redensyl® 3% <span className="text-[15px] font-normal text-gray-500">(patenterad stamcells-aktiverare)</span></p>
                                        <p className="text-[14px] text-green-700 italic font-bold">85% saw improved growth (clinical study, 3 months)</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-blue-900 mb-1">PHASE 2: ANCHOR</p>
                                        <p className="text-[18px] font-bold">→ Aminexil <span className="text-[15px] font-normal text-gray-500">(perifollicular fibrosis blocker)</span></p>
                                        <p className="text-[14px] text-green-700 italic font-bold">Prevents collagen stiffening around hair root</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-blue-900 mb-1">PHASE 3: EXTEND</p>
                                        <p className="text-[18px] font-bold">→ Anagain™ 2% <span className="text-[15px] font-normal text-gray-500">(anagen phase extender)</span></p>
                                        <p className="text-[14px] text-green-700 italic font-bold">Extends growth phase by up to 78%</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-blue-900 mb-1">PHASE 4: CIRCULATE</p>
                                        <p className="text-[18px] font-bold">→ Rosmarinolja 3% <span className="text-[15px] font-normal text-gray-500">(circulation booster)</span></p>
                                        <p className="text-[14px] text-green-700 italic font-bold">As effective as Minoxidil in studies — without side effects</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <p className="text-[18px] font-bold">Varje fas är vetenskapligt bevisad.</p>
                                <p className="text-[18px] font-bold">Varje ingrediens är kliniskt testad.</p>
                                <p className="text-[18px] font-bold text-blue-800">Och sekvensen är specifikt designad för vad som händer i din hårbotten efter klimakteriet.</p>
                            </div>

                            <p className="text-[20px] mb-8 font-black text-center text-red-600 bg-red-50 py-4 px-6 rounded-full inline-block">
                                Detta är inte "ännu ett hårserum".
                            </p>

                            <p className="text-[19px] mb-6 font-bold text-center leading-relaxed">
                                Detta är den första formeln som behandlar håravfall i klimakteriet i rätt ordning.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-8 uppercase tracking-wider border-b-2 border-orange-500 inline-block">📍 SOCIAL PROOF</h2>
                            <h3 className="text-[24px] font-bold mb-10 text-[#17242C] text-center">Vad kvinnor säger efter 90 dagar:</h3>

                            <div className="space-y-6">
                                <div className="bg-[#EFEDFD] p-8 rounded-3xl border border-blue-100 relative">
                                    <div className="text-[40px] text-blue-300 absolute top-4 left-6 leading-none">"</div>
                                    <p className="italic text-[#17242C] text-[18px] mb-6 leading-relaxed relative z-10">
                                        Efter 8 veckor såg jag babyhår längs hårfästet. Efter 12 veckor kunde jag inte tro mina ögon — mitt hår såg tjockare ut än det gjort på år. Jag kan äntligen sätta upp det i en knut igen.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">L</div>
                                        <p className="font-bold text-[#17242C] text-[15px] m-0">— Lena, 52 år, Göteborg</p>
                                    </div>
                                </div>

                                <div className="bg-[#EFEDFD] p-8 rounded-3xl border border-blue-100 relative">
                                    <div className="text-[40px] text-blue-300 absolute top-4 left-6 leading-none">"</div>
                                    <p className="italic text-[#17242C] text-[18px] mb-6 leading-relaxed relative z-10">
                                        Jag trodde mitt hår var borta för alltid. Läkaren sa det var 'normalt åldrande.' Men efter 3 månader med Lumina hade jag tillbaka självförtroendet. Jag slutade undvika fotografier.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">M</div>
                                        <p className="font-bold text-[#17242C] text-[15px] m-0">— Maria, 48 år, Stockholm</p>
                                    </div>
                                </div>

                                <div className="bg-[#EFEDFD] p-8 rounded-3xl border border-blue-100 relative">
                                    <div className="text-[40px] text-blue-300 absolute top-4 left-6 leading-none">"</div>
                                    <p className="italic text-[#17242C] text-[18px] mb-6 leading-relaxed relative z-10">
                                        Läkaren sa 'det är normalt, inget att göra.' Men det VAR något att göra — jag behövde bara väcka hårsäckarna i rätt ordning. Lumina gjorde det åt mig.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">S</div>
                                        <p className="font-bold text-[#17242C] text-[15px] m-0">— Sofia, 55 år, Malmö</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 bg-red-950 text-white p-10 rounded-3xl shadow-xl">
                            <h2 className="text-[20px] font-bold text-red-100 mb-8 uppercase tracking-wider border-b-2 border-red-500 inline-block">📍 URGENCY</h2>
                            <h2 className="text-[34px] font-black mb-10 leading-tight uppercase tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>Varför du måste agera NU:</h2>

                            <p className="text-[20px] mb-6 font-bold text-red-200">Varje dag du väntar:</p>
                            <ul className="space-y-4 mb-10 border-l-2 border-red-500 pl-6">
                                <li className="text-[18px]">Fler hårsäckar går in i viloläge</li>
                                <li className="text-[18px]">Fler hårstrån faller (50-150/dag i klimakteriet vs 50-100 normalt)</li>
                                <li className="text-[18px]">Fler månader där du undviker fotografier</li>
                                <li className="text-[18px]">Fler morgnar där du känner dig äldre än du är</li>
                            </ul>

                            <div className="bg-red-900 p-8 rounded-2xl border border-red-800 mb-10">
                                <p className="text-[22px] font-bold mb-6 text-yellow-400">Och efter 24 månader i viloläge?</p>
                                <p className="text-[18px] leading-relaxed mb-6 italic">
                                    Forskning visar att hårsäckar som varit inaktiva i mer än <span className="font-bold underline text-white">2 år</span> kan inte längre aktiveras — även med Redensyl®.
                                </p>
                                <p className="text-[22px] font-bold text-center leading-snug m-0">
                                    De är inte döda. Men de är för djupt sovande för att vakna.
                                </p>
                            </div>

                            <p className="text-[24px] font-black text-center mb-8 uppercase text-red-100 leading-snug">
                                Det är därför tidig intervention är KRITISK.
                            </p>

                            <p className="text-[19px] mb-10 leading-relaxed text-center px-6">
                                Ditt hår försvinner inte över en natt. Men varje månad du väntar? Fler hårsäckar går förlorade för alltid.
                            </p>

                            <p className="text-[22px] font-bold text-center bg-white text-red-950 py-6 rounded-2xl shadow-xl uppercase cursor-pointer hover:scale-[1.02] transition-transform" onClick={scrollToOffer}>
                                Agera nu — medan dina hårsäckar fortfarande kan väckas.
                            </p>
                        </div>

                        <div className="mb-24">
                            <h2 className="text-[20px] font-bold text-[#17242C] mb-8 uppercase tracking-wider border-b-2 border-blue-900 inline-block">📍 FINAL CTA</h2>
                            <h2 className="text-[34px] font-black text-[#17242C] mb-8 leading-tight tracking-tight uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Redo att ge ditt hår en andra chans?
                            </h2>

                            <div className="space-y-4 mb-12">
                                <div className="flex gap-4 items-center bg-gray-50 p-5 rounded-2xl">
                                    <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck size={26} />
                                    </div>
                                    <p className="text-[18px] font-bold m-0 leading-tight">90-dagars pengarna-tillbaka-garanti <span className="text-[14px] text-blue-800 underline block font-normal">(testa helt riskfritt)</span></p>
                                </div>
                                <div className="flex gap-4 items-center bg-gray-50 p-5 rounded-2xl">
                                    <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={26} />
                                    </div>
                                    <p className="text-[18px] font-bold m-0 leading-tight">Kliniskt bevisade ingredienser <span className="text-[14px] text-gray-500 block font-normal">(Redensyl® + Anagain™ + Aminexil + Rosmarin)</span></p>
                                </div>
                                <div className="flex gap-4 items-center bg-gray-50 p-5 rounded-2xl">
                                    <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ArrowRight size={26} />
                                    </div>
                                    <p className="text-[18px] font-bold m-0 leading-tight">Specifikt för klimakteriet <span className="text-[14px] text-gray-500 block font-normal">(designat för östrogenbrist + fibros + förkortad anagen-fas)</span></p>
                                </div>
                            </div>

                            {/* Final CTA Button */}
                            <div className="bg-white border-4 border-dashed border-blue-900 p-8 rounded-3xl text-center relative shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 font-black text-sm uppercase skew-x-12 translate-x-4 -translate-y-1">LÄGSTA PRIS GARANTERAT</div>

                                <button
                                    onClick={scrollToOffer}
                                    className="w-full bg-[#0B2240] hover:bg-blue-950 text-white font-black text-[28px] md:text-[34px] py-8 rounded-2xl shadow-[0_10px_0_0_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-tighter mb-6 relative z-10"
                                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                                >
                                    VÄCK MINA HÅRSÄCKAR →
                                </button>

                                <div className="flex flex-wrap justify-center gap-6 text-[14px] font-black text-blue-900 uppercase tracking-widest relative z-10">
                                    <span className="flex items-center gap-2">🛡️ 90 Dagar Nöjdhetsgaranti</span>
                                    <span className="flex items-center gap-2">🚚 Fri Frakt Idag</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-12 pb-32 text-center text-[12px] text-[#A0A4A8] border-t bg-gray-50 leading-relaxed font-bold tracking-tight">
                <p className="mb-4 uppercase tracking-[0.2em]">&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <span className="cursor-pointer hover:text-blue-900 transition-colors">INTEGRITETSPOLICY</span>
                    <span className="cursor-pointer hover:text-blue-900 transition-colors">ANVÄNDARVILLKOR</span>
                    <span className="cursor-pointer hover:text-blue-900 transition-colors">KONTAKT</span>
                </div>
                <p className="max-w-[500px] mx-auto opacity-60">Denna webbplats är inte en del av Facebook eller Facebook Inc. Innehållet på denna sida är avsett för utbildningsändamål och är inte en ersättning för professionell medicinsk rådgivning.</p>
            </div>

        </div>
    );
};

export default Women55PlusV4;

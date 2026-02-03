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
        window.location.href = 'https://www.hairscanpro.com/p2';
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
                        "Läkaren sa: 'Det är bara generna'. Men varför känns det som att tiden rinner ut?"
                    </h1>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-12">
                        17 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.6]">

                        <div className="mb-[24px]">
                            <img
                                src="/32.jpg"
                                alt="Man tittar sig i spegeln och ser tunnare hår"
                                className="w-full rounded-2xl mb-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-[24px]">
                                Du står framför spegeln och ser det igen.
                            </p>
                            <p className="text-[18px] mb-[24px] font-bold">
                                Mer hår i handfatet. Mer yta vid hjässan. Vikar som klättrat ett snäpp högre sedan förra månaden.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Och värst av allt? Känslan av att du tappar kontrollen.
                            </p>
                            <p className="text-[18px] mb-[24px] italic">
                                Dina vänner säger: "Det är bara att raka av det."<br />
                                Google säger: "Testa Minoxidil (och räkna med biverkningar)."
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Men du är inte redo att ge upp.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Du ser män i din ålder som har kvar sitt hår. Du ser bilder på dig själv från bara tre år sedan och undrar var den killen tog vägen. Du spenderar tid på morgonen med att styla håret strategiskt för att dölja de glesa partierna.
                            </p>
                            <p className="text-[18px] font-bold">
                                Det börjar bli en belastning.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[24px] bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <p className="text-[18px] mb-[24px]">
                                För bara några år sedan behövde du aldrig tänka på ditt hår.
                            </p>
                            <p className="text-[18px] mb-[40px] font-bold text-[#17242C] text-2xl">
                                Det var bara där. Maskulint. Starkt.
                            </p>
                            <img
                                src="/produkt-original.jpg"
                                alt="Starkt manligt hår"
                                className="w-full rounded-2xl my-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-[12px]">Nu undviker du starkt ljus i hissar.</p>
                            <p className="text-[18px] mb-[12px]">Nu känner du dig osäker utan keps.</p>
                            <p className="text-[18px] mb-[40px]">Nu köper du dyra schampon som utlovar "tjockare hår på en dag" — men sanningen är att de inte gör ett dugg för de krympande sökarna under huden.</p>
                            <img
                                src="/57.jpg"
                                alt="Håravfall progression män"
                                className="w-full rounded-2xl my-8 shadow-lg"
                            />

                            <p className="text-[18px] mb-[24px] font-bold italic">
                                Och när du frågar din omgivning?
                            </p>
                            <p className="text-[20px] mb-[40px] text-red-600 font-bold underline">
                                "Acceptera det bara. Det händer alla män."
                            </p>

                            <p className="text-[18px] mb-[24px]">
                                Men det händer inte alla.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Inte med den här hastigheten. Inte när det finns teknik för att stoppa det.
                            </p>
                            <p className="text-[18px] mb-[24px]">
                                Du ser män i 50-årsåldern med fullt hårfäste. Varför ska du behöva ge upp nu när du är på toppen av din karriär och ditt liv?
                            </p>
                            <p className="text-[22px] font-bold text-[#17242C]">
                                Det handlar om självkänsla.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-[#F8F9FF] p-10 rounded-3xl border-2 border-blue-50">
                            <p className="text-[26px] mb-8 font-bold text-[#17242C] leading-tight text-center">
                                Men tänk om det inte är "generna" som är det största problemet?
                            </p>
                            <p className="text-[18px] mb-10 text-center italic">
                                Utan det faktum att ingen berättat för dig hur man faktiskt väcker en vilande hårsäck.
                            </p>
                            <p className="text-[19px] mb-8 font-bold text-center">
                                För här är den vetenskapliga sanningen:
                            </p>

                            <div className="text-[32px] mb-10 text-blue-900 font-black text-center leading-tight space-y-2">
                                <p className="m-0">Dina hårsäckar är inte <span className="text-red-600">döda</span>.</p>
                                <p className="m-0">De är i <span className="text-blue-600">dvala</span>.</p>
                                <p className="m-0">Och det finns ett <span className="underline italic">tidsfönster</span>.</p>
                            </div>

                            <p className="text-[18px] mb-[24px] text-center">
                                En död hårsäck kan aldrig producera hår igen. Det är då du behöver en transplantation.
                            </p>
                            <p className="text-[22px] mb-10 font-bold text-center text-blue-800 bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
                                Men så länge du har små fjun kvar, betyder det att hårsäcken lever. Den har bara miniaturiserats — den har krympt och slutat växa på grund av DHT.
                            </p>
                            <p className="text-[22px] font-bold text-center text-blue-900 uppercase tracking-wide">
                                Du kan vända processen — om du agerar innan roten försvinner helt.
                            </p>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px]">
                            <h3 className="text-[26px] font-bold mb-8 text-[#17242C]">Varför manligt hår försvinner:</h3>
                            <img
                                src="/problem-bild.jpg"
                                alt="DHT och miniaturisering"
                                className="w-full rounded-2xl mb-8 shadow-lg"
                            />
                            <p className="text-[18px] mb-8">
                                För män handlar det om en aggressiv hormonell balansgång i hårbotten:
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">1</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">DHT attackerar hårsäcken (detta krymper roten tills håret blir fjunigt)</p>
                                </div>
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">2</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Lokal fibros (huden runt vävnaden stelnar och kväver näringstillförseln)</p>
                                </div>
                                <div className="flex gap-5 items-start bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <span className="bg-[#17242C] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">3</span>
                                    <p className="text-[18px] m-0 leading-relaxed font-bold">Förkortad tillväxtfas (hårets "livstid" går från 3-5 år till bara månader)</p>
                                </div>
                            </div>

                            <p className="text-[24px] mb-[40px] text-center font-black text-red-600">
                                Problemet? De flesta schampon gör inget åt detta.
                            </p>

                            <p className="text-[20px] mb-10 text-center font-bold">
                                För att stoppa och vända processen krävs ett <span className="text-blue-900 underline">4-stegs system som jobbar under huden:</span>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">1. VÄCKA</p>
                                    <p className="text-[16px] m-0 font-semibold">stamcellerna med Redensyl®</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">2. BLOCKERA</p>
                                    <p className="text-[16px] m-0 font-semibold">fibros med Aminexil</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">3. FÖRLÄNGA</p>
                                    <p className="text-[16px] m-0 font-semibold">växtfasen med Anagain™</p>
                                </div>
                                <div className="border-2 border-blue-100 bg-blue-50 p-6 rounded-2xl text-center shadow-sm">
                                    <p className="text-[18px] font-black text-blue-900 uppercase mb-4 m-0 tracking-widest">4. BOOST</p>
                                    <p className="text-[16px] m-0 font-semibold">cirkulationen med Rosmarin</p>
                                </div>
                            </div>

                            <div className="bg-blue-950 p-8 rounded-3xl shadow-xl space-y-4 mb-12">
                                <p className="text-[22px] text-center font-black text-white uppercase tracking-wider m-0">
                                    Lumina är byggt för män.
                                </p>
                                <p className="text-[20px] text-center font-bold text-blue-200 m-0">
                                    Vi använde en Titanium-kula för att massera ner serumet direkt där det behövs, utan kladd.
                                </p>
                            </div>
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-[#EFFAFF] border-2 border-blue-200 p-10 rounded-[32px] relative shadow-md">
                            <h3 className="text-[26px] font-black mb-6 text-[#17242C] uppercase tracking-tight">Kliniskt Bevisad Effekt</h3>
                            <p className="text-[19px] mb-6">I studier på ingredienserna i Lumina såg man följande resultat efter 90 dagars konsekvent användning:</p>
                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-900">
                                    <CheckCircle2 className="text-blue-900" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight">85% såg förbättrad hårväxt</p>
                                </div>
                                <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-900">
                                    <CheckCircle2 className="text-blue-900" size={32} />
                                    <p className="text-[20px] font-bold m-0 leading-tight">Minskat håravfall inom 30 dagar</p>
                                </div>
                            </div>
                            <img
                                src="/36.jpg"
                                alt="Resultat efter 3 månader man"
                                className="w-full rounded-2xl mt-8 shadow-lg"
                            />
                        </div>

                        <SectionDivider />

                        <div className="mb-[40px] bg-red-950 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <h2 className="text-[36px] md:text-[44px] font-[950] mb-12 leading-[1.1] uppercase tracking-tighter" style={{ fontFamily: '"Montserrat", sans-serif' }}>Varning: Tidsfönstret stängs</h2>

                            <p className="text-[22px] mb-8 font-black text-red-100 tracking-tight">Håravfall är en progressiv process.</p>
                            <p className="text-[18px] mb-12 opacity-90">Varje månad du ser vikar krypa uppåt eller kronan bli glesare, är en månad där dina hårsäckar rör sig närmare permanent inaktivitet.</p>

                            <div className="mb-16 bg-[#FFF9EA] border-[3px] border-[#F4BE19] p-8 rounded-2xl text-[#17242C] shadow-lg relative">
                                <div className="absolute -top-5 left-8 bg-[#F4BE19] text-[#17242C] px-6 py-2 font-black rounded-lg shadow-md flex items-center gap-2">
                                    <AlertTriangle size={20} />
                                    VIKTIGT FÖR MÄN
                                </div>
                                <div className="mt-6 space-y-4">
                                    <p className="font-bold text-[17px]">När en hårsäck väl har slutat producera hår i mer än 24 månader blir den extremt svår att väcka igen.</p>
                                    <p className="font-bold text-[17px]">Ett ingrepp senare kostar 10-20 gånger mer än att rädda det du har idag.</p>
                                    <p className="text-center font-black mt-8 text-[19px] border-t border-[#F4BE19]/30 pt-6 uppercase tracking-widest">
                                        Rädda rötterna medan du kan.
                                    </p>
                                </div>
                            </div>

                            <button
                                className="w-full text-[24px] font-black text-center bg-white text-red-950 py-8 rounded-[24px] shadow-[0_12px_24px_rgba(0,0,0,0.3)] uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wider"
                                onClick={scrollToOffer}
                            >
                                SE TILLGÄNGLIGHET & APPLICERA RABATT →
                            </button>
                        </div>

                        <SectionDivider />

                        <div className="mb-32">
                            <h2 className="text-[36px] md:text-[48px] font-[950] text-[#17242C] mb-12 leading-[1.1] tracking-tighter uppercase" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Redo att få tillbaka <br />din täthet?
                            </h2>

                            <div className="space-y-6 mb-16">
                                <div className="flex gap-6 items-center bg-gray-50/80 p-6 rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="bg-blue-950 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <p className="text-[20px] font-black m-0 leading-tight">90-dagars garanti <span className="text-[15px] text-blue-900 block font-semibold mt-1">Vi är så säkra att vi ger dig pengarna tillbaka om det inte fungerar.</span></p>
                                </div>
                                <div className="flex gap-6 items-center bg-gray-50/80 p-6 rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="bg-blue-950 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <p className="text-[20px] font-black m-0 leading-tight">Enkel 60-sekunders rutin <span className="text-[15px] text-gray-500 block font-semibold mt-1">Inget kladd, ingen fett känsla. Perfekt morgon och kväll.</span></p>
                                </div>
                            </div>

                            {/* Final CTA Button */}
                            <div className="bg-white border-[3px] border-dashed border-blue-900 p-10 rounded-[40px] text-center relative shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full bg-[#1E3A5F] hover:bg-[#152a45] text-white font-black text-[28px] md:text-[36px] py-10 rounded-2xl shadow-[0_12px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:translate-y-2 transition-all duration-300 uppercase tracking-tighter mb-8"
                                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                                >
                                    KOLLA PAKET FÖR MÄN →
                                </button>
                                <div className="flex flex-wrap justify-center gap-8 text-[15px] font-[900] text-blue-950 uppercase tracking-widest opacity-70">
                                    <span>🛡️ 90 DAGARS GARANTI</span>
                                    <span>🚚 FRI FRAKT IDAG</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-16 pb-40 text-center text-[13px] text-[#A0A4A8] border-t bg-gray-50 leading-relaxed font-bold tracking-tight">
                <p className="mb-6 uppercase tracking-[0.3em] font-black text-gray-400">&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="max-w-[550px] mx-auto opacity-50 font-medium">Resultaten kan variera. Produkten är ett kosmetiskt serum designat för att förbättra hårets täthet och hälsa genom konsekvent användning.</p>
            </div>

        </div>
    );
};

export default MenHairLossV4;

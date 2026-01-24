import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const FiveReasons65: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSticky, setShowSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            if (percent > 20) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleRedirect = () => {
        window.location.href = 'https://shop.hairscanpro.com/products/lumina-hairflow-pro';
    };

    return (
        <div className="min-h-screen bg-white">
            <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16">
                {/* Back Button */}
                {/* Hero Header */}
                <header className="mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#17242C] mb-6 md:mb-8 leading-[1.15] tracking-tight">
                        5 Anledningar Varför Svenska Kvinnor 65+ Använder Lumina Roll-on – Trots Att De "Redan Provat Allt"
                    </h1>

                    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                        <img src="/karin-67.jpg" alt="Svensk kvinna 65+ med friskt hår" className="w-full h-auto object-cover" />
                    </div>

                    <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                        <p>
                            Du har levt med tunnt hår i åratal nu.
                        </p>
                        <p>
                            Priorin gav ingen skillnad. Minoxidil gjorde håret fett. Dyra schampon från Apoteket torkade bara ut håret mer.
                        </p>
                        <p>
                            Och någonstans längs vägen började du tänka: <span className="italic">"Kanske ska jag bara acceptera det."</span>
                        </p>
                        <p>
                            Det är vad läkaren sa också, eller hur? <strong>"Det är normalt i din ålder."</strong> Som om du bara skulle försvinna tyst.
                        </p>
                        <p className="font-bold text-medical-900">
                            Men här är sanningen:
                        </p>
                        <p>
                            Dina hårsäckar är <strong>inte döda</strong>. De sover.
                        </p>
                        <p>
                            Och tusentals svenska kvinnor 65–70+ upptäcker just nu hur man väcker dem – utan att spendera tusentals kronor per år på saker som inte fungerar.
                        </p>
                        <p>
                            Det handlar inte om att bli 30 igen.
                        </p>
                        <p>
                            Det handlar om att se dig själv i spegeln och känna igen kvinnan som tittar tillbaka. Om att gå till barnbarnens skolavslutning utan att tänka: <strong>"Kommer de minnas mig som den tunna, grå mormorn?"</strong>
                        </p>
                        <p className="font-bold text-medical-900 border-t border-gray-100 pt-6">
                            Här är de 5 anledningarna kvinnor 65+ säger att Lumina Hair Roll-on gav dem något ingen annan produkt gjort:
                        </p>
                    </div>
                </header>

                {/* Main Content - 5 Points */}
                <div className="space-y-16 md:space-y-20 lg:space-y-24 mb-16 md:mb-20">
                    {/* Point 1 */}
                    <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Image Placeholder */}


                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
                                1. Det Första Som Händer: Håret Slutar Försvinna I Duschen
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Beskriver:</h4>
                                    <p className="italic text-gray-800 border-l-4 border-[#E2E8F0] pl-4 py-1 bg-gray-50 rounded-r-lg">
                                        "Jag räknar hårstrån i avloppet varje morgon. Jag är så trött på att vara rädd varje gång jag tvättar håret."
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Som Händer:</h4>
                                    <p className="mb-3">
                                        De flesta märker mindre hår i duschen efter 3-4 veckor. Inte noll håravfall – men mindre drivor. Mindre panik.
                                    </p>
                                    <p>
                                        Roll-onen jobbar direkt i hårbotten där håret växer. Luminas aktiva ingredienser når hårsäckarna och hjälper dem vakna igen.
                                    </p>
                                </div>

                                <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-bold text-[#0B2240] mb-2">"Men... kommer jag tappa MER först?"</h4>
                                    <p className="text-sm md:text-base text-[#0B2240]">
                                        <span className="font-bold">Nej.</span> Till skillnad från Minoxidil (som orsakar tillfälligt ökat håravfall i vecka 2–4), arbetar Lumina genom att lugna hårbotten. De flesta ser minskat håravfall från vecka 1.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Säger:</h4>
                                    <p className="italic text-gray-800 mb-2">
                                        "Efter 6 veckor tänkte jag 'vänta... det är ju mindre i borsten.' Första gången på åratal jag andades ut."
                                    </p>
                                    <p className="text-sm font-bold text-[#17242C]">
                                        — Gunilla H., 67, Helsingborg
                                    </p>
                                </div>

                                <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src="/kvinna-applicerar-3.jpg"
                                        alt="Lumina applicering"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Point 2 */}
                    <section className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
                                2. Hårbotten Känns "Frisk" Igen
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Beskriver:</h4>
                                    <p className="italic text-gray-800 border-l-4 border-[#E2E8F0] pl-4 py-1 bg-gray-50 rounded-r-lg">
                                        "Min hårbotten känns torr och spänd. När jag masserar den känns det som om ingenting händer där."
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Efter 65 kan hårbotten bli:</h4>
                                    <ul className="list-disc list-inside space-y-3 ml-2 text-gray-800">
                                        <li><strong>Känsligare</strong> (kyla, värme, färgning irriterar)</li>
                                        <li><strong>Torrare</strong> (mindre talgproduktion)</li>
                                        <li><strong>Stelare</strong> (kollagenet runt hårrötterna "stelnar")</li>
                                        <li><strong>Sämre på att få näring</strong> (blodflödet minskar)</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Som Händer:</h4>
                                    <p className="mb-3">
                                        Luminas roll-on kula masserar hårbotten medan den applicerar formulan. Hårbotten känns <strong>lugnare, mjukare, mindre irriterad</strong>.
                                    </p>
                                    <p>
                                        En del beskriver en <strong>"varm, lätt känsla"</strong> – tecken på att cirkulationen ökar.
                                    </p>
                                </div>

                                <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-bold text-[#0B2240] mb-2">Varför massage är viktigt:</h4>
                                    <p className="text-sm md:text-base text-[#0B2240]">
                                        Daglig hårbottsmassage kan öka hårtäthet med upp till 20% över 6 månader. Luminas titanium-kula gör detta automatiskt.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Säger:</h4>
                                    <p className="italic text-gray-800 mb-2">
                                        "Min hårbotten var alltid kliande och torr. Nu känns den friskare. Som om den äntligen andas."
                                    </p>
                                    <p className="text-sm font-bold text-[#17242C]">
                                        — Maj-Britt J., 69, Umeå
                                    </p>
                                </div>

                                {/* Blue Book Section */}
                                <div className="mt-8 p-6 bg-blue-50/80 rounded-xl border border-blue-100">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B2240] mb-4 flex items-center gap-2">
                                        📘 Varför Håret Slutar Växa Efter 65
                                    </h3>
                                    <p className="mb-4 text-[#0B2240]">
                                        De flesta tror att håravfall beror på "hormoner" eller "genetik" – saker du inte kan kontrollera.
                                    </p>
                                    <p className="mb-4 font-semibold text-[#0B2240]">
                                        Men forskning visar något annat:
                                    </p>
                                    <div className="mb-6">
                                        <p className="mb-2 text-[#0B2240]">Hårsäckarna har "somnat in" på grund av:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2 text-[#0B2240]">
                                            <li>Kollagenstelning runt hårrötterna (vanligare efter 60)</li>
                                            <li>Minskad blodcirkulation till hårbotten</li>
                                            <li>Kronisk inflammation (stress, hormonförändringar, färgning)</li>
                                        </ul>

                                        <div className="mt-4 mb-4 rounded-lg overflow-hidden shadow-sm">
                                            <img
                                                src="/utbildningsdiagram.jpg"
                                                alt="Hårväxtcykeln och behandling"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <p className="mt-3 font-medium text-[#0B2240]">
                                            När dessa fixas, kan hårsäckarna vakna – även efter 65.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#0B2240] mb-2 uppercase text-sm tracking-wide">Lumina kombinerar:</h4>
                                        <ul className="space-y-2 text-[#0B2240]">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span><span className="font-semibold">Aminexil</span> (mjukar upp kollagenstelning)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span><span className="font-semibold">Redensyl</span> (väcker sovande stamceller)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span><span className="font-semibold">Rosmarin</span> (ökar cirkulation)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span><span className="font-semibold">Titanium-massage</span> (stimulerar blodflöde)</span>
                                            </li>
                                        </ul>
                                        <p className="mt-4 italic font-medium text-[#0B2240]">
                                            Det är inte magi. Det är vetenskap.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Point 3 */}
                    <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
                                3. Små Nya Hårstrån Börjar Växa (Babyhår)
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Beskriver:</h4>
                                    <p className="italic text-gray-800 border-l-4 border-[#E2E8F0] pl-4 py-1 bg-gray-50 rounded-r-lg">
                                        "Jag trodde att när håret var borta, var det borta för alltid. Läkaren sa 'det är normalt i din ålder' som om ingenting gick att göra."
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Det Djupare Behovet:</h4>
                                    <p className="italic text-gray-800">
                                        "Jag vill se bevis att min kropp inte är färdig. Att det inte är för sent."
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Som Händer:</h4>
                                    <p className="mb-3">
                                        När hårbotten blir mer aktiv börjar ofta:
                                    </p>
                                    <ul className="list-disc list-inside space-y-3 ml-2 text-gray-800">
                                        <li>Små korta strån vid <strong>tinningarna</strong></li>
                                        <li><strong>Fylligare</strong> hårfäste</li>
                                        <li>Tunna <strong>"babyhår"</strong> längst fram</li>
                                    </ul>
                                    <p className="mt-4">
                                        Ja, de är tunna först. Ja, det tar 3–6 månader. Men det är <strong>synligt bevis</strong> på att hårsäckarna inte är döda – de sov bara.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Säger:</h4>
                                    <p className="italic text-gray-800 mb-2">
                                        "Jag såg små strån vid tinningarna efter 4 månader. Mina barnbarn märkte det inte, men JAG märkte. Det var allt jag behövde."
                                    </p>
                                    <p className="text-sm font-bold text-[#17242C]">
                                        — Elisabet M., 68, Malmö
                                    </p>
                                </div>

                                <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src="/(extreme close.jpg"
                                        alt="Närbild på nya hårstrån"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Calendar Section */}
                                <div className="mt-8 p-6 bg-yellow-50/80 rounded-xl border border-yellow-100">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#422006] mb-4 flex items-center gap-2">
                                        📅 Vad Du Kan Förvänta Dig
                                    </h3>
                                    <ul className="space-y-4 text-[#422006]">
                                        <li className="flex gap-3">
                                            <span className="font-bold whitespace-nowrap">Månad 1-2:</span>
                                            <span>Mindre håravfall i duschen. Hårbotten känns friskare.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold whitespace-nowrap">Månad 3-4:</span>
                                            <span>Små babyhår vid tinningarna eller benan.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold whitespace-nowrap">Månad 5-6:</span>
                                            <span>De nya hårstråna blir tjockare. Här ser de flesta den stora skillnaden.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold whitespace-nowrap">Efter 6 mån:</span>
                                            <span>Många minskar till 3-4 gånger/vecka för att behålla resultaten.</span>
                                        </li>
                                    </ul>

                                    <div className="mt-6 mb-2 rounded-lg overflow-hidden mix-blend-multiply">
                                        <img
                                            src="/manad-steg.webp"
                                            alt="Tidslinje för resultat"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="mt-4 italic font-medium text-[#422006] border-t border-yellow-200 pt-4">
                                        Kom ihåg: Du såg inte håravfall över en natt. Håret växer inte tillbaka över en natt. Men varje vecka är framsteg.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Point 4 */}
                    <section className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
                                4. Ingen Komplexitet, Inget Kladd
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Beskriver:</h4>
                                    <p className="italic text-gray-800 border-l-4 border-[#E2E8F0] pl-4 py-1 bg-gray-50 rounded-r-lg mb-3">
                                        "Jag är trött på produkter som kräver 15 minuter dagligen, gör håret fett, eller tvingar mig till livslång användning."
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        Minoxidil kändes som en fälla: Om jag började var jag tvungen att fortsätta för alltid – annars skulle allt falla ut igen.
                                    </p>
                                    <p className="text-gray-700">
                                        Jag ville ha något som hjälper min kropp återställa sig själv – inte något som gör mig beroende för livet.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Lumina Erbjuder:</h4>
                                    <ul className="list-disc list-inside space-y-3 ml-2 text-gray-800">
                                        <li>Ingen blandning, <strong>inget kladd</strong></li>
                                        <li>Inga biverkningar</li>
                                        <li><strong>Ingen livslång fälla</strong> – många minskar till 3–4x/vecka efter 6 månader</li>
                                        <li>Tar <strong>60 sekunder</strong>, 2x/dag</li>
                                    </ul>
                                </div>

                                <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-bold text-[#0B2240] mb-2">Så Här Använder Du:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-2 text-[#0B2240]">
                                        <li>Rulla över hårbotten där håret är tunnast</li>
                                        <li>Massera försiktigt i 60 sekunder</li>
                                        <li>Klart. Torkar på 2 minuter, ingen fet känsla</li>
                                    </ul>
                                    <p className="mt-2 text-sm text-[#0B2240] italic mb-4">
                                        Inga droppar att räkna. Ingen dosering. Bara enkelt.
                                    </p>

                                    <div className="rounded-lg overflow-hidden mix-blend-multiply shadow-sm">
                                        <img
                                            src="/steg-ny.webp"
                                            alt="3 enkla steg: Rulla, Massera, Klart"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Säger:</h4>
                                    <p className="italic text-gray-800 mb-2">
                                        "Jag använder den medan kaffet brygger. Inget krångel. Håret ser inte fett ut. Första produkten som respekterar att jag har ett liv."
                                    </p>
                                    <p className="text-sm font-bold text-[#17242C]">
                                        — Inger P., 66, Karlstad
                                    </p>
                                </div>

                                {/* Pill Section */}
                                <div className="mt-8 p-6 bg-red-50/80 rounded-xl border border-red-100">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#7f1d1d] mb-4 flex items-center gap-2">
                                        💊 Varför Priorin Inte Fungerade
                                    </h3>
                                    <p className="mb-4 text-[#7f1d1d]">
                                        Hårtillskott (Priorin, Viviscal, biotin) lovar "näring inifrån."
                                    </p>
                                    <div className="mb-6">
                                        <p className="mb-2 font-bold text-[#7f1d1d]">Problemet:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2 text-[#7f1d1d]">
                                            <li>Fungerar BARA vid vitaminbrist (99% har inte det)</li>
                                            <li>Tar 6-12 månader att "kanske" visa resultat</li>
                                            <li>Når aldrig hårbotten där problemet är</li>
                                        </ul>

                                        <div className="mt-6 mb-4 rounded-lg overflow-hidden shadow-sm mix-blend-multiply border border-red-100/50">
                                            <img
                                                src="/COMPARISON.webp"
                                                alt="Jämförelse mellan tillskott och Lumina"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 font-bold text-[#7f1d1d]">Lumina är annorlunda:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2 text-[#7f1d1d]">
                                            <li>Arbetar direkt i hårbotten</li>
                                            <li>Aktiva ingredienser bevisade väcka sovande hårsäckar</li>
                                            <li>Resultat på 6-12 veckor (inte 12 månader)</li>
                                        </ul>
                                        <p className="mt-4 italic font-bold text-[#7f1d1d]">
                                            Du betalar inte för "hoppfulla vitaminer." Du betalar för aktiva ingredienser som jobbar där problemet är.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Point 5 */}
                    <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
                                5. Det Fungerar Även Efter 65 – Du Är INTE "För Gammal"
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Beskriver:</h4>
                                    <p className="italic text-gray-800 border-l-4 border-[#E2E8F0] pl-4 py-1 bg-gray-50 rounded-r-lg mb-3">
                                        "Läkaren sa 'det är normalt i din ålder' som om jag skulle försvinna tyst. Jag är 68 år. Jag är inte död. Jag är inte färdig."
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        Men samhället behandlar mig som osynlig. Mitt tunna hår gör mig ÄNNU mer osynlig.
                                    </p>
                                    <p className="text-gray-700">
                                        Jag vill inte se 'gammal och sjuk' ut på barnbarnens skolfoton. Jag vill se ut som den friska, levande mormor jag är inombords."
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Det Djupare Behovet:</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✅</span> Känna mig som mig själv igen
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✅</span> Åldras med värdighet, inte osynlighet
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-600">✅</span> Vara den friska mormor mina barnbarn minns
                                        </li>
                                    </ul>

                                    <div className="mt-6 mb-2 rounded-xl overflow-hidden shadow-sm">
                                        <img
                                            src="/kvinna70.webp"
                                            alt="Självsäker kvinna 70 år"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                    <h3 className="text-xl font-serif font-bold text-emerald-900 mb-3">
                                        Vad Vetenskapen Visar:
                                    </h3>
                                    <p className="mb-3 text-emerald-800">
                                        I kliniska studier såg <span className="font-bold">85% av kvinnor 60-75 år</span> synlig förbättring efter 3 månader med Redensyl.
                                    </p>
                                    <p className="mb-3 text-emerald-800">
                                        Aminexil visade sig särskilt effektiv för postmenopausala kvinnor eftersom den förhindrar kollagenstelning som blir vanligare efter klimakteriet.
                                    </p>
                                    <p className="font-bold text-emerald-900">
                                        Din kropp kan fortfarande svara. Dina hårsäckar är inte döda.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Alternativet: Hårtoppers</h4>
                                    <p className="mb-2">
                                        Många 65+ kollar på hårtoppers online – nästan redo att ge upp.
                                    </p>
                                    <p className="mb-2">
                                        En kvalitets-topper kostar 12 000–18 000 kr. Lumina kostar 399 kr (med 50% rabatt).
                                    </p>

                                    <div className="mt-4 mb-4 rounded-lg overflow-hidden shadow-sm">
                                        <img
                                            src="/hartoppers.webp"
                                            alt="Skillnad mellan hårtopper och naturligt hår"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <p className="font-medium">
                                        Om det fungerar – och för över 12 000 kvinnor har det gjort det – har du sparat tusentals kronor och din värdighet.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#17242C] mb-2 uppercase text-sm tracking-wide">Vad Kvinnor Säger:</h4>
                                    <p className="italic text-gray-800 mb-4 border-l-4 border-emerald-200 pl-4">
                                        "Läkaren sa 'acceptera det' men jag sa NEJ. Jag agerar NU medan jag fortfarande kan."
                                        <br />
                                        <span className="text-sm font-bold not-italic text-[#17242C] mt-1 block">— Rut B., 70, Östersund</span>
                                    </p>
                                    <p className="italic text-gray-800 border-l-4 border-emerald-200 pl-4">
                                        "Min dotter sa 'mamma, du ser piggare ut.' Hon menade håret men sa det inte. Jag vet. Och det räcker."
                                        <br />
                                        <span className="text-sm font-bold not-italic text-[#17242C] mt-1 block">— Solveig L., 69, Sundsvall</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Conclusion */}
                <section className="bg-medical-50 border-l-4 border-medical-900 p-8 md:p-10 lg:p-12 rounded-r-lg mb-12 md:mb-16">
                    <div className="flex items-start gap-3 mb-4 md:mb-6">
                        <span className="text-3xl md:text-4xl">⭐</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900">
                            Slutsats: Du Har Ett Val
                        </h2>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                        <p>
                            Om du märker att:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 text-green-600 font-bold">✅</span>
                                <span>Benan blivit bredare än för 5-10 år sedan</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 text-green-600 font-bold">✅</span>
                                <span>Du tappar mer i duschen än tidigare (och räknar strån varje morgon)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 text-green-600 font-bold">✅</span>
                                <span>Håret känns tunnare framme vid tinningarna eller på toppen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 text-green-600 font-bold">✅</span>
                                <span>Du överväger hårtoppers eller peruker men vill testa EN sak till först</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 text-green-600 font-bold">✅</span>
                                <span>Läkaren sa "det är normalt i din ålder" men du känner dig inte färdig ännu</span>
                            </li>
                        </ul>
                        <p className="mt-4 font-bold text-medical-900 text-xl">
                            ...då är Lumina Hair Growth Roll-on en enkel och logisk rutin att börja med.
                        </p>
                    </div>
                </section>

                {/* Important Guarantee Section */}
                <section className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
                        Men Här Är Det Viktiga:
                    </h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
                        <p>
                            Och om du tänker: "Jag har redan slösat så mycket pengar och tid. Jag kan inte bli lurad igen..."
                        </p>
                        <p>
                            Jag förstår. Många av de över 12,000 kvinnor som nu använder Lumina tänkte exakt samma sak.
                        </p>
                        <p>
                            De hade också provat Priorin (ingenting). Minoxidil (fett hår, livslång användning). Dyra schampon (tomma löften).
                        </p>

                        <div className="bg-medical-50 p-6 rounded-xl border border-medical-200">
                            <h4 className="font-bold text-medical-900 mb-3 text-lg">Men här är skillnaden:</h4>
                            <p className="mb-4">
                                <span className="font-bold">Du har 90 dagar på dig att testa riskfritt.</span>
                                <br />
                                Om du inte ser skillnad får du pengarna tillbaka. Inget krångel. Inga frågor.
                            </p>
                            <p className="mb-4">
                                Över 12 000 svenska kvinnor har redan bevisat att det fungerar – många av dem över 60 år.
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Det är inte Minoxidil (ingen livslång användning, håret blir inte fett).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Det är inte Priorin (inga värdelösa kapslar).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Det är inte "ännu ett schampo" (detta arbetar I hårbotten, inte på hårstrået).
                                </li>
                            </ul>
                            <p className="font-medium text-medical-900">
                                Om det fungerar – som det gjort för tusentals – kommer du vara glad att du testade.
                                <br />
                                Om det inte fungerar, har du fortfarande 90-dagars garanti och har inte förlorat något.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Question */}
                <section className="mb-12 md:mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-medical-900 mb-4">
                        Frågan Är:
                    </h2>
                    <div className="bg-medical-900 text-white p-6 md:p-8 rounded-2xl shadow-xl inline-block max-w-3xl">
                        <p className="text-xl md:text-2xl font-serif italic">
                            "Har du råd att INTE testa det – när alternativet är att ge upp, eller spendera 15 000 kr på en hårtopper?"
                        </p>
                    </div>
                </section>

                {/* How to Order Section */}
                <section className="bg-white border border-medical-100 rounded-2xl p-8 md:p-10 lg:p-12 mb-12 md:mb-16 shadow-sm">
                    <div className="bg-medical-50/50 rounded-xl p-6 md:p-8 border border-medical-100">
                        <h4 className="text-xl md:text-2xl font-serif font-bold text-medical-900 mb-4 md:mb-6">
                            Så Här Beställer Du
                        </h4>
                        <p className="text-gray-700 mb-4 md:mb-5 text-base md:text-lg">
                            Om du vill prova Lumina från Hairscan med vårt specialerbjudande:
                        </p>
                        <ol className="space-y-4 text-gray-700 text-base md:text-lg list-decimal list-inside ml-2 marker:text-medical-900 marker:font-semibold">
                            <li>
                                <span className="font-semibold">Klicka på knappen nedan för att se paketen</span>
                            </li>
                            <li>
                                <span className="font-semibold">Välj din lösning:</span>
                                <ul className="list-none ml-6 mt-2 space-y-3 text-base">
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 mt-1">📦</span>
                                        <span><span className="font-bold">Startpaket (1 flaska):</span> 399 kr (ordinarie 798 kr) – 50% rabatt</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 mt-1">📦</span>
                                        <span><span className="font-bold">Behandlingskur (3 flaskor):</span> 798 kr (ordinarie 2,394 kr) – Mest populär</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 mt-1">📦</span>
                                        <span><span className="font-bold">Storpack (6 flaskor):</span> 999 kr (ordinarie 4,788 kr) – Bäst värde för kvinnor 65+ som vill se långsiktiga resultat</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="mt-4">
                                <span className="font-semibold">Fyll i din leveransinformation</span>
                            </li>
                            <li>
                                <span className="font-semibold">Få hem ditt paket smidigt och enkelt</span>
                            </li>
                        </ol>
                        <p className="text-gray-600 mt-6 md:mt-8 text-sm md:text-base italic">
                            Din order skickas inom 24 timmar och levereras direkt till din dörr. <br />
                            <span className="font-bold">Fri frakt & Klarna/Swish-betalning ingår.</span>
                        </p>
                    </div>
                </section>

                {/* Special Offer Section */}
                <section className="bg-gradient-to-br from-medical-900 via-[#1a3b5c] to-medical-900 text-white rounded-2xl p-8 md:p-12 lg:p-16 mb-12 md:mb-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6 tracking-wide">
                            BEGRÄNSAT ERBJUDANDE
                        </h3>
                        <p className="text-lg md:text-xl mb-8 md:mb-10 text-medical-100 max-w-2xl mx-auto leading-relaxed">
                            Just nu får du upp till <span className="font-bold text-white">79% RABATT</span> på Storpack-paketet.
                            Gäller så långt lagret räcker.
                        </p>

                        <button
                            onClick={handleRedirect}
                            className="bg-white text-medical-900 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold hover:bg-medical-50 transition-all text-lg md:text-xl transform hover:scale-105 shadow-lg hover:shadow-xl font-serif mb-6"
                        >
                            👉 Testa Lumina Riskfritt I 90 Dagar
                        </button>

                        <p className="text-sm md:text-base opacity-80 font-medium tracking-wide mb-12">
                            90 dagars nöjd-kund-garanti - Fri frakt
                        </p>

                        <div className="text-left max-w-2xl mx-auto border-t border-medical-700/50 pt-8 mt-8">
                            <p className="text-lg md:text-xl font-serif mb-4 font-bold text-white">
                                P.S.
                            </p>
                            <p className="text-medical-100 mb-4 leading-relaxed">
                                Du är inte för gammal.<br />
                                Du är inte för sent ute.<br />
                                Dina hårsäckar är inte döda.
                            </p>
                            <p className="text-white font-bold text-xl mb-6 italic">
                                De sover bara.
                            </p>
                            <p className="text-medical-100 mb-6 leading-relaxed">
                                Och dina barnbarn förtjänar att minnas en frisk, levande mormor – inte en som gav upp.
                            </p>
                            <p className="text-medical-100 leading-relaxed">
                                Över 12 000 svenska kvinnor har redan väckt dem.<br />
                                <span className="font-bold text-white">Nu är det din tur.</span>
                            </p>
                        </div>
                    </div>
                </section>
            </article >

            {/* Sticky CTA Button */}
            <div className={`fixed bottom-0 left-0 w-full p-4 z-50 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="max-w-md mx-auto">
                    <button
                        onClick={handleRedirect}
                        className="w-full bg-medical-900 text-white py-4 px-6 rounded-full font-bold shadow-2xl hover:bg-medical-800 transition-all text-lg flex items-center justify-center gap-2 border-2 border-white/20"
                    >
                        👉 Testa Lumina Riskfritt I 90 Dagar
                    </button>
                </div>
            </div>
        </div >
    );
};

export default FiveReasons65;

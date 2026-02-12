import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ThumbsUp, ShieldCheck, Truck, Check } from 'lucide-react';

const Women55PlusV2: React.FC = () => {
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
                        "Jag trodde mitt hår var borta för alltid. Det var bara sovande."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/1 (6).jpg" alt="Kvinna med håravfall" className="w-full h-auto rounded-lg" />
                    </div>

                    {/* Subheadline */}
                    <div className="text-[16px] md:text-[18px] text-[#4F5256] mb-4 leading-snug font-sans">
                        Svenska kvinnor upptäcker varför ingenting har fungerat mot håravfall – och den enkla lösningen som äntligen gör skillnad
                    </div>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        Januari 14, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[18px] mb-6 font-bold">
                            Jag slutade gå på middagar.
                        </p>

                        <p className="text-[17px] mb-4">
                            Inte för att jag inte gillade mina vänner.
                        </p>

                        <p className="text-[17px] mb-6">
                            Utan för att jag inte orkade förklara mitt hår.
                        </p>

                        <p className="text-[17px] mb-4">
                            Mitt namn är Lena Bergström. Jag är 57. Jag bor i Stockholm.
                        </p>

                        <p className="text-[17px] mb-4">
                            För två år sedan var jag social. Spontan. Jag sa ja till saker.
                        </p>

                        <p className="text-[17px] mb-6">
                            Idag säger jag nej. Hela tiden.
                        </p>

                        <p className="text-[17px] mb-4 italic">
                            "Nej tack, jag kan inte." "Nej, jag är trött." "Nej, jag har annat för mig."
                        </p>

                        <p className="text-[17px] mb-6">
                            Men sanningen är: jag är inte trött. Jag har inget annat för mig.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Jag vill bara inte att de ska se mitt hår.
                        </p>


                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det började smått
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/58.jpg" alt="Kvinna med håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Först slutade jag gå till frisören. För vad skulle jag säga? "Kan du fixa min bena?"
                        </p>

                        <p className="text-[17px] mb-4">
                            Sen slutade jag simma. För våt hår visar hårbotten ännu mer.
                        </p>

                        <p className="text-[17px] mb-4">
                            Sen började jag ställa in kameran på familjefotot. Eller säga "nej tack, jag tar bilden."
                        </p>

                        <p className="text-[17px] mb-6">
                            Och till slut började jag undvika människor helt enkelt.
                        </p>

                        <p className="text-[17px] mb-4">
                            Inte för att jag inte ville träffa dem.
                        </p>

                        <p className="text-[17px] mb-8">
                            Utan för att jag inte orkade höra: "Men du ser ju bra ut!" när jag visste att de ljög.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Och ingen förstod
                        </h3>

                        <p className="text-[17px] mb-4">
                            "Varför bryr du dig så mycket?" sa min man.
                        </p>

                        <p className="text-[17px] mb-6">
                            "Det är ju bara hår," sa min väninna.
                        </p>

                        <p className="text-[17px] mb-4">
                            Men det är inte "bara hår".
                        </p>

                        <p className="text-[17px] mb-8">
                            Det är min identitet. Det är min frihet. Det är min förmåga att vara spontan, att vara social, att känna mig som jag själv.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Och när det försvinner, försvinner jag med det.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag försökte fixa det
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/2 (6).jpg" alt="Kvinna försöker fixa håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            Volymschampos – hjälpte inte.
                        </p>

                        <p className="text-[17px] mb-4">
                            Priorin-kapslar stora som valpar – dyra och ineffektiva.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag övervägde Minoxidil men rädslan stoppade mig.
                        </p>

                        <p className="text-[17px] mb-6">
                            Dread shed? Ansiktshår? Livslång användning? Nej tack.
                        </p>

                        <p className="text-[17px] mb-6">
                            Rosemarinolja från Instagram – mitt hår blev fett, tungt, omöjligt att styla. Jag kunde inte gå ut. Och det hjälpte inte.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag gick till vårdcentralen. Läkaren kollade knappt på mig.
                        </p>

                        <p className="text-[17px] mb-6 italic">
                            "Det är klimakteriet. Det är normalt."
                        </p>

                        <p className="text-[17px] mb-4">
                            Men det kändes inte normalt.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Det kändes som att jag inte kunde leva mitt liv längre.
                        </p>


                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Tills jag lärde mig sanningen
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/3 (6).jpg" alt="Forskning om håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            Klockan 03:00 en natt, medan jag inte kunde sova, gjorde jag det varje panikslagen kvinna gör – jag forskade desperat.
                        </p>

                        <p className="text-[17px] mb-6 font-bold">
                            Och då hittade jag något som ingen läkare någonsin sagt till mig:
                        </p>

                        <p className="text-[18px] mb-6 font-bold text-[#17242C]">
                            Ditt hår är inte borta. Det sover.
                        </p>

                        <p className="text-[17px] mb-4">
                            När östrogen sjunker under klimakteriet går hårsäckarna in i en vilofas – telogen.
                        </p>

                        <p className="text-[17px] mb-6">
                            De slutar inte fungera för evigt. De är bara... avstängda.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Och när något sover kan det väckas.
                        </p>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[17px] mb-4">
                                Men här är problemet:
                            </p>
                            <p className="text-[17px] mb-4">
                                Ju längre de står stilla, desto djupare går de in i dvala.
                            </p>
                            <p className="text-[17px] font-bold">
                                Om du väntar 2 år tar det längre tid att väcka dem än om du agerar inom 6 månader.
                            </p>
                            <p className="text-[17px] mt-4">
                                Varje dag du väntar är en dag dina hårsäckar glider djupare in i sömn.
                            </p>
                        </div>


                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Men varför hade ingenting fungerat?
                        </h3>

                        <p className="text-[17px] mb-8">
                            Jag insåg tre saker som gjorde mig rasande:
                        </p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Problem #1: Klimakteriet orsakar "fibros"
                            </h4>

                            {/* Image */}
                            <div className="mb-4">
                                <img src="/4 (4).jpg" alt="Fibros i hårsäcken" className="w-full h-auto rounded-lg" />
                            </div>

                            <p className="text-[17px] mb-4">
                                Här är vad ingen sa till mig:
                            </p>
                            <p className="text-[17px] mb-4">
                                Under klimakteriet stelnar kollagenet runt hårsäcken. Det kallas "fibros".
                            </p>
                            <p className="text-[17px] mb-4">
                                Det är som att hårroten blir inlindad i betong. Ingen näring kommer in. Inget hår kommer ut.
                            </p>
                            <p className="text-[17px] mb-4">
                                Stress (kortisol), miljöföroreningar och åldrande gör att hårsäcken bokstavligen kvävs.
                            </p>
                            <p className="text-[17px] font-bold">
                                De flesta serum försöker bara "nära" eller "stimulera" - men de gör ingenting mot stelningen.
                            </p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Problem #2: Hårsäckarna behöver en "väckarklocka"
                            </h4>

                            {/* Image */}
                            <div className="mb-4">
                                <img src="/5 (4).jpg" alt="Hårsäckar behöver väckarklocka" className="w-full h-auto rounded-lg" />
                            </div>

                            <p className="text-[17px] mb-4">
                                Sovande hårsäckar vaknar inte av vitaminer. De vaknar inte av schampo.
                            </p>
                            <p className="text-[17px] mb-4">
                                De behöver en molekylär signal - något som säger till stamcellerna: "det är säkert att växa igen".
                            </p>
                            <p className="text-[17px] font-bold">
                                De flesta serum har inte detta. De bara ligger på ytan.
                            </p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Problem #3: Minoxidil är för aggressivt
                            </h4>

                            {/* Image */}
                            <div className="mb-4">
                                <img src="/6 (4).jpg" alt="Minoxidil biverkningar" className="w-full h-auto rounded-lg" />
                            </div>

                            <p className="text-[17px] mb-4">
                                Du har hört skräckhistorierna.
                            </p>
                            <p className="text-[17px] mb-4">
                                Du vill fixa dina tunnare tinningar, så du köper det "berömda skummet".
                            </p>
                            <p className="text-[17px] mb-4">
                                Två veckor senare gråter du i duschen eftersom mer hår ramlar av.
                            </p>
                            <p className="text-[17px] mb-4">
                                Det kallas "dread shed" – och det är inbyggt i hur Minoxidil fungerar.
                            </p>
                            <p className="text-[17px] mb-2">
                                Plus:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                                <li>Det är giftigt för katter (jag har två – det var omöjligt)</li>
                                <li>Det gör håret klibbigt, fett, smutsigt</li>
                                <li>Du kan aldrig sluta – om du gör det förlorar du allt</li>
                            </ul>
                        </div>


                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Så vad är lösningen?
                        </h3>

                        <p className="text-[17px] mb-6">
                            Det finns EN sak – EN enda biologisk trigger – som väcker dormanta hårsäckar utan att chocka systemet.
                        </p>

                        <p className="text-[18px] mb-6 font-bold text-[#17242C]">
                            Det är mikrocirkulation + stamcells-aktivering + fibros-mjukning.
                        </p>


                        <p className="text-[17px] mb-4">
                            Studier visar att när du:
                        </p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex gap-3 items-start">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                <span className="text-[17px]">Ökar blodflödet till hårbotten (mikrocirkulation)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                <span className="text-[17px]">Aktiverar sovande stamceller</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                <span className="text-[17px]">Mjukar upp det stela kollagenet (fibros)</span>
                            </li>
                        </ul>

                        <p className="text-[17px] mb-6">
                            ...händer något remarkabelt:
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-8 border border-green-200">
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <span className="text-2xl">✨</span>
                                    <span className="text-[17px] font-bold">Dormanta hårsäckar vaknar</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-2xl">✨</span>
                                    <span className="text-[17px] font-bold">Hårcykeln återställs</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-2xl">✨</span>
                                    <span className="text-[17px] font-bold">Shedding minskar med upp till 60% inom 90 dagar</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[17px] mb-4 font-bold">
                                Men här är nyckeln:
                            </p>
                            <p className="text-[17px] mb-3">
                                Det kräver daglig applicering direkt på hårbotten – inte schampo du sköljer ur.
                            </p>
                            <p className="text-[17px] mb-3">
                                Det kräver ingredienser som tränger ner till hårsäckarna – inte ytbehandling.
                            </p>
                            <p className="text-[17px]">
                                Och det kräver tålamod – hårsäckar vaknar inte över en natt.
                            </p>
                        </div>


                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Och det var exakt vad jag hittade
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/produkt-flaska-sten.jpg" alt="Lumina Hair Serum" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            En topisk behandling – INTE en tablett, INTE hormonell – som kombinerar:
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">🔬 3% Redensyl®</h4>
                                <p className="text-[16px]">
                                    En patenterad "molekylär strömbrytare" som väcker sovande stamceller. I kliniska studier såg 85% av användarna förbättrad tillväxt.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">🔬 3% Rosmarin</h4>
                                <p className="text-[16px]">
                                    I jämförande studier visats vara lika effektivt som Minoxidil för att öka cirkulationen, men utan klåda eller biverkningar.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">🔬 Aminexil</h4>
                                <p className="text-[16px]">
                                    Det enda ämnet som är designat för att motverka fibros. Det mjukar upp kollagenet så hårsäcken kan andas igen.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">🔬 2% Anagain™</h4>
                                <p className="text-[16px]">
                                    Utvunnet ur ekologiska ärtgroddar. Förlänger hårets naturliga växtfas så att du behåller fler strån längre.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">+ Patenterad Titanium-kula</h4>
                                <p className="text-[16px] mb-3">
                                    Inte bara en "roll-on". Kulan masserar hårbotten medan den applicerar formulan. Det ökar blodflödet medan den levererar ingredienserna - så de faktiskt tränger ner till hårsäcken.
                                </p>
                                <p className="text-[16px] italic">
                                    Andra märken använder standardkulor som inte stimulerar blodflödet. Ingen massage = sämre resultat.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mb-8">
                            <img src="/roll-on-kula.jpg" alt="Roll-on titanium kula" className="w-full h-auto rounded-lg" />
                        </div>

                        <div className="bg-[#17242C] text-white p-8 rounded-xl my-12">
                            <p className="text-[18px] mb-4">
                                Jag applicerade det direkt på hårbotten. En gång om dagen. 90 sekunder.
                            </p>

                            {/* Image */}
                            <div className="mb-6">
                                <img src="/steg-ny.webp" alt="Applicering steg" className="w-full h-auto rounded-lg" />
                            </div>

                            <div className="space-y-4 mt-6">
                                <div>
                                    <p className="font-bold text-[17px] mb-2">Vecka 1-4:</p>
                                    <p className="text-[16px]">Ingenting märkbart. Jag funderade på att ge upp.</p>
                                </div>

                                <div>
                                    <p className="font-bold text-[17px] mb-2">Vecka 5-8:</p>
                                    <p className="text-[16px]">Håret i duschen blev mycket mindre. Från 50+ strån till kanske 15.</p>
                                </div>

                                <div>
                                    <p className="font-bold text-[17px] mb-2">Månad 3-4:</p>
                                    <p className="text-[16px]">Jag såg babyhår - små, tunna strån - vid vikarna och benan. Nu började det roliga. Håret kändes strävare och hade mer volym vid rötterna.</p>
                                </div>

                                <div>
                                    <p className="font-bold text-[17px] mb-2">Månad 5-6:</p>
                                    <p className="text-[16px]">De nya hårstråna hade blivit tjockare och längre. Håret täckte hårbotten bättre. Här upplevde jag den stora skillnaden i spegeln.</p>
                                </div>
                            </div>
                        </div>


                        <p className="text-[18px] mb-6 font-bold">
                            Och nu, 6 månader senare:
                        </p>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/7 (3).jpg" alt="Resultat efter 6 månader" className="w-full h-auto rounded-lg" />
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3 items-start">
                                <span className="text-2xl">✨</span>
                                <span className="text-[17px]">Benan är hälften så bred</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-2xl">✨</span>
                                <span className="text-[17px]">Vikarna har fyllts i</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-2xl">✨</span>
                                <span className="text-[17px]">Jag kan göra hästsvans utan skam</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-2xl">✨</span>
                                <span className="text-[17px]">Jag sa ja till middag. Spontant.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-2xl">✨</span>
                                <span className="text-[17px]">Jag tog ett foto med mina barn. Och jag såg mig själv i det – inte mitt hår.</span>
                            </li>
                        </ul>

                        <p className="text-[20px] mb-12 font-bold text-center text-[#17242C]">
                            Det här är inte bara hår. Det här är frihet.
                        </p>



                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför Lumina fungerade när allt annat misslyckades
                        </h3>

                        <p className="text-[17px] mb-6">
                            Jag har tänkt mycket på varför Lumina var annorlunda.
                        </p>

                        <p className="text-[17px] mb-6">
                            Det handlar inte om "hemligheter" eller "exklusiv teknologi".
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Det handlar om att de faktiskt adresserade de fyra problemen som alla andra ignorerar:
                        </p>

                        {/* 4 Problems */}
                        <div className="space-y-8 mb-12">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    1. De flesta serum har inga bevisade stamcells-aktivatorer
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Jag kollade ingredienslistorna på 7 olika apotek-serum.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Vet du hur många som faktiskt innehöll bevisade stamcells-aktivatorer? Noll.
                                </p>
                                <p className="text-[17px] mb-4">
                                    De innehöll "volymiserande polymerer" (plast som låter håret se tjockare ut i 4 timmar) och "hydraterande oljor" (som gör inget mot vilande hårsäckar).
                                </p>
                                <p className="text-[17px] mb-4">
                                    Lumina innehåller Redensyl® - en patenterad molekyl som fungerar som en "strömbrytare" för sovande stamceller.
                                </p>
                                <p className="text-[17px] mb-4">
                                    I kliniska studier såg 85% av användarna förbättrad tillväxt.
                                </p>
                                <p className="text-[17px]">
                                    Plus 3% Rosmarin - som i jämförande studier visats vara lika effektivt som Minoxidil för att öka cirkulationen, men utan klåda eller biverkningar.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    2. De flesta serum ignorerar fibros
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Under klimakteriet stelnar kollagenet runt hårsäcken. Det kallas "fibros".
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det är som att hårroten blir inlindad i betong. Ingen näring kommer in. Inget hår kommer ut.
                                </p>
                                <p className="text-[17px] mb-4">
                                    De flesta serum försöker bara "nära" eller "stimulera" - men de gör ingenting mot stelningen.
                                </p>
                                <p className="text-[17px]">
                                    Lumina innehåller Aminexil - det enda ämnet som är designat för att motverka fibros. Det mjukar upp kollagenet så hårsäcken kan andas igen.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    3. De flesta serum stannar på ytan
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Hårsäcken sitter 3-4 mm under huden.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Ett serum som bara ligger på ytan gör ingenting.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Lumina har något unikt: en patenterad Titanium-kula.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det är inte bara en "roll-on". Kulan masserar hårbotten medan den applicerar formulan.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det ökar blodflödet medan den levererar ingredienserna - så de faktiskt tränger ner till hårsäcken.
                                </p>
                                <p className="text-[17px]">
                                    Andra märken använder standardkulor som inte stimulerar blodflödet. Ingen massage = sämre resultat.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    4. De flesta serum är inte designade för nordiskt, fint hår
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Svenska kvinnor har i genomsnitt 30% tunnare hårstrån än medelhavskvinnor.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det betyder att oljiga serum som funkar för tjockare hår kan vara för tunga för oss.
                                </p>
                                <p className="text-[17px]">
                                    Lumina är vattenbaserat och kladdfritt. Det försvinner direkt. Ingen fetma. Ingen tyngd. Det är därför det funkar för fint, nordiskt hår utan att göra det platt.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mb-8">
                            <img src="/kvinna-applicerar-3.jpg" alt="Applicering av Lumina" className="w-full h-auto rounded-lg" />
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag är inte ensam
                        </h3>

                        <p className="text-[17px] mb-6">
                            Över 12,000 svenska kvinnor har redan använt Lumina.
                        </p>

                        <p className="text-[17px] mb-6">
                            Många sa samma sak: "Jag tror inte det funkar. Inget har funkat."
                        </p>

                        <p className="text-[17px] mb-6">
                            Men de gav det 90 dagar.
                        </p>

                        <p className="text-[18px] mb-12 font-bold">
                            Och nu säger de ja igen.
                        </p>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag ska vara ärlig
                        </h3>

                        <p className="text-[18px] mb-6 font-bold">
                            Detta är INTE för alla.
                        </p>

                        <div className="space-y-3 mb-8">
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-red-500 font-bold">❌</span>
                                <span>Om du vill ha resultat på 7 dagar – detta är inte det.</span>
                            </p>
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-red-500 font-bold">❌</span>
                                <span>Om du inte är villig att applicera något dagligt i 90 dagar – detta är inte för dig.</span>
                            </p>
                        </div>

                        <p className="text-[17px] mb-4">
                            Men om du:
                        </p>

                        <div className="space-y-3 mb-8">
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-green-500 font-bold">✅</span>
                                <span>Är trött på att säga nej</span>
                            </p>
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-green-500 font-bold">✅</span>
                                <span>Vill slippa undvika sociala situationer</span>
                            </p>
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-green-500 font-bold">✅</span>
                                <span>Vill vara spontan igen</span>
                            </p>
                            <p className="text-[17px] flex gap-2 items-start">
                                <span className="text-green-500 font-bold">✅</span>
                                <span>Är villig att ge dina hårsäckar 90 dagar</span>
                            </p>
                        </div>

                        <p className="text-[18px] mb-12 font-bold">
                            ...då kan detta vara exakt vad du behöver.
                        </p>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad säger andra kvinnor?
                        </h3>

                        <div className="space-y-4 mb-12">
                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Jag vågade knappt gå till frisören förut för jag skämdes över mina tunna vikar. Efter 3 månader med Lumina frågade min frisör vad jag gjort. Håret känns äntligen levande igen."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Lena, 52, Verifierad köpare</p>
                            </div>

                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Tappade massor av hår i duschen pga stress. Var skeptisk till 'oljor' men denna är inte fet alls. Nu stannar håret på huvudet och jag ser små strån växa ut vid pannan."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Maria, 46, Verifierad köpare</p>
                            </div>

                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Enkel att använda, vilket var avgörande för mig. Har använt den i 4 månader nu och skillnaden på kronan är tydlig. Önskar jag hittat denna tidigare."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Susanne K., 65, Verifierad köpare</p>
                            </div>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Så vad ska du göra nu?
                        </h3>

                        <p className="text-[17px] mb-6">
                            Du har två val.
                        </p>

                        <p className="text-[17px] mb-4">
                            <strong>Val 1:</strong> Fortsätt som vanligt. Fortsätt säga nej. Fortsätt undvika.
                        </p>

                        <p className="text-[17px] mb-8">
                            <strong>Val 2:</strong> Ge dina hårsäckar 90 dagar. Se vad som händer.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag vet vilket val jag gjorde.
                        </p>

                        <p className="text-[18px] mb-12 font-bold">
                            Och 6 månader senare började jag säga ja igen.
                        </p>

                        {/* Final CTA */}
                        <div className="bg-[#FFF9EA] border border-[#F4BE19] p-6 rounded-lg text-center my-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#F4BE19] text-white text-[10px] font-bold px-2 py-1 uppercase">Begränsat Erbjudande</div>
                            <h3 className="font-bold text-[22px] mb-2 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>BEGRÄNSAT ERBJUDANDE</h3>
                            <p className="text-gray-700 mb-6">Få 50% RABATT + 90-Dagars Nöjd-Kund-Garanti</p>

                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] py-4 rounded shadow-lg transition-transform transform hover:scale-[1.02] uppercase tracking-wide mb-4"
                            >
                                → KOLLA TILLGÄNGLIGHET OCH APPLICERA RABATT HÄR ←
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
                <p className="mt-2">Denna webbplats är inte en del av Facebook eller Facebook Inc.</p>
            </div>

        </div>
    );
};

export default Women55PlusV2;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';

const Women55PlusV3: React.FC = () => {
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
        window.location.href = 'https://www.hairscanpro.com/';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-4 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "Klimakteriet stal mitt hår. Jag stal det tillbaka."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/8 (2).jpg" alt="Kvinna med håravfall" className="w-full h-auto rounded-lg" />
                    </div>

                    {/* Subheadline */}
                    <div className="text-[16px] md:text-[18px] text-[#4F5256] mb-4 leading-snug font-sans">
                        Svenska kvinnor 45+ upptäcker den dolda orsaken till håravfall – och varför läkare aldrig pratar om den
                    </div>

                    {/* Date */}
                    <div className="text-[13px] text-[#6C757D] mb-8">
                        14 januari, 2026 | Sponsrat innehåll
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        <p className="text-[17px] mb-4">
                            Tre tussar hår på kudden. Varje morgon nu.
                        </p>

                        <p className="text-[17px] mb-4">
                            Det är inte längre enstaka strån.
                        </p>

                        <p className="text-[17px] mb-6">
                            Det är klumpar.
                        </p>

                        <p className="text-[17px] mb-4">
                            Om du har börjat se hårbotten genom håret när taklampan lyser ner...
                        </p>

                        <p className="text-[17px] mb-4">
                            Om dina vikar vid tinningarna har blivit bredare än för ett år sedan...
                        </p>

                        <p className="text-[17px] mb-6">
                            Om du räknar hårstrån i duschen och rädslan växer varje dag...
                        </p>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/9 (1).jpg" alt="Hårstrån i duschen" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-8 font-bold">
                            Då måste du läsa detta.
                        </p>

                        <p className="text-[17px] mb-4">
                            Det finns en dold epidemi som härjar bland svenska kvinnor över 45 just nu.
                        </p>

                        <p className="text-[17px] mb-4">
                            2 av 3 kvinnor drabbas.
                        </p>

                        <p className="text-[17px] mb-6">
                            Och här är den skrämmande delen:
                        </p>

                        <p className="text-[18px] mb-10 font-bold text-[#17242C]">
                            Det du tror håller ditt hår friskt kanske faktiskt förvärrar problemet.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            798 kronor på akuten förändrade allt
                        </h3>

                        <p className="text-[17px] mb-4">
                            Mitt namn är Eva Andersson.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag är 55 år. Gift. Två vuxna barn. Lärare i Göteborg.
                        </p>

                        <p className="text-[17px] mb-4">
                            För ett år sedan började något förändras.
                        </p>

                        <p className="text-[17px] mb-4">
                            Först tänkte jag inte på det.
                        </p>

                        <p className="text-[17px] mb-6">
                            Ett par extra hårstrån i borsten. Lite tunnare vid tinningarna.
                        </p>

                        <p className="text-[17px] mb-4 italic">
                            "Det är bara stress," sa jag till mig själv. "Det går över."
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Men det gick inte över.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det började smått – sen exploderade det
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/57.jpg" alt="Håravfall progression" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-3">
                            <strong>Januari 2025:</strong> Jag märkte att hårelastiken behövde rullas fyra vardar istället för två.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Mars 2025:</strong> Min frisör tittade bort när hon klippte mig. Hon såg vad jag vägrade se.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Maj 2025:</strong> Min dotter frågade: "Mamma, varför kan jag se din hjässa?"
                        </p>

                        <p className="text-[17px] mb-8">
                            <strong>Juli 2025:</strong> Jag slutade gå på middagar. Inte för att jag inte ville. Utan för att jag inte orkade förklara mitt hår.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Läkaren som inte lyssnade
                        </h3>

                        <p className="text-[17px] mb-4">
                            I augusti 2025 bokade jag äntligen tid på vårdcentralen.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag tog med mig foton. Före och efter.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag visade vikarna vid tinningarna som växte sig större varje vecka.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag visade benan – dubbelt så bred som för ett år sedan.
                        </p>

                        <p className="text-[17px] mb-6">
                            Läkaren tittade knappt upp från datorn.
                        </p>

                        <p className="text-[17px] mb-6 italic">
                            "Det är klimakteriet," sa hon. "Det är helt normalt. Prova Priorin om du vill."
                        </p>

                        <p className="text-[17px] mb-4">
                            Klimakteriet?
                        </p>

                        <p className="text-[17px] mb-4">
                            Det förklarade ingenting.
                        </p>

                        <p className="text-[17px] mb-6">
                            Varför ramlar håret? Varför just nu? Varför kan jag inte stoppa det?
                        </p>

                        <p className="text-[17px] mb-4">
                            Hon hade inga svar.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag gick därifrån med tomma händer och ett brusande i öronen.
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Men jag vägrade ge upp.
                        </p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Sanningen ingen läkare sa till mig
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/3 (6).jpg" alt="Forskning om håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">
                            En natt i september satt jag i köket klockan 02:30.
                        </p>

                        <p className="text-[17px] mb-6">
                            Jag kunde inte sova. Jag googlade desperat.
                        </p>

                        <p className="text-[17px] mb-2 italic">
                            "Håravfall klimakteriet"
                        </p>
                        <p className="text-[17px] mb-2 italic">
                            "Varför slutar håret växa"
                        </p>
                        <p className="text-[17px] mb-6 italic">
                            "Östrogen hårsäckar"
                        </p>

                        <p className="text-[17px] mb-4">
                            Och då hittade jag det.
                        </p>

                        <p className="text-[17px] mb-6">
                            En studie. En artikel. En förklaring.
                        </p>

                        <p className="text-[18px] mb-8 font-bold text-[#17242C]">
                            Sanningen som ingen läkare någonsin berättat för mig:
                        </p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Klimakteriet skapar ett "östrogen-vakuum" – och DHT flyttar in
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/problem-bild.jpg" alt="Östrogen-vakuum och DHT" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            Här är vad som verkligen händer i din hårbotten:
                        </p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Före klimakteriet:
                            </h4>
                            <p className="text-[17px] mb-3">Östrogen är din hårsäckens livlina.</p>
                            <p className="text-[17px] mb-3">Det håller håret i tillväxtfas (anagen) i 3-7 år.</p>
                            <p className="text-[17px] mb-3">Det blockerar DHT – ett hormon som kväver hårrötterna.</p>
                            <p className="text-[17px]">Det håller hårbotten mjuk, näringsrik, elastisk.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Under klimakteriet:
                            </h4>
                            <p className="text-[17px] mb-3">Östrogenet sjunker med 60-90% på bara några år.</p>
                            <p className="text-[17px] mb-3">Plötsligt finns det ingen sköld längre.</p>
                            <p className="text-[17px] mb-3">DHT tar över. Det binder sig till hårsäcken som en parasit.</p>
                            <p className="text-[17px] mb-3">Hårsäcken krymper. Håret blir tunnare. Tillväxtfasen förkortas från år till månader.</p>
                            <p className="text-[17px] font-bold">Och hårbotten själv? Den blir torr, fibrotisk, stram som betong – vilket fysiskt kväver roten.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[18px] mb-4 font-bold text-[#17242C]">
                                Men här är hoppet: Dina hårsäckar är inte döda. De sover.
                            </p>
                            <p className="text-[17px] mb-4">
                                Forskare kallar det "sustained dormancy" – varaktig dvala.
                            </p>
                            <p className="text-[17px] mb-4">
                                Hårsäckarna går in i en vilofas (telogen).
                            </p>
                            <p className="text-[17px] mb-4">
                                De slutar inte fungera för evigt. De är bara... avstängda.
                            </p>
                            <p className="text-[18px] font-bold text-[#17242C]">
                                Och när något sover kan det väckas.
                            </p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                            <p className="text-[17px] mb-4">
                                Men här är problemet:
                            </p>
                            <p className="text-[17px] mb-4">
                                Ju längre de står stilla, desto djupare går de in i dvala.
                            </p>
                            <p className="text-[17px] mb-4 font-bold">
                                Om du väntar 2 år tar det längre tid att väcka dem än om du agerar inom 6 månader.
                            </p>
                            <p className="text-[17px] mb-4">
                                Varje dag du väntar är en dag dina hårsäckar glider djupare in i sömn.
                            </p>
                            <p className="text-[17px] font-bold">
                                Varje månad av dormans gör skada som kan bli permanent.
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför ingenting du prövat har fungerat
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/2 (6).jpg" alt="Misslyckade behandlingar" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-8">
                            Jag insåg tre saker som gjorde mig rasande:
                        </p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Misslyckande #1: Priorin, Hairlust, Biotin
                            </h4>
                            <p className="text-[17px] mb-4">
                                Jag slukade kapslar stora som valpar.
                            </p>
                            <p className="text-[17px] mb-4">
                                4,800 kronor på 8 månader.
                            </p>
                            <p className="text-[17px] mb-4">
                                Mitt hår? Fortfarande tunnare. Fortfarande tunnare varje månad.
                            </p>
                            <p className="text-[17px] mb-4 font-bold">
                                Varför?
                            </p>
                            <p className="text-[17px] mb-4">
                                För att vitaminer kan hjälpa om du har brist.
                            </p>
                            <p className="text-[17px] mb-4">
                                Men om problemet är DHT som blockerar hårsäcken och östrogen som är borta?
                            </p>
                            <p className="text-[17px] mb-4 font-bold">
                                Då gör vitaminer ingenting.
                            </p>
                            <p className="text-[17px] italic">
                                Det är som att ge vatten till en trädgård där rötterna är omslutna av betong.
                            </p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Misslyckande #2: Minoxidil – rädslan som stoppade mig
                            </h4>
                            <p className="text-[17px] mb-4">
                                Jag stod i Apoteket med Recrea Forte i handen.
                            </p>
                            <p className="text-[17px] mb-4">
                                Jag läste bipacksedeln.
                            </p>
                            <p className="text-[17px] mb-4 italic">
                                "Kan orsaka initialt ökad håravfall (dread shed)."
                            </p>
                            <p className="text-[17px] mb-4">
                                Vänta – det ska göra håravfallet värre först?
                            </p>
                            <p className="text-[17px] mb-4">
                                Jag googlade. Forum efter forum:
                            </p>
                            <p className="text-[16px] mb-2 italic ml-4">
                                "Vecka 2 på Minoxidil – förlorade 30% av mitt hår. Jag slutade omedelbart."
                            </p>
                            <p className="text-[16px] mb-2 italic ml-4">
                                "Klibbigt, fett, mitt hår såg smutsigt ut hela tiden."
                            </p>
                            <p className="text-[16px] mb-4 italic ml-4">
                                "Använt i 2 år. Slutade i 3 veckor. Allt föll av. Nu är jag värre än innan jag började."
                            </p>
                            <p className="text-[17px] mb-4">
                                Livslång användning. Dread shed. Klibbigt. Giftigt för katter.
                            </p>
                            <p className="text-[17px] font-bold">
                                Jag lade tillbaka flaskan.
                            </p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                Misslyckande #3: Rosemarinolja från TikTok
                            </h4>
                            <p className="text-[17px] mb-4">
                                En influencer sa: "Naturens Minoxidil!"
                            </p>
                            <p className="text-[17px] mb-4">
                                Jag köpte olja. Jag masserade in den varje kväll.
                            </p>
                            <p className="text-[17px] mb-4">
                                Mitt hår blev fett, tungt, platt.
                            </p>
                            <p className="text-[17px] mb-4">
                                Jag kunde inte gå ut utan att tvätta det först.
                            </p>
                            <p className="text-[17px] mb-4">
                                Efter 2 månader: Noll skillnad.
                            </p>
                            <p className="text-[17px]">
                                Förutom att jag luktade rosmarin hela tiden.
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Då hittade jag sanningen
                        </h3>

                        <p className="text-[17px] mb-6">
                            I oktober hittade jag en artikel från en dermatolog.
                        </p>

                        <p className="text-[17px] mb-8">
                            Hon förklarade tre biologiska processer som måste adresseras för att väcka dormanta hårsäckar:
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Process #1: Fibros måste mjukas upp</h4>

                                {/* Image */}
                                <div className="mb-3">
                                    <img src="/4 (4).jpg" alt="Fibros i hårsäcken" className="w-full h-auto rounded-lg" />
                                </div>

                                <p className="text-[16px] mb-3">
                                    Under klimakteriet stelnar kollagenet runt hårsäcken.
                                </p>
                                <p className="text-[16px] mb-3">
                                    Det kallas "perifollicular fibrosis".
                                </p>
                                <p className="text-[16px] mb-3">
                                    Det är som att hårroten blir inlindad i betong. Ingen näring kommer in. Inget hår kommer ut.
                                </p>
                                <p className="text-[16px] font-bold">
                                    Lösning: Aminexil – det enda ämnet som är designat för att motverka fibros.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Process #2: Stamcellerna måste väckas</h4>

                                {/* Image */}
                                <div className="mb-3">
                                    <img src="/5 (4).jpg" alt="Stamceller i hårsäcken" className="w-full h-auto rounded-lg" />
                                </div>

                                <p className="text-[16px] mb-3">
                                    Vilande hårsäckar vaknar inte av vitaminer. De vaknar inte av olja.
                                </p>
                                <p className="text-[16px] mb-3">
                                    De behöver en molekylär signal – något som säger till stamcellerna: "det är säkert att växa igen".
                                </p>
                                <p className="text-[16px] font-bold">
                                    Lösning: Redensyl® – en patenterad "strömbrytare" för sovande stamceller. 85% av användarna i studier såg förbättrad tillväxt.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg">
                                <h4 className="text-[18px] font-bold mb-2 text-[#17242C]">Process #3: Mikrocirkulationen måste återställas</h4>
                                <p className="text-[16px] mb-3">
                                    Hårsäcken sitter 3-4 mm under huden.
                                </p>
                                <p className="text-[16px] mb-3">
                                    Utan blodflöde = ingen syre = ingen tillväxt.
                                </p>
                                <p className="text-[16px] mb-3">
                                    Klimakteriet minskar blodflödet till hårbotten med upp till 40%.
                                </p>
                                <p className="text-[16px] font-bold">
                                    Lösning: 3% Rosmarin – i jämförande studier lika effektivt som Minoxidil för att öka cirkulationen, men utan biverkningar.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Och det var exakt vad jag hittade i Lumina
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/list 2.jpg" alt="Lumina ingredienser" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            Inte ett schampo. Inte en olja. Inte en tablett.
                        </p>

                        <p className="text-[17px] mb-6">
                            Ett vetenskapligt designat serum som adresserar alla tre processerna:
                        </p>

                        <div className="space-y-3 mb-8">
                            <p className="text-[17px]">
                                🔬 <strong>3% Redensyl®</strong> - Väcker sovande stamceller (85% såg förbättring i studier)
                            </p>
                            <p className="text-[17px]">
                                🔬 <strong>Aminexil</strong> - Mjukar upp fibros så hårsäcken kan andas
                            </p>
                            <p className="text-[17px]">
                                🔬 <strong>3% Rosmarin</strong> - Ökar mikrocirkulation lika effektivt som Minoxidil, utan biverkningar
                            </p>
                            <p className="text-[17px]">
                                🔬 <strong>2% Anagain™</strong> - Förlänger tillväxtfasen så håret stannar kvar längre
                            </p>
                            <p className="text-[17px]">
                                + <strong>Patenterad Titanium-kula</strong> som masserar hårbotten medan den applicerar. Ökar blodflödet medan den levererar ingredienserna.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/produkt-ingredienser.jpg" alt="Produktens ingredienser och effekt" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-8">
                            Jag började sent oktober. Applicerade det direkt på hårbotten. 90 sekunder. Morgon och kväll.
                        </p>

                        <p className="text-[18px] mb-6 font-bold">
                            Jag ska vara brutalt ärlig med dig:
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Vecka 1-4 (november):</strong> Ingenting. Jag tänkte: "Här går vi igen. Slösade pengar på ingenting."
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Vecka 5 (mitten av november):</strong> Något förändrades. Håret i duschen blev... mindre? Jag trodde jag inbillade mig.
                        </p>

                        <p className="text-[17px] mb-3">
                            <strong>Vecka 8 (december):</strong> Det var inte inbillning. Från 50+ strån i duschen till kanske 20.
                        </p>

                        <p className="text-[17px] mb-6">
                            <strong>Månad 3 (nu i januari):</strong> Jag ser det. Små, tunna babyhår vid vikarna. Inte många. Men de är där.
                        </p>

                        <p className="text-[18px] mb-10 font-bold">
                            Och för första gången på över ett år känner jag hopp.
                        </p>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag är inte klar än – men jag är på rätt väg
                        </h3>

                        <p className="text-[17px] mb-3">✨ Håravfallet har minskat med 60%</p>
                        <p className="text-[17px] mb-3">✨ Benan ser smalare ut</p>
                        <p className="text-[17px] mb-3">✨ Jag ser små babyhår vid vikarna</p>
                        <p className="text-[17px] mb-3">✨ Hårbotten känns friskare, mindre torr</p>
                        <p className="text-[17px] mb-8">✨ Jag sa ja till middag förra veckan. Spontant.</p>

                        <p className="text-[17px] mb-6">
                            För första gången på länge känns det som att jag inte tappar kontroll.
                        </p>

                        <p className="text-[20px] mb-12 font-bold text-center text-[#17242C]">
                            Det här är inte bara hår. Det här är frihet.
                        </p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför Lumina fungerade när allt annat misslyckades
                        </h3>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/losning-bild.jpg" alt="Lumina lösning" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-6">
                            Det handlar inte om "hemligheter" eller "exklusiv teknologi".
                        </p>

                        <p className="text-[17px] mb-8 font-bold">
                            Det handlar om att Lumina adresserar de fyra biologiska processerna som alla andra ignorerar:
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    1. De flesta serum har inga stamcells-aktivatorer
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Jag kollade ingredienslistorna på 7 olika apotek-serum.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Vet du hur många som faktiskt innehöll bevisade stamcells-aktivatorer? Noll.
                                </p>
                                <p className="text-[17px] mb-4">
                                    De innehöll "volymiserande polymerer" och "hydraterande oljor" som gör inget mot vilande hårsäckar.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Lumina innehåller Redensyl® - en patenterad molekyl som väcker sovande stamceller.
                                </p>
                                <p className="text-[17px]">
                                    I kliniska studier såg 85% av användarna förbättrad tillväxt.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    2. De flesta serum ignorerar fibros
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Under klimakteriet stelnar kollagenet runt hårsäcken.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det är som att hårroten blir inlindad i betong.
                                </p>
                                <p className="text-[17px]">
                                    Lumina innehåller Aminexil - det enda ämnet designat för att motverka fibros.
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
                                    Lumina har en patenterad Titanium-kula som masserar hårbotten medan den applicerar.
                                </p>
                                <p className="text-[17px] mb-4">
                                    Det ökar blodflödet medan den levererar ingredienserna.
                                </p>
                                <p className="text-[17px]">
                                    Andra märken använder standardkulor. Ingen massage = sämre resultat.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">
                                    4. De flesta serum är för tunga för nordiskt hår
                                </h4>
                                <p className="text-[17px] mb-4">
                                    Svenska kvinnor har 30% tunnare hårstrån än medelhavskvinnor.
                                </p>
                                <p className="text-[17px]">
                                    Lumina är vattenbaserat och kladdfritt. Ingen fetma. Ingen tyngd.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vad säger andra kvinnor?
                        </h3>

                        <div className="space-y-4 mb-12">
                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Efter 3 månader frågade min frisör vad jag gjort. Håret känns faktiskt tjockare och jag ser nya strån växa ut vid tinningarna."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Lena, 52, Stockholm</p>
                            </div>

                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Jag vågade knappt gå till frisören förut för jag skämdes över mina tunna vikar. Efter 3 månader med Lumina frågade min frisör vad jag gjort. Håret känns äntligen levande igen."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Anna, 54, Verifierad köpare</p>
                            </div>

                            <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                    "Tappade massor av hår i duschen. Var skeptisk men denna är inte fet alls. Nu stannar håret på huvudet och jag ser små strån växa ut vid pannan."
                                </p>
                                <p className="text-right font-bold text-[#17242C] text-[13px]">– Maria, 46, Verifierad köpare</p>
                            </div>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag ska vara ärlig – detta är INTE för alla
                        </h3>

                        <div className="space-y-3 mb-8">
                            <p className="text-[17px]">
                                ❌ Om du vill ha resultat på 7 dagar – detta är inte det.
                            </p>
                            <p className="text-[17px]">
                                ❌ Om du inte är villig att applicera något dagligen i 90 dagar – detta är inte för dig.
                            </p>
                            <p className="text-[17px]">
                                ❌ Om du förväntar dig mirakel utan tålamod – fortsätt leta.
                            </p>
                        </div>

                        <p className="text-[17px] mb-4">
                            Men om du:
                        </p>

                        <div className="space-y-3 mb-8">
                            <p className="text-[17px]">
                                ✅ Är trött på att undvika speglar
                            </p>
                            <p className="text-[17px]">
                                ✅ Vill sluta räkna hårstrån i duschen
                            </p>
                            <p className="text-[17px]">
                                ✅ Vill vara spontan igen utan att tänka på håret först
                            </p>
                            <p className="text-[17px]">
                                ✅ Är villig att ge dina hårsäckar 90 dagar att vakna
                            </p>
                        </div>

                        {/* Image */}
                        <div className="mb-6">
                            <img src="/7 (3).jpg" alt="Resultat efter 90 dagar" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-12 font-bold">
                            ...då kan detta vara exakt vad du behöver.
                        </p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Så vad ska du göra nu?
                        </h3>

                        <p className="text-[17px] mb-6">
                            Du har två val.
                        </p>

                        <p className="text-[17px] mb-4">
                            <strong>Val 1:</strong> Fortsätt som vanligt. Fortsätt undvika. Fortsätt hoppas att det går över av sig själv.
                        </p>

                        <p className="text-[17px] mb-8">
                            <strong>Val 2:</strong> Ge dina hårsäckar 90 dagar. Väck dem. Se vad som händer.
                        </p>

                        <p className="text-[17px] mb-4">
                            Jag vet vilket val jag gjorde.
                        </p>

                        <p className="text-[18px] mb-12 font-bold">
                            Och tre månader senare ser jag äntligen hopp igen.
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

export default Women55PlusV3;

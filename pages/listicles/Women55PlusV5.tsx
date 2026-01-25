import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';

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
        window.location.href = 'https://www.hairscanpro.com/';
    };

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* Headline */}
                    <h1 className="text-[28px] md:text-[40px] font-[900] leading-[1.15] mb-4 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        "90 dagar förändrade mitt 55-åriga hår. Så här väckte jag sovande hårsäckar efter klimakteriet."
                    </h1>

                    {/* Hero Image */}
                    <div className="mb-6">
                        <img src="/10 (1).jpg" alt="Kvinna med håravfall" className="w-full h-auto rounded-lg" />
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

                        <p className="text-[17px] mb-4">Tre tussar hår på kudden. Varje morgon nu.</p>
                        <p className="text-[17px] mb-4">Det är inte längre enstaka strån.</p>
                        <p className="text-[17px] mb-6">Det är klumpar.</p>

                        <p className="text-[17px] mb-4">Om du har börjat se hårbotten genom håret när taklampan lyser ner...</p>
                        <p className="text-[17px] mb-4">Om dina vikar vid tinningarna har blivit bredare än för ett år sedan...</p>
                        <p className="text-[17px] mb-6">Om du räknar hårstrån i duschen och rädslan växer varje dag...</p>

                        <div className="mb-6">
                            <img src="/hair-loss-image.jpg" alt="Håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[18px] mb-8 font-bold">Då måste du läsa detta.</p>

                        <p className="text-[17px] mb-4">Det finns en dold epidemi som härjar bland svenska kvinnor över 45 just nu.</p>
                        <p className="text-[17px] mb-4">2 av 3 kvinnor drabbas.</p>
                        <p className="text-[17px] mb-6">Och här är den skrämmande delen:</p>
                        <p className="text-[18px] mb-10 font-bold text-[#17242C]">Det du tror håller ditt hår friskt kanske faktiskt förvärrar problemet.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            798 kronor förändrade allt
                        </h3>

                        <p className="text-[17px] mb-4">Mitt namn är Eva Andersson.</p>
                        <p className="text-[17px] mb-4">Jag är 55 år. Gift. Två vuxna barn. Lärare i Göteborg.</p>
                        <p className="text-[17px] mb-4">För ett år sedan började något förändras.</p>
                        <p className="text-[17px] mb-4">Först tänkte jag inte på det.</p>
                        <p className="text-[17px] mb-6">Ett par extra hårstrån i borsten. Lite tunnare vid tinningarna.</p>
                        <p className="text-[17px] mb-4 italic">"Det är bara stress," sa jag till mig själv. "Det går över."</p>
                        <p className="text-[17px] mb-8 font-bold">Men det gick inte över.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Det började smått – sen exploderade det
                        </h3>

                        <div className="mb-6">
                            <img src="/57.jpg" alt="Håravfall progression" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-3"><strong>Januari 2025:</strong> Jag märkte att hårelastiken behövde rullas fyra vardar istället för två.</p>
                        <p className="text-[17px] mb-3"><strong>Mars 2025:</strong> Min frisör tittade bort när hon klippte mig. Hon såg vad jag vägrade se.</p>
                        <p className="text-[17px] mb-3"><strong>Maj 2025:</strong> Min dotter frågade: "Mamma, varför kan jag se din hjässa?"</p>
                        <p className="text-[17px] mb-8"><strong>Juli 2025:</strong> Jag slutade gå på middagar. Inte för att jag inte ville. Utan för att jag inte orkade förklara mitt hår.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Läkaren som inte lyssnade
                        </h3>

                        <p className="text-[17px] mb-4">I augusti 2025 bokade jag äntligen tid på vårdcentralen.</p>
                        <p className="text-[17px] mb-4">Jag tog med mig foton. Före och efter.</p>
                        <p className="text-[17px] mb-4">Jag visade vikarna vid tinningarna som växte sig större varje vecka.</p>
                        <p className="text-[17px] mb-6">Jag visade benen – dubbelt så bred som för ett år sedan.</p>
                        <p className="text-[17px] mb-6">Läkaren tittade knappt upp från datorn.</p>
                        <p className="text-[17px] mb-6 italic">"Det är klimakteriet," sa hon. "Det är helt normalt. Prova Priorin om du vill."</p>

                        <p className="text-[17px] mb-4">Klimakteriet?</p>
                        <p className="text-[17px] mb-4">Det förklarade ingenting.</p>
                        <p className="text-[17px] mb-6">Varför ramlar håret? Varför just nu? Varför kan jag inte stoppa det?</p>
                        <p className="text-[17px] mb-4">Hon hade inga svar.</p>
                        <p className="text-[17px] mb-6">Jag gick därifrån med tomma händer och ett brusande i öronen.</p>
                        <p className="text-[17px] mb-8 font-bold">Men jag vägrade ge upp.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Sanningen ingen läkare sa till mig
                        </h3>

                        <div className="mb-6">
                            <img src="/3 (6).jpg" alt="Forskning om håravfall" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">En natt i september satt jag i köket klockan 02:30.</p>
                        <p className="text-[17px] mb-6">Jag kunde inte sova. Jag googlade desperat.</p>
                        <p className="text-[17px] mb-2 italic">"Håravfall klimakteriet"</p>
                        <p className="text-[17px] mb-2 italic">"Varför slutar håret växa"</p>
                        <p className="text-[17px] mb-6 italic">"Östrogen hårsäckar"</p>

                        <p className="text-[17px] mb-4">Och då hittade jag det.</p>
                        <p className="text-[17px] mb-6">En studie. En artikel. En förklaring.</p>
                        <p className="text-[18px] mb-8 font-bold text-[#17242C]">Sanningen som ingen läkare någonsin berättat för mig:</p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Klimakteriet skapar ett "östrogen-vakuum" – och DHT flyttar in
                        </h3>

                        <p className="text-[17px] mb-6">Här är vad som verkligen händer i din hårbotten:</p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Före klimakteriet:</h4>
                            <div className="mb-4">
                                <img src="/12 (2).jpg" alt="Före klimakteriet" className="w-full h-auto rounded-lg" />
                            </div>
                            <p className="text-[17px] mb-3">Östrogen är din hårsäckens livlina.</p>
                            <p className="text-[17px] mb-3">Det håller håret i tillväxtfas (anagen) i 3-7 år</p>
                            <p className="text-[17px] mb-3">Det blockerar DHT – ett hormon som kväver hårrötterna</p>
                            <p className="text-[17px]">Det håller hårbotten mjuk, näringsrik, elastisk</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Under klimakteriet:</h4>
                            <div className="mb-4">
                                <img src="/11.jpg" alt="Under klimakteriet" className="w-full h-auto rounded-lg" />
                            </div>
                            <p className="text-[17px] mb-3">Östrogenet sjunker med 60-90% på bara några år.</p>
                            <p className="text-[17px] mb-3">Plötsligt finns det ingen sköld längre.</p>
                            <p className="text-[17px] mb-3">DHT tar över. Det binder sig till hårsäcken som en parasit</p>
                            <p className="text-[17px] mb-3">Hårsäcken krymper. Håret blir tunnare</p>
                            <p className="text-[17px] mb-3">Tillväxtfasen förkortas från år till månader</p>
                            <p className="text-[17px] font-bold">Hårbotten blir torr, fibrotisk, stram som betong – vilket fysiskt kväver roten</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <p className="text-[18px] mb-4 font-bold text-[#17242C]">Men här är hoppet: Dina hårsäckar är inte döda. De sover.</p>
                            <p className="text-[17px] mb-4">Forskare kallar det "sustained dormancy" – varaktig dvala.</p>
                            <p className="text-[17px] mb-4">Hårsäckarna går in i en vilofas (telogen).</p>
                            <p className="text-[17px] mb-4">De slutar inte fungera för evigt. De är bara... avstängda.</p>
                            <p className="text-[18px] font-bold text-[#17242C]">Och när något sover kan det väckas.</p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                            <p className="text-[17px] mb-4">Men här är problemet:</p>
                            <p className="text-[17px] mb-4">Ju längre de står stilla, desto djupare går de in i dvala.</p>
                            <p className="text-[17px] mb-4 font-bold">Om du väntar 2 år tar det längre tid att väcka dem än om du agerar inom 6 månader.</p>
                            <p className="text-[17px] mb-4">Varje dag du väntar är en dag dina hårsäckar glider djupare in i sömn.</p>
                            <p className="text-[17px] font-bold">Varje månad av dormans gör skada som kan bli permanent.</p>
                        </div>

                        {/* Continue with the rest... Due to length, I'll add this in parts */}

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför ingenting du prövat har fungerat
                        </h3>

                        <div className="mb-6">
                            <img src="/58.jpg" alt="Misslyckade lösningar" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-8">Jag insåg tre saker som gjorde mig rasande:</p>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Misslyckande #1: Priorin, Hairlust, Biotin</h4>
                            <p className="text-[17px] mb-4">Jag slukade kapslar stora som valpar.</p>
                            <p className="text-[17px] mb-4">4,800 kronor på 8 månader.</p>
                            <p className="text-[17px] mb-4">Mitt hår? Fortfarande tunnare. Fortfarande tunnare varje månad.</p>
                            <p className="text-[17px] mb-4 font-bold">Varför?</p>
                            <p className="text-[17px] mb-4">För att vitaminer kan hjälpa om du har brist.</p>
                            <p className="text-[17px] mb-4">Men om problemet är DHT som blockerar hårsäcken och östrogen som är borta?</p>
                            <p className="text-[17px] mb-4 font-bold">Då gör vitaminer ingenting.</p>
                            <p className="text-[17px] italic">Det är som att ge vatten till en trädgård där rötterna är omslutna av betong.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-6 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Misslyckande #2: Minoxidil – rädslan som stoppade mig</h4>
                            <p className="text-[17px] mb-4">Jag stod i Apoteket med Recrea Forte i handen.</p>
                            <p className="text-[17px] mb-4">Jag läste bipacksedeln.</p>
                            <p className="text-[17px] mb-4 italic">"Måste användas dagligen. Livslångt. Om du slutar faller håret ut igen."</p>
                            <p className="text-[17px] mb-4">Och den där lilla meningen längst ner:</p>
                            <p className="text-[17px] mb-4 italic">"Dread shed: Initial shedding kan förekomma första månaderna."</p>
                            <p className="text-[17px] mb-4">Vänta. Vad?</p>
                            <p className="text-[17px] mb-4">Jag skulle förlora ÄNNU MER hår de första månaderna?</p>
                            <p className="text-[17px] mb-4">För att sedan bli beroende av en produkt i resten av mitt liv?</p>
                            <p className="text-[17px] mb-4">Och om jag slutar är jag tillbaka på ruta ett – fast värre?</p>
                            <p className="text-[17px] mb-4">Jag lade tillbaka burken.</p>
                            <p className="text-[17px] font-bold">Jag kunde inte göra det.</p>
                        </div>

                        <div className="bg-[#EEEBFC] p-6 rounded-lg mb-8 border border-[#DCD6F7]">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Misslyckande #3: Frisören ljög</h4>
                            <p className="text-[17px] mb-4">"Vi har en ny volymbehandling!" sa min frisör med ett leende.</p>
                            <p className="text-[17px] mb-4">Keratinbehandling. Volymprodukter. Root lift spray.</p>
                            <p className="text-[17px] mb-4">800 kronor per månad.</p>
                            <p className="text-[17px] mb-4">Det såg bättre ut i 48 timmar.</p>
                            <p className="text-[17px] mb-4">Sen var allt tillbaka.</p>
                            <p className="text-[17px] mb-4">För det var bara en maskering.</p>
                            <p className="text-[17px] mb-4">Håret såg tjockare ut för att produkterna belade det.</p>
                            <p className="text-[17px]">Men hårsäckarna under? De var fortfarande döende.</p>
                        </div>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Dagen jag trodde jag skulle bryta samman
                        </h3>

                        <div className="mb-6">
                            <img src="/13 (2).jpg" alt="Emotionell breakdown" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="text-[17px] mb-4">Det var en torsdagskväll i oktober.</p>
                        <p className="text-[17px] mb-4">Min man och jag skulle på middag med vänner.</p>
                        <p className="text-[17px] mb-6">Jag stod framför spegeln i 45 minuter och försökte få håret att se ut som... något.</p>

                        <p className="text-[17px] mb-4">Jag provade allt:</p>
                        <p className="text-[17px] mb-3">Sidodel (för bred hjässa)</p>
                        <p className="text-[17px] mb-3">Hästsvans (för tunn)</p>
                        <p className="text-[17px] mb-6">Håret utsläppt (synlig hårbotten i taklampan)</p>

                        <p className="text-[17px] mb-4">Ingenting fungerade.</p>
                        <p className="text-[17px] mb-4">Jag grät.</p>
                        <p className="text-[17px] mb-6">Jag satt på badrumsgolvet med håret hängande över ansiktet och skämdes.</p>

                        <p className="text-[17px] mb-4">Mitt hår – något så enkelt, så självklart i 50 år – var nu källan till min skam.</p>
                        <p className="text-[17px] mb-4">Min man knackade på dörren.</p>
                        <p className="text-[17px] mb-6 italic">"Eva, det är bara hår."</p>

                        <p className="text-[17px] mb-4">Men det var inte bara hår.</p>
                        <p className="text-[17px] mb-6">Det var mitt självförtroende. Min identitet. Min frihet att bara... vara.</p>

                        <p className="text-[17px] mb-4">Jag sa att jag var sjuk. Att jag inte kunde gå.</p>
                        <p className="text-[17px] mb-4">Jag stannade hemma medan han gick ensam.</p>
                        <p className="text-[17px] mb-8 font-bold">Och jag lovade mig själv: Detta slutar nu.</p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Forskningen som förändrade allt
                        </h3>

                        <p className="text-[17px] mb-4">Natten efter den missade middagen satte jag mig vid datorn.</p>
                        <p className="text-[17px] mb-4">Jag skulle inte ge upp förrän jag hittade svaret.</p>
                        <p className="text-[17px] mb-8">Och efter 6 timmar av studier, forskningsartiklar och hårdladdade DM-meddelanden till dermatologer på LinkedIn...</p>
                        <p className="text-[18px] mb-10 font-bold">Hittade jag det.</p>

                        <p className="text-[18px] mb-8 font-bold">Fyra genombrott som förändrade allt:</p>

                        <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Genombrott #1: 3% Rosmarin = Minoxidil utan biverkningar</h4>
                            <p className="text-[17px] mb-4">En studie från Skinmed 2015 (peer-reviewed) visade att rosmarinextrakt fungerade lika bra som 2% Minoxidil.</p>
                            <p className="text-[17px] mb-3">100 patienter med håravfall</p>
                            <p className="text-[17px] mb-3">Hälften fick Minoxidil</p>
                            <p className="text-[17px] mb-4">Hälften fick rosmarinolja</p>
                            <p className="text-[17px] mb-4 font-bold">Efter 6 månader: Båda grupperna hade samma resultat.</p>
                            <p className="text-[17px] mb-3">Men rosmaringruppen hade:</p>
                            <p className="text-[17px] mb-2">Ingen dread shed</p>
                            <p className="text-[17px] mb-2">Ingen hudirritation</p>
                            <p className="text-[17px] mb-4">Inget livslångt beroende</p>
                            <p className="text-[17px] mb-3 font-bold">Rosmarin fungerade genom att:</p>
                            <p className="text-[17px] mb-2">Öka blodcirkulationen i hårbotten (hårsäckar behöver syre)</p>
                            <p className="text-[17px] mb-2">Blockera DHT genom anti-inflammatoriska egenskaper</p>
                            <p className="text-[17px] mb-4">Förlänga tillväxtfasen (anagen)</p>
                            <p className="text-[17px]">En studie från 2025 visade att ett serum med rosmarin och Redensyl gav 46,71% ökning i hårväxthastighet efter 90 dagar.</p>
                        </div>

                        <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Genombrott #2: 3% Redensyl® väcker sovande stamceller</h4>
                            <p className="text-[17px] mb-4">Detta var genombrottet som förändrade allt.</p>
                            <p className="text-[17px] mb-4">Redensyl fungerar som en "molekylär strömbrytare" som väcker sovande hårsäcksstamceller.</p>
                            <p className="text-[17px] mb-3 font-bold">En klinisk studie visade:</p>
                            <p className="text-[17px] mb-2">85% av användarna såg förbättrad tillväxt</p>
                            <p className="text-[17px] mb-2">Hårvästhastigheten ökade med 31,62% efter 60 dagar</p>
                            <p className="text-[17px] mb-2">Hårdensiteten förbättrades med 37,92%</p>
                            <p className="text-[17px] mb-4">Hårtjockleken ökade med 80,85% efter 120 dagar</p>
                            <p className="text-[17px] mb-4 font-bold">Varför är detta viktigt för klimakteriet?</p>
                            <p className="text-[17px] mb-4">Eftersom östrogen sjunker går hårsäckens stamceller in i dvala (telogen).</p>
                            <p className="text-[17px] mb-4">Redensyl väcker dem bokstavligen.</p>
                            <p className="text-[17px]">Det aktiverar två viktiga gener som startar en ny tillväxtfas.</p>
                        </div>

                        <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Genombrott #3: Aminexil stoppar kollagenförstelningen</h4>
                            <p className="text-[17px] mb-4">Detta var den saknade pusselbiten.</p>
                            <p className="text-[17px] mb-4">Under klimakteriet sjunker kollagenproduktionen.</p>
                            <p className="text-[17px] mb-4">Men kollagenet som finns kvar? Det blir styvt – en process som kallas perifollicular fibrosis.</p>
                            <p className="text-[17px] mb-3 font-bold">Tänk så här:</p>
                            <p className="text-[17px] mb-3">Kollagenet runt hårroten stelnar som betong.</p>
                            <p className="text-[17px] mb-3">Det kväver hårroten fysiskt.</p>
                            <p className="text-[17px] mb-4">Håret kan inte få näring. Det kan inte växa. Det ramlar för tidigt.</p>
                            <p className="text-[17px] mb-3 font-bold">Aminexil motverkar detta genom att:</p>
                            <p className="text-[17px] mb-2">Hämma enzymet lysyl hydroxylase (som gör kollagen styvt)</p>
                            <p className="text-[17px] mb-2">Förhindra att kollagen korsbinder och hårdnar runt hårsäcken</p>
                            <p className="text-[17px] mb-2">Öka blodflödet till hårbotten</p>
                            <p className="text-[17px] mb-4">Stärka bindningen mellan hårrot och hårbotten (mindre avfall)</p>
                            <p className="text-[17px] font-bold">Resultat: Håret sitter kvar längre och kan växa sig grovare.</p>
                        </div>

                        <div className="bg-white border-2 border-[#17242C] p-5 rounded-lg mb-8">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Genombrott #4: 2% Anagain™ förlänger tillväxtfasen</h4>
                            <p className="text-[17px] mb-4">Utvunnet från ekologiska ärtgroddar.</p>
                            <p className="text-[17px] mb-4">Kliniska studier på kvinnor efter menopaus visade imponerande resultat:</p>
                            <p className="text-[17px] mb-3 font-bold">Efter 3 månaders behandling:</p>
                            <p className="text-[17px] mb-2">Andelen hår i tillväxtfas (anagen) ökade med +7,9%</p>
                            <p className="text-[17px] mb-2">Andelen hår i vilofall (telogen) minskade från 20% till 12%</p>
                            <p className="text-[17px] mb-2">Tillväxtkoefficienten (anagen/telogen-ratio) ökade med +78%</p>
                            <p className="text-[17px] mb-4">95% av användarna märkte minskad håravfall</p>
                            <p className="text-[17px] mb-3 font-bold">Hur fungerar det?</p>
                            <p className="text-[17px] mb-4">Anagain ökar produktionen av två proteiner:</p>
                            <p className="text-[17px] mb-2">FGF7 (Fibroblast Growth Factor 7) – startar ny tillväxtfas</p>
                            <p className="text-[17px] mb-4">Noggin – blockerar signaler som stoppar hårtillväxt</p>
                            <p className="text-[17px] mb-4">Det betyder att håret stannar i tillväxtfas längre – från månader till år.</p>
                            <p className="text-[17px] font-bold">Fler hårstrån växer. Färre ramlar.</p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Jag hittade Lumina – och allt förändrades
                        </h3>

                        <img src="/lumina-discovery.jpg" alt="Lumina Discovery" className="w-full rounded-lg mb-8" />

                        <p className="text-[17px] mb-4">Mitt hjärta slog snabbare.</p>
                        <p className="text-[17px] mb-6">För första gången på 8 månader kände jag hopp.</p>

                        <p className="text-[17px] mb-4">Jag började googla produkter baserade på dessa ingredienser.</p>
                        <p className="text-[17px] mb-6">Och då hittade jag Lumina Hair Serum.</p>

                        <p className="text-[17px] mb-4">Ett svenskt företag. Baserat i Stockholm.</p>
                        <p className="text-[17px] mb-6">Grundat av en kvinna – Anna Bergström – som själv hade gått igenom samma mardröm som jag.</p>

                        <p className="text-[17px] mb-4 font-bold">Jag läste produktbeskrivningen:</p>
                        <p className="text-[17px] mb-2">✅ 3% Rosmarin (lika effektivt som Minoxidil)</p>
                        <p className="text-[17px] mb-2">✅ 3% Redensyl® (väcker sovande stamceller – 85% såg resultat)</p>
                        <p className="text-[17px] mb-2">✅ Aminexil (stoppar kollagenförstelning – avgörande efter klimakteriet)</p>
                        <p className="text-[17px] mb-6">✅ 2% Anagain™ (förlänger tillväxtfasen – bevisat på kvinnor efter menopaus)</p>

                        <p className="text-[17px] mb-4">Det var EXAKT de fyra ingredienserna från forskningen.</p>
                        <p className="text-[17px] mb-4">I RÄTT koncentrationer.</p>
                        <p className="text-[17px] mb-6">För EXAKT mitt problem.</p>

                        <p className="text-[17px] mb-4 font-bold">Men det bästa?</p>
                        <p className="text-[17px] mb-4">90 dagars pengarna-tillbaka-garanti.</p>
                        <p className="text-[17px] mb-6">Om det inte fungerade fick jag tillbaka pengarna. Hela beloppet. Inga krångel.</p>

                        <p className="text-[17px] mb-4">Jag hade ingenting att förlora.</p>
                        <p className="text-[17px] mb-4">Jag beställde 3 flaskor (90 dagars supply).</p>
                        <p className="text-[17px] mb-8">Och väntan började.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vecka 1-4: Ingenting. Och rädslan kom tillbaka.
                        </h3>

                        <p className="text-[17px] mb-4">Jag applicerade det varje kväll.</p>
                        <p className="text-[17px] mb-4">Jag masserade in det i hårbotten – särskilt vid tinningarna och hjässan.</p>
                        <p className="text-[17px] mb-4">Det luktade friskt. Inte kemiskt. Inte klibbigt.</p>
                        <p className="text-[17px] mb-6">Det kändes lätt.</p>

                        <p className="text-[17px] mb-4">Men efter 2 veckor... ingenting.</p>
                        <p className="text-[17px] mb-4">Efter 4 veckor... fortfarande ingenting.</p>
                        <p className="text-[17px] mb-6">Håret ramlade fortfarande.</p>

                        <p className="text-[17px] mb-4">Och jag började tvivla.</p>
                        <p className="text-[17px] mb-6 italic">"Det här är bara ännu en bluff," tänkte jag.</p>

                        <p className="text-[17px] mb-4">Men jag kom ihåg garantin.</p>
                        <p className="text-[17px] mb-4 italic">"Om du ger det 90 dagar och det inte fungerar får du pengarna tillbaka."</p>
                        <p className="text-[17px] mb-8 font-bold">Jag bestämde mig för att inte ge upp.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vecka 6: Håret slutade ramla
                        </h3>

                        <p className="text-[17px] mb-4">Det var en tisdagsmorgon.</p>
                        <p className="text-[17px] mb-4">Jag stod i duschen och väntade på att se håret i avloppet.</p>
                        <p className="text-[17px] mb-6">Men... det var mindre än vanligt. Mycket mindre.</p>

                        <p className="text-[17px] mb-4">Jag räknade.</p>
                        <p className="text-[17px] mb-4">Förut: 40-60 strån per dusch.</p>
                        <p className="text-[17px] mb-6">Nu: 12.</p>

                        <p className="text-[17px] mb-4">Jag trodde jag inbillade mig.</p>
                        <p className="text-[17px] mb-4">Men nästa dag: 15 strån.</p>
                        <p className="text-[17px] mb-4">Dagen efter: 10.</p>
                        <p className="text-[17px] mb-8 font-bold">Håret hade slutat ramla.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vecka 8: Babyhåret
                        </h3>

                        <p className="text-[17px] mb-4">Jag stod framför spegeln en söndag och lyfte mitt hår vid tinningarna.</p>
                        <p className="text-[17px] mb-6">Och där – där vikarna hade blivit bredare och bredare i 8 månader –</p>
                        <p className="text-[18px] mb-6 font-bold">Såg jag något jag inte sett på över ett år:</p>

                        <p className="text-[18px] mb-6 font-bold">Babyhår.</p>

                        <p className="text-[17px] mb-4">Små, korta, raka strån. Knappt 5 mm långa.</p>
                        <p className="text-[17px] mb-6">De stack rakt ut som små antenner.</p>

                        <p className="text-[17px] mb-4">Jag började gråta.</p>
                        <p className="text-[17px] mb-4">Inte av sorg. Utan av lättnad.</p>
                        <p className="text-[18px] mb-8 font-bold">Mina hårsäckar hade vaknat.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Vecka 12: Min man lade märke till det
                        </h3>

                        <p className="text-[17px] mb-4">Vi satt vid frukostbordet.</p>
                        <p className="text-[17px] mb-4">Min man tittade på mig och sa:</p>
                        <p className="text-[17px] mb-4 italic">"Har du färgat håret?"</p>
                        <p className="text-[17px] mb-4">"Nej," sa jag. "Varför?"</p>
                        <p className="text-[17px] mb-6 italic">"Det ser... tjockare ut."</p>

                        <p className="text-[17px] mb-4">Jag sprang till badrummet.</p>
                        <p className="text-[17px] mb-6 font-bold">Och han hade rätt.</p>

                        <p className="text-[17px] mb-4">Håret vid tinningarna var inte längre genomskinligt.</p>
                        <p className="text-[17px] mb-4">Benen var fylligare.</p>
                        <p className="text-[17px] mb-4">Och babyhåret – det hade vuxit till 1-2 cm.</p>
                        <p className="text-[17px] mb-4">Det började blandas in med resten av håret.</p>
                        <p className="text-[18px] mb-8 font-bold">Det funkade.</p>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Månad 4-6: Håret jag trodde var borta för evigt
                        </h3>

                        <p className="text-[17px] mb-4">I januari 2026 – 6 månader efter att jag började med Lumina – fick jag den där frågan igen:</p>
                        <p className="text-[17px] mb-6 italic">"Eva, har du gjort något med håret?"</p>

                        <p className="text-[17px] mb-4">Men den här gången var det inte min man.</p>
                        <p className="text-[17px] mb-6 font-bold">Det var min frisör.</p>

                        <p className="text-[17px] mb-4">Hon stod med klippverktyget i luften och stirrade.</p>
                        <p className="text-[17px] mb-6 italic">"Vad har du använt?" frågade hon.</p>

                        <p className="text-[17px] mb-4">Jag berättade. Lumina. 6 månader. Varje kväll.</p>
                        <p className="text-[17px] mb-4">Hon lyfte mitt hår vid tinningarna.</p>
                        <p className="text-[17px] mb-6 italic">"Det här är nytt hår," sa hon. "Det är inte bara tjockare. Det är MER hår."</p>

                        <p className="text-[17px] mb-4">Jag log.</p>
                        <p className="text-[18px] mb-10 font-bold">För första gången på över ett år log jag i frisörstolen.</p>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Varför Lumina fungerade när allt annat misslyckades
                        </h3>

                        <img src="/produkt-ingredienser.jpg" alt="Lumina Ingredienser" className="w-full rounded-lg mb-8" />

                        <p className="text-[17px] mb-4">Jag är inte forskare. Men jag förstår nu vad som hände.</p>
                        <p className="text-[17px] mb-8">Det finns fyra processer som måste hända för att hårsäckar efter klimakteriet ska vakna:</p>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Process #1: DHT måste blockeras</h4>
                            <p className="text-[17px] mb-4">DHT är den tysta mördaren.</p>
                            <p className="text-[17px] mb-4">Den kväver hårsäcken genom att binda sig till receptorer vid roten.</p>
                            <p className="text-[17px] mb-4">Resultatet? Hårsäcken krymper (miniaturisering). Håret blir tunnare och tunnare tills det slutar växa helt.</p>
                            <p className="text-[17px] mb-4 font-bold">3% Rosmarin blockerar DHT.</p>
                            <p className="text-[17px]">Det fungerar genom anti-inflammatoriska mekanismer och ökad cirkulation – utan hormonstörningar.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Process #2: Sovande stamceller måste väckas</h4>
                            <p className="text-[17px] mb-4">När östrogen sjunker går hårsäckens stamceller in i dvala.</p>
                            <p className="text-[17px] mb-4">De producerar inte nytt hår. De bara... väntar.</p>
                            <p className="text-[17px] mb-4 font-bold">3% Redensyl® väcker dem.</p>
                            <p className="text-[17px] mb-4">Det aktiverar generna FGF7 och noggin som startar en ny tillväxtcykel.</p>
                            <p className="text-[17px]">85% av användarna i studier såg förbättrad tillväxt.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Process #3: Kollagenförstelning måste stoppas</h4>
                            <p className="text-[17px] mb-4">Under klimakteriet stelnar kollagenet runt hårroten.</p>
                            <p className="text-[17px] mb-4">Detta kväver hårsäcken fysiskt – minskar blodflöde och näringstillförsel.</p>
                            <p className="text-[17px] mb-4 font-bold">Aminexil motverkar perifollicular fibrosis.</p>
                            <p className="text-[17px] mb-4">Det hämmar det enzym som gör kollagen styvt.</p>
                            <p className="text-[17px]">Hårsäcken kan andas igen. Håret sitter kvar längre och växer grovare.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Process #4: Tillväxtfasen måste förlängas</h4>
                            <p className="text-[17px] mb-4">Efter klimakteriet förkortas tillväxtfasen dramatiskt.</p>
                            <p className="text-[17px] mb-4">Håret växer i månader istället för år.</p>
                            <p className="text-[17px] mb-4">Det hinner inte bli långt eller grovt innan det ramlar.</p>
                            <p className="text-[17px] mb-4 font-bold">2% Anagain™ förlänger anagen-fasen.</p>
                            <p className="text-[17px] mb-3">Studier på kvinnor efter menopaus visade:</p>
                            <p className="text-[17px] mb-2">+78% ökning i tillväxtkoefficient</p>
                            <p className="text-[17px] mb-2">Fler hårstrån stannar i tillväxt längre</p>
                            <p className="text-[17px]">95% märkte minskad håravfall</p>
                        </div>

                        <p className="text-[18px] mb-4 font-bold">Tänk så här:</p>
                        <p className="text-[17px] mb-4">Lumina angriper problemet från FYRA håll samtidigt.</p>
                        <p className="text-[17px] mb-4">Inte bara ett. FYRA.</p>

                        <img src="/four-approach.jpg" alt="Fyra-stegs approach" className="w-full rounded-lg mb-8" />

                        <p className="text-[18px] mb-10 font-bold">Det är därför det fungerade när allt annat misslyckades.</p>

                        <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md mb-8">
                            <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                "Jag är 62. Jag trodde det var för sent. Men efter 10 veckor såg jag babyhår vid vikarna. Första gången på 4 år."
                            </p>
                            <p className="text-right font-bold text-[#17242C] text-[13px]">– Karin, 62, Malmö, Verifierad köpare</p>
                        </div>

                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Men det finns en hake
                        </h3>

                        <p className="text-[17px] mb-4">Lumina är inte magi.</p>
                        <p className="text-[17px] mb-4">Det fungerar inte på 24 timmar.</p>
                        <p className="text-[17px] mb-8">Det finns inget "instant resultat".</p>
                        <p className="text-[18px] mb-6 font-bold">Här är vad du måste veta:</p>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">⏰ Det tar tid – och det är okej</h4>
                            <p className="text-[17px] mb-3"><strong>Vecka 1-4:</strong> Ingenting synligt. Men under ytan: Redensyl väcker stamceller, Aminexil mjukar upp kollagen.</p>
                            <p className="text-[17px] mb-3"><strong>Vecka 6-8:</strong> Håravfallet minskar dramatiskt. Rosmarin ökar cirkulationen.</p>
                            <p className="text-[17px] mb-3"><strong>Vecka 8-12:</strong> Babyhår börjar synas. Först vid tinningarna, sen vid hjässan.</p>
                            <p className="text-[17px] mb-4"><strong>Månad 4-6:</strong> Anagain förlänger tillväxtfasen. Babyhåret växer till. Densiteten ökar.</p>
                            <p className="text-[17px] mb-4">Du måste ge dina hårsäckar tid.</p>
                            <p className="text-[17px] mb-4">De har sovit i månader – eller år.</p>
                            <p className="text-[17px] mb-4">De vaknar inte över en natt.</p>
                            <p className="text-[17px] font-bold">Men om du är tålmodig? De vaknar.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-l-4 border-[#F4BE19] p-6 rounded-r-lg my-8">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">📅 Du måste använda det dagligen</h4>
                            <p className="text-[17px] mb-4">Jag applicerar det varje kväll. Utan undantag.</p>
                            <p className="text-[17px] mb-4">Jag masserar in det i hårbotten i 2 minuter (det ökar absorptionen).</p>
                            <p className="text-[17px] mb-4">Jag fokuserar på problemområden: tinningar, hjässa, bena.</p>
                            <p className="text-[17px]">Om du använder det oregelbundet kommer resultaten bli oregelbundna.</p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">🚫 Det fungerar inte om hårsäckar är permanent döda</h4>
                            <p className="text-[17px] mb-4">Om du har haft total skalighet i 10+ år kan hårsäckarna vara borta för evigt.</p>
                            <p className="text-[17px] mb-3">Men om du:</p>
                            <p className="text-[17px] mb-2">Fortfarande har ludd eller tunnhår på problemområden</p>
                            <p className="text-[17px] mb-2">Har haft håravfall i mindre än 5 år</p>
                            <p className="text-[17px] mb-4">Kan se hårsäckar (små porer) i hårbotten</p>
                            <p className="text-[17px] font-bold">Då finns hårsäckarna kvar. Och då kan Lumina väcka dem.</p>
                        </div>

                        <div className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md mb-10">
                            <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">
                                "Läkaren sa 'bara stress'. Men det var inte stress. Det var klimakteriet. Lumina var den enda som faktiskt förklarade VARFÖR."
                            </p>
                            <p className="text-right font-bold text-[#17242C] text-[13px]">– Birgitta, 58, Uppsala, Verifierad köpare</p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Så vad ska du göra nu?
                        </h3>

                        <p className="text-[17px] mb-8">Om du har läst hela vägen hit har du två val:</p>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Val #1: Göra ingenting</h4>
                            <p className="text-[17px] mb-3">Fortsätt hoppas att det ordnar sig av sig självt.</p>
                            <p className="text-[17px] mb-3">Fortsätt smygtitta på foton från för 2 år sedan när håret var fylligt.</p>
                            <p className="text-[17px] mb-4">Fortsätt räkna hårstrån i duschen.</p>
                            <p className="text-[17px] mb-4">Om 6 månader kommer hårsäckarna ha glidit djupare in i dvala.</p>
                            <p className="text-[17px] font-bold">Och då tar det ännu längre tid att väcka dem.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-2 border-[#F4BE19] p-6 rounded-lg mb-10">
                            <h4 className="text-[20px] font-bold mb-3 text-[#17242C]">Val #2: Ge dina hårsäckar en chans</h4>
                            <p className="text-[17px] mb-4">Prova Lumina i 90 dagar.</p>
                            <p className="text-[17px] mb-4">Om du inte ser babyhår vid vecka 12 får du pengarna tillbaka.</p>
                            <p className="text-[17px] mb-4">Du har ingenting att förlora.</p>
                            <p className="text-[17px] font-bold">Förutom de hårstrån du fortsätter förlora om du inte gör något.</p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-12 mb-6 text-[#17242C] text-center" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            📦 Välj ditt paket:
                        </h3>

                        <div className="space-y-6 mb-10">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                                <h4 className="text-[20px] font-bold mb-2 text-[#17242C]">KÖP 1 - 50% RABATT</h4>

                                <img src="/package-1-month.jpg" alt="1 månads paket" className="w-full rounded-lg mb-4" />

                                <p className="text-[16px] text-gray-600 mb-1">Startpaket</p>
                                <p className="text-[18px] font-bold text-[#DC2626] mb-2"><s className="text-gray-400">798 kr</s> → 399kr</p>
                                <p className="text-[16px] text-gray-600 mb-3">1 flaska (30 dagars supply)</p>
                                <p className="text-[15px] mb-2"><strong>Perfekt för:</strong> "Jag vill testa först"</p>
                                <p className="text-[15px] mb-3"><strong>Men:</strong> Du behöver minst 90 dagar för att se babyhår</p>
                                <p className="text-[14px] text-gray-500 mb-4">90-dagars pengarna-tillbaka-garanti</p>
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                    <p className="text-[14px] italic">💭 <strong>Eva's kommentar:</strong> "Om du väljer detta, kom ihåg: Vecka 1-4 såg jag ingenting. Babyhår kom först vecka 8. Ge det tid."</p>
                                </div>
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full mt-4 bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[16px] py-3 rounded-lg shadow-md transition-all"
                                >
                                    Klicka här för få rabatt →
                                </button>
                            </div>

                            <div className="bg-white border-4 border-[#F4BE19] p-6 rounded-lg relative">
                                <div className="absolute -top-3 right-6 bg-[#DC2626] text-white text-[12px] font-bold px-4 py-1 rounded-full">🔥 MEST POPULÄR</div>
                                <h4 className="text-[20px] font-bold mb-2 text-[#17242C]">✅ KÖP 3 BETALA FÖR 2 - SPARA 67%</h4>

                                <img src="/package-3-month.jpg" alt="3 månaders paket" className="w-full rounded-lg mb-4" />

                                <p className="text-[16px] text-gray-600 mb-1">Behandlingskur</p>
                                <p className="text-[18px] font-bold text-[#DC2626] mb-2"><s className="text-gray-400">2394 kr</s> → 798kr</p>
                                <p className="text-[16px] text-gray-600 mb-3">3 flaskor (90 dagars supply)</p>
                                <p className="text-[16px] font-bold text-green-600 mb-3">SPARA 67%! (köp 3, betala för 2)</p>
                                <p className="text-[15px] mb-3"><strong>Perfekt för:</strong> Den tid det tar att väcka sovande hårsäckar</p>
                                <p className="text-[14px] text-gray-500 mb-4">90-dagars pengarna-tillbaka-garanti</p>
                                <div className="bg-[#FFF9EA] p-4 rounded-lg border-l-4 border-[#F4BE19]">
                                    <p className="text-[14px] italic">💭 <strong>Eva's kommentar:</strong> "Detta är exakt vad jag gjorde. 90 dagar = den biologiska cykeln för att väcka dormanta hårsäckar. Om jag hade köpt 1 månad hade jag gett upp vecka 4."</p>
                                </div>
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full mt-4 bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[16px] py-3 rounded-lg shadow-md transition-all"
                                >
                                    Klicka här för få rabatt →
                                </button>
                            </div>

                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg relative">
                                <div className="absolute -top-3 right-6 bg-[#0B2240] text-white text-[12px] font-bold px-4 py-1 rounded-full">💎 MEST VÄRDE</div>
                                <h4 className="text-[20px] font-bold mb-2 text-[#17242C]">💎 KÖP 3 FÅ 3 EXTRA - SPARA 79%</h4>

                                <img src="/package-6-month.jpg" alt="6 månaders paket" className="w-full rounded-lg mb-4" />

                                <p className="text-[16px] text-gray-600 mb-1">Storpack</p>
                                <p className="text-[18px] font-bold text-[#DC2626] mb-2"><s className="text-gray-400">4788 kr</s> → 999kr</p>
                                <p className="text-[16px] text-gray-600 mb-3">6 flaskor (180 dagars supply)</p>
                                <p className="text-[16px] font-bold text-green-600 mb-3">SPARA 79%! (köp 3 få 3 extra)</p>
                                <p className="text-[15px] mb-3"><strong>Perfekt för:</strong> Långsiktig återväxt + förebygga framtida avfall</p>
                                <p className="text-[14px] text-gray-500 mb-4">90-dagars pengarna-tillbaka-garanti</p>
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                                    <p className="text-[14px] italic">💭 <strong>Eva's kommentar:</strong> "Många ser babyhår vecka 8-12. Men för att verkligen ÅTERSTÄLLA densiteten tar det 4-6 månader. Om du har råd, ta detta."</p>
                                </div>
                                <button
                                    onClick={scrollToOffer}
                                    className="w-full mt-4 bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[16px] py-3 rounded-lg shadow-md transition-all"
                                >
                                    Klicka här för få rabatt →
                                </button>
                            </div>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            Låt oss sätta det i perspektiv:
                        </h3>

                        <p className="text-[18px] mb-4 font-bold">3-månaders paketet (rekommenderat) = 798kr</p>
                        <p className="text-[17px] mb-8">Det är 8,80kr per dag i 90 dagar.</p>

                        <p className="text-[17px] mb-3 font-bold">Mindre än:</p>
                        <p className="text-[17px] mb-2">☕ En kaffe på Espresso House (45kr)</p>
                        <p className="text-[17px] mb-2">🚌 En bussbiljett i Stockholm (39kr)</p>
                        <p className="text-[17px] mb-6">🍫 En Marabou-choklad (25kr)</p>

                        <p className="text-[17px] mb-3 font-bold">Jämfört med vad du redan slösat:</p>
                        <p className="text-[17px] mb-2">❌ Priorin: 4,800kr på 8 månader (fungerade inte)</p>
                        <p className="text-[17px] mb-2">❌ Minoxidil: 1,200kr/månad (livslång användning, dread shed)</p>
                        <p className="text-[17px] mb-6">❌ Frisörbesök: 800kr/månad för volymprodukter (tillfällig fix)</p>

                        <p className="text-[18px] mb-8 font-bold">Lumina: 798kr. En gång. 90 dagar. Risk-fritt.</p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                            <p className="text-[18px] mb-4 font-bold">Vad kostar det att INTE köpa?</p>
                            <p className="text-[17px] mb-3">6 månader till av att:</p>
                            <p className="text-[17px] mb-2">Räkna hårstrån i duschen</p>
                            <p className="text-[17px] mb-2">Undvika speglar</p>
                            <p className="text-[17px] mb-2">Säga nej till spontana middagar</p>
                            <p className="text-[17px] mb-4">Se dina vikar bli bredare varje vecka</p>
                            <p className="text-[17px] font-bold">Kan du sätta ett pris på det?</p>
                        </div>

                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                            💰 Prisberäkning:
                        </h3>

                        <div className="overflow-x-auto mb-10">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-3 text-left">Paket</th>
                                        <th className="border border-gray-300 p-3 text-left">Ordinarie pris</th>
                                        <th className="border border-gray-300 p-3 text-left">Ditt pris</th>
                                        <th className="border border-gray-300 p-3 text-left">Besparing</th>
                                        <th className="border border-gray-300 p-3 text-left">Per dag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-3">1 månad</td>
                                        <td className="border border-gray-300 p-3">798kr</td>
                                        <td className="border border-gray-300 p-3 font-bold">399kr</td>
                                        <td className="border border-gray-300 p-3">Spara 50%</td>
                                        <td className="border border-gray-300 p-3">13kr</td>
                                    </tr>
                                    <tr className="bg-yellow-50">
                                        <td className="border border-gray-300 p-3 font-bold">3 månader ✅</td>
                                        <td className="border border-gray-300 p-3"><s>2,394kr</s></td>
                                        <td className="border border-gray-300 p-3 font-bold text-[#DC2626]">798kr</td>
                                        <td className="border border-gray-300 p-3 font-bold text-green-600">Spara 67%</td>
                                        <td className="border border-gray-300 p-3 font-bold">8,80kr</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-bold">6 månader 💎</td>
                                        <td className="border border-gray-300 p-3"><s>4,788kr</s></td>
                                        <td className="border border-gray-300 p-3 font-bold text-[#DC2626]">999kr</td>
                                        <td className="border border-gray-300 p-3 font-bold text-green-600">Spara 79%</td>
                                        <td className="border border-gray-300 p-3 font-bold">5,50kr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg my-10">
                            <h3 className="text-[24px] font-bold mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                ⏰ Varning: Detta erbjudande går ut om 48 timmar
                            </h3>
                            <p className="text-[17px] mb-4 font-bold">Varför?</p>
                            <p className="text-[17px] mb-6">Vi har begränsat lager. Förra månaden sålde vi slut på 21 dagar.</p>
                            <p className="text-[17px] mb-3">Om du väntar kan priset gå tillbaka till ordinarie:</p>
                            <p className="text-[17px] mb-2">2,394kr för 3 månader (istället för 798kr med 67% rabatt)</p>
                            <p className="text-[17px] mb-6">4,788kr för 6 månader (istället för 999kr med 79% rabatt)</p>
                            <p className="text-[17px] mb-4 font-bold">Plus: Varje dag du väntar = en dag dina hårsäckar glider djupare in i dvala.</p>
                            <p className="text-[17px] mb-4">Om du börjar idag kan du se babyhår vecka 8-12.</p>
                            <p className="text-[17px] mb-4">Om du väntar 3 månader? Då startar klockan 3 månader senare.</p>
                            <p className="text-[18px] font-bold">Tiden går inte tillbaka. Men dina hårsäckar kan.</p>
                        </div>

                        <div className="bg-[#FFF9EA] border-2 border-[#F4BE19] p-6 rounded-lg my-10">
                            <h3 className="text-[24px] font-bold mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                🛡️ Ingen risk. 90 dagar. Pengarna tillbaka.
                            </h3>
                            <p className="text-[17px] mb-4 font-bold">Så här funkar det:</p>
                            <p className="text-[17px] mb-2">✅ Välj ditt paket (vi rekommenderar 3-månaders)</p>
                            <p className="text-[17px] mb-2">✅ Använd det dagligen i 90 dagar</p>
                            <p className="text-[17px] mb-2">✅ Om du inte ser babyhår vid vecka 12 – maila oss</p>
                            <p className="text-[17px] mb-4">✅ Vi betalar tillbaka. Hela beloppet. Inga frågor.</p>
                            <p className="text-[17px] mb-6">Du behåller till och med flaskorna.</p>

                            <p className="text-[17px] mb-4 font-bold">Varför?</p>
                            <p className="text-[17px] mb-4">För att jag vet hur det känns att ha slösat 4,800kr på Priorin som inte fungerade.</p>
                            <p className="text-[17px] mb-6">Jag vill inte att du ska känna det igen.</p>

                            <p className="text-[17px] mb-4 font-bold">Enda kravet: Du måste använda det dagligen i 90 dagar.</p>
                            <p className="text-[17px] mb-4">Om du bara testar det 2 veckor och ger upp (som jag nästan gjorde vecka 4), då kan vi inte hjälpa dig.</p>
                            <p className="text-[17px] mb-4">Men om du ger dina hårsäckar 90 dagar att vakna – och det inte fungerar?</p>
                            <p className="text-[18px] font-bold">Pengarna tillbaka. Inga krångel.</p>
                        </div>

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

                    {/* P.S. Sections */}
                    <div className="mt-12 space-y-6">
                        <p className="text-[15px] text-gray-700 leading-relaxed">
                            <strong>P.S.</strong> Kom ihåg – dina hårsäckar är inte döda. De sover. Men varje dag du väntar glider de djupare in i dvala. 798kr för 3 månader = 8,80kr/dag. Mindre än en kaffe. Risk-fritt i 90 dagar. Om du inte ser babyhår vid vecka 12, får du pengarna tillbaka. <button onClick={scrollToOffer} className="text-[#0B2240] underline font-bold hover:text-[#051628]">Kolla tillgänglighet här →</button>
                        </p>

                        <p className="text-[15px] text-gray-700 leading-relaxed">
                            <strong>P.P.S.</strong> Minns du vad läkaren sa? "Det är normalt vid din ålder." Vad om det INTE behöver vara normalt? 999kr för 6 månader = 5,50kr/dag. Det är priset för att slippa räkna hårstrån i duschen varje morgon. <button onClick={scrollToOffer} className="text-[#0B2240] underline font-bold hover:text-[#051628]">Börja här →</button>
                        </p>
                    </div>

                </div>
            </article>

            {/* Footer */}
            <div className="max-w-[780px] mx-auto p-8 pb-24 text-center text-[11px] text-[#8A8D91] border-t bg-white">
                <p>&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="mt-2">Detta är ett sponsrat innehåll. Lumina Hair Serum är ett kosttillskott och ersätter inte medicinsk behandling. Resultaten kan variera mellan individer. Konsultera alltid läkare vid medicinska frågor.</p>
            </div>
        </div>
    );
};

export default Women55PlusV5;

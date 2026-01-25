import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ThumbsUp, ShieldCheck, Truck, Check } from 'lucide-react';

const Women55Plus: React.FC = () => {
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

    const reviews = [
        {
            name: "Gunnel Johansson",
            time: "42 min",
            likes: 5,
            text: "Har någon faktiskt provat detta? Är det verkligen lika bra som de säger?"
        },
        {
            name: "Marianne Sundberg",
            time: "12 min",
            likes: 14,
            isReply: true,
            text: "Ja Gunnel! Jag var också skeptisk men beställde för en månad sedan. Det fungerar faktiskt. Det är första gången jag hittar något som inte bara är 'ormolja'."
        },
        {
            name: "Maj-Britt Andersson",
            time: "16 min",
            likes: 8,
            text: "Lumina Hair Serum fungerar verkligen! Jag brukade spendera 699 kr månaden på Priorin i flera år. Detta ger identiska resultat! Mitt hår ser bättre ut än det har gjort på ett decennium."
        },
        {
            name: "Inger Klein",
            time: "2 tim",
            likes: 3,
            text: "Jag köpte min till fullt pris förra månaden, och nu är det 50% rabatt? Det är inte rättvist!"
        },

        {
            name: "Berit Nilsson",
            time: "6 tim",
            likes: 6,
            text: "Jag har använt Lumina Hair Serum i 2 månader nu. Det är verkligen fantastiskt hur mycket yngre mitt hår ser ut. Inget mer håravfall i duschen, och mitt hår känns tjockare när jag sätter det upp!"
        },
        {
            name: "Annika Karlsson",
            time: "11 tim",
            likes: 4,
            text: "Beställde precis tre – en till mig, en till min syster och en till min bästa vän. Vi har alla klagat på vårt tunna hår i åratal efter klimakteriet!"
        },
        {
            name: "Gunilla Pettersson",
            time: "15 tim",
            likes: 2,
            text: "Märkte någon en skillnad i hur era andra hårvårdsprodukter fungerade efter att ha använt detta?"
        },
        {
            name: "Margareta Eriksson",
            time: "2 tim",
            likes: 5,
            isReply: true,
            text: "Gunilla, JA! Funkar jättebra för mig."
        },
        {
            name: "Solveig Lundgren",
            time: "18 tim",
            likes: 4,
            text: "Bästa produkten jag någonsin har köpt. Min man märkte faktiskt att mitt hår såg bättre ut, och han märker aldrig något!"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#212529]" style={{ fontFamily: '"Open Sans", sans-serif' }}>

            {/* 1. Update Banner - Matches Screenshot Exactly */}
            <div className="bg-[#FFF9DA] border border-[#FBE395] rounded-md mx-4 md:mx-0 mt-4 px-3 py-2 flex gap-2 items-start">
                <div className="bg-[#E22718] rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 mt-[2px]">
                    <span className="text-white font-bold text-[11px]">!</span>
                </div>
                <div className="text-[#212529] text-[12px] leading-[1.35] font-sans text-left">
                    <span className="text-[#D02020] font-bold uppercase tracking-tight mr-1">Uppdatering:</span>
                    <span className="font-medium">Lumina Hair Serum SÄLJER UT snabbare än förväntat! Lås in din beställning NU för att få 50% RABATT + FRI FRAKT.</span>
                </div>
            </div>

            <article className="max-w-[780px] mx-auto bg-white min-h-screen">
                <div className="p-4 md:px-0 md:py-6">

                    {/* 2. Headline - Merged & Smaller to match reference */}
                    <h1 className="text-[22px] md:text-[32px] font-[900] leading-[1.15] mb-2 text-[#17242C] tracking-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                        Varför Svenska Kvinnor 55+ Slutar Slösa 8,000 kr/År På Priorin & Minoxidil För Detta Serum... <span className="block mt-1 text-[20px] md:text-[29px]">"Det Här Är Mitt Sista Försök – Och Det Fungerade"</span>
                    </h1>

                    {/* 3. Subheadline */}
                    <div className="text-[14px] md:text-[15px] text-[#212529] mb-3 leading-snug font-sans flex flex-wrap gap-1">
                        <span className="font-bold">Begränsad Tid:</span>
                        <span className="text-[#4F5256]">50% Rabatt på Lumina Hair Serum + 90 Dagars Garanti</span>
                    </div>

                    {/* 4. Ratings Row */}
                    <div className="flex items-center gap-1.5 mb-4 text-sm">
                        <div className="flex gap-[1px]">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-[14px] h-[14px] text-[#FFB800] fill-current" />
                            ))}
                        </div>
                        <span className="font-bold text-[#17242C] text-[13px] ml-1">"Utmärkt"</span>
                        <div className="h-3 w-[1px] bg-gray-300 mx-1.5"></div>
                        <span className="text-[#4F5256] text-[13px]">12,347 recensioner</span>
                    </div>

                    {/* 5. Author Byline */}
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src="/marieprofile.png" alt="Karin Lindström" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center text-[12px] leading-tight">
                            <span className="font-bold text-[#17242C] block">Av Karin Lindström</span>
                            <span className="text-[#6C757D] text-[11px] mt-0.5">Senast Uppdaterad: 1 Januari 2026</span>
                        </div>
                    </div>

                    {/* Main Feature Images - Stacked Vertically */}
                    <div className="flex flex-col gap-6 mb-8 mt-[-10px]">
                        <div className="flex flex-col shadow-sm">
                            <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden">
                                <img src="/karin-67.jpg" alt="Karin, 67 år" className="w-full h-auto block" />
                            </div>
                            <div className="bg-[#17242C] text-white text-center py-3 rounded-b-lg">
                                <span className="font-bold text-lg block">Karin, 67 år</span>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-sm">
                            <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden">
                                <img src="/malin-56.jpg" alt="Malin, 56 år" className="w-full h-auto block" />
                            </div>
                            <div className="bg-[#17242C] text-white text-center py-3 rounded-b-lg">
                                <span className="font-bold text-lg block">Malin, 56 år</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Purple Summary Box - Matches Reference */}
                    <div className="bg-[#EEEBFC] p-5 rounded-[2px] mb-8 border border-[#DCD6F7]">
                        <p className="font-bold text-[#5E54A4] uppercase text-xs mb-2 tracking-wider">SAMMANFATTNING:</p>
                        <p className="text-[16px] leading-[1.6] text-[#212529]">
                            Se varför detta professionella hårserum säljer slut överallt och ersätter dyra apoteksbehandlingar för tusentals kvinnor...
                        </p>
                    </div>

                    {/* 5. Main Content - Body Text */}
                    <div className="prose prose-lg max-w-none text-[#212529] leading-[1.8]">

                        {/* Shocking Fact - Just Bold Text */}
                        <p className="font-sans text-[17px] mb-6">
                            <span className="font-bold">Chockerande faktum</span> – svenska kvinnor över 55 spenderar i genomsnitt <span className="font-bold">8,000+ kr årligen</span> på Priorin-kapslar, Minoxidil och hårvårdssystem som Maria Nila eller Nioxin för att stoppa håravfall... men ser <span className="italic font-bold">inga resultat!</span>
                        </p>

                        <p className="mb-6 text-[17px]">
                            Men, vi har otroliga nyheter för dig.
                        </p>

                        <p className="mb-8 text-[17px]">
                            Hårvårdsexperter bekräftar att en ny serum-teknologi med "sovande hårsäck-aktivering" kan leverera synliga resultat som överträffar dyra tillskott och läkemedel – men apotek och vårdcentraler tar fortfarande 800-1,200 kr/månad för behandlingar som känns som rent rån.
                        </p>

                        <p className="mb-8 text-[17px]">
                            Men det finns ett sätt att kringgå de dyra apoteken och återfå ditt tjocka, friska hår! I ett år där svenska kvinnor över 55 prioriterar värdighet över uppgivning, framträder ett 798 kr serum som det viktigaste håravfallsdurchbrotten för 2026.
                        </p>

                        <div className="mb-8">
                            <img src="/kvinna-applicerar-1.jpg" alt="Applicering av Lumina Hair Serum" className="w-full h-auto rounded-lg" />
                        </div>

                        {/* What Is It Section */}
                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Vad Är Det?</h3>

                        <p className="mb-6 text-[17px]">
                            Möt <span className="font-bold">Lumina Hair Serum</span> – det smartaste, mest effektiva och mest betrodda hemmabehandlings-serumet på den svenska marknaden för kvinnor 55+ som kämpar med håravfall efter klimakteriet.
                        </p>

                        <p className="mb-6 text-[17px]">
                            Företaget bakom detta revolutionerande serum arbetade med ledande tricologer för att skapa en prisvärd formula fullpackad med fyra kliniskt bevisade aktiva ingredienser som adresserar den verkliga orsaken: <span className="italic">sovande hårsäckar och stelnande kollagen runt hårrötterna.</span>
                        </p>

                        <p className="mb-8 text-[17px]">
                            <span className="font-bold">Resultatet:</span> Ett kompakt roll-on serum med patenterad titanium-kula som masserar hårbotten medan den applicerar 3% farmaceutisk Rosmarin, Redensyl®, Aminexil och Anagain™.
                        </p>

                        <div className="mb-8">
                            <img src="/produkt-flaska-sten.jpg" alt="Lumina Hair Serum Flaska" className="w-full h-auto rounded-lg" />
                        </div>

                        <p className="font-bold text-center text-lg my-8 text-[#17242C]">
                            Den är helt portabel, kräver inga läkarbesök och har noll pågående kostnader efter köpet.
                        </p>

                        {/* No Appointments Section */}
                        <h3 className="text-[24px] font-bold mt-10 mb-4 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Inga Dyra Tillskott, Inga Livslånga Beroenden</h3>

                        <div className="border-l-4 border-gray-200 pl-6 italic text-gray-600 text-[18px] my-6">
                            "Det är inte bara vitaminer. Det är hårbotten-aktivering."
                        </div>

                        <p className="mb-6 text-[17px]">
                            Lumina Hair Serum löser de två största problemen med traditionella behandlingar: <span className="font-bold">dyra återkommande kostnader</span> och <span className="font-bold">krånglet med piller och skum</span>.
                        </p>

                        {/* 3 Easy Steps */}
                        <div className="my-12">
                            <h3 className="text-[22px] font-bold text-center mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                                Börja Använda Lumina i 3 Enkla Steg
                            </h3>

                            <div className="space-y-6">
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#17242C] text-white flex items-center justify-center font-bold text-lg">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#17242C]">Applicera på ren, torr hårbotten</h4>
                                        <p className="text-gray-700 mt-1">Använd roll-on applikatorn direkt på hårbotten där håret är tunnast.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#17242C] text-white flex items-center justify-center font-bold text-lg">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#17242C]">Massera försiktigt</h4>
                                        <p className="text-gray-700 mt-1">Titanium-kulan stimulerar blodcirkulationen medan den applicerar formulan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#17242C] text-white flex items-center justify-center font-bold text-lg">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#17242C]">Använd 2 gånger dagligen</h4>
                                        <p className="text-gray-700 mt-1">Morgon och kväll. Formulan torkar snabbt och stör inte styling.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <img src="/kvinna-applicerar-3.jpg" alt="Applicering Steg 3" className="w-full h-auto rounded-lg" />
                            </div>
                        </div>

                        {/* Key Features List */}
                        <div className="bg-gray-50 p-6 rounded-lg my-8">
                            <h3 className="text-[18px] font-bold mb-4 uppercase tracking-wide text-[#17242C]">NYCKELFUNKTIONER</h3>
                            <ul className="space-y-4">
                                {[
                                    "Patenterad titanium-kula för ökad absorption",
                                    "3% Farmaceutisk Rosmarin – kliniskt bevisad effekt",
                                    "Redensyl® 3% – väcker sovande stamceller",
                                    "Synliga resultat inom 6-12 veckor",
                                    "Portabel och diskret design"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="text-[#212529] font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* FAQ Section */}
                        <div className="my-12">
                            <h3 className="text-[24px] font-bold mt-10 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Vanliga Frågor</h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-[18px] text-[#17242C] mb-2">Kräver Lumina Hair Serum professionell träning?</h4>
                                    <p className="text-[#212529] text-[17px] leading-relaxed">
                                        Nej. Det fungerar säkert direkt ur förpackningen med idiotsäker design och uppnår professionella resultat på 60 sekunder per applicering.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[18px] text-[#17242C] mb-2">Kommer mitt hår att växa tillbaka tjockare om jag slutar använda det?</h4>
                                    <p className="text-[#212529] text-[17px] leading-relaxed">
                                        Till skillnad från Minoxidil (som kräver livslång användning), arbetar Lumina för att återställa naturlig hårsäcks-funktion. Många användare minskar till underhållsdos (3-4 gånger/vecka) efter 6 månader. Du är inte fångad för livet.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[18px] text-[#17242C] mb-2">Hur lång tid tar frakten?</h4>
                                    <p className="text-[#212529] text-[17px] leading-relaxed">
                                        1-2 dagar för bearbetning, sedan 3-5 arbetsdagar för leverans inom Sverige.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials - Purple Box Style */}
                        <h3 className="text-[24px] font-bold mt-10 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Kundrecensioner</h3>
                        <div className="space-y-4 mb-12">
                            {[
                                { text: "Jag slösade massor förra året på Priorin. Tre burkar kvar hemma som inte gjorde någonting. Lumina kostade en bråkdel och jag såg skillnad på 6 veckor. Äntligen.", author: "Elisabet M., 61, Malmö" },
                                { text: "Vänta, så billigt? Jag har spenderat över tiotusen på Minoxidil och Nioxin sedan klimakteriet. Var köper man detta?", author: "Birgitta L., 58, Göteborg" },
                                { text: "3 månader in nu. Frisören frågade vad jag gjort. Jag visade henne flaskan. Hon sa 'fortsätt med den.' Första gången någon faktiskt märkte att mitt hår ser BÄTTRE ut, inte värre.", author: "Lena R., 59, Linköping" },
                                { text: "Min hårbotten är känslig efter alla år av färgning. Lumina irriterade inte alls. Inget kliande, ingen rodnad. Och det fungerar. Chockad, faktiskt.", author: "Ingrid D., 56, Uppsala" },
                                { text: "Jag tappade hår i drivor varje dusch i två år. Nu ser jag babyhår vid tinningarna. Jag gråter inte längre när jag tvättar håret. Det är allt jag ville.", author: "Annika W., 62, Örebro" },
                                { text: "Barnbarnet frågade 'varför har mormor så lite hår?' i somras. Det bröt mitt hjärta. Nu ser jag fram emot julfotona för första gången på fem år.", author: "Gunilla H., 64, Helsingborg" },
                                { text: "Sluta köp Priorin. Jag tog det i 18 månader. ARTON. Ingenting hände. Lumina gav mig resultat på två månader. Jag är förbannad att jag slösade så mycket tid.", author: "Margareta T., 60, Västerås" },
                                { text: "8 veckor in. Benan (hårets mittbena) är smalare. Jag kan faktiskt se det. Inte enormt, men synligt. För första gången på åratal ser jag framsteg, inte regression.", author: "Eva S., 57, Jönköping" },
                                { text: "Var var detta när jag spenderade tusentals på dermatologen som bara sa 'det är normalt vid din ålder'? Jag är 58, inte 88.", author: "Inger P., 58, Karlstad" },
                                { text: "Beställde 6 flaskor direkt – en till mig, en till min syster, en till mamma. Vi håller på att bilda en Lumina-klubb i familjen. Första produkten som faktiskt gör något mot klimakteriehåret.", author: "Berit F., 55, Lund" },
                                { text: "Jag köpte 6-månaders paketet efter att ha läst recensionerna. Bästa beslutet. Nu behöver jag inte tänka på att beställa igen om två månader. Håret blir bättre varje vecka.", author: "Astrid N., 62, Karlskrona" },
                                { text: "Min granne frågade vad jag använt. Jag sa 'Lumina.' Hon beställde samma dag. Nu använder vi båda det och jämför framsteg varje vecka. Det är som en liten support-grupp.", author: "Kristina Å., 59, Borås" },
                                { text: "Köpte behandlingskuren (3 flaskor). Tänkte 'om det här inte fungerar ger jag upp.' Jag är på flaska två nu och ser nya strån växa. Kommer beställa mer innan jag tar slut.", author: "Ulla-Britt H., 61, Gävle" },
                                { text: "Efter första flaskan tänkte jag 'okej, mindre håravfall.' Efter andra flaskan tänkte jag 'fan, det växer tillbaka.' Beställde storpacket direkt. Inte risker med att ta slut.", author: "Gunvor S., 63, Växjö" },
                                { text: "Jag tog med mig extra flaskor på semestern. Skulle inte chansa på att missa en dag. Det har blivit som att borsta tänderna – inte förhandlingsbart längre.", author: "Siv E., 58, Falun" },
                                { text: "Köpte storpacket för att det var bäst värde. Tänkte 'om det funkar vill jag inte ta slut.' Glad att jag gjorde det. Använder det morgon och kväll nu i 4 månader.", author: "Rut B., 64, Östersund" }
                            ].map((testimonial, i) => (
                                <div key={i} className="bg-[#EFEDFD] border-l-4 border-[#CCCCCC] p-4 rounded-r-md">
                                    <p className="italic text-[#17242C] text-[16px] mb-2 font-medium">"{testimonial.text}"</p>
                                    <p className="text-right font-bold text-[#17242C] text-[13px]">– {testimonial.author}</p>
                                </div>
                            ))}
                        </div>

                        {/* FINAL CTA BUTTON */}
                        <div className="mb-16">
                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] md:text-[24px] py-6 px-4 rounded shadow-lg transition-transform transform hover:scale-[1.02] uppercase tracking-wide leading-tight"
                            >
                                👉 KLICKA HÄR FÖR ATT FÅ 50% RABATT PÅ LUMINA INNAN DET SÄLJER SLUT
                            </button>
                        </div>

                        <div className="mb-12">
                            <img src="/fore-efter-2.jpg" alt="Före och Efter Resultat" className="w-full h-auto rounded-lg" />
                        </div>

                        {/* Pricing Table - Clean & High Contrast */}
                        <h3 className="text-[24px] font-bold mt-12 mb-6 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Prissättning</h3>
                        {/* Pricing Text Comparison */}
                        <div className="mb-8 text-[#212529] space-y-4 text-[17px]">
                            <p className="font-bold">Traditionella håravfallsbehandlingar kostar:</p>
                            <ul className="space-y-2 list-disc pl-5">
                                <li><strong>Priorin:</strong> 699 kr/månad = 8,388 kr/år</li>
                                <li><strong>Minoxidil (Apotek):</strong> 450-600 kr/månad = 5,400-7,200 kr/år</li>
                                <li><strong>Nioxin 3-stegs system:</strong> 800 kr/månad = 9,600 kr/år</li>
                                <li><strong>Maria Nila Head & Hair Heal:</strong> 350 kr/månad = 4,200 kr/år</li>
                            </ul>

                            <p className="mt-6">
                                <span className="font-bold">Lumina Hair Serum kostar endast 798 kr</span> (ordinarie pris 1,596 kr) för 2 månaders behandling.
                            </p>

                            <p className="font-bold text-[#1CAF3D]">
                                Det levereras också med en 90-dagars nöjd-kund-garanti.
                            </p>
                        </div>

                        {/* Detailed Explanations */}
                        <div className="space-y-8 mb-12 text-[#212529] text-[17px] leading-relaxed">
                            <div>
                                <h3 className="text-[22px] font-bold mb-3 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Varför Så Prisvärt?</h3>
                                <p className="mb-4">
                                    <span className="font-bold">Lumina Hair Serum säljs direkt till dig</span> – inga mellanhänder, inga apotek, inga dermatologkliniker som tar <span className="font-bold">300-500% påslag</span>.
                                </p>
                                <p className="mb-4">
                                    De flesta håravfallsprodukter går genom distributörer, apotek och kliniker innan de når dig. Varje mellanled lägger på sin marginal. Det är därför <span className="font-bold">Priorin kostar 699 kr/månad</span> och <span className="font-bold">Minoxidil från Apotek Hjärtat tar 450-600 kr</span>.
                                </p>
                                <p className="mb-4">
                                    <span className="font-bold">Lumina skär bort allt det där.</span> Du betalar för forskningen, de aktiva ingredienserna och formulan – <span className="font-bold">ingenting annat</span>.
                                </p>
                                <p>
                                    Inga lyxiga klinikmottagningar. Inga apotek-marginalerna på 200-400%. Inga säljare som tar provision. <span className="font-bold">Bara produkten som faktiskt fungerar, direkt till ditt hem.</span>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[22px] font-bold mb-3 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Varför Rabatt Nu?</h3>
                                <p className="mb-4">
                                    Lumina lanserades för 8 månader sedan och byggde sin kundbas genom mun-till-mun-rekommendationer från tidiga användare.
                                </p>
                                <p className="mb-4">
                                    Nu kör de en <span className="font-bold">begränsad kampanj</span> för att få in fler recensioner och nå kvinnor som fortfarande slösar pengar på Priorin och Nioxin utan resultat.
                                </p>
                                <p>
                                    När de når 20,000 verifierade köpare (de är på 12,347 just nu) kommer <span className="font-bold">rabatten att försvinna och priset går tillbaka till ordinarie detaljhandelspris</span>.
                                </p>
                                <p className="italic font-medium mt-2">
                                    Detta är din chans att köpa till <span className="font-bold">introduktionspris</span> innan det blir nästa Priorin (som aldrig går på rea).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[22px] font-bold mb-3 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Borde Du Köpa Nu?</h3>
                                <p className="mb-4 font-bold">
                                    Ja.
                                </p>
                                <p className="mb-4">
                                    Rabatten varar inte och lagret tar slut snabbare än de räknat med. Lumina Hair Serum ger dig resultat som kostar <span className="font-bold">10 gånger mer på apotek</span> eller hos dermatologen.
                                </p>
                                <p className="mb-4">
                                    Sluta slösa tusentals kronor årligen på Priorin-kapslar som inte gör någonting eller Minoxidil som gör ditt hår fett och tvingar dig till <span className="font-bold">livslång användning</span>.
                                </p>
                                <p className="mb-4">
                                    Få synliga resultat för en bråkdel av vad du spenderar på tillskott och behandlingar som inte fungerar.
                                </p>
                                <p>
                                    Det är också den perfekta presenten till mammor, systrar och väninnor som kämpar med håravfall efter klimakteriet – något som faktiskt gör skillnad, inte bara ännu en burk Priorin.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[22px] font-bold mb-3 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Var Kan Man Köpa?</h3>
                                <p className="mb-4">
                                    Köp endast från den <span className="font-bold">officiella Lumina-webbplatsen</span> för att säkerställa äkta produkter och garantitäckning.
                                </p>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                                    <p className="font-bold text-red-700">Varning:</p>
                                    <p className="text-red-800 text-sm">
                                        Det har dykt upp <span className="font-bold">kopior på Amazon och eBay</span> som ser likadana ut men använder billigare ingredienser. De <span className="font-bold">fungerar inte och täcks inte av garanti</span>.
                                    </p>
                                </div>
                                <p className="font-bold">
                                    Från och med 1 januari 2026 erbjuder Lumina en tidsbegränsad 50% rabatt för förstagångsköpare.
                                </p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-[#FFF9EA] border border-[#F4BE19] p-6 rounded-lg text-center my-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#F4BE19] text-white text-[10px] font-bold px-2 py-1 uppercase">Bästsäljare</div>
                            <h3 className="font-bold text-[22px] mb-2 text-[#17242C]" style={{ fontFamily: '"Montserrat", sans-serif' }}>BEGRÄNSAT ERBJUDANDE</h3>
                            <p className="text-gray-700 mb-6">Få 50% RABATT + 90-Dagars Nöjd-Kund-Garanti</p>

                            <button
                                onClick={scrollToOffer}
                                className="w-full bg-[#0B2240] hover:bg-[#051628] text-white font-bold text-[20px] py-4 rounded shadow-lg transition-transform transform hover:scale-[1.02] uppercase tracking-wide mb-4"
                            >
                                Testa Lumina Riskfritt &raquo;
                            </button>

                            <div className="flex justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                                <span className="flex items-center gap-1"><ShieldCheck size={14} /> 90 Dagar Öppet Köp</span>
                                <span className="flex items-center gap-1"><Truck size={14} /> Fri Frakt</span>
                            </div>
                        </div>

                    </div>

                    {/* Facebook Style Comments */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-[#17242C] text-[18px]">11 Kommentarer</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>Sortera efter:</span>
                                <span className="font-bold text-gray-700">Topp</span>
                            </div>
                        </div>

                        {/* Add comment input */}
                        <div className="flex gap-2 mb-8">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Lägg till en kommentar..."
                                    className="w-full border border-gray-300 rounded-[20px] px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Comments List */}
                        <div className="space-y-4">
                            {reviews.map((review, i) => (
                                <div key={i} className={`flex gap-2 ${review.isReply ? 'ml-12' : ''}`}>
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="w-full h-full flex items-center justify-center bg-[#E7F3FF] text-[#1877F2] font-bold text-xs">
                                            {review.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-[#F0F2F5] px-3 py-2 rounded-[18px] inline-block">
                                            <span className="font-bold text-[13px] block text-[#050505] cursor-pointer hover:underline">{review.name}</span>
                                            <span className="text-[#050505] text-[15px] leading-snug">{review.text}</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-0.5 ml-2 text-[12px] text-[#65676B] font-semibold">
                                            <span className="cursor-pointer hover:underline">Gilla</span>
                                            <span className="cursor-pointer hover:underline">Svara</span>
                                            <span className="font-normal">{review.time}</span>
                                        </div>
                                        {review.likes > 0 && (
                                            <div className="flex items-center gap-[2px] mt-1 ml-2">
                                                <div className="bg-blue-500 rounded-full p-[2px]"><ThumbsUp size={6} className="text-white" fill="white" /></div>
                                                <span className="text-[#65676B] text-[11px]">{review.likes}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center border-t border-gray-200 pt-2">
                            <button className="text-sm font-semibold text-[#65676B] w-full py-2 hover:bg-gray-50 rounded">Visa 5 kommentarer till</button>
                        </div>
                    </div>

                </div>
            </article>

            {/* Footer Text */}
            <div className="max-w-[780px] mx-auto p-8 pb-24 text-center text-[11px] text-[#8A8D91] border-t bg-white">
                <p>&copy; 2026 Lumina Hair Serum. Alla rättigheter förbehållna.</p>
                <p className="mt-2">Denna webbplats är inte en del av Facebook eller Facebook Inc.</p>
            </div>

            {/* Sticky Footer CTA - Mobile Only */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 md:hidden">
                <button
                    onClick={scrollToOffer}
                    className="w-full bg-[#0B2240] text-white font-bold py-3 px-6 rounded shadow text-[18px] uppercase tracking-wide"
                >
                    Få 50% Rabatt Idag
                </button>
            </div>
        </div>
    );
};

export default Women55Plus;

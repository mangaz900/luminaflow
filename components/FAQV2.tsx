import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQV2: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToPricing = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
        }
        const element = document.querySelector('#erbjudande') || document.querySelector('#pricing');
        if (element) {
            const yOffset = -80; // Offset för fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const faqs = [
        {
            question: "Måste jag använda det för alltid?",
            answer: "Om din hårtunnhet är DHT‑driven är det ofta ett långsiktigt “underhållsspel”, inte en engångskur. Poängen med Lumina är att göra rutinen friktionsfri så du faktiskt kan vara konsekvent (hellre 1 enkel minut varje dag än en “perfekt” rutin du slutar med)."
        },
        {
            question: "Får jag “dread shed” som med minoxidil?",
            answer: "Vissa upplever en period av shedding när de startar en aktiv hår-rutin. Det är oftast ett tecken på att rutinen “pushar ut svagare strån för att ge plats åt starkare”. Det är en normal del av processen när hårsäckarna aktiveras och går in i en ny tillväxtfas."
        },
        {
            question: "Funkar det på kronan/hjässan eller bara hårfästet?",
            answer: "Produkten är gjord för hela hårbotten. Den fungerar lika bra för både hårfäste och krona eftersom den fokuserar på hårbottenmiljö och ger multi‑target stöd åt hårsäckarna, oavsett var på huvudet de sitter."
        },
        {
            question: "Jag vill inte ha piller eller recept – är det här ett alternativ?",
            answer: "Ja, Lumina är ett 100% receptfritt och hormonfritt alternativ. Hela vinkeln är “no pills, no prescriptions” för män som vill slippa biverkningar och systemiska trade-offs. Behåll ditt driv, behåll ditt hår."
        },
        {
            question: "Kan jag använda det på morgonen innan jobbet – syns det?",
            answer: "Ja. Vår formula är snabbtorkande och lämnar ingen fet hinna. Du kan applicera den på under 60 sekunder och sedan fortsätta med din dag utan att håret ser 'nyss insmort' ut. Det är en av våra största fördelar jämfört med kladdiga oljor."
        },
        {
            question: "Kommer det förstöra min styling eller göra håret fett?",
            answer: "Nej. En stor anledning att män slutar med topikala behandlingar är att det sabbar frisyren. Lumina är “non-greasy / zero residue”, vilket betyder att det inte påverkar din styling eller gör håret fett efter att det har torkat in."
        },
        {
            question: "Jag har redan testat minoxidil – varför är detta inte “samma sak”?",
            answer: "Minoxidil adresserar primärt blodflöde. Lumina är en multi‑target formula som adresserar både lokal DHT‑stress, aktivering av vilande hårsäckar (stamceller), mikrocirkulation och skalphälsa för att ge en mer komplett lösning utan de vanliga biverkningarna."
        },
        {
            question: "Hur vet jag att ni inte är en “subscription trap”?",
            answer: "Vi har ingen bindningstid. Du kan pausa eller avsluta din prenumeration med ett klick på din kundsida när du vill – inga krångliga bot-loopar, dolda villkor eller telefonköer."
        },
        {
            question: "Hur länge ska jag ge det innan jag avgör?",
            answer: "Håret växer långsamt och kräver konsekvens. Vi rekommenderar att du ger det minst 90 dagar för att se en mätbar skillnad. Det är också därför vi har en 90-dagars nöjd-kund-garanti istället för bara 30 dagar."
        },
        {
            question: "Funkar det om jag är diffus tunnare (tunn överallt)?",
            answer: "Ja. Diffus tunnhet behöver ofta en “scalp reset” och stabilisering. Målet med Lumina är först att stoppa onödig shedding och sedan skapa “invisible density” över hela skalpen genom att stärka och bevara de befintliga hårsäckarna."
        }
    ];

    return (
        <section id="faq" className="py-12 md:py-24 bg-[#F5F7FA] scroll-mt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl md:text-3xl text-center text-medical-900 mb-8 md:mb-12">Vanliga frågor</h2>

                <div className="space-y-3 md:space-y-4 mb-12 md:mb-20">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-4 md:p-6 text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium text-medical-900 pr-4 text-sm md:text-base">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-medical-500 flex-shrink-0" size={20} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
                            </button>

                            {openIndex === index && (
                                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed animate-fade-in text-sm md:text-base">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Guarantee Section */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-medical-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-medical-400 to-medical-600"></div>

                    <div className="bg-medical-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-medical-600">
                        <ShieldCheck size={40} />
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-medical-900 mb-4">90 Dagars Nöjd-Kund-Garanti</h3>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Vi är så säkra på vår formula att vi tar risken. Använd Lumina dagligen i 90 dagar.
                        Ser du ingen skillnad? Då får du pengarna tillbaka. Inget krångel.
                    </p>

                    <button
                        onClick={handleScrollToPricing}
                        className="bg-medical-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-medical-800 transition-all shadow-lg"
                    >
                        Testa riskfritt idag
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQV2;

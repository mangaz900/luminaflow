import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToPricing = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: '#erbjudande' } });
    } else {
      setTimeout(() => {
        const element = document.querySelector('#erbjudande');
        if (element) {
          const yOffset = -80; // Offset för fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const faqs = [
    {
      question: "Varför inte bara ta HRT/hormoner?",
      answer: "Lumina är hormonfritt och fungerar UTAN östrogentillskott. Perfekt om du inte vill eller kan ta hormonbehandling. Serumet arbetar direkt på hårsäcksnivå genom att aktivera stamceller — inte genom hormonpåverkan. Du kan använda Lumina oavsett om du tar HRT eller inte."
    },
    {
      question: "Jag har provat biotin, minoxidil och dyrt schampo — varför skulle detta fungera?",
      answer: "Dessa är gjorda för generellt håravfall. Lumina är utvecklat SPECIFIKT för klimakteriet = när östrogen sjunker och folliklar går i telogen-fas. Helt annan mekanism. Biotin ger näring (men folliklar sover = kan inte absorbera). Minoxidil ökar blodflöde (men väcker inte stamceller). Lumina gör BÅDA + aktiverar stamceller + förlänger tillväxtfas."
    },
    {
      question: "Hur lång tid tar det att se resultat efter menopaus?",
      answer: "De flesta ser första tecken (babyhår, mindre håravfall) efter 6-8 veckor. Synligt tätare hår efter 10-12 veckor. Maximal effekt efter 6 månader. Därför har vi 90 dagars garanti — inte 30 dagar. Hårsäckar efter klimakteriet behöver längre tid att väckas än yngre hår."
    },
    {
      question: "Vad om det inte fungerar på MIG?",
      answer: "90 dagars pengarna-tillbaka-garanti. Använd hela burken. Följ instruktionerna i 90 dagar. Ser du ingen skillnad → skicka tillbaka (även om burken är tom) → full återbetalning inom 5 arbetsdagar. Vi står för returkostnaden. Inga krångliga villkor. Inga frågor."
    },
    {
      question: "Är det för sent om jag är 5+ år efter klimakteriet?",
      answer: "Hårsäckar som varit i telogen-fas i 12+ månader är svårare att väcka — men inte omöjligt. Ju tidigare du agerar efter menopaus → desto bättre resultat. Men även 5 år efter klimakteriet ser många förbättring. Det enda sättet att veta = att testa. Därav 90-dagars garantin."
    },
    {
      question: "Innehåller det hormoner?",
      answer: "Nej. Lumina är 100% hormonfritt. Fungerar genom att aktivera hårsäckens egna stamceller — inte genom att tillföra östrogen eller andra hormoner. Säkert att använda även om du tar/inte tar HRT."
    },
    {
      question: "Blir håret fett av serumet?",
      answer: "Nej. Vår formula är vattenbaserad och utformad för att absorberas snabbt (inom 60 sekunder). Den lämnar inga feta rester, så du kan använda den på morgonen och styla håret som vanligt."
    },
    {
      question: "Kan jag använda det tillsammans med andra hårprodukter?",
      answer: "Ja, Lumina kompletterar dina nuvarande produkter perfekt. Applicera först Lumina, låt det torka (cirka 1 minut), sedan kan du använda dina vanliga produkter som vanligt."
    },
    {
      question: "Kan jag använda det under graviditet eller amning?",
      answer: "Ja, det är säkert. Vår formula är hormonfri och baserad på naturliga ingredienser. Många kunder har använt Lumina under graviditet och amning utan problem. Vid tvekan, konsultera din läkare."
    },
    {
      question: "Kan jag använda det med färgat hår?",
      answer: "Ja. Lumina appliceras på hårbotten (inte hårlängderna) och påverkar inte hårfärg. Vänta 48 timmar efter färgning innan du börjar använda produkten."
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

export default FAQ;
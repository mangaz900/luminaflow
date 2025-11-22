import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToPricing = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: '#erbjudande' } });
    } else {
      setTimeout(() => {
        const element = document.querySelector('#erbjudande');
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const faqs = [
    {
      question: "Jag har provat allt – varför skulle detta fungera?",
      answer: "Vi förstår din skepsis. Skillnaden med Lumina är kombinationen av 4 kliniskt bevisade ingredienser som angriper håravfall från olika håll: cirkulation (Rosmarin), stamcellsaktivering (Redensyl), antifibros (Aminexil) och tillväxtfas (Anagain). Det är inte bara 'en olja', det är bioteknik."
    },
    {
      question: "Blir håret fett av serumet?",
      answer: "Nej. Vår formula är vattenbaserad och utformad för att absorberas snabbt (inom 60 sekunder). Den lämnar inga feta rester, så du kan använda den på morgonen och styla håret som vanligt."
    },
    {
      question: "När ser jag resultat?",
      answer: "Hårväxt tar tid. Du kommer troligen märka minskat håravfall inom 4-6 veckor. Synlig nytillväxt syns oftast efter 3-4 månader. Det är därför vi erbjuder en 90-dagars garanti."
    },
    {
      question: "Passar det för klimakterierelaterat håravfall?",
      answer: "Ja. Många av våra kunder är i eller efter klimakteriet. Ingredienserna hjälper till att motverka den försvagning av hårsäcken som sker vid hormonella förändringar."
    },
    {
      question: "Kan jag använda det tillsammans med andra hårprodukter?",
      answer: "Ja, Lumina kompletterar dina nuvarande produkter perfekt. Applicera först Lumina, låt det torka (cirka 1 minut), sedan kan du använda dina vanliga produkter som vanligt."
    },
    {
      question: "Kan jag använda det under graviditet eller amning?",
      answer: "Ja, det är säkert. Vår formula är hormonfri och baserad på naturliga ingredienser. Många kunder har använt Lumina under graviditet och amning utan problem. Vid tvekan, konsultera din läkare."
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
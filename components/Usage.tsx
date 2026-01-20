import React from 'react';
import { MousePointerClick, Clock, Calendar } from 'lucide-react';

const Usage: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Rulla produkten över hela hårbotten/hårfästet i 2 minuter",
      description: "Använd roll-on applikatorn direkt i hårbotten. Perfekt för vikar, kronan och över hela hårfästet. Ingen spill, inget kladd.",
      icon: <MousePointerClick className="w-6 h-6 text-white" />
    },
    {
      number: "02",
      title: "Använd både morgon & kväll i din rutin",
      description: "För bästa resultat applicera Lumina två gånger om dagen – på morgonen och kvällen. Formulan torkar snabbt och stör inte din hårstyling.",
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      number: "03",
      title: "Konsistens är nyckeln",
      description: "Använd Lumina dagligen. Folliklar behöver daglig signal för att stanna i tillväxtfas. När ser du resultat? Vecka 6-8: Mindre håravfall, första babyhår. Vecka 10-12: Synligt tätare hår längs bena. Månad 6: Maximal effekt.",
      icon: <Calendar className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="anvandning" className="py-12 md:py-24 bg-[#F0F7FF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-medical-900 mb-3 md:mb-4">60 sekunder om dagen</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2">
            Passar i din vardag. Ingen lång "ritual", ingen fet känsla. Bara resultat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative px-2 md:px-4 max-w-6xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-medical-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group bg-white md:bg-transparent p-6 rounded-2xl md:p-0 shadow-sm md:shadow-none">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-medical-100 flex items-center justify-center mb-6 shadow-md group-hover:border-medical-400 group-hover:scale-110 transition-all duration-300 z-10">
                <div className="w-16 h-16 rounded-full bg-medical-900 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <div className="hidden md:block absolute top-0 -right-4 font-serif text-8xl text-medical-100 -z-10 opacity-60 select-none">
                {step.number}
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-medical-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usage;
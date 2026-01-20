import React from 'react';
import { Zap, Anchor, TrendingUp, Droplets } from 'lucide-react';

const Benefits: React.FC = () => {
  const phases = [
    {
      number: "1",
      title: "VÄCK stamcellerna",
      ingredient: "Redensyl® 3%",
      description: "Aktiverar stamceller i hårsäcken som varit vilande sedan klimakteriet. Startar hårtillväxtcykeln igen.",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      number: "2",
      title: "ANKRA håret i roten",
      ingredient: "Aminexil",
      description: "Förhindrar fibros (förhårdning) runt hårroten. Håller håret stadigt förankrat så det inte lossnar lika lätt.",
      icon: <Anchor className="w-6 h-6 text-white" />
    },
    {
      number: "3",
      title: "FÖRLÄNG tillväxtfasen",
      ingredient: "Anagain™ 2%",
      description: "Håller håret i anagen-fas (tillväxtfasen) längre. Resulterar i längre, tjockare hårstrån.",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    },
    {
      number: "4",
      title: "CIRKULERA näring",
      ingredient: "Rosmarinolja 3%",
      description: "Ökar blodflödet till hårbotten. Levererar syre och näring till de nyväckta folliklar.",
      icon: <Droplets className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F0F7FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-medical-900 mb-4 md:mb-6 leading-tight">
            Varför fungerar Lumina när biotin, minoxidil och dyrt schampo inte gör det?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-2 leading-relaxed">
            De flesta hårserum är gjorda för GENERELLT håravfall — näringsbrist, stress, genetik.
            <br /><br />
            Men håravfall efter klimakteriet är annorlunda.
            <br /><br />
            Problemet är inte brist på näring. Problemet är att hårsäckarna SOVER.
            <br /><br />
            För att väcka dem krävs 4 signaler — SAMTIDIGT:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-medical-200 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-medical-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-medical-500 uppercase tracking-wider mb-1">FAS {phase.number}</div>
                  <h3 className="font-serif text-xl md:text-2xl text-medical-900 mb-2">{phase.title}</h3>
                  <p className="text-sm font-medium text-medical-700 mb-3">{phase.ingredient}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-medical-900 text-white p-6 md:p-8 rounded-2xl text-center">
          <p className="text-lg md:text-xl font-serif leading-relaxed">
            Alla 4 faser. Samtidigt. I koncentrationer bevisade för postmenopausal håravfall.
            <br /><br />
            <span className="text-medical-100">Det är varför Lumina fungerar när annat inte gör det.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;



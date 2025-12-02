import React from 'react';
import { Zap, Droplets, Activity, Shield } from 'lucide-react';

const RollOnApplicator: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Patenterad Titanium-kula",
      description: "Vi är de enda med denna specialtillverkade kula. Unik teknologi som gör skillnaden."
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "Stimulerar blodcirkulationen",
      description: "Kulans massage ökar blodflödet till hårsäckarna medan den applicerar formulan."
    },
    {
      icon: <Droplets className="w-6 h-6 text-white" />,
      title: "Förbättrad absorption",
      description: "Ökat blodflöde hjälper ingredienserna att tränga djupare in i hårbotten."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Optimal tryckfördelning",
      description: "Vår kula ger precis rätt mängd + massage för maximal effekt."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8 md:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-medical-900 mb-3 md:mb-4 leading-tight">
                Varför ORIGINAL fungerar bättre än droppar & kopior
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Det handlar inte bara om formulan – det handlar om <strong>hur</strong> den appliceras.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-medical-900 flex items-center justify-center">
                    <div className="scale-75 md:scale-100">{feature.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg md:text-xl text-medical-900 mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Box */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-red-900 mb-2 md:mb-3 text-sm md:text-base">Andra märken använder:</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-red-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Standardkulor som inte stimulerar blodflödet
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Ingen massage-effekt = sämre resultat
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Dålig tätning som läcker
                </li>
              </ul>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/roll-on-kula.jpg" 
                alt="Roll-on applikator med Titanium-kula"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x1000?text=Roll-on+Applicator";
                }}
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medical-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RollOnApplicator;


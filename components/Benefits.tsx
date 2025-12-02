import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Stoppar håravfall vid källan på veckor",
    "Väcker vilande hårsäckar inifrån",
    "Blockerar nya håravfall från att starta",
    "Ger dig tillbaka det tjocka hår du trodde var borta för alltid"
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F0F7FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-medical-900 text-center mb-8 md:mb-10 leading-tight">
            Ditt Framtida Hår Beror På Vad Du Gör Idag!
          </h2>
          
          <div className="space-y-4 md:space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <Check size={18} className="md:w-5 md:h-5 text-green-600" strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;



import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      label: "Kliniskt bevisad",
      lumina: true,
      minoxidil: true,
      oils: false
    },
    {
      label: "Motverkar stress",
      lumina: true,
      minoxidil: false,
      oils: false
    },
    {
      label: "Inga biverkningar",
      lumina: true,
      minoxidil: false, // Often causes irritation/headaches
      oils: true
    },
    {
      label: "Motverkar fibros",
      lumina: true,
      minoxidil: false,
      oils: false
    },
    {
      label: "Kladdfri formula",
      lumina: true,
      minoxidil: false, // Often drying/sticky
      oils: false // Greasy
    },
    {
      label: "90 dagars garanti",
      lumina: true,
      minoxidil: false,
      oils: false
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-medical-900 mb-2 md:mb-3">
            Varför Lumina?
          </h2>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base max-w-xl mx-auto px-2">
            Se hur vi står oss mot alternativen.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto max-w-2xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100 min-w-[600px]">
            <div className="p-2 md:p-3 lg:p-5 flex items-center justify-start">
               <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Egenskap</span>
            </div>
            
            {/* Lumina Header */}
            <div className="p-3 md:p-5 bg-medical-900/5 flex flex-col items-center justify-center relative border-x border-gray-100/50 pt-6 md:pt-5">
              <span className="font-serif font-bold text-medical-900 text-xs md:text-lg">Lumina</span>
              {/* Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gold-400 text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-b-sm uppercase tracking-wide shadow-sm whitespace-nowrap">
                Bäst Val
              </div>
            </div>
            
            {/* Competitor 1 Header */}
            <div className="p-3 md:p-5 flex flex-col items-center justify-center text-center">
              <span className="font-medium text-gray-500 text-[10px] md:text-sm">Minox.</span>
            </div>
            
            {/* Competitor 2 Header */}
            <div className="p-3 md:p-5 flex flex-col items-center justify-center text-center">
              <span className="font-medium text-gray-500 text-[10px] md:text-sm">Oljor</span>
            </div>
          </div>

          {/* Data Rows */}
          {features.map((row, index) => (
            <div key={index} className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-gray-50 last:border-0 min-w-[600px]">
              
              {/* Feature Name */}
              <div className="p-2 md:p-3 lg:p-5 flex items-center">
                <span className="text-[11px] md:text-sm font-medium text-gray-700 leading-tight">{row.label}</span>
              </div>

              {/* Lumina Data */}
              <div className="p-2 md:p-3 lg:p-5 flex items-center justify-center bg-medical-50/30 border-x border-gray-100/50">
                {row.lumina ? (
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check size={12} className="md:hidden" strokeWidth={3} />
                    <Check size={14} className="hidden md:block lg:hidden" strokeWidth={3} />
                    <Check size={18} className="hidden lg:block" strokeWidth={3} />
                  </div>
                ) : (
                   <X size={12} className="md:w-3.5 md:h-3.5 text-red-300" />
                )}
              </div>

              {/* Minox Data */}
              <div className="p-2 md:p-3 lg:p-5 flex items-center justify-center">
                 {row.minoxidil ? (
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <Check size={12} className="md:hidden" strokeWidth={3} />
                    <Check size={14} className="hidden md:block lg:hidden" strokeWidth={3} />
                    <Check size={18} className="hidden lg:block" strokeWidth={3} />
                  </div>
                ) : (
                   <X size={12} className="md:w-3.5 md:h-3.5 text-gray-300" />
                )}
              </div>

              {/* Oils Data */}
              <div className="p-2 md:p-3 lg:p-5 flex items-center justify-center">
                 {row.oils ? (
                   <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <Check size={12} className="md:hidden" strokeWidth={3} />
                    <Check size={14} className="hidden md:block lg:hidden" strokeWidth={3} />
                    <Check size={18} className="hidden lg:block" strokeWidth={3} />
                  </div>
                ) : (
                   <X size={12} className="md:w-3.5 md:h-3.5 text-gray-300" />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
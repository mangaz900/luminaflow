import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const columns = [
  {
    title: "Krämer",
    subtitle: "Populärt val",
    highlight: false,
    features: [
      { text: "Ytlig effekt", positive: false },
      { text: "Kortvarig förbättring", positive: false },
      { text: "Ingen strukturell påverkan", positive: false },
      { text: "Enkel hantering", positive: true },
    ],
  },
  {
    title: "Manuella verktyg",
    subtitle: "Massagebräda etc.",
    highlight: false,
    features: [
      { text: "Begränsad stimulering", positive: false },
      { text: "Ingen värme eller vakuum", positive: false },
      { text: "Kräver hög kraft", positive: false },
      { text: "Prisvärd", positive: true },
    ],
  },
  {
    title: "LuminaFlow 360",
    subtitle: "Strukturell behandling",
    highlight: true,
    features: [
      { text: "360° strukturell aktivering", positive: true },
      { text: "Kombinerar vakuum, värme & mekanik", positive: true },
      { text: "Justerbar intensitet", positive: true },
      { text: "Utvecklad för hemmabruk", positive: true },
    ],
  },
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Jämförelse</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28]">
            Varför traditionella lösningar<br />
            <em className="not-italic text-[#B8986A]">inte räcker</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(col => (
            <div
              key={col.title}
              className={`rounded-3xl p-8 border-2 transition-all ${col.highlight
                ? 'border-[#B8986A] bg-[#F4EFEA] shadow-xl scale-[1.02]'
                : 'border-[#EDE6DF] bg-[#F9F6F3]'
                }`}
            >
              {col.highlight && (
                <div className="mb-4">
                  <span className="bg-[#B8986A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Rekommenderat
                  </span>
                </div>
              )}
              <h3 className={`font-serif text-xl mb-1 ${col.highlight ? 'text-[#3B2E28]' : 'text-[#7A6A62]'}`}>
                {col.title}
              </h3>
              <p className="text-xs text-[#B8986A] mb-6">{col.subtitle}</p>
              <ul className="space-y-4">
                {col.features.map(f => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${f.positive ? 'bg-[#EDE6DF] text-[#B8986A]' : 'bg-red-50 text-red-400'}`}>
                      {f.positive ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
                    </span>
                    <span className={`text-sm leading-snug ${f.positive ? 'text-[#3B2E28] font-medium' : 'text-[#7A6A62]'}`}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
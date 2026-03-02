import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Är behandlingen säker?",
    a: "Ja. LuminaFlow 360 är utformad för hemmabruk med säkerhets- och komfortjusteringar. Följ alltid instruktionerna och börja med lägsta intensitet.",
  },
  {
    q: "Kan jag använda den dagligen?",
    a: "Vi rekommenderar 3 gånger per vecka för att ge huden tillräcklig återhämtningstid och optimala resultat.",
  },
  {
    q: "Fungerar den på alla hudtyper?",
    a: "Ja, den är utformad för att fungera på alla hudtyper. Vid känslig hud rekommenderar vi att börja på lägsta intensitet.",
  },
  {
    q: "Gör det ont?",
    a: "Nej. Du kan känna ett lätt drag eller värme, men behandlingen ska inte vara smärtsam. Justera alltid intensiteten efter din komfort.",
  },
  {
    q: "När ser jag resultat?",
    a: "De flesta märker en förbättrad känsla av fasthet inom 1–2 veckor. Synliga förändringar i hudstruktur syns vanligtvis från vecka 3–4.",
  },
  {
    q: "Kan den användas efter graviditet?",
    a: "Vänta minst 3 månader efter förlossning och rådgör med din läkare innan du påbörjar behandling. Vi rekommenderar att du inte använder den under amning.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F4EFEA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Frågor & svar</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28]">
            Vanliga frågor
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? 'border-[#B8986A] bg-white shadow-sm' : 'border-[#DDD4CB] bg-white'}`}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#3B2E28] text-base">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#B8986A] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#7A6A62] text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
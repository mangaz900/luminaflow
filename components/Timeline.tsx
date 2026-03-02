import React from 'react';

const phases = [
  {
    period: "Vecka 1–2",
    title: "Cirkulation & fasthet",
    desc: "Ökad cirkulation och känsla av fasthet.",
    width: "w-1/3",
  },
  {
    period: "Vecka 3–4",
    title: "Synlig hudstruktur",
    desc: "Synligare förbättrad hudstruktur.",
    width: "w-2/3",
  },
  {
    period: "Vecka 6+",
    title: "Jämnare yta",
    desc: "Jämnare och mer definierad yta.",
    width: "w-full",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Resultat</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28]">
            Vad du kan förvänta dig <em className="not-italic text-[#B8986A]">över tid</em>
          </h2>
        </div>

        <div className="space-y-8">
          {phases.map((p, i) => (
            <div key={p.period} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-28 text-right">
                <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">{p.period}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#B8986A] flex-shrink-0" />
                  <h3 className="font-semibold text-[#3B2E28]">{p.title}</h3>
                </div>
                <div className="ml-6">
                  <div className="h-2 bg-[#EDE6DF] rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full bg-gradient-to-r from-[#B8986A] to-[#D4B896] rounded-full ${p.width}`}
                      style={{ transition: 'width 1s ease' }}
                    />
                  </div>
                  <p className="text-[#7A6A62] text-sm">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F4EFEA] border border-[#DDD4CB] rounded-2xl px-6 py-4 text-center">
          <p className="text-[#7A6A62] text-sm italic">
            Individuella resultat varierar. Inga överdrivna löften — bara ärlig information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
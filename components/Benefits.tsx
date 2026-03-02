import React from 'react';

const techniques = [
  {
    number: "01",
    title: "Dynamiskt vakuum",
    desc: "Lyfter och mobiliserar vävnad.",
  },
  {
    number: "02",
    title: "Termisk stimulering",
    desc: "Ökar mikrocirkulationen.",
  },
  {
    number: "03",
    title: "Rödljus-aktivering",
    desc: "Stödjer hudens naturliga struktur.",
  },
  {
    number: "04",
    title: "360° MicroRolling",
    desc: "Jämn mekanisk stimulering runt hela området.",
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE LEFT */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#EDE6DF] rounded-3xl transform -rotate-2 scale-95 opacity-60" />
            <div className="relative rounded-3xl overflow-hidden bg-[#EDE6DF] aspect-[4/5]">
              <img
                src="/2 (7).jpg"
                alt="LuminaFlow 360 – Användning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Teknologi</span>
              <div className="h-px bg-[#B8986A] mt-1" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28] leading-tight">
              En ny generation<br />
              <em className="not-italic text-[#B8986A]">behandling för struktur.</em>
            </h2>

            <div className="space-y-6">
              {techniques.map(t => (
                <div key={t.number} className="flex gap-5 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EDE6DF] border border-[#DDD4CB] flex items-center justify-center">
                    <span className="text-[#B8986A] text-xs font-bold">{t.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3B2E28] text-base mb-1">{t.title}</h3>
                    <p className="text-[#7A6A62] text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#EDE6DF] rounded-2xl px-6 py-4 border border-[#DDD4CB]">
              <p className="text-[#3B2E28] text-sm font-medium italic">
                Utformad för kontrollerad användning hemma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

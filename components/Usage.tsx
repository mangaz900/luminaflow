import React from 'react';

const steps = [
  {
    step: "01",
    title: "Placera på torr hud",
    desc: "Applicera direkt på det område du vill behandla — utan kräm eller olja.",
  },
  {
    step: "02",
    title: "Justera intensitet",
    desc: "Välj önskad nivå med det ergonomiska reglaget beroende på komfort.",
  },
  {
    step: "03",
    title: "5–10 minuter per område",
    desc: "Rör enheten i mjuka, cirkulära rörelser under behandlingstiden.",
  },
];

const Usage: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4EFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Användning</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28]">
            Så använder du den
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-3xl p-8 border border-[#EDE6DF] shadow-sm hover:shadow-md transition-shadow">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                  <div className="w-8 h-px bg-[#DDD4CB]" />
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-[#EDE6DF] flex items-center justify-center mb-6">
                <span className="text-[#B8986A] font-bold text-sm">{s.step}</span>
              </div>
              <h3 className="font-semibold text-[#3B2E28] text-lg mb-3">{s.title}</h3>
              <p className="text-[#7A6A62] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#7A6A62] text-base">
            Rekommenderas <strong className="text-[#3B2E28]">3 gånger per vecka</strong> för bästa resultat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Usage;
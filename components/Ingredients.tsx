import React from 'react';

const Ingredients: React.FC = () => {
  return (
    <section className="py-24 bg-[#EDE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE LEFT */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#F4EFEA] rounded-3xl transform rotate-1 scale-95 opacity-50" />
            <div className="relative rounded-3xl overflow-hidden bg-[#F4EFEA] aspect-square">
              <img
                src="/4 (5).jpg"
                alt="Expert perspektiv på cellulitbehandling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Expert perspektiv</span>
              <div className="h-px bg-[#B8986A] mt-1" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28] leading-tight">
              Ett strukturellt problem<br />
              kräver en <em className="not-italic text-[#B8986A]">strukturell lösning.</em>
            </h2>

            <div className="space-y-5 text-[#7A6A62] text-lg leading-relaxed">
              <p>
                Celluliter handlar inte om mängden fett,
                utan om hur bindväven organiserar vävnaden under huden.
              </p>
              <p>
                När vi arbetar med kontrollerat vakuum,
                mikrocirkulation och mekanisk stimulering,
                kan vi påverka strukturen — inte bara ytan.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {["Vakuum", "Mikrocirkulation", "Mekanik"].map(label => (
                <div key={label} className="bg-white rounded-2xl p-4 text-center border border-[#DDD4CB]">
                  <p className="text-[#3B2E28] font-semibold text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ingredients;
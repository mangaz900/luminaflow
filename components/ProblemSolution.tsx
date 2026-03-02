import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* TEXT LEFT */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Förståelse</span>
              <div className="h-px bg-[#B8986A] mt-1" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28] leading-tight">
              Problemet sitter djupare<br />
              <em className="not-italic text-[#B8986A]">än du tror.</em>
            </h2>

            <div className="space-y-5 text-[#7A6A62] text-lg leading-relaxed">
              <p>
                Celluliter uppstår när bindvävens strukturer drar ned huden,
                samtidigt som fettvävnad trycks upp mellan fibrerna.
              </p>
              <p>
                Det är därför krämer verkar på ytan.<br />
                Träning påverkar fett.<br />
                Men strukturen förblir densamma.
              </p>
              <p>
                Och ojämnheten består.
              </p>
            </div>

            <div className="border-l-2 border-[#B8986A] pl-5 py-1">
              <p className="text-[#3B2E28] font-semibold text-base italic">
                Traditionella lösningar missar det strukturella problemet.
              </p>
            </div>
          </div>

          {/* IMAGE RIGHT – 1:1, hela bilden synlig */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#EDE6DF] rounded-3xl transform rotate-2 scale-95 opacity-60" />
            <div className="relative rounded-3xl overflow-hidden bg-white aspect-square">
              <img
                src="/skin-anatomy.png"
                alt="Hudstruktur – illustration av celluliter i bindväven"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
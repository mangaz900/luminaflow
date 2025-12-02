import React from 'react';
import { ArrowRight } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center text-medical-900 mb-8 md:mb-12">
          Vad du kan förvänta dig
        </h2>

        <div className="space-y-8">
          
          {/* Month 1-2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-medical-50 p-4 md:p-6 rounded-2xl border border-medical-100">
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
              <img 
                src="/timeline-manad-1-2.jpg" 
                alt="Månad 1-2 - Minskat håravfall"
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
              <div className="bg-medical-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                Månad 1-2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Minskat håravfall</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  De flesta märker först att de tappar mindre hår i duschen och på kudden. 
                  Hårbotten känns friskare och mindre irriterad.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-medical-300">
             <ArrowRight className="rotate-90" size={32} />
          </div>

          {/* Month 3-4 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-lg md:transform md:scale-105 z-10">
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
              <img 
                src="/timeline-manad-3-4.jpg" 
                alt="Månad 3-4 - Babyhår & Fäste"
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
              <div className="bg-medical-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                Månad 3-4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Babyhår & Fäste</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Nu börjar det roliga. Många ser små, tunna "babyhår" växa ut vid vikarna eller benan. 
                  Håret känns strävare och har mer volym vid rötterna.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-medical-300">
             <ArrowRight className="rotate-90" size={32} />
          </div>

          {/* Month 5-6 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-medical-50 p-4 md:p-6 rounded-2xl border border-medical-100">
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0 order-1 md:order-1">
              <img 
                src="/timeline-manad-5-6.jpg" 
                alt="Månad 5-6 - Synlig densitet"
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-4 order-2 md:order-2">
              <div className="bg-medical-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-serif text-base md:text-lg w-full md:w-auto md:min-w-[120px] text-center h-fit">
                Månad 5-6
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-medical-900 text-base md:text-lg mb-2">Synlig densitet</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  De nya hårstråna har blivit tjockare och längre. Håret täcker hårbotten bättre. 
                  Här upplever de flesta den stora skillnaden i spegeln.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
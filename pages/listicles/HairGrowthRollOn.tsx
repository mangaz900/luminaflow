import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const HairGrowthRollOn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-medical-900 mb-6 md:mb-8 transition-colors text-sm md:text-base"
        >
          <ArrowLeft size={18} />
          <span>Tillbaka</span>
        </button>

        {/* Hero Header */}
        <header className="mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-medical-900 mb-6 md:mb-8 leading-tight">
            5 Anledningar Varför Allt Fler Kvinnor Över 40 Använder Lumina Roll-on – Och Varför Du Borde Testa Det Själv
          </h1>

          <div className="space-y-4 md:space-y-5 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            <p>
              När håret börjar bli tunnare efter 40 är det lätt att känna sig ensam.
            </p>
            <p>
              Men du skulle bli förvånad över hur vanligt det faktiskt är — och hur många kvinnor som numera använder ett enkelt roll-on serum i hårbotten för att få igång håret igen.
            </p>
            <p className="font-semibold text-medical-900">
              Här är de 5 vanligaste anledningarna kvinnor nämner:
            </p>
          </div>
        </header>

        {/* Main Content - 5 Points */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24 mb-16 md:mb-20">
          {/* Point 1 */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="aspect-square bg-medical-50 rounded-xl overflow-hidden border border-medical-100">
                <img
                  src="/fore-efter-1.jpg"
                  alt="Före och efter - Håravfall lugnar sig"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.className = 'aspect-square bg-medical-50 rounded-xl flex items-center justify-center border border-medical-100';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-medical-500 text-sm text-center px-4">Bild kommer här</div>';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute inset-0 bg-medical-900 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white shadow-lg z-10">
                    <span className="leading-none flex items-center justify-center">1</span>
                  </div>
                  <div className="absolute inset-0 bg-medical-900 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-medical-100 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900 mb-4 md:mb-6 leading-tight">
                  Det första som händer är att håravfallet lugnar sig
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p>
                    De flesta kvinnor beskriver mindre hår i duschen redan efter ett par veckor.
                  </p>
                  <p>
                    Det är ofta det första tecknet på att hårbotten börjar må bättre.
                  </p>
                  <p>
                    En roll-on funkar eftersom den jobbar direkt där problemet börjar — i hårbotten, inte i själva hårstrået.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Point 2 */}
          <section className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="aspect-square bg-medical-50 rounded-xl overflow-hidden border border-medical-100">
                <img
                  src="/list 2.jpg"
                  alt="Stressad hårbotten"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.className = 'aspect-square bg-medical-50 rounded-xl flex items-center justify-center border border-medical-100';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-medical-500 text-sm text-center px-4">Bild kommer här</div>';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute inset-0 bg-medical-900 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white shadow-lg z-10">
                    <span className="leading-none flex items-center justify-center">2</span>
                  </div>
                  <div className="absolute inset-0 bg-medical-900 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-medical-100 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900 mb-4 md:mb-6 leading-tight">
                  Den hjälper en stressad hårbotten att slappna av
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p>
                    Efter 40 kan hårbotten bli:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-medical-700">
                    <li>känsligare</li>
                    <li>torrare</li>
                    <li>stelare</li>
                    <li>sämre på att cirkulera näring</li>
                  </ul>
                  <p>
                    Roll-onen ger en direkt stimulering i området där nya hårstrån bildas.
                  </p>
                  <p>
                    Det gör att hårbotten känns:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-medical-700">
                    <li>lugnare</li>
                    <li>mjukare</li>
                    <li>mindre irriterad</li>
                  </ul>
                  <p className="italic text-medical-800">
                    En del beskriver till och med en "varm, lätt känsla" efter användning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Point 3 */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="aspect-square bg-medical-50 rounded-xl overflow-hidden border border-medical-100">
                <img
                  src="/list 1.jpg"
                  alt="Babyhår"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.className = 'aspect-square bg-medical-50 rounded-xl flex items-center justify-center border border-medical-100';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-medical-500 text-sm text-center px-4">Bild kommer här</div>';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute inset-0 bg-medical-900 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white shadow-lg z-10">
                    <span className="leading-none flex items-center justify-center">3</span>
                  </div>
                  <div className="absolute inset-0 bg-medical-900 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-medical-100 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900 mb-4 md:mb-6 leading-tight">
                  Det kommer små nya hårstrån (babyhår)
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p>
                    Det här är det kvinnor 40–60 pratar mest om.
                  </p>
                  <p>
                    När hårbotten blir mer aktiv och får bättre cirkulation kommer ofta:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-medical-700">små korta strån vid tinningarna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-medical-700">en fylligare hårfäste-linje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-medical-700">små "bebisstrån" längst fram</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-medical-900">
                    Det är exakt denna effekt som får flest att fortsätta.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Point 4 */}
          <section className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="aspect-square bg-medical-50 rounded-xl overflow-hidden border border-medical-100">
                <img
                  src="/kvinna-applicerar-3.jpg"
                  alt="Enkel att använda"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.className = 'aspect-square bg-medical-50 rounded-xl flex items-center justify-center border border-medical-100';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-medical-500 text-sm text-center px-4">Bild kommer här</div>';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute inset-0 bg-medical-900 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white shadow-lg z-10">
                    <span className="leading-none flex items-center justify-center">4</span>
                  </div>
                  <div className="absolute inset-0 bg-medical-900 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-medical-100 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900 mb-4 md:mb-6 leading-tight">
                  Den är superenkel att använda
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <ul className="list-disc list-inside space-y-2 ml-2 text-medical-700">
                    <li>Inga piller.</li>
                    <li>Inga blandningar.</li>
                    <li>Inget kladd.</li>
                  </ul>
                  <p>
                    Du rullar bara serumet direkt längs benan eller hårfästet, och den absorberas utan att håret blir fett.
                  </p>
                  <p>
                    Används på 5 sekunder.
                  </p>
                  <p className="font-semibold text-medical-900">
                    Perfekt för kvinnor som har fullt upp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Point 5 */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="aspect-square bg-medical-50 rounded-xl overflow-hidden border border-medical-100">
                <img
                  src="/fore-efter-2.jpg"
                  alt="Förebyggande"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.className = 'aspect-square bg-medical-50 rounded-xl flex items-center justify-center border border-medical-100';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-medical-500 text-sm text-center px-4">Bild kommer här</div>';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                  <div className="absolute inset-0 bg-medical-900 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl lg:text-3xl text-white shadow-lg z-10">
                    <span className="leading-none flex items-center justify-center">5</span>
                  </div>
                  <div className="absolute inset-0 bg-medical-900 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-medical-100 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900 mb-4 md:mb-6 leading-tight">
                  Den funkar både om du redan tappar hår – och om du vill förebygga
                </h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p className="font-semibold text-medical-900">
                    Den största styrkan är att den jobbar före problemet blir stort.
                  </p>
                  <p>
                    Kvinnor använder den:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-medical-700">
                    <li>när de redan märker tunnare hår</li>
                    <li>eller i förebyggande syfte</li>
                    <li>eller för att hålla hårbotten frisk efter 45</li>
                  </ul>
                  <p>
                    Det är inte en "snabbfix", men en logisk rutin som håller hårbotten aktiv och frisk.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <section className="bg-medical-50 border-l-4 border-medical-900 p-8 md:p-10 lg:p-12 rounded-r-lg mb-12 md:mb-16">
          <div className="flex items-start gap-3 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl">⭐</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-medical-900">
              Slutsats
            </h2>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              Om du märker att:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-medical-700">
              <li>benan blivit bredare</li>
              <li>du tappar mer i duschen</li>
              <li>håret känns tunnare framme vid tinningarna</li>
            </ul>
            <p>
              …då är en Hair Growth Roll-on en enkel och logisk rutin att börja med.
            </p>
          </div>
        </section>

        {/* How to Order Section */}
        <section className="bg-white border border-medical-100 rounded-2xl p-8 md:p-10 lg:p-12 mb-12 md:mb-16 shadow-sm">
          <div className="bg-medical-50/50 rounded-xl p-6 md:p-8 border border-medical-100">
            <h4 className="text-xl md:text-2xl font-serif font-bold text-medical-900 mb-4 md:mb-6">
              Så Här Beställer Du
            </h4>
            <p className="text-gray-700 mb-4 md:mb-5 text-base md:text-lg">
              Om du vill prova Lumina från Hairscan med vårt specialerbjudande, följ dessa steg:
            </p>
            <ol className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg list-decimal list-inside ml-2 marker:text-medical-900 marker:font-semibold">
              <li>Klicka på knappen nedan för att se paketen</li>
              <li>Välj din lösning (3-flaskors paketet rekommenderas för bästa resultat)</li>
              <li>Fyll i din leveransinformation</li>
              <li>Få hem ditt paket smidigt och enkelt</li>
            </ol>
            <p className="text-gray-600 mt-6 md:mt-8 text-sm md:text-base italic">
              Din order skickas inom 24 timmar och levereras direkt till din dörr eller brevlåda.
            </p>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="bg-gradient-to-br from-medical-900 via-[#1a3b5c] to-medical-900 text-white rounded-2xl p-8 md:p-12 lg:p-16 mb-12 md:mb-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6 tracking-wide">
              BEGRÄNSAT ERBJUDANDE
            </h3>
            <p className="text-lg md:text-xl mb-8 md:mb-10 text-medical-100 max-w-2xl mx-auto leading-relaxed">
              Just nu får du upp till <span className="font-bold text-white">50% RABATT</span> på våra startpaket.
              Gäller så långt lagret räcker.
            </p>

            <button
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
              className="bg-white text-medical-900 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold hover:bg-medical-50 transition-all text-lg md:text-xl transform hover:scale-105 shadow-lg hover:shadow-xl font-serif"
            >
              Se Erbjudandet Här
            </button>

            <p className="mt-6 text-sm text-medical-200 opacity-80">
              30 dagars nöjd-kund-garanti • Fri frakt över 500 kr
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HairGrowthRollOn;

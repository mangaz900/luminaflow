import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const HairGrowthRollOn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-medical-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Tillbaka</span>
        </button>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-medical-900 mb-6 leading-tight">
            5 Anledningar Varför Allt Fler Kvinnor Över 40 Använder En Hair Growth Roll-on – Och Varför Du Kanske Borde Testa Det Själv
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            När håret börjar bli tunnare efter 40 är det lätt att känna sig ensam.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            Men du skulle bli förvånad över hur vanligt det faktiskt är — och hur många kvinnor som numera använder ett enkelt roll-on serum i hårbotten för att få igång håret igen.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 font-medium">
            Här är de 5 vanligaste anledningarna kvinnor nämner:
          </p>
        </header>

        {/* Main Content - 5 Points */}
        <div className="space-y-12 md:space-y-16 mb-16">
          {/* Point 1 */}
          <section>
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-900 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">
                  Det första som händer är att håravfallet lugnar sig
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  De flesta kvinnor beskriver mindre hår i duschen redan efter ett par veckor.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Det är ofta det första tecknet på att hårbotten börjar må bättre.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En roll-on funkar eftersom den jobbar direkt där problemet börjar — i hårbotten, inte i själva hårstrået.
                </p>
              </div>
            </div>
          </section>

          {/* Point 2 */}
          <section>
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-900 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">
                  Den hjälper en stressad hårbotten att slappna av
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Efter 40 kan hårbotten bli:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>känsligare</li>
                  <li>torrare</li>
                  <li>stelare</li>
                  <li>sämre på att cirkulera näring</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Roll-onen ger en direkt stimulering i området där nya hårstrån bildas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Det gör att hårbotten känns:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>lugnare</li>
                  <li>mjukare</li>
                  <li>mindre irriterad</li>
                </ul>
                <p className="text-gray-700 leading-relaxed italic">
                  En del beskriver till och med en "varm, lätt känsla" efter användning.
                </p>
              </div>
            </div>
          </section>

          {/* Point 3 */}
          <section>
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-900 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">
                  Det kommer små nya hårstrån (babyhår)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Det här är det kvinnor 40–60 pratar mest om.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  När hårbotten blir mer aktiv och får bättre cirkulation kommer ofta:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">små korta strån vid tinningarna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">en fylligare hårfäste-linje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-medical-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">små "bebisstrån" längst fram</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Det är exakt denna effekt som får flest att fortsätta.
                </p>
              </div>
            </div>
          </section>

          {/* Point 4 */}
          <section>
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-900 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">
                  Den är superenkel att använda
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>Inga piller.</li>
                  <li>Inga blandningar.</li>
                  <li>Inget kladd.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Du rullar bara serumet direkt längs benan eller hårfästet, och den absorberas utan att håret blir fett.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Används på 5 sekunder.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Perfekt för kvinnor som har fullt upp.
                </p>
              </div>
            </div>
          </section>

          {/* Point 5 */}
          <section>
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-medical-900 text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-medical-900 mb-4">
                  Den funkar både om du redan tappar hår – och om du vill förebygga
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                  Den största styrkan är att den jobbar före problemet blir stort.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kvinnor använder den:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>när de redan märker tunnare hår</li>
                  <li>eller i förebyggande syfte</li>
                  <li>eller för att hålla hårbotten frisk efter 45</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Det är inte en "snabbfix", men en logisk rutin som håller hårbotten aktiv och frisk.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <section className="bg-medical-50 border-l-4 border-medical-900 p-8 md:p-10 rounded-r-lg mb-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl md:text-3xl font-bold text-medical-900">
              Slutsats
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Om du märker att:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
            <li>benan blivit bredare</li>
            <li>du tappar mer i duschen</li>
            <li>håret känns tunnare framme vid tinningarna</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            …då är en Hair Growth Roll-on en enkel och logisk rutin att börja med.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-white border-2 border-medical-200 rounded-xl p-8 md:p-10 text-center">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Många kvinnor över 40 börjar med 2 flaskor så de inte står utan.
          </p>
          <button
            onClick={() => navigate('/#pricing')}
            className="bg-medical-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-medical-800 transition-colors text-lg"
          >
            Klicka här och se om den funkar för dig också
          </button>
        </section>
      </article>
    </div>
  );
};

export default HairGrowthRollOn;


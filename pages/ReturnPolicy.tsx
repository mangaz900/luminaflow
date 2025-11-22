import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReturnPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-medical-900 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Tillbaka till startsidan</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-medical-900 mb-6">
            Returpolicy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4">1. Returrätt</h2>
              <p>
                Enligt svensk konsumentlagstiftning har du 14 dagars returrätt från det att du mottagit produkten. 
                Du har också rätt att ångra köpet inom 14 dagar utan att ange skäl.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">2. 90 dagars garanti</h2>
              <p>
                Utöver din lagstadgade returrätt erbjuder vi en 90 dagars nöjd-kund-garanti. 
                Om du inte är nöjd med produkten kan du returnera den inom 90 dagar för full återbetalning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">3. Villkor för retur</h2>
              <p>För att göra en retur måste produkten:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Vara i originalförpackning</li>
                <li>Vara oanvänd eller minimalt använd</li>
                <li>Innehålla alla originaldelar och tillbehör</li>
                <li>Återlämnas inom 14 dagar (eller 90 dagar för garanti)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">4. Så här returnerar du</h2>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>Kontakta oss på <a href="mailto:retur@lumina.se" className="text-medical-900 hover:underline">retur@lumina.se</a> eller via vårt kontaktformulär</li>
                <li>Vi skickar dig en returförfrågan med returinstruktioner</li>
                <li>Packa produkten säkert i originalförpackningen</li>
                <li>Skicka tillbaka produkten till oss</li>
                <li>Vi behandlar din retur och återbetalning inom 14 dagar</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">5. Returkostnader</h2>
              <p>
                Om produkten är defekt eller inte matchar din beställning betalar vi returkostnaderna. 
                Om du ångrar köpet ansvarar du för returkostnaderna, om inte annat anges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">6. Återbetalning</h2>
              <p>
                När vi har mottagit och kontrollerat den returnerade produkten kommer vi att återbetala 
                beloppet till samma betalningsmetod som användes vid köpet. Återbetalningen behandlas 
                vanligtvis inom 14 dagar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">7. Kontakt</h2>
              <p>
                För frågor om returer, kontakta oss på: 
                <a href="mailto:retur@lumina.se" className="text-medical-900 hover:underline"> retur@lumina.se</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;


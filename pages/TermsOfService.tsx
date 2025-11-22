import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
            Användarvillkor
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4">1. Acceptans av villkor</h2>
              <p>
                Genom att använda Lumina Haircare AB:s webbplats och tjänster godkänner du dessa användarvillkor. 
                Om du inte godkänner dessa villkor, vänligen använd inte vår webbplats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">2. Produkter och priser</h2>
              <p>
                Vi strävar efter att visa korrekt information om våra produkter, priser och tillgänglighet. 
                Vi förbehåller oss rätten att korrigera fel och ändra priser utan föregående meddelande. 
                Alla priser är angivna i svenska kronor (SEK) inklusive moms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">3. Beställningar och betalning</h2>
              <p>
                När du gör en beställning godkänner du att köpa produkten till det angivna priset. 
                Betalning sker via Stripe (kort eller Klarna). Din beställning är bindande när vi har bekräftat den.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">4. Leverans</h2>
              <p>
                Vi levererar till adresser i Sverige. Leveranstider varierar beroende på produkt och lagerstatus. 
                Vi är inte ansvariga för förseningar orsakade av tredje part (t.ex. fraktbolag).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">5. Returrätt</h2>
              <p>
                Du har 14 dagars returrätt enligt svensk konsumentlagstiftning. Produkten måste vara oanvänd 
                och i originalförpackning. Se vår <Link to="/returpolicy" className="text-medical-900 hover:underline">Returpolicy</Link> för mer information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">6. Garantier</h2>
              <p>
                Vi erbjuder 90 dagars nöjd-kund-garanti. Om du inte är nöjd med produkten kan du returnera den 
                inom 90 dagar för full återbetalning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">7. Ansvar</h2>
              <p>
                Lumina Haircare AB är inte ansvarig för indirekta skador eller förluster som uppstår från användning 
                av våra produkter. Vi ansvarar endast för direkta skador enligt svensk lag.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">8. Kontakt</h2>
              <p>
                För frågor om dessa användarvillkor, kontakta oss på: 
                <a href="mailto:info@lumina.se" className="text-medical-900 hover:underline"> info@lumina.se</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;


import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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
            Cookie Policy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4">1. Vad är cookies?</h2>
              <p>
                Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. 
                De hjälper webbplatsen att komma ihåg dina preferenser och förbättra din upplevelse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">2. Hur vi använder cookies</h2>
              <p>Vi använder cookies för att:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Komma ihåg dina preferenser och inställningar</li>
                <li>Förbättra webbplatsens funktionalitet</li>
                <li>Analysera trafik och användning (via anonymiserad data)</li>
                <li>Hantera varukorg och beställningar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">3. Typer av cookies vi använder</h2>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-medical-900 mb-2">Nödvändiga cookies</h3>
                  <p className="text-sm">
                    Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. 
                    De kan inte stängas av i våra system.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-medical-900 mb-2">Funktionella cookies</h3>
                  <p className="text-sm">
                    Dessa cookies möjliggör förbättrad funktionalitet och personalisering, 
                    såsom att komma ihåg dina val.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-medical-900 mb-2">Analytiska cookies</h3>
                  <p className="text-sm">
                    Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen 
                    genom att samla in och rapportera information anonymt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">4. Hantera cookies</h2>
              <p>
                Du kan hantera eller radera cookies genom dina webbläsarinställningar. 
                Observera att om du blockerar cookies kan vissa delar av webbplatsen inte fungera korrekt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">5. Tredjepartscookies</h2>
              <p>
                Vi använder tredjepartstjänster som Stripe för betalningar. Dessa tjänster kan använda cookies 
                enligt sina egna policyer. Vi rekommenderar att du läser deras integritetspolicyer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">6. Kontakt</h2>
              <p>
                Om du har frågor om vår användning av cookies, kontakta oss på: 
                <a href="mailto:privacy@lumina.se" className="text-medical-900 hover:underline"> privacy@lumina.se</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;


import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
            Integritetspolicy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4">1. Introduktion</h2>
              <p>
                Lumina Haircare AB ("vi", "oss", "vår") respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
                Denna integritetspolicy förklarar hur vi samlar in, använder, delar och skyddar dina personuppgifter när du använder vår webbplats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">2. Personuppgifter vi samlar in</h2>
              <p>Vi samlar in följande typer av personuppgifter:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Namn och kontaktinformation (e-postadress, telefonnummer, leveransadress)</li>
                <li>Betalningsinformation (hanteras säkert via Stripe)</li>
                <li>Beställningshistorik</li>
                <li>Kommunikation med oss (e-post, chatt)</li>
                <li>Teknisk information (IP-adress, webbläsartyp, enhetsinformation)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">3. Hur vi använder dina personuppgifter</h2>
              <p>Vi använder dina personuppgifter för att:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Bearbeta och leverera dina beställningar</li>
                <li>Hantera betalningar och fakturering</li>
                <li>Kommunisera med dig om din beställning</li>
                <li>Förbättra vår webbplats och service</li>
                <li>Skicka marknadsföringskommunikation (med ditt samtycke)</li>
                <li>Uppfylla juridiska skyldigheter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">4. Delning av personuppgifter</h2>
              <p>
                Vi delar dina personuppgifter med tredjepartstjänster som hjälper oss att driva vår verksamhet, 
                såsom betalningsprocessorer (Stripe), leverantörer och fraktbolag. Vi delar aldrig dina personuppgifter 
                med tredje part för marknadsföringssyften utan ditt uttryckliga samtycke.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">5. Dina rättigheter</h2>
              <p>Enligt GDPR har du rätt att:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Få tillgång till dina personuppgifter</li>
                <li>Rätta felaktiga uppgifter</li>
                <li>Begära radering av dina personuppgifter</li>
                <li>Begränsa behandlingen av dina personuppgifter</li>
                <li>Invända mot behandling</li>
                <li>Dataportabilitet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-medical-900 mb-4 mt-8">6. Kontakt</h2>
              <p>
                Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, 
                kontakta oss på: <a href="mailto:privacy@lumina.se" className="text-medical-900 hover:underline">privacy@lumina.se</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;


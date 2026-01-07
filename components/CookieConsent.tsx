import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Alltid aktiverad
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    // Kolla om användaren redan har gjort ett val
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Ladda sparade preferenser
      try {
        const savedPrefs = JSON.parse(consent);
        setPreferences(savedPrefs);

        // GDPR: Load tracking if user has previously consented
        if (savedPrefs.analytics) {
          import('../services/analytics').then(({ initGA4 }) => {
            initGA4();
            console.log('✅ Google Analytics laddad från sparad consent');
          });

          import('../services/tiktokPixel').then(({ initTikTokPixel }) => {
            initTikTokPixel();
            console.log('✅ TikTok Pixel laddad från sparad consent');
          });

          // Initialize Facebook Pixel
          import('../services/pixel').then(({ initPixel }) => {
            initPixel();
            console.log('✅ Facebook Pixel laddad från sparad consent');
          });
        }
      } catch (e) {
        // Om parsing misslyckas, visa banner igen
        setShowBanner(true);
      }
    }
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);

    // GDPR-compliant: Only load tracking scripts after user consent
    if (prefs.analytics) {
      // Dynamically import and initialize analytics
      import('../services/analytics').then(({ initGA4 }) => {
        initGA4();
        console.log('✅ Google Analytics aktiverad efter consent');
      });

      import('../services/tiktokPixel').then(({ initTikTokPixel }) => {
        initTikTokPixel();
        console.log('✅ TikTok Pixel aktiverad efter consent');
      });

      // Initialize Facebook Pixel
      import('../services/pixel').then(({ initPixel }) => {
        initPixel();
        console.log('✅ Facebook Pixel aktiverad efter consent');
      });
    } else {
      console.log('❌ Analytics cookies avvisade - ingen tracking laddas');
    }

    if (prefs.functional) {
      console.log('✅ Funktionella cookies aktiverade');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-medical-900 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-medical-900 mb-1 text-base">
                  Vi använder cookies 🍪
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  För att ge dig bästa möjliga upplevelse.
                  <a
                    href="/cookie-policy"
                    className="text-medical-900 hover:underline ml-1"
                  >
                    Läs mer
                  </a>
                </p>
              </div>

              <div className="flex flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-none px-8 py-3 bg-medical-900 text-white rounded-lg text-base font-bold hover:bg-medical-800 transition-colors shadow-lg"
                >
                  Acceptera
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Inställningar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-medical-900">
                  Cookie-inställningar
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm">
                Välj vilka typer av cookies du vill acceptera. Nödvändiga cookies kan inte inaktiveras
                eftersom de är nödvändiga för att webbplatsen ska fungera.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-medical-900">Nödvändiga cookies</h3>
                      <p className="text-xs text-gray-500">Alltid aktiverade</p>
                    </div>
                    <div className="w-12 h-6 bg-medical-900 rounded-full flex items-center justify-end px-1">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt.
                    De kan inte inaktiveras.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-medical-900">Funktionella cookies</h3>
                      <p className="text-xs text-gray-500">Förbättrar funktionalitet</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-medical-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-900"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dessa cookies möjliggör förbättrad funktionalitet och personalisering,
                    såsom att komma ihåg dina val.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-medical-900">Analytiska cookies</h3>
                      <p className="text-xs text-gray-500">Hjälper oss förbättra webbplatsen</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-medical-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-900"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen
                    genom att samla in och rapportera information anonymt.
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="mb-6 pt-4 border-t border-gray-200">
                <a
                  href="/cookie-policy"
                  className="text-sm text-medical-900 hover:underline"
                >
                  Läs mer i vår Cookie Policy →
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Avvisa alla
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-medical-900 text-white rounded-lg text-sm font-medium hover:bg-medical-800 transition-colors"
                >
                  Spara inställningar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;



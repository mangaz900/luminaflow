import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulera formulärskickning (här kan du lägga till riktig backend-integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Återställ status efter 5 sekunder
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-medical-900 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Tillbaka till startsidan</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
                Kontakta oss
              </h1>
              <p className="text-gray-600 text-lg">
                Har du frågor om våra produkter, beställningar eller behöver personlig rådgivning? 
                Vi är här för att hjälpa dig!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <Mail className="text-medical-900" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-medical-900 mb-1">E-post</h3>
                  <a href="mailto:info@lumina.se" className="text-gray-600 hover:text-medical-900 transition-colors">
                    info@lumina.se
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <Phone className="text-medical-900" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-medical-900 mb-1">Telefon</h3>
                  <a href="tel:+46812345678" className="text-gray-600 hover:text-medical-900 transition-colors">
                    +46 8 123 45 678
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mån-Fre: 09:00-17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <MapPin className="text-medical-900" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-medical-900 mb-1">Adress</h3>
                  <p className="text-gray-600">
                    Lumina Haircare AB<br />
                    Storgatan 123<br />
                    111 22 Stockholm<br />
                    Sverige
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medical-50 p-6 rounded-xl border border-medical-100">
              <h3 className="font-semibold text-medical-900 mb-2">Vanliga frågor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Många av dina frågor kan redan vara besvarade i vår FAQ-sektion.
              </p>
              <Link
                to="/#faq"
                className="text-medical-900 hover:text-medical-700 font-medium text-sm underline"
              >
                Besök vår FAQ →
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-medical-900 mb-6">
              Skicka oss ett meddelande
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                  placeholder="Ditt namn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                  placeholder="din@epost.se"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon (valfritt)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                  placeholder="+46 70 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Ämne *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                >
                  <option value="">Välj ämne</option>
                  <option value="product">Produktfrågor</option>
                  <option value="order">Beställning & Leverans</option>
                  <option value="return">Retur & Återbetalning</option>
                  <option value="support">Teknisk support</option>
                  <option value="other">Övrigt</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors resize-none"
                  placeholder="Berätta för oss hur vi kan hjälpa dig..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Tack för ditt meddelande! Vi återkommer så snart som möjligt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Ett fel uppstod. Försök igen eller kontakta oss direkt via e-post.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-medical-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-medical-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Skickar...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Skicka meddelande</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;



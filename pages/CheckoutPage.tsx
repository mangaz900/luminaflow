import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  // Redirect om varukorg är tom
  useEffect(() => {
    if (items.length === 0) {
      navigate('/');
    }
  }, [items, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customer: formData,
          total: getTotalPrice(),
        }),
      });

      const data = await response.json();

      if (!data.success || !data.url) {
        throw new Error(data.error || 'Kunde inte skapa checkout');
      }

      // Redirecta till Stripe Checkout (hosted page)
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel');
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  const total = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-medical-900 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Tillbaka</span>
          </button>
          <div className="flex items-center gap-3">
            <Lock size={24} className="text-medical-900" />
            <h1 className="text-3xl font-bold text-medical-900">Kassan</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Checkout Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">
                  {error}
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-medical-900 mb-6">Leveransinformation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Förnamn *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Efternamn *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="E-post *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefonnummer *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Gatuadress *"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postnummer *"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Stad *"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-[#0A2A4A] transition-all shadow-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Förbereder betalning...
                    </>
                  ) : (
                    <>
                      <Lock size={20} />
                      Fortsätt till betalning
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                  <Lock size={12} />
                  Säker betalning via Stripe
                </p>
              </form>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-medical-900 mb-6">Din beställning</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start pb-4 border-b border-gray-200">
                    <div>
                      <p className="font-medium text-medical-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                      <p className="text-sm text-gray-500 mt-1">Antal: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-medical-900">
                      {item.price} kr
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Delsumma</span>
                  <span>{getTotalPrice()} kr</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frakt</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-medical-900 pt-4 border-t border-gray-200">
                  <span>Totalt</span>
                  <span>{total} kr</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <p className="font-medium mb-2">✓ 90 dagars garanti</p>
                <p className="font-medium">✓ Säker betalning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

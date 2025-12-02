import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Lock, CreditCard } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../contexts/CartContext';

// Ladda Stripe publishable key
let stripePromise: Promise<any> | null = null;

const getStripeKey = async () => {
  if (!stripePromise) {
    const response = await fetch('/api/stripe-key');
    const data = await response.json();
    stripePromise = loadStripe(data.publishableKey);
  }
  return stripePromise;
};

// Payment Form Component
const PaymentForm: React.FC<{
  formData: any;
  items: any[];
  total: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}> = ({ formData, items, total, onSuccess, onError, isLoading, setIsLoading }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    onError('');

    try {
      // Skapa PaymentIntent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customer: formData,
          total,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Kunde inte skapa betalning');
      }

      if (formData.paymentMethod === 'klarna') {
        // För Klarna - använd confirmKlarnaPayment
        const { error: klarnaError } = await stripe.confirmKlarnaPayment(
          data.clientSecret,
          {
            payment_method: {
              billing_details: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                address: {
                  line1: formData.address,
                  city: formData.city,
                  postal_code: formData.postalCode,
                  country: 'SE',
                },
              },
            },
          }
        );

        if (klarnaError) {
          throw new Error(klarnaError.message);
        }
      } else {
        // För kort - använd CardElement
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          throw new Error('Kortformulär hittades inte');
        }

        const { error: cardError, paymentIntent } = await stripe.confirmCardPayment(
          data.clientSecret,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                address: {
                  line1: formData.address,
                  city: formData.city,
                  postal_code: formData.postalCode,
                  country: 'SE',
                },
              },
            },
          }
        );

        if (cardError) {
          throw new Error(cardError.message);
        }

        if (paymentIntent?.status === 'succeeded') {
          onSuccess();
        }
      }
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Något gick fel vid betalning');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.paymentMethod === 'stripe' && (
        <div className="p-4 border border-gray-300 rounded-lg">
          <label className="block text-sm font-medium text-medical-900 mb-2">
            Kortinformation
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      )}

      {formData.paymentMethod === 'klarna' && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            Du kommer att omdirigeras till Klarna för att slutföra betalningen.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || !stripe}
        className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-[#0A2A4A] transition-all shadow-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <CreditCard size={20} />
        <span>{isLoading ? 'Bearbetar...' : `Betala ${total} kr`}</span>
      </button>
    </form>
  );
};

const Checkout: React.FC = () => {
  const { 
    items, 
    isCheckoutOpen, 
    closeCheckout, 
    getTotalPrice,
    clearCart 
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: 'klarna' as 'klarna' | 'stripe'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null);

  useEffect(() => {
    if (isCheckoutOpen) {
      getStripeKey().then(setStripePromise);
    }
  }, [isCheckoutOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccess = () => {
    clearCart();
    closeCheckout();
    // Visa success-meddelande eller redirect
    alert('Betalning lyckades! Tack för din beställning.');
  };

  if (!isCheckoutOpen) return null;

  const shippingCost = 0;
  const total = getTotalPrice() + shippingCost;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCheckout}
      />
      
      {/* Checkout Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <Lock size={24} className="text-medical-900" />
                <h2 className="text-2xl font-bold text-medical-900">Kassan</h2>
              </div>
              <button
                onClick={closeCheckout}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Left: Order Summary */}
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold text-medical-900 mb-4">Din beställning</h3>
                
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

              {/* Right: Checkout Form */}
              <div className="order-1 md:order-2">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                    {error}
                  </div>
                )}
                <h3 className="text-xl font-bold text-medical-900 mb-4">Leveransinformation</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Förnamn *"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Efternamn *"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="E-post *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer *"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Gatuadress *"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postnummer *"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="Stad *"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-medical-900 mb-2">
                      Betalningsmetod *
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-500"
                    >
                      <option value="klarna">Klarna</option>
                      <option value="stripe">Kort</option>
                    </select>
                  </div>
                </div>

                {/* Stripe Elements */}
                {stripePromise && (
                  <Elements stripe={stripePromise}>
                    <PaymentForm
                      formData={formData}
                      items={items}
                      total={total}
                      onSuccess={handleSuccess}
                      onError={setError}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  </Elements>
                )}

                <button
                  type="button"
                  onClick={closeCheckout}
                  className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <ArrowLeft size={16} />
                  <span>Tillbaka till varukorgen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

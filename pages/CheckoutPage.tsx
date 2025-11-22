import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../contexts/CartContext';

// Ladda Stripe publishable key
let stripePromise: Promise<any> | null = null;

const getStripeKey = async () => {
  if (!stripePromise) {
    try {
      // Read from Vite environment variables (VITE_ prefix required for browser access)
      const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
      
      if (!publishableKey) {
        throw new Error('Stripe Publishable Key saknas. Kontrollera Vercel Environment Variables (VITE_STRIPE_PUBLISHABLE_KEY).');
      }
      
      stripePromise = loadStripe(publishableKey);
    } catch (error) {
      console.error('Error loading Stripe:', error);
      throw error;
    }
  }
  return stripePromise;
};

// Payment Form Wrapper - skapar PaymentIntent och laddar Elements
const PaymentFormWrapper: React.FC<{
  formData: any;
  items: any[];
  total: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  stripePromise: Promise<any>;
}> = ({ formData, items, total, onSuccess, onError, isLoading, setIsLoading, stripePromise }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Skapa PaymentIntent när komponenten laddas
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items,
            customer: formData,
            total,
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.clientSecret) {
          throw new Error(data.error || 'Kunde inte skapa betalning');
        }

        setClientSecret(data.clientSecret);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Kunde inte skapa betalning';
        setError(errorMsg);
        onError(errorMsg);
      }
    };

    createPaymentIntent();
  }, [items, formData, total, onError]);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
        {error}
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-600">
        Förbereder betalning...
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm
        formData={formData}
        items={items}
        total={total}
        onSuccess={onSuccess}
        onError={onError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Elements>
  );
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
      // Bekräfta betalning med Payment Element
      const { error: submitError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-success`,
          payment_method_data: {
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
        },
        redirect: 'if_required',
      });

      if (submitError) {
        throw new Error(submitError.message);
      }

      // Om betalning lyckades direkt (kort)
      if (paymentIntent?.status === 'succeeded') {
        onSuccess();
      } else if (paymentIntent?.status === 'requires_action') {
        // Klarna eller 3D Secure - redirectar automatiskt
        // Stripe hanterar redirecten automatiskt
      }
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Något gick fel vid betalning');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border border-gray-300 rounded-lg bg-white">
        <label className="block text-sm font-medium text-medical-900 mb-3">
          Betalningsmetod
        </label>
        <PaymentElement
          options={{
            layout: 'tabs',
            paymentMethodOrder: ['klarna', 'card'],
            fields: {
              billingDetails: {
                name: 'never',
                email: 'never',
                phone: 'never',
                address: 'never',
              },
            },
          }}
        />
        <p className="text-xs text-gray-500 mt-3">
          Välj Klarna för betala senare eller delbetala, eller kort för direktbetalning.
        </p>
      </div>

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

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    items, 
    getTotalPrice,
    clearCart 
  } = useCart();

  // Redirect om varukorg är tom
  useEffect(() => {
    if (items.length === 0) {
      navigate('/');
    }
  }, [items, navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: 'klarna' as 'klarna' | 'stripe' // Används inte längre, Payment Element hanterar valet
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null);

  useEffect(() => {
    getStripeKey().then((stripe) => {
      if (!stripe) {
        setError('Stripe Publishable Key saknas. Kontrollera server/.env filen.');
      }
      setStripePromise(stripe);
    }).catch((err) => {
      setError('Kunde inte ladda Stripe. Kontrollera att backend-servern körs.');
      console.error('Stripe load error:', err);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccess = () => {
    clearCart();
    navigate('/order-success');
  };

  if (items.length === 0) {
    return null;
  }

  const shippingCost = 0;
  const total = getTotalPrice() + shippingCost;

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

                </div>

              {/* Stripe Elements */}
              {error && error.includes('Stripe') && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-sm mb-4">
                  {error}
                </div>
              )}
              {stripePromise ? (
                <PaymentFormWrapper
                  formData={formData}
                  items={items}
                  total={total}
                  onSuccess={handleSuccess}
                  onError={setError}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  stripePromise={stripePromise}
                />
              ) : (
                <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-600">
                  Laddar betalningsformulär...
                </div>
              )}
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


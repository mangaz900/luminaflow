import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order_number');
  const sessionId = searchParams.get('session_id');
  const paymentIntent = searchParams.get('payment_intent');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-md w-full text-center">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-medical-900 mb-2">
          Tack för din beställning!
        </h1>
        <p className="text-gray-600 mb-6">
          Din betalning har bekräftats och ordern är på väg.
        </p>
        {orderNumber && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Ordernummer</p>
            <p className="text-lg font-bold text-medical-900">#{orderNumber}</p>
          </div>
        )}
        <p className="text-sm text-gray-500 mb-6">
          Du kommer att få en bekräftelse via e-post inom kort.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-medical-900 text-white px-6 py-3 rounded-full hover:bg-[#0A2A4A] transition-all"
        >
          <Home size={20} />
          <span>Tillbaka till startsidan</span>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;


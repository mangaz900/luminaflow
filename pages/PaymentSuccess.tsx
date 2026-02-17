import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Loader2, Package, Mail } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [paymentStatus, setPaymentStatus] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const orderId = searchParams.get('order_id');

    useEffect(() => {
        const verifyPayment = async () => {
            if (!orderId) {
                setError('Ingen order-ID hittades');
                setLoading(false);
                return;
            }

            try {
                // Get payment ID from URL (Mollie adds it)
                const paymentId = searchParams.get('payment_id') || searchParams.get('id');

                if (!paymentId) {
                    // If no payment ID, assume success (webhook will handle verification)
                    setPaymentStatus({ isPaid: true });
                    setLoading(false);
                    return;
                }

                // Verify payment status
                const response = await fetch(`/api/mollie-check-payment?payment_id=${paymentId}`);
                const data = await response.json();

                setPaymentStatus(data);
                setLoading(false);

            } catch (err) {
                console.error('Error verifying payment:', err);
                setError('Kunde inte verifiera betalningen');
                setLoading(false);
            }
        };

        verifyPayment();
    }, [orderId, searchParams]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-medical-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-medical-900 mx-auto mb-4" />
                    <p className="text-gray-600">Verifierar din betalning...</p>
                </div>
            </div>
        );
    }

    if (error || (paymentStatus && !paymentStatus.isPaid)) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Betalningen misslyckades</h1>
                    <p className="text-gray-600 mb-6">{error || 'Din betalning kunde inte genomföras'}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-medical-900 text-white px-6 py-3 rounded-full hover:bg-[#0A2A4A] transition-colors"
                    >
                        Tillbaka till startsidan
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Tack för din beställning!</h1>
                    <p className="text-gray-600">Din betalning har genomförts</p>
                    {orderId && (
                        <p className="text-sm text-gray-500 mt-2">Order-ID: {orderId}</p>
                    )}
                </div>

                {/* Order Confirmation */}
                <div className="bg-medical-50 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                        <Package className="w-6 h-6 text-medical-900 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Din order är på väg!</h3>
                            <p className="text-sm text-gray-600">
                                Vi börjar packa din order direkt. Du får ett mejl med spårningsinformation inom 1-2 arbetsdagar.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-medical-900 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Orderbekräftelse skickad</h3>
                            <p className="text-sm text-gray-600">
                                En orderbekräftelse har skickats till din e-post.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Digital Bonuses */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">🎁 Dina digitala bonusar</h3>
                    <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-1">📖 Hårväxtguiden (PDF)</h4>
                            <p className="text-sm text-gray-600 mb-2">Komplett guide för optimal hårväxt</p>
                            <a
                                href="/bonuses/harvaxtguiden.pdf"
                                className="text-medical-900 text-sm font-medium hover:underline"
                                download
                            >
                                Ladda ner →
                            </a>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-1">🎥 Instruktionsvideo</h4>
                            <p className="text-sm text-gray-600 mb-2">Steg-för-steg guide för bästa resultat</p>
                            <a
                                href="/bonuses/instruktionsvideo"
                                className="text-medical-900 text-sm font-medium hover:underline"
                            >
                                Se video →
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-medical-900 text-white px-8 py-3 rounded-full hover:bg-[#0A2A4A] transition-colors font-medium"
                    >
                        Tillbaka till startsidan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;

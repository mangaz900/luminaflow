import React, { useState } from 'react';
import { Loader2, CreditCard, Smartphone, ShoppingBag } from 'lucide-react';

interface MollieCheckoutProps {
    items: Array<{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }>;
    totalPrice: number;
    onClose: () => void;
}

export const MollieCheckout: React.FC<MollieCheckoutProps> = ({ items, totalPrice, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        try {
            setLoading(true);
            setError(null);

            // Create payment with Mollie
            const response = await fetch('/api/mollie-create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: items.map(item => ({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create payment');
            }

            const data = await response.json();

            if (data.checkoutUrl) {
                // Redirect to Mollie checkout
                window.location.href = data.checkoutUrl;
            } else {
                throw new Error('No checkout URL received');
            }

        } catch (err) {
            console.error('Checkout error:', err);
            setError(err instanceof Error ? err.message : 'Failed to start checkout');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    disabled={loading}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Välj betalmetod</h2>
                    <p className="text-gray-600">Säker betalning via Mollie</p>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Totalt att betala:</span>
                        <span className="text-2xl font-bold text-medical-900">{totalPrice} kr</span>
                    </div>
                    <p className="text-sm text-gray-500">Inkl. moms & fri frakt</p>
                </div>

                {/* Payment Methods Info */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-700">Swish</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-gray-700">Kort (Visa, Mastercard, Amex)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                        <ShoppingBag className="w-5 h-5 text-pink-600" />
                        <span className="text-sm text-gray-700">Klarna - Betala senare</span>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="text-red-800 text-sm">{error}</p>
                    </div>
                )}

                {/* Checkout Button */}
                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-[#0A2A4A] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Förbereder betalning...</span>
                        </>
                    ) : (
                        <span>Fortsätt till betalning</span>
                    )}
                </button>

                {/* Security Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 Säker betalning krypterad med SSL
                </p>
            </div>
        </div>
    );
};

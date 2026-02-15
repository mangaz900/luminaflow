import React, { useState, useEffect } from 'react';

interface KustomCheckoutProps {
    items: Array<{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }>;
    onClose: () => void;
}

export const KustomCheckout: React.FC<KustomCheckoutProps> = ({ items, onClose }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [checkoutHtml, setCheckoutHtml] = useState<string>('');

    useEffect(() => {
        createKustomSession();
    }, []);

    const createKustomSession = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('/api/kustom-create-session', {
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
                throw new Error('Failed to create checkout session');
            }

            const data = await response.json();

            if (data.htmlSnippet) {
                setCheckoutHtml(data.htmlSnippet);
            } else {
                throw new Error('No checkout HTML received');
            }

            setLoading(false);
        } catch (err) {
            console.error('Checkout error:', err);
            setError(err instanceof Error ? err.message : 'Failed to load checkout');
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-6">
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-900 mb-4"></div>
                            <p className="text-gray-600">Laddar kassa...</p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <p className="text-red-800 font-medium">Ett fel uppstod</p>
                            <p className="text-red-600 text-sm mt-1">{error}</p>
                            <button
                                onClick={createKustomSession}
                                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Försök igen
                            </button>
                        </div>
                    )}

                    {!loading && !error && checkoutHtml && (
                        <div
                            dangerouslySetInnerHTML={{ __html: checkoutHtml }}
                            className="kustom-checkout-container"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const { 
    items, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    getTotalPrice,
    getTotalItems 
  } = useCart();

  const handleGoToCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className={`
        fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} className="text-medical-900" />
              <h2 className="text-xl font-bold text-medical-900">
                Varukorg ({getTotalItems()})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">Din varukorg är tom</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-medical-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-red-100 rounded transition-colors"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus size={16} className="text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus size={16} className="text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-medical-900">
                          {item.price} kr
                        </p>
                        {item.originalPrice > item.price && (
                          <p className="text-xs text-gray-400 line-through">
                            {item.originalPrice} kr
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium text-gray-700">Totalt:</span>
                <span className="font-bold text-2xl text-medical-900">
                  {getTotalPrice()} kr
                </span>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Fri frakt ingår
              </p>
              <button
                onClick={handleGoToCheckout}
                className="w-full bg-medical-900 text-white py-4 rounded-full text-lg font-medium hover:bg-[#0A2A4A] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Gå till kassan</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={closeCart}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
              >
                Fortsätt handla
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;


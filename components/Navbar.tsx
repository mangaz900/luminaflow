import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20">
          
          {/* Left: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <a href="#faq" className="text-dark-900 hover:text-gold-600 transition-colors">FAQ</a>
            <a href="#anvandning" className="text-dark-900 hover:text-gold-600 transition-colors">Användning</a>
            <a href="#ingredienser" className="text-dark-900 hover:text-gold-600 transition-colors">Ingredienser</a>
            <a href="#recensioner" className="text-dark-900 hover:text-gold-600 transition-colors">Recensioner</a>
            <a href="#ai-expert" className="text-dark-900 hover:text-gold-600 transition-colors">AI Expert</a>
          </div>

          {/* Mobile Menu Button (Left) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-dark-900">Lumina.</span>
          </div>

          {/* Right: Shopping Cart */}
          <div className="flex items-center justify-end flex-1">
            <a 
              href="#erbjudande" 
              onClick={(e) => { e.preventDefault(); openCart(); }}
              className="bg-dark-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 relative"
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">Köp nu</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">FAQ</a>
            <a href="#anvandning" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Användning</a>
            <a href="#ingredienser" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Ingredienser</a>
            <a href="#recensioner" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Recensioner</a>
            <a 
              href="#erbjudande" 
              onClick={(e) => { e.preventDefault(); setIsOpen(false); openCart(); }} 
              className="w-full mt-4 bg-dark-900 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 relative"
            >
              <ShoppingBag size={18} />
              <span>Köp nu</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
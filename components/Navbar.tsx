import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Hantera scrollning efter navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
        if (element) {
          const yOffset = -80; // Offset för fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        // Rensa state så det inte scrollar igen vid refresh
        navigate(location.pathname, { replace: true, state: {} });
      }, 150);
    }
  }, [location, navigate]);

  const handleNavClick = (hash: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);
    if (location.pathname !== '/') {
      // Navigera till startsidan med hash i state
      navigate('/', { state: { scrollTo: hash } });
    } else {
      // Om vi redan är på startsidan, scrolla direkt
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -80; // Offset för fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20">
          
          {/* Left: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <button onClick={() => { setIsOpen(false); navigate('/5-anledningar-hair-growth-roll-on'); }} className="text-dark-900 hover:text-gold-600 transition-colors">5 Anledningar</button>
            <button onClick={() => handleNavClick('#faq')} className="text-dark-900 hover:text-gold-600 transition-colors">FAQ</button>
            <button onClick={() => handleNavClick('#anvandning')} className="text-dark-900 hover:text-gold-600 transition-colors">Användning</button>
            <button onClick={() => handleNavClick('#ingredienser')} className="text-dark-900 hover:text-gold-600 transition-colors">Ingredienser</button>
            <button onClick={() => handleNavClick('#recensioner')} className="text-dark-900 hover:text-gold-600 transition-colors">Recensioner</button>
            <button onClick={() => handleNavClick('#ai-expert')} className="text-dark-900 hover:text-gold-600 transition-colors">AI Expert</button>
          </div>

          {/* Mobile Menu Button (Left) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 z-10">
            <button
              onClick={() => navigate('/')}
              className="font-serif text-xl sm:text-2xl font-bold text-dark-900 hover:text-medical-900 transition-colors cursor-pointer"
            >
              Lumina.
            </button>
          </div>

          {/* Right: Shopping Cart */}
          <div className="flex items-center justify-end flex-1">
            <button 
              onClick={openCart}
              className="bg-dark-900 text-white p-3 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center relative"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <button onClick={() => { setIsOpen(false); navigate('/5-anledningar-hair-growth-roll-on'); }} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">5 Anledningar</button>
            <button onClick={() => handleNavClick('#faq')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">FAQ</button>
            <button onClick={() => handleNavClick('#anvandning')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Användning</button>
            <button onClick={() => handleNavClick('#ingredienser')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Ingredienser</button>
            <button onClick={() => handleNavClick('#recensioner')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">Recensioner</button>
            <button onClick={() => handleNavClick('#ai-expert')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 rounded-md">AI Expert</button>
            <button 
              onClick={() => { setIsOpen(false); openCart(); }} 
              className="mt-4 bg-dark-900 text-white p-3 rounded-full flex items-center justify-center relative"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
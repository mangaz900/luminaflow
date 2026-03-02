import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Hantera scrollning efter navigation
  useEffect(() => {
    const isV2 = location.pathname === '/p2';
    const basePath = isV2 ? '/p2' : '/';

    if (location.pathname === basePath && location.state?.scrollTo) {
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

    const isV2 = location.pathname === '/p2';
    const basePath = isV2 ? '/p2' : '/';

    if (location.pathname !== basePath) {
      // Navigera till rätt version med hash i state
      navigate(basePath, { state: { scrollTo: hash } });
    } else {
      // Om vi redan är på rätt version, scrolla direkt
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
    <nav className="fixed w-full z-50 bg-[#F4EFEA]/95 backdrop-blur-md border-b border-[#DDD4CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20">

          {/* Left: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <button onClick={() => handleNavClick('#anvandning')} className="text-[#3B2E28] hover:text-[#B8986A] text-sm transition-colors">Användning</button>
            <button onClick={() => handleNavClick('#recensioner')} className="text-[#3B2E28] hover:text-[#B8986A] text-sm transition-colors">Recensioner</button>
            <button onClick={() => handleNavClick('#faq')} className="text-[#3B2E28] hover:text-[#B8986A] text-sm transition-colors">FAQ</button>
            <Link to="/kontakt" className="text-[#3B2E28] hover:text-[#B8986A] text-sm transition-colors">Kontakta oss</Link>
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
              onClick={() => navigate(location.pathname === '/p2' ? '/p2' : '/')}
              className="font-serif text-xl sm:text-2xl font-bold text-[#3B2E28] hover:text-[#B8986A] transition-colors cursor-pointer"
            >
              LuminaFlow
            </button>
          </div>

          {/* Right: Shopping Cart */}
          <div className="flex items-center justify-end flex-1">
            <button
              onClick={openCart}
              className="bg-[#3B2E28] text-[#F4EFEA] p-3 rounded-full hover:bg-[#B8986A] transition-all flex items-center justify-center relative"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B8986A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F4EFEA] border-t border-[#DDD4CB] absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button onClick={() => handleNavClick('#anvandning')} className="w-full text-left block px-3 py-2 text-base font-medium text-[#3B2E28] hover:text-[#B8986A] rounded-md">Användning</button>
            <button onClick={() => handleNavClick('#recensioner')} className="w-full text-left block px-3 py-2 text-base font-medium text-[#3B2E28] hover:text-[#B8986A] rounded-md">Recensioner</button>
            <button onClick={() => handleNavClick('#faq')} className="w-full text-left block px-3 py-2 text-base font-medium text-[#3B2E28] hover:text-[#B8986A] rounded-md">FAQ</button>
            <Link to="/kontakt" onClick={() => setIsOpen(false)} className="w-full text-left block px-3 py-2 text-base font-medium text-[#3B2E28] hover:text-[#B8986A] rounded-md">Kontakta oss</Link>
            <button
              onClick={() => { setIsOpen(false); openCart(); }}
              className="mt-4 w-full bg-[#3B2E28] text-[#F4EFEA] py-3 px-6 rounded-full font-semibold hover:bg-[#B8986A] transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Varukorg
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
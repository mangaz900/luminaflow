import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
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
    <footer className="bg-dark-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <button
              onClick={() => navigate('/')}
              className="font-serif text-2xl font-bold text-white hover:text-gold-400 transition-colors cursor-pointer text-left"
            >
              Lumina.
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vi skapar premium hårvård för den moderna människan. Veganskt, hållbart och effektivt.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Alla produkter</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Presentkort</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Paketerbjudanden</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Hjälp</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => handleNavClick('#faq')} className="hover:text-gold-400 transition-colors text-left">Kontakta oss</button></li>
              <li><Link to="/returpolicy" className="hover:text-gold-400 transition-colors">Frakt & Retur</Link></li>
              <li><button onClick={() => handleNavClick('#faq')} className="hover:text-gold-400 transition-colors text-left">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Följ oss</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Lumina Haircare AB. Alla rättigheter reserverade.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/integritetspolicy" className="hover:text-gold-400 transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/anvandarvillkor" className="hover:text-gold-400 transition-colors">
                Användarvillkor
              </Link>
              <Link to="/cookie-policy" className="hover:text-gold-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/returpolicy" className="hover:text-gold-400 transition-colors">
                Returpolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
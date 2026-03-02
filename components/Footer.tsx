import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
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
    <footer className="bg-[#3B2E28] text-[#F4EFEA] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="space-y-6">
            <button
              onClick={() => navigate('/')}
              className="font-serif text-3xl font-bold text-white hover:text-[#B8986A] transition-colors cursor-pointer text-left"
            >
              LuminaFlow
            </button>
            <p className="text-[#DDD4CB] text-sm leading-relaxed max-w-sm">
              Teknik utvecklad för synligt jämnare hud hemma. Behandla celluliter på djupet, inte bara på ytan.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6 text-white">Produkter</h4>
            <ul className="space-y-4 text-[#DDD4CB] text-sm">
              <li><button onClick={() => handleNavClick('#order')} className="hover:text-[#B8986A] transition-colors">LuminaFlow 360</button></li>
              <li><button onClick={() => handleNavClick('#reviews')} className="hover:text-[#B8986A] transition-colors">Recensioner</button></li>
              <li><button onClick={() => handleNavClick('#solution')} className="hover:text-[#B8986A] transition-colors">Men hur funkar det?</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6 text-white">Hjälp</h4>
            <ul className="space-y-4 text-[#DDD4CB] text-sm">
              <li><a href="mailto:kontakt@luminaflow.se" className="hover:text-[#B8986A] transition-colors">Kontakta oss</a></li>
              <li><button onClick={() => handleNavClick('#faq')} className="hover:text-[#B8986A] transition-colors text-left">Vanliga frågor</button></li>
              <li><Link to="/returpolicy" className="hover:text-[#B8986A] transition-colors">Frakt & Retur</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#DDD4CB] text-xs">
            <p>&copy; {new Date().getFullYear()} LuminaFlow. Alla rättigheter reserverade.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/integritetspolicy" className="hover:text-[#B8986A] transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/anvandarvillkor" className="hover:text-[#B8986A] transition-colors">
                Användarvillkor
              </Link>
              <Link to="/cookie-policy" className="hover:text-[#B8986A] transition-colors">
                Cookiepolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
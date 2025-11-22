import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">Lumina.</h3>
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
              <li><a href="#" className="hover:text-gold-400 transition-colors">Kontakta oss</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Frakt & Retur</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">FAQ</a></li>
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

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumina Haircare AB. Alla rättigheter reserverade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
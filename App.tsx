import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Usage from './components/Usage';
import UserGallery from './components/UserGallery';
import Ingredients from './components/Ingredients';
import RollOnApplicator from './components/RollOnApplicator';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import ComparisonTable from './components/ComparisonTable';
import AIConsultant from './components/AIConsultant';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import OrderSuccess from './components/OrderSuccess';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ReturnPolicy from './pages/ReturnPolicy';

const HomePage: React.FC = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <UserGallery />
        <ProblemSolution />
        <Benefits />
        <Ingredients />
        <RollOnApplicator />
        <ComparisonTable /> 
        <Usage />
        <Timeline />
        <Pricing />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  // Scroll to top on initial load
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-dark-900 antialiased selection:bg-medical-100 selection:text-medical-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
          <Route path="/anvandarvillkor" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/returpolicy" element={<ReturnPolicy />} />
        </Routes>
        <ShoppingCart />
        <CookieConsent />
      </div>
    </CartProvider>
  );
};

export default App;
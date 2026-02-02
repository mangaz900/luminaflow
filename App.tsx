import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import UrgencySection from './components/UrgencySection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import ContactPage from './pages/ContactPage';
import HairGrowthRollOn from './pages/listicles/HairGrowthRollOn';
import Women55Plus from './pages/listicles/Women55Plus';
import Women55PlusV2 from './pages/listicles/Women55PlusV2';
import Women55PlusV3 from './pages/listicles/Women55PlusV3';
import Women55PlusV4 from './pages/listicles/Women55PlusV4';
import Women55PlusV5 from './pages/listicles/Women55PlusV5';
import Women55PlusV6 from './pages/listicles/Women55PlusV6';
import FiveReasons65 from './pages/listicles/FiveReasons65';
import HomePageV2 from './pages/HomePageV2';
import { initPixel, pageView } from './services/pixel';
import { initGA4, trackPageView } from './services/analytics';

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
        <UrgencySection />
        <Pricing />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  // Prevent scroll restoration och scrolla alltid till top vid mount/refresh
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scrolla alltid till top vid mount (inklusive refresh)
    window.scrollTo(0, 0);

    // Tracking initialization moved to CookieConsent for GDPR compliance
  }, []); // Endast vid mount, inte vid varje location change

  // Track PageView on route change
  useEffect(() => {
    pageView();
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-dark-900 antialiased selection:bg-medical-100 selection:text-medical-900 overflow-x-hidden">
        {!['/kvinnor-55-plus-lumina', '/kvinnor-55-plus-v2', '/kvinnor-55-plus-v3', '/kvinnor-55-plus-v4', '/kvinnor-55-plus-v5', '/kvinnor-55-plus-v6', '/5-anledningar-65', '/p2'].includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
          <Route path="/anvandarvillkor" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/returpolicy" element={<ReturnPolicy />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/5-anledningar-hair-growth-roll-on" element={<HairGrowthRollOn />} />
          <Route path="/kvinnor-55-plus-lumina" element={<Women55Plus />} />
          <Route path="/kvinnor-55-plus-v2" element={<Women55PlusV2 />} />
          <Route path="/kvinnor-55-plus-v3" element={<Women55PlusV3 />} />
          <Route path="/kvinnor-55-plus-v4" element={<Women55PlusV4 />} />
          <Route path="/kvinnor-55-plus-v5" element={<Women55PlusV5 />} />
          <Route path="/kvinnor-55-plus-v6" element={<Women55PlusV6 />} />
          <Route path="/5-anledningar-65" element={<FiveReasons65 />} />
          <Route path="/p2" element={<HomePageV2 />} />
        </Routes>
        <ShoppingCart />
        <CookieConsent />
      </div>
    </CartProvider>
  );
};

export default App;
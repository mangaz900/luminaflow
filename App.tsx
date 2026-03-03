import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import VideoSection from './components/VideoSection';
import SolutionSection from './components/SolutionSection';
import ExpertSection from './components/ExpertSection';
import ComparisonTable from './components/ComparisonTable';
import Usage from './components/Usage';
import Timeline from './components/Timeline';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import GuaranteeSection from './components/GuaranteeSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import OrderSuccess from './components/OrderSuccess';
import CookieConsent from './components/CookieConsent';
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
import MenHairLossV3 from './pages/listicles/MenHairLossV3';
import MenHairLossV4 from './pages/listicles/MenHairLossV4';
import MenHairLossV5 from './pages/listicles/MenHairLossV5';
import PaymentSuccess from './pages/PaymentSuccess';
import { initPixel, pageView } from './services/pixel';
import { initGA4, trackPageView } from './services/analytics';

// ─────────────────────────────────────────────
// LuminaFlow 360 – Ny startsida
// Sektion-ordning: Hero → Problem → Lösning → Expert
// → Jämförelse → Användning → Resultat-timeline
// → Recensioner → FAQ → Garanti → Final CTA
// ─────────────────────────────────────────────
const HomePage: React.FC = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* 1. Hero – produkt + paketval + köpknapp */}
        <Hero />

        {/* 1b. Videogalleri */}
        <VideoSection />

        {/* 2. Problemet – djupare strukturell förklaring */}
        <ProblemSolution />

        {/* 3. Lösningen – 4 teknikblock */}
        <SolutionSection />

        {/* 4. Expertperspektiv – citat + statistik */}
        <ExpertSection />

        {/* 5. Differentiering – 3-kolumns jämförelse */}
        <ComparisonTable />

        {/* 6. Användning – 3 steg */}
        <Usage />

        {/* 7. Resultat-timeline – vecka 1–6+ */}
        <Timeline />

        {/* 8. Recensioner */}
        <Reviews />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Garanti */}
        <GuaranteeSection />

        {/* 11. Final CTA – paketval + köpknapp */}
        <FinalCTA />
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
    // Scrolla till top direkt (instant) vid sidbyte
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    pageView();
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-dark-900 antialiased selection:bg-medical-100 selection:text-medical-900 overflow-x-hidden">
        {!['/kvinnor-55-plus-lumina', '/kvinnor-55-plus-v2', '/kvinnor-55-plus-v3', '/kvinnor-55-plus-v4', '/kvinnor-55-plus-v5', '/kvinnor-55-plus-v6', '/5-anledningar-65', '/man-haravfall-v3', '/man-haravfall-v4', '/man-haravfall-v5'].includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
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
          <Route path="/man-haravfall-v3" element={<MenHairLossV3 />} />
          <Route path="/man-haravfall-v4" element={<MenHairLossV4 />} />
          <Route path="/man-haravfall-v5" element={<MenHairLossV5 />} />
        </Routes>
        <ShoppingCart />
        <CookieConsent />
      </div>
    </CartProvider>
  );
};

export default App;
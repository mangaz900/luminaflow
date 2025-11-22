import React from 'react';
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
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './components/OrderSuccess';

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
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-dark-900 antialiased selection:bg-medical-100 selection:text-medical-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};

export default App;
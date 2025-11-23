import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import { initGA4, trackPageView } from './services/analytics';

// Initialize GA4 on app load
initGA4();

// Scroll to top on route change (endast om det inte finns scrollTo state)
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Scrolla inte till top om det finns scrollTo state (hanteras av Navbar)
    if (!state?.scrollTo) {
      window.scrollTo(0, 0);
    }
    // Track page view
    trackPageView(pathname);
  }, [pathname, state]);

  return null;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
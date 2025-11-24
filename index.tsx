import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import { initGA4, trackPageView } from './services/analytics';
import { initTikTokPixel, trackTikTokPageView } from './services/tiktokPixel';

// Initialize GA4 and TikTok Pixel on app load
initGA4();
initTikTokPixel();

// Scroll to top on route change (endast om det inte finns scrollTo state)
const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  const prevPathnameRef = React.useRef(pathname);

  useEffect(() => {
    // Scrolla bara till top om pathname faktiskt ändrats (inte vid refresh)
    if (prevPathnameRef.current !== pathname) {
      // Scrolla inte till top om det finns scrollTo state (hanteras av Navbar)
      if (!state?.scrollTo) {
        window.scrollTo(0, 0);
      }
      prevPathnameRef.current = pathname;
    }
    // Track page view
    trackPageView(pathname);
    trackTikTokPageView();
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
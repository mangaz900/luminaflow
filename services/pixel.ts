import ReactPixel from 'react-facebook-pixel';
import { getCookie } from '../utils/cookie';

const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

// Initialize Pixel
export const initPixel = () => {
    if (!PIXEL_ID) {
        console.warn('Facebook Pixel ID is missing in environment variables.');
        return;
    }

    // Check if fbq already exists (avoid double initialization)
    if (typeof window !== 'undefined' && (window as any).fbq) {
        console.log('Facebook Pixel already initialized');
        return;
    }

    // Manually inject Facebook Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    console.log('✅ Facebook Pixel script injected and initialized');
};

// Track PageView
export const pageView = () => {
    if (!PIXEL_ID) return;
    const eventId = crypto.randomUUID();

    // Use window.fbq directly to support eventID
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView', {}, { eventID: eventId });
    }

    // Send to CAPI (Server-side)
    sendToCAPI('PageView', {}, eventId);
};

// Track Custom/Standard Events
export const trackEvent = (event: string, data: any = {}, userData: any = {}) => {
    if (!PIXEL_ID) return;
    const eventId = crypto.randomUUID();

    // Use window.fbq directly to support eventID
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', event, data, { eventID: eventId });
    }

    // Send to CAPI (Server-side)
    sendToCAPI(event, data, eventId, userData);
};

// Helper to send data to our serverless function which forwards to Facebook CAPI
const sendToCAPI = async (eventName: string, eventData: any, eventId: string, userData: any = {}) => {
    try {
        const fbc = getCookie('_fbc');
        const fbp = getCookie('_fbp');

        await fetch('/api/facebook-conversion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                eventData,
                eventId,
                url: window.location.href,
                userAgent: navigator.userAgent,
                fbc,
                fbp,
                userData, // Pass explicit user data (email, phone, etc.)
            }),
        });
    } catch (error) {
        console.error('Failed to send event to CAPI:', error);
    }
};

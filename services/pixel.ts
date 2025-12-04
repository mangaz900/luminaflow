import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

// Initialize Pixel
export const initPixel = () => {
    if (!PIXEL_ID) {
        console.warn('Facebook Pixel ID is missing in environment variables.');
        return;
    }

    const options = {
        autoConfig: true,
        debug: import.meta.env.DEV, // Enable debug mode in development
    };

    ReactPixel.init(PIXEL_ID, undefined, options);
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
export const trackEvent = (event: string, data: any = {}) => {
    if (!PIXEL_ID) return;
    const eventId = crypto.randomUUID();

    // Use window.fbq directly to support eventID
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', event, data, { eventID: eventId });
    }

    // Send to CAPI (Server-side)
    sendToCAPI(event, data, eventId);
};

// Helper to send data to our serverless function which forwards to Facebook CAPI
const sendToCAPI = async (eventName: string, eventData: any, eventId: string) => {
    try {
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
            }),
        });
    } catch (error) {
        console.error('Failed to send event to CAPI:', error);
    }
};

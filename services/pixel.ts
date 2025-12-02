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
    ReactPixel.pageView();

    // Send to CAPI (Server-side)
    sendToCAPI('PageView', {});
};

// Track Custom/Standard Events
export const trackEvent = (event: string, data: any = {}) => {
    if (!PIXEL_ID) return;
    ReactPixel.track(event, data);

    // Send to CAPI (Server-side)
    sendToCAPI(event, data);
};

// Helper to send data to our serverless function which forwards to Facebook CAPI
const sendToCAPI = async (eventName: string, eventData: any) => {
    try {
        const eventId = crypto.randomUUID(); // Deduplication ID

        // Add eventID to browser pixel for deduplication if supported by library, 
        // but ReactPixel.track doesn't easily support eventID in the second arg for standard events in all versions.
        // For advanced deduplication, we might need to pass eventID to ReactPixel.trackSingle if needed.
        // For now, we'll focus on getting the data to CAPI.

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

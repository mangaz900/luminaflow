import crypto from 'crypto';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { eventName, eventData, eventId, url, userAgent } = request.body;

    const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
    const TEST_EVENT_CODE = process.env.FACEBOOK_TEST_EVENT_CODE; // Optional

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error('Missing Facebook credentials');
        return response.status(500).json({ error: 'Server configuration error' });
    }

    // Get client IP
    const clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;

    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                event_source_url: url,
                action_source: 'website',
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: userAgent,
                    // Hash user data if available in eventData (email, phone, etc.)
                    // This is a basic implementation. For better matching, we should hash email/phone if provided.
                },
                custom_data: eventData,
            },
        ],
    };

    if (TEST_EVENT_CODE) {
        payload.test_event_code = TEST_EVENT_CODE;
    }

    try {
        const fbResponse = await fetch(
            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await fbResponse.json();

        if (!fbResponse.ok) {
            console.error('Facebook CAPI Error:', data);
            return response.status(fbResponse.status).json(data);
        }

        return response.status(200).json({ success: true, data });
    } catch (error) {
        console.error('CAPI Request Failed:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}

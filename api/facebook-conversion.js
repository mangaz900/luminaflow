import crypto from 'crypto';

// Helper to hash data (SHA256)
const hashData = (data) => {
    if (!data) return undefined;
    const normalized = data.toString().trim().toLowerCase();
    return crypto.createHash('sha256').update(normalized).digest('hex');
};

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { eventName, eventData, eventId, url, userAgent, fbc, fbp, userData } = request.body;

    const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
    const TEST_EVENT_CODE = process.env.FACEBOOK_TEST_EVENT_CODE; // Optional

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error('Missing Facebook credentials');
        return response.status(500).json({ error: 'Server configuration error' });
    }

    // Get client IP - prioritize IPv6 over IPv4
    let clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;

    // x-forwarded-for can contain multiple IPs (client, proxy1, proxy2...)
    // Format: "client_ip, proxy1_ip, proxy2_ip" or "ipv6_address, ipv4_address"
    if (clientIp && clientIp.includes(',')) {
        const ips = clientIp.split(',').map(ip => ip.trim());

        // Prioritize IPv6 addresses (contain colons)
        const ipv6 = ips.find(ip => ip.includes(':') && !ip.startsWith('::ffff:'));
        const ipv4 = ips.find(ip => !ip.includes(':') || ip.startsWith('::ffff:'));

        // Use IPv6 if available, otherwise IPv4
        clientIp = ipv6 || ipv4 || ips[0];
    }

    // Remove port number if present (e.g., "192.168.1.1:3000" -> "192.168.1.1")
    if (clientIp && clientIp.includes(':')) {
        // For IPv6, only remove port if it's at the end after the last colon
        // IPv6 format: "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
        // IPv6 with port: "[2001:0db8:85a3::7334]:3000"
        if (clientIp.startsWith('[')) {
            clientIp = clientIp.split(']:')[0].replace('[', '');
        } else if (!clientIp.match(/^[0-9a-f:]+$/i)) {
            // If it's not a pure IPv6 address (contains non-hex chars), it might have a port
            const parts = clientIp.split(':');
            if (parts.length === 2 && !isNaN(parts[1])) {
                // It's IPv4:port format
                clientIp = parts[0];
            }
        }
    }

    // Construct user_data object
    const fbUserData = {
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        fbc: fbc || undefined,
        fbp: fbp || undefined,
    };

    // Add hashed user data if provided
    if (userData) {
        if (userData.email) fbUserData.em = hashData(userData.email);
        if (userData.phone) fbUserData.ph = hashData(userData.phone);
        if (userData.firstName) fbUserData.fn = hashData(userData.firstName);
        if (userData.lastName) fbUserData.ln = hashData(userData.lastName);
        if (userData.city) fbUserData.ct = hashData(userData.city);
        if (userData.state) fbUserData.st = hashData(userData.state);
        if (userData.zip) fbUserData.zp = hashData(userData.zip);
        if (userData.country) fbUserData.country = hashData(userData.country);
        if (userData.externalId) fbUserData.external_id = hashData(userData.externalId);
    }

    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                event_source_url: url,
                action_source: 'website',
                user_data: fbUserData,
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

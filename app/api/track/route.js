import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request) {
  try {
    // Extract headers reliably from the request object in Next.js App Router
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    let city = 'Unknown';
    let country = 'Unknown';

    // We skip geolocation for localhost loopback IPs
    if (ip && ip !== 'Unknown' && ip !== '::1' && ip !== '127.0.0.1') {
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city`);
        const geoData = await geoResponse.json();
        if (geoData.status === 'success') {
          city = geoData.city;
          country = geoData.country;
        }
      } catch (geoErr) {
        console.log("Geolocation fetch failed, proceeding without it.");
      }
    } else if (ip === '::1' || ip === '127.0.0.1') {
      city = 'Local System';
      country = 'Local Dev';
    }

    const { error } = await supabase
      .from('visitor_sessions')
      .insert([
        { ip_address: ip, user_agent: userAgent, city: city, country: country }
      ]);

    if (error) {
      console.error("Visitor tracker insert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Visitor tracker exception:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

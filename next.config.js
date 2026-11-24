// script-src/connect-src/img-src also allow Google Analytics (gtag.js) and
// Microsoft Clarity, both loaded from CookieBanner.tsx after consent.
// frame-src allows the keyless Google Maps embed on the Contact page.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms",
  "frame-src https://www.google.com https://maps.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
  async redirects() {
    // Refonte 2026 : anciennes pages fusionnées dans la nouvelle architecture.
    const refonte = [
      ['/tarifs', '/services/sites-web-ecommerce'],
      ['/application-web-nimes', '/services/applications-metier'],
      ['/agence-web-nimes', '/agence-web/nimes'],
      ['/pourqui', '/a-propos'],
      ['/processus', '/#methode'],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));

    return [
      ...refonte,
      {
        source: '/blog/creer-site-internet-nimes-combien-ca-coute-2026',
        destination: '/blog/combien-coute-site-internet-artisan-2026',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Якщо будемо додавати інші джерела зображень
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

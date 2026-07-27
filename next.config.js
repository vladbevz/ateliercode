/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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

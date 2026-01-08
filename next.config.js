/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false, // Вимкнути Turbopack
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "ecomersnexjs14-production.up.railway.app",
      },
    ],
  },
};
// ecomersnexjs14-production.up.railway.app

module.exports = nextConfig;

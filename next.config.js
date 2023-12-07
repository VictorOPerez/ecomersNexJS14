/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "4000",
        protocol: "http",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["fb-clone-project.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "facebook.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fb-clone-project.vercel.app",
        port: "",
        pathname: "/_next/image",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

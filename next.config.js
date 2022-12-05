/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "fb-clone-project.vercel.app", "drive.google.com"],
    path: "/_next/image",
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
        hostname: "drive.google.com",
        port: "",
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

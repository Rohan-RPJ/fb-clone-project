/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // {
  //   key: "Permissions-Policy",
  //   value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  // },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  // reactStrictMode: true,
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
      {
        protocol: "https",
        hostname: "fb-clone-project.vercel.app",
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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

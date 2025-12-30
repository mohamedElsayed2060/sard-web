/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // ✅ local CMS (لو بتحتاجه)
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },

      // ✅ Railway CMS
      {
        protocol: "https",
        hostname: "sard-cms-production.up.railway.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

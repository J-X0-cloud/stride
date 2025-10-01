import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/plans.html", destination: "/plans", permanent: true },
      { source: "/how-it-works.html", destination: "/how-it-works", permanent: true },
      { source: "/pricing.html", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;

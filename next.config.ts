import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@raulmoracode",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/raulmoracode",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/raulmoracode",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@raulmoracode",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

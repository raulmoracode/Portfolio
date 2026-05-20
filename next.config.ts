import type { NextConfig } from "next";
import { Social } from "./const/config/social";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.43"],
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: Social.youtube.href || "/",
        permanent: true,
      },
      {
        source: "/github",
        destination: Social.github.href || "/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: Social.linkedin.href || "/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: Social.twitter.href || "/",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: Social.tiktok.href || "/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: Social.instagram.href,
        permanent: true,
      },
      {
        source: "/pinterest",
        destination: Social.pinterest.href,
        permanent: true,
      },
      {
        source: "/medium",
        destination: Social.medium.href,
        permanent: true,
      },
      {
        source: "/leetcode",
        destination: Social.leetcode.href,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

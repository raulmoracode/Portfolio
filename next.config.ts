import type { NextConfig } from "next";
import { SocialLinks } from "./const/config/social-links";
import { SocialRoutes } from "./const/config/social-routes";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.43"],
  async redirects() {
    return [
      {
        source: SocialRoutes.youtube.href,
        destination: SocialLinks.youtube.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.github.href,
        destination: SocialLinks.github.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.linkedin.href,
        destination: SocialLinks.linkedin.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.twitter.href,
        destination: SocialLinks.twitter.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.tiktok.href,
        destination: SocialLinks.tiktok.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.instagram.href,
        destination: SocialLinks.instagram.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.pinterest.href,
        destination: SocialLinks.pinterest.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.medium.href,
        destination: SocialLinks.medium.href || "/",
        permanent: true,
      },
      {
        source: SocialRoutes.leetcode.href,
        destination: SocialLinks.leetcode.href || "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

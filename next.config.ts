import type { NextConfig } from "next";
import { SocialLinks } from "./const/config/social-links";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.43"],
  async redirects() {
    return [
      {
        source: SocialLinks.youtube.href,
        destination: SocialLinks.youtube.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.github.href,
        destination: SocialLinks.github.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.linkedin.href,
        destination: SocialLinks.linkedin.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.twitter.href,
        destination: SocialLinks.twitter.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.tiktok.href,
        destination: SocialLinks.tiktok.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.instagram.href,
        destination: SocialLinks.instagram.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.pinterest.href,
        destination: SocialLinks.pinterest.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.medium.href,
        destination: SocialLinks.medium.href || "/",
        permanent: true,
      },
      {
        source: SocialLinks.leetcode.href,
        destination: SocialLinks.leetcode.href,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

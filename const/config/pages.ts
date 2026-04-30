import { Redirects } from "@/const/config/redirects";

export const MainLinks = {
  Blog: {
    href: "/blog",
    label: "/blog",
    description: "Read my latest blog posts and articles.",
    title: "Blog",
  },
  Events: {
    href: "/events",
    label: "/events",
    description: "See upcoming events, meetups, and workshops.",
    title: "Events",
  },
  Contact: {
    href: "/contact",
    label: "/contact",
    description:
      "If you want to get in touch, ask questions, or just say hi, feel free to reach out!",
    title: "Contact",
  },
  Links: {
    href: "/links",
    label: "/links",
    description: "Just links, but done my way.",
    title: "Links",
  },
  Projects: {
    href: "/projects",
    label: "/projects",
    description: "Explore my projects and see what I've been working on.",
    title: "Projects",
  },
  Experience: {
    href: "/experience",
    label: "/experience",
    description: "Discover my professional journey and work experience.",
    title: "Experience",
  },
};

export const MainLinksWithWebsite = [
  { href: "/", label: "/website" },
  ...Object.values(MainLinks),
];

export const SocialLinks = Object.entries(Redirects).map(([key, value]) => ({
  href: value.href,
  label: `/${key}`,
}));

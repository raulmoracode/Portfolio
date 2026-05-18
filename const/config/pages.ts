import { Redirects } from "@/const/config/redirects";

export const MainLinks = {
  Home: {
    href: "/",
  },
  Events: {
    href: "/events",
  },
  Blog: {
    href: "/blog",
  },
  Contact: {
    href: "/contact",
  },
  Links: {
    href: "/links",
  },
  Projects: {
    href: "/projects",
  },
  Experience: {
    href: "/experience",
  },
};

export const SocialLinks = Object.entries(Redirects).map(([key, value]) => ({
  href: value.href,
  label: `/${key}`,
}));

export const Slinks = [...SocialLinks].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

export const Mlinks = [
  ...Object.values(MainLinks).filter(
    (link) =>
      link.href !== MainLinks.Links.href && link.href !== MainLinks.Home.href,
  ),
].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

export const Tlinks = [
  ...Object.values(MainLinks).filter(
    (link) => link.href !== MainLinks.Links.href,
  ),
  ...SocialLinks,
].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

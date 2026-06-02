import { MainRoutes } from "./main-routes";
import { SocialRoutes } from "./social-routes";

export const SocialRoutesConverter = Object.entries(SocialRoutes).map(
  ([key, value]) => ({
    href: value.href,
    label: `/${key}`,
  }),
);

export const SortedSocialItems = [...SocialRoutesConverter].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

export const SortedMainItems = [
  ...Object.values(MainRoutes).filter(
    (link) =>
      link.href !== MainRoutes.Links.href && link.href !== MainRoutes.Home.href,
  ),
].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

export const SortedAllItems = [
  ...Object.values(MainRoutes).filter(
    (link) => link.href !== MainRoutes.Links.href,
  ),
  ...SocialRoutesConverter,
].sort(
  (a, b) => a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
);

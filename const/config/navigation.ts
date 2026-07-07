import { MailList } from "./mail-list";
import { MainRoutes } from "./main-routes";
import { SocialRoutes } from "./social-routes";

const byHrefLength = (a: { href: string }, b: { href: string }) =>
  a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length;

const byTitleLength = (a: { title: string }, b: { title: string }) =>
  a.title.replace(/\W/g, "").length - b.title.replace(/\W/g, "").length;

export const SocialRoutesConverter = Object.entries(SocialRoutes).map(
  ([key, value]) => ({
    href: value.href,
    label: `/${key}`,
  }),
);

export const SortedSocialItems = SocialRoutesConverter.sort(byHrefLength);

export const SortedMainItems = Object.values(MainRoutes)
  .filter(
    (link) =>
      link.href !== MainRoutes.Links.href && link.href !== MainRoutes.Home.href,
  )
  .sort(byHrefLength);

export const SortedAllItems = [
  ...Object.values(MainRoutes).filter(
    (link) => link.href !== MainRoutes.Links.href,
  ),
  ...SocialRoutesConverter,
].sort(byHrefLength);

export const SortedMailList = Object.values(MailList).sort(byTitleLength);

import { MailList } from "./mail-list";
import { MainRoutes } from "./main-routes";
import { SocialRoutes } from "./social-routes";

const byHrefLength = (a: { href: string }, b: { href: string }) =>
  a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length;

const byTitleLength = (a: { title: string }, b: { title: string }) =>
  a.title.replace(/\W/g, "").length - b.title.replace(/\W/g, "").length;

export const SocialRoutesConverter = Object.entries(SocialRoutes)
  .filter(([key]) => key !== "Tagger")
  .map(([key, value]) => ({
    href: value.href,
    label: `/${key}`,
  }));

export const SortedSocialItems = SocialRoutesConverter.sort(byHrefLength);

export const SortedMainItems = Object.values(MainRoutes)
  .filter(
    (link) =>
      link.href !== MainRoutes.Links.href &&
      link.href !== MainRoutes.Tagger.href &&
      link.href !== MainRoutes.Home.href,
  )
  .sort(byHrefLength);

export const SortedAllItems = [
  ...Object.values(MainRoutes).filter(
    (link) =>
      link.href !== MainRoutes.Links.href &&
      link.href !== MainRoutes.Tagger.href,
  ),
  ...SocialRoutesConverter,
].sort(byHrefLength);

export const TaggerSortedAllItems = [
  ...Object.values(MainRoutes).filter(
    (link) =>
      link.href !== MainRoutes.Blog.href &&
      link.href !== MainRoutes.Community.href &&
      link.href !== MainRoutes.Projects.href &&
      link.href !== MainRoutes.Experience.href &&
      link.href !== MainRoutes.Events.href &&
      link.href !== MainRoutes.Contact.href,
  ),
].sort(byHrefLength);

export const SortedMailList = Object.values(MailList).sort(byTitleLength);

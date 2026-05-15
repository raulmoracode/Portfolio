"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/Pagebase";
import { MainLinksWithWebsite, SocialLinks } from "@/const/config/pages";
import { MainLinks } from "@/const/config/pages";

export default function LinksClient() {
  const links = [
    ...MainLinksWithWebsite.filter(
      (link) => link.href !== MainLinks.Links.href,
    ),
    ...SocialLinks,
  ].sort(
    (a, b) =>
      a.href.replace(/\W/g, "").length - b.href.replace(/\W/g, "").length,
  );
  return (
    <PageBase
      title={MainLinks.Links.title}
      description={MainLinks.Links.description}
      showThemeToggle={true}
    >
      <section>
        &nbsp;
        <div className="mt-2  border-zinc-200 dark:border-zinc-800 flex flex-col space-y-2 font-mono">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.href}`}
              href={link.href}
              className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors w-fit"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <Label className="cursor-pointer text-2xl">{link.href}</Label>
            </Link>
          ))}
        </div>
      </section>
    </PageBase>
  );
}

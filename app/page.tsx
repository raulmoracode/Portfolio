"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/Pagebase";
import { MainLinks, SocialLinks } from "@/const/config/pages";
import Charger from "@/components/custom/RoutesPrefetch";

export default function Home() {
  const links = [
    ...SocialLinks.filter((link) => link.href !== MainLinks.Links.href),
  ].sort(
    (a, b) =>
      a.label.replace(/\W/g, "").length - b.label.replace(/\W/g, "").length,
  );
  return (
    <>
      <Charger />
      <PageBase
        title="Home"
        description="I'm Raúl, a software development student building innovative digital experiences. I create, share, and grow through content, real projects, and community—where technology, creativity, and fashion come together as part of who i am."
        showThemeToggle={true}
      >
        <nav className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-1 mb-10 ">
            {Object.values(MainLinks)
              .filter((link) => link.href !== MainLinks.Links.href)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-500   hover:text-black dark:hover:text-white transition-colors w-fit"
                >
                  <Label className="cursor-pointer text-xl leading-snug">
                    {link.label}
                  </Label>
                </Link>
              ))}
          </div>

          <details className="w-fit group">
            <summary className="cursor-pointer select-none text-zinc-500 hover:text-black dark:hover:text-white transition-colors font-mono text-sm">
              social ({SocialLinks.length})
            </summary>

            <div className="mt-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 flex flex-col space-y-2 font-mono">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors w-fit"
                >
                  <Label className="cursor-pointer text-sm leading-snug">
                    {link.label}
                  </Label>
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </PageBase>
    </>
  );
}

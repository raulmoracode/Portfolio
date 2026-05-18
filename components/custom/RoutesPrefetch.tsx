"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainLinks } from "@/const/config/pages";

const Mlinks = [
  ...Object.values(MainLinks).filter(
    (link) =>
      link.href !== MainLinks.Links.href && link.href !== MainLinks.Home.href,
  ),
];

export default function RoutesPrefetch() {
  const router = useRouter();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const prefetchRoutes = () => {
      Mlinks.forEach((route) => router.prefetch(route.href));
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchRoutes);

      cleanup = () => {
        window.cancelIdleCallback(idleId);
      };
    } else {
      const timeoutId = setTimeout(prefetchRoutes, 200);

      cleanup = () => {
        clearTimeout(timeoutId);
      };
    }

    return () => {
      cleanup?.();
    };
  }, [router]);

  return null;
}

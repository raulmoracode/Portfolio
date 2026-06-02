"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainRoutes } from "@/const/config/main-routes";

const SortedMainItems = [
  ...Object.values(MainRoutes).filter(
    (link) =>
      link.href !== MainRoutes.Links.href && link.href !== MainRoutes.Home.href,
  ),
];

export default function RoutesPrefetch() {
  const router = useRouter();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const prefetchRoutes = () => {
      SortedMainItems.forEach((route) => router.prefetch(route.href));
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

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routes = [
  "/experience",
  "/projects",
  "/contact",
  "/blog",
  "/events",
  "/links",
];

export default function RoutesPrefetch() {
  const router = useRouter();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const prefetchRoutes = () => {
      routes.forEach((route) => {
        router.prefetch(route);
      });
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

"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useGoogleTagManager from "./useGoogleTagManager";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set" | "get",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export default function usePageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { gtmConfig } = useGoogleTagManager();

  const gtmKey = gtmConfig?.key;

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", `${gtmKey}`, {
      page_path:
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
    });
  }, [pathname, searchParams, gtmKey]);
}

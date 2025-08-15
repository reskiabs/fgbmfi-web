"use client";

import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function ClientGTM() {
  const { gtmConfig, loading, error } = useGoogleTagManager();

  if (loading || error || !gtmConfig) {
    return null;
  }

  const gtmKey = gtmConfig.key;

  return <GoogleAnalytics gaId={gtmKey} />;
}

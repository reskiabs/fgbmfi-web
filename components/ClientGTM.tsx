"use client";

import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import Script from "next/script";

export default function ClientGTM() {
  const { gtmConfig, loading, error } = useGoogleTagManager();

  if (loading || error || !gtmConfig) {
    return null;
  }

  const gtmKey = gtmConfig.key;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmKey}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmKey}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

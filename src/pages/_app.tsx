import "../styles/globals.css";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as ga from "../libs/GooglePageViews";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-23S03MS2ZP`}
        strategy="afterInteractive"
      />
      <Script id="next-google-ana" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-23S03MS2ZP);
        
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

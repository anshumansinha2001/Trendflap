import { Outfit } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GATrack from "@/components/GATrack";
import Script from "next/script";
import { Suspense } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// SEO Metadata
export const metadata = {
  title: "Trendflap: AI, Technology & Digital Marketing Trends",
  description:
    "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing.",
  openGraph: {
    title: "Trendflap: AI, Tech, and Digital Marketing Trends",
    description:
      "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`,
        width: 1200,
        height: 630,
        alt: "Trendflap Blog - AI, Tech, and Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Trendflap",
    description:
      "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
  },
};

export default function RootLayout({ children }) {
  const GA_ID =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_GA_ID
      : null; // Only load GA in prod

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* <!-- Standard favicon sizes --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* <!-- Android / PWA --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for GA (must be in <head>) */}
        {GA_ID && (
          <>
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin=""
            />
            <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossOrigin=""
            />
          </>
        )}
        {/* Cloudinary assets */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={outfit.className}>
        {/* Vercel tools */}
        <Analytics />
        <SpeedInsights />

        {/* Toasts */}
        <ToastContainer position="top-right" autoClose={5000} />

        {/* Page Content */}
        {children}

        {/* Google Analytics (only in prod) */}
        {GA_ID && (
          <>
            {/* GA loader (lazyOnload for better performance) */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />

            {/* GA init */}
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>

            {/* Track SPA route changes */}
            <Suspense fallback={null}>
              <GATrack />
            </Suspense>
          </>
        )}
      </body>
    </html>
  );
}

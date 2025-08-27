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
    "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing. ",
  keywords:
    "Trendflap, AI, Tech, Digital Marketing, Blog, Trends, AI Trends, Tech Trends, Digital Marketing Trends",
  author: "Anshuman Sinha",
  openGraph: {
    title: "Trendflap: AI, Tech, and Digital Marketing Trends",
    description:
      "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing. ",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`,
        alt: "Trendflap Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Trendflap",
    description:
      "Trendflap is a modern blog platform dedicated to exploring the latest trends in AI, Tech, and Digital Marketing. ",
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
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
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={outfit.className}>
        <Analytics />
        <SpeedInsights />
        <ToastContainer position="top-right" autoClose={5000} />
        {children}

        {GA_ID ? (
          <>
            {/* GA loader */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* GA init */}
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GATrack />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  );
}

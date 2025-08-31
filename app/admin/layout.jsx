export default function AdminLayout({ children }) {
  return <>{children}</>;
}

// SEO Metadata
export const metadata = {
  title: "Admin Panel - Trendflap",
  description:
    "This is the admin panel for Trendflap, where Admin can manage content and settings.",
  openGraph: {
    title: "Trendflap: AI, Tech, and Digital Marketing Trends",
    description:
      "This is the admin panel for Trendflap, where Admin can manage content and settings.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/admin`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`,
        width: 1200,
        height: 630,
        alt: "Trendflap Admin Panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Trendflap",
    description:
      "This is the admin panel for Trendflap, where Admin can manage content and settings.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/TrendflapLogo.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/admin`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

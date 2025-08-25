export default function robots() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}

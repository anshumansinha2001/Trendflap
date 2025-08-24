/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  async rewrites() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: false, // temporary redirect (302)
      },
    ];
  },
};

export default nextConfig;

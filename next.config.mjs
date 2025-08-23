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
};

export default nextConfig;

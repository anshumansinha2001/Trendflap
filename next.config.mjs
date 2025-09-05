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
        source: "/technology/optimize-your-content-for-chatgpt-and-ai-search",
        destination: "/technology/optimize-content-for-ai-search",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;

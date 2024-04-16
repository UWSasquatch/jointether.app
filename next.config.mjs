/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/video",
        destination: "https://www.youtube.com/watch?v=LKKQxJPB6g4",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;

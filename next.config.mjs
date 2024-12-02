/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['newitera.ru', 'localhost:3000'],
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
    domains: ['newitera.ru', 'localhost:3000'],
  //   path: "newitera.ru/screen/"
  // },
  images: {
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newitera.ru',
        port: '',
        pathname: '*',
      },
    ],
    // localPatterns: [
    //   {
    //     pathname: '/images/',
    //     search: '',
    //   },
    // ],
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;

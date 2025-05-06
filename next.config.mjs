/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'reqsite';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/reqsite/' : '',
  basePath: isProd ? '/reqsite' : '',
  output: 'export'
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/reqsite',
  assetPrefix: '/reqsite',
  distDir: 'dist',
  trailingSlash: true,
  // Ensure CSS is handled correctly
  compiler: {
    removeConsole: false,
  },
  experimental: {
    optimizeCss: true,
  },
  // Ensure CSS is properly handled
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};

export default nextConfig;

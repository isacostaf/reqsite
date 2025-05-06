/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Adicione esta linha se seu repositório não estiver na raiz do domínio
  // Por exemplo, se o repositório for username.github.io/repo-name
  basePath: process.env.NODE_ENV === 'production' ? '/Software-requisitos-website' : '',
  trailingSlash: true,
};

export default nextConfig;

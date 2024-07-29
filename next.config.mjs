/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    swcMinify: true,
  
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
  
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: -20,
          },
        },
      };
  
      return config;
    },
  
    images: {
      domains: [''],
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [16, 32, 48, 64, 96],
    },
  
  
  };
  
  export default nextConfig;
  
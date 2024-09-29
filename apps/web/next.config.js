const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  output: 'standalone',
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, '..', '..', 'packages', 'ui', 'src', 'styles'),
    ],
    additionalData: "@import '@repo/ui/styles';",
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

/* eslint @typescript-eslint/no-var-requires: 0 */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: (config) => {
    return config;
  },
  publicRuntimeConfig: {
    showSample: Boolean(process.env.NODE_ENV !== 'production'),
  },
  pageExtensions: ['mdx', 'tsx'],
});

/* eslint @typescript-eslint/no-var-requires: 0 */

// https://nextjs.org/docs/advanced-features/using-mdx#setup-nextmdx-in-nextjs
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
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

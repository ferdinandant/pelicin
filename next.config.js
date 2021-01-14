// Enabling MDX support
const mdxRule = ({ defaultLoaders }) => ({
  test: /\.mdx/,
  use: [
    defaultLoaders.babel,
    {
      loader: '@mdx-js/loader',
      options: {},
    },
  ],
});

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push(mdxRule({ defaultLoaders }));
    return config;
  },
  publicRuntimeConfig: {
    // For testing, run at root `SHOW_SAMPLE=1 yarn dev`
    showSample: Boolean(process.env.SHOW_SAMPLE),
  },
  pageExtensions: ['mdx', 'tsx'],
};

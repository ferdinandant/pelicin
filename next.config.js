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

  pageExtensions: ['mdx', 'tsx'],
};

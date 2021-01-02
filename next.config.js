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

// Enabling styled-jsx CSS support
// https://github.com/vercel/styled-jsx#styles-in-regular-css-files
const cssRule = ({ defaultLoaders }) => ({
  test: /\.css$/,
  use: [
    defaultLoaders.babel,
    {
      loader: require('styled-jsx/webpack').loader,
      options: { type: (fileName) => (fileName.endsWith('.global.css') ? 'global' : 'scoped') },
    },
  ],
});

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push(mdxRule({ defaultLoaders }));
    config.module.rules.push(cssRule({ defaultLoaders }));
    return config;
  },

  pageExtensions: ['mdx', 'tsx'],
};

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    // Enabling MDX support
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    });
    return config;
  },

  pageExtensions: ['mdx', 'tsx'],
};

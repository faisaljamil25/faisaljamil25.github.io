const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  assetPrefix: !debug ? '' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

const env = require('./env-config');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', env],
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
      corejs: false,
      helpers: true,
      useESModules: false
    }]
  ],
};

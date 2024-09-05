const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (env) => {
  const { environment } = env;
  const environmentConfig = require(`./webpack.${environment}.js`);
  const config = merge(commonConfig, environmentConfig);
  return config;
};

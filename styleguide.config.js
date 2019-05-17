const webpackConfig = require('react-scripts/config/webpack.config.js');

const COMPONENTS_PATH = 'src/components';
const COMPONENTS_EXT = '{js,jsx}';

const dangerouslyUpdateWebpackConfig = webpackConfig => {
  webpackConfig.output = {
    ...webpackConfig.output,
    publicPath: process.env.PUBLIC_URL || ''
  };
  return webpackConfig;
};


module.exports = {
  webpackConfig,
  dangerouslyUpdateWebpackConfig,
  components: `${COMPONENTS_PATH}/**/*.${COMPONENTS_EXT}`,
  ignore: [
    `**/index.${COMPONENTS_EXT}`,
    `**/*.test.${COMPONENTS_EXT}`,
    `**/*.styled.${COMPONENTS_EXT}`,
  ],
  template: {
    favicon: './public/favicon.ico'
  }
};

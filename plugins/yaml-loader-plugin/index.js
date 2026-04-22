module.exports = function (context, options) {
  return {
    name: 'yaml-loader-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.ya?ml$/,
              use: 'js-yaml-loader',
            },
          ],
        },
      };
    },
  };
};

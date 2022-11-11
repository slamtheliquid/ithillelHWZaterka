const CracoLessPlugin = require('craco-less');

const antVariables = {};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
          lessLoaderOptions: {
              lessOptions: {
                  modifyVars: antVariables,
                  javascriptEnabled: true,
              },
          },
      },
    },
  ],
};
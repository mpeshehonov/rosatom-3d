const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#4e74F5',
              '@link-color': '#4e74F5',
              '@border-radius-base': '100px',
              // '@border-color-base': '#4e74F5',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

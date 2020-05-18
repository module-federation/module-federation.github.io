// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = ({
  assetPrefix: process.env.GH_PAGES ? "/site" : undefined,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    // config.plugins.push(new ModuleFederationPlugin({
    //   name: 'federated_libraries',
    //   library: { type: 'var', name: 'federated_libraries' },
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     AppShell: './components/app-shell',
    //     ArticlePage: './components/article-page',
    //     Hero: './components/hero',
    //   },
    //   shared: ['react', 'react-dom', 'next'],
    // }));

    // config.resolve.alias.buffer = 'buffer';
    // config.resolve.alias.path = 'path-browserify';

    return config
  }
})

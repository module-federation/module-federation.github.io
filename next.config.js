const glob = require('glob');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = ({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

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

    return config;
  },
   exportPathMap: async function() {
    const routes = {
      // '/': { page : '/',query:{utm_source:null,utm_medium:null,utm_campaign:null}},
      '/': { page : '/'},
      '/redirect': { page : '/redirect'},
      '/videos': { page : '/videos'},
    };
    //get all .md files in the posts dir
    const blogs = glob.sync('./posts/**/*.md');
    const videos = glob.sync('./videos/**/*.md');

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim());
    const videoSlugs = videos.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim());

    //add each blog to the routes obj
    blogSlugs.forEach(blog => {
      routes[`/blog/${blog}`] = { page: '/blog/[slug]', query: { slug: blog } };
    });

     videoSlugs.forEach(blog => {
      routes[`/videos/${blog}`] = { page: '/videos/[slug]', query: { slug: blog } };
    });

    return routes;
  }
});

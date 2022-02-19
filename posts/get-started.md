---
title: Getting Started With Federated Modules
secondary_title: get up and running in 15 minutes
author: Jacob Ebey
date: 2020-03-30T01:26:26Z

---
# A Little Background

If you've worked as a developer long enough, you've ran into the inevitable problem of sharing components between teams. Let's be real here, how often does this lead to a good experience for anyone?

I think [Zack Jackson](https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/), one of the authors of Webpack Module Federation said it best:

> A scalable solution to sharing code between independent applications has never been convenient, and near impossible at scale. The closest we had was externals or DLLPlugin, forcing centralized dependency on a external file. It was a hassle to share code, the separate applications were not truly standalone and usually, a limited number of dependencies are shared. Moreover, sharing actual feature code or components between separately bundled applications is unfeasible, unproductive, and unprofitable.

If you would like to learn more about Webpack Module Federation, you can head over to the and check out [https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/](https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/ "https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/").

# What We Are Building

We are going to build out two separate Single Page Applications (SPA) that use Module Federation to share components during runtime.

`Application A` will contain a `SayHelloFromA` component that will be consumed by `Application B` while `Application B` will contain a `SayHelloFromB` component that will be consumed by `ApplicationA`. This looks like:

![](/get-started-diagram.svg "Architecture Diagram")

This architecture will allow each SPA to be developed and deployed independantly along with instantly recieving updates from other federated applications with zero deployments.

# TL;DR

You can find the completed source for this example at [https://github.com/jacob-ebey/federated-libraries-get-started](https://github.com/jacob-ebey/federated-libraries-get-started).

# Getting Setup

Let's start by getting our environment configured. We will be using a yarn mono-repo structure here for simplicity, but the idea behind Module Federation is to allow teams to operate autonomously, so in the real world, your SPA's would most likely live in their own repositories.

Start by creating a new project folder with the following `package.json` to allow us to run our two SPAs at the same time:

**package.json**

```json
{
  "name": "federation-example",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "start": "wsrun --parallel start",
    "build": "yarn workspaces run build",
    "dev": "wsrun --parallel dev"
  },
  "devDependencies": {
    "wsrun": "^5.2.0"
  }
}
```

We will now create two folders for our SPAs to live in under a new `packages` directory called `application-a` and `application-b`, these will respectively contain the following `package.json` files:

**packages/application-a/package.json**

```json
{
  "name": "application-a",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "serve dist -p 3001",
    "build": "webpack --mode production",
    "dev": "concurrently \"webpack --watch\" \"serve dist -p 3001\""
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "@babel/preset-react": "^7.8.3",
    "babel-loader": "^8.0.6",
    "concurrently": "^5.1.0",
    "html-webpack-plugin": "git://github.com/ScriptedAlchemy/html-webpack-plugin#master",
    "serve": "^11.3.0",
    "webpack": "git://github.com/webpack/webpack.git#dev-1",
    "webpack-cli": "^3.3.11"
  }
}
```
**packages/application-b/package.json**

```json
{
  "name": "application-b",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "serve dist -p 3002",
    "build": "webpack --mode production",
    "dev": "concurrently \"webpack --watch\" \"serve dist -p 3002\""
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "@babel/preset-react": "^7.8.3",
    "babel-loader": "^8.0.6",
    "concurrently": "^5.1.0",
    "html-webpack-plugin": "git://github.com/ScriptedAlchemy/html-webpack-plugin#master",
    "serve": "^11.3.0",
    "webpack": "git://github.com/webpack/webpack.git#dev-1",
    "webpack-cli": "^3.3.11"
  }
}
```

Install the dependancies with:

```bash
> yarn
```

## Bootstrap The SPAs

Next up is bootstraping our SPA React applications. We need to create a `src` directory in each of our packages that contain the following files:

**packages/application-{a,b}/src/index.js**

```javascript
import('./bootstrap');
```
**packages/application-{a,b}/src/bootstrap.jsx**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
```
We also need a `public` directory in each of the packages with the the following html template that we will modify per SPA later:

**packages/application-{a,b}/public/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Now we can implement our two `app.jsx` files for each application that will house our shared components:

**packages/application-a/src/app.jsx**

```javascript
import React from 'react';

export default function SayHelloFromA() {
  return <h1>Hello from Application A!</h1>;
}
```

**packages/application-b/src/app.jsx**

```javascript
import React from 'react';

export default function SayHelloFromB() {
  return <h1>Hello from Application B!</h1>;
}
```

And now finally, we'll add our base `webpack.config.js` for each application:

**packages/application-{a,b}/webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
```

From the root of the application, you should now be able to access your two SPAs on [http://localhost:3001](http://localhost:3001) and [http://localhost:3002](http://localhost:3002) when runing:

```bash
> yarn dev
```

# Start Federating

Now that we have two independnt SPAs running, let's go ahead and make each of the SPAs a Federated Container as well as Consumer. We accomplish this by utilizing the new `ModuleFederationPlugin` that is part of the Webpack 5 Core.

We'll start by adding the `ModuleFederationPlugin` to `Application A`, this will look like:

**packages/application-a/webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  output: {
    publicPath: 'http://localhost:3001/', // New
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: 'application_a',
      library: { type: 'var', name: 'application_a' },
      filename: 'remoteEntry.js',
      exposes: {
        'SayHelloFromA': './src/app',
      },
      remotes: {
        'application_b': 'application_b',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
```

This specifies that `Application A` exposese it's App component to the world as a Federated Module called `SayHelloFromA`, while whenever you import from `application_b`, those modules should come from `Application B` at runtime.

We will do the same thing fro `Applicaiton B`, specifying that it exposes it's App component as `SayHelloFromB` and whenever we import from `application_a`, those modules should come from `Application A` at runtime:

**packages/application-b/webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  output: {
    publicPath: 'http://localhost:3002/', // New
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: 'application_b',
      library: { type: 'var', name: 'application_b' },
      filename: 'remoteEntry.js',
      exposes: {
        'SayHelloFromB': './src/app',
      },
      remotes: {
        'application_a': 'application_a',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
```

The last step before we can start to utilize the exposed components is to specify for the runtime where the Remote Entries for the Containers you wish to consume are located. We do this by simply adding a script tag to the HTML template of the remotes you wish to consume.

**packages/application-a/public/index.html**

```html
<head>
  <!-- The remote entry for Application B -->
  <script src="http://localhost:3002/remoteEntry.js"></script>    
</head>
```

**packages/application-b/public/index.html**

```html
<head>
  <!-- The remote entry for Application A -->
  <script src="http://localhost:3001/remoteEntry.js"></script>    
</head>
```

The remote entry files are tiny mappings for webpack to resolve the individually imported modules without transferring unnessesary info. They are also responsible for enabling the sharing of libraries that the packages use, in this case, when `Application A` requests `Application B`'s SayHelloFromB component, we do not send the React or ReactDOM over the wire as `Application A` already has a copy of it.

## Consuming Federated Components

Now that our two SPA applications are Container Hosts and Consumers, we can start to consume the shared components. In the webpack config we had specified the names of the containers as `application_a` and `application_b`, so that is where we will import the components from.

Starting with `Application A`, we can render the `SayHelloFromB` component like so from within the bootstrap file:

**packages/application-a/src/bootstrap.jsx**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromB from 'application_b/SayHelloFromB';

import App from './app';

ReactDOM.render(
  <>
  	<App />
  	<SayHelloFromB />
  </>,
  document.getElementById('root')
);
```

`Application B` will look very similar, just importing from `application_a` instead:

**packages/application-b/src/bootstrap.jsx**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromA from 'application_a/SayHelloFromA';

import App from './app';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
  </>,
  document.getElementById('root')
);
```

# A Few Notes

Looking at the network log for `Application A` you will see that we load two files from `Application B`, the `remoteEntry.js` file, then the `977.js` that contains the `SayHelloFromB` component.

![Application B Network Log](/application-a-network-log.png)

Visiting `Application B` for the first time, you'll notice we have already cached the remoteEntries for both `Application B` and `Application A`.

![Application B Network Log](/application-b-network-log.png)

**You have just created your first Webpack 5 Federated projects. Now go out and build something awesome!**

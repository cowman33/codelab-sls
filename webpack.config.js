const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
require('source-map-support').install();

const rootDir = path.join(__dirname, './');

// const helpers = require('./helpers');

// const entries = {};

// Object.keys(slsw.lib.entries).forEach(
//   key => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]])
// );

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'none',
  externals: [nodeExternals()],
  plugins: [],
  optimization: {
    nodeEnv: false,
  },
  resolve: {
    modules: ['apps', 'libs', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {},
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(rootDir, '.webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
};

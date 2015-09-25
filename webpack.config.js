var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
  ]
};

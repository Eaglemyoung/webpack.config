const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          output: true,
          mangle: true
        },
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  }
})

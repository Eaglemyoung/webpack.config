const path = require('path')
const webpack = require("webpack")
const baseConfig = require("./webpack.base.config")
const merge = require('webpack-merge')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {                //启用开发服务器
    contentBase: path.resolve(__dirname, '../dev/'),
    hot: true,
    // contentBase: __dirname + "../dist/",   //告诉服务器从哪提供内容，只有在想要提供静态文件时才需要
    compress: true,          //一切服务都启用gzip 压缩
    host: 'localhost',         //指定使用一个host，可用ip地址访问，没有的话如果别人访问会被禁止。默认localhost。
    port: '8082',            //指定端口号，如省略，默认为”8080“
    // hot: true,               //启用模块热替换特性
    inline: true,            //启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台
    historyApiFallback: true,//开发单页应用时有用，依赖于HTML5 history API，设为true时所有跳转将指向index.html
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  //webpack内置的热更新插件
  ]
});

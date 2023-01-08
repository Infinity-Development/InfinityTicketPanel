
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'production',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/',        
    }
    plugins: [
     new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};

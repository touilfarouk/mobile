const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true,
    watchContentBase: true,
  },
  //loaders
  module: {
    
    rules: [
      
      //css
      { test: /\.css$/,  use: [MiniCssExtractPlugin.loader,'css-loader'] },
      //sass
      {test: /\.(s(a|c)ss)$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']},
      //less https://itnext.io/webpack-and-less-a75e04aaf528
      {test:/\.less$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader']},
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },

     //{ test: /\.pug/,use: ['html-loader', 'pug-html-loader']},

      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      

      
    
    ],
   
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
     
    }),
   new MiniCssExtractPlugin()],
};

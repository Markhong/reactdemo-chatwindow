const version = require('./package.json').version;

var path = require('path');
var webpack = require("webpack");
// var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //插件： 将css成生文件，而非内联


//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'page');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};
console.log(`This is compiled is under ${isProduction ? 'Production' : 'Development'}`);
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    'index': APP_PATH,
    'chatwindow': path.resolve(ROOT_PATH, 'page/chatwindow/chatwindow.jsx'),
    'prechat': path.resolve(ROOT_PATH, 'page/prechat/prechat.jsx'),
    'vendor': ['react','react-dom','jquery']
  },
  // entry:{
  //   js: [    'webpack-dev-server/client?http://localhost:8080',    'webpack/hot/only-dev-server',    './js'
  // ]
  // }
  // entry:{
  //   "first": APP_PATH+"/1.js",
  //   "second":APP_PATH+"/2.js"
  // }
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    
    //filename: 'bundle.js',
    filename:'[name].js'  //会生成first.js,second.js
    //publicPath: 'http://localhost:8080/',
    //chunkFilename: "[name].chunk.js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx']//resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new ExtractTextPlugin("./style.css"),
    //new ExtractTextPlugin("./style.[contenthash:9].css"),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,  // remove all comments
    //   },
    //   compress: {
    //       warnings: false,
    //       screw_ie8: true  //ignore ie6-8
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.BannerPlugin([
        `version: ${version}`,
        `date: ${new Date(Date.now()+8*60*60*1000).toJSON()}`
      ].join("\n")),

    new webpack.optimize.CommonsChunkPlugin({
            //names: ['vendor', 'manifest'],
            name: 'vendor',
            filename: 'vendor-bundle.js',
//            chunks:'',
            minChunks: Infinity
        }),
    //new webpack.optimize.CommonsChunkPlugin('common.js'),  //用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    //new webpack.HotModuleReplacementPlugin()//热加载插件

  ],
  // devServer: {
  //   colors: true,
  //   historyApiFallback: true,
  //   inline: true,
  //   hot: true
  //   // proxy: {
  //   //   '/api/*': {
  //   //       target: 'http://localhost:5000',
  //   //       secure: false
  //   //   }
  //   // }
  // },
  //devtool: 'eval-source-map',//显示出错代码位置
  devtool: isProduction()?null:'source-map',
  module: {
    // preLoaders: [
    //     {
    //         test: /\.(js|jsx)?$/,
    //         // include: APP_PATH,
    //         loader: 'jshint-loader'
    //     }
    // ],
    loaders: [
      // {
      //   test: /\.css$/,
      //   // loaders: ['style', 'css']
      //   //loader: 'style!css'
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      //   // include: APP_PATH
      // },
      {
        test: /\.(png|jpg|svg|woff|eot|ttf)\??.*$/,
        loader: 'url?limit=4000&name=[path][name].[ext]',
        exclude: "/node_modules/"
        //loader: ExtractTextPlugin.extract('',  "file-loader")
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader"),
        exclude: "/node_modules/"
        //loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      
      {
        test: /\.(js|jsx)?$/, 
        loader: 'babel',
        include: APP_PATH,
        exclude: "/node_modules/"
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ],
    
  },
  jshint: {
    "esnext": true
  },
  //watch: true
};
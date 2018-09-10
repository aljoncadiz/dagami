const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    module: {
        rules: [
              { 
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                  }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                  options: { minimize: true }
                }
              ]
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },{
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
            }      
        ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    resolve: {
      modules: ['app', 'node_modules'],
      extensions: [".jsx", ".js"],
      alias: {
        styles: path.resolve(__dirname, 'src/styles/'),
        assets: path.resolve(__dirname, 'src/assets/')
      }
    },    
    node: { fs: 'empty' },
    devtool: 'source-map'
}
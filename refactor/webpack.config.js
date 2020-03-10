// Modulo de nodeJS para la gestión de directorios
const path = require("path");

module.exports = {
    entry: [
        "@babel/polyfill", 
        "./src/main.js"
    ],
    optimization: {
        minimize: false
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    }
}
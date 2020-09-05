const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: path.join(__dirname, "dev/index.jsx") //for non static user wtitten code
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        stats: 'errors-warnings',
        clientLogLevel: 'error',
        contentBase: 'dist',
        port: 9000,
    },
    module: {
        rules: [
            {
                test :/\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    },
    plugins :[
        new HTMLWebpackPlugin({
            template : path.join(__dirname, "dev/index.html")
        })
    ],
}
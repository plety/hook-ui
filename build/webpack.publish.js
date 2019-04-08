const path = require("path");
const components = Object.assign({},require('../components.json'));
module.exports = {
    entry: path.resolve(__dirname,'../packages/button/index.js'),
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                // options: {
                //   limit: 10000,
                //   name: utils.assetsPath('img/[name].[hash:7].[ext]')
                // }
            }
        ]
    }
};

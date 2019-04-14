const path = require("path");
const components = Object.assign({},require('../components.json'));

module.exports = {
    // entry: path.resolve(__dirname,'../packages/index.js'),
    entry: components,
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname,'../lib'),
    //     library: '[name]', // 指定的就是你使用require时的模块名
    //     libraryTarget: 'umd', // 指定输出格式
    //     umdNamedDefine: true 
    //   },
    output: {
        path:path.resolve(__dirname,'../lib'),
        filename: '[name].js',
        library: '[name]', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // 指定输出格式
        umdNamedDefine: true 
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

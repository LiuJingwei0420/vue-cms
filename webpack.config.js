var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
                { test:/\.vue$/, use:['vue-loader']},// 依赖于 vue-template-compiler,需要额外安装

                { test: /\.css$/,use: ['style-loader', 'css-loader']},
                {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }]
                  },
                  {
                    test:/\.(ttf|eot|svg|woff|woff2|otf)$/,
                    use:[
                        'url-loader'
                    ]
                },
                {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
    
                    
        ]
    },
    resolve:{
        alias:{
            // "vue$":'vue/dist/vue.js'
        }
    }
}
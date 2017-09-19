var Webpack = require('webpack')

module.exports = {
    entry: {
        app: [__dirname + '/src/main.js'],
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react", "stage-1"],
                        plugins: [
                            ["import", {libraryName: "antd", style: "css"}]
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor'],
            minChunks: 1
        }),
        new Webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output:{
                comments: false
            }
        })
    ]
}
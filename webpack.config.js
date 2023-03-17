const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

module.exports = {
    // корневая исходников
    context: path.resolve(__dirname, 'src'),

    // точка входа, может быть несколько
    entry: {
        main: './index.js',
    },

    // точка выхода
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        // указать тут, и можно не писать расширения при импортах
        extensions: ['.js', '.css', '.html'],
        // алиас как во вью
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@cmp': path.resolve(__dirname, 'src/components'),
        }
    },

    // выносит общий код в vendor-чанк
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },

    // автозапуск и авторелоадинг с помощью плагина вебпак-дев-сервер
    devServer: {
        port: 4200,
        hot: isDev,
    },

    //подключение плагинов, перенос ХТМЛ из срк в дист и очистка старых чанков
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[hash].css',
        })
    ],

    // парсинг стилей картинок
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    }, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}
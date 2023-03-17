const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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

    devServer: {
        port: 4200,
    },

    //подключение плагинов, перенос ХТМЛ из срк в дист и очистка старых чанков
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],

    // парсинг стилей картинок
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// вынесли объект оптимизации в функцию чтобы определить среду разработки и расширить
const optimization = () => {
    // дефолтный конфиг поля оптимизации вебпака
    const conf = {
        splitChunks: {
            chunks: 'all',
        }
    }

    // если продакшен добавляем минимайзеры, в девелопе - нельзя
    if (isProd) {
        conf.minimizer = [new OptimizeCSSAssetsWebpackPlugin(), new TerserWebpackPlugin()]
    }

    return conf;
}

// паттерн файлнейма: в дев только имя, в проде имя + хэш
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    // корневая исходников
    context: path.resolve(__dirname, 'src'),

    // точка входа, может быть несколько
    entry: {
        main: './index.js',
    },

    // точка выхода
    output: {
        filename: filename('js'),
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
    optimization: optimization(),

    // автозапуск и авторелоадинг с помощью плагина вебпак-дев-сервер
    devServer: {
        port: 4200,
        hot: isDev,
    },

    //подключение плагинов, перенос ХТМЛ из срк в дист и очистка старых чанков
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            // минификация хтмл
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist'),
                    noErrorOnMissing: true,
                }
            ]
        }),
        new MiniCSSExtractPlugin({
            filename: filename('css'),
        }),
        new OptimizeCSSAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
    ],

    // парсинг стилей картинок
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'less-loader']
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
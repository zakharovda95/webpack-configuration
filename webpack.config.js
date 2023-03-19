const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// вынесли объект оптимизации в функцию чтобы определить среду разработки и расширить
const optimization = () => {
  // дефолтный конфиг поля оптимизации вебпака
  const conf = {
    splitChunks: {
      chunks: 'all',
    },
  };

  // если продакшен добавляем минимайзеры, в девелопе - нельзя
  if (isProd) {
    conf.minimizer = [
      new OptimizeCSSAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return conf;
};

// паттерн файлнейма: в дев только имя, в проде имя + хэш
const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

// добавляем нужные цсс лоадеры
const cssLoaders = extra => {
  const loaders = [MiniCSSExtractPlugin.loader, 'css-loader'];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

// добавляем нужные бабаел лоадеры
const babelLoaders = extra => {
  const loaders = {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  };

  if (extra) {
    loaders.options.presets.push(extra);
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      // минификация хтмл
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCSSExtractPlugin({
      filename: filename('css'),
    }),
    new OptimizeCSSAssetsWebpackPlugin(),
    new TerserWebpackPlugin(),
    // вместо еслинт-лоадера (он устарел)
    new ESLintWebpackPlugin(),
  ];

  // какая то фигня для анализа бандлов, не обязательно в конфигурации
  // if (isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }

  return base;
};

module.exports = {
  // корневая исходников
  context: path.resolve(__dirname, 'src'),

  // точка входа, может быть несколько, если бабел - в майн добавляем полифил
  entry: {
    main: ['@babel/polyfill', './index.ts'],
  },

  // точка выхода
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    // указать тут, и можно не писать расширения при импортах
    extensions: ['.js', '.html', '.ts'],
    // алиас как во вью
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@cmp': path.resolve(__dirname, 'src/components'),
    },
  },

  // выносит общий код в vendor-чанк
  optimization: optimization(),

  // автозапуск и авторелоадинг с помощью плагина вебпак-дев-сервер
  devServer: {
    port: isDev ? 4201 : 4200,
    hot: isDev,
  },

  //подключение плагинов, перенос ХТМЛ из срк в дист и очистка старых чанков
  plugins: plugins(),

  // подключение лоадеров для стилей, препроцессоров, картинок, файлов, бабела и тд
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      // бейбл нужно установить данный пресет для жс
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: babelLoaders(),
      },
      // бейбл: для ТС нужно расширить
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: babelLoaders('@babel/preset-typescript'),
      },
    ],
  },
};

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? '[name].js' : '[name].min.js';

const plugins = [
  new LodashModuleReplacementPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: `${filename}.map`
  })
];

if (process.env.ANALYZE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}


module.exports = module.exports = (env = {}) => {
  console.log('env-->', env)

  let library = 'lets-form';
  let entryPoint = path.join(__dirname, 'index.js');
  let outputFile = 'lets-form.min.js';
  let entryPointName = 'lets-form';

  if (env.framework === 'rsuite5') {
    console.log('Building for RSuite5 framework');
    library = 'lets-form-rsuite5';
    entryPoint = path.join(__dirname, 'react-rsuite5/index.js');
    outputFile = 'rsuite5.js';
    entryPointName = 'lets-form-rsuite5';
  } else {
    console.log('Building for ALL frameworks');
  }

  return {
    mode: 'production',
    entry: {
      [entryPointName]: entryPoint
    },
    output: {
      path: path.join(__dirname, 'dist'),
      library: library,
      filename: outputFile,
      libraryTarget: 'umd',
    },
    externals: [
      {
        'rsuite': 'umd rsuite',
        'rsuite/locales': 'umd rsuite/locales',
        react: 'umd react',
        'react-dom': 'umd react-dom',
        'prop-types': 'umd prop-types',
        '@mui/material': 'umd @mui/material',
        'react-bootstrap': 'umd react-bootstrap',
        'antd': 'umd antd',
        'dayjs': 'umd dayjs'
      }
    ],
    /*

    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      },
      'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
          umd: 'react-dom'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
        umd: 'prop-types'
      },
      'react-addons-css-transition-group': {
        commonjs: 'react-addons-css-transition-group',
        commonjs2: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group',
        umd: 'react-addons-css-transition-group',
        root: ['React','addons','CSSTransitionGroup']
      },
      'rsuite': {
        commonjs2: 'rsuite',
        commonjs: 'rsuite',
        umd: 'rsuite',
        amd: 'rsuite'
      },
      '@mui/material': {
        commonjs2: '@mui/material',
        commonjs: '@mui/material',
        umd: '@mui/material',
        amd: '@mui/material'
      }
    },
    */

    optimization: {
      minimize: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            /*options: {
              cacheDirectory: true,
              envName: `dist-prod`,
            },*/
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    }
  };
};
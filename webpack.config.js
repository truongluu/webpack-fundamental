const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/presets/loadPresets')


module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log('presets', presets);
  return merge({
    mode,
    output: {
      filename: "bundle.js",

    },
    module: {
      rules: [
        {
          test: /\.jpe?g$|\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4000
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ]
  },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
}
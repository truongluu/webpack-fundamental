const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => ({
  mode,
  output: {
    filename: '[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
})
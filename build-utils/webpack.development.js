module.exports = (mode) => {
  return ({
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                import: true
              }
            }
          ]
        }
      ]
    }
  })
}
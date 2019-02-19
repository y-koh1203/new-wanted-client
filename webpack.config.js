const path = require('path');

module.exports = {
    entry: {
      app : './src/main.tsx',
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public/dist/'),
    },
  
    devtool: 'source-map',
  
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    devServer: {
        contentBase: "./public",
        hot: true
    },
  
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {loader: 'ts-loader'}
          ]
        },
        {test: /\.css$/, use: ['css-loader']}
      ]
    }
  }
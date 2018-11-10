const path = require('path');

module.exports = {
    entry: './src/index.tsx',
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
        }
      ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
  }
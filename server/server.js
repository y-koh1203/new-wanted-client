'use strict';
const express = require('express');
const path = require('path')
const app = express();

const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)

//ホットリロード機能
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.use(express.static(path.resolve(__dirname,"../public")))

app.get(
    '*',
    (req,res) => {
        res.sendFile(path.resolve(__dirname,"../public/index.html"));
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    }
);
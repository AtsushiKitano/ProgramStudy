const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/entry.js',

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
};

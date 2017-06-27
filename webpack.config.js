// var path = require('path');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            // {
            //     test: /\.scss/,
            //     loader: 'style-loader!css-loader!sass-loader'
            // }
        ]
    },
    output: {
        filename: 'dist',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

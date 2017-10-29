const path = require('path');

module.exports = {
    entry: './source/main.js',
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: 'app.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
        ],
    },
};
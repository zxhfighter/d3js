module.exports = {
    entry: './src/main.js',
    output: {
        path: '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: /node_modules/
            }
        ]
    },
    babel: {
        presets: ['es2015']
    }
};

const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        mode: env.NODE_ENV,
        entry: path.join(__dirname, 'src/index.jsx'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
        devServer: {
            contentBase: path.join(__dirname),
            publicPath: '/build',
            hot: true,
            historyApiFallback: true,
            proxy: {
                '/api': 'http://localhost:3000'
            }
        }
    }
}
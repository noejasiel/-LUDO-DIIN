const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".jsx", "json"],
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jp(e*)g|jpeg|gif|)$/i,
            type: "asset/resource",
        },
        {
            test: /\.(otf|pdf)$/,
            loader: "file-loader",
            options: {
                name: "images/[hash]-[name].[ext]",
            },
        },

        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
        ],
    },
}
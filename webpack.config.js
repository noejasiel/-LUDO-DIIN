const path = require("path");

const config = {
    mode: process.env.NODE_ENV || "development",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:3003',
              secure: false,
            },
        },
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true,
        historyApiFallback: true,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  { loader: "css-loader", options: { importLoaders: 1 } },
                  "postcss-loader",
                ],
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
};

module.exports = config;

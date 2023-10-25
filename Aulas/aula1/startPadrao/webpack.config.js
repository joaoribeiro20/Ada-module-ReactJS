const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    output:{
        path: path.join(__dirname,"/dist"),
        filename: "bundle.js",
    },
    plugins:[
            new HtmlWebpackPlugin({
            template:"public/index.html",
        }),
    ],
    devServer: {
        port: 3030,
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "bebel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:["style-loader", "css-loader", "sass=loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            }
        ]
    }
}
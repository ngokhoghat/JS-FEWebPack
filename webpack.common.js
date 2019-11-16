module.exports = {
    entry: {
        app: './src/_app.js',
        server: "./src/server.js"
    },

    module: {
        noParse: function(content) {
            return /express/.test(content);
        },
        rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'modules': 'false', //commonjs,amd,umd,systemjs,auto
                                    'useBuiltIns': 'usage',
                                    'targets': '> 0.25%, not dead',
                                    'corejs': 3
                                }
                            ]
                        ]
                    }
                }]
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            }
        ]
    },
}
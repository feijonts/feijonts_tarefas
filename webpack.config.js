const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: ['@babel/polyfill',path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        port: 3000
    },
    devtool: 'source-map',
    resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
        },
      },
      plugins: [
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
        }),
      ],
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlOptions = {
  title: 'todo',
  favicon: 'favicon.ico',
  meta: {viewport: 'width=device-width, initial-scale=1'},
}

module.exports = {
  output: {
    publicPath: '/',
    filename: 'app-[contenthash].js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(htmlOptions),
    new HtmlWebpackPlugin(Object.assign({}, htmlOptions, {
      filename: '404.html',
    })),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: ['static'],
    historyApiFallback: true,
  }
}

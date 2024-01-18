const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/app.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:12].js",
    clean: true,
    publicPath: "/",
  },
  // 插件
  plugins: [
    // 打包 html 资源
    new HtmlWebpackPlugin({
      // 起始html文件
      template: path.resolve(__dirname, "../public/index.html"),
      // 将 script 放在 body 结尾
      inject: "body",
      // 压缩优化
      minify: {
        removeAttributeQuotes: true, // 去除引号
        removeComments: true, // 去除注释
        //collapseWhitespace: true, // 代码折叠
      },
      // 自定义的选项
      title: "广告系统",
    }),
  ],
};

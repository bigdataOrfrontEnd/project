const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/app.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:12].js",
    clean: true,
    publicPath: "",
  },
  // loaders,处理ejs模版
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          variable: "data",
          //interpolate : '\\{\\{(.+?)\\}\\}',
          //evaluate : '\\[\\[(.+?)\\]\\]'
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // 解析
  resolve: {
    // 设置可以省略的扩展名
    extensions: [".js", ".json", ".ejs"],
    // 设置路径别名
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
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
    // 将源目录（public）中的文件复制到目标目录（项目输出目录）
    new CopyWebpackPlugin({
      patterns: [
        {
          // 源目录
          from: path.resolve(__dirname, "../public"),
          // 目标目录
          to: path.resolve(__dirname, "../dist"),
          globOptions: {
            ignore: ["**/**.html"], // 忽略所有的html文件----不然会冲突的
          },
        },
      ],
    }),
  ],
};

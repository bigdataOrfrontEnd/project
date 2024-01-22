const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
module.exports = merge(baseConfig, {
  // 模式
  mode: "development",

  // 自动开启服务
  devServer: {
    port: "80",
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8088/",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});

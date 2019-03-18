const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL =
  // process.env.NODE_ENV === "生产环境" ? "/项目路径/" : "/";
  process.env.NODE_ENV === "production" ? "/wx/" : "/";

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  /* resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
      jquery: resolve("static/jquery-3.3.1.min.js")
    }
  }, */
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("_a", resolve("src/assets"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  /* 开发跨域 */
  /* devServer: {
    // proxy: "https://www.zi-ke.com/"
    proxy: {
      "/api": {
        target: "http://www.doutieba.com/",
        // 将主机头的原点更改为目标URL
        changeOrigin: true,
        // 如果您想代理websockets
        // ws:true,
        pathRewrite: {
          "^/api": "/" //路径重写
        }
      }
    }
  } */
};

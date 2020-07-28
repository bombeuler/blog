const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:"/blog/dist/",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("/src"))
      .set("~assets", resolve("/src/assets"))
      .set("~store", resolve("/src/store"))
      .set("~router", resolve("/src/router"))
      .set("~network", resolve("/src/network"))
      .set("~components", resolve("/src/components"))
      .set("~animation", resolve("/src/assets/animation"));
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      //入口起点的最大体积	
      maxEntrypointSize: 50000000,
      //生成文件的最大体积	 
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示	 
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
  },
};

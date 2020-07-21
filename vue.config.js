const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: ["vuetify"],
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
};

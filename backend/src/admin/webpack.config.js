// webpack.config.js

module.exports = {
  //...
  resolve: {
    fallback: {
      "util": require.resolve("util/")
    }
  }
};

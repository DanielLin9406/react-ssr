require("@babel/register");
let webpackConfig;
if (process.env.NODE_ENV === "production_ssr") {
  webpackConfig = "./webpack.client.prod.ssr";
} else {
  webpackConfig = "./webpack.client.dev";
}
module.exports = require(webpackConfig);

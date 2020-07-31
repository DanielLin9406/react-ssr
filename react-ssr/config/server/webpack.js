require("@babel/register");
let webpackConfig;
if (process.env.NODE_ENV === "production_ssr") {
  webpackConfig = "./webpack.server.prod";
} else {
  webpackConfig = "./webpack.server.dev";
}
module.exports = require(webpackConfig);

import { merge } from "webpack-merge";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
import commonConfig from "./webpack.common";

const getProdSSRClientConfig = (target) => ({
  mode: "development",
  name: target,
});

const prodSSRClientConfig = {
  mode: "development",
  entry: {
    index: [path.join(__dirname, "../../src/client/index.tsx")],
    vendor: ["react", "react-dom", "react-redux", "redux", "react-router-dom"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../../build-static"),
  },
  plugins: [
    new LoadablePlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: false,
          chunks: "all",
        },
      },
    },
  },
};

export default merge(commonConfig, prodSSRClientConfig);

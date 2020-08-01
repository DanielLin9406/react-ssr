import { merge } from "webpack-merge";
import path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
import commonConfig from "./webpack.common";

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined";

const prodSSRClientConfig = {
  mode: "production",
  // devtool: "source-map",
  entry: {
    index: [path.join(__dirname, "../../src/client/index.tsx")],
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../../build-static"),
  },
  plugins: (() => {
    const plugins = [
      new LoadablePlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["**/*"],
      }),
    ];
    if (isAnalyze) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
  })(),
};

export default merge(commonConfig, prodSSRClientConfig);

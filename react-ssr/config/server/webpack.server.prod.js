import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import commonConfig from "./webpack.common";
import nodeExternals from "webpack-node-externals";
import WebpackAssetsManifest from "webpack-assets-manifest";

const prodSSRServerConfig = {
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "../../build-server"),
    filename: "[name].js",
  },
  entry: {
    server: path.resolve(__dirname, "../../src/server/index.tsx"),
  },
  plugins: [
    new webpack.DefinePlugin({ __isBrowser__: "false" }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new WebpackAssetsManifest({}),
  ],
};

export default merge(commonConfig, prodSSRServerConfig);

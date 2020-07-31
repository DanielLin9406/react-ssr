import webpack from "webpack";
import { merge } from "webpack-merge";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";
import commonConfig from "./webpack.common";
import nodeExternals from "webpack-node-externals";

const prodSSRServerConfig = {
  mode: "development",
  target: "node",
  // externals: nodeExternals({
  //   allowlist: [
  //     /^@loadable\/component$/,
  //     /^react$/,
  //     /^react-dom$/,
  //     /^loadable-ts-transformer$/,
  //   ],
  // }),
  output: {
    path: path.resolve(__dirname, "../../build-server"),
    filename: "[name].js",
  },
  entry: {
    server: path.resolve(__dirname, "../../src/server/index.tsx"),
  },
  plugins: [
    new webpack.DefinePlugin({ __isBrowser__: "false" }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
  ],
};

export default merge(commonConfig, prodSSRServerConfig);

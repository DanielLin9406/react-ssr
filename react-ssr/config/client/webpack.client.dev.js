import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import paths from "../common/webpack.const";
import commonConfig from "./webpack.common";

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined";

const devClientConfig = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: [
      "react-hot-loader/patch",
      path.join(__dirname, "../../src/client/index.tsx"),
    ],
  },
  output: {
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
  },
  plugins: (() => {
    const plugins = [
      // Remove this if using SSR, delegate template to renderer.tsx
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: paths.appHtml,
      }),
    ];
    if (isAnalyze) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
  })(),
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

export default merge(commonConfig, devClientConfig);

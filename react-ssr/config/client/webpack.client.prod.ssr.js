import { merge } from "webpack-merge";
import path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
import commonConfig from "./webpack.common";

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined";

const prodSSRClientConfig = {
  mode: "production",
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
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
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[name].[hash].css",
        allChunks: false,
      }),
    ];
    if (isAnalyze) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
  })(),
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      cacheGroups: {
        reactVendor: {
          name: "reactVendor",
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: 10,
        },
        common: {
          name: "common",
          minChunks: 2,
          priority: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react)(!react-dom)(!react-router-dom)[\\/]/,
          name: "vendor",
        },
      },
    },
  },
};

export default merge(commonConfig, prodSSRClientConfig);

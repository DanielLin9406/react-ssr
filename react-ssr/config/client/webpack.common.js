import paths from "../common/webpack.const";
import { loadableTransformer } from "loadable-ts-transformer";

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({ before: [loadableTransformer] }),
            configFile: "../../tsconfig.json",
          },
        },
        include: paths.srcClientDir,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
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

export default commonConfig;

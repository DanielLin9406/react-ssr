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
            configFile: "../../tsconfig-server.json",
          },
        },
        include: paths.srcDir,
        // exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default commonConfig;

import paths from "./webpack.const";

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: {
          loader: "ts-loader",
        },
        include: paths.srcDir,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default commonConfig;

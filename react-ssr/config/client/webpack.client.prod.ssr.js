import { merge } from "webpack-merge";
import path from "path";
import commonConfig from "../common/webpack.common";

const prodSSRClientConfig = {
  mode: "production",
  entry: {
    index: [path.join(__dirname, "../../src/client/index.tsx")],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../build-static"),
  },
};

export default merge(commonConfig, prodSSRClientConfig);

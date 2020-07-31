import path from "path";

const rootDir = path.join(__dirname, "../../");

export default {
  rootDir,
  srcDir: path.join(rootDir, "src"),
  srcClientDir: path.join(rootDir, "src/client"),
  srcServerDir: path.join(rootDir, "src/server"),
  appHtml: path.join(rootDir, "src/client/assets/templates/index.html"),
  buildDir: path.join(rootDir, "build-static"),
};

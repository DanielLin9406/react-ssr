import path from "path";

const rootDir = path.join(__dirname, "../../");

export default {
  rootDir,
  srcDir: path.join(rootDir, "src"),
  appHtml: path.join(rootDir, "src/client/assets/templates/index.html"),
};

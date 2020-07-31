// import { Loadable } from "../page-helper/loadable";
import loadable from "@loadable/component";

// const LoadableComponent2 = Loadable({
//   loader: () => import(/* webpackChunkName: "home" */ "./HomePageContainer"),
// });

const LoadableComponent = loadable(() =>
  import(/* webpackChunkName: "home" */ "./HomePageContainer")
);

export default LoadableComponent;

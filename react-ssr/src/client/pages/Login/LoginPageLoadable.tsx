// import { Loadable } from "../page-helper/loadable";
import loadable from "@loadable/component";

// const LoadableComponent2 = Loadable({
//  loader: () => import(/* webpackChunkName: "login" */ "./LoginPageContainer"),
// });

const LoadableComponent = loadable(() =>
  import(/* webpackChunkName: "login" */ "./LoginPageContainer")
);

export default LoadableComponent;

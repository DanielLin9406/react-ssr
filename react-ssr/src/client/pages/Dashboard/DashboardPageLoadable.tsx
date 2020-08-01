// import { Loadable } from "../page-helper/loadable";
import loadable from "@loadable/component";

// const LoadableComponent2 = Loadable({
//  loader: () =>
//    import(/* webpackChunkName: "dashboard" */ "./DashboardPageContainer"),
// });

const LoadableComponent = loadable(() =>
  import(/* webpackChunkName: "dashboard" */ "./DashboardPageContainer")
);

export default LoadableComponent;

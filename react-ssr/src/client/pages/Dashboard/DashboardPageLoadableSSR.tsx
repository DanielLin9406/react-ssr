import DashboardPageLoadable from "./DashboardPageLoadable";
import { getCurrentUser } from "../../modules/user/model/use-case/getCurrentUser";

const SSRLoadData = ({ dispatch }: { dispatch: any }) =>
  dispatch(getCurrentUser());

export default {
  component: DashboardPageLoadable,
  SSRLoadData,
};

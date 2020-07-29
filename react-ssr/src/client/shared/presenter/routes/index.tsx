import { App } from "./App";
import LoginPageContainer from "../../../pages/Login/LoginPageContainer";
import HomePageContainer from "../../../pages/Home/HomePageContainer";
import DashboardContainer from "../../../pages/Dashboard/DashboardPageContainer";
import { RouteConfig } from "react-router-config";

const pagePaths = {
  INDEX: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
};

const pagesInfoList = [
  { ...DashboardContainer, path: pagePaths.DASHBOARD },
  { ...LoginPageContainer, path: pagePaths.LOGIN, exact: true },
  { ...HomePageContainer, path: pagePaths.INDEX },
];

const AppRoutes: RouteConfig[] = [
  {
    component: App,
    // SSRLoadData: ({ dispatch }: { dispatch: any }) => dispatch(),
    routes: [
      { ...DashboardContainer, path: pagePaths.DASHBOARD },
      { ...LoginPageContainer, path: pagePaths.LOGIN, exact: true },
      { ...HomePageContainer, path: pagePaths.INDEX },
    ],
  },
];

export { pagesInfoList, AppRoutes };

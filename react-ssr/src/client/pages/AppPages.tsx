import React from "react";
import App from "../shared/presenter/routes/App";
import LoginPage from "./Login/LoginPageLoadableSSR";
import HomePage from "./Home/HomePageLoadableSSR";
import DashboardPage from "./Dashboard/DashboardPageLoadableSSR";
import NotFoundPage from "./system/NotFoundPage";
import RedirectToNotFoundPage from "./system/RedirectToNotFound";
import { RouteConfig } from "react-router-config";

export interface IPageProps {
  authType: string;
  component: React.ReactNode;
  path: string;
  routes?: IPageProps[];
}

const pagePaths = {
  index: "/",
  login: "/login",
  dashboard: "/dashboard",
  notfound: "/404",
};

const pagesInfoList = [
  { ...DashboardPage, path: pagePaths.dashboard, exact: true },
  { ...LoginPage, path: pagePaths.login, exact: true },
  { ...HomePage, path: pagePaths.index, exact: true },
  { ...NotFoundPage, path: pagePaths.notfound },
  { ...RedirectToNotFoundPage },
];

const AppRoutes: RouteConfig[] = [
  {
    component: App,
    // SSRLoadData: ({ dispatch }: { dispatch: any }) => dispatch(),
    routes: [...pagesInfoList],
  },
];

export { pagesInfoList, pagePaths, AppRoutes };

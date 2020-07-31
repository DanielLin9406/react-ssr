import React from "react";
import { App } from "../shared/presenter/routes/App";
import LoginPageContainerSSR from "./Login/LoginPageContainerSSR";
import HomePageContainerSSR from "./Home/HomePageContainerSSR";
import DashboardPageContainerSSR from "./Dashboard/DashboardPageContainerSSR";
import { RouteConfig } from "react-router-config";

export interface IPageProps {
  authType: string;
  component: React.ReactNode;
  path: string;
  routes?: IPageProps[];
}

const pagePaths = {
  INDEX: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
};

const pagesInfoList = [
  { ...DashboardPageContainerSSR, path: pagePaths.DASHBOARD },
  { ...LoginPageContainerSSR, path: pagePaths.LOGIN },
  { ...HomePageContainerSSR, path: pagePaths.INDEX },
];

const AppRoutes: RouteConfig[] = [
  {
    component: App,
    // SSRLoadData: ({ dispatch }: { dispatch: any }) => dispatch(),
    routes: [...pagesInfoList],
  },
];

export { pagesInfoList, AppRoutes };

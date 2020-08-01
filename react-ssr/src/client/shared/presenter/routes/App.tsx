import React from "react";
import { hot } from "react-hot-loader";
import { renderRoutes } from "react-router-config";

const App: React.FC<any> = ({ route }) => {
  return <div id="app">{renderRoutes(route.routes)}</div>;
};

export default hot(module)(App);

import React from "react";
import { renderRoutes } from "react-router-config";

const App: React.FC<any> = ({ route }) => {
  return <div id="app">{renderRoutes(route.routes)}</div>;
};

export { App };

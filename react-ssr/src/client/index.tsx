import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { isServer } from "./modules/model/infra/Store";
import { AppRoutes } from "./pages/AppPages";
import { encapsulatedStore } from "./modules/model/infra/Store";
import { loadableReady } from "@loadable/component";

const root = document.querySelector("#root");

const Application = (
  <Provider store={encapsulatedStore()}>
    <BrowserRouter>
      <div>{renderRoutes(AppRoutes)}</div>
    </BrowserRouter>
  </Provider>
);

if (isServer) {
  loadableReady(() => {
    hydrate(Application, root);
  });
} else {
  render(Application, root);
}

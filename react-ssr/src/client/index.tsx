import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { isServer } from "./shared/model/infra/Store";
import { AppRoutes } from "./shared/presenter/routes/index";
import { encapsulatedStore } from "./shared/model/infra/Store";

const Application = (
  <AppContainer>
    <Provider store={encapsulatedStore()}>
      <BrowserRouter>
        <div>{renderRoutes(AppRoutes)}</div>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);
if (isServer) {
  ReactDOM.hydrate(Application, document.querySelector("#root"));
} else {
  ReactDOM.render(Application, document.querySelector("#root"));
}

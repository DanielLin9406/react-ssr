import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { AppRoutes } from "../../../../client/shared/presenter/routes";

const serverInitRenderer = (req: any, store: any, context: any) => {
  const helmet = Helmet.renderStatic();
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>  
  `;
};

export { serverInitRenderer };

import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { ChunkExtractor } from "@loadable/server";
import { AppRoutes } from "../../../../client/pages/AppPages";

const serverInitRenderer = (req: any, store: any, context: any) => {
  const helmet = Helmet.renderStatic();
  const webStats = path.resolve("./build-static/loadable-stats.json");
  const webExtractor = new ChunkExtractor({
    statsFile: webStats,
    entrypoints: ["index"],
  });
  // const jsx = webExtractor.collectChunks();
  const jsx = webExtractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(jsx);
  // const content = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.path} context={context}>
  //       <div>{renderRoutes(AppRoutes)}</div>
  //     </StaticRouter>
  //   </Provider>
  // );
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        ${webExtractor.getScriptTags()}
      </body>
    </html>  
  `;
};

export { serverInitRenderer };

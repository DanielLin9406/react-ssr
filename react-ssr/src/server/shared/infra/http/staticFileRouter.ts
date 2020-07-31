import { Router } from "express";
import { matchRoutes } from "react-router-config";
import { AppRoutes } from "../../../../client/pages/AppPages";
import { serverInitRenderer } from "../../application/staticRenderer/renderer";
import { storeCreator } from "../../application/storeCreator/storeCreator";
const staticFileRouter = Router();

staticFileRouter.get("*", (req, res) => {
  const store = storeCreator(req);
  const promises = matchRoutes(AppRoutes, req.path)
    .map(({ route }) => {
      return route.SSRLoadData ? route.SSRLoadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context: { url?: string; notFound?: string } = {};
    const content = serverInitRenderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

export { staticFileRouter };

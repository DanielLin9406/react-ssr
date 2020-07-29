import { Router } from "express";
import { userRouterContainer } from "../../../../user/infra/http/restAPI/routes";

const v1Router = Router();

v1Router.use("/v1", userRouterContainer);

export { v1Router };

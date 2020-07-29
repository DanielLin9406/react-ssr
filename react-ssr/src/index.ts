import http from "http";
import app from "./server/shared/infra/http/app";

http.createServer(app);

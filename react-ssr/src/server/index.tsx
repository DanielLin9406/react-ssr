import http from "http";
import app from "./shared/infra/http/app";

http.createServer(app);

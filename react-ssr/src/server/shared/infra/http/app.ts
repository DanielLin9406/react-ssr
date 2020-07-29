import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { staticFileRouter } from "./staticFileRouter";

const app = express();
const origin = {
  origin: "*",
};

app.use(bodyParser.json());
app.use(cors(origin));

app.use(express.static("build-static"));
app.use(staticFileRouter);

app.listen(process.env.PORT, () => {
  console.log(`Web Service listening on port ${process.env.PORT}!`);
});

export default app;

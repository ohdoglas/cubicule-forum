import express, { Application } from "express";
import routes from "./routes/router";

const app: Application = express();

app.use(express.json());

app.use(routes);

export default app;
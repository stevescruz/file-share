import dotenv from "dotenv";
dotenv.config();
import express from "express";

import initDb from "./database/initDb.js";
import filesRouter from "./routes/filesRoutes.js";
import { ROUTES } from "./shared/constants.js";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  initDb();
});

app.use(ROUTES.files, filesRouter);
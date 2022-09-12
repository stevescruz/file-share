import dotenv from "dotenv";
dotenv.config();
import express from "express";

import initDb from "./database/initDb.js";
import filesRouter from "./routes/filesRoutes.js";
import { DIR, PATHS, SERVER, ROUTES } from "./shared/constants.js";

const app = express();
const port = process.env.PORT;

app.use(express.static(DIR.public));
app.use(DIR.css, express.static(PATHS.toCssDir));
app.use(DIR.js, express.static(PATHS.toJsDir));
app.use(DIR.img, express.static(PATHS.toImgDir));

app.set("views", PATHS.toViewsDir);
app.set("view engine", SERVER.defaultTemplateEngine);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  initDb();
});

app.use(ROUTES.files, filesRouter);
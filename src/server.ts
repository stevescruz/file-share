import dotenv from "dotenv";
import express from "express";

import { DIR, PATHS, SERVER, ROUTES } from "./shared/constants.js";
import initDb from "./database/initDb.js";
import filesRouter from "./routes/filesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(PATHS.toPublicDir));
app.use(DIR.css, express.static(PATHS.toCssDir));
app.use(DIR.js, express.static(PATHS.toJsDir));
app.use(DIR.img, express.static(PATHS.toImgDir));
app.use(DIR.sounds, express.static(PATHS.toSoundsDir));

app.set("views", PATHS.toViewsDir);
app.set("view engine", SERVER.defaultTemplateEngine);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  initDb();
});

app.use(ROUTES.files, filesRouter);

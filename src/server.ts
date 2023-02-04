import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";

import initDb from "./database/initDb";
import filesRouter from "./routes/filesRoutes";
import { DIR, PATHS, SERVER, ROUTES } from "./shared/constants";

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
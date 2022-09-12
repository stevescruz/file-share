import { dirname, join } from "path";
import { fileURLToPath } from "url";

const APP = {
  url: "http://127.0.0.1:3000"
};

const DIR = {
  public: "/public",
  css: "/css",
  js: "/js",
  img: "/img",
  views: "/views",
};

const SERVER = {
  defaultTemplateEngine: "ejs",
}

/*
  Workaround for __dirname is not defined when loading file as an ECMAScript module 
  READ: https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
  READ: https://github.com/nodejs/help/issues/2907#issuecomment-757446568
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATHS = {
  toCssDir: join(__dirname, "../..", DIR.public, DIR.css),
  toJsDir: join(__dirname, "../..", DIR.public, DIR.js),
  toImgDir: join(__dirname, "../..", DIR.public, DIR.img),
  toUploadsDir: join(__dirname, "../..", DIR.public),
  toViewsDir: join(__dirname, "..", DIR.views)
}

const ROUTES = {
  files: "/files",
  upload: "/upload",
  download: "/download",
}

const VIEWS = {
  fileDownload: "filedownload",
  fileUpload: "fileupload",
  shareLink: "sharelink"
}

const FILE_STORAGE = {
  formFieldName: "file"
};

export { APP, DIR, PATHS, SERVER, ROUTES, VIEWS, FILE_STORAGE };
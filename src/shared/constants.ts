import { dirname, join } from "path";
import { fileURLToPath } from "url";

export enum APP {
  url = "http://127.0.0.1:3000",
}

export enum DIR {
  public = "/public",
  css = "/css",
  js = "/js",
  img = "/img",
  sounds = "/sounds",
  uploads = "/uploads",
  views = "/views",
}

export enum SERVER {
  defaultTemplateEngine = "ejs",
}

/*
  Workaround for directoryname is not defined when loading file as an ECMAScript module
  READ: https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
  READ: https://github.com/nodejs/help/issues/2907#issuecomment-757446568
*/
const filename = fileURLToPath(import.meta.url);
const directoryname = dirname(filename);
const publicDir = join(directoryname, "../..", DIR.public);

export const PATHS = {
  toPublicDir: publicDir,
  toCssDir: join(directoryname, "../..", DIR.public, DIR.css),
  toJsDir: join(directoryname, "../..", DIR.public, DIR.js),
  toImgDir: join(directoryname, "../..", DIR.public, DIR.img),
  toSoundsDir: join(directoryname, "../..", DIR.public, DIR.sounds),
  toUploadsDir: join(directoryname, "../..", DIR.public, DIR.uploads),
  toViewsDir: join(directoryname, "..", DIR.views),
};

export enum ROUTES {
  files = "/files",
  upload = "/upload",
  download = "/download",
}

export enum VIEWS {
  fileDownload = "filedownload",
  fileUpload = "fileupload",
  shareLink = "sharelink",
}

export enum FILE_STORAGE {
  formFieldName = "file",
  maxFileCountAllowed = 1,
}

import multer from "multer";

import fileStorage from "../utils/fileStorage.js";
import fileFilter from "../utils/fileFilter.js";
import { FILE_STORAGE } from "../shared/constants.js";

const uploadMultipleFilesMiddleware = multer({
  storage: fileStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
}).array(FILE_STORAGE.formFieldName);

export default uploadMultipleFilesMiddleware;
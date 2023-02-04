import * as multer from "multer";

import fileStorage from "../utils/fileStorage";
import fileFilter from "../utils/fileFilter";
import { FILE_STORAGE } from "../shared/constants";

const uploadMultipleFilesMiddleware = multer({
  storage: fileStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
}).array(FILE_STORAGE.formFieldName);

export default uploadMultipleFilesMiddleware;
import multer from "multer";
import { FILE_STORAGE } from "../shared/constants.js";
import fileFilter from "../utils/file-filter.js";
import fileStorage from "../utils/file-storage.js";

const multerOptions: multer.Options = {
  storage: fileStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
};

const fieldName = FILE_STORAGE.formFieldName;
const maxFileCount = FILE_STORAGE.maxFileCountAllowed;

export const uploadMultipleFilesMiddleware = multer(multerOptions).array(
  fieldName,
  maxFileCount,
);
export const uploadSingleFileMiddleware =
  multer(multerOptions).single(fieldName);

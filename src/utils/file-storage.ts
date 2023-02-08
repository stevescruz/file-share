import { Request } from "express";
import * as multer from "multer";

import { PATHS } from "../shared/constants.js";
import generateUniqueFilename from "./generate-unique-filename.js";

const diskStorageOptions: multer.DiskStorageOptions = {
  destination: PATHS.toUploadsDir,
  filename(_req: Request, file, callback) {
    const newFilename = generateUniqueFilename(
      file.originalname,
      file.fieldname,
    );
    callback(null, newFilename);
  },
};

const fileStorage = multer.diskStorage(diskStorageOptions);
export default fileStorage;

import multer from "multer";

import { PATHS } from "../shared/constants.js";
import generateUniqueFilename from "./generateUniqueFilename.js";

const fileStorage = multer.diskStorage({
  destination: PATHS.toUploadsDir,
  filename(req, file, callback) {
    const newFilename = generateUniqueFilename(file.originalname, file.fieldname);
    callback(null, newFilename);
  },
});

export default fileStorage;
import multer from "multer";

import { PATHS } from "../shared/constants";
import generateUniqueFilename from "./generateUniqueFilename";

const fileStorage = multer.diskStorage({
  destination: PATHS.toUploadsDir,
  filename(req, file, callback) {
    const newFilename = generateUniqueFilename(file.originalname, file.fieldname);
    callback(null, newFilename);
  },
});

export default fileStorage;
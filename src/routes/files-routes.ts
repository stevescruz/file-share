import * as express from "express";
import UploadFilesController from "../controllers/upload-files-controller.js";
import { uploadSingleFileMiddleware } from "../middlewares/upload-files-middlewares.js";
// import { uploadMultipleFilesMiddleware } from "../middlewares/upload-files-middlewares.js";

const filesRouter = express.Router();
const uploadFilesController = new UploadFilesController();

filesRouter.get("/upload", uploadFilesController.show);

filesRouter.post(
  "/share-link",
  uploadSingleFileMiddleware,
  uploadFilesController.create,
);

filesRouter.get("/download/:filename", () => {});

export default filesRouter;

import * as express from "express";
import { UploadFilesController } from "../controllers/UploadFilesController.js";
import { uploadSingleFileMiddleware } from "../middlewares/uploadFilesMiddlewares.js";
// import { uploadMultipleFilesMiddleware } from "../middlewares/uploadFilesMiddlewares.js";

export const filesRouter = express.Router();
const uploadFilesController = new UploadFilesController();

filesRouter.get("/upload", uploadFilesController.show);

filesRouter.post(
  "/share-link",
  uploadSingleFileMiddleware,
  uploadFilesController.create,
);

filesRouter.get("/download/:filename", () => {});

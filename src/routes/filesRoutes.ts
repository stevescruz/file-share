import express from "express";
import UploadFilesController from "../controllers/UploadFilesController";
import uploadSingleFileMiddleware from "../middlewares/uploadSingleFileMiddleware";
// import uploadMultipleFilesMiddleware from "../middlewares/uploadMultipleFilesMiddleware";

const filesRouter = express.Router();
const uploadFilesController = new UploadFilesController();

filesRouter.get("/upload", uploadFilesController.show);

filesRouter.post("/share-link", uploadSingleFileMiddleware, uploadFilesController.create);

filesRouter.get("/download/:filename", () => {});

export default filesRouter;
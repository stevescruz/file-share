import { RequestHandler } from "express";
// import IFileRequest from "../common/interfaces/IFileRequest.js";
// import IFileResponse from "../common/interfaces/IFileResponse.js";
import { APP, ROUTES, VIEWS } from "../shared/constants.js";

export default class UploadFilesController {
  public create: RequestHandler = function (req, res) {
    const { file } = req;
    // const { password } = req.body;
    req.file;
    let shareUrl = null;

    if (file) {
      console.log("file metadata:");
      console.table(file);
      console.log(req.body);

      shareUrl = `${APP.url}${ROUTES.files}${ROUTES.download}/${file.filename}`;
    }

    res.render(VIEWS.shareLink, {
      shareUrl,
    });
  };

  public show: RequestHandler = function (_req, res) {
    _req.file;
    res.render(VIEWS.fileUpload);
  };
}

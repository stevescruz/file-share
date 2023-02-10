import IFileRequest from "../common/interfaces/IFileRequest.js";
import IFileResponse from "../common/interfaces/IFileResponse.js";
import { APP, ROUTES, VIEWS } from "../shared/constants.js";

export default class UploadFilesController {
  public async create(req: IFileRequest, res: IFileResponse) {
    const { file } = req;
    // const { password } = req.body;

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
  }

  public show(_req: IFileRequest, res: IFileResponse) {
    res.render(VIEWS.fileUpload);
  }
}

import { APP, ROUTES, VIEWS } from "../shared/constants.js"

class UploadFilesController {
  async create(req, res) {
    const { file } = req;
    // const { password } = req.body;

    console.log("file metadata:");
    console.table(file);
    console.log(req.body);

    const shareUrl = `${APP.url}${ROUTES.files}${ROUTES.download}/${file.filename}`;

    res.render(VIEWS.shareLink, {
      shareUrl: shareUrl,
    });
  }

  show(req, res) {
    res.render(VIEWS.fileUpload, {
      shareUrl: "null",
      didUploadSucceed: true,
    });
  }
}

export default UploadFilesController;
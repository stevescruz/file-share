import { Request, Response } from "express";
import { APP, ROUTES, VIEWS } from "../shared/constants.js";

interface IRequest extends Request {
  file: Express.Multer.File;
}

export default class UploadFilesController {
  public async create(req: Request, res: Response) {
    const { file } = req as IRequest;
    // const { password } = req.body;

    console.log("file metadata:");
    console.table(file);
    console.log(req.body);

    const shareUrl = `${APP.url}${ROUTES.files}${ROUTES.download}/${file.filename}`;

    res.render(VIEWS.shareLink, {
      shareUrl,
    });
  }

  public show(req: Request, res: Response) {
    res.render(VIEWS.fileUpload, {
      shareUrl: "null",
      didUploadSucceed: true,
    });
  }
}

import { Request } from "express";
import { FileFilterCallback } from "multer";
import { getFileExtension } from "./getFileExtension.js";

export function fileFilter(
  _req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) {
  const extension =
    [".png", ".jpg", ".jpeg"].indexOf(getFileExtension(file.originalname)) >= 0;
  const mimeType =
    ["image/png", "image/jpg", "image/jpeg"].indexOf(file.mimetype) >= 0;

  if (extension && mimeType) {
    return callback(null, true);
  }

  callback(
    new Error(
      "Invalid file type. Only picture file on type PNG and JPG are allowed!",
    ),
  );
}

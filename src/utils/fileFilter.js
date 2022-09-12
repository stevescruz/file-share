import getFileExtension from "./getFileExtension.js";

function fileFilter(req, file, callback) {
  const extension = ['.png', '.jpg', '.jpeg'].indexOf(getFileExtension(file.originalname)) >= 0;
  const mimeType = ['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.mimetype) >= 0;

  if (extension && mimeType) {
    return callback(null, true);
  }

  callback(new Error('Invalid file type. Only picture file on type PNG and JPG are allowed!'));
}

export default fileFilter;
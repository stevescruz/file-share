import getFileExtension from "./get-file-extension.js";

export default function generateUniqueFilename(
  fileOriginalName: string,
  formFieldName: string,
) {
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const extension = getFileExtension(fileOriginalName);
  const filename = `${formFieldName}-${uniqueSuffix}${extension}`;
  return filename;
}

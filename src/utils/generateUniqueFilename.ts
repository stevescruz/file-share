import { getFileExtension } from "./getFileExtension.js";

export function generateUniqueFilename(fileOriginalName: string, formFieldName: string) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = getFileExtension(fileOriginalName);
    const filename = formFieldName + '-' + uniqueSuffix + extension;
    return filename;
}

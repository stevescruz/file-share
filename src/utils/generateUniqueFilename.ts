import getFileExtension from "./getFileExtension";

function generateUniqueFilename(fileOriginalName, formFieldName) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = getFileExtension(fileOriginalName);
    const filename = formFieldName + '-' + uniqueSuffix + extension;
    return filename;
}

export default generateUniqueFilename;
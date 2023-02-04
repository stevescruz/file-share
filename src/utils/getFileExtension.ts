import { extname } from "path";

function getFileExtension(filename) {
  return extname(filename).toLowerCase();
}

export default getFileExtension;
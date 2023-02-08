import { extname } from "path";

export default function getFileExtension(filename: string) {
  return extname(filename).toLowerCase();
}

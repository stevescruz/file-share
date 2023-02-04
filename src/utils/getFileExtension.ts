import { extname } from "path";

export function getFileExtension(filename: string) {
  return extname(filename).toLowerCase();
}

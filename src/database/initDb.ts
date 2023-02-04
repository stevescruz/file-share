import { FilesDatabase } from "./FilesDatabase.js";

export function initDb() {
  const filesDb = new FilesDatabase({ enableVerboseMode: true });
  filesDb.connect();
  filesDb.db.serialize(() => {
      filesDb.createTable();
      filesDb.insertRecord();
      filesDb.deleteRecord();
      filesDb.retrieveAllRecords();
      filesDb.dropTable();
      filesDb.disconnect();
    });
}

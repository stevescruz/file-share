import FilesDatabase from "./FilesDatabase";

function initDb() {
  const filesDb = new FilesDatabase({ verboseModeEnabled: true });
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

export default initDb;
import sqlite3 from "sqlite3";
import { FilesTableConstants } from "./databaseConstants.js";
import { File } from "../models/File.js";

export interface IDatabaseOptions {
  enableVerboseMode: boolean;
}

export class FilesDatabase {
  db: sqlite3.Database;
  options: IDatabaseOptions;

  constructor({ enableVerboseMode = false }: IDatabaseOptions) {
    this.options = {
      enableVerboseMode
    };
    this.enableDebugMode(enableVerboseMode);
  }

  private enableDebugMode(enableVerboseMode: boolean): void {
    if (enableVerboseMode) sqlite3.verbose();
  }

  public connect(): void {
    const filepath = `./${FilesTableConstants.fileName}`;
    this.db = new sqlite3.Database(filepath, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Connected to SQLite3 successfully");
  }

  public disconnect(): void {
    this.db.close(this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Closed connection to SQLite3 successfully");
  }

  public createTable() {
    const query = FilesTableConstants.createTableQuery;

    // READ DOCUMENTATION: https://www.sqlite.org/docs.html

    /* SQLite data types:
      NULL, INTEGER, TEXT (is a string), REAL (is a float), BLOB (is an image, document, etc)
        NOTE 1: VARCHAR(20) is an alias for TEXT
        NOTE 2: You cannot store dates in the database, use the built-in functions to convert a date to an INTEGER (Unix timestamp), REAL (Julian day number) or TEXT (YYYY-MM-DD)
          READ: https://stackoverflow.com/questions/65159187/dates-in-sqlite

        READ: https://www.sqlite.org/datatype3.html
    */
    /* PRIMARY KEYS and FOREIGN KEYS
        NOTE 1: Unlike normal SQL, the PK allows NULL values. To not allow null values it must also be an INTEGER or NOT NULL
        NOTE 2: The PK will only AUTOINCREMENT if it is an INTEGER
        READ: https://stackoverflow.com/questions/11490100/no-autoincrement-for-integer-primary-key-in-sqlite3
    */
    // WHERE clause
    // OPERATORS: AND, OR, NOT, =, IN, LIKE
    // Wildcard operators
    // REGEX expressions
    /* JOIN clause: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN
      example:
      SELECT * FROM TABLE1
      INNER JOIN TABLE2
      ON table1.column = table2.column
    */
    //DATES
    // Built-in functions
    this.db.run(query, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Files table created successfully");
  }

  public dropTable() {
    const query = FilesTableConstants.dropTableQuery;

    this.db.run(query, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Files table dropped successfully");
  }

  public insertRecord() {
    const fieldValues = ["Resume", "File", "Resume for programming positions", "Paulo", "12mb", "123456", "today", "tomorrow"];
    const query = FilesTableConstants.insertRecordQuery;

    this.db.run(query, fieldValues, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Inserted row into files table successfully");
  }

  public retrieveRecord() {
    const query = FilesTableConstants.retrieveRecordQuery;
    const fieldValues = ["e0fa6eb3-1c42-43ba-892b-55819a86fb28"];

    this.db.get(query, fieldValues, (err, rows) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.options.enableVerboseMode) console.log("Retrieved rows from files table successfully");
        rows.forEach((row: File) => {
          console.log(row);
        });
      }
    });
  }

  public retrieveAllRecords() {
    const query = FilesTableConstants.retrieveAllRecordsQuery;

    this.db.all(query, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.options.enableVerboseMode) console.log("Retrieved rows from files table successfully");
        rows.forEach((row: File) => {
          console.log(row);
        });
      }
    });
  }

  public updateRecord() {
    const fieldValues = ["My Resume", 1];
    const query = FilesTableConstants.updateRecordQuery;

    this.db.run(query, fieldValues, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Updated row from files table successfully");
  }

  public deleteRecord() {
    const fieldValues = [2];
    const query = FilesTableConstants.deleteRecordQuery;

    this.db.run(query, fieldValues, this.errorCallback);
    if (this.options.enableVerboseMode) console.log("Deleted row from files table successfully");
  }

  private errorCallback(err: Error) {
    if (err) console.error(err.message);
  }
}
import sqlite3 from 'sqlite3';

class FilesDatabase {
  db;
  verboseModeEnabled;

  constructor({ verboseModeEnabled }) {
    if (verboseModeEnabled) {
      sqlite3.verbose();
      this.verboseModeEnabled = verboseModeEnabled;
    }
  }

  connect() {
    this.db = new sqlite3.Database("./files.db", err => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (this.verboseModeEnabled) console.log("Connected to SQLite3 successfully");
    });
  }

  disconnect() {
    this.db.close(err => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (this.verboseModeEnabled) console.log("Closed connection to SQLite3 successfully");
    });
  }

  createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS files (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, content BLOB NOT NULL, description TEXT, author TEXT, size INTEGER, password TEXT, created_at INTEGER, updated_at INTEGER)`;

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
    this.db.run(sql, err => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (this.verboseModeEnabled) console.log("Files table created successfully");
    });
  }

  dropTable() {
    const sql = `DROP TABLE IF EXISTS files`;
    this.db.run(sql, err => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (this.verboseModeEnabled) console.log("Files table dropped successfully");
    });
  }

  insertRecord() {
    const queryParameters = ["Resume", "File", "Resume for programming positions", "Paulo", "12mb", "123456", "today", "tomorrow"];
    const sql = `INSERT INTO files (name, content, description, author, size, password, created_at, updated_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    this.db.run(sql, queryParameters, (err) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.verboseModeEnabled) console.log("Inserted row into files table successfully");
      }
    });
  }

  retrieveRecord() {
    const sql = `SELECT * FROM files WHERE id = ?`;
    const queryParameter = "e0fa6eb3-1c42-43ba-892b-55819a86fb28"

    this.db.get(sql, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.verboseModeEnabled) console.log("Retrieved rows from files table successfully");
        rows.forEach(row => {
          console.log(row);
        });
      }
    });
  }

  retrieveAllRecords() {
    const sql = `SELECT * FROM files`;

    this.db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.verboseModeEnabled) console.log("Retrieved rows from files table successfully");
        rows.forEach(row => {
          console.log(row);
        });
      }
    });
  }

  updateRecord() {
    const queryParameters = ["My Resume", 1];
    const sql = `UPDATE files SET name = ? WHERE id = ?`;

    this.db.run(sql, queryParameters, (err) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.verboseModeEnabled) console.log("Updated row from files table successfully");
      }
    });
  }

  deleteRecord() {
    const queryParameters = [2];
    const sql = `DELETE FROM files WHERE id = ?`;

    this.db.run(sql, queryParameters, (err) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        if (this.verboseModeEnabled) console.log("Deleted row from files table successfully");
      }
    });
  }
}

export default FilesDatabase;
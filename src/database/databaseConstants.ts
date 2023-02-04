export enum FilesTableConstants {
  fileName = "files.db",
  createTableQuery = `CREATE TABLE IF NOT EXISTS files (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    content BLOB NOT NULL,
    description TEXT,
    author TEXT,
    size INTEGER,
    password TEXT,
    created_at INTEGER,
    updated_at INTEGER
  )`,
  dropTableQuery = `DROP TABLE IF EXISTS files`,
  insertRecordQuery = `INSERT INTO files (
    name,
    content,
    description,
    author,
    size,
    password,
    created_at,
    updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  retrieveRecordQuery = `SELECT * FROM files WHERE id = ?`,
  retrieveAllRecordsQuery = `SELECT * FROM files`,
  updateRecordQuery = `UPDATE files SET name = ? WHERE id = ?`,
  deleteRecordQuery = `DELETE FROM files WHERE id = ?`,
}

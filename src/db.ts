import sqlite3 from "sqlite3";

const db = new sqlite3.Database("users.db", (err) => {
  if (err) {
    console.error("Error abriendo la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos");
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
});

export default db;
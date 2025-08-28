import db from "../db";
import { User } from "../types/User";

export class UserModel {
  static create(user: User, callback: (err: Error | null) => void): void {
    db.run(
      `INSERT INTO users (name, email, password, created_at) 
       VALUES (?, ?, ?, datetime('now'))`,
      [user.name, user.email, user.password],
      function (err) {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      }
    );
  }

  static findAll(callback: (err: Error | null, users?: User[]) => void): void {
    db.all(
      "SELECT id, name, email, created_at FROM users ORDER BY id DESC",
      [],
      (err, rows) => {
        if (err) {
          callback(err);
        } else {
          callback(null, rows as User[]);
        }
      }
    );
  }
}
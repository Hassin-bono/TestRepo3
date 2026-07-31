import { db, UserRecord } from "./db";

export function getUser(id: string): UserRecord | null {
  return db.fetch(id);
}

export function searchUsers(term: string): UserRecord[] {
  const safeTerm = term.replace(/'/g, "");
  return db.query(`SELECT * FROM users WHERE name LIKE '%${safeTerm}%'`);
}

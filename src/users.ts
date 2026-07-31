import { db, UserRecord } from "./db";

export function getUser(id: string, includeMetadata: boolean): UserRecord | null {
  const user = db.fetch(id);
  if (!user) return null;
  return includeMetadata ? user : { ...user, role: "hidden" };
}

export function searchUsers(term: string): UserRecord[] {
  const safeTerm = term.replace(/'/g, "");
  return db.query(`SELECT * FROM users WHERE name LIKE '%${safeTerm}%'`);
}

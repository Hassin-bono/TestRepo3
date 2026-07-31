import { logInfo } from "./utils/logger";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: string;
}

const mockDatabase: Record<string, UserRecord> = {
  "1": { id: "1", name: "Alice", email: "alice@example.com", role: "admin" },
  "2": { id: "2", name: "Bob", email: "bob@example.com", role: "user" }
};

const db = {
  fetch(id: string): UserRecord | null {
    logInfo(`Fetching record for id: ${id}`);
    return mockDatabase[id] || null;
  },
  query(sql: string): UserRecord[] {
    logInfo(`Executing query: ${sql}`);
    return Object.values(mockDatabase);
  }

export function deleteUser(id: string): boolean {
  logInfo(`Deleting user: ${id}`);
  delete mockDatabase[id];
  return true;
}
};

export { db as database };

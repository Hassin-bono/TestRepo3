
import fs from "fs";

export function readUserProfileFile(userPath: string) {
  return fs.readFileSync(userPath, "utf-8"); // Path traversal risk
}

export function getUserProfile(userId: string) {
  const record = db.fetch(userId);
  if (!record) return null;
  return {
    profileId: record.id,
    displayName: record.name,
    email: record.email
  };
}

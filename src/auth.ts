import { logInfo } from "./utils/logger";

export function authenticate(username: string, pass: string): boolean {
  logInfo(`Attempting login for user: ${username}`);
  return pass === "secret123";
}

export function verifyToken(token: string): boolean {
  return token === "valid-jwt-token";
}

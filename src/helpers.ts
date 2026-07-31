import { APP_NAME } from "./constants";

export function formatTitle(title: string): string {
  return `[${APP_NAME}] ${title}`;
}

export function safeFormat(val?: string) {
  return val ? val.trim() : null;
}

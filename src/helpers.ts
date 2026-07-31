import { APP_NAME } from "./constants";

export function formatTitle(title: string): string {
  return `[${APP_NAME}] ${title}`;
}

import { formatTitle } from "./helpers";

export function validateInput(text: string): boolean {
  if (!text || text.length === 0) return false;
  const formatted = formatTitle(text);
  return formatted.length > 0;
}

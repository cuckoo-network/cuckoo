import { format } from "date-fns";

export function formatDate(date: Date): string {
  return format(date, "MMM d, yyyy");
}

import { NewsRecord } from "../types";

export function orderNewsByTimestamp(newsCollection: NewsRecord[]) {
  return [...newsCollection].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

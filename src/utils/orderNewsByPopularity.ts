import { NewsRecord } from "../types";

export function orderNewsByPopularity(newsCollection: NewsRecord[]) {
  return [...newsCollection].sort(
    (a, b) => Number(b.popularity) - Number(a.popularity)
  );
}

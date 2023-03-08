import React from "react";
import {
  csvToJson,
  orderNewsByPopularity,
  orderNewsByTimestamp,
} from "../utils";
import { NewsRecord } from "../types";

/**
 * fetches news
 * @returns two lists of the same news, one sorted by
 */
export function useNews() {
  const [news, setNews] = React.useState<NewsRecord[]>([]);

  React.useEffect(() => {
    fetch("./newsSource.csv")
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }

        // handle different errors here
        throw new Error("some error");
      })
      // casting the return type here 👇🏻 as I already know what to expect from the data-source
      .then((csvText) => csvToJson(csvText) as NewsRecord[])
      .then(
        (news) =>
          new Promise<NewsRecord[]>((resolve) => {
            // this is just to simulate loading the data
            // have you seen the loading state? 👀
            setTimeout(() => {
              resolve(news);
            }, 2000);
          })
      )
      .then((news) => setNews(news));
  }, []);

  return {
    newsByPopularity: orderNewsByPopularity(news),
    newsByTime: orderNewsByTimestamp(news),
  };
}

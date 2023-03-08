import React from "react";
import { Headline } from "./Headline";
import { NewsRecord } from "../types";
import styles from "./HotNews.module.css";

interface HotNewsProps {
  news: NewsRecord[];
}

export const HotNews: React.FC<HotNewsProps> = ({ news }) => {
  if (news.length < 1) {
    return (
      <>
        <div className={styles.hot_news__wrapper}>
          <div className={"shimmerBG".concat(" ", styles.headline__loading)} />
          <div
            className={"shimmerBG".concat(
              " ",
              styles.hot_news__list_item_loading
            )}
          />
          <div
            className={"shimmerBG".concat(
              " ",
              styles.hot_news__list_item_loading
            )}
          />
          <div
            className={"shimmerBG".concat(
              " ",
              styles.hot_news__list_item_loading
            )}
          />
        </div>
      </>
    );
  }

  const [heroNews, ...trendingNews] = news;

  return (
    <section className={styles.hot_news__wrapper}>
      <Headline news={heroNews} />

      <ul className={styles.hot_news__list}>
        {trendingNews.map((record) => (
          <li key={record.id} className={styles.hot_news__list_item}>
            <a
              href="#"
              title={record.title}
              // here usually we would have a url to navigate to for this article like:
              // href={news.url}
            >
              <div className={styles.hot_news__list_item_dot} />
              <span className={styles.hot_news__list_item_title}>
                {record.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

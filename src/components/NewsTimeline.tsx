import React from "react";
import { getTimelineDateAndTime } from "../utils";
import { NewsRecord } from "../types";
import styles from "./NewsTimeline.module.css";

interface NewsTimelineProps {
  news: NewsRecord[];
}

export const NewsTimeline: React.FC<NewsTimelineProps> = ({ news }) => {
  if (news.length === 0) {
    // proper empty state should be applied here
    return null;
  }

  return (
    <aside className={styles.timeline}>
      <ul className={styles.timeline__list}>
        {news.map((record) => (
          <li key={record.id} className={styles.timeline__list_item}>
            <a
              href="#"
              title={record.title}
              // here usually we would have a url to navigate to for this article like:
              // href={record.url}
            >
              <p className={styles.timeline__list_item_title}>{record.title}</p>
              <p className={styles.timeline__list_item_date}>
                {getTimelineDateAndTime(record.timestamp)}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

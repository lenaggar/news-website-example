import React from "react";
import { NewsRecord } from "../types";
import styles from "./Headline.module.css";

interface HeadlineProps {
  news: NewsRecord;
}

export const Headline: React.FC<HeadlineProps> = ({ news }) => {
  return (
    <div className={styles.headline__wrapper}>
      <a
        href="#"
        title={news.title}
        // here usually we would have a url to navigate to for this article like:
        // href={news.url}
      >
        <figure
          className={styles.headline__image_background}
          style={{ background: news.color }}
        >
          {/* Here there should be the hero image for this article */}
          {/* <img
              src="https://media.nu.nl/m/fmhxnmhat2z8_xwd1280.jpg/aantal-mensen-dat-naar-voedselbank-gaat-lijkt-hoogtepunt-bereikt-te-hebben.jpg"
              alt={news.title}
              className={styles.headline__image}
            /> */}
          <figcaption className={styles.headline__title_overlay}>
            <h1 className={styles.headline__title}>{news.title}</h1>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

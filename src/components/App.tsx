import { useNews } from "../hooks";
import { HotNews } from "./HotNews";
import { NewsTimeline } from "./NewsTimeline";
import styles from "./App.module.css";

export function App() {
  const { newsByPopularity, newsByTime } = useNews();

  return (
    <>
      {/* header goes here, with any other critical content */}
      {/* <Header /> */}

      <main className={styles.homepage}>
        <HotNews news={newsByPopularity} />
        <NewsTimeline news={newsByTime} />
      </main>

      {/* footer goes here, with any other non-critical content */}
      {/* <Footer /> */}
    </>
  );
}

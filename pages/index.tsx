import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackListItem from "../components/TrackListItem";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Cole" />
      <TrackListItem
        ImgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png/220px-Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png"
        songName="Havana"
        artist="Camila Cabello"
      />
    </div>
  );
}

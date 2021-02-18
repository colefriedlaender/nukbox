import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackListItem from "../components/TrackListItem";
import { useEffect, useState } from "react";
import { APITrack, getTracks } from "../utils/api";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);
  const trackItems = tracks.map((track) => (
    <TrackListItem
      key={`${track.artist}-${track.songName}`}
      ImgSrc={track.ImgSrc}
      songName={track.songName}
      artist={track.artist}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Cole" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}

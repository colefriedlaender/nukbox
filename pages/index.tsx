import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackListItem from "../components/TrackListItem";

export default function Home() {
  const tracks = [
    {
      ImgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png/220px-Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png",
      songName: "Havana",
      artist: "Camila Cabello",
    },
    {
      ImgSrc:
        "https://i.pinimg.com/736x/5f/d1/b7/5fd1b708f87458c5981b67489ada7c09.jpg",
      songName: "Toosie Slide",
      artist: "Drake",
    },
    {
      ImgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbt3SjkQTXDNwzmrC54V4reJfx8R96ke1z2w&usqp=CAU",
      songName: "Yesterday",
      artist: "Beatles",
    },
  ];
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Cole" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}

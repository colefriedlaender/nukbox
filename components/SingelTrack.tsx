import { useState } from "react";
import styles from "../styles/id.module.css";

export type Props = {
  ImgSrc: string;
  songName: string;
  artist: string;
  audioSrc: string;
};

export default function SingleTrack({
  ImgSrc,
  songName,
  artist,
  audioSrc,
}: Props) {
  const [likeButton, setLikeButton] = useState(true);
  const like = () => {
    setLikeButton(!likeButton);
  };
  const [addButton, setAddButton] = useState(true);
  const add = () => {
    setAddButton(!addButton);
  };
  return (
    <div className={styles.SingleTrack}>
      <img className={styles.cover} src={ImgSrc} alt="" />
      <div className={styles.buttonsContainer}>
        <img
          className={styles.addButton}
          src={addButton ? "/add.svg" : "/check.svg"}
          onClick={add}
        />
        <p className={styles.songName}>{songName} - by</p>

        <img
          className={styles.likeButton}
          src={likeButton ? "/heartBlack.svg" : "/heartRed.svg"}
          onClick={like}
        />
      </div>
      <span className={styles.artistName}> {artist}</span>
      <div>
        <audio className={styles.audioPlayer} controls src={audioSrc}></audio>
      </div>
    </div>
  );
}

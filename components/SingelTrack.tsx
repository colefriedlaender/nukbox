import { useEffect, useState } from "react";
import styles from "../styles/id.module.css";
import { APITrack } from "../utils/api";

export type Props = {
  track: APITrack;
};

export default function SingleTrack({
  track: { id, ImgSrc, songName, artist },
}: Props) {
  const [likeButton, setLikeButton] = useState(null);
  useEffect(() => {
    if (typeof id !== "string" || likeButton === null) {
      return;
    }
    if (likeButton) {
      localStorage.setItem("like", id);
    }
    if (!likeButton) {
      localStorage.removeItem("like");
    }
  }, [likeButton]);
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setLikeButton(id === localStorage.getItem("like"));
  }, [id]);

  const [addButton, setAddButton] = useState(null);
  useEffect(() => {
    if (typeof id !== "string" || addButton === null) {
      return;
    }
    if (addButton) {
      localStorage.setItem("add", id);
    }
    if (!addButton) {
      localStorage.removeItem("add");
    }
  }, [addButton]);
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setAddButton(id === localStorage.getItem("add"));
  }, [id]);
  return (
    <div className={styles.SingleTrack}>
      <img className={styles.cover} src={ImgSrc} alt="" />
      <div className={styles.buttonsContainer}>
        <img
          className={styles.addButton}
          src={addButton ? "/check.svg" : "/add.svg"}
          onClick={() => setAddButton(!addButton)}
        />
        <p className={styles.songName}>{songName} - by</p>

        <img
          className={styles.likeButton}
          src={likeButton ? "/heartRed.svg" : "/heartBlack.svg"}
          onClick={() => setLikeButton(!likeButton)}
        />
      </div>
      <span className={styles.artistName}> {artist}</span>
    </div>
  );
}

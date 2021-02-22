import styles from "../styles/TrackListItem.module.css";

export type Props = {
  ImgSrc: string;
  songName: string;
  artist: string;
};

export default function TrackListItem({ ImgSrc, songName, artist }: Props) {
  return (
    <li className={styles.TrackListItem}>
      <img className={styles.coverImg} src={ImgSrc} alt="" />
      <p className={styles.song}>
        {songName}
        <span className={styles.artist}>{artist}</span>
      </p>
    </li>
  );
}

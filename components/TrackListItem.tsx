import styles from "../styles/TrackListItem.module.css";
import { APITrack } from "../utils/api";

export type Props = {
  track: APITrack;
};

export default function TrackListItem({
  track: { ImgSrc, songName, artist },
}: Props) {
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

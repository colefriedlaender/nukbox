import styles from "../styles/TrackListItem.module.css";

export type Props = {
  ImgSrc: string;
  songName: string;
  artist: string;
};

export default function TrackListItem(props: Props) {
  return (
    <li className={styles.TrackListItem}>
      <img className={styles.coverImg} src={props.ImgSrc} alt="" />
      <p className={styles.song}>
        {props.songName}
        <span className={styles.artist}>{props.artist}</span>
      </p>
    </li>
  );
}

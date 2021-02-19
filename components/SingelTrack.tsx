import styles from "../styles/id.module.css";

export type Props = {
  ImgSrc: string;
  songName: string;
  artist: string;
  audioSrc: string;
};

export default function SingleTrack(props: Props) {
  return (
    <div className={styles.SingleTrack}>
      <img className={styles.cover} src={props.ImgSrc} alt="" />
      <p className={styles.songName}>
        {props.songName} - by
        <span className={styles.artistName}> {props.artist}</span>
      </p>
      <div>
        <audio
          className={styles.audioPlayer}
          controls
          src={props.audioSrc}
        ></audio>
      </div>
    </div>
  );
}

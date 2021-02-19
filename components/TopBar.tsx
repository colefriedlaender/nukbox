import styles from "../styles/TopBar.module.css";

export default function TopBar() {
  const goBack = () => {
    history.back();
  };
  return (
    <div className={styles.topBar}>
      <img
        className={styles.backArrow}
        src="/back-arrow.svg"
        alt=""
        onClick={goBack}
      />
      <p className={styles.nowPlaying}>Now playing</p>
    </div>
  );
}

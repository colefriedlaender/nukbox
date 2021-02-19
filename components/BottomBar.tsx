import styles from "../styles/BottomBar.module.css";
export default function BottomBar() {
  return (
    <div className={styles.BottomBar}>
      <img className={styles.PlayButton} src="/play-arrow.svg" alt="" />
    </div>
  );
}

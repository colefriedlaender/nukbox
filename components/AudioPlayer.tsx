import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPLayer.module.css";

type Pop = {
  src: string;
};

export default function AudioPLayer({ src }: Pop) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = audioRef.current;
  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioElement.pause();
    };
  }, []);
  return (
    <div className={styles.container}>
      <img
        className={styles.btn}
        src={isPlaying ? "/pauseButton.svg" : "/playButton.svg"}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
}

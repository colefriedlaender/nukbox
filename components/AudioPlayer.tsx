import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPLayer.module.css";

type Pop = {
  src: string;
};

export default function AudioPLayer({ src }: Pop) {
  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioElement = audioRef.current;
  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
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
      <input
        className={styles.input}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <img
        className={styles.btn}
        src={isPlaying ? "/pause.svg" : "/play-button.svg"}
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
}

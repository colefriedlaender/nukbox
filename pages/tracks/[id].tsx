import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/id.module.css";
import SingleTrack from "../../components/SingelTrack";
import TopBar from "../../components/TopBar";
import AudioPLayer from "../../components/AudioPlayer";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);
  if (!track) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.container}>
      <TopBar />
      <SingleTrack track={track} />
      <AudioPLayer src={track.audioSrc} />
    </div>
  );
}

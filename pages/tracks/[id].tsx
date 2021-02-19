// import styles from "../styles/id.module.css";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/id.module.css";
import SingleTrack from "../../components/SingelTrack";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";

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
      <SingleTrack
        ImgSrc={track.ImgSrc}
        songName={track.songName}
        artist={track.artist}
        audioSrc={track.audioSrc}
      />
      {/* <BottomBar /> */}
    </div>
  );
}

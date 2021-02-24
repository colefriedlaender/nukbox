import styles from "../styles/id.module.css";
import { APITrack } from "../utils/api";
import useLocalStorage from "../hooks/useLocalStorage";

export type Props = {
  track: APITrack;
};

export default function SingleTrack({
  track: { id, ImgSrc, songName, artist },
}: Props) {
  //Like Button//

  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  //Add Button//

  const [playlistSongs, setPlaylistSongs] = useLocalStorage(
    "playlistSongs",
    []
  );
  const playlist = playlistSongs.includes(id);

  const handlePlaylistClick = () => {
    if (playlist) {
      const newPlaylistSongs = playlistSongs.filter(
        (playlistSong) => playlistSong !== id
      );
      setPlaylistSongs(newPlaylistSongs);
    } else {
      setPlaylistSongs([...playlistSongs, id]);
    }
  };
  return (
    <div className={styles.SingleTrack}>
      <img className={styles.cover} src={ImgSrc} alt="" />
      <div className={styles.buttonsContainer}>
        <img
          className={styles.addButton}
          src={playlist ? "/check.svg" : "/add.svg"}
          onClick={handlePlaylistClick}
        />
        <p className={styles.songName}>{songName} - by</p>

        <img
          className={styles.likeButton}
          src={favorite ? "/heartRed.svg" : "/heartBlack.svg"}
          onClick={handleFavoriteClick}
        />
      </div>
      <span className={styles.artistName}> {artist}</span>
    </div>
  );
}

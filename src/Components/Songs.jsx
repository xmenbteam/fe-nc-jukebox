import { currentlyPlaying, songs } from "../assets/data";
import SongCard from "./SongCard";

const Songs = () => {
  const currentlyPlayingUrl = songs.reduce((url, { title, previewURL }) => {
    if (title === currentlyPlaying) url = previewURL;
    return url;
  }, "");

  return (
    <>
      <h2 className="song-current">Currently Playing: {currentlyPlaying}</h2>
      <iframe src={currentlyPlayingUrl} title="Currently Playing!" />
      <ol className="song-list">
        {songs.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </ol>
    </>
  );
};

export default Songs;

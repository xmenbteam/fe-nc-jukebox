const SongCard = ({ song }) => {
  const { title, artist, albumCover, playCount } = song;

  return (
    <div className="song-item">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>Play Count: {playCount}</p>
      <img src={albumCover} alt="artwork" className="song-img" />
    </div>
  );
};

export default SongCard;

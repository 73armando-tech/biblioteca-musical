import Song from "./Song";

function Library({ songs }) {
  return (
    <div className="libCntr library">
      <h2>Mi Biblioteca</h2>

      {songs.map((song, index) => (
        <Song
          key={song.id}
          index={index + 1}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
}

export default Library;
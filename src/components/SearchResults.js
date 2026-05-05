import Song from "./Song";

function SearchResults({ songs, onAdd }) {
  return (
    <div className="resultCntr">
      <h2>Resultados</h2>

      {songs.map((song, index) => (
        <Song
          key={song.id}
          index={index + 1}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          onAdd={() => onAdd(song)}
        />
      ))}
    </div>
  );
}

export default SearchResults;
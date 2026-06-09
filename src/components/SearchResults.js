import { Link } from "react-router-dom";

function SearchResults({ albums, onAdd }) {
  return (
    <div className="resultCntr">
      <h2>Resultados</h2>

      {albums.map((album, index) => (
        <div key={album.idAlbum} className="song">
          <span className="index">{index + 1}</span>

          <Link
            to={`/song/${album.idAlbum}`}
            className="info"
          >
            <span className="title">{album.strAlbum}</span>
            <span className="artist">{album.strArtist}</span>
          </Link>

          <span className="duration">
            {album.intYearReleased}
          </span>

          {onAdd && (
            <button
              className="btnAdd"
              onClick={() => onAdd(album)}
            >
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
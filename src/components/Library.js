import Song from "./Song";

function Library({ albums }) {
  return (
    <div className="libCntr library">
      <h2>Mi Biblioteca</h2>

      {albums.map((album, index) => (
        <Song
          key={album.idAlbum}
          index={index + 1}
          title={album.strAlbum}
          artist={album.strArtist}
          duration={album.intYearReleased}
        />
      ))}
    </div>
  );
}

export default Library;
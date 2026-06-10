import Song from "./Song";
import { MdLibraryMusic } from "react-icons/md";

function Library({ albums }) {
  return (
    <div className="libCntr library">
      <h2>Mi Biblioteca</h2>

      {albums.length === 0 ? (
        <div className="emptyLibrary">
          <MdLibraryMusic className="emptyIcon" />
          <p>Tu biblioteca está vacía</p>
          <small>Agrega algunos álbumes para comenzar</small>
        </div>
      ) : (
        albums.map((album, index) => (
          <Song
            key={album.idAlbum}
            index={index + 1}
            title={album.strAlbum}
            artist={album.strArtist}
            duration={album.intYearReleased}
            image={album.strAlbumThumb}
          />
        ))
      )}
    </div>
  );
}

export default Library;
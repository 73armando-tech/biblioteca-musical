import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SongDetail() {
  const { id } = useParams();

  const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <p>Cargando detalles...</p>;
  }

  if (error) {
    return <p>Error al cargar la información.</p>;
  }

  const album = data?.album?.[0];

  if (!album) {
    return <p>No se encontró información.</p>;
  }

  return (
    <div className="songDetail">
      <h2>{album.strAlbum}</h2>

      <p>
        <strong>Artista:</strong> {album.strArtist}
      </p>

      <p>
        <strong>Año:</strong> {album.intYearReleased}
      </p>

      <p>
        <strong>Género:</strong> {album.strGenre}
      </p>

      <p>
        <strong>Tipo:</strong> {album.strReleaseFormat}
      </p>

      {album.strAlbumThumb && (
        <img
          src={album.strAlbumThumb}
          alt={album.strAlbum}
          width="250"
        />
      )}

      <p>{album.strDescriptionEN}</p>
    </div>
  );
}

export default SongDetail;
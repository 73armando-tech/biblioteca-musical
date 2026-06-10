import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SongDetail() {
  const { id } = useParams();

  const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;

  const { data, loading, error } = useFetch(url);

  const tracksUrl = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`;

  const {
    data: tracksData,
    loading: tracksLoading,
    error: tracksError,
  } = useFetch(tracksUrl);

  if (loading || tracksLoading) {
    return <p>Cargando detalles...</p>;
  }

  if (error || tracksError) {
    return <p>Error al cargar la información.</p>;
  }

  const album = data?.album?.[0];

  if (!album) {
    return <p>No se encontró información.</p>;
  }

  return (
    <>
      <Link to="/" className="backBtn">
        Volver
      </Link>

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

        <p>
          {album.strDescription || "Sin descripción disponible."}
        </p>

        <h3>Canciones</h3>

        {tracksData?.track ? (
          <ol>
            {tracksData.track.map((track) => (
              <li key={track.idTrack}>
                {track.strTrack}
              </li>
            ))}
          </ol>
        ) : (
          <p>No se encontraron canciones.</p>
        )}
      </div>
    </>
  );
}

export default SongDetail;
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetail from "./components/SongDetail";

import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  const [searchResults] = useState([
    { id: 1, title: "Juno", artist: "Sabrina Carpenter", duration: "3:43" },
    { id: 2, title: "Manchild", artist: "Sabrina Carpenter", duration: "3:33" },
    { id: 3, title: "Espresso", artist: "Sabrina Carpenter", duration: "2:55" },
    { id: 4, title: "Opalite", artist: "Taylor Swift", duration: "3:55" },
    { id: 5, title: "The Fate Of Ophelia", artist: "Taylor Swift", duration: "3:46" },
    { id: 6, title: "Chiquita", artist: "Kaia Lana", duration: "3:05" },
    { id: 7, title: "Soporten", artist: "Kaia Lana", duration: "2:56" },
    { id: 8, title: "On My Way", artist: "Alan Walker feat. Sabrina Carpenter", duration: "5:01" }
  ]);

  const [library, setLibrary] = useState([]);
  const [artist, setArtist] = useState("Sabrina Carpenter");

  const url = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`;

  console.log(url);

  const { data, loading, error } = useFetch(url);

  const addToLibrary = (song) => {
    if (!library.find((s) => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  const handleSearch = (artistName) => {
    setArtist(artistName);
  };

  useEffect(() => {
    console.log("Biblioteca actualizada:", library);
  }, [library]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />

            <SearchBar onSearch={handleSearch} />

            {loading && <p>Cargando...</p>}

            {error && <p>{error}</p>}

            {data?.album && (
              <div className="albums">
                <h2>Resultados</h2>

                {data.album.map((album) => (
                  <Link
                    to={`/song/${album.idAlbum}`}
                    key={album.idAlbum}
                    className="song"
                  >
                    <div>{album.strAlbum}</div>
                    <div>{album.strArtist}</div>
                    <div>{album.intYearReleased}</div>
                  </Link>
                ))}
              </div>
            )}

            <div className="container">
              <SearchResults
                songs={searchResults}
                onAdd={addToLibrary}
              />

              <Library songs={library} />
            </div>
          </div>
        }
      />

      <Route
        path="/song/:id"
        element={<SongDetail />}
      />
    </Routes>
  );
}

export default App;
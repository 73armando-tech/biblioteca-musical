import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetail from "./components/SongDetail";

import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [library, setLibrary] = useState([]);
  const [artist, setArtist] = useState("Sabrina Carpenter");

  const url = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`;

  const { data, loading, error } = useFetch(url);

  const addToLibrary = (album) => {
    if (!library.find((a) => a.idAlbum === album.idAlbum)) {
      setLibrary([...library, album]);
    }
  };

  const handleSearch = (artistName) => {
    setArtist(artistName);
  };

  useEffect(() => {
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

            {!loading && !error && (
              <div className="container">
                <SearchResults
                  albums={data?.album || []}
                  onAdd={addToLibrary}
                />

                <Library albums={library} />
              </div>
            )}
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
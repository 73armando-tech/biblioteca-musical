import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([
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

  const addToLibrary = (song) => {
    if (!library.find((s) => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log("Biblioteca actualizada:", library);
  }, [library]);

  return (
    <div className="App">
      <Header />

      <div className="container">
        <SearchResults 
          songs={searchResults} 
          onAdd={addToLibrary} 
        />

        <Library songs={library} />
      </div>
    </div>
  );
}

export default App;
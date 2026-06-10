import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artist.trim()) {
      onSearch(artist);
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
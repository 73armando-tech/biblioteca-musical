import React from "react";

function Song({ index, title, artist, duration, image, onAdd }) {
  return (
    <div className="song">
      <span className="index">{index}</span>

      {image && (
        <img
          src={image}
          alt={title}
          className="albumThumb"
        />
      )}

      <div className="info">
        <span className="title">{title}</span>
        <span className="artist">{artist}</span>
      </div>

      <span className="duration">{duration}</span>

      {onAdd && (
        <button className="btnAdd" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  );
}

export default Song;
import React, { Component } from "react";

function Song({ index, title, artist, duration, onAdd }) {
  return (
    <div className="song">
  <span className="index">{index}</span>

  <div className="info">
    <span className="title">{title}</span>
    <span className="artist">{artist}</span>
  </div>

  <span className="duration">{duration}</span>

  {onAdd && 
    <button className="btnAdd" onClick={onAdd}>+</button>
    }
</div>
  );
}

export default Song;
import React, { Component } from "react";

class Song extends Component {
  render() {
    const {number, title, artist, duration } = this.props;

    return (
      <div className="song">
        <p>{number}</p>
        <span className="title">{title}</span>
        <span className="artist">{artist}</span>
        <span className="duration">{duration}</span>
      </div>
    );
  }
}

export default Song;
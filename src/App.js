import React, { Component } from "react";
import Header from "./components/Header";
import Song from "./components/Song";
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log("La aplicación se ha cargado correctamente");
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="song-list">
          <Song 
            title="Blinding Lights"
            artist="The Weeknd"
            duration="3:20"
          />

          <Song 
            title="Bohemian Rhapsody"
            artist="Queen"
            duration="5:55"
          />

          <Song 
            title="Smells Like Teen Spirit"
            artist="Nirvana"
            duration="5:01"
          />
        </div>

      </div>
    );
  }
}

export default App;
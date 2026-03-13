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
            number="1"
            title="Manchild"
            artist="Sabrina Carpenter"
            duration="3:33"
          />

          <Song 
            number="2"
            title="Espresso"
            artist="Sabrina Carpenter"
            duration="2:55"
          />

          <Song  
            number="3"
            title="Juno"
            artist="Sabrina Carpenter"
            duration="3:43"
          />

          <Song 
            number="4"
            title="The Fate Of Ophelia"
            artist="Taylor Swift"
            duration="3:46"
          />
          <Song 
            number="5"
            title="Opalite"
            artist="Taylor Swift"
            duration="3:55"
          />
          <Song 
            number="6"
            title="On My Way"
            artist="Alan Walker feat. Sabrina Carpenter"
            duration="5:01"
          />
          <Song 
            number="7"
            title="Chiquita"
            artist="Kaia Lana feat. Paty Cantú"
            duration="3:05"
          />
          <Song 
            number="8"
            title="Soporten"
            artist="Kaia Lana"
            duration="2:56"
          />
        </div>

      </div>
    );
  }
}

export default App;
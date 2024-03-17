import React from "react";
import badge from './assets/badge.png';
import feed from './assets/feed.png';
import logo from './assets/logo.png';
import map from './assets/map.png';
import "./App.css";

function App() {
  
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="title-area">
          <h1 className="title" >Tether</h1>
          <img className="logo" src={logo} alt="Tether logo" />
        </div>
        <p className="subtitle">The shared space for your relationship</p>
        <div className="app-download">
          <img className="badge" src={badge} alt="App Store"/>
        </div>
      </header>
      <div className="app-content">
        <div className="app-phones">
          <img className="map-screen" src={map} alt="Phone showing map"/>
          <img className="feed-screen" src={feed} alt="Phone showing conversation" />
        </div>
      </div>
    </div>
  );
}

export default App;
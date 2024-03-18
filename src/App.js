import React from "react";
import badge from './assets/badge.png';
import feed from './assets/feed.png';
import logo from './assets/logo.png';
import map from './assets/map.png';
import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Paths from "./paths.json";

function App() {

  const Home = () => (
    <>
      <div className="app-container">
        <header className="app-header">
          <div className="title-area">
            <h1 className="title" >Tether</h1>
            <img className="logo" src={logo} alt="Tether logo" />
          </div>
          <p className="subtitle">The shared space for your relationship.</p>
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
    </>
  );

  const NotFound = ({url}) => {
      window.location.href = url;

      return (
        <Home/>
      )
  };

  return (
    <BrowserRouter>
    <Routes>
      {Paths.map((path) => {
        return (
          <Route
            key={path.extension}
            path={path.extension}
            exact
            element={<NotFound url={path.url}/>}
          />
        );
      })}
      <Route path="/" exact element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

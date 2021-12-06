import "./App.css";

import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
/** COMPONENTS */
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;

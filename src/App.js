import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

/** COMPONENTS */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Comments from "./components/comments";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubeAPI: [],
      clear: false,
    };
  }

  clearState = () => {
    this.setState({
      clear: true,
    });
  };

  disableClear = () => {
    this.setState({
      clear: false,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar onClear={this.clearState} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home clear={this.state.clear} disableClear={this.disableClear} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;

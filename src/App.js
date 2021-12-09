import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

/** COMPONENTS */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubeAPI: [],
      clear: false,
    };
  }

  // componentDidMount() {
  //   // let userInput = this.state.userInput
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.props.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     // console.log(data)
  //     this.setState({
  //       youtubeAPI: data.snippet
  //     })
  //   })
  // }

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
    // const { videos } = this.state

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

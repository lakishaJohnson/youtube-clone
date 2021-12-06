import "./App.css";
import Comments from "./components/comments";
//import { Routes, Route, Redirect } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comments />
      </div>
    );
  }
}

export default App;

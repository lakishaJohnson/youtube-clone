import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import YouTube from "react-youtube";

/** COMPONENTS */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Comments from "./components/comments";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      youtubeAPI: [],
    }
  }
  
  componentDidMount() {
    // let userInput = this.state.userInput
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.props.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data)
      this.setState({
        youtubeAPI: data.snippet
      })
    })
  }

  render() {
    // const { videos } = this.state

    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
<<<<<<< HEAD
        <Comments />
=======

        
>>>>>>> b0ce38e1a986b6054786a710c642da797e273ed2
      </div>
    );
  }
}

export default App;

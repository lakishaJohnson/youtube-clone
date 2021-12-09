import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

/** COMPONENTS */
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      youtubeAPI: [],
    }
  }
  
  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.props.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data)
      this.setState({
        youtubeAPI: data.snippet
      })
    })
  }

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
